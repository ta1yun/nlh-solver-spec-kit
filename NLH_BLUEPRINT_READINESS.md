# NLH Blueprint Readiness Assessment

**Date:** 2026-05-07
**Updated:** 2026-08-30 (exploitability calculator NLH-readiness)
**Context:** After Phase 1 refactoring (EVCalculator + TreeBuilder abstractions)

---

## Current State

### ✅ Already Implemented

**Core Infrastructure:**
- `GameState` interface - Generic, works for any game
- `CFRSolver` - Proven with Leduc (5M iterations, converges)
- `StrategyProfile` - ConcurrentHashMap with per-info-set locking
- `ExploitabilityCalculator` - Game-agnostic **and now NLH-safe** (see below)

### 2026-08-30: Exploitability calculator made NLH-safe

`ExploitabilityCalculator` was marked "game-agnostic" but contained two defects that Leduc and AKQ structurally could not expose. Both are fixed; both are worth understanding, because the *pattern* will recur.

| Defect | Leduc/AKQ behaviour | NLH behaviour |
|--------|--------------------|---------------|
| Accumulator fixed at `DoubleArray(3)` | Fine — both games cap at 3 actions | `ArrayIndexOutOfBoundsException` on any info set with 4+ actions, i.e. as soon as the action abstraction has >1 bet sizing |
| Best response capped at 10 policy-iteration sweeps | Fine — Leduc is ~4 decisions deep | **Silently under-reports.** Sweeps needed is bounded by the best responder's decision depth; four streets with multiple sizings exceeds 10 |

The second is the more dangerous one. A truncated best response is not an approximation — it is an unconverged policy that can be weaker than the profile it is exploiting, producing a *flatteringly low* exploitability number. It now throws rather than returning a number; if it throws on NLH, investigate rather than raising `maxPolicyIterations`.

**Validation state:** matches the zig reference within 0.25pp at 100/300/1000 iterations (now asserted, previously eyeballed), converges at the O(1/√T) rate CFR's regret bound predicts, and reports 0.458 for a uniform AKQ profile.

**Transferable lesson:** when a shared component is validated only against Leduc/AKQ, enumerate what those games *cannot* exercise — action count, tree depth, chance-node placement, number of streets — and test those axes directly. Both bugs sat behind a fully green suite.

**Poker Domain:**
- `PokerGameState` - Implements GameState for NLH
- `Card`, `HandEvaluator`, `HandRank` - 5-card evaluation
- `Street` enum (PREFLOP, FLOP, TURN, RIVER)
- `Position`, `Action` classes
- `EquityCalculator` - Hand vs hand/range equity

**Abstraction Layer:**
- `PreflopBuckets` - 169 canonical hands → buckets
- `CoarsePreflopBucketing` - Coarse bucketing implementation
- `PostflopBucketing` - Interface for flop/turn/river
- `BoardCanonicalizer` - Board isomorphism (22,100 → 1,755)
- `SuitIsomorphism` - Suit mapping utilities
- `BoardClustering`, `RiverClustering`, `TurnClustering` - Postflop bucketing

**New Abstractions (Phase 1):**
- `EVCalculator<S, H>` interface - Generic EV calculation
- `BaseEVCalculator<S, H>` - Reusable tree traversal (185 lines)
- `TreeBuilder<S, H>` interface - Generic tree export
- `BaseTreeBuilder<S, H>` - Reusable traversal (165 lines)

---

## ⚠️ What Needs to Be Done

### Known failing tests (as of 2026-08-30)

A targeted sweep (core, examples, regression, range, solver, zig comparison) is **197 passed / 7 failed**. All 7 predate the 2026-08-30 work — verified by re-running with those changes stashed. Three are directly on the NLH path:

| Test | Symptom |
|------|---------|
| `solver.BlueprintSolverTest > toSolveConfiguration() should use looser convergence (T132)` | pre-existing |
| `solver.BlueprintSolverTest > estimateSolveTime() should provide reasonable estimates` | pre-existing |
| `solver.RangeExtractionTest > should extract BTN opening range (T134, T137, T138)` | pre-existing |

The other four are Leduc-side (tree validation, a history-separator expectation, two `LeducHand`/`LeducRange` assertions) and documented in `docs/leduc/README.md`.

`NLHState` does not exist yet — it is referenced in comments only. Until it does, NLH-shaped properties of shared components have to be tested with synthetic fixtures (the calculator's 5-action and deep-tree regression tests do this).

### Critical Path (MVP)

#### 1. NLH-Specific Implementations (High Priority)

**NLHHand** (~50 lines)
```kotlin
data class NLHHand(val card1: Card, val card2: Card) : Hand {
    override val id: String = // "AKs", "72o", etc.
    override fun conflicts(other: Hand): Boolean {
        // Check if any cards overlap
    }
}
```

**Status:** Does NOT exist
**Blocks:** NLH range system, EV calculation

---

**NLHRange** (~150 lines)
```kotlin
class NLHRange(private val weights: Map<NLHHand, Double>) : Range {
    override fun getWeight(hand: Hand): Double
    override fun getActiveHands(): List<Pair<Hand, Double>>
    override fun getTotalWeight(): Double
    override fun excluding(hand: Hand): Range

    companion object {
        fun uniform(): NLHRange // All 1326 combos
        fun fromBuckets(buckets: Map<Int, Double>): NLHRange
    }
}
```

**Status:** Does NOT exist
**Blocks:** NLH range propagation, EV calculation

---

**NLHRangePropagator** (~100 lines)
```kotlin
class NLHRangePropagator : RangePropagator {
    override fun propagate(
        currentRange: Range,
        action: GameAction,
        state: GameState,
        profile: StrategyProfile
    ): Range {
        // Similar to LeducRangePropagator but for NLH
        // Gets strategy for each hand, multiplies by action frequency
    }
}
```

**Status:** Does NOT exist
**Blocks:** Range-weighted EV, tree export with ranges

---

#### 2. Extend Phase 1 Abstractions (Medium Priority)

**NLHEVCalculator** (~75 lines - EASY with BaseEVCalculator!)
```kotlin
class NLHEVCalculator : BaseEVCalculator<PokerGameState, NLHHand>() {
    override fun getMatchupUtility(
        state: PokerGameState,
        heroHand: NLHHand,
        oppHand: NLHHand,
        heroPlayer: Int
    ): Double {
        // Use HandEvaluator.evaluate(hand, board)
        val heroValue = HandEvaluator.evaluate(heroHand, state.board)
        val oppValue = HandEvaluator.evaluate(oppHand, state.board)
        return calculatePotDistribution(heroValue, oppValue, state)
    }

    override fun getValidOpponentHands(...): List<Pair<NLHHand, Double>> {
        // Filter out hands that conflict with hero's cards or board
    }

    override fun shouldAverageOverBoards(state: PokerGameState): Boolean {
        // Check if next street not dealt yet
        return when (state.street) {
            Street.PREFLOP -> state.board.isEmpty()
            Street.FLOP -> state.board.size < 4
            Street.TURN -> state.board.size < 5
            Street.RIVER -> false
        }
    }

    override fun getPossibleBoards(...): List<Pair<PokerGameState, Double>> {
        // Generate next street scenarios
        // Or use bucketed boards
    }
}
```

**Status:** Does NOT exist, but EASY to implement
**Why Easy:** BaseEVCalculator handles all tree traversal logic
**Blocks:** EV calculation for NLH trees

---

**NLHTreeBuilder** (~300 lines - MODERATE with BaseTreeBuilder!)
```kotlin
class NLHTreeBuilder : BaseTreeBuilder<PokerGameState, NLHHand>() {
    override fun getHandsToDisplay(...): List<HandDisplay<NLHHand>> {
        // Return all 1326 combos or bucketed ranges
    }

    override fun calculateHandMetadata(...): HandMetadata {
        // Use NLHEVCalculator for EVs
        // Similar to LeducTreeBuilder logic
    }

    override fun formatNodeMetadata(state: PokerGameState): NodeMetadata {
        // Extract pot, stacks, board, street
    }

    override fun getActionDisplayNames(...): Map<String, String> {
        // Map action IDs to labels
    }

    override fun buildChanceNode(...): Map<String, Any> {
        // Expand next street outcomes
    }
}
```

**Status:** Does NOT exist, but MODERATE with base class
**Why Moderate:** BaseTreeBuilder handles traversal, just need NLH formatting
**Blocks:** Tree export for NLH viewer

---

#### 3. Blueprint Solving (High Priority)

**Current Status:** Infrastructure exists but incomplete

**Files with TODOs:**
```
solver/BlueprintSolver.kt       - "TODO: Implement async solving"
solver/RangeExtractor.kt        - "TODO: Implement actual strategy traversal"
solver/RangeFilter.kt           - "TODO: In production, expand to all combos"
poker/PostflopBucketing.kt      - "TODO: Implement full k-means clustering"
core/GameTreeBuilder.kt         - "TODO: Implement proper game tree abstraction"
```

**What's Missing:**

1. **Complete PostflopBucketing Implementation**
   - Interface exists, implementations incomplete
   - Need k-means clustering for flop/turn/river
   - Current: Stub implementations

2. **RangeExtractor Integration**
   - Skeleton exists but not functional
   - Needs to traverse strategy and extract frequencies

3. **BlueprintSolver Orchestration**
   - Skeleton exists
   - Needs actual solve execution

---

### Dependency Chain

```
Critical Path for MVP:

1. NLHHand + NLHRange + NLHRangePropagator
   ↓
2. NLHEVCalculator (extends BaseEVCalculator)
   ↓
3. Complete PostflopBucketing implementations
   ↓
4. BlueprintSolver orchestration
   ↓
5. Integration tests
   ↓
6. NLHTreeBuilder (extends BaseTreeBuilder)
   ↓
7. Viewer
```

---

## What Phase 1 Refactoring Gave Us

### ✅ Major Wins

1. **EVCalculator Framework**
   - Generic tree traversal logic (185 lines)
   - Terminal node handling
   - Board averaging
   - Decision node EV
   - **NLH only needs 4 methods (~75 lines)**

2. **TreeBuilder Framework**
   - Generic tree building logic (165 lines)
   - Cycle detection
   - Chance node expansion
   - Recursive traversal
   - **NLH only needs 5 methods (~300 lines)**

3. **Proven Abstractions**
   - Tested with Leduc
   - 43 tests passing
   - Backward compatible
   - Ready for NLH scale

### 📊 Code Reuse Impact

**Without Phase 1 refactoring:**
- NLH EV calculation: ~400 lines (tree traversal + NLH logic)
- NLH tree export: ~600 lines (traversal + formatting)
- **Total: ~1000 lines**

**With Phase 1 refactoring:**
- NLH EV calculation: ~75 lines (just game-specific hooks)
- NLH tree export: ~300 lines (just formatting logic)
- **Total: ~375 lines (62% reduction!)**

**Saved:** ~625 lines of complex tree traversal logic

---

## Recommended Approach

### Phase 2.1: Core Range System (1-2 days)

**Goal:** Get NLH ranges working

1. **Create NLHHand** (2 hours)
   - Implement Hand interface
   - Test conflicts() method
   - Test with different suit combinations

2. **Create NLHRange** (4 hours)
   - Implement Range interface
   - uniform() factory method
   - excluding() for card removal
   - Test with 1326 combos

3. **Create NLHRangePropagator** (1 day)
   - Implement RangePropagator interface
   - Copy pattern from LeducRangePropagator
   - Test with simple scenarios

**Deliverable:** Working range system for NLH

---

### Phase 2.2: EV Calculation (1 day)

**Goal:** Get NLH EV calculation working

1. **Create NLHEVCalculator** (1 day)
   - Extend BaseEVCalculator
   - Implement 4 game-specific methods
   - Test with known scenarios
   - Validate with hand evaluator

**Deliverable:** Accurate EV calculations for NLH

---

### Phase 2.3: Blueprint Solving (3-5 days)

**Goal:** Get blueprint solver working

1. **Complete PostflopBucketing** (2 days)
   - Implement k-means clustering
   - Test with sample boards
   - Validate bucket assignments

2. **Complete BlueprintSolver** (2 days)
   - Implement solve orchestration
   - Add convergence monitoring
   - Test with preflop-only scenario

3. **Integration Testing** (1 day)
   - Test full solve pipeline
   - Measure exploitability
   - Validate strategies

**Deliverable:** Working blueprint solver

---

### Phase 2.4: Tree Export & Viewer (2-3 days)

**Goal:** Visualize NLH strategies

1. **Create NLHTreeBuilder** (1 day)
   - Extend BaseTreeBuilder
   - Implement 5 formatting methods
   - Test tree structure

2. **Create NLH Viewer** (2 days)
   - Adapt from Leduc viewer
   - 13x13 hand matrix instead of 6 cards
   - Handle bucketed ranges
   - Board visualization (5 cards)

**Deliverable:** Visual tree viewer for NLH

---

## Total Estimated Time

**Core Implementation:** 7-10 days
- Range system: 1-2 days
- EV calculation: 1 day
- Blueprint solving: 3-5 days
- Tree export: 2-3 days

**With Phase 1 abstractions, saved ~3-4 days of tree traversal implementation**

---

## Immediate Next Steps

### Today (Priority Order)

1. ✅ **Verify Leduc still works** - DONE
2. ✅ **Phase 1 refactoring complete** - DONE
3. 🎯 **Start Phase 2.1: Create NLHHand**
4. 🎯 **Create NLHRange**
5. 🎯 **Create NLHRangePropagator**

### This Week

- Complete range system (Phase 2.1)
- Implement NLHEVCalculator (Phase 2.2)
- Start blueprint solver work (Phase 2.3)

---

## Risk Assessment

### Low Risk ✅

- **Range system**: Straightforward, copy Leduc pattern
- **EV calculation**: Easy with BaseEVCalculator (4 methods)
- **Tree export**: Moderate with BaseTreeBuilder (5 methods)

### Medium Risk ⚠️

- **PostflopBucketing**: K-means clustering non-trivial
- **Blueprint convergence**: May need tuning
- **Performance**: Full game tree is large

### High Risk ⚠️⚠️

- **Abstraction quality**: Bad abstractions = bad strategies
- **Memory usage**: 1326 combos × millions of info sets
- **Solve time**: May take hours/days for full solve

---

## Success Criteria

### Phase 2.1 Complete ✅
- [ ] NLHHand implements Hand interface
- [ ] NLHRange handles 1326 combos
- [ ] NLHRangePropagator propagates ranges correctly
- [ ] Tests pass for basic scenarios

### Phase 2.2 Complete ✅
- [ ] NLHEVCalculator extends BaseEVCalculator
- [ ] EVs calculated correctly for known scenarios
- [ ] Board averaging works across streets
- [ ] Terminal evaluation matches hand evaluator

### Phase 2.3 Complete ✅
- [ ] Blueprint solver runs to completion
- [ ] Exploitability < 5% (acceptable for blueprint)
- [ ] Strategies look reasonable (not random)
- [ ] Convergence within expected iteration count

### Phase 2.4 Complete ✅
- [ ] NLHTreeBuilder exports valid tree
- [ ] Viewer displays NLH strategies
- [ ] Navigation works through game tree
- [ ] Range visualization makes sense

---

## Conclusion

**Ready to start NLH blueprint implementation.**

**Key enablers from Phase 1:**
- ✅ Generic EV calculation framework (saves ~400 lines)
- ✅ Generic tree builder framework (saves ~400 lines)
- ✅ Proven abstractions with Leduc
- ✅ Comprehensive testing infrastructure

**Critical path:**
1. Implement range system (NLHHand, NLHRange, NLHRangePropagator)
2. Implement NLHEVCalculator (trivial with base class)
3. Complete blueprint solver (finish TODOs)
4. Export and visualize

**Estimated time:** 7-10 days to working blueprint solver with viewer

**First task:** Create NLHHand implementing Hand interface
