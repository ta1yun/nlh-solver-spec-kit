package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

class CheckActionCounts : FunSpec({

    test("Check if action counts match between training and testing") {
        println("\n=== Action Count Verification ===\n")

        // Collect action counts from reference training
        println("Analyzing reference training...")
        val refActionCounts = mutableMapOf<String, Int>()

        // The reference uses these action sets:
        // - After null/'d'/'x': ["x", "b"] (2 actions)
        // - After 'b': ["f", "c", "r"] (3 actions)
        // - After 'r': ["f", "c"] (2 actions)

        // Let me collect from actual game tree
        fun collectFromState(state: GameState, visited: MutableSet<String>) {
            if (state.isTerminal()) return

            val key = state.getInfoSet() + "::" + state.getStateHash()
            if (key in visited) return
            visited.add(key)

            val infoSet = state.getInfoSet()
            val numActions = state.getLegalActions().size

            if (infoSet in refActionCounts) {
                if (refActionCounts[infoSet] != numActions) {
                    println("  ❌ MISMATCH at '$infoSet': previously ${refActionCounts[infoSet]}, now $numActions")
                }
            } else {
                refActionCounts[infoSet] = numActions
            }

            for (action in state.getLegalActions()) {
                collectFromState(state.applyAction(action), visited)
            }
        }

        val allCards = 0..5
        var count = 0
        for (p1 in allCards) {
            for (p2 in allCards) {
                for (board in allCards) {
                    if (p1 != p2 && p1 != board && p2 != board) {
                        val state = LeducWithSuitAbstraction(
                            p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        )
                        collectFromState(state, mutableSetOf())
                        count++
                    }
                }
            }
        }

        println("Analyzed $count matchups")
        println("Found ${refActionCounts.size} unique info sets")
        println()

        // Check for consistency
        val actionCountHistogram = refActionCounts.values.groupingBy { it }.eachCount()
        println("Action count distribution:")
        actionCountHistogram.toSortedMap().forEach { (count, freq) ->
            println("  $count actions: $freq info sets")
        }

        println("\nSample info sets with action counts:")
        refActionCounts.entries.sortedBy { it.key }.take(15).forEach { (key, count) ->
            println("  '$key': $count actions")
        }

        println("\nChecking specific info sets:")
        listOf("J ", "J b", "J br", "J x", "J xb", "JK xxd", "JK xxdb").forEach { key ->
            if (key in refActionCounts) {
                println("  '$key': ${refActionCounts[key]} actions")
            } else {
                println("  '$key': NOT FOUND")
            }
        }
    }
})
