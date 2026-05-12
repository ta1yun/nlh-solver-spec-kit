package com.nlhsolver.integration

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.ExploitabilityCalculator
import com.nlhsolver.core.SamplingMode
import io.kotest.core.spec.style.FunSpec
import java.io.File

/**
 * Direct comparison: run both solvers for 10 iterations and compare key info sets.
 */
class DirectComparisonTest : FunSpec({

    test("Compare with zig after 10 iterations") {
        println("\n=== Direct Comparison: 10 Iterations ===\n")

        // Generate all deals
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

        println("Training our solver for 10 iterations on all ${allDeals.size} deals...")
        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = false,
            samplingMode = SamplingMode.VANILLA
        )

        // Train for 10 iterations, processing all deals in each iteration
        solver.trainOnDeals(allDeals, iterations = 10)

        val profile = solver.getStrategyProfile()
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        // Calculate exploitability
        var totalExploit = 0.0
        for (deal in allDeals) {
            totalExploit += exploitCalc.calculateExploitability(deal, profile)
        }
        val avgExploit = totalExploit / allDeals.size
        val exploitPct = (avgExploit / 3.0) * 100
        val mbbPerGame = exploitPct * 5.0

        println("\nOur Results (10 iterations):")
        println("  Exploitability: ${String.format("%.2f", exploitPct)}% (${String.format("%.1f", mbbPerGame)} mbb/g)")
        println("  Info sets: ${profile.size()}")
        println()

        // Show a few key info sets
        println("Sample info set strategies (first 5):")
        profile.getAllInfoSets().take(5).sortedBy { it.infoSet }.forEach { infoSet ->
            val avgStrat = infoSet.getAverageStrategy()
            val regrets = infoSet.getRegrets()
            val visits = infoSet.getVisitCount()
            println("  ${infoSet.infoSet}")
            println("    Avg Strategy: [${avgStrat.joinToString(", ") { String.format("%.4f", it) }}]")
            println("    Regrets: [${regrets.joinToString(", ") { String.format("%.2f", it) }}]")
            println("    Visits: $visits")
        }
        println()

        // Now run zig solver
        println("Running zig solver for 10 iterations...")
        val zigResult = Runtime.getRuntime().exec(
            arrayOf("/tmp/zig-leduc-cfr/zig-out/bin/cfr-leduc", "--algo=vanilla", "--max-iters=10", "--no-self-play")
        )
        val zigOutput = zigResult.inputStream.bufferedReader().readText()
        zigResult.waitFor()

        println("Zig Results:")
        println(zigOutput)
        println()

        println("Comparison:")
        println("  Both should have 288 info sets")
        println("  Exploitability should be similar if implementations match")
    }
})
