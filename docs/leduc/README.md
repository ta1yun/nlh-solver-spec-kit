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

**Zig reference validation:** Our vanilla CFR traces match the zig reference implementation bit-for-bit at all checkpoints (100 iters: 6.09%, 1000 iters: 1.42%).

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
| `src/main/kotlin/com/nlhsolver/integration/LeducState.kt` | Canonical Leduc game state (chance nodes + suit abstraction) |
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

## Design decisions

All major decisions (info set format, suit abstraction, EV calculation, CFR vs CFR+) are documented in `DESIGN_DECISIONS.md` at the project root.
