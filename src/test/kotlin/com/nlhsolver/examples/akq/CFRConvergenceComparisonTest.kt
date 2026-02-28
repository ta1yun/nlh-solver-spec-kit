package com.nlhsolver.examples.akq

import com.nlhsolver.core.CFRSolver
import org.junit.jupiter.api.Tag
import org.junit.jupiter.api.Test
import kotlin.math.abs

/**
 * Compares CFRSolver convergence to AkqSolver and theoretical Nash equilibrium.
 *
 * For Kuhn poker (AKQ), the Nash equilibrium has a known closed form:
 * - With Q (worst card): bet with probability α ∈ [0, 1/3] (bluff frequency)
 * - With K (middle card): never bet initially (α_K ≈ 0)
 * - With A (best card): bet with probability related to α
 *
 * One valid Nash equilibrium is α ≈ 1/3 for Q bluffs.
 */
@Tag("slow")
class CFRConvergenceComparisonTest {

    @Test
    fun `compare AkqSolver vs CFRSolver convergence`() {
        println("\n=== Comparing AkqSolver vs CFRSolver ===\n")

        val iterations = 10_000_000

        // Train AkqSolver
        println("Training AkqSolver with ${"%,d".format(iterations)} iterations...")
        val akqSolver = AkqSolver()
        akqSolver.train(iterations)

        // Train CFRSolver
        println("Training CFRSolver with ${"%,d".format(iterations)} iterations...")
        val cfrSolver = CFRSolver(numPlayers = 2, enableCFRPlus = true, regretDiscountFactor = 0.999)
        val cfrAdapter = CFRSolverAdapter(cfrSolver)
        cfrAdapter.train(iterations)

        println("\n=== Strategy Comparison ===\n")

        // Compare key strategies
        val infoSets = listOf("Q", "K", "A")

        for (card in infoSets) {
            val akqStrat = akqSolver.getAverageStrategy(card)
            val cfrStrat = cfrAdapter.getAverageStrategy(card)

            println("Card $card (initial action):")
            println("  AkqSolver: bet=${String.format("%.4f", akqStrat["bet"])}, check=${String.format("%.4f", akqStrat["check"])}")
            println("  CFRSolver: bet=${String.format("%.4f", cfrStrat["bet"])}, check=${String.format("%.4f", cfrStrat["check"])}")

            // Check if they're close
            val betDiff = abs((akqStrat["bet"] ?: 0.0) - (cfrStrat["bet"] ?: 0.0))
            val checkDiff = abs((akqStrat["check"] ?: 0.0) - (cfrStrat["check"] ?: 0.0))

            println("  Difference: bet_diff=${String.format("%.6f", betDiff)}, check_diff=${String.format("%.6f", checkDiff)}")
            println()
        }

        // Calculate exploitability for both
        println("=== Exploitability Comparison ===\n")

        val akqExploit = AkqExploitabilityCalculator(akqSolver.asInterface()).calculateExploitability()
        println("AkqSolver exploitability: ${String.format("%.6f", akqExploit)}")

        val cfrExploit = AkqExploitabilityCalculator(cfrAdapter.asInterface()).calculateExploitability()
        println("CFRSolver exploitability: ${String.format("%.6f", cfrExploit)}")

        println("\n=== Theoretical Nash Equilibrium Check ===\n")

        // For Kuhn poker, one Nash equilibrium has:
        // Q (Jack) bluffs with α ∈ [0, 1/3]
        // K (Queen) never bets initially
        // A (King) bets frequently (around 3α in some formulations)

        val qBetFreq = cfrAdapter.getAverageStrategy("Q")["bet"] ?: 0.0
        val kBetFreq = cfrAdapter.getAverageStrategy("K")["bet"] ?: 0.0
        val aBetFreq = cfrAdapter.getAverageStrategy("A")["bet"] ?: 0.0

        println("CFRSolver strategies:")
        println("  Q bluff frequency (α): ${String.format("%.4f", qBetFreq)}")
        println("  K bet frequency: ${String.format("%.4f", kBetFreq)}")
        println("  A bet frequency: ${String.format("%.4f", aBetFreq)}")

        // Check if Q bluff frequency is in valid range [0, 1/3]
        val alphaValid = qBetFreq >= 0.0 && qBetFreq <= 1.0/3.0 + 0.05 // Allow 5% tolerance
        println("\nQ bluff frequency in theoretical range [0, 1/3]: $alphaValid")

        // Check if K (middle card) bets rarely
        val kBetsRarely = kBetFreq < 0.05
        println("K bets rarely (< 5%): $kBetsRarely")

        // For one Nash equilibrium formulation: A should bet at ~3α
        val expectedABet = 3 * qBetFreq
        val aDiff = abs(aBetFreq - expectedABet)
        println("\nIf using 3α formulation:")
        println("  Expected A bet frequency (3α): ${String.format("%.4f", expectedABet)}")
        println("  Actual A bet frequency: ${String.format("%.4f", aBetFreq)}")
        println("  Difference: ${String.format("%.4f", aDiff)}")

        if (aDiff > 0.02) {
            println("\n⚠ WARNING: A bet frequency doesn't match 3α formulation closely")
            println("  This might indicate:")
            println("  1. Converging to a different Nash equilibrium point")
            println("  2. Need more iterations for convergence")
            println("  3. Potential issue in CFR implementation")
        } else {
            println("\n✓ Strategies match theoretical Nash equilibrium (3α formulation)")
        }
    }

    @Test
    fun `test convergence over increasing iterations`() {
        println("\n=== Testing CFRSolver Convergence Rate ===\n")

        val iterationCounts = listOf(1_000, 10_000, 100_000, 1_000_000, 10_000_000)

        for (iterations in iterationCounts) {
            val cfrSolver = CFRSolver(numPlayers = 2, enableCFRPlus = true, regretDiscountFactor = 0.999)
            val adapter = CFRSolverAdapter(cfrSolver)
            adapter.train(iterations)

            val exploitability = AkqExploitabilityCalculator(adapter.asInterface()).calculateExploitability()
            val qBet = adapter.getAverageStrategy("Q")["bet"] ?: 0.0
            val aBet = adapter.getAverageStrategy("A")["bet"] ?: 0.0
            val expected3Alpha = 3 * qBet

            println("Iterations: ${"%,10d".format(iterations)}, " +
                    "Exploit: ${String.format("%.6f", exploitability)}, " +
                    "Q_bet: ${String.format("%.4f", qBet)}, " +
                    "A_bet: ${String.format("%.4f", aBet)}, " +
                    "3α: ${String.format("%.4f", expected3Alpha)}, " +
                    "Diff: ${String.format("%.4f", abs(aBet - expected3Alpha))}")
        }
    }
}
