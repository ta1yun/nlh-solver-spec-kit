# Betting Round Completion - Generalized Concept

## Overview

In poker game trees, **chance nodes** (board card dealing) appear exactly when **betting rounds complete**. This is a fundamental pattern that applies to all poker variants (Leduc, NLH, PLO, etc.).

## The Generalized Rule

A betting round is complete when **ALL** of the following are true:

1. **All active players have equal investment** (pot is "capped")
   - For each player: `invested[player] == maxInvestment` (or player folded/all-in)

2. **Last action was passive** (check or call, not bet or raise)
   - Check: No money added to pot
   - Call: Player matched the current bet
   - NOT bet/raise: These leave an outstanding bet that must be responded to

3. **At least one action has been taken**
   - Not the initial state of the betting round
   - Someone must have acted for the round to complete

4. **Game is not terminal**
   - No one has folded to give opponent the pot
   - Not at showdown yet

## Implementation

### Leduc Hold'em

```kotlin
fun isBettingRoundComplete(): Boolean {
    if (isTerminal()) return false

    val currentHistory = if (round == 2 && '|' in history) {
        history.substringAfter("|")
    } else {
        history
    }

    if (currentHistory.isEmpty()) return false

    // Check for pot-capped patterns
    return currentHistory == "xx" ||           // Both check
           currentHistory.endsWith("bc") ||    // Bet-call
           currentHistory.endsWith("rc")       // Raise-call
}
```

**Complete patterns in Leduc:**
- `xx` - Both players check (equal investment: 1-1 or post-bet amounts)
- `bc` - Bet-call (equal investment: 3-3 in R1, 7-7 in R2)
- `brc` - Bet-raise-call (equal investment: 5-5 in R1, 11-11 in R2)
- `xbc` - Check-bet-call (same as `bc`)
- `xbrc` - Check-bet-raise-call (same as `brc`)

**Incomplete patterns:**
- `x` - One check (other player hasn't acted)
- `b` - Bet (opponent must respond)
- `br` - Bet-raise (first player must call/fold)
- `xbr` - Check-bet-raise (first player must call/fold)

### No-Limit Hold'em

```kotlin
fun isBettingRoundComplete(): Boolean {
    val activePlayers = playerStates.values.filter { !it.isFolded }

    // No actions this street - round not complete
    if (actionHistory.isEmpty()) {
        return false
    }

    // Check if all active players have matched the highest bet
    val highestBet = playerStates.values.maxOfOrNull { it.investedThisRound } ?: 0.0
    val allPlayersMatched = activePlayers
        .filter { it.canAct() || it.isAllIn }
        .all { it.investedThisRound == highestBet }

    if (!allPlayersMatched) {
        return false
    }

    // Check if all players who can act have acted at least once
    val playersWhoCanAct = activePlayers.filter { it.canAct() }.map { it.position }.toSet()
    val playersWhoActed = actionHistory.map { it.actor }.toSet()

    return playersWhoCanAct.all { it in playersWhoActed }
}
```

**NLH differences from Leduc:**
- More players (can be 2-10 instead of always 2)
- Continuous bet sizing (not fixed 2BB/4BB)
- All-in situations (player can't act further)
- More streets (preflop, flop, turn, river)

But the **core concept is the same**: betting round ends when pot is capped and last action was passive.

## Tree Structure

### Before (Flat Structure)
```javascript
{
  "r1_q_": { actions: [...], hands: [...] },
  "r1_q_b": { actions: [...], hands: [...] },
  "r1_q_bc": { actions: [...], hands: [...] },  // Should transition to R2!
  "r2_q_bc_": { actions: [...], hands: [...] },
}
```
- Manual tracking of round transitions
- Hardcoded understanding of when rounds end
- Doesn't scale to variable bet sizing

### After (Recursive Structure with Chance Nodes)
```javascript
{
  meta: { round: 1, pot: 2, ... },
  actions: ["check", "bet"],
  hands: [...],
  children: {
    bet: {
      meta: { round: 1, pot: 4, ... },
      actions: ["fold", "call", "raise"],
      children: {
        call: {
          // CHANCE NODE - betting round complete!
          chance: true,
          outcomes: [
            { board: "J♠", node: { /* R2 tree */ } },
            { board: "Q♠", node: { /* R2 tree */ } },
            { board: "K♠", node: { /* R2 tree */ } }
          ]
        }
      }
    }
  }
}
```
- Chance nodes appear naturally when `isBettingRoundComplete() == true`
- Explicit representation of round transitions
- Scales to any bet sizing (continuous or discrete)

## Why This Matters

1. **Correctness**: Ensures board cards are dealt at the right time
2. **Generalizability**: Same logic works for Leduc, NLH, PLO, etc.
3. **Validation**: Can verify tree structure programmatically
4. **On-demand solving**: Knows when to query solver for next street

## Usage in Different Contexts

### Static Tree Export
```kotlin
if (nextState.shouldTransitionToRound2()) {
    // Insert chance node with all possible board cards
    exportChanceNode(nextState, possibleBoards)
} else {
    // Continue same betting round
    exportDecisionNode(nextState)
}
```

### Dynamic Solving (API)
```kotlin
fun solveNextNode(currentState: PokerGameState, action: Action): Node {
    val nextState = currentState.applyAction(action)

    if (nextState.isBettingRoundComplete()) {
        // User must select which board card to deal
        return ChanceNode(possibleBoards)
    } else {
        // Continue solving in same betting round
        return DecisionNode(solver.solve(nextState))
    }
}
```

### UI Navigation
```javascript
const handleAction = (action) => {
    const nextNode = currentNode.children[action];

    if (nextNode.chance) {
        // Betting round complete - show board selection
        showBoardSelector(nextNode.outcomes);
    } else {
        // Continue in same betting round
        navigateToNode(nextNode);
    }
};
```

## Testing

The validation test in `GenerateTreeStructure.kt` verifies that:
- ✓ `xx`, `bc`, `brc`, `xbc`, `xbrc` are detected as complete
- ✓ `x`, `b`, `br`, `xb`, `xbr`, `` (empty) are detected as incomplete
- ✓ Chance nodes only appear when betting rounds complete

This same test pattern can be applied to NLH and other variants.

## References

- **Leduc Implementation**: `src/test/kotlin/com/nlhsolver/integration/ProperLeducWithSuitAbstraction.kt`
- **NLH Implementation**: `src/main/kotlin/com/nlhsolver/core/PokerGameState.kt`
- **Tree Export**: `src/test/kotlin/com/nlhsolver/export/GenerateTreeStructure.kt`
- **UI Viewer**: `strategy-viewer.html`
