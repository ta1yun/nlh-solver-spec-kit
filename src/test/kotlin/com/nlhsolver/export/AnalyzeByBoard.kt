package com.nlhsolver.export

import com.nlhsolver.core.*
import com.nlhsolver.integration.LeducWithSuitAbstraction
import io.kotest.core.spec.style.FunSpec

/**
 * Analyze EVs broken down by specific board cards to understand range construction.
 */
class AnalyzeByBoard : FunSpec({

    test("Analyze K facing bet, broken down by board") {
        println("\n=== Analyzing K facing bet by board ===\n")

        // Train solver
        val allCards = 0..5
        val allMatchups = mutableListOf<LeducWithSuitAbstraction>()

        for (p1 in allCards) {
            for (p2 in allCards) {
                for (board in allCards) {
                    if (p1 != p2 && p1 != board && p2 != board) {
                        allMatchups.add(LeducWithSuitAbstraction(
                            p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        ))
                    }
                }
            }
        }

        println("Training...")
        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        repeat(50000) { i ->
            val matchup = allMatchups[i % allMatchups.size]
            solver.train(matchup, iterations = 1)
            if ((i + 1) % 10000 == 0) println("  ${i + 1} iterations")
        }

        val profile = solver.getStrategyProfile()

        // Analyze K (cards 4,5) facing bet on each board
        val heroCard = 4 // K
        val boardNames = mapOf(0 to "J", 2 to "Q", 4 to "K")

        println("\nHero has K, facing villain bet\n")

        for ((boardCard, boardName) in boardNames) {
            println("=== Board: $boardName ===")

            var totalWeight = 0.0
            val villainRangeWeights = mutableMapOf<String, Double>()
            val evsByVillainHand = mutableMapOf<String, DoubleArray>()

            for (villainCard in allCards) {
                if (villainCard == heroCard || villainCard == boardCard) continue

                val villainName = when(villainCard) {
                    0, 1 -> "J"
                    2, 3 -> "Q"
                    4, 5 -> "K"
                    else -> "?"
                }

                // Get villain's betting frequency from root
                val rootState = LeducWithSuitAbstraction(
                    p1Card = villainCard, p2Card = heroCard, boardCard = boardCard,
                    round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                )

                val villainInfoSet = rootState.getInfoSet()
                val villainActions = rootState.getLegalActions()
                val villainStrategy = try {
                    profile.getInfoSetStrategy(villainInfoSet, villainActions.size)
                        .getAverageStrategy()
                } catch (e: Exception) {
                    DoubleArray(villainActions.size) { 1.0 / villainActions.size }
                }

                val betFrequency = villainStrategy.getOrElse(1) { 0.0 }
                totalWeight += betFrequency
                villainRangeWeights[villainName] = villainRangeWeights.getOrDefault(villainName, 0.0) + betFrequency

                // Compute EVs at decision point
                val state = LeducWithSuitAbstraction(
                    p1Card = villainCard, p2Card = heroCard, boardCard = boardCard,
                    round = 1, p1Invested = 3.0, p2Invested = 1.0, history = "b"
                )

                val actions = state.getLegalActions()
                val evs = DoubleArray(3)

                // Fold
                val foldState = state.applyAction(actions[0])
                evs[0] = computeExpectedValue(foldState, profile, doubleArrayOf(1.0, 1.0))[1]

                // Call
                val callState = state.applyAction(actions[1])
                evs[1] = computeExpectedValue(callState, profile, doubleArrayOf(1.0, 1.0))[1]

                // Raise
                val raiseState = state.applyAction(actions[2])
                evs[2] = computeExpectedValue(raiseState, profile, doubleArrayOf(1.0, 1.0))[1]

                if (!evsByVillainHand.containsKey(villainName)) {
                    evsByVillainHand[villainName] = evs
                } else {
                    // Average if we have multiple cards of same rank
                    val existing = evsByVillainHand[villainName]!!
                    for (i in 0..2) existing[i] = (existing[i] + evs[i]) / 2
                }
            }

            // Print villain's range composition
            println("Villain's betting range:")
            for ((hand, weight) in villainRangeWeights.toList().sortedByDescending { it.second }) {
                val pct = (weight / totalWeight * 100).toInt()
                println("  $hand: $pct%")
            }

            println("\nHero's EVs by villain hand:")
            for ((villainHand, evs) in evsByVillainHand.toList().sortedByDescending { villainRangeWeights[it.first] }) {
                println("  vs $villainHand: fold=${String.format("%+.2f", evs[0])}, call=${String.format("%+.2f", evs[1])}, raise=${String.format("%+.2f", evs[2])}")
            }

            println()
        }
    }
})
