# CFR+ Solver Convergence Analysis

**Date**: 2025-12-30
**Status**: ✅ Resolved - Using Regret Matching+ without linear discounting

## Summary

The generic CFRSolver has been validated for correctness by comparing against a specialized AkqSolver and theoretical Nash equilibrium values for Kuhn poker (AKQ game).

## Key Finding: Regret Discounting Issue

**Problem Identified**: Linear regret discounting with `regretDiscountFactor = 0.999` causes convergence failure.

### Test Results (1M iterations)

| Configuration | Exploitability | Status |
|---------------|----------------|--------|
| AkqSolver (baseline) | 0.000241 | ✅ Converges to Nash |
| Vanilla CFR (no CFR+) | 0.000241 | ✅ Converges to Nash |
| RM+ only (discount=1.0) | 0.000204 | ✅ **Best convergence** |
| CFR+ with discount=0.999 | 0.011009 | ❌ **425x worse!** |

### Root Cause

The current implementation applies **exponential decay** to regrets:
```kotlin
regret *= discountFactor  // Applied every iteration
```

After 1M iterations with `discountFactor = 0.999`:
```
regret *= 0.999^1,000,000 ≈ 0 (essentially erased)
```

This prevents convergence as regret information is lost.

### Theoretical Analysis

For Kuhn poker, Nash equilibrium has known properties:
- Q (worst card) bluffs with probability α ∈ [0, 1/3]
- K (middle card) rarely bets initially (α_K ≈ 0%)
- A (best card) bets with frequency related to α (some formulations use 3α)

**CFRSolver with RM+ (discount=1.0) achieves**:
- Q bluff: 24.9%  ✅ Valid (within [0, 33.3%])
- K bet: 0.0%     ✅ Correct (should be ~0%)
- A bet: 74.7%    ✅ Reasonable (expected ~3α = 74.7%)
- Exploitability: 0.0002 ✅ Near-zero (Nash equilibrium)

**CFRSolver with discount=0.999 produces**:
- Q bluff: 25.7%  ⚠️ Slightly high
- K bet: 1.7%     ❌ Wrong (should be ~0%)
- A bet: 73.8%    ⚠️ Doesn't match 3α
- Exploitability: 0.011 ❌ Far from Nash

## Resolution

**Decision**: Use CFRSolver with Regret Matching+ (RM+) but **without linear discounting**.

```kotlin
CFRSolver(
    numPlayers = 2,
    enableCFRPlus = true,      // Enables RM+ (floor negative regrets at 0)
    regretDiscountFactor = 1.0  // No discounting - validated for convergence
)
```

### Why This Works

- **Regret Matching+** (RM+) alone provides good convergence acceleration
- RM+ floors negative regrets at 0, preventing over-correction
- No exponential decay means regret information is preserved
- Converges to Nash equilibrium with exploitability < 0.001

## Future Work

If convergence speed becomes an issue for large poker game trees, we can revisit linear discounting with proper implementation per Tammelin (2014):
- Iteration-weighted averaging (not exponential decay)
- Careful tuning of discount schedule
- Comprehensive testing on larger games

For now, **RM+ without discounting is sufficient and validated**.

## Test Evidence

All tests pass with excellent convergence:

```
✓ Exploitability test: 0.000204 < 0.001
✓ Convergence test: Exploitability decreases monotonically
✓ Best response test: BR values equal game value
✓ Strategy validation: All probabilities sum to 1.0
```

## References

- Kuhn poker Nash equilibrium: [0, 1/3] bluff frequency for worst card
- CFR+ paper: Tammelin et al. (2014) - "Solving Large Imperfect Information Games Using CFR+"
- Regret Matching+: Brown & Sandholm (2019) - "Solving Imperfect-Information Games via Discounted Regret Minimization"

## Implementation Status

- ✅ CFRSolver works correctly with RM+ (discount=1.0)
- ✅ All tests updated to use validated configuration
- ✅ Default parameters set to working values
- ⏸️ Linear discounting disabled (can revisit for performance)
