# Abstraction Consistency in Poker Solvers

**Date:** 2026-04-28
**Context:** EV calculation bugs in Leduc export revealed generalizable lessons for NLH

## Summary

When implementing EV calculations with hand/board abstraction, two critical bugs were discovered in the Leduc tree export that reveal fundamental principles for NLH solver design:

1. **Filter by abstract classes, not specific cards** - Comparing card indices instead of ranks broke suit abstraction symmetry
2. **Don't condition on future information** - Pre-flop EVs were incorrectly conditioned on specific boards

## Bug 1: Broken Suit Abstraction Symmetry

### The Problem

Same-rank cards had different EVs due to index-based filtering:
- K♠ (index 4): EV = 0.38
- K♥ (index 5): EV = 1.48

### Root Cause

```kotlin
// WRONG: Compares specific card indices
if (boardCard == heroCard) continue
```

Board card indices are always even (J=0, Q=2, K=4), so odd card indices (K♥=5) never matched and weren't filtered correctly.

### The Fix

```kotlin
// RIGHT: Compares abstract ranks
val heroRank = heroCard / 2
val boardRank = boardCard / 2
if (boardRank == heroRank) continue
```

### Result

All same-rank cards now have identical EVs:
- K♠ = K♥ = 2.69 ✓
- Q♠ = Q♥ = -1.37 ✓
- J♠ = J♥ = -1.13 ✓

## Bug 2: Information Leakage from Future Streets

### The Problem

Pre-flop EVs were different across the J, Q, K trees because each tree's Round 1 state was initialized with a specific board:

```kotlin
val initialState = LeducWithSuitAbstraction(
    boardCard = boardCard,  // Set to Q even in Round 1!
    round = 1,
    ...
)
```

### The Fix

```kotlin
val initialState = LeducWithSuitAbstraction(
    boardCard = -1,  // Unknown in Round 1
    round = 1,
    ...
)

// In calculateEV:
if (round == 1 && boardCard == -1) {
    // Average over all possible board outcomes
    for (board in listOf("J", "Q", "K")) {
        // ... compute EV for each board and average
    }
}
```

### Result

All three trees now show identical pre-flop EVs (correct - board isn't dealt yet).

## Generalizable Lessons for NLH

### Principle 1: Abstraction Consistency

**Always compare bucket IDs, not specific card combinations.**

When using hand bucketing (e.g., AKs, AKo, pairs):
- A♠K♠ and A♥K♥ are both in the "AKs" bucket → must have identical EVs
- Any code that compares, filters, or iterates over cards should operate on bucket IDs

**Example pattern:**

```kotlin
// WRONG: Compares specific hole cards
if (board.contains(heroCard1) || board.contains(heroCard2)) continue

// RIGHT: Compares abstract hand classes
val heroBucket = handAbstraction.getBucket(heroCard1, heroCard2)
val boardBucket = boardAbstraction.getBucket(board)
if (heroBucket.conflictsWith(boardBucket)) continue
```

**Pre-flop hand abstraction:**
```kotlin
// Compare by hand class (pairs, suited, offsuit)
val heroClass = getHandClass(card1, card2)  // e.g., "AKs"
val oppClass = getHandClass(oppCard1, oppCard2)

// Filter opponent range by class, not specific cards
val validOpponents = allHandClasses.filter {
    !it.conflictsWith(heroClass)
}
```

**Post-flop hand abstraction:**
```kotlin
// Compare by bucket (flush draws, sets, equity bins, etc.)
val heroBucket = getBucket(heroHand, board)
val oppBucket = getBucket(oppHand, board)

// Iterate over buckets, not specific hands
for (oppBucket in allBuckets) {
    if (oppBucket.conflictsWith(heroBucket)) continue
    // ... compute EV vs this bucket
}
```

### Principle 2: Information Hiding

**Don't condition on information not yet revealed.**

- **Pre-flop EVs** must average over all possible flops (or flop buckets)
- **Flop EVs** must average over all possible turns (or turn buckets)
- Only condition on information actually available at that decision point

**Example NLH computation:**

```kotlin
fun calculatePreflopEV(heroHand: Hand, profile: StrategyProfile): Double {
    var totalEV = 0.0
    var flopCount = 0

    // Average over all possible flop buckets
    for (flopBucket in flopAbstraction.getAllBuckets()) {
        // Skip flops that use hero's cards
        if (flopBucket.conflictsWith(heroHand)) continue

        // Compute EV given this flop outcome
        val flopEV = calculateFlopEV(heroHand, flopBucket, profile)
        totalEV += flopEV
        flopCount++
    }

    return totalEV / flopCount
}

fun calculateFlopEV(heroHand: Hand, flop: Flop, profile: StrategyProfile): Double {
    // Similar pattern - average over all turn buckets
    // Then average over all river buckets
    // Only condition on streets that are already dealt
}
```

### Principle 3: Symmetry Testing

**Test that strategically equivalent hands have identical EVs.**

This is a powerful sanity check for abstraction bugs:

```kotlin
test("Same-class hands have identical pre-flop EVs") {
    val aksHands = listOf(
        Hand("A♠K♠"), Hand("A♥K♥"), Hand("A♦K♦"), Hand("A♣K♣")
    )

    val evs = aksHands.map { calculatePreflopEV(it, profile) }

    // All AKs combos should have identical EV
    for (ev in evs) {
        assert(abs(ev - evs[0]) < 0.001) {
            "Suit abstraction broken: AKs combos have different EVs"
        }
    }
}

test("Pre-flop EVs don't leak flop information") {
    // Compute EV multiple times with different random seeds
    val ev1 = calculatePreflopEV(Hand("AKs"), profile, seed = 1)
    val ev2 = calculatePreflopEV(Hand("AKs"), profile, seed = 2)

    // Should be identical (not dependent on specific flop sampling)
    assert(abs(ev1 - ev2) < 0.001) {
        "Pre-flop EV varies with flop sampling - information leak detected"
    }
}
```

## Implementation Checklist

When implementing EV calculation for NLH:

- [ ] **Hand abstraction**: Compare hand classes/buckets, not specific cards
- [ ] **Board abstraction**: Compare board buckets, not specific boards
- [ ] **Opponent ranges**: Iterate over abstract opponent holdings, not all combos
- [ ] **Information hiding**: Average over all future street possibilities
- [ ] **Symmetry tests**: Verify same-class hands have identical EVs
- [ ] **No information leakage**: Pre-flop doesn't see flop, flop doesn't see turn, etc.

## References

- Commit: `5e09981` - Fix EV calculation to use rank-based filtering for suit abstraction
- Commit: `6ef3085` - Fix pre-flop EV calculation to average over all possible boards
- Commit: `691e666` - Add proper EV calculation to tree export using equilibrium strategy

## Related Concepts

- **Suit isomorphism**: In pre-flop NLH, A♠K♠ ≅ A♥K♥ ≅ A♦K♦ ≅ A♣K♣
- **Board texture abstraction**: Group similar boards into buckets (e.g., "monotone flush board")
- **Hand strength bucketing**: Group hands by equity/showdown value
- **Imperfect recall**: Abstraction intentionally "forgets" card-specific details

## Key Takeaway

**Think in terms of abstract classes (buckets, hand types), not specific cards.**

When your abstraction says "these two hands are strategically equivalent," your code must treat them identically throughout—in filtering, comparison, EV calculation, and strategy lookup. Any deviation is a bug that breaks the abstraction.
