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

## Viewer UI

### Range-Weighted Strategy Display
**Decision:** Display action frequencies weighted by range composition
**Date:** 2026-05-06
**Status:** Implemented
**Rationale:**
- Per-hand frequencies can be misleading (rare hands with aggressive strategies)
- Range-weighted aggregate shows what actually happens in equilibrium
- Critical for understanding polarized ranges (e.g., after betting actions)

**Implementation:**
- Each hand exports `rangeWeight` (normalized to sum to 1.0 per node)
- Aggregate strategy: `Σ(freq[action] × rangeWeight)` across all hands
- Toggle between per-hand view and range-weighted view

**Example:**
```
xb node (P1 check, P2 bet):
- J: weight=0.93, check=0.93 (weak hands check often)
- K: weight=0.25, check=0.25 (strong hands bet often)
- Range strategy: Check=93.5%, Bet=6.5% (J dominates the checking range)
```

**References:**
- `viewer/leduc-range-viewer.html`
- `src/test/kotlin/com/nlhsolver/export/GenerateTreeStructure.kt:computeHeroRange()`

---

### Proportional Visual Encoding
**Decision:** Scale action bar heights proportionally to range weight
**Date:** 2026-05-06
**Status:** Implemented
**Rationale:**
- Immediate visual feedback on range composition
- Rare hands (low weight) = shorter bars, common hands (high weight) = taller bars
- Generalizes perfectly to NLH and any poker variant
- Formula: `barHeight = rangeWeight × cardHeight`

**Visual design:**
- 85% opacity for translucent effect
- Smooth transitions when navigating nodes
- Exact proportionality (no minimum height) - rare hands can have very small bars

**NLH implications:**
- Same formula applies regardless of card display size
- Works for any range representation (cards, combos, buckets)

**References:**
- `viewer/leduc-range-viewer.html:LeducCard` component

---

### Range Weight Normalization
**Decision:** Normalize range weights to sum to 1.0 at each decision node
**Date:** 2026-05-06
**Status:** Implemented
**Rationale:**
- Raw equilibrium probabilities don't sum to 1.0 (filtered ranges, rounding)
- Normalized weights make percentages intuitive (sum to 100%)
- Critical for accurate aggregate strategy calculation

**Pattern:**
```kotlin
val rawWeights = hands.map { heroRange.getWeight(it) }
val total = rawWeights.sum()
val normalized = rawWeights.map { it / total }
```

**References:**
- `src/test/kotlin/com/nlhsolver/export/GenerateTreeStructure.kt:buildTreeNode()`

---

### Viewer File Separation
**Decision:** Create separate viewer files per game variant, don't modify shared templates
**Date:** 2026-05-06
**Status:** Implemented
**Rationale:**
- `strategy-viewer.html` is shared across multiple projects
- Game-specific features go in dedicated files (e.g., `leduc-range-viewer.html`)
- For NLH, iterate exclusively on externally generated UI files
- Prevents breaking changes to shared infrastructure

**Workflow:**
1. Base file: `viewer/leduc-range-viewer.html` (Leduc)
2. For major versions: create `viewer/leduc-range-viewer-v2.html` etc.
3. NLH will have its own externally generated viewer

**References:**
- `CLAUDE.md:UI/Viewer Development Rules`
- `deploy-viewer.sh` (deploys leduc-range-viewer.html as index.html)

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

## Validation: Leduc CFR vs Zig Reference

### CFR Implementation Verified Correct
**Date:** 2026-05-11
**Status:** Validated

Our `CFRSolver.kt` vanilla CFR implementation is **bit-for-bit identical** to the zig reference (`/tmp/zig-leduc-cfr`). Verified by tracing `P0:J` info set over 10 iterations — all regret and average strategy values match exactly.

**How we verified:** Compiled zig reference with tracing enabled, compared against Kotlin test output. Every decimal place matched.

---

### trainOnDeals() Convenience Method
**Date:** 2026-05-11
**Status:** Implemented

Added `CFRSolver.trainOnDeals(deals, iterations)` as the idiomatic way to train on multi-deal games. Functionally equivalent to calling `train()` per deal for vanilla CFR (regrets accumulate the same way either way), but:

- Keeps `currentIteration` consistent with the outer iteration count
- Matters for CFR+ (iteration-weighted discounting uses `currentIteration`)
- Makes training intent explicit

```kotlin
solver.trainOnDeals(allDeals, iterations = 100)
```

---

### Best Response Runs to a Fixpoint, Not a Fixed Sweep Count
**Date:** 2026-08-30
**Status:** Implemented

`bestResponseValue()` used `repeat(10)` with an `if (!changed) return@repeat` intended as an early exit. In Kotlin `return@repeat` continues the lambda rather than breaking, so the loop always ran exactly 10 sweeps and never terminated early.

**Why 10 is not an arbitrary-but-fine number.** Against a fixed opponent the best-responding player faces a finite *acyclic* MDP, so greedy improvement converges, and each sweep propagates values back exactly **one decision level**. Sweeps required is therefore bounded by the best responder's decision depth:

- Leduc: ~4 decisions → 10 sweeps was always sufficient, which is why nothing caught this
- NLH: four streets with multiple bet sizings → comfortably exceeds 10

**Why truncation is the worst possible failure for this component.** A truncated policy is not "an approximate best response" — it is an arbitrary unconverged policy, and it can be *worse* than the strategy it is meant to exploit. Since exploitability is `br_i - value_i(profile)` and the profile is itself a feasible response, `exploitability >= 0` is an invariant. A truncated best response can violate it. On a 14-level test ladder:

| | Exploitability |
|---|---|
| Old (10 sweeps, silent) | **-3.05e-5** |
| Fixed (runs to fixpoint) | 0.499969482421875 (analytically exact) |

The negative value is the *detectable* case. The dangerous case is mild truncation, which returns a small positive under-estimate that reads as healthy convergence.

**Decision:** run to an actual fixpoint. `maxPolicyIterations` (default 1000) is a cycle guard, not a tuning knob — exceeding it **throws** rather than returning a number, because convergence is guaranteed by the argument above and exhausting the cap means a bug. `lastPolicyIterationSweeps` exposes the max sweeps across both players for diagnostics.

**NLH implication:** if this ever throws on NLH, the fix is to investigate, not to raise the cap.

---

### Exploitability Accumulator Sized to numActions
**Date:** 2026-08-30
**Status:** Implemented

`InfoSetStats.valueSum` was allocated as a fixed `DoubleArray(3)` while `accumulate()` and `bestAction()` both looped to `numActions`. Any info set with 4+ actions threw `ArrayIndexOutOfBoundsException`.

Leduc and AKQ both cap at 3 actions (check/bet, fold/call/raise), so the entire test suite passed. NLH exceeds 3 as soon as the action abstraction carries more than one bet sizing.

Now sized to `numActions`. Regression test uses Rock-Paper-Scissors-Lizard-Spock as a 2-step imperfect-information game: 5 actions, uniform Nash, game value 0 — an analytically known answer rather than a golden number.

**Pattern worth repeating:** both of these bugs were invisible in the validation games and fatal in the target game. When a component is validated only on Leduc/AKQ, ask specifically what those games *cannot* exercise — action count, tree depth, chance-node structure.

---

### Bug: Exploitability Calculator Ignored Info Set Constraint
**Date:** 2026-05-11
**Status:** Fixed (complete rewrite)

**Symptom:** Exploitability showed ~67% after 100 iterations where zig showed 6%.

**Root cause:** `computeBestResponse()` was greedily maximizing per game state. This is wrong for imperfect information games — the best responder must choose the **same action** for all game states within the same info set (they can't see the opponent's hidden cards).

**Zig's correct algorithm (policy iteration):**
1. For each deal, traverse the tree and accumulate action values at each BR player info set, weighted by **opponent reach probability**
2. After all deals, pick the best action per info set (weighted average across all states in that info set)
3. Repeat until the policy converges (≤10 iterations for Leduc)
4. Final evaluation using converged policy

**Our wrong algorithm:**
- At each BR player node: `maxValue = max(actionValue0, actionValue1, ...)` — ignores that the same info set may appear with different card combinations requiring a consistent choice.

**Fix:** Rewrote `ExploitabilityCalculator` to use zig's policy iteration approach. Key change: accumulate `InfoSetStats` (action values × opponent reach) across all deals, then pick best action per info set after seeing all deals.

**Results after fix:**
| Iters | Ours | Zig |
|-------|------|-----|
| 100 | 6.09% (30.5 mbb/g) | 6.09% (30.45 mbb/g) ✓ |
| 300 | 2.92% (14.6 mbb/g) | 2.92% (14.58 mbb/g) ✓ |
| 1000 | 1.42% (7.1 mbb/g) | 1.39% (6.96 mbb/g) ✓ |

**References:**
- `src/main/kotlin/com/nlhsolver/core/ExploitabilityCalculator.kt`
- `src/main/kotlin/com/nlhsolver/core/CFRSolver.kt:trainOnDeals()`
- Zig reference: `/tmp/zig-leduc-cfr/src/leduc/play.zig:bestResponseValue()`

---

### CFR+ Underperforms Vanilla CFR on Leduc (Expected, Not a Bug)
**Date:** 2026-05-11
**Status:** Investigated, documented

Benchmarked three variants on Leduc (120 deals, vanilla traversal mode):

| Iters | Vanilla | RM+ only | Full CFR+ |
|-------|---------|----------|-----------|
| 10    | 34.75%  | 29.11%   | 19.51%    |
| 100   | 6.09%   | 7.60%    | 6.59%     |
| 1000  | 1.42%   | 2.98%    | 2.37%     |
| 10000 | 0.47%   | 1.06%    | 0.79%     |

**Root cause of RM+ underperformance:**
- Vanilla CFR allows negative regrets to accumulate, acting as persistent memory of which actions are bad
- RM+ (flooring negatives to 0) erases this memory, causing re-exploration of already-identified bad actions
- For small games like Leduc with clean equilibrium structure, this memory helps convergence
- Linear averaging partially compensates (full CFR+ beats RM+ only) by down-weighting early noisy strategies, but doesn't overcome the re-exploration cost

**Why CFR+ is still correct to use for NLH:**
- Large games: negative regrets can become enormous (-10000s), unfairly blocking potentially good actions
- RM+ prevents this asymmetric "lock-out" effect in sparse, high-dimensional info set spaces
- Linear averaging matters more for NLH where early strategies are very noisy (unexplored tree)
- Validate CFR+ on NLH once blueprint training is implemented

**Implication:** Use vanilla CFR for Leduc validation tests (matches zig reference). Use CFR+ for NLH production blueprint solving (verify empirically once implemented).

Added `linearAveraging: Boolean = enableCFRPlus` parameter to `CFRSolver` to allow independent control of RM+ and linear averaging.

**References:**
- `src/test/kotlin/com/nlhsolver/integration/CFRPlusBenchmarkTest.kt`
- `src/main/kotlin/com/nlhsolver/core/CFRSolver.kt`

---

## Update Log

- **2026-08-30:** Exploitability calculator hardened for NLH; Leduc consolidated on `LeducState`
  - Best response now runs to a fixpoint (was a fixed 10 sweeps that silently under-reported on deep games)
  - Accumulator sized to `numActions` (was a fixed cap of 3, fatal for NLH bet sizings)
  - Zig comparison converted from a printout to assertions; AKQ test now runs over all deals
    (the single-deal version was degenerate — one state per info set makes a clairvoyant
    best response indistinguishable from a correct one, so it passed regardless)
  - Deleted `LeducWithSuitAbstraction`, `LeducWithChanceNodes`, a shadowing duplicate class,
    and `examples/leduc` (infinite recursion + wrong round-2 fold payouts)

- **2026-05-11:** CFR+ vs vanilla CFR benchmark on Leduc
  - Found RM+ flooring is primary cause of CFR+ underperformance on Leduc (not linear averaging)
  - Documented this as expected behavior for small games, not a bug
  - Added `linearAveraging` parameter to CFRSolver to allow independent control
  - Recommendation: vanilla CFR for Leduc validation, CFR+ for NLH blueprint

- **2026-05-11:** Leduc CFR validation against zig reference
  - Confirmed CFR algorithm is correct (traces match zig exactly)
  - Added trainOnDeals() convenience method for multi-deal training
  - Rewrote exploitability calculator with policy iteration (was greedy per-state, now correct per-info-set)
  - Now matches zig exploitability within noise at all checkpoints

- **2026-05-06:** Range-weighted viewer implementation
  - Added range-weighted strategy display decision
  - Added proportional visual encoding (bar heights)
  - Added range weight normalization pattern
  - Added viewer file separation workflow
  - Documented generalized principles for NLH

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
