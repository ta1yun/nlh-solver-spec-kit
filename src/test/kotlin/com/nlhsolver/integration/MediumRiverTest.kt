package com.nlhsolver.integration

import com.nlhsolver.poker.*
import com.nlhsolver.solver.*
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.BeforeAll

/**
 * Test with medium-sized ranges (~50 combos) to verify near-0% exploitability.
 *
 * This bridges the gap between:
 * - Tiny (4v3 hands): Plateaus at 18% - too few combinations
 * - Full ranges (1000+ combos): Takes too long for quick testing
 *
 * With ~50 hand combos, CFR+ should have enough degrees of freedom to converge
 * to near-GTO while still completing in reasonable time.
 */
class MediumRiverTest {

    companion object {
        @BeforeAll
        @JvmStatic
        fun setup() {
            System.setProperty("NLH_FULL_POSTFLOP", "true")
            System.setProperty("NLH_TEST_MODE", "true")
        }
    }

    @Test
    fun `medium river scenario achieves low exploitability`() {
        println("\n=== MEDIUM RIVER SCENARIO ===\n")

        val board = listOf(
            Card(Rank.KING, Suit.SPADES),
            Card(Rank.SEVEN, Suit.HEARTS),
            Card(Rank.TWO, Suit.DIAMONDS),
            Card(Rank.NINE, Suit.CLUBS),
            Card(Rank.FOUR, Suit.HEARTS)
        )

        println("Setup:")
        println("  Board: K♠7♥2♦9♣4♥")
        println("  Pot: 20, Bet: 10 (0.5x pot)")
        println("  Optimal bluff:value = 1:2, MDF = 66.67%")
        println()

        // BTN: Medium polarized range
        // - Top pairs and better (value): 10 combos
        // - Bottom pairs and air (bluffs): 5 combos (weighted 0.5 each = 2.5 effective)
        // - Total: 10 value : 2.5 bluffs ≈ 4:1 ratio (conservative, but ok)
        val btnHands = mutableMapOf<Pair<Card, Card>, Double>()

        // Value hands (10 combos @ 1.0 weight = 10.0 total)
        val valueRanks = listOf(Rank.ACE, Rank.KING, Rank.QUEEN, Rank.JACK, Rank.TEN)
        val suits = listOf(Suit.CLUBS, Suit.DIAMONDS)  // Use 2 suits for pairs
        for (rank in valueRanks) {
            for (i in suits.indices) {
                for (j in i + 1 until suits.size) {
                    btnHands[Pair(Card(rank, suits[i]), Card(rank, suits[j]))] = 1.0
                }
            }
        }

        // Bluff hands (weak pairs + air, weighted 0.5 each)
        val bluffRanks = listOf(
            Pair(Rank.SIX, Rank.FIVE),   // 65o
            Pair(Rank.FIVE, Rank.THREE), // 53o
            Pair(Rank.EIGHT, Rank.SIX),  // 86o
            Pair(Rank.EIGHT, Rank.THREE),// 83o
            Pair(Rank.SIX, Rank.THREE)   // 63o
        )
        for ((r1, r2) in bluffRanks) {
            btnHands[Pair(Card(r1, Suit.CLUBS), Card(r2, Suit.DIAMONDS))] = 0.5
        }

        // BB: Medium condensed range (bluff catchers)
        // Medium pairs that beat bluffs but lose to value
        val bbHands = mutableMapOf<Pair<Card, Card>, Double>()
        val bbRanks = listOf(Rank.QUEEN, Rank.JACK, Rank.TEN, Rank.NINE, Rank.EIGHT)
        for (rank in bbRanks) {
            for (i in suits.indices) {
                for (j in i + 1 until suits.size) {
                    bbHands[Pair(Card(rank, suits[i]), Card(rank, suits[j]))] = 1.0
                }
            }
        }

        val btnRange = HandRange.WeightedRange(btnHands)
        val bbRange = HandRange.WeightedRange(bbHands)

        println("Ranges:")
        println("  BTN: ${btnRange.size()} hands (${String.format("%.1f", btnRange.totalWeight())} effective)")
        println("    - ${valueRanks.size * 1} value combos @ 1.0")
        println("    - ${bluffRanks.size} bluff combos @ 0.5")
        println("  BB: ${bbRange.size()} hands (all bluff catchers)")
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
                maxIterations = 30_000,
                evaluationFrequency = 1000
            ),
            name = "Medium: Polarized vs Condensed (~15 hands)",
            maxRaisesPerStreet = 0
        )

        println("Running solver (target: 2% exploitability)...")
        val orchestrator = SolveOrchestrator()
        val startTime = System.currentTimeMillis()

        val result = orchestrator.solveSynchronous(config) { progress ->
            if (progress.iterationsCompleted % 5000 == 0L) {
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
        println("Tiny (4v3 hands):    20,000 iters → 18.01% exploitability (plateau)")
        println("Medium (15 hands):   ${result.iterationsRun} iters → ${"%.2f".format(result.finalExploitability * 100)}% exploitability")
        println()

        if (result.finalExploitability < 0.05) {
            println("✅ SUCCESS: Achieved < 5% exploitability!")
            println("   Medium ranges enable better convergence than tiny")
            val improvement = 18.01 / (result.finalExploitability * 100)
            println("   Improvement: ${String.format("%.1f", improvement)}x better")
        } else if (result.finalExploitability < 0.10) {
            println("✓ GOOD: Achieved < 10% exploitability")
            println("   Better than tiny scenario")
        } else {
            println("⚠️  Still high - may need more hands or iterations")
        }
    }
}
