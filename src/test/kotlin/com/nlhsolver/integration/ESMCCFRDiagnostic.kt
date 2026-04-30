package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Diagnose why ES-MCCFR isn't converging on 120 matchups.
 */
class ESMCCFRDiagnostic : FunSpec({

    test("Check info set visit counts") {
        println("\n=== ES-MCCFR Info Set Visit Distribution ===\n")

        val allCards = 0..5
        val allMatchups = mutableListOf<LeducWithSuitAbstraction>()

        for (p1 in allCards) {
            for (p2 in allCards) {
                for (board in allCards) {
                    if (p1 != p2 && p1 != board && p2 != board) {
                        allMatchups.add(LeducWithSuitAbstraction(
                            p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        ))
                    }
                }
            }
        }

        val solver = ESMCCFRSolver(numPlayers = 2, enableCFRPlus = true)
        solver.trainOnMatchups(allMatchups, iterations = 10000)

        val strategyProfile = solver.getStrategyProfile()
        val allInfoSets = strategyProfile.getAllInfoSets()

        println("After 10k iterations:")
        println("Total info sets: ${allInfoSets.size}")
        println()

        val visitCounts = allInfoSets.map { it.getVisitCount() }.sorted()

        println("Visit count statistics:")
        println("  Min: ${visitCounts.minOrNull()}")
        println("  Max: ${visitCounts.maxOrNull()}")
        println("  Average: ${String.format("%.1f", visitCounts.average())}")
        println("  Median: ${visitCounts[visitCounts.size / 2]}")
        println()

        println("Visit count distribution:")
        val buckets = listOf(0, 100, 500, 1000, 5000, 10000, 50000)
        for (i in 0 until buckets.size - 1) {
            val min = buckets[i]
            val max = buckets[i + 1]
            val count = visitCounts.count { it in min until max }
            println("  ${String.format("%5d", min)}-${String.format("%5d", max)}: $count info sets")
        }

        println()
        println("Info sets with very low visits:")
        allInfoSets.filter { it.getVisitCount() < 100 }
            .sortedBy { it.getVisitCount() }
            .take(10)
            .forEach {
                println("  ${it.infoSet}: ${it.getVisitCount()} visits")
            }
    }

    test("Compare visit counts: ES-MCCFR vs Vanilla") {
        println("\n=== Visit Counts: ES-MCCFR vs Vanilla CFR ===\n")

        val allCards = 0..5
        val allMatchups = mutableListOf<LeducWithSuitAbstraction>()

        for (p1 in allCards) {
            for (p2 in allCards) {
                for (board in allCards) {
                    if (p1 != p2 && p1 != board && p2 != board) {
                        allMatchups.add(LeducWithSuitAbstraction(
                            p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        ))
                    }
                }
            }
        }

        val subset = allMatchups.take(10)

        // ES-MCCFR
        val esSolver = ESMCCFRSolver(numPlayers = 2, enableCFRPlus = true)
        esSolver.trainOnMatchups(subset, iterations = 10000)
        val esVisits = esSolver.getStrategyProfile().getAllInfoSets().map { it.getVisitCount() }.sorted()

        // Vanilla CFR
        val vanillaSolver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        repeat(100) {
            for (matchup in subset) {
                vanillaSolver.train(matchup, iterations = 1)
            }
        }
        val vanillaVisits = vanillaSolver.getStrategyProfile().getAllInfoSets().map { it.getVisitCount() }.sorted()

        println("10 matchups training:")
        println()
        println("ES-MCCFR (10k iterations, samples matchups + actions):")
        println("  Total info sets: ${esVisits.size}")
        println("  Min visits: ${esVisits.minOrNull()}")
        println("  Max visits: ${esVisits.maxOrNull()}")
        println("  Avg visits: ${String.format("%.1f", esVisits.average())}")
        println()

        println("Vanilla CFR (100 iters × 10 matchups = 1000 traversals):")
        println("  Total info sets: ${vanillaVisits.size}")
        println("  Min visits: ${vanillaVisits.minOrNull()}")
        println("  Max visits: ${vanillaVisits.maxOrNull()}")
        println("  Avg visits: ${String.format("%.1f", vanillaVisits.average())}")
        println()

        println("Observation: ES-MCCFR should have lower but more uniform visit counts")
    }

    test("Single matchup: ES-MCCFR vs Vanilla") {
        println("\n=== Single Matchup: ES-MCCFR vs Vanilla CFR ===\n")

        val matchup = LeducWithSuitAbstraction(
            p1Card = 4, p2Card = 0, boardCard = 5,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        println("Testing single matchup convergence:")
        println()

        // ES-MCCFR on single matchup
        val esSolver = ESMCCFRSolver(numPlayers = 2, enableCFRPlus = true)
        println("ES-MCCFR:")
        for (iters in listOf(1000, 5000, 10000, 50000)) {
            val prevIters = listOf(0, 1000, 5000, 10000).lastOrNull { it < iters } ?: 0
            esSolver.trainOnMatchups(listOf(matchup), iterations = iters - prevIters)

            val exploit = exploitCalc.calculateExploitability(matchup, esSolver.getStrategyProfile())
            println("  ${String.format("%5d", iters)} iters: ${String.format("%.2f%%", (exploit / 2.0) * 100)}")
        }

        println()

        // Vanilla CFR on single matchup
        val vanillaSolver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        println("Vanilla CFR:")
        for (iters in listOf(1000, 5000, 10000, 50000)) {
            val prevIters = listOf(0, 1000, 5000, 10000).lastOrNull { it < iters } ?: 0
            vanillaSolver.train(matchup, iterations = iters - prevIters)

            val exploit = exploitCalc.calculateExploitability(matchup, vanillaSolver.getStrategyProfile())
            println("  ${String.format("%5d", iters)} iters: ${String.format("%.2f%%", (exploit / 2.0) * 100)}")
        }

        println()
        println("Single matchup should converge similarly for both approaches")
    }
})
