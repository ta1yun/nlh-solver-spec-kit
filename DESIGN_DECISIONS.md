# Design Decisions Index

**Purpose:** Quick reference for all major design decisions in the NLH solver project.

Each entry links to detailed documentation and explains the rationale.

---

## Core Architecture

### CFR Algorithm Choice
**Decision:** Use CFR+ (Regret Matching+) with optional linear discounting
**Status:** Implemented
**Rationale:**
- CFR+ converges faster than vanilla CFR by flooring negative regrets at 0
- Linear discounting disabled by default due to convergence issues
- Generalizes to any sequential game via `GameState` interface

**References:**
- `src/main/kotlin/com/nlhsolver/core/CFRSolver.kt`

---

### Game Tree Representation
**Decision:** Recursive tree structure instead of flat scenario list
**Date:** 2026-04-28
**Status:** Implemented
**Rationale:**
- Flat scenarios don't scale to NLH (exponential blowup)
- Recursive structure enables dynamic navigation
- Each node contains children, making traversal simple
- Chance nodes appear when betting rounds complete

**References:**
- `src/test/kotlin/com/nlhsolver/export/GenerateTreeStructure.kt`
- Commit: `b02a600`

---

### Betting Round Completion Detection
**Decision:** Generalized `isBettingRoundComplete()` method
**Date:** 2026-04-28
**Status:** Implemented
**Rationale:**
- Detects when pot is "capped" (all players matched) AND last action was passive (check/call)
- Works for Leduc, NLH, PLO without game-specific logic
- Critical for knowing when to insert chance nodes (board dealing)

**Pattern:**
```kotlin
fun isBettingRoundComplete(): Boolean {
    return potCapped() && lastActionWasPassive() && actionsWereTaken()
}
```

**References:**
- `BETTING_ROUND_COMPLETION.md`
- `src/main/kotlin/com/nlhsolver/integration/LeducWithSuitAbstraction.kt`
- Commit: `7ef6f6a`

---

## EV Calculation

### Equilibrium-Based EV Calculation
**Decision:** Compute EVs during export using equilibrium strategy, not during solve
**Date:** 2026-04-28
**Status:** Implemented
**Rationale:**
- Solver doesn't store EVs (only cumulative regrets and strategies)
- EVs change every iteration - which iteration's EV would we save?
- Computing on-demand during export uses final equilibrium (most accurate)
- Single tree traversal per hand is fast enough for Leduc
- For NLH blueprints, may want post-training evaluation pass (see note in code)

**Pattern:**
```kotlin
fun calculateEV(state, heroCard, profile): Double {
    // Walk tree using equilibrium strategies
    // At terminals, return payoff
    // At decisions, weighted average over actions
    // At chance nodes, average over outcomes
}
```

**References:**
- `src/test/kotlin/com/nlhsolver/export/GenerateTreeStructure.kt:calculateEV()`
- Commit: `691e666`

---

### Abstraction Consistency in EV Calculation
**Decision:** Always filter by abstract classes (ranks/buckets), never by specific cards
**Date:** 2026-04-28
**Status:** Implemented
**Rationale:**
- Comparing card indices breaks suit abstraction symmetry
- K♠ (index 4) and K♥ (index 5) must have identical EVs
- Must compare ranks (card / 2), not indices
- Generalizes to NLH: compare bucket IDs, not card combinations

**Critical bugs fixed:**
1. ❌ `if (boardCard == heroCard)` → ✅ `if (boardCard/2 == heroCard/2)`
2. ❌ Pre-flop EV conditioned on specific board → ✅ Average over all boards

**References:**
- `ABSTRACTION_CONSISTENCY.md` (comprehensive guide)
- Commits: `6ef3085`, `5e09981`

**NLH implications:**
- Pre-flop: A♠K♠ and A♥K♥ must have identical EVs
- Flop: Same hand class on similar board textures must have identical EVs
- Always test symmetry: `assert(EV(A♠K♠) == EV(A♥K♥))`

---

## Suit Abstraction

### Leduc Suit Abstraction
**Decision:** Treat same-rank cards as strategically equivalent (J♠ ≅ J♥)
**Status:** Implemented
**Rationale:**
- Reduces info sets from 936 to 288 (3x reduction)
- No strategic difference between suits in Leduc
- Critical: must be consistent throughout (info sets, strategies, EV calculation)

**Info set format:**
- Round 1: `"K "` (rank only, no suit)
- Round 2: `"KQ xbrcdx"` (rank+board, no dash, full history with d separator)

**References:**
- `src/main/kotlin/com/nlhsolver/integration/LeducWithSuitAbstraction.kt:getCanonicalHand()`
- Info set format fixed in commit `b02a600`

---

### NLH Pre-Flop Suit Isomorphism
**Decision:** (Planned) Use suit isomorphism for pre-flop hand classes
**Status:** Design only
**Rationale:**
- Pre-flop, A♠K♠ ≅ A♥K♥ ≅ A♦K♦ ≅ A♣K♣ (all are "AKs")
- 1326 combos → 169 hand classes (7.8x reduction)
- Post-flop, suits matter for flush possibilities (need board texture abstraction)

**References:**
- `ABSTRACTION_CONSISTENCY.md` - Principle 1

---

## Strategy Export

### Tree Export Format
**Decision:** JavaScript object with recursive structure
**Status:** Implemented
**Format:**
```javascript
{
  meta: { round, pot, toCall, board },
  actions: ["fold", "call", "raise"],
  hands: [
    { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.69,
      freq: { fold: 0.0, call: 0.3, raise: 0.7 } }
  ],
  children: {
    fold: { terminal: true },
    call: { chance: true, outcomes: [...] },
    raise: { ... }
  }
}
```

**Rationale:**
- Easy to navigate in browser (just follow `node.children.bet.children.call`)
- Includes metadata for UI (pot size, actions available)
- Strategies shown for each hand at each node
- EV and equity included for analysis

**References:**
- `leduc-tree.js` (generated output)
- `strategy-viewer-tree.html` (interactive viewer)

---

## Information Hiding

### Don't Condition on Future Information
**Decision:** EVs must only use information available at decision point
**Date:** 2026-04-28
**Status:** Implemented
**Principle:**
- Pre-flop: Average over ALL possible flops (or flop buckets)
- Flop: Average over ALL possible turns (or turn buckets)
- Never "peek" at future streets

**Example bug:**
```kotlin
// WRONG: Pre-flop EV knows the board will be Q
boardCard = Q  // in Round 1

// RIGHT: Pre-flop EV averages over all boards
boardCard = -1  // unknown in Round 1
for (board in [J, Q, K]) { ... }
```

**References:**
- `ABSTRACTION_CONSISTENCY.md` - Principle 2
- Commit: `6ef3085`

---

## Testing Strategy

### Symmetry Testing for Abstraction
**Decision:** Always test that strategically equivalent hands have identical EVs
**Status:** Recommended practice
**Pattern:**
```kotlin
test("Same-rank cards have identical EVs") {
    val kSpade = calculateEV(cardIdx = 4, ...)
    val kHeart = calculateEV(cardIdx = 5, ...)
    assert(abs(kSpade - kHeart) < 0.001)
}
```

**Rationale:**
- Catches abstraction bugs early
- If K♠ ≠ K♥, you're leaking card-specific information
- Generalizes to NLH: test all combos in same hand class

**References:**
- `ABSTRACTION_CONSISTENCY.md` - Principle 3

---

## Future Decisions (Planned)

### NLH Blueprint Abstraction Strategy
**Status:** Design phase
**Open questions:**
- Pre-flop: 169 hand classes or coarser bucketing?
- Flop: How many board texture buckets?
- Turn/River: Equity-based bucketing? How many bins?
- Trade-off: Abstraction granularity vs memory/compute

### NLH EV Pre-computation
**Status:** Design phase
**Options:**
1. On-demand (current Leduc approach): Compute during export
2. Post-training evaluation: One pass after solving to compute all EVs
3. During training: Store EVs alongside strategies (memory intensive)

**Recommendation:** Start with on-demand, add post-training evaluation if export becomes bottleneck

**References:**
- `ABSTRACTION_CONSISTENCY.md` - NLH Optimization note in code comments

---

## Update Log

- **2026-04-28:** Initial creation
  - Added betting round completion, EV calculation, abstraction consistency
  - Added Leduc suit abstraction and tree export decisions
  - Documented symmetry testing practices

---

## How to Use This Document

**When making a new design decision:**
1. Add entry with date, status, rationale
2. Link to detailed docs if complex
3. Include code examples or patterns
4. Note any NLH implications

**When implementing NLH features:**
1. Scan relevant sections (abstraction, EV calculation, etc.)
2. Follow established patterns
3. Reference detailed docs for nuances
4. Update this index with new decisions

**When debugging:**
1. Check if similar decision was made before
2. Review rationale - might reveal the bug
3. Look at referenced commits for working examples
