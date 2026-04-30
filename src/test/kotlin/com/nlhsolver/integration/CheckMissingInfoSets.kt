package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

class CheckMissingInfoSets : FunSpec({

    test("Check for missing info sets in exploitability test") {
        println("\n=== Missing Info Set Analysis ===\n")

        // Train using reference
        val trainer = ReferenceLeducTrainer()
        val (_, refMap) = trainer.train(50000)

        println("Reference trained ${refMap.size} info sets")
        println()

        // Generate test matchups
        val allCards = 0..5
        val testMatchups = mutableListOf<LeducWithSuitAbstraction>()

        for (p1 in allCards) {
            for (p2 in allCards) {
                for (board in allCards) {
                    if (p1 != p2 && p1 != board && p2 != board) {
                        testMatchups.add(LeducWithSuitAbstraction(
                            p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        ))
                    }
                }
            }
        }

        // Collect all info sets reachable during exploitability calculation
        val reachableInfoSets = mutableSetOf<String>()

        fun collectInfoSets(state: GameState) {
            if (state.isTerminal()) return

            val infoSet = state.getInfoSet()
            reachableInfoSets.add(infoSet)

            for (action in state.getLegalActions()) {
                val nextState = state.applyAction(action)
                collectInfoSets(nextState)
            }
        }

        testMatchups.forEach { collectInfoSets(it) }

        println("Test matchups reach ${reachableInfoSets.size} unique info sets")
        println()

        // Find missing info sets
        val missingInRef = reachableInfoSets.filter { it !in refMap.keys }
        val extraInRef = refMap.keys.filter { it !in reachableInfoSets }

        println("Info sets reached by test but NOT in reference training:")
        if (missingInRef.isEmpty()) {
            println("  None! ✓")
        } else {
            println("  Count: ${missingInRef.size}")
            missingInRef.sorted().take(20).forEach { println("    '$it'") }
        }
        println()

        println("Info sets in reference but NOT reached by test:")
        if (extraInRef.isEmpty()) {
            println("  None! ✓")
        } else {
            println("  Count: ${extraInRef.size}")
            extraInRef.sorted().take(20).forEach { println("    '$it'") }
        }

        println()
        if (missingInRef.isNotEmpty()) {
            println("❌ FOUND THE BUG: Test reaches info sets not in training!")
            println("   These will have uniform strategy → high exploitability")
        } else if (extraInRef.isNotEmpty()) {
            println("❌ Training has extra info sets not reached by test")
            println("   This suggests different game dynamics")
        } else {
            println("✓ Info set coverage matches perfectly")
        }
    }
})
