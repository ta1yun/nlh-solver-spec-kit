package com.nlhsolver.export

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.SamplingMode
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.integration.LeducWithChanceNodes
import io.kotest.core.spec.style.FunSpec
import java.io.File

/**
 * Generate tree structure from external sampling solution.
 * Updates leduc-tree.js for the strategy viewer.
 */
class GenerateTreeFromExternalSampling : FunSpec({

    test("Generate tree from external sampling") {
        println("\n=== Generating Tree from External Sampling ===\n")

        // Train solver
        println("Training external sampling solver...")
        val profile = trainExternalSamplingSolver()

        println("\nNote: External sampling solution uses different info set format")
        println("Info sets include R1 history for R2 positions (e.g., 'KQ bcd')")
        println("This properly distinguishes different pot sizes")
        println("\nFor now, exporting to separate file for comparison")

        val outputPath = "/Users/tpai/Downloads/leduc-tree-external.js"
        File(outputPath).writeText("// External sampling tree export placeholder\n")

        println("\n⚠ Tree generation for external sampling not yet implemented")
        println("Reason: Tree structure needs full EV calculations for each node")
        println("Current export focuses on scenario-based strategy display")
        println("\nSee leduc-external-sampling.js for scenario-based export")
    }
})

fun trainExternalSamplingSolver(): StrategyProfile {
    val allCards = 0..5
    val allPlayerCombos = mutableListOf<Pair<Int, Int>>()

    for (p1 in allCards) {
        for (p2 in allCards) {
            if (p1 != p2) {
                allPlayerCombos.add(Pair(p1, p2))
            }
        }
    }

    val solver = CFRSolver(
        numPlayers = 2,
        enableCFRPlus = true,
        samplingMode = SamplingMode.EXTERNAL
    )

    val iterations = 2000000
    repeat(iterations) { i ->
        val (p1, p2) = allPlayerCombos[i % allPlayerCombos.size]

        val rootState = LeducWithChanceNodes(
            p1Card = p1,
            p2Card = p2,
            boardCard = -1,
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        solver.train(rootState, iterations = 1)

        if ((i + 1) % 400000 == 0) {
            println("  ${i + 1} iterations complete")
        }
    }

    return solver.getStrategyProfile()
}
