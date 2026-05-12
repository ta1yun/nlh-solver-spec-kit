package com.nlhsolver.integration

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.SamplingMode
import io.kotest.core.spec.style.FunSpec

/**
 * Debug why regrets are over-counted when training multiple deals.
 */
class DebugRegretAccumulationTest : FunSpec({

    test("Trace regret updates for P0:J across 2 deals") {
        println("\n=== Debug Regret Updates ===\n")

        val deal1 = LeducState(p1Card = 0, p2Card = 2, boardCard = 4, round = 1, history = "")
        val deal2 = LeducState(p1Card = 1, p2Card = 3, boardCard = 5, round = 1, history = "")

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = false,
            samplingMode = SamplingMode.VANILLA
        )

        println("Processing deal 1...")
        solver.trainOnDeals(listOf(deal1), iterations = 1)

        var profile = solver.getStrategyProfile()
        var p0J = profile.getAllInfoSets().find { it.infoSet == "P0:J " }
        p0J?.let {
            println("After deal 1: Check=${String.format("%.6f", it.getRegrets()[0])}, Bet=${String.format("%.6f", it.getRegrets()[1])}, Visits=${it.getVisitCount()}")
        }

        println("\nProcessing deal 2...")
        solver.trainOnDeals(listOf(deal2), iterations = 1)

        profile = solver.getStrategyProfile()
        p0J = profile.getAllInfoSets().find { it.infoSet == "P0:J " }
        p0J?.let {
            println("After deal 2: Check=${String.format("%.6f", it.getRegrets()[0])}, Bet=${String.format("%.6f", it.getRegrets()[1])}, Visits=${it.getVisitCount()}")
        }

        println("\n--- Expected ---")
        println("After deal 1: Check≈-0.024, Bet≈0.024, Visits=1")
        println("After deal 2: Check≈-0.049, Bet≈0.049, Visits=2")
        println("(sum of individual contributions)")

        println("\n--- Now process both deals in one iteration ---")
        val solver2 = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = false,
            samplingMode = SamplingMode.VANILLA
        )

        solver2.trainOnDeals(listOf(deal1, deal2), iterations = 1)

        val profile2 = solver2.getStrategyProfile()
        val p0J2 = profile2.getAllInfoSets().find { it.infoSet == "P0:J " }
        if (p0J2 != null) {
            println("\nProcessing both in 1 iteration: Check=${String.format("%.6f", p0J2.getRegrets()[0])}, Bet=${String.format("%.6f", p0J2.getRegrets()[1])}, Visits=${p0J2.getVisitCount()}")
        }

        println("\nThese should match, but they don't!")
    }

    test("Check if strategies are changing mid-iteration") {
        println("\n=== Check Strategy Evolution ===\n")

        val deals = listOf(
            LeducState(p1Card = 0, p2Card = 2, boardCard = 4, round = 1, history = ""),
            LeducState(p1Card = 1, p2Card = 3, boardCard = 5, round = 1, history = "")
        )

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = false,
            samplingMode = SamplingMode.VANILLA
        )

        println("Before training: All regrets should be 0")
        solver.trainOnDeals(deals.take(1), iterations = 1)

        val profile = solver.getStrategyProfile()
        val p0J = profile.getAllInfoSets().find { it.infoSet == "P0:J " }!!
        val avgStrat1 = p0J.getAverageStrategy()

        println("After processing deal 1:")
        println("  Cumulative regrets: ${p0J.getRegrets().contentToString()}")
        println("  Avg strategy: ${avgStrat1.contentToString()}")
        println("  Current strategy (from regrets): [${String.format("%.4f", maxOf(0.0, p0J.getRegrets()[0]) / (maxOf(0.0, p0J.getRegrets()[0]) + maxOf(0.0, p0J.getRegrets()[1])))}, ...]")

        println("\nQuestion: When processing deal 2, what strategy is used?")
        println("  - Should use uniform [0.5, 0.5] (from iteration 0)")
        println("  - Or does it use strategy from deal 1's regrets?")
    }
})
