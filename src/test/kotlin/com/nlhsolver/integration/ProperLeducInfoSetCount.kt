package com.nlhsolver.integration

import io.kotest.core.spec.style.FunSpec

/**
 * Count info sets in proper Leduc with raises.
 */
class ProperLeducInfoSetCount : FunSpec({

    test("Count info sets in proper Leduc") {
        println("\n=== Proper Leduc Info Set Count ===\n")

        val boardCard = 5  // K♥
        val infoSets = mutableSetOf<String>()

        fun exploreState(state: ProperLeducState) {
            if (state.isTerminal()) return
            infoSets.add(state.getInfoSet())

            for (action in state.getLegalActions()) {
                val nextState = state.applyAction(action) as ProperLeducState
                exploreState(nextState)
            }
        }

        // Explore all matchups
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 != p2 && p1 != boardCard && p2 != boardCard) {
                    exploreState(ProperLeducState(
                        p1Card = p1, p2Card = p2, boardCard = boardCard,
                        round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                    ))
                }
            }
        }

        val r1InfoSets = infoSets.filter { "r1:" in it }
        val r2InfoSets = infoSets.filter { "r2:" in it }

        println("Total unique info sets: ${infoSets.size}")
        println("  Round 1: ${r1InfoSets.size}")
        println("  Round 2: ${r2InfoSets.size}")

        println("\nCompare to broken version:")
        println("  Broken (no raises): 80 info sets")
        println("  Proper (with raises): ${infoSets.size} info sets")
        println("  Increase: ${String.format("%.1f", (infoSets.size - 80) / 80.0 * 100)}%")

        // Sample some raise sequences
        val raiseInfoSets = infoSets.filter { 'r' in it }
        println("\nInfo sets involving raises: ${raiseInfoSets.size}")
        println("Sample raise info sets:")
        raiseInfoSets.sorted().take(10).forEach { println("  $it") }

        // Count action sequences
        val actionSequences = infoSets.map {
            val history = if ("r2:" in it) {
                it.substringAfter("r2:")
            } else {
                it.substringAfter("r1:")
            }
            history
        }.toSet()

        println("\nUnique action sequences: ${actionSequences.size}")
        println("Examples:")
        actionSequences.sorted().take(15).forEach { println("  '$it'") }
    }
})
