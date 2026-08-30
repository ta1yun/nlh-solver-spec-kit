# Leduc Poker Solver

Leduc Hold'em is a simplified poker variant used to validate the CFR solver before scaling to NLH. It has 6 cards (J/Q/K in two suits), two betting rounds, and a public board card dealt between rounds.

## Game rules

- 6 cards: J♠ J♥ Q♠ Q♥ K♠ K♥
- Both players post ante (1 chip)
- Round 1: bet up to 2 chips
- One board card is dealt
- Round 2: bet up to 4 chips
- Showdown: pair with board beats higher unpaired card

Suit abstraction: J♠ and J♥ are strategically identical, so info sets use rank only (J/Q/K). This reduces 936 info sets to ~30 unique info set keys.

## Solver configuration

**Algorithm:** Vanilla CFR (not CFR+)

Vanilla CFR outperforms CFR+ on Leduc. Benchmark (200k epochs, 30 deals):

| Iters | Vanilla | RM+ only | Full CFR+ |
|-------|---------|----------|-----------|
| 100   | 6.09%   | 7.60%    | 6.59%     |
| 1000  | 1.42%   | 2.98%    | 2.37%     |
| 10000 | 0.47%   | 1.06%    | 0.79%     |

RM+ flooring erases negative-regret memory that helps convergence in small games. See `DESIGN_DECISIONS.md` for the full analysis.

**Training setup:**
- 30 deals: all (p1, p2) pairs with p1≠p2, `boardCard = -1` (chance node)
- The board card is sampled from remaining cards during each tree traversal
- 200,000 epochs × 30 deals = 6M total traversals
- Achieves ~0.40% exploitability (2.0 mbb/g)

**Zig reference validation:** Our vanilla CFR traces match the zig reference implementation bit-for-bit at all checkpoints. This is now **enforced, not just observed** — `CompareWithZigTest` asserts our exploitability stays within 0.25 percentage points of the zig numbers at 100, 300, and 1000 iterations:

| Iters | Ours | Zig |
|-------|------|-----|
| 100   | 6.09% | 6.09% |
| 300   | 2.92% | 2.92% |
| 1000  | 1.42% | 1.39% |

Training is deterministic here (VANILLA mode over pre-dealt boards has no chance nodes), so these reproduce exactly run to run.

## Running the export

### 1. Train and export the game tree

```bash
./gradlew test --tests "com.nlhsolver.export.GenerateTreeStructure"
```

This runs `src/test/kotlin/com/nlhsolver/export/GenerateTreeStructure.kt`, which:
1. Calls `trainSolver(iterations = 200_000, deepScenarioWeight = 0.0)` from `GenerateAllScenarios.kt`
2. Measures exploitability using the validated policy-iteration calculator
3. Writes `leduc-tree.js` to the project root

### 2. Copy to viewer

```bash
cp leduc-tree.js viewer/leduc-tree.js
```

### 3. Open the viewer

Open `viewer/index.html` in a browser (local file or served via any static server).

The viewer loads `leduc-tree.js` from the same directory and renders the full game tree with per-hand strategy frequencies, range weights, and EVs.

## Key source files

| File | Purpose |
|------|---------|
| `src/main/kotlin/com/nlhsolver/integration/LeducState.kt` | **The** Leduc game state (chance nodes + suit abstraction) — the only one |
| `src/test/kotlin/com/nlhsolver/export/GenerateAllScenarios.kt` | `trainSolver()` — shared training entry point |
| `src/test/kotlin/com/nlhsolver/export/GenerateTreeStructure.kt` | Tree export → `leduc-tree.js` |
| `src/main/kotlin/com/nlhsolver/core/CFRSolver.kt` | CFR solver (vanilla + CFR+ modes) |
| `src/main/kotlin/com/nlhsolver/core/ExploitabilityCalculator.kt` | Policy-iteration exploitability (validated vs zig) |
| `viewer/leduc-range-viewer.html` | Range-weighted viewer (source of truth for UI) |
| `viewer/index.html` | Deployed viewer (copy of leduc-range-viewer.html + leduc-tree.js) |

## Exploitability targets

| Quality | Exploitability | Epochs needed |
|---------|---------------|---------------|
| Validation pass | < 10% | ~10 epochs |
| Development | < 2% | ~10,000 epochs |
| Production export | < 0.5% | ~200,000 epochs |

## Current state

**Last verified:** 2026-08-30

### Single implementation

`LeducState` is the only Leduc game state. Three others were deleted once it was clear they had diverged:

| Removed | Why |
|---------|-----|
| `LeducWithSuitAbstraction` (main) | Superseded by `LeducState`; 34 dependent files were print-only diagnostics |
| `LeducWithChanceNodes` (main) | `LeducState` covers chance-node mode via `boardCard = -1` |
| Duplicate `LeducWithSuitAbstraction` in `ProperLeducWithSuitAbstraction.kt` | Same FQN as the main class in the same package, but with an extra `isBettingRoundComplete()`. Test code silently bound to this copy, so those tests were validating a class production code never used. |
| `examples/leduc/LeducGameState` | Round-1 check-check never reached the board-dealing branch, so the game never terminated (`StackOverflowError`). Also paid round-2 folds to the wrong player. |

Migrating the surviving tests to `LeducState` fixed two of them: a `ClassCastException` in `LeducRangeTest` (the propagator had already moved to `LeducState`, its test had not) and stale `"K "`-style info-set keys in `LeducSolverRegressionTest`, which now need the `P{player}:` prefix.

### Exploitability calculator

`ExploitabilityCalculator` is validated three ways: the zig match above, convergence at the O(1/√T) rate CFR's regret bound predicts, and a large positive value (0.458 on AKQ) for a uniform profile.

Two bugs were fixed that Leduc could not expose — both would have hit NLH. See `DESIGN_DECISIONS.md` for the rationale.

### Known failing tests

Four Leduc-related tests fail, all predating the consolidation. None are caused by `LeducState`:

| Test | Symptom |
|------|---------|
| `export.ValidateGameTree` | Expects 0 non-terminal leaves, finds 3000 |
| `integration.VerifyGameLogic > terminal states and payoffs` | Expects history `"cc\|"`, gets `"cc"` — round-separator disagreement between test and implementation |
| `range.LeducRangeTest > LeducHand creation and conflicts` | `LeducHand` conflict logic |
| `range.LeducRangeTest > LeducRange excluding` | Expects weight 0.0, gets 1.0 |

The last two are `LeducHand`/`LeducRange` logic, unrelated to the game state. A targeted sweep (core, examples, regression, range, solver, zig) is **197 passed / 7 failed**; the other 3 failures are NLH blueprint and range-extraction tests.

## Design decisions

All major decisions (info set format, suit abstraction, EV calculation, CFR vs CFR+) are documented in `DESIGN_DECISIONS.md` at the project root.
