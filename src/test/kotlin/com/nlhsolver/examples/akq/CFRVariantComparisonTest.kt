package com.nlhsolver.examples.akq

import com.nlhsolver.core.CFRSolver
import org.junit.jupiter.api.Test

/**
 * Test different CFR variants to identify the convergence issue.
 */
class CFRVariantComparisonTest {

    @Test
    fun `compare vanilla CFR vs CFR+ variants`() {
        println("\n=== Comparing CFR Variants ===\n")

        val iterations = 1_000_000

        // 1. Vanilla CFR (no optimizations)
        println("1. Training Vanilla CFR (no CFR+)...")
        val vanillaSolver = CFRSolver(numPlayers = 2, enableCFRPlus = false)
        val vanillaAdapter = CFRSolverAdapter(vanillaSolver)
        vanillaAdapter.train(iterations)
        val vanillaExploit = AkqExploitabilityCalculator(vanillaAdapter.asInterface()).calculateExploitability()

        // 2. CFR+ with regret discounting
        println("2. Training CFR+ (discount = 0.999)...")
        val cfrPlusSolver = CFRSolver(numPlayers = 2, enableCFRPlus = true, regretDiscountFactor = 0.999)
        val cfrPlusAdapter = CFRSolverAdapter(cfrPlusSolver)
        cfrPlusAdapter.train(iterations)
        val cfrPlusExploit = AkqExploitabilityCalculator(cfrPlusAdapter.asInterface()).calculateExploitability()

        // 3. CFR+ without regret discounting (only RM+)
        println("3. Training CFR+ (discount = 1.0, RM+ only)...")
        val rmPlusSolver = CFRSolver(numPlayers = 2, enableCFRPlus = true, regretDiscountFactor = 1.0)
        val rmPlusAdapter = CFRSolverAdapter(rmPlusSolver)
        rmPlusAdapter.train(iterations)
        val rmPlusExploit = AkqExploitabilityCalculator(rmPlusAdapter.asInterface()).calculateExploitability()

        // 4. AkqSolver baseline
        println("4. Training AkqSolver (baseline)...")
        val akqSolver = AkqSolver()
        akqSolver.train(iterations)
        val akqExploit = AkqExploitabilityCalculator(akqSolver.asInterface()).calculateExploitability()

        println("\n=== Results (${"%,d".format(iterations)} iterations) ===\n")
        println("Vanilla CFR exploitability:    ${String.format("%.6f", vanillaExploit)}")
        println("CFR+ (0.999) exploitability:   ${String.format("%.6f", cfrPlusExploit)}")
        println("RM+ only (1.0) exploitability: ${String.format("%.6f", rmPlusExploit)}")
        println("AkqSolver exploitability:      ${String.format("%.6f", akqExploit)}")

        println("\n=== Strategy Comparison ===\n")

        fun printStrat(name: String, qBet: Double, kBet: Double, aBet: Double) {
            println("$name: Q=${String.format("%.4f", qBet)}, K=${String.format("%.4f", kBet)}, A=${String.format("%.4f", aBet)}")
        }

        printStrat("Vanilla CFR",
            vanillaAdapter.getAverageStrategy("Q")["bet"] ?: 0.0,
            vanillaAdapter.getAverageStrategy("K")["bet"] ?: 0.0,
            vanillaAdapter.getAverageStrategy("A")["bet"] ?: 0.0)

        printStrat("CFR+ (0.999)",
            cfrPlusAdapter.getAverageStrategy("Q")["bet"] ?: 0.0,
            cfrPlusAdapter.getAverageStrategy("K")["bet"] ?: 0.0,
            cfrPlusAdapter.getAverageStrategy("A")["bet"] ?: 0.0)

        printStrat("RM+ only   ",
            rmPlusAdapter.getAverageStrategy("Q")["bet"] ?: 0.0,
            rmPlusAdapter.getAverageStrategy("K")["bet"] ?: 0.0,
            rmPlusAdapter.getAverageStrategy("A")["bet"] ?: 0.0)

        printStrat("AkqSolver  ",
            akqSolver.getAverageStrategy("Q")["bet"] ?: 0.0,
            akqSolver.getAverageStrategy("K")["bet"] ?: 0.0,
            akqSolver.getAverageStrategy("A")["bet"] ?: 0.0)
    }
}
