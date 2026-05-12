package com.nlhsolver.integration

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.SamplingMode
import io.kotest.core.spec.style.FunSpec

/**
 * Check if cumulative_strategy updates are causing the bug.
 */
class TraceCumulativeStrategyTest : FunSpec({

    test("Trace cumulative strategy across 2 deals") {
        println("\n=== Trace Cumulative Strategy ===\n")

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
        var p0J = profile.getAllInfoSets().find { it.infoSet == "P0:J " }!!

        println("After deal 1:")
        println("  Cumulative regrets: ${p0J.getRegrets().contentToString()}")
        println("  Average strategy: ${p0J.getAverageStrategy().contentToString()}")
        println("  Visits: ${p0J.getVisitCount()}")

        // Manually compute what the current strategy would be
        val regrets1 = p0J.getRegrets()
        val currentStrat1 = if (regrets1[0] > 0 || regrets1[1] > 0) {
            val sum = maxOf(0.0, regrets1[0]) + maxOf(0.0, regrets1[1])
            doubleArrayOf(maxOf(0.0, regrets1[0]) / sum, maxOf(0.0, regrets1[1]) / sum)
        } else {
            doubleArrayOf(0.5, 0.5)
        }
        println("  Current strategy (from regrets): ${currentStrat1.contentToString()}")

        println("\nProcessing deal 2...")
        println("  Deal 2 will see regrets: ${regrets1.contentToString()}")
        println("  So it will use strategy: ${currentStrat1.contentToString()}")
        println("  NOT uniform!")

        solver.trainOnDeals(listOf(deal2), iterations = 1)

        profile = solver.getStrategyProfile()
        p0J = profile.getAllInfoSets().find { it.infoSet == "P0:J " }!!

        println("\nAfter deal 2:")
        println("  Cumulative regrets: ${p0J.getRegrets().contentToString()}")
        println("  Average strategy: ${p0J.getAverageStrategy().contentToString()}")
        println("  Visits: ${p0J.getVisitCount()}")

        println("\n--- Analysis ---")
        println("The regrets from deal 1 affected deal 2's strategy.")
        println("This causes deal 2's regret updates to be different from")
        println("what they would be if deal 2 was processed with uniform strategy.")
        println()
        println("Question: Is this the correct CFR algorithm?")
        println("Answer: Need to check if zig does the same thing.")
    }

    test("Check if getStrategy call count matters") {
        println("\n=== Check getStrategy() Call Frequency ===\n")

        val deal = LeducState(p1Card = 0, p2Card = 2, boardCard = 4, round = 1, history = "")

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = false,
            samplingMode = SamplingMode.VANILLA
        )

        solver.trainOnDeals(listOf(deal), iterations = 1)

        val profile = solver.getStrategyProfile()
        val p0J = profile.getAllInfoSets().find { it.infoSet == "P0:J " }!!

        println("After 1 deal:")
        println("  Visits: ${p0J.getVisitCount()}")
        println("  Average strategy: ${p0J.getAverageStrategy().contentToString()}")

        println("\nHow many times was P0:J visited during traversal?")
        println("  - Once at the root of the deal")
        println("  - Possibly more times in different branches")
        println()
        println("If getStrategy() is called multiple times per deal,")
        println("cumulative_strategy gets updated multiple times,")
        println("which could cause issues.")
    }
})
