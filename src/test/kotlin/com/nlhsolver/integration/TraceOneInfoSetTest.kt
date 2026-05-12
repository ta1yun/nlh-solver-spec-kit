package com.nlhsolver.integration

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.SamplingMode
import io.kotest.core.spec.style.FunSpec

/**
 * Trace a single info set's evolution over iterations.
 * Compare with zig implementation to find divergence.
 */
class TraceOneInfoSetTest : FunSpec({

    test("Trace P0:J initial decision over 10 iterations") {
        println("\n=== Tracing P0:J (empty history) ===\n")

        // Generate all 120 deals
        val allDeals = mutableListOf<LeducState>()
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 == p2) continue
                for (board in 0..5) {
                    if (board == p1 || board == p2) continue
                    allDeals.add(
                        LeducState(p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = "")
                    )
                }
            }
        }

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = false,
            samplingMode = SamplingMode.VANILLA
        )

        val tracedInfoSet = "P0:J "
        println("Iteration | Check Prob | Bet Prob | Regret[Check] | Regret[Bet] | Visits")
        println("----------|------------|----------|---------------|-------------|-------")

        for (iter in 1..10) {
            // Train one iteration: traverse all deals once
            solver.trainOnDeals(allDeals, iterations = 1)

            // Get strategy for the traced info set
            val profile = solver.getStrategyProfile()
            val infoSetStrat = profile.getAllInfoSets().find { it.infoSet == tracedInfoSet }

            if (infoSetStrat != null) {
                val avgStrat = infoSetStrat.getAverageStrategy()
                val regrets = infoSetStrat.getRegrets()
                val visits = infoSetStrat.getVisitCount()

                println(String.format("%9d | %10.6f | %8.6f | %13.6f | %11.6f | %6d",
                    iter,
                    avgStrat[0],  // Check probability
                    avgStrat[1],  // Bet probability
                    regrets[0],   // Check regret
                    regrets[1],   // Bet regret
                    visits
                ))
            } else {
                println(String.format("%9d | (info set not found)", iter))
            }
        }

        println("\n=== Now run zig with tracing ===\n")
        println("We need to modify zig to output the same info set's evolution.")
        println("Info set to trace: '$tracedInfoSet'")
        println("Actions: [0=check, 1=bet]")
    }

    test("Trace P1:J x (after P0 checks) over 10 iterations") {
        println("\n=== Tracing P1:J x (P1 facing check) ===\n")

        // Generate all 120 deals
        val allDeals = mutableListOf<LeducState>()
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 == p2) continue
                for (board in 0..5) {
                    if (board == p1 || board == p2) continue
                    allDeals.add(
                        LeducState(p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = "")
                    )
                }
            }
        }

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = false,
            samplingMode = SamplingMode.VANILLA
        )

        val tracedInfoSet = "P1:J x"
        println("Iteration | Check Prob | Bet Prob | Regret[Check] | Regret[Bet] | Visits")
        println("----------|------------|----------|---------------|-------------|-------")

        for (iter in 1..10) {
            // Train one iteration: traverse all deals once
            solver.trainOnDeals(allDeals, iterations = 1)

            // Get strategy for the traced info set
            val profile = solver.getStrategyProfile()
            val infoSetStrat = profile.getAllInfoSets().find { it.infoSet == tracedInfoSet }

            if (infoSetStrat != null) {
                val avgStrat = infoSetStrat.getAverageStrategy()
                val regrets = infoSetStrat.getRegrets()
                val visits = infoSetStrat.getVisitCount()

                println(String.format("%9d | %10.6f | %8.6f | %13.6f | %11.6f | %6d",
                    iter,
                    avgStrat[0],  // Check probability
                    avgStrat[1],  // Bet probability
                    regrets[0],   // Check regret
                    regrets[1],   // Bet regret
                    visits
                ))
            } else {
                println(String.format("%9d | (info set not found)", iter))
            }
        }

        println("\n=== Compare with zig ===\n")
        println("Info set to trace: '$tracedInfoSet'")
        println("Actions: [0=check, 1=bet]")
    }
})
