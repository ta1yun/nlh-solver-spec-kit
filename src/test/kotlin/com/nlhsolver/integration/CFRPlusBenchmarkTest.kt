package com.nlhsolver.integration

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.ExploitabilityCalculator
import com.nlhsolver.core.SamplingMode
import io.kotest.core.spec.style.FunSpec

class CFRPlusBenchmarkTest : FunSpec({

    test("Vanilla CFR vs RM+-only vs full CFR+ convergence on Leduc") {
        val allDeals = mutableListOf<LeducState>()
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 == p2) continue
                for (board in 0..5) {
                    if (board == p1 || board == p2) continue
                    allDeals.add(LeducState(p1Card = p1, p2Card = p2, boardCard = board,
                        round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""))
                }
            }
        }

        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)
        val checkpoints = listOf(10, 50, 100, 300, 1000, 3000, 10000)

        data class Variant(val label: String, val enableCFRPlus: Boolean, val linearAveraging: Boolean)

        fun benchmark(v: Variant): List<Pair<Int, Double>> {
            val solver = CFRSolver(
                numPlayers = 2,
                enableCFRPlus = v.enableCFRPlus,
                linearAveraging = v.linearAveraging,
                samplingMode = SamplingMode.VANILLA
            )
            var currentIter = 0
            val results = mutableListOf<Pair<Int, Double>>()

            for (target in checkpoints) {
                solver.trainOnDeals(allDeals, iterations = target - currentIter)
                currentIter = target
                val exploit = exploitCalc.calculateExploitability(allDeals, solver.getStrategyProfile())
                results.add(target to exploit)
            }
            return results
        }

        val variants = listOf(
            Variant("Vanilla",     enableCFRPlus = false, linearAveraging = false),
            Variant("RM+ only",    enableCFRPlus = true,  linearAveraging = false),
            Variant("Full CFR+",   enableCFRPlus = true,  linearAveraging = true),
        )

        val allResults = variants.map { v -> v to benchmark(v) }

        // Header
        val header = "  Iters |" + variants.joinToString("|") { " %-18s".format(it.label) }
        println("\n${"-".repeat(header.length)}")
        println(header)
        println("-".repeat(header.length))

        for (ci in checkpoints.indices) {
            val row = StringBuilder("  %5d |".format(checkpoints[ci]))
            for ((_, results) in allResults) {
                val (_, exploit) = results[ci]
                row.append(" %5.2f%% %6.1f mbb  |".format(exploit * 100, exploit * 500))
            }
            println(row)
        }

        println("-".repeat(header.length))
        println("\nZig reference (vanilla CFR):")
        println("    100 iters: 6.09% (30.45 mbb/g)")
        println("    300 iters: 2.92% (14.58 mbb/g)")
        println("   1000 iters: 1.39%  (6.96 mbb/g)")
    }
})
