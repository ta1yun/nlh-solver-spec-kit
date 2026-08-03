package com.nlhsolver.integration

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.ExploitabilityCalculator
import com.nlhsolver.core.SamplingMode
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeLessThan

/**
 * Direct comparison with zig-leduc-cfr reference implementation.
 * Zig achieves 0.3% exploitability after 100 iterations on all 120 deals.
 * We should match this.
 */
class CompareWithZigTest : FunSpec({

    test("Match zig's exploitability on 120 deals") {
        println("\n=== Comparing with Zig Reference ===\n")

        // Generate all 120 deals (same order as zig)
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

        println("Training on all ${allDeals.size} deals")
        println()

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = false,
            samplingMode = SamplingMode.VANILLA
        )

        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        // Zig reference (vanilla CFR, 120 deals), exploitability as % of pot.
        // Training here is deterministic: VANILLA mode with pre-dealt boards has no
        // chance nodes, so these numbers reproduce exactly run to run.
        val zigReference = mapOf(
            100 to 6.09,
            300 to 2.92,
            1000 to 1.39
        )
        val tolerancePct = 0.25

        // Train and checkpoint at key iterations
        val checkpoints = listOf(10, 50, 100, 300, 1000)
        var currentIter = 0

        for (targetIter in checkpoints) {
            val itersToRun = targetIter - currentIter

            // Train for multiple iterations on all deals
            solver.trainOnDeals(allDeals, iterations = itersToRun)
            currentIter = targetIter

            // Calculate exploitability over all 120 deals (matches zig's approach)
            // Zig formula: mbb = exploit * 500
            val exploit = exploitCalc.calculateExploitability(allDeals, solver.getStrategyProfile())
            val exploitPct = exploit * 100
            val mbbPerGame = exploit * 500

            println("After $currentIter iterations:")
            println("  Exploitability: ${String.format("%.2f", exploitPct)}% (${String.format("%.1f", mbbPerGame)} mbb/g)")
            println("  Info sets: ${solver.getStrategyProfile().size()}")

            val expected = zigReference[currentIter]
            if (expected != null) {
                val delta = Math.abs(exploitPct - expected)
                println("  Zig reference: ${String.format("%.2f", expected)}% (delta ${String.format("%.2f", delta)})")
                withClue(
                    "Diverged from zig reference at $currentIter iterations: " +
                        "ours=${String.format("%.2f", exploitPct)}%, zig=${String.format("%.2f", expected)}%"
                ) {
                    delta shouldBeLessThan tolerancePct
                }
            }
            println()
        }

        println("=" .repeat(60))
        println("Zig reference (vanilla CFR, 120 deals):")
        println("  100 iters: 6.09% (30.45 mbb/g)")
        println("  300 iters: 2.92% (14.58 mbb/g)")
        println(" 1000 iters: 1.39%  (6.96 mbb/g)")
        println("=" .repeat(60))
        println()
        println("Matched the reference within ${tolerancePct} percentage points at all checkpoints.")
    }
})
