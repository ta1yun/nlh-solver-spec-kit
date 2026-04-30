package com.nlhsolver.integration

import io.kotest.core.spec.style.FunSpec

/**
 * Verify our info set format matches the reference implementation.
 */
class InfoSetFormatTest : FunSpec({

    test("Compare info set formats") {
        println("\n=== Info Set Format Comparison ===\n")

        val state = LeducWithSuitAbstraction(
            p1Card = 0, // J♦
            p2Card = 2, // Q♦
            boardCard = 5, // K♥
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        println("Initial state: P0 has J♦, P1 has Q♦, Board K♥")
        println()

        println("Our info set: ${state.getInfoSet()}")
        println("Reference format: 'J r1:' (card + round + history)")
        println()

        // After P0 bets
        val afterBet = state.applyAction(com.nlhsolver.core.SimpleGameAction("b", "Bet")) as LeducWithSuitAbstraction
        println("After P0 bets:")
        println("Our info set: ${afterBet.getInfoSet()}")
        println("Reference format: 'Q r1:b' (P1's turn)")
        println()

        // After P1 calls, moving to R2
        val afterCall = afterBet.applyAction(com.nlhsolver.core.SimpleGameAction("c", "Call")) as LeducWithSuitAbstraction
        println("After P1 calls (R2):")
        println("Our info set: ${afterCall.getInfoSet()}")
        println("Reference format: 'JK bc|' or 'JK r2:bc|'")
        println()

        // Check if we're including player ID
        println("Key difference:")
        println("- Reference: NO player ID in key (same info set for both players if cards match)")
        println("- Ours: HAS player ID 'p0:' or 'p1:' ")
        println()
        println("This could cause double the info sets and break convergence!")
    }

    test("Count info sets with and without player ID") {
        println("\n=== Info Set Count: With vs Without Player ID ===\n")

        val allCards = 0..5
        val infoSetsWithPlayer = mutableSetOf<String>()
        val infoSetsWithoutPlayer = mutableSetOf<String>()

        for (p1 in allCards) {
            for (p2 in allCards) {
                for (board in allCards) {
                    if (p1 != p2 && p1 != board && p2 != board) {
                        val state = LeducWithSuitAbstraction(
                            p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        )

                        fun explore(s: LeducWithSuitAbstraction) {
                            if (s.isTerminal()) return

                            val infoSet = s.getInfoSet()
                            infoSetsWithPlayer.add(infoSet)

                            // Strip player ID to see what reference impl would have
                            val withoutPlayer = infoSet.removePrefix("p0:").removePrefix("p1:")
                            infoSetsWithoutPlayer.add(withoutPlayer)

                            for (action in s.getLegalActions()) {
                                explore(s.applyAction(action) as LeducWithSuitAbstraction)
                            }
                        }

                        explore(state)
                    }
                }
            }
        }

        println("Info sets WITH player ID (ours): ${infoSetsWithPlayer.size}")
        println("Info sets WITHOUT player ID (reference): ${infoSetsWithoutPlayer.size}")
        println()

        if (infoSetsWithPlayer.size > infoSetsWithoutPlayer.size) {
            println("⚠️  We have MORE info sets because we include player ID!")
            println("This splits strategies that should be shared.")
        }
    }
})
