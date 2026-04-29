# Range-Based EV Calculation Design

**Goal:** Implement range-aware EV calculation for Leduc as POC, using interfaces that generalize to NLH.

## Problem Statement

Current implementation computes EV vs **uniform** opponent range:
- Treats all opponent cards as equally likely
- Doesn't reflect equilibrium range distributions
- Shows incorrect per-action EVs (e.g., J bet looks worse than check)

**Solution:** Track and propagate ranges through the game tree.

## Interface Design (Game-Agnostic)

### Core Abstractions

```kotlin
/**
 * Represents a player's hand in any poker variant.
 * Generalizes across Leduc (single card), NLH (two cards), PLO (four cards).
 */
interface Hand {
    /** Unique identifier for this hand (e.g., "Ka", "AKs", "AA72s") */
    val id: String

    /** Check if this hand conflicts with another (can't both be dealt) */
    fun conflicts(other: Hand): Boolean

    /** Check if this hand conflicts with board cards */
    fun conflictsWithBoard(board: Board): Boolean
}

/**
 * Represents a probability distribution over hands.
 * Tracks how often each hand reaches a specific game tree node.
 */
interface Range {
    /** Get probability weight for a specific hand (0.0 = never, 1.0 = always) */
    fun getWeight(hand: Hand): Double

    /** Get all hands with non-zero weight */
    fun getActiveHands(): List<Pair<Hand, Double>>

    /** Total weight (sum of all hand weights, for normalization) */
    fun getTotalWeight(): Double

    /** Create a new range by filtering out conflicting hands */
    fun excluding(hand: Hand): Range
    fun excluding(board: Board): Range
}

/**
 * Propagates a range through a game tree action.
 *
 * When a player takes an action, their range changes based on how often
 * each hand takes that action according to equilibrium strategy.
 */
interface RangePropagator {
    /**
     * Compute new range after taking an action.
     *
     * For each hand in current range:
     *   newWeight[hand] = currentWeight[hand] × strategy[hand, action]
     *
     * This models: "If I had this hand, how often would I take this action?"
     */
    fun propagate(
        currentRange: Range,
        action: GameAction,
        state: GameState,
        profile: StrategyProfile
    ): Range
}
```

## Leduc Implementation

### LeducHand

```kotlin
data class LeducHand(val cardIdx: Int) : Hand {
    override val id: String = when(cardIdx) {
        0 -> "Ja"; 1 -> "Jb"; 2 -> "Qa"; 3 -> "Qb"; 4 -> "Ka"; 5 -> "Kb"
        else -> "?"
    }

    val rank: Int = cardIdx / 2  // 0=J, 1=Q, 2=K
    val suit: String = if (cardIdx % 2 == 0) "♠" else "♥"

    override fun conflicts(other: Hand): Boolean {
        // In Leduc with suit abstraction, only same-rank hands conflict
        return (other as LeducHand).rank == this.rank
    }

    override fun conflictsWithBoard(board: Board): Boolean {
        val leducBoard = board as LeducBoard
        if (leducBoard.cardIdx == -1) return false  // No board yet
        return this.rank == (leducBoard.cardIdx / 2)
    }
}
```

### LeducRange

```kotlin
class LeducRange(
    private val weights: Map<Int, Double>  // cardIdx -> weight
) : Range {

    override fun getWeight(hand: Hand): Double {
        val cardIdx = (hand as LeducHand).cardIdx
        return weights.getOrDefault(cardIdx, 0.0)
    }

    override fun getActiveHands(): List<Pair<Hand, Double>> {
        return weights
            .filter { it.value > 0.0 }
            .map { (cardIdx, weight) -> LeducHand(cardIdx) to weight }
    }

    override fun getTotalWeight(): Double = weights.values.sum()

    override fun excluding(hand: Hand): Range {
        val excludedRank = (hand as LeducHand).rank
        val filtered = weights.filterKeys { (it / 2) != excludedRank }
        return LeducRange(filtered)
    }

    override fun excluding(board: Board): Range {
        val excludedRank = ((board as LeducBoard).cardIdx / 2)
        val filtered = weights.filterKeys { (it / 2) != excludedRank }
        return LeducRange(filtered)
    }

    companion object {
        /** Create uniform range (all hands equally likely) */
        fun uniform(): LeducRange {
            return LeducRange((0..5).associateWith { 1.0 })
        }

        /** Create starting range for Leduc (ante posted, no actions yet) */
        fun starting(): LeducRange {
            // In Leduc, both players start with all hands possible
            return uniform()
        }
    }
}
```

### LeducRangePropagator

```kotlin
class LeducRangePropagator : RangePropagator {
    override fun propagate(
        currentRange: Range,
        action: GameAction,
        state: GameState,
        profile: StrategyProfile
    ): Range {
        val leducState = state as LeducWithSuitAbstraction
        val newWeights = mutableMapOf<Int, Double>()

        val actions = leducState.getLegalActions()
        val actionIndex = actions.indexOfFirst { it.getActionId() == action.getActionId() }
        if (actionIndex == -1) {
            throw IllegalArgumentException("Action not legal at this state")
        }

        // For each hand in the range
        for ((hand, weight) in currentRange.getActiveHands()) {
            val leducHand = hand as LeducHand

            // Get this hand's strategy at this state
            val infoSet = getInfoSetForHand(leducState, leducHand)
            val strategy = try {
                profile.getInfoSetStrategy(infoSet, actions.size).getAverageStrategy()
            } catch (e: Exception) {
                // If no strategy found, assume uniform
                DoubleArray(actions.size) { 1.0 / actions.size }
            }

            // New weight = old weight × frequency of taking this action
            val actionFreq = strategy[actionIndex]
            newWeights[leducHand.cardIdx] = weight * actionFreq
        }

        return LeducRange(newWeights)
    }

    private fun getInfoSetForHand(
        state: LeducWithSuitAbstraction,
        hand: LeducHand
    ): String {
        val rank = when(hand.rank) {
            0 -> "J"; 1 -> "Q"; 2 -> "K"; else -> "?"
        }

        val history = state.history.replace("|", "d")

        return if (state.round == 1) {
            "$rank $history"
        } else {
            val boardRank = when(state.boardCard / 2) {
                0 -> "J"; 1 -> "Q"; 2 -> "K"; else -> "?"
            }
            "$rank$boardRank $history"
        }
    }
}
```

## Range-Aware EV Calculation

```kotlin
/**
 * Calculate EV using opponent's equilibrium range distribution.
 *
 * This is the CORRECT way to compute EVs in poker - it accounts for
 * how opponent's range changes based on their equilibrium play.
 */
fun calculateEVWithRange(
    state: LeducWithSuitAbstraction,
    heroHand: Hand,
    opponentRange: Range,
    boardCard: Int,
    boardName: String,
    profile: StrategyProfile,
    heroPlayer: Int
): Double {
    val heroIsP1 = (heroPlayer == 0)

    // Filter out hands that conflict with hero or board
    val validOpponentRange = opponentRange
        .excluding(heroHand)
        .excluding(LeducBoard(boardCard))

    // Weight EV by opponent's range distribution
    var totalEV = 0.0
    var totalWeight = 0.0

    for ((oppHand, weight) in validOpponentRange.getActiveHands()) {
        if (weight <= 0.0) continue

        val oppCardIdx = (oppHand as LeducHand).cardIdx
        val heroCardIdx = (heroHand as LeducHand).cardIdx

        val (p1Card, p2Card) = if (heroIsP1) {
            Pair(heroCardIdx, oppCardIdx)
        } else {
            Pair(oppCardIdx, heroCardIdx)
        }

        val matchupEV = calculateEVForMatchup(
            state, p1Card, p2Card, boardCard, boardName,
            profile, heroIsP1, mutableSetOf()
        )

        totalEV += weight * matchupEV
        totalWeight += weight
    }

    return if (totalWeight > 0.0) totalEV / totalWeight else 0.0
}
```

## Usage Example

```kotlin
// Start with uniform range
var p2Range = LeducRange.uniform()

// P1 checks
p2Range = propagator.propagate(p2Range, CheckAction, stateAfterP1Check, profile)
// Now p2Range is weighted by how often each hand checks

// P2 bets
val stateAfterP2Bet = stateAfterP1Check.applyAction(BetAction)
var p1Range = propagator.propagate(LeducRange.uniform(), CheckAction, initialState, profile)
p1Range = propagator.propagate(p1Range, FacingBetAction, stateAfterP2Bet, profile)

// Calculate EV for P1 with King facing P2's bet
val kingEV = calculateEVWithRange(
    state = stateAfterP2Bet,
    heroHand = LeducHand(4),  // Ka
    opponentRange = p2Range,   // P2's range after betting
    profile = profile
)
```

## Expected Results

With range-aware calculation, we should see:

**Before (uniform):**
```
J at root: check -1.07, bet -1.81 (bet looks worse)
```

**After (range-aware):**
```
J at root: check -X.XX, bet -X.XX (should be closer, possibly indifferent)
```

The equilibrium mixing should make more sense when EVs account for opponent's equilibrium range.

## Implementation Plan

1. **Create interface definitions** (`Hand`, `Range`, `RangePropagator`)
2. **Implement Leduc versions** (`LeducHand`, `LeducRange`, `LeducRangePropagator`)
3. **Add range-aware EV calculation** (`calculateEVWithRange`)
4. **Compare uniform vs range-based EVs** (export both, show difference)
5. **Export ranges alongside strategies** (for UI visualization)
6. **Document generalization to NLH** (what changes, what stays same)

## Generalization to NLH

**What stays the same:**
- `Hand`, `Range`, `RangePropagator` interfaces
- Range propagation algorithm
- Range-aware EV calculation logic

**What changes:**
- `NLHHand(card1: Card, card2: Card)` instead of `LeducHand(cardIdx: Int)`
- `NLHRange` tracks 1,326 combos instead of 6 cards
- Conflict checking uses card blocking (e.g., hero has A♠, can't face A♠Kx)
- Board has 3-5 cards instead of 1
- Info set format changes (but propagation logic stays same)

## Benefits

1. **Correct EVs:** Per-action EVs reflect true equilibrium values
2. **Validates equilibrium:** If bet looks worse but equilibrium bets, we see why
3. **Range visualization:** Can show "P1's range after check-raise on Q72r"
4. **NLH ready:** Interfaces designed for generalization
5. **Educational:** Shows how ranges evolve through game tree
