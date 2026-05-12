package com.nlhsolver.integration

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.SamplingMode
import io.kotest.core.spec.style.FunSpec

/**
 * Check if any info set is visited multiple times during a single deal traversal.
 * If so, cumulative_strategy would be updated multiple times, which is wrong!
 */
class CheckMultipleVisitsTest : FunSpec({

    test("Count visits per info set in single deal") {
        println("\n=== Check for Multiple Visits ===\n")

        val deal = LeducState(p1Card = 0, p2Card = 2, boardCard = 4, round = 1, history = "")

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = false,
            samplingMode = SamplingMode.VANILLA
        )

        println("Processing 1 deal...")
        solver.trainOnDeals(listOf(deal), iterations = 1)

        val profile = solver.getStrategyProfile()
        val allInfoSets = profile.getAllInfoSets().sortedBy { it.infoSet }

        println("\nVisit counts after 1 deal:")
        for (infoSet in allInfoSets) {
            val visits = infoSet.getVisitCount()
            if (visits > 1) {
                println("  ${infoSet.infoSet}: $visits visits ← MULTIPLE VISITS!")
            } else {
                println("  ${infoSet.infoSet}: $visits visit")
            }
        }

        val multipleVisits = allInfoSets.filter { it.getVisitCount() > 1 }
        if (multipleVisits.isNotEmpty()) {
            println("\nFOUND MULTIPLE VISITS!")
            println("These info sets were visited more than once in a single deal:")
            multipleVisits.forEach {
                println("  ${it.infoSet}: ${it.getVisitCount()} visits")
            }
            println("\nThis means cumulative_strategy is being updated")
            println("multiple times per iteration, which could be the bug!")
        } else {
            println("\nNo multiple visits found in a single deal.")
            println("So cumulative_strategy timing is not the issue.")
        }
    }

    test("Check visit pattern across 2 deals") {
        println("\n=== Visit Pattern Across 2 Deals ===\n")

        val deal1 = LeducState(p1Card = 0, p2Card = 2, boardCard = 4, round = 1, history = "")
        val deal2 = LeducState(p1Card = 1, p2Card = 3, boardCard = 5, round = 1, history = "")

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = false,
            samplingMode = SamplingMode.VANILLA
        )

        solver.trainOnDeals(listOf(deal1), iterations = 1)
        val p0J_after1 = solver.getStrategyProfile().getAllInfoSets().find { it.infoSet == "P0:J " }!!
        println("After deal 1: P0:J visits = ${p0J_after1.getVisitCount()}")

        solver.trainOnDeals(listOf(deal2), iterations = 1)
        val p0J_after2 = solver.getStrategyProfile().getAllInfoSets().find { it.infoSet == "P0:J " }!!
        println("After deal 2: P0:J visits = ${p0J_after2.getVisitCount()}")

        println("\nExpected: visits should increase by 1 per deal that includes P0 with J")
        println("Both deals have P0 with J, so should be 1 → 2")
    }
})
