package com.nlhsolver.export

import com.nlhsolver.core.*
import com.nlhsolver.integration.LeducWithChanceNodes
import io.kotest.core.spec.style.FunSpec

/**
 * Export Leduc strategies trained with external sampling CFR.
 * Includes visit counts to verify convergence.
 */
class ExportExternalSamplingLeduc : FunSpec({

    test("Export external sampling Leduc with visit counts") {
        println("\n=== Training Leduc with External Sampling CFR ===\n")

        val allCards = 0..5
        val allPlayerCombos = mutableListOf<Pair<Int, Int>>()

        // Generate all valid (p1, p2) combinations
        for (p1 in allCards) {
            for (p2 in allCards) {
                if (p1 != p2) {
                    allPlayerCombos.add(Pair(p1, p2))
                }
            }
        }

        println("Training with ${allPlayerCombos.size} player combinations...")
        println("Using external sampling (board dealt as chance node)")

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = true,
            samplingMode = SamplingMode.EXTERNAL
        )

        val iterations = 2000000  // Increased for better R2 coverage
        repeat(iterations) { i ->
            val (p1, p2) = allPlayerCombos[i % allPlayerCombos.size]

            val rootState = LeducWithChanceNodes(
                p1Card = p1,
                p2Card = p2,
                boardCard = -1,  // Board dealt as chance node
                round = 1,
                p1Invested = 1.0,
                p2Invested = 1.0,
                history = ""
            )

            solver.train(rootState, iterations = 1)

            if ((i + 1) % 100000 == 0) {
                println("  ${i + 1} iterations complete")
            }
        }

        println("\n=== Analyzing Trained Strategies ===\n")
        val profile = solver.getStrategyProfile()

        // Analyze Round 1 info sets
        println("ROUND 1 INFO SETS:")
        println("=" * 80)

        val r1InfoSets = listOf(
            Triple("K ", 2, "K preflop"),
            Triple("Q ", 2, "Q preflop"),
            Triple("J ", 2, "J preflop"),
            Triple("K b", 3, "K facing bet"),
            Triple("Q b", 3, "Q facing bet"),
            Triple("J b", 3, "J facing bet"),
            Triple("K xb", 3, "K after check-bet"),
            Triple("Q xb", 3, "Q after check-bet"),
            Triple("J xb", 3, "J after check-bet")
        )

        for ((infoSet, numActions, description) in r1InfoSets) {
            val strategy = profile.getInfoSetStrategy(infoSet, numActions)
            val avgStrat = strategy.getAverageStrategy()
            val visits = strategy.getVisitCount()

            println("$infoSet ($description):")
            println("  Visits: ${"%,d".format(visits)}")
            println("  Strategy: ${avgStrat.map { "%.3f".format(it) }.joinToString(", ")}")
            println()
        }

        // Analyze Round 2 info sets (with full history including R1)
        println("\nROUND 2 SAMPLE INFO SETS:")
        println("=" * 80)

        val r2InfoSets = listOf(
            Triple("KQ xxd", 2, "K on Q board after check-check"),
            Triple("QQ xxd", 2, "Q on Q board (pair) after check-check"),
            Triple("JQ xxd", 2, "J on Q board after check-check"),
            Triple("KQ bcd", 2, "K on Q board after bet-call"),
            Triple("QQ bcd", 2, "Q on Q board after bet-call"),
            Triple("KQ xxdb", 3, "K on Q board, check-check in R1, facing bet in R2"),
            Triple("QQ bcdxb", 3, "Q pair after bet-call, check-bet in R2")
        )

        for ((infoSet, numActions, description) in r2InfoSets) {
            val strategy = profile.getInfoSetStrategy(infoSet, numActions)
            val avgStrat = strategy.getAverageStrategy()
            val visits = strategy.getVisitCount()

            println("$infoSet ($description):")
            println("  Visits: ${"%,d".format(visits)}")
            println("  Strategy: ${avgStrat.map { "%.3f".format(it) }.joinToString(", ")}")
            println()
        }

        // List all info sets
        println("\nALL INFO SETS:")
        println("=" * 80)

        val allInfoSets = profile.getAllInfoSets()
        val r1Sets = allInfoSets.filter { !it.infoSet.contains(Regex("[JQK]{2}")) }.sortedBy { it.infoSet }
        val r2Sets = allInfoSets.filter { it.infoSet.contains(Regex("[JQK]{2}")) }.sortedBy { it.infoSet }

        println("Round 1 (${r1Sets.size} info sets):")
        r1Sets.forEach { println("  ${it.infoSet.padEnd(10)} - ${it.getVisitCount()} visits") }

        println("\nRound 2 (${r2Sets.size} info sets):")
        r2Sets.forEach { println("  ${it.infoSet.padEnd(10)} - ${it.getVisitCount()} visits") }

        // Check for unreachable info sets
        val unvisitedSets = allInfoSets.filter { it.getVisitCount() == 0L }
        if (unvisitedSets.isNotEmpty()) {
            println("\nUNREACHABLE INFO SETS (0 visits):")
            println("=" * 80)
            unvisitedSets.forEach {
                println("  '${it.infoSet}' (${it.numActions} actions)")
            }
        }

        // Visit count statistics
        println("\nVISIT COUNT STATISTICS:")
        println("=" * 80)

        val visitCounts = allInfoSets.map { it.getVisitCount() }.filter { it > 0 }

        if (visitCounts.isNotEmpty()) {
            println("Total info sets: ${allInfoSets.size}")
            println("Info sets with visits: ${visitCounts.size}")
            println("Min visits: ${"%,d".format(visitCounts.minOrNull() ?: 0)}")
            println("Max visits: ${"%,d".format(visitCounts.maxOrNull() ?: 0)}")
            println("Avg visits: ${"%,d".format((visitCounts.average().toLong()))}")
            println("Median visits: ${"%,d".format(visitCounts.sorted()[visitCounts.size / 2])}")

            // Distribution
            println("\nVisit distribution:")
            val buckets = listOf(0, 100, 1000, 10000, 100000, 1000000)
            for (i in 0 until buckets.size - 1) {
                val count = visitCounts.count { it >= buckets[i] && it < buckets[i + 1] }
                println("  ${"%,7d".format(buckets[i])} - ${"%,7d".format(buckets[i + 1])}: $count info sets")
            }
            val over = visitCounts.count { it >= buckets.last() }
            println("  ${"%,7d".format(buckets.last())}+          : $over info sets")
        }

        println("\n✓ Export complete")
    }
})

private operator fun String.times(n: Int) = this.repeat(n)
