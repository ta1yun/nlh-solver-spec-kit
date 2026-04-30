package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec
import kotlin.math.max

/**
 * Use the reference CFR algorithm logic with OUR game representation.
 * This isolates whether the problem is in our CFR or our game.
 */
class ReferenceAlgorithmOurGame : FunSpec({

    test("Reference CFR algorithm on our LeducWithSuitAbstraction game") {
        println("\n=== Reference CFR Algorithm + Our Game ===\n")

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

        println("Using reference algorithm structure:")
        println("- Cycle through matchups")
        println("- Full tree traversal")
        println("- Accumulate regrets/strategies per reference logic")
        println()

        val infoSetMap = mutableMapOf<String, ReferenceInfoSet>()
        val numIterations = 50000

        println("Training for $numIterations iterations...")

        for (i in 0 until numIterations) {
            val matchup = allMatchups[i % allMatchups.size]

            // Run reference-style CFR on this matchup
            val (_,  keyedInfoSets) = referenceCFRTraversal(matchup, infoSetMap)

            // Update info sets (reference style - direct replacement)
            for ((key, infoSet) in keyedInfoSets) {
                infoSetMap[key] = infoSet
            }
        }

        println("Completed training")
        println("Info sets: ${infoSetMap.size}")
        println()

        // Test exploitability
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)
        val ourStrategyProfile = StrategyProfile()

        for ((key, refInfoSet) in infoSetMap) {
            val numActions = refInfoSet.regretSum.size
            val ourInfoSet = ourStrategyProfile.getInfoSetStrategy(key, numActions)
            ourInfoSet.restoreFromAverageStrategy(refInfoSet.getAverageStrategy(), 1000)
        }

        val exploits = allMatchups.map { matchup ->
            val exploit = exploitCalc.calculateExploitability(matchup, ourStrategyProfile)
            (exploit / 2.0) * 100
        }

        println("Exploitability:")
        println("  Average: ${String.format("%.2f%%", exploits.average())}")
        println("  Min: ${String.format("%.2f%%", exploits.minOrNull())}")
        println("  Max: ${String.format("%.2f%%", exploits.maxOrNull())}")
        println()

        if (exploits.average() < 10.0) {
            println("✓ Reference algorithm works on our game!")
            println("  Our CFR implementation must have a bug.")
        } else {
            println("✗ Reference algorithm also fails on our game")
            println("  The problem is in our game representation or test setup.")
        }
    }
})

/**
 * Reference-style CFR traversal on our game state.
 */
fun referenceCFRTraversal(
    state: GameState,
    infoSetMap: Map<String, ReferenceInfoSet>
): Pair<Double, List<Pair<String, ReferenceInfoSet>>> {

    fun cfr(
        state: GameState,
        reachProbs: DoubleArray
    ): Pair<Double, List<Pair<String, ReferenceInfoSet>>> {

        if (state.isTerminal()) {
            // CRITICAL FIX: Return utility from last acting player's perspective
            // Our getUtility() returns [P0, P1], but reference CFR expects
            // utility from active player's perspective (will negate for opponent)

            // Determine who acted last by looking at history length
            val leduc = state as LeducWithSuitAbstraction
            val currentHistory = if (leduc.round == 2 && '|' in leduc.history) {
                leduc.history.substringAfter("|")
            } else {
                leduc.history
            }

            // Last acting player is opposite of who would act next
            val nextPlayer = currentHistory.length % 2
            val lastPlayer = (nextPlayer + 1) % 2

            return state.getUtility()[lastPlayer] to emptyList()
        }

        val currentPlayer = state.currentPlayer()!!
        val infoSet = state.getInfoSet()
        val actions = state.getLegalActions()

        val refInfoSet = infoSetMap[infoSet] ?: ReferenceInfoSet(
            regretSum = DoubleArray(actions.size),
            strategySum = DoubleArray(actions.size)
        )

        val strategy = refInfoSet.getStrategy()

        // Evaluate all actions (full traversal)
        val actionResults = actions.mapIndexed { i, action ->
            val nextState = state.applyAction(action)
            val nextReachProbs = reachProbs.copyOf()
            nextReachProbs[currentPlayer] *= strategy[i]

            cfr(nextState, nextReachProbs)
        }

        // Negate utilities for opponent (zero-sum)
        val actionUtilities = actionResults.map { -it.first }.toDoubleArray()
        val allKeyedInfoSets = actionResults.flatMap { it.second }

        // Node utility
        val utility = strategy.zip(actionUtilities.toList()).sumOf { (prob, util) -> prob * util }

        // Accumulate (reference style)
        val opponent = (currentPlayer + 1) % 2
        val regrets = actionUtilities.map { (it - utility) * reachProbs[opponent] }.toDoubleArray()
        val weightedStrategy = strategy.map { it * reachProbs[currentPlayer] }.toDoubleArray()

        val updatedInfoSet = refInfoSet.accumulate(regrets, weightedStrategy)

        return utility to (allKeyedInfoSets + (infoSet to updatedInfoSet))
    }

    return cfr(state, doubleArrayOf(1.0, 1.0))
}
