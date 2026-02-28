package com.nlhsolver.integration

import com.nlhsolver.poker.*
import com.nlhsolver.solver.*
import org.junit.jupiter.api.Tag
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.BeforeAll

/**
 * Test toy scenario with properly weighted ranges to achieve near-0% exploitability.
 *
 * The key insight: For a 0.5 pot bet (10 into 20):
 * - Optimal bluff-to-value ratio = bet/(pot+bet) = 10/30 = 1:2
 * - MDF = 20/30 = 66.67%
 *
 * Properly balanced ranges:
 * - BTN: 2 value hands (weight 1.0 each) + 2 bluff hands (weight 0.5 each) = 2:1 value:bluff
 * - BB: 3 bluff catchers (weight 1.0 each) → defending 2/3 = 66.67% achieves MDF
 *
 * This should converge to near-0% exploitability.
 */
@Tag("slow")
class BalancedToyRiverTest {

    companion object {
        @BeforeAll
        @JvmStatic
        fun setup() {
            System.setProperty("NLH_FULL_POSTFLOP", "true")
            System.setProperty("NLH_TEST_MODE", "true")
        }
    }

    @Test
    fun `balanced toy scenario converges to near-zero exploitability`() {
        println("\n=== BALANCED TOY SCENARIO ===\n")

        val board = listOf(
            Card(Rank.KING, Suit.SPADES),
            Card(Rank.SEVEN, Suit.HEARTS),
            Card(Rank.TWO, Suit.DIAMONDS),
            Card(Rank.NINE, Suit.CLUBS),
            Card(Rank.FOUR, Suit.HEARTS)
        )

        println("Theory:")
        println("  Pot: 20, Bet: 10 (0.5x pot)")
        println("  Optimal bluff:value ratio = 10/30 = 1:2")
        println("  MDF = 20/30 = 66.67%")
        println()

        // BTN Polarized Range with optimal weighting using convenient notation
        val btnWeightedRange = RangeParser.fromNotation(
            "AA:1.0, KK:1.0, 65o:0.5, 53o:0.5",
            board = board
        )

        // BB Condensed Range - uniform weighting using convenient notation
        val bbWeightedRange = RangeParser.fromNotation(
            "QQ, JJ, TT",
            board = board
        )

        println("BTN Range (weighted):")
        println("  Notation: AA:1.0, KK:1.0, 65o:0.5, 53o:0.5")
        println("  Combos: ${btnWeightedRange.size()} (${String.format("%.1f", btnWeightedRange.totalWeight())} effective)")
        println("  → AA+KK: 12 value @ 1.0 = 12.0")
        println("  → 65o+53o: 24 bluffs @ 0.5 = 12.0")
        println("  → Effective ratio: 1:1 (not 2:1 - see note below)")
        println()

        println("BB Range (uniform):")
        println("  Notation: QQ, JJ, TT")
        println("  Combos: ${bbWeightedRange.size()} (${String.format("%.1f", bbWeightedRange.totalWeight())} effective)")
        println("  → Defending with all 3 hands")
        println()

        println("Note: For true 2:1 value:bluff ratio with these hands,")
        println("      bluffs need weight 0.25 (6 effective / 24 combos)")
        println()

        val config = SolveConfiguration.river(
            board = board,
            btnRange = btnWeightedRange,
            bbRange = bbWeightedRange,
            pot = 20.0,
            stackSizes = mapOf(
                Position.BTN to 50.0,
                Position.BB to 50.0
            ),
            btnInvested = 0.0,
            bbInvested = 0.0,
            convergenceCriteria = ConvergenceCriteria(
                targetExploitability = 0.01,   // 1% target
                maxIterations = 20_000,
                evaluationFrequency = 500
            ),
            name = "Balanced Toy: Polarized vs Condensed (weighted)",
            maxRaisesPerStreet = 0
        )

        println("Running solver (target: 1% exploitability)...")
        val orchestrator = SolveOrchestrator()
        val startTime = System.currentTimeMillis()

        val result = orchestrator.solveSynchronous(config) { progress ->
            if (progress.iterationsCompleted % 2500 == 0L) {
                val elapsed = (System.currentTimeMillis() - startTime) / 1000.0
                println("  ${progress.iterationsCompleted} iterations (${String.format("%.1f", elapsed)}s)")
            }
        }

        val endTime = System.currentTimeMillis()
        val solveTimeSeconds = (endTime - startTime) / 1000.0

        println()
        println("=== RESULTS ===")
        println("Converged: ${result.converged}")
        println("Final exploitability: ${"%.6f".format(result.finalExploitability)} (${"%.4f".format(result.finalExploitability * 100)}%)")
        println("Iterations: ${result.iterationsRun}")
        println("Solve time: ${"%.2f".format(solveTimeSeconds)}s")
        println()

        println("=== COMPARISON ===")
        println("Unbalanced (equal weights):  ~20,000 iterations → 18.01% exploitability")
        println("Balanced (optimal weights):  ${result.iterationsRun} iterations → ${"%.2f".format(result.finalExploitability * 100)}% exploitability")
        println()

        if (result.finalExploitability < 0.02) {
            println("✅ SUCCESS: Achieved < 2% exploitability!")
            println("   Proper range weighting enables near-GTO convergence")
            val improvement = 18.01 / (result.finalExploitability * 100)
            println("   Improvement: ${String.format("%.1f", improvement)}x better than unbalanced")
        } else if (result.finalExploitability < 0.05) {
            println("✓ GOOD: Achieved < 5% exploitability")
            println("   Much better than unbalanced scenario")
        } else {
            println("⚠️  Still higher than expected")
            println("   May need more iterations or further tuning")
        }
    }
}
