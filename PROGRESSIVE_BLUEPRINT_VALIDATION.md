# Progressive Blueprint Validation Plan

## Problem Statement

Previous blueprint solve attempts for full NLH didn't produce sensible results. To validate the blueprint methodology, we need a progressive testing approach that starts with known-good baselines and scales up complexity incrementally.

## Validation Approach

### Phase 1: Leduc Poker Blueprint (Current Phase)

**Goal**: Establish baseline correctness of blueprint methodology on a solved game.

**Test Setup**:
- Game: Leduc Hold'em (simplified poker variant with known equilibrium)
- Abstraction: Coarse hand bucketing (e.g., 2-3 buckets per round)
- Iterations: Start with 100k for quick validation, scale to 2M for convergence
- Success Criteria:
  - Exploitability < 1% of pot
  - Average game value close to theoretical equilibrium value
  - Strategy patterns match known Leduc equilibrium (e.g., value/bluff ratios)
  - Blueprint results converge smoothly with iteration count

**Validation Metrics** (using ExploitabilityCalculator):
1. **Average Game Value**: `computeExpectedValue()` returns expected value under current strategy
   - Compare to theoretical equilibrium value for Leduc
   - For perfect play: Player 0 value ≈ -0.08 BB (BB is at slight disadvantage)

2. **Exploitability**: `calculateExploitability()` measures distance from Nash
   - Target: < 1% of pot (< 0.03 BB for Leduc with pot=3)
   - Track convergence: should decrease monotonically with iterations

3. **Per-Player Exploitability**: `calculateExploitabilityByPlayer()` for breakdown
   - Verify both players converge at similar rates
   - Identify if one player's strategy is weaker

**What "Sensible Results" Look Like**:
- BTN should raise strong hands (K, QK, etc.) and check weak hands
- BB should defend at correct frequency against raises (close to MDF)
- Value/bluff ratios should be balanced (not 100% value or 100% bluff)
- Exploitability should decrease smoothly, not oscillate wildly
- Final exploitability < 1% of pot

**Implementation**:
- File: `src/test/kotlin/com/nlhsolver/integration/LeducBlueprintTest.kt`
- Reuse: ExploitabilityCalculator from `com.nlhsolver.core`
- Training: Use existing CFR+ solver with hand abstraction
- Comparison: Run both blueprint (coarse) and full-resolution solves, compare results

---

### Phase 2: Limit Hold'em or NLH-Simplified

**Goal**: Validate blueprint on slightly more complex game before full NLH.

**Options**:
1. **Limit Hold'em** (fixed bet sizes)
   - Pros: Well-studied equilibrium, smaller action space than NLH
   - Cons: Different strategic properties than NLH

2. **NLH-Simplified** (toy game)
   - Pros: Same strategic properties as full NLH
   - Cons: No known equilibrium for comparison
   - Example: 3 card deck (KQJ), 10 BB stacks, pot-only bet sizing

**Test Setup**:
- Abstraction: Moderate bucketing (e.g., 8 preflop buckets, 16 flop buckets)
- Iterations: 1-2M for convergence
- Success Criteria:
  - Exploitability < 0.5% of pot
  - Strategy patterns consistent with poker theory
  - Blueprint vs full-resolution: < 5% difference in key spots

**Validation Metrics**:
- Same as Phase 1 (exploitability, game value, per-player breakdown)
- Additional: Compare blueprint vs full-resolution strategies at key decision points

---

### Phase 3: Full NLH Blueprint

**Goal**: Scale validated methodology to production NLH blueprint.

**Test Setup**:
- Game: No-Limit Hold'em heads-up, 100BB stacks
- Abstraction: Production bucketing (e.g., 8 preflop, 32 flop, 64 turn, 128 river)
- Iterations: 5-10M for convergence
- Success Criteria:
  - Exploitability < 0.1% of pot (< 0.003 BB)
  - Strategies match known GTO heuristics
  - Can be used as baseline for refinement solves

**Validation Metrics**:
- Same as Phase 2
- Additional: Spot-check key scenarios (e.g., river bluff-catchers, optimal bluff frequencies)

**Next Steps After Blueprint**:
- Use blueprint as starting strategy for refinement
- Run subgame solves on critical spots
- Build final strategy database for export

---

## Measurement Tools (Existing Infrastructure)

### ExploitabilityCalculator API

Location: `src/main/kotlin/com/nlhsolver/core/ExploitabilityCalculator.kt`

**Primary Methods**:

1. **Total Exploitability**:
   ```kotlin
   fun calculateExploitability(
       rootState: GameState,
       strategyProfile: StrategyProfile
   ): Double
   ```
   Returns: Distance from Nash equilibrium (0 = perfect Nash)

2. **Average Game Value**:
   ```kotlin
   private fun computeExpectedValue(
       state: GameState,
       strategyProfile: StrategyProfile,
       reachProbs: DoubleArray
   ): DoubleArray
   ```
   Returns: Expected value for each player under current strategy
   Note: Private method, accessed via `calculateExploitability()`

3. **Per-Player Breakdown**:
   ```kotlin
   fun calculateExploitabilityByPlayer(
       rootState: GameState,
       strategyProfile: StrategyProfile
   ): Map<Int, Double>
   ```
   Returns: Individual exploitability for each player

**Algorithm**:
- For each player: exploitability = BR_value - game_value
  - BR_value = value when playing best response
  - game_value = value under current strategy
- Total exploitability = sum over all players / 2 (for 2-player games)

**Usage Pattern**:
```kotlin
val calculator = ExploitabilityCalculator(numPlayers = 2)

// After training CFR+
val exploitability = calculator.calculateExploitability(rootState, profile)
val perPlayer = calculator.calculateExploitabilityByPlayer(rootState, profile)

println("Total exploitability: $exploitability BB")
println("P0 exploitability: ${perPlayer[0]} BB")
println("P1 exploitability: ${perPlayer[1]} BB")

// For average game value, need to call computeExpectedValue()
// (or extract from calculateExploitability debug logs)
```

---

## Timeline

1. **Phase 1 (Immediate)**: Implement Leduc blueprint test
   - Create test file with coarse hand abstraction
   - Run solve with 100k iterations
   - Measure exploitability and validate results
   - Document findings

2. **Phase 2 (Next)**: Choose and implement simplified NLH test
   - Decision: Limit Hold'em vs NLH-Simplified
   - Implement moderate hand abstraction
   - Run solve with 1-2M iterations
   - Compare blueprint vs full-resolution

3. **Phase 3 (Future)**: Full NLH blueprint
   - Implement production hand abstraction
   - Run solve with 5-10M iterations
   - Validate against known GTO heuristics
   - Use as baseline for refinement

---

## Success Criteria Summary

| Phase | Game | Exploitability Target | Key Validation |
|-------|------|----------------------|----------------|
| 1 | Leduc | < 1% of pot | Matches known equilibrium |
| 2 | Limit HE / NLH-Simplified | < 0.5% of pot | Blueprint vs full < 5% diff |
| 3 | Full NLH | < 0.1% of pot | Matches GTO heuristics |

## Known Issues from Previous Attempts

1. **Issue**: Previous NLH blueprint didn't produce sensible results
   - **Root Cause**: Unknown (need to validate methodology first)
   - **Mitigation**: Progressive validation starting with known-good baseline (Leduc)

2. **Potential Issues to Watch**:
   - Hand abstraction quality (poor bucketing → high exploitability)
   - Insufficient training iterations (premature convergence)
   - Action abstraction issues (missing critical bet sizes)
   - CFR+ implementation bugs (wrong regret updates)
   - Zero-sum property violations (utilities don't sum to zero)
