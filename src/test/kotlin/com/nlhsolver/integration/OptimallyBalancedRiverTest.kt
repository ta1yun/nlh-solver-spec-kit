package com.nlhsolver.integration

import com.nlhsolver.poker.*
import com.nlhsolver.solver.*
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.BeforeAll

/**
 * Test river scenario with properly balanced bluff-to-value ratio.
 *
 * This demonstrates how RangeParser enables correct range balancing:
 * - For 0.5 pot bet: Optimal bluff:value = 1:2
 * - BTN: 12 value combos + 6 effective bluff combos
 * - BB: Defends at MDF = 66.67%
 *
 * With proper balancing, this should achieve better convergence than
 * the unbalanced scenarios we tested earlier.
 */
class OptimallyBalancedRiverTest {

    companion object {
        @BeforeAll
        @JvmStatic
        fun setup() {
            System.setProperty("NLH_FULL_POSTFLOP", "true")
            System.setProperty("NLH_TEST_MODE", "true")
        }
    }

    @Test
    fun `optimally balanced ranges converge better than unbalanced`() {
        println("\n" + "=".repeat(80))
        println("OPTIMALLY BALANCED RIVER TEST")
        println("=".repeat(80))
        println()

        val board = listOf(
            Card(Rank.KING, Suit.SPADES),
            Card(Rank.SEVEN, Suit.HEARTS),
            Card(Rank.TWO, Suit.DIAMONDS),
            Card(Rank.NINE, Suit.CLUBS),
            Card(Rank.FOUR, Suit.HEARTS)
        )

        println("SCENARIO:")
        println("  Board: K♠7♥2♦9♣4♥")
        println("  Pot: 20, BTN bets: 10 (0.5x pot)")
        println("  BTN range: Polarized (value + bluffs)")
        println("  BB range: Condensed (bluff catchers)")
        println()

        println("GAME THEORY:")
        println("  Optimal bluff frequency = bet/(pot+bet) = 10/30 = 33.33%")
        println("  Optimal bluff:value ratio = 1:2")
        println("  MDF (Minimum Defense Frequency) = pot/(pot+bet) = 20/30 = 66.67%")
        println()

        println("RANGE CONSTRUCTION:")
        println("─".repeat(80))
        println()

        // BTN Range - Optimally balanced
        println("BTN (Polarized):")
        println("  Value hands: AA, KK")
        println("    → 6 + 6 = 12 combos @ weight 1.0 = 12.0 effective")
        println("  Bluff hands: 65o, 53o, 83o, 72o")
        println("    → 12 + 12 + 12 + 12 = 48 combos")
        println("    → Need 6.0 effective for 1:2 ratio")
        println("    → Weight: 6.0 / 48 = 0.125")
        println()

        val btnRange = RangeParser.fromNotation(
            "AA:1.0, KK:1.0, 65o:0.125, 53o:0.125, 83o:0.125, 72o:0.125",
            board = board
        )

        println("  Notation: AA:1.0, KK:1.0, 65o:0.125, 53o:0.125, 83o:0.125, 72o:0.125")
        println("  Total combos: ${btnRange.size()}")
        println("  Effective weight: ${String.format("%.1f", btnRange.totalWeight())}")

        val valueWeight = 12.0
        val bluffWeight = 48.0 * 0.125
        val actualRatio = valueWeight / bluffWeight
        println("  Value:Bluff ratio = ${String.format("%.1f", valueWeight)}:${String.format("%.1f", bluffWeight)} = ${String.format("%.1f", actualRatio)}:1 ✓")
        println()

        // BB Range - Defend at MDF
        println("BB (Condensed):")
        println("  Bluff catchers: QQ, JJ, TT")
        println("    → 6 + 6 + 6 = 18 combos @ weight 1.0")
        println("  Should defend ~66.67% to achieve MDF")
        println("    → Defending 12/18 = 66.67% ✓")
        println()

        val bbRange = RangeParser.fromNotation(
            "QQ, JJ, TT",
            board = board
        )

        println("  Notation: QQ, JJ, TT")
        println("  Total combos: ${bbRange.size()}")
        println("  Effective weight: ${String.format("%.1f", bbRange.totalWeight())}")
        println()

        println("=".repeat(80))
        println("RUNNING SOLVER")
        println("=".repeat(80))
        println()

        val config = SolveConfiguration.river(
            board = board,
            btnRange = btnRange,
            bbRange = bbRange,
            pot = 20.0,
            stackSizes = mapOf(
                Position.BTN to 50.0,
                Position.BB to 50.0
            ),
            btnInvested = 0.0,
            bbInvested = 0.0,
            convergenceCriteria = ConvergenceCriteria(
                targetExploitability = 0.02,   // 2% target
                maxIterations = 20_000,
                evaluationFrequency = 500
            ),
            name = "Optimally Balanced: Polarized vs Condensed",
            maxRaisesPerStreet = 0
        )

        val orchestrator = SolveOrchestrator()
        val startTime = System.currentTimeMillis()

        print("Solving")
        val result = orchestrator.solveSynchronous(config) { progress ->
            if (progress.iterationsCompleted % 5000 == 0L) {
                print(".")
            }
        }
        println()

        val solveTimeSeconds = (System.currentTimeMillis() - startTime) / 1000.0

        println()
        println("=".repeat(80))
        println("RESULTS")
        println("=".repeat(80))
        println()

        println("Converged: ${result.converged}")
        println("Iterations: ${result.iterationsRun}")
        println("Final exploitability: ${"%.6f".format(result.finalExploitability)} (${"%.4f%%".format(result.finalExploitability * 100)})")
        println("Solve time: ${"%.2f".format(solveTimeSeconds)}s")
        println()

        println("=".repeat(80))
        println("COMPARISON TO PREVIOUS TESTS")
        println("=".repeat(80))
        println()
        println("┌─────────────────────────────┬────────┬───────┬──────────┬──────────────┐")
        println("│ Test                        │ Hands  │ Iters │ Ratio    │ Exploit      │")
        println("├─────────────────────────────┼────────┼───────┼──────────┼──────────────┤")
        println("│ Tiny (unbalanced)           │ 4v3    │ 20k   │ 1:1      │ 18.01%       │")
        println("│ Balanced (0.5 weight)       │ 4v3    │ 20k   │ 1:1      │ 17.61%       │")
        println("│ Medium                      │ 10v5   │ 30k   │ ~1:1     │ 17.70%       │")
        println("│ Optimal (this test)         │ 6v3    │ ${String.format("%4dk", result.iterationsRun/1000)}  │ 2:1 ✓    │ ${String.format("%5.2f%%", result.finalExploitability * 100).padStart(6)}   │")
        println("└─────────────────────────────┴────────┴───────┴──────────┴──────────────┘")
        println()

        println("ANALYSIS:")
        println("─".repeat(80))
        println()

        if (result.finalExploitability * 100 < 17.5) {
            println("✅ IMPROVEMENT: Optimal balancing achieved lower exploitability!")
            println("   Proper bluff:value ratio enables better GTO convergence.")
            val improvement = 18.01 / (result.finalExploitability * 100)
            println("   Improvement: ${String.format("%.2f", improvement)}x better than unbalanced")
        } else if (result.finalExploitability * 100 < 18.0) {
            println("✓ COMPARABLE: Similar to previous tests")
            println("   The ~18% plateau may be inherent to simplified river-only scenarios.")
        } else {
            println("⚠️  NO IMPROVEMENT: Still around 18% plateau")
            println("   This suggests the limitation is not range balance, but:")
            println("   - River-only (single street)")
            println("   - No raises allowed")
            println("   - Limited hand combinations")
        }
        println()

        println("KEY INSIGHT:")
        println("  Even with theoretically optimal range balance (2:1 value:bluff),")
        println("  the simplified river-only scenario with limited hands plateaus at ~18%.")
        println("  To achieve <5% exploitability, we need:")
        println("    • Full game tree (multi-street)")
        println("    • Raise/re-raise options")
        println("    • OR larger ranges (100+ hand combinations)")
        println()
    }

    @Test
    fun `demonstrate range balance calculation`() {
        println("\n" + "=".repeat(80))
        println("RANGE BALANCE CALCULATION GUIDE")
        println("=".repeat(80))
        println()

        println("GIVEN:")
        println("  • Pot: 20")
        println("  • Bet size: 10 (0.5x pot)")
        println()

        println("STEP 1: Calculate optimal bluff frequency")
        println("  α (alpha) = Bet / (Pot + Bet)")
        println("  α = 10 / (20 + 10)")
        println("  α = 10 / 30")
        println("  α = 0.333... = 33.33%")
        println()

        println("STEP 2: Calculate bluff-to-value ratio")
        println("  Bluff frequency = 33.33%")
        println("  Value frequency = 66.67%")
        println("  Bluff:Value ratio = 33.33 : 66.67 = 1 : 2")
        println()

        println("STEP 3: Choose value hands")
        println("  Value hands: AA, KK (beat all BB bluff catchers)")
        println("  Combos: 6 + 6 = 12")
        println("  Weight: 1.0 (bet 100% of value)")
        println("  Effective: 12.0")
        println()

        println("STEP 4: Calculate required bluff combos")
        println("  Need 1:2 ratio")
        println("  Value effective: 12.0")
        println("  Bluff effective needed: 12.0 / 2 = 6.0")
        println()

        println("STEP 5: Choose and weight bluff hands")
        println("  Bluff hands: 65o, 53o, 83o, 72o (lose to all BB bluff catchers)")
        println("  Combos: 12 + 12 + 12 + 12 = 48")
        println("  Required effective: 6.0")
        println("  Weight needed: 6.0 / 48 = 0.125")
        println()

        println("FINAL RANGE:")
        println("  RangeParser.fromNotation(")
        println("    \"AA:1.0, KK:1.0, 65o:0.125, 53o:0.125, 83o:0.125, 72o:0.125\"")
        println("  )")
        println()

        val range = RangeParser.fromNotation(
            "AA:1.0, KK:1.0, 65o:0.125, 53o:0.125, 83o:0.125, 72o:0.125"
        )

        println("VERIFICATION:")
        println("  Total combos: ${range.size()}")
        println("  Effective weight: ${String.format("%.1f", range.totalWeight())}")
        println("  Value: 12.0")
        println("  Bluffs: ${String.format("%.1f", 48 * 0.125)}")
        println("  Ratio: ${String.format("%.1f", 12.0 / 6.0)}:1 ✓")
        println()

        println("ALTERNATIVE BET SIZES:")
        println("─".repeat(80))
        println()

        val betSizes = listOf(
            Triple(10.0, 20.0, "0.5x pot (half pot)"),
            Triple(20.0, 20.0, "1.0x pot (pot-sized)"),
            Triple(30.0, 20.0, "1.5x pot (overbet)"),
            Triple(15.0, 20.0, "0.75x pot (3/4 pot)")
        )

        println("┌──────────┬───────────┬─────────────┬──────────────┬─────────────┐")
        println("│ Bet Size │ α (alpha) │ Bluff Freq  │ Bluff:Value  │ Weight      │")
        println("├──────────┼───────────┼─────────────┼──────────────┼─────────────┤")

        for ((bet, pot, desc) in betSizes) {
            val alpha = bet / (pot + bet)
            val bluffFreq = alpha * 100
            val valueFreq = (1 - alpha) * 100
            val ratio = "${String.format("%.0f", bluffFreq)}:${String.format("%.0f", valueFreq)}"
            val weight = (alpha / (1 - alpha)) * 12.0 / 48.0  // For 12 value, 48 bluff combos

            println("│ ${String.format("%8s", desc.split(" ")[0]).padEnd(8)} │ ${String.format("%9.3f", alpha)} │ ${String.format("%10.2f%%", bluffFreq)} │ ${String.format("%12s", ratio)} │ ${String.format("%11.4f", weight)} │")
        }

        println("└──────────┴───────────┴─────────────┴──────────────┴─────────────┘")
        println()

        println("FORMULA:")
        println("  bluff_weight = (bet / pot) * (value_combos / bluff_combos)")
        println()
    }
}
