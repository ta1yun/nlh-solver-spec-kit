package com.nlhsolver.regression

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.integration.LeducWithSuitAbstraction
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.plusOrMinus
import io.kotest.matchers.shouldBe
import kotlin.math.abs

/**
 * Regression test for Leduc Hold'em solver.
 *
 * PURPOSE: Ensure that refactoring (e.g., switching to in-tree chance nodes for external sampling)
 * doesn't break convergence. We verify that the new implementation produces strategies within
 * tolerance of the baseline.
 *
 * METHODOLOGY:
 * 1. Define key info sets representing important strategic decisions
 * 2. Train baseline solver with current implementation
 * 3. After refactoring, train new solver with same iteration count
 * 4. Compare strategies at key info sets (should be within 5% tolerance)
 *
 * WHY THIS WORKS:
 * - CFR converges to Nash equilibrium regardless of sampling scheme
 * - Different implementations should produce same equilibrium (within variance)
 * - Tolerance accounts for stochastic nature of sampling
 */
class LeducSolverRegressionTest : FunSpec({

    /**
     * Key strategic decision points to test.
     * Format: (infoSet, actionCount, description)
     */
    val keyInfoSets = listOf(
        // Round 1 root decisions
        Triple("K ", 2, "K preflop: check or bet"),
        Triple("Q ", 2, "Q preflop: check or bet"),
        Triple("J ", 2, "J preflop: check or bet"),

        // Round 1 facing bet
        Triple("K b", 3, "K facing bet: fold/call/raise"),
        Triple("Q b", 3, "Q facing bet: fold/call/raise"),
        Triple("J b", 3, "J facing bet: fold/call/raise"),

        // Round 1 after check-bet
        Triple("K xb", 3, "K after check-bet: fold/call/raise"),
        Triple("Q xb", 3, "Q after check-bet: fold/call/raise"),

        // Round 2 common spots (board Q as example)
        Triple("KQ ", 2, "K on Q board: check or bet"),
        Triple("QQ ", 2, "Q on Q board (pair): check or bet"),
        Triple("JQ ", 2, "J on Q board: check or bet"),

        // Round 2 facing bet
        Triple("KQ b", 3, "K on Q board facing bet: fold/call/raise"),
        Triple("QQ b", 3, "Q on Q board facing bet: fold/call/raise"),
        Triple("JQ b", 3, "J on Q board facing bet: fold/call/raise"),
    )

    /**
     * Baseline test: capture current solution for comparison.
     * Run this first to establish the baseline.
     */
    test("Baseline: capture current solver output") {
        val iterations = 500000
        println("\n=== Baseline: Training for $iterations iterations ===")

        val profile = trainCurrentSolver(iterations)

        println("\n=== Key Info Set Strategies (Baseline) ===")
        for ((infoSet, numActions, description) in keyInfoSets) {
            val strategy = profile.getInfoSetStrategy(infoSet, numActions).getAverageStrategy()
            println("$infoSet ($description):")
            println("  Strategy: ${strategy.map { "%.3f".format(it) }.joinToString(", ")}")
        }

        // This test always passes - it's just for capturing baseline
        true shouldBe true
    }

    /**
     * Regression test: verify refactored solver matches baseline.
     * Run this AFTER refactoring to verify convergence.
     */
    test("Regression: refactored solver matches baseline").config(enabled = false) {
        val iterations = 500000
        val tolerance = 0.05  // 5% tolerance for action probabilities

        println("\n=== Training baseline and refactored solvers ===")

        val baseline = trainCurrentSolver(iterations)
        val refactored = trainRefactoredSolver(iterations)

        println("\n=== Comparing Strategies ===")
        var maxDiff = 0.0
        var failCount = 0

        for ((infoSet, numActions, description) in keyInfoSets) {
            val baseStrat = baseline.getInfoSetStrategy(infoSet, numActions).getAverageStrategy()
            val newStrat = refactored.getInfoSetStrategy(infoSet, numActions).getAverageStrategy()

            println("\n$infoSet ($description):")
            println("  Baseline:   ${baseStrat.map { "%.3f".format(it) }.joinToString(", ")}")
            println("  Refactored: ${newStrat.map { "%.3f".format(it) }.joinToString(", ")}")

            // Check each action probability is within tolerance
            for (i in 0 until numActions) {
                val diff = abs(baseStrat[i] - newStrat[i])
                maxDiff = maxOf(maxDiff, diff)

                if (diff > tolerance) {
                    println("  ❌ Action $i differs by ${diff.format()}: ${baseStrat[i].format()} vs ${newStrat[i].format()}")
                    failCount++
                } else {
                    println("  ✓ Action $i within tolerance: diff = ${diff.format()}")
                }

                // Assert within tolerance
                newStrat[i] shouldBe (baseStrat[i] plusOrMinus tolerance)
            }
        }

        println("\n=== Summary ===")
        println("Max difference: ${maxDiff.format()}")
        println("Failed checks: $failCount")
        println("Tolerance: $tolerance")

        failCount shouldBe 0
    }
})

/**
 * Train solver using CURRENT implementation (manual board rotation).
 */
private fun trainCurrentSolver(iterations: Int): StrategyProfile {
    val allCards = 0..5
    val allMatchups = mutableListOf<LeducWithSuitAbstraction>()

    // Generate all valid matchups
    for (p1 in allCards) {
        for (p2 in allCards) {
            for (board in allCards) {
                if (p1 != p2 && p1 != board && p2 != board) {
                    allMatchups.add(
                        LeducWithSuitAbstraction(
                            p1Card = p1,
                            p2Card = p2,
                            boardCard = board,
                            round = 1,
                            p1Invested = 1.0,
                            p2Invested = 1.0,
                            history = ""
                        )
                    )
                }
            }
        }
    }

    val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
    repeat(iterations) { i ->
        val matchup = allMatchups[i % allMatchups.size]
        solver.train(matchup, iterations = 1)
        if ((i + 1) % 100000 == 0) println("  ${i + 1} iterations")
    }

    return solver.getStrategyProfile()
}

/**
 * Train solver using REFACTORED implementation (chance nodes in tree).
 * TODO: Implement this after refactoring Leduc to use in-tree chance nodes.
 */
private fun trainRefactoredSolver(iterations: Int): StrategyProfile {
    TODO("Implement after refactoring Leduc to use chance nodes")

    // This will look like:
    // val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true, samplingMode = SamplingMode.EXTERNAL)
    // val rootState = LeducWithChanceNodes(/* initial state without board */)
    // solver.train(rootState, iterations)
    // return solver.getStrategyProfile()
}

private fun Double.format() = "%.4f".format(this)
