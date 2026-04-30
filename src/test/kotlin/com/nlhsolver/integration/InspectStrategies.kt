package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Inspect learned strategies to see if they make sense.
 */
class InspectStrategies : FunSpec({

    test("Inspect strategies after multi-matchup training") {
        println("\n=== Strategy Inspection ===\n")

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

        println("Training on ${allMatchups.size} matchups for 10k iterations...")
        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)

        repeat(10000) { i ->
            val matchup = allMatchups[i % allMatchups.size]
            solver.train(matchup, iterations = 1)
        }

        val profile = solver.getStrategyProfile()

        println("\n--- R1 Initial Action (first to act) ---")
        listOf("J", "Q", "K").forEach { card ->
            val key = "$card "
            val infoSet = profile.getInfoSetStrategy(key, 2)
            val avgStrat = infoSet.getAverageStrategy()
            println("$card: Check=${String.format("%.3f", avgStrat[0])}, Bet=${String.format("%.3f", avgStrat[1])}")
        }

        println("\n--- R1 Facing Bet (respond to bet) ---")
        listOf("J", "Q", "K").forEach { card ->
            val key = "$card b"
            val infoSet = profile.getInfoSetStrategy(key, 3)
            val avgStrat = infoSet.getAverageStrategy()
            println("$card: Fold=${String.format("%.3f", avgStrat[0])}, Call=${String.format("%.3f", avgStrat[1])}, Raise=${String.format("%.3f", avgStrat[2])}")
        }

        println("\n--- R1 After Opponent Checks ---")
        listOf("J", "Q", "K").forEach { card ->
            val key = "$card x"
            val infoSet = profile.getInfoSetStrategy(key, 2)
            val avgStrat = infoSet.getAverageStrategy()
            println("$card: Check=${String.format("%.3f", avgStrat[0])}, Bet=${String.format("%.3f", avgStrat[1])}")
        }

        println("\n--- R2 Sample (after check-check) ---")
        listOf("J-J", "J-Q", "J-K", "Q-Q", "Q-K", "K-K").forEach { hand ->
            val key = "$hand xx|"
            try {
                val infoSet = profile.getInfoSetStrategy(key, 2)
                val avgStrat = infoSet.getAverageStrategy()
                val visits = infoSet.getVisitCount()
                println("$hand (visits=$visits): Check=${String.format("%.3f", avgStrat[0])}, Bet=${String.format("%.3f", avgStrat[1])}")
            } catch (e: Exception) {
                println("$hand: Not found")
            }
        }

        println("\n--- Sanity Checks ---")
        println("Jack facing bet should mostly fold (weak hand)")
        println("King facing bet should mostly call/raise (strong hand)")
        println("Pair hands in R2 should bet aggressively")
    }
})
