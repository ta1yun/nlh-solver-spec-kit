# Interface Generalization Inventory

**Purpose:** Identify reusable components for NLH implementation and refactoring opportunities.

**Status:** 2026-05-06 - Comprehensive audit of Leduc codebase for NLH scaling

---

## Executive Summary

### Already Generalized (Ready for NLH) ✅
- **Core solver interfaces**: GameState, GameAction, StrategyProfile, InfoSetStrategy
- **Range interfaces**: Range, RangePropagator, Hand
- **Testing infrastructure**: GameStateInterfaceTest, EVCalculationInterfaceTest patterns
- **Validation patterns**: Zero-sum, exploitability, best response

### Needs Refactoring (Game-Specific Logic) 🔧
- **EV calculation functions**: Generic signatures but Leduc-specific implementations
- **Tree export logic**: Hardcoded Leduc card representation, board structure
- **Range propagation**: LeducRangePropagator is game-specific
- **UI viewer**: Card display, action representation, board visualization

### Priority Refactorings for NLH
1. **High Priority**: Extract generic tree builder pattern
2. **High Priority**: Create pluggable EV calculation framework
3. **Medium Priority**: Abstract hand/board representation
4. **Low Priority**: Viewer templates (can be game-specific initially)

---

## Category 1: Core Solver Infrastructure (✅ Already Generic)

### GameState Interface
**File:** `src/main/kotlin/com/nlhsolver/core/GameState.kt`

**Status:** ✅ Fully generic, works for any sequential game

**Interface:**
```kotlin
interface GameState {
    fun currentPlayer(): Int?
    fun isTerminal(): Boolean
    fun getUtility(): DoubleArray
    fun getLegalActions(): List<GameAction>
    fun applyAction(action: GameAction): GameState
    fun getInfoSet(): String
    fun getStateHash(): String
    fun isChanceNode(): Boolean = false
    fun sampleChanceAction(): GameAction
}
```

**NLH Usage:**
- Create `NLHState` implementing this interface
- All solver code works without modification
- Chance nodes already supported (board dealing)

**Example from Leduc:**
```kotlin
data class LeducState(...) : GameState {
    // 306 lines implementing all interface methods
}
```

---

### StrategyProfile & InfoSetStrategy
**Files:**
- `src/main/kotlin/com/nlhsolver/core/InfoSetStrategy.kt` (line 1-237)
- Core CFR+ algorithm implementation

**Status:** ✅ Fully generic, no game-specific logic

**Key Features:**
- Concurrent info set storage (ConcurrentHashMap)
- Per-info-set locks for parallel updates
- Regret matching with CFR+ improvements
- Average strategy computation

**NLH Usage:** Zero changes needed, works immediately with NLH info sets

---

### CFRSolver
**File:** `src/main/kotlin/com/nlhsolver/core/CFRSolver.kt`

**Status:** ✅ Generic, only depends on GameState interface

**NLH Usage:**
```kotlin
val nlhRootState = NLHState(...)  // Implements GameState
val solver = CFRSolver()
solver.train(nlhRootState, iterations = 10_000_000)
```

---

## Category 2: Range System (✅ Interfaces Generic, 🔧 Implementations Specific)

### Range Interface
**File:** `src/main/kotlin/com/nlhsolver/range/Range.kt`

**Status:** ✅ Fully generic

```kotlin
interface Range {
    fun getWeight(hand: Hand): Double
    fun getActiveHands(): List<Pair<Hand, Double>>
    fun getTotalWeight(): Double
    fun excluding(hand: Hand): Range
}
```

**Implementations:**
- `LeducRange` (Leduc-specific) - 6 cards, suit abstraction
- **Need:** `NLHRange` for 1326 combos or bucketed ranges

---

### RangePropagator Interface
**File:** `src/main/kotlin/com/nlhsolver/range/RangePropagator.kt`

**Status:** ✅ Interface generic, 🔧 implementation game-specific

```kotlin
interface RangePropagator {
    fun propagate(
        currentRange: Range,
        action: GameAction,
        state: GameState,
        profile: StrategyProfile
    ): Range
}
```

**Implementations:**
- `LeducRangePropagator` - Knows about 6 Leduc cards
- **Need:** `NLHRangePropagator` for NLH hand representation

**Refactoring Opportunity:**
The propagation algorithm is generic, only hand filtering is game-specific.

---

### Hand Interface
**File:** `src/main/kotlin/com/nlhsolver/range/Range.kt` (implicit)

**Status:** 🔧 Exists but not formally defined as interface

**Current:**
```kotlin
// Implicit in LeducRange
data class LeducHand(val cardIdx: Int) : Hand
```

**Proposed Refactoring:**
```kotlin
// Generic interface
interface Hand {
    fun conflicts(other: Hand): Boolean
    fun getIdentifier(): String  // For display/export
}

// Leduc implementation
data class LeducHand(val cardIdx: Int) : Hand {
    override fun conflicts(other: Hand): Boolean {
        return (other as? LeducHand)?.cardIdx == cardIdx
    }
    override fun getIdentifier(): String =
        "${rank()}${"♠♥"[cardIdx % 2]}"
}

// NLH implementation
data class NLHHand(val card1: Int, val card2: Int) : Hand {
    override fun conflicts(other: Hand): Boolean {
        val nlhOther = other as? NLHHand ?: return false
        return card1 in setOf(nlhOther.card1, nlhOther.card2) ||
               card2 in setOf(nlhOther.card1, nlhOther.card2)
    }
    override fun getIdentifier(): String = "AKs"  // Or combo
}
```

**Priority:** High - Needed for NLH range system

---

## Category 3: EV Calculation (🔧 Needs Major Refactoring)

### Current State
**File:** `src/test/kotlin/com/nlhsolver/export/GenerateTreeStructure.kt`

**Functions with Generic Signatures:**
1. `calculateEVWithRange()` - Line 358-498
2. `calculateEVForActionWithRange()` - Line 561-591
3. `computeHeroRange()` - Line 186-247
4. `computeOpponentRange()` - Line 259-325

**Problem:** Generic interfaces, Leduc-specific implementations

**Example:**
```kotlin
// Generic signature ✅
fun calculateEVWithRange(
    state: LeducState,  // 🔧 Should be GameState
    heroHand: Hand,
    opponentRange: Range,
    boardCard: Int,  // 🔧 Leduc-specific
    boardName: String,  // 🔧 Leduc-specific
    profile: StrategyProfile,
    heroPlayer: Int
): Double

// Inside function:
val leducHero = heroHand as LeducHand  // 🔧 Type cast
val heroCard = leducHero.cardIdx  // 🔧 Leduc-specific
```

---

### Proposed Refactoring: EVCalculator Interface

**New abstraction:**
```kotlin
interface EVCalculator<S : GameState, H : Hand> {
    /**
     * Calculate EV for a hand against opponent's range.
     *
     * Generic implementation handles tree traversal.
     * Game-specific logic injected via abstract methods.
     */
    fun calculateEVWithRange(
        state: S,
        heroHand: H,
        opponentRange: Range,
        profile: StrategyProfile,
        heroPlayer: Int
    ): Double

    /**
     * Get terminal utility for a specific matchup.
     * Game-specific: Leduc compares pairs/ranks, NLH evaluates 5-card hands.
     */
    fun getMatchupUtility(
        state: S,
        heroHand: H,
        oppHand: H,
        heroPlayer: Int
    ): Double

    /**
     * Check if two hands conflict (share cards).
     * Game-specific: Leduc checks cardIdx, NLH checks 4 hole cards.
     */
    fun handsConflict(hand1: H, hand2: H): Boolean

    /**
     * Get all valid opponent hands given constraints.
     * Game-specific: Leduc excludes 1 hero + 1 board, NLH excludes 2 hero + 5 board.
     */
    fun getValidOpponentHands(
        heroHand: H,
        state: S,
        range: Range
    ): List<Pair<H, Double>>
}
```

**Base Implementation (Generic Tree Traversal):**
```kotlin
abstract class BaseEVCalculator<S : GameState, H : Hand> : EVCalculator<S, H> {
    override fun calculateEVWithRange(
        state: S,
        heroHand: H,
        opponentRange: Range,
        profile: StrategyProfile,
        heroPlayer: Int
    ): Double {
        // Terminal: weighted average over valid opponent hands
        if (state.isTerminal()) {
            val validHands = getValidOpponentHands(heroHand, state, opponentRange)
            var totalEV = 0.0
            var totalWeight = 0.0

            for ((oppHand, weight) in validHands) {
                totalEV += weight * getMatchupUtility(state, heroHand, oppHand, heroPlayer)
                totalWeight += weight
            }

            return if (totalWeight > 0.0) totalEV / totalWeight else 0.0
        }

        // Decision node: weighted average over actions
        val actions = state.getLegalActions()
        val infoSet = state.getInfoSet()
        val strategy = profile.getInfoSetStrategy(infoSet, actions.size).getAverageStrategy()

        var totalEV = 0.0
        for (i in actions.indices) {
            val nextState = state.applyAction(actions[i]) as S
            totalEV += strategy[i] * calculateEVWithRange(
                nextState, heroHand, opponentRange, profile, heroPlayer
            )
        }

        return totalEV
    }

    // Subclasses implement game-specific methods
    abstract override fun getMatchupUtility(...)
    abstract override fun handsConflict(...)
    abstract override fun getValidOpponentHands(...)
}
```

**Leduc Implementation:**
```kotlin
class LeducEVCalculator : BaseEVCalculator<LeducState, LeducHand>() {
    override fun getMatchupUtility(
        state: LeducState,
        heroHand: LeducHand,
        oppHand: LeducHand,
        heroPlayer: Int
    ): Double {
        val finalState = state.copy(
            p1Card = if (heroPlayer == 0) heroHand.cardIdx else oppHand.cardIdx,
            p2Card = if (heroPlayer == 0) oppHand.cardIdx else heroHand.cardIdx
        )
        val utilities = finalState.getUtility()
        return utilities[heroPlayer]
    }

    override fun handsConflict(hand1: LeducHand, hand2: LeducHand): Boolean {
        return hand1.cardIdx == hand2.cardIdx
    }

    override fun getValidOpponentHands(
        heroHand: LeducHand,
        state: LeducState,
        range: Range
    ): List<Pair<LeducHand, Double>> {
        val filtered = range.excluding(heroHand)
        if (state.boardCard >= 0) {
            filtered = filtered.excluding(LeducHand(state.boardCard))
        }
        return filtered.getActiveHands().map { (hand, weight) ->
            (hand as LeducHand) to weight
        }
    }
}
```

**NLH Implementation:**
```kotlin
class NLHEVCalculator : BaseEVCalculator<NLHState, NLHHand>() {
    override fun getMatchupUtility(
        state: NLHState,
        heroHand: NLHHand,
        oppHand: NLHHand,
        heroPlayer: Int
    ): Double {
        val heroValue = HandEvaluator.evaluate(heroHand, state.board)
        val oppValue = HandEvaluator.evaluate(oppHand, state.board)

        val pot = state.p1Invested + state.p2Invested
        return when {
            heroValue > oppValue -> pot - state.getInvestment(heroPlayer)
            oppValue > heroValue -> -state.getInvestment(heroPlayer)
            else -> 0.0
        }
    }

    // ... other methods
}
```

**Priority:** High - Critical for NLH EV calculation

---

## Category 4: Tree Export (🔧 Needs Major Refactoring)

### Current State
**File:** `src/test/kotlin/com/nlhsolver/export/GenerateTreeStructure.kt`

**Function:** `buildTreeNode()` - Line 836-1058

**Game-Specific Elements:**
1. Hand representation: `"Ka"`, `"K♠"` (Leduc cards)
2. Board representation: `["Q♠"]` (single card)
3. Info set parsing: Assumes Leduc format
4. Equity calculation: `calculateEquity(cardIdx, boardCard)` - Leduc-specific

---

### Proposed Refactoring: TreeBuilder Interface

```kotlin
interface TreeBuilder<S : GameState> {
    /**
     * Build recursive tree structure starting from a state.
     */
    fun buildTree(
        state: S,
        profile: StrategyProfile,
        context: TreeBuildContext
    ): TreeNode

    /**
     * Get all hands to export at this node.
     * Leduc: 6 cards (or 4 after filtering board)
     * NLH: 1326 combos (or bucketed ranges)
     */
    fun getHandsToExport(state: S, context: TreeBuildContext): List<HandInfo>

    /**
     * Calculate metadata for a hand.
     */
    fun calculateHandMetadata(
        hand: Hand,
        state: S,
        profile: StrategyProfile,
        context: TreeBuildContext
    ): HandMetadata

    /**
     * Format metadata for display/export.
     */
    fun formatMetadata(state: S): NodeMetadata
}

data class HandInfo(
    val id: String,       // "Ka", "AKs", etc.
    val label: String,    // "K♠", "AK♠", etc.
    val hand: Hand        // Concrete implementation
)

data class HandMetadata(
    val equity: Double,
    val evUniform: Double,
    val evRange: Double,
    val rangeWeight: Double,
    val frequencies: Map<String, Double>,  // action -> probability
    val evPerAction: Map<String, Double>
)

data class NodeMetadata(
    val round: Int,       // Leduc: 1-2, NLH: 0-3 (preflop-river)
    val pot: Int,
    val toCall: Int,
    val board: List<String>,  // Leduc: ["Q♠"], NLH: ["A♠", "K♥", "Q♦"]
    val customFields: Map<String, Any> = emptyMap()  // Game-specific
)
```

**Benefits:**
- Separates tree traversal logic from game representation
- NLH can implement with different hand/board formats
- Reuses core traversal, chance node detection, etc.

---

### Generic Tree Traversal (Reusable)

**These patterns are already generic in `buildTreeNode()`:**

1. **Cycle detection** (line 849-852)
2. **Terminal node handling** (line 842-844)
3. **Chance node detection** (line 1031) - Uses `isChanceNode()` from GameState
4. **Recursive child building** (line 1013-1052)

**Can extract to:**
```kotlin
abstract class BaseTreeBuilder<S : GameState> : TreeBuilder<S> {
    override fun buildTree(
        state: S,
        profile: StrategyProfile,
        context: TreeBuildContext
    ): TreeNode {
        // Reusable logic:
        if (state.isTerminal()) return terminalNode()
        if (visited(state)) return cycleNode()

        val actions = state.getLegalActions()
        val hands = getHandsToExport(state, context)
        val metadata = formatMetadata(state)

        // Build children recursively
        val children = buildChildren(state, actions, profile, context)

        return TreeNode(metadata, hands, children)
    }

    // Subclasses implement game-specific methods
}
```

**Priority:** High - Needed for NLH tree export

---

## Category 5: Testing Infrastructure (✅ Already Generic)

### Interface-Level Tests
**Files:**
- `src/test/kotlin/com/nlhsolver/core/GameStateInterfaceTest.kt`
- `src/test/kotlin/com/nlhsolver/core/EVCalculationInterfaceTest.kt`

**Status:** ✅ Test patterns transfer directly to NLH

**Key Patterns:**
1. **Info set uniqueness** (GameStateInterfaceTest:20-89)
   - Tests that different pot sizes create different info sets
   - NLH: Same test applies for different stack depths, bet sizes

2. **Zero-sum property** (EVCalculationInterfaceTest:256-272)
   - Validates all terminal utilities sum to zero
   - NLH: Identical test, just with NLHState

3. **Board averaging** (EVCalculationInterfaceTest:79-104)
   - Tests handling of undealt boards (boardCard = -1)
   - NLH: Same concept for undealt flop/turn/river

4. **Fold utilities** (EVCalculationInterfaceTest:107-146)
   - Validates folds don't require dealt boards
   - NLH: Transfers directly

**NLH Usage:**
```kotlin
class NLHGameStateInterfaceTest : FunSpec({
    context("Info set uniqueness across pot sizes") {
        test("Different preflop histories create different flop info sets") {
            val smallPot = NLHState(history = "cc|")  // Pot = 2bb
            val bigPot = NLHState(history = "rrc|")   // Pot = 20bb

            smallPot.getInfoSet() shouldNotBe bigPot.getInfoSet()
        }
    }

    // All other tests transfer with minimal changes
})
```

**Priority:** Low - Already works, just needs NLH state instances

---

### Validation Patterns

**Already generic validations:**

1. **Best Response Exploitability**
   - File: `src/main/kotlin/com/nlhsolver/core/ExploitabilityCalculator.kt`
   - Works with any GameState implementation

2. **Zero-Sum Validation**
   - Pattern: `utilities.sum() shouldBe 0.0`
   - Applies to any poker variant

3. **Strategy Convergence**
   - Check: Average strategy stops changing between iterations
   - Game-independent

4. **Maximum Leaf Exploitability**
   - Validates per-node strategies
   - Works with any info set representation

**From NLH_VALIDATION_CHECKLIST.md, these transfer directly:**
- Section 2: Game Logic Validation
- Section 3: EV Calculation Validation
- Section 4: Solution Quality Validation
- Section 6: Interface Tests

---

## Category 6: UI/Viewer (🔧 Game-Specific, Template Needed)

### Current Leduc Viewer
**File:** `viewer/leduc-range-viewer.html`

**Game-Specific Elements:**
1. Card display: 6 Leduc cards with fixed layout
2. Action bars: 3 actions max (fold/call/raise or check/bet)
3. Board display: Single card
4. Range weight bars: Proportional to 128px card height

**Generalizable Principles (from DESIGN_DECISIONS.md):**
1. **Proportional visual encoding**: `barHeight = rangeWeight × cardHeight`
2. **Range-weighted aggregate strategy**: `Σ(freq[action] × rangeWeight)`
3. **Normalized weights**: Sum to 1.0 per node
4. **Action frequency display**: Color-coded bars

---

### Proposed: Viewer Template System

**Strategy:**
- Don't try to make a universal viewer
- Extract **data format** and **UI principles**
- Each game gets its own viewer with shared patterns

**Shared Data Format (JSON):**
```javascript
{
  meta: {
    round: 1,           // Or street for NLH
    pot: 10,
    toCall: 5,
    board: ["A♠", "K♥"],  // Empty for preflop
    customMeta: {}      // Game-specific fields
  },
  actions: ["fold", "call", "raise"],
  hands: [
    {
      id: "AKs-1",      // Unique ID
      label: "AK♠",     // Display label
      equity: 0.65,
      evTotal: 2.5,
      rangeWeight: 0.08,  // NORMALIZED to sum to 1.0
      freq: { fold: 0.0, call: 0.3, raise: 0.7 },
      ev: { fold: -5, call: 1.2, raise: 3.8 }
    }
  ],
  children: {
    fold: { terminal: true },
    call: { ... },
    raise: { ... }
  }
}
```

**Reusable UI Components (React/Svelte/Vue):**
```javascript
// Generic components
<ActionBars
  hand={hand}
  actions={actions}
  rangeWeight={hand.rangeWeight}
  maxHeight={cardHeight} />

<AggregateStrategy
  hands={hands}
  actions={actions}
  visibleActions={visible} />

<RangeWeightDisplay weight={hand.rangeWeight} />

// Game-specific components
<LeducCard hand={hand} />      // 6 cards in 3x2 grid
<NLHHandMatrix hands={hands} /> // 13x13 grid
```

**Priority:** Medium - Can build NLH-specific viewer initially, refactor later

---

## Category 7: Validation & Metrics (✅ Already Generic)

### Exploitability Calculation
**File:** `src/main/kotlin/com/nlhsolver/core/ExploitabilityCalculator.kt`

**Status:** ✅ Generic, depends only on GameState

**What it does:**
- Computes best response value for each player
- Measures distance from Nash equilibrium
- Works for any game tree

**NLH Usage:** Works immediately with NLHState

---

### Convergence Monitoring
**File:** `src/main/kotlin/com/nlhsolver/core/ConvergenceMonitor.kt`

**Metrics:**
- Exploitability over time
- Strategy delta (change between iterations)
- Info set visit counts

**Status:** ✅ All game-independent

---

## Priority Refactoring Roadmap

### Phase 1: Core Abstractions (Before NLH Implementation)

**Goal:** Extract reusable patterns from Leduc

1. **Formalize Hand Interface** (2 hours)
   - Create `Hand` interface with `conflicts()`, `getIdentifier()`
   - Refactor `LeducHand` to implement it
   - Update `Range.excluding()` to use interface method

2. **Create EVCalculator Interface** (1 day)
   - Extract `BaseEVCalculator` with generic tree traversal
   - Implement `LeducEVCalculator` using new interface
   - Validate Leduc tree export still works
   - Write tests for EVCalculator interface

3. **Create TreeBuilder Interface** (1 day)
   - Extract generic tree traversal from `buildTreeNode()`
   - Create `LeducTreeBuilder` implementing interface
   - Validate exported trees match current output
   - Document extension points for NLH

**Deliverable:** Leduc still works, but with generalized interfaces

---

### Phase 2: NLH Bootstrap (During NLH Implementation)

**Goal:** Implement NLH using new interfaces

1. **NLHState** (3 days)
   - Implement GameState interface
   - Multi-street logic (preflop/flop/turn/river)
   - Board dealing as chance nodes
   - Info set format with action abstraction

2. **NLHRange & NLHHand** (2 days)
   - Implement Hand interface (2-card combos or buckets)
   - Implement Range interface
   - Implement RangePropagator
   - Test with simple preflop scenarios

3. **NLHEVCalculator** (2 days)
   - Implement EVCalculator interface
   - Integrate hand evaluator
   - Handle multi-street board averaging
   - Validate with known scenarios

4. **NLHTreeBuilder** (1 day)
   - Implement TreeBuilder interface
   - Handle 1326 combos or bucket representation
   - Export NLH-specific metadata

**Deliverable:** Working NLH solver with tree export

---

### Phase 3: Viewer & Polish (After NLH Works)

**Goal:** NLH visualization and optimization

1. **NLH Viewer** (3 days)
   - Build 13x13 hand matrix visualization
   - Reuse range weight / aggregate strategy patterns
   - Custom board visualization (5 cards)
   - Action frequency display

2. **Performance Optimization** (ongoing)
   - Blueprint abstraction tuning
   - Memory profiling
   - Parallelization improvements

**Deliverable:** Production-ready NLH solver

---

## Code Examples: Migration Path

### Before (Leduc-Specific)

```kotlin
// Tightly coupled to Leduc
fun calculateEV(
    state: LeducState,
    heroCard: Int,  // Leduc card index 0-5
    boardCard: Int,
    boardName: String,
    profile: StrategyProfile
): Double {
    // Leduc-specific logic throughout
    val opponentCards = (0..5).filter { it != heroCard && it != boardCard }
    // ...
}
```

### After (Generic with Leduc Implementation)

```kotlin
// Generic interface
interface EVCalculator<S : GameState, H : Hand> {
    fun calculateEV(
        state: S,
        heroHand: H,
        profile: StrategyProfile,
        context: EVContext
    ): Double
}

// Leduc implementation
class LeducEVCalculator : BaseEVCalculator<LeducState, LeducHand>() {
    override fun getValidOpponentHands(
        heroHand: LeducHand,
        state: LeducState
    ): List<LeducHand> {
        return (0..5)
            .filter { it != heroHand.cardIdx && it != state.boardCard }
            .map { LeducHand(it) }
    }
}

// NLH implementation (new)
class NLHEVCalculator : BaseEVCalculator<NLHState, NLHHand>() {
    override fun getValidOpponentHands(
        heroHand: NLHHand,
        state: NLHState
    ): List<NLHHand> {
        return HandCombinations.all()
            .filter { !it.conflicts(heroHand) }
            .filter { !it.conflicts(state.board) }
    }
}
```

---

## Files to Create (New Abstractions)

1. **`src/main/kotlin/com/nlhsolver/range/Hand.kt`**
   - Generic Hand interface
   - Documentation on conflict detection

2. **`src/main/kotlin/com/nlhsolver/export/EVCalculator.kt`**
   - EVCalculator interface
   - BaseEVCalculator with generic traversal
   - LeducEVCalculator implementation

3. **`src/main/kotlin/com/nlhsolver/export/TreeBuilder.kt`**
   - TreeBuilder interface
   - BaseTreeBuilder with generic logic
   - LeducTreeBuilder implementation

4. **`src/main/kotlin/com/nlhsolver/export/TreeNode.kt`**
   - Generic tree node data classes
   - JSON serialization helpers

5. **`src/test/kotlin/com/nlhsolver/export/EVCalculatorInterfaceTest.kt`**
   - Interface-level tests for EV calculators
   - Validates all implementations satisfy contracts

6. **`src/test/kotlin/com/nlhsolver/export/TreeBuilderInterfaceTest.kt`**
   - Interface-level tests for tree builders
   - Validates export format consistency

---

## Testing Strategy

### Validation During Refactoring

**For each refactoring:**

1. **Regression Tests**
   - Existing Leduc tests must pass
   - Exported trees must match byte-for-byte (or semantic equivalence)
   - EV calculations must match within epsilon

2. **Interface Tests**
   - New interface tests verify contracts
   - Run against both Leduc and (eventually) NLH

3. **Performance Tests**
   - No performance regression from abstraction
   - Generic code should JIT optimize similarly

### Validation Checklist

From `NLH_VALIDATION_CHECKLIST.md`, these must pass after refactoring:

- ✅ GameStateInterfaceTest (already passes)
- ✅ EVCalculationInterfaceTest (already passes)
- ⚠️ EVCalculatorInterfaceTest (new, create after refactoring)
- ⚠️ TreeBuilderInterfaceTest (new, create after refactoring)

---

## Risk Mitigation

### High-Risk Refactorings

1. **EV Calculation** - Core to solution quality
   - Mitigation: Comprehensive regression tests
   - Validation: Compare exported trees before/after
   - Fallback: Keep old code in `legacy/` package

2. **Tree Export** - Used by production viewer
   - Mitigation: Validate JSON output matches semantically
   - Validation: Visual diff of rendered trees
   - Fallback: Deploy both versions, switch with feature flag

### Low-Risk Refactorings

1. **Hand Interface** - Additive change
   - LeducHand just implements new interface
   - No existing code breaks

2. **Testing Infrastructure** - Already generic
   - Just need to instantiate with NLHState

---

## Appendix: File Inventory

### Already Generic (No Changes Needed)
- `src/main/kotlin/com/nlhsolver/core/GameState.kt`
- `src/main/kotlin/com/nlhsolver/core/GameAction.kt`
- `src/main/kotlin/com/nlhsolver/core/InfoSetStrategy.kt`
- `src/main/kotlin/com/nlhsolver/core/CFRSolver.kt`
- `src/main/kotlin/com/nlhsolver/core/ExploitabilityCalculator.kt`
- `src/main/kotlin/com/nlhsolver/range/Range.kt`
- `src/main/kotlin/com/nlhsolver/range/RangePropagator.kt`
- `src/test/kotlin/com/nlhsolver/core/GameStateInterfaceTest.kt`
- `src/test/kotlin/com/nlhsolver/core/EVCalculationInterfaceTest.kt`

### Needs Refactoring (Extract Generic Pattern)
- `src/test/kotlin/com/nlhsolver/export/GenerateTreeStructure.kt`
  - Lines 186-247: `computeHeroRange()` - Extract to interface
  - Lines 259-325: `computeOpponentRange()` - Extract to interface
  - Lines 358-498: `calculateEVWithRange()` - Extract to EVCalculator
  - Lines 561-591: `calculateEVForActionWithRange()` - Extract to EVCalculator
  - Lines 836-1058: `buildTreeNode()` - Extract to TreeBuilder

- `src/main/kotlin/com/nlhsolver/range/LeducRange.kt`
  - Game-specific, but interface is generic
  - Create NLHRange implementing same interface

- `src/main/kotlin/com/nlhsolver/range/LeducRangePropagator.kt`
  - Game-specific implementation
  - Propagation algorithm is generic, hand filtering is not

### Game-Specific (Keep Separate)
- `src/main/kotlin/com/nlhsolver/integration/LeducState.kt`
  - Leduc-only, keep as reference implementation
- `viewer/leduc-range-viewer.html`
  - Leduc-only, extract principles for NLH viewer

---

## Next Steps

**Immediate (This Week):**
1. Review this inventory with user
2. Prioritize refactorings based on NLH timeline
3. Create tickets for Phase 1 refactorings

**Short-Term (Next Sprint):**
1. Implement Phase 1 refactorings
2. Validate Leduc still works
3. Document extension points

**Medium-Term (NLH Development):**
1. Implement NLH using new interfaces
2. Validate patterns work at scale
3. Iterate on abstractions as needed

**Long-Term (After NLH Launch):**
1. Extract shared viewer components
2. Create "poker solver framework" library
3. Support PLO, other variants
