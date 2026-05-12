package com.nlhsolver.integration

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.SamplingMode
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeWithinPercentageOf

/**
 * Isolate the regret accumulation discrepancy.
 *
 * Method 1: Train each deal in a separate solver, sum regrets
 * Method 2: Train all deals in one solver
 * These MUST produce the same result if CFR is implemented correctly.
 */
class IsolateRegretBugTest : FunSpec({

    test("Method 1: Train 3 deals separately and sum regrets") {
        println("\n=== Method 1: Separate solvers ===\n")

        // Use just 3 deals for simplicity
        val deals = listOf(
            LeducState(p1Card = 0, p2Card = 2, boardCard = 4, round = 1, history = ""),
            LeducState(p1Card = 1, p2Card = 2, boardCard = 4, round = 1, history = ""),
            LeducState(p1Card = 0, p2Card = 3, boardCard = 5, round = 1, history = "")
        )

        var sumCheckRegret = 0.0
        var sumBetRegret = 0.0

        for ((idx, deal) in deals.withIndex()) {
            val solver = CFRSolver(
                numPlayers = 2,
                enableCFRPlus = false,
                samplingMode = SamplingMode.VANILLA
            )

            solver.train(deal, iterations = 1)

            val profile = solver.getStrategyProfile()
            val p0J = profile.getAllInfoSets().find { it.infoSet == "P0:J " }

            if (p0J != null) {
                val regrets = p0J.getRegrets()
                println("Deal $idx: Check=${String.format("%.6f", regrets[0])}, Bet=${String.format("%.6f", regrets[1])}")
                sumCheckRegret += regrets[0]
                sumBetRegret += regrets[1]
            }
        }

        println("\nSum: Check=${String.format("%.6f", sumCheckRegret)}, Bet=${String.format("%.6f", sumBetRegret)}")
        println()
    }

    test("Method 2: Train all 3 deals in one solver") {
        println("\n=== Method 2: Single solver ===\n")

        // Same 3 deals
        val deals = listOf(
            LeducState(p1Card = 0, p2Card = 2, boardCard = 4, round = 1, history = ""),
            LeducState(p1Card = 1, p2Card = 2, boardCard = 4, round = 1, history = ""),
            LeducState(p1Card = 0, p2Card = 3, boardCard = 5, round = 1, history = "")
        )

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = false,
            samplingMode = SamplingMode.VANILLA
        )

        solver.trainOnDeals(deals, iterations = 1)

        val profile = solver.getStrategyProfile()
        val p0J = profile.getAllInfoSets().find { it.infoSet == "P0:J " }

        if (p0J != null) {
            val regrets = p0J.getRegrets()
            println("Combined: Check=${String.format("%.6f", regrets[0])}, Bet=${String.format("%.6f", regrets[1])}")
            println("Visits: ${p0J.getVisitCount()}")
        }
        println()
    }

    test("Verify both methods match") {
        val deals = listOf(
            LeducState(p1Card = 0, p2Card = 2, boardCard = 4, round = 1, history = ""),
            LeducState(p1Card = 1, p2Card = 2, boardCard = 4, round = 1, history = ""),
            LeducState(p1Card = 0, p2Card = 3, boardCard = 5, round = 1, history = "")
        )

        // Method 1: Separate
        var sumCheckRegret = 0.0
        var sumBetRegret = 0.0
        for (deal in deals) {
            val solver = CFRSolver(numPlayers = 2, enableCFRPlus = false, samplingMode = SamplingMode.VANILLA)
            solver.train(deal, iterations = 1)
            val p0J = solver.getStrategyProfile().getAllInfoSets().find { it.infoSet == "P0:J " }
            if (p0J != null) {
                sumCheckRegret += p0J.getRegrets()[0]
                sumBetRegret += p0J.getRegrets()[1]
            }
        }

        // Method 2: Combined
        val combinedSolver = CFRSolver(numPlayers = 2, enableCFRPlus = false, samplingMode = SamplingMode.VANILLA)
        combinedSolver.trainOnDeals(deals, iterations = 1)
        val p0JCombined = combinedSolver.getStrategyProfile().getAllInfoSets().find { it.infoSet == "P0:J " }!!
        val combinedCheckRegret = p0JCombined.getRegrets()[0]
        val combinedBetRegret = p0JCombined.getRegrets()[1]

        println("\nMethod 1 (sum): Check=$sumCheckRegret, Bet=$sumBetRegret")
        println("Method 2 (combined): Check=$combinedCheckRegret, Bet=$combinedBetRegret")

        // These should match within floating point error
        combinedCheckRegret.shouldBeWithinPercentageOf(sumCheckRegret, 0.1)
        combinedBetRegret.shouldBeWithinPercentageOf(sumBetRegret, 0.1)
    }
})
