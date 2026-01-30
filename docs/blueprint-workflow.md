# Blueprint + Refinement Workflow

A two-phase approach for deriving GTO preflop ranges and precise postflop strategies.

## Overview

**Problem**: Solving from preflop with fine abstraction is computationally intractable.

**Solution**:
1. **Blueprint Phase**: Derive preflop ranges with heavy abstraction (fast, ~1-2 hours)
2. **Refinement Phase**: Solve postflop spots with fine abstraction using blueprint ranges (precise)

This approach is used by research bots (Libratus, Pluribus) and is optimal for:
- Deriving preflop ranges for various scenarios (antes, stack depths, positions)
- Getting precise postflop play without re-solving preflop every time

## Phase 1: Blueprint Solving

### Goal
Derive reasonable preflop opening/defense ranges quickly using coarse abstraction.

### Abstraction Settings

**Hand Bucketing** (Coarse):
```
Preflop: 169 canonical hands → 8-15 buckets
  - Bucket 1: Premium pairs (QQ+)
  - Bucket 2: Medium pairs (77-JJ)
  - Bucket 3: Small pairs (22-66)
  - Bucket 4: Broadway (AK, AQ)
  - Bucket 5: Suited connectors (87s+, T9s+)
  - Bucket 6: Offsuit broadways (KQo, QJo)
  - Bucket 7: Suited aces (A9s-A2s)
  - Bucket 8: Trash (rest)

Flop: 1,100 combos → 25 buckets (vs 50 in refinement)
Turn: → 15 buckets (vs 30 in refinement)
River: → 10 buckets (vs 20 in refinement)
```

**Board Clustering** (Aggressive):
```
Flop: 22,100 boards → 100 canonical clusters
  (vs 1,755 suit-isomorphic boards in refinement)

Turn: 47 cards → 10 clusters per flop
  (vs 15 clusters in refinement)

River: 46 cards → 10 clusters per turn
  (vs 15 clusters in refinement)
```

**Total Complexity**:
```
Without abstraction: ~100 billion game states
With blueprint abstraction: ~10 million game states (10,000x reduction!)
Solve time: 1-2 hours (vs days/weeks)
```

### Scenarios to Solve

Derive separate blueprint strategies for different game conditions:

**Stack Depths**:
- 20bb (short stack)
- 50bb (medium stack)
- 100bb (deep stack)
- 200bb (very deep)

**Ante Structures**:
- No ante
- 12.5% ante (common in tournaments)
- 25% ante (rare but worth exploring)

**Positions** (for 6-max):
- BTN vs BB (most important)
- CO vs BB
- MP vs BB
- BTN vs SB
- SB vs BB

**Example Blueprints**:
```
blueprint_100bb_noante_btn_vs_bb
blueprint_100bb_12.5ante_btn_vs_bb
blueprint_50bb_noante_btn_vs_bb
blueprint_20bb_12.5ante_btn_vs_bb
```

### Configuration Example

```kotlin
SolveConfiguration(
    name = "Blueprint: 100bb No-Ante BTN vs BB",
    startingStreet = Street.PREFLOP,
    board = emptyList(),

    // Stack configuration
    stackSizes = mapOf(
        Position.BTN to 100.0,
        Position.BB to 100.0
    ),
    pot = 1.5,  // SB + BB
    btnInvested = 0.5,  // SB
    bbInvested = 1.0,   // BB

    // Coarse hand abstraction for blueprint
    handAbstraction = HandAbstraction(
        mode = AbstractionMode.EQUITY_BUCKETING,
        numBuckets = 8,  // Very coarse preflop
        preflopBuckets = 8,
        flopBuckets = 25,
        turnBuckets = 15,
        riverBuckets = 10
    ),

    // Aggressive board clustering
    boardClustering = BoardClustering(
        flopClusters = 100,  // vs 1,755 canonical
        turnClusters = 10,   // vs 15
        riverClusters = 10   // vs 15
    ),

    // Full range solving
    btnRange = HandRange.All,  // All 169 hands
    bbRange = HandRange.All,   // All 169 hands

    // Convergence (can be looser for blueprint)
    convergenceCriteria = ConvergenceCriteria(
        targetExploitability = 0.01,  // 1% (vs 0.5% for refinement)
        maxIterations = 100_000,
        evaluationFrequency = 1000
    )
)
```

### Blueprint Output

After solving, extract preflop frequencies:

```
BTN Opening Range (100bb, no ante):
  AA: 100% raise, 0% fold
  KK: 100% raise, 0% fold
  QQ: 100% raise, 0% fold
  JJ: 98% raise, 2% fold
  TT: 95% raise, 5% fold
  ...
  87s: 45% raise, 55% fold
  72o: 0% raise, 100% fold

  Total opening frequency: 68.3%

BB Defense Range (100bb, no ante, facing 2.5bb raise):
  AA: 15% 3-bet, 85% call, 0% fold
  KK: 20% 3-bet, 80% call, 0% fold
  QQ: 25% 3-bet, 75% call, 0% fold
  JJ: 10% 3-bet, 85% call, 5% fold
  ...
  A5s: 5% 3-bet, 70% call, 25% fold
  72o: 0% 3-bet, 0% call, 100% fold

  Total defense frequency: 42.1%
```

### EV Loss Measurement

Measure the EV loss from coarse abstraction:

```kotlin
// After blueprint solve
val blueprintStrategy = solveWithCoarseAbstraction()

// Re-solve a sample with fine abstraction
val refinedStrategy = solveWithFineAbstraction(
    sampleBoards = selectRepresentativeBoards(n = 50)
)

// Compute EV difference
val evLoss = computeEVLoss(blueprintStrategy, refinedStrategy)
// Target: < 2% pot EV loss acceptable for blueprint

// If EV loss too high, increase abstraction granularity
if (evLoss > 0.02) {
    println("Warning: EV loss ${evLoss*100}% exceeds 2% threshold")
    println("Consider increasing buckets: 8 → 12 preflop")
}
```

### Blueprint Storage

Save blueprint ranges for use in refinement phase:

```json
{
  "blueprint_id": "100bb_noante_btn_vs_bb",
  "scenario": {
    "stack_bb": 100,
    "ante_bb": 0,
    "positions": ["BTN", "BB"]
  },
  "btn_opening_range": {
    "AA": {"raise": 1.00, "fold": 0.00},
    "KK": {"raise": 1.00, "fold": 0.00},
    "87s": {"raise": 0.45, "fold": 0.55},
    ...
  },
  "bb_defense_range": {
    "AA": {"3bet": 0.15, "call": 0.85, "fold": 0.00},
    "KK": {"3bet": 0.20, "call": 0.80, "fold": 0.00},
    ...
  },
  "ev_loss_measured": 0.018,
  "exploitability": 0.0085
}
```

## Phase 2: Subgame Refinement

### Goal
Solve specific postflop situations with precise abstraction using blueprint preflop ranges.

### Abstraction Settings

**Hand Bucketing** (Fine):
```
Flop: 1,100 combos → 50 buckets (2x blueprint)
Turn: → 30 buckets (2x blueprint)
River: → 20 buckets (2x blueprint)
```

**Board Clustering** (Fine):
```
Flop: Use full 1,755 canonical boards (suit isomorphism only)
Turn: 47 cards → 15 clusters
River: 46 cards → 15 clusters
```

**Total Complexity**:
```
Per flop board: ~500K game states
Solve time per board: 10-30 minutes
```

### Workflow

1. **Select scenario** (e.g., 100bb no ante)
2. **Load blueprint ranges** for that scenario
3. **Choose specific board** to analyze (e.g., Ks7h2d)
4. **Filter ranges** to this board (card removal)
5. **Solve FLOP → TURN → RIVER** with fine abstraction

### Configuration Example

```kotlin
SolveConfiguration(
    name = "Refinement: Ks7h2d dry board (100bb no ante)",
    startingStreet = Street.FLOP,
    board = listOf(
        Card(Rank.KING, Suit.SPADES),
        Card(Rank.SEVEN, Suit.HEARTS),
        Card(Rank.TWO, Suit.DIAMONDS)
    ),

    // Use same stack configuration as blueprint
    stackSizes = mapOf(
        Position.BTN to 97.5,  // After preflop raise/call
        Position.BB to 97.5
    ),
    pot = 5.0,  // 2.5bb raise + 2.5bb call

    // Fine hand abstraction for refinement
    handAbstraction = HandAbstraction(
        mode = AbstractionMode.EQUITY_BUCKETING,
        numBuckets = 200,
        flopBuckets = 50,   // 2x blueprint
        turnBuckets = 30,   // 2x blueprint
        riverBuckets = 20   // 2x blueprint
    ),

    // Fine board clustering
    boardClustering = BoardClustering(
        turnClusters = 15,  // vs 10 in blueprint
        riverClusters = 15  // vs 10 in blueprint
    ),

    // Use blueprint ranges (filtered for this board)
    btnRange = loadBlueprintRange(
        "100bb_noante_btn_vs_bb",
        position = Position.BTN,
        action = "opening_range",
        board = [Ks, 7h, 2d]  // Card removal applied
    ),
    bbRange = loadBlueprintRange(
        "100bb_noante_btn_vs_bb",
        position = Position.BB,
        action = "defense_range_call",  // Only calling portion
        board = [Ks, 7h, 2d]
    ),

    // Tighter convergence for refinement
    convergenceCriteria = ConvergenceCriteria(
        targetExploitability = 0.005,  // 0.5% (tighter than blueprint)
        maxIterations = 200_000,
        evaluationFrequency = 500
    )
)
```

### Range Filtering Example

```kotlin
// Load blueprint BTN opening range
val blueprintRange = loadBlueprint("100bb_noante_btn_vs_bb")
  .btnOpeningRange  // Map<Hand, Frequency>

// Filter for Ks7h2d board (card removal)
val filteredRange = blueprintRange
    .filterKeys { hand ->
        !hand.conflictsWith(listOf(Ks, 7h, 2d))
    }
    .renormalize()  // Re-weight to sum to 1.0

// Example output:
// AA: weight = 0.023 (6 combos / 261 total non-conflicting combos)
// KK: weight = 0.008 (2 combos, Kd and Kc only)
// QQ: weight = 0.023 (6 combos)
// 87s: weight = 0.015 (4 combos)
```

### Solving Multiple Boards

Create a suite of representative boards to cover different textures:

```bash
# Dry boards
./gradlew run --args="refine --blueprint 100bb_noante_btn_vs_bb --board Ks7h2d"
./gradlew run --args="refine --blueprint 100bb_noante_btn_vs_bb --board Ah9s3c"

# Wet boards (draws)
./gradlew run --args="refine --blueprint 100bb_noante_btn_vs_bb --board Ts9s2h"
./gradlew run --args="refine --blueprint 100bb_noante_btn_vs_bb --board Kh7h5d"

# Paired boards
./gradlew run --args="refine --blueprint 100bb_noante_btn_vs_bb --board QsQh3d"
./gradlew run --args="refine --blueprint 100bb_noante_btn_vs_bb --board 8d8c2s"

# Broadway boards
./gradlew run --args="refine --blueprint 100bb_noante_btn_vs_bb --board AhKdQc"
./gradlew run --args="refine --blueprint 100bb_noante_btn_vs_bb --board JhTs7d"
```

## EV Loss Analysis

### Measuring Blueprint Accuracy

Compare blueprint vs refined strategies:

```kotlin
data class EVLossAnalysis(
    val blueprintEV: Double,      // EV with coarse abstraction
    val refinedEV: Double,         // EV with fine abstraction
    val absoluteLoss: Double,      // refinedEV - blueprintEV
    val relativeLoss: Double,      // absoluteLoss / pot
    val acceptable: Boolean        // relativeLoss < threshold
)

fun analyzeEVLoss(
    blueprintStrategy: Strategy,
    refinedStrategy: Strategy,
    threshold: Double = 0.02  // 2% of pot
): EVLossAnalysis {
    // Compare EV for each hand in range
    val evDifferences = compareHandEVs(blueprintStrategy, refinedStrategy)

    // Weight by hand frequency in range
    val weightedLoss = evDifferences
        .map { (hand, evDiff) -> evDiff * hand.frequency }
        .sum()

    return EVLossAnalysis(
        blueprintEV = blueprintStrategy.expectedValue,
        refinedEV = refinedStrategy.expectedValue,
        absoluteLoss = weightedLoss,
        relativeLoss = weightedLoss / pot,
        acceptable = (weightedLoss / pot) < threshold
    )
}
```

### Iterative Refinement

If EV loss is too high, refine the blueprint:

```
Iteration 1: 8 preflop buckets → 1.8% EV loss ✓
Iteration 2: Try 12 buckets → 1.2% EV loss ✓ (better)
Iteration 3: Try 15 buckets → 1.0% EV loss ✓ (marginal improvement)

Decision: Use 12 buckets (good tradeoff of speed vs accuracy)
```

## CLI Commands

### Blueprint Phase

```bash
# Solve blueprint for specific scenario
./gradlew run --args="blueprint solve \
  --name '100bb_noante_btn_vs_bb' \
  --stacks 'BTN:100,BB:100' \
  --pot 1.5 \
  --ante 0 \
  --buckets 'preflop:8,flop:25,turn:15,river:10' \
  --board-clusters 'flop:100,turn:10,river:10'"

# List all blueprints
./gradlew run --args="blueprint list"

# Show blueprint details
./gradlew run --args="blueprint show 100bb_noante_btn_vs_bb"

# Export blueprint ranges
./gradlew run --args="blueprint export 100bb_noante_btn_vs_bb \
  --format json \
  --output ranges/100bb_noante_btn_vs_bb.json"

# Measure EV loss
./gradlew run --args="blueprint analyze-ev-loss 100bb_noante_btn_vs_bb \
  --sample-boards 50"
```

### Refinement Phase

```bash
# Solve specific board using blueprint ranges
./gradlew run --args="refine solve \
  --blueprint 100bb_noante_btn_vs_bb \
  --board Ks7h2d \
  --buckets 'flop:50,turn:30,river:20'"

# Solve multiple representative boards
./gradlew run --args="refine batch \
  --blueprint 100bb_noante_btn_vs_bb \
  --board-suite dry_boards.txt"

# Compare blueprint vs refined strategy
./gradlew run --args="refine compare \
  --blueprint-strategy <blueprint-id> \
  --refined-strategy <refined-id> \
  --board Ks7h2d"
```

## Expected Results

### Blueprint Phase (1-2 hours per scenario)

**100bb No Ante BTN vs BB**:
- BTN opening frequency: ~68%
- BB defense frequency: ~42%
- Exploitability: ~1.0%
- EV loss vs fine abstraction: ~1.8%

**With 12.5% Ante**:
- BTN opening frequency: ~75% (wider due to antes)
- BB defense frequency: ~48% (defending more)
- Exploitability: ~1.2%

**50bb**:
- BTN opening frequency: ~72% (wider, more all-in)
- BB defense frequency: ~45%
- More polarized ranges (fewer speculative hands)

### Refinement Phase (10-30 min per board)

**Ks7h2d (Dry)**:
- BTN c-bet: ~65% (polarized: top pair+, air)
- BB defense: ~68% (MDF-based)
- Exploitability: ~0.5%

**Ts9s2h (Wet)**:
- BTN c-bet: ~55% (more checking with medium strength)
- BB defense: ~72% (more draws to defend with)
- Exploitability: ~0.4%

## Benefits of This Approach

1. **Computational Efficiency**: Blueprint solves in hours, not days
2. **Scenario Coverage**: Easy to derive ranges for multiple stack/ante combinations
3. **Postflop Precision**: Refined solves are accurate for actual play
4. **Measurable Quality**: EV loss gives concrete accuracy metric
5. **Flexibility**: Can re-solve postflop without re-deriving preflop ranges

## Implementation Checklist

- [ ] Add coarse hand bucketing support (8-15 buckets)
- [ ] Add aggressive board clustering (100 flop clusters)
- [ ] Implement blueprint solve command
- [ ] Add range export/import functionality
- [ ] Implement EV loss measurement
- [ ] Add refinement solve command (using blueprint ranges)
- [ ] Create board filtering with card removal
- [ ] Add batch refinement for multiple boards
- [ ] Build comparison tools (blueprint vs refined)
- [ ] Document abstraction trade-offs

## References

- Libratus (Brown & Sandholm, 2017): Used blueprint + subgame solving
- Pluribus (Brown & Sandholm, 2019): Extended to 6-player
- "Depth-Limited Solving for Imperfect-Information Games": Theoretical foundation
