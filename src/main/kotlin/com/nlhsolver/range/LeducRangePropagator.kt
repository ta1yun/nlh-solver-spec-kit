package com.nlhsolver.range

import com.nlhsolver.core.GameAction
import com.nlhsolver.core.GameState
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.integration.LeducState

/**
 * Propagates Leduc ranges through game tree actions.
 *
 * When a player takes an action, their range changes based on how often
 * each hand takes that action. This creates realistic range distributions
 * that reflect equilibrium play.
 *
 * Example:
 * - P1 bets pre-flop with equilibrium strategy
 * - Kings bet 76%, Queens bet 70%, Jacks bet 8%
 * - Betting range becomes: K-heavy, Q-moderate, J-light
 */
class LeducRangePropagator : RangePropagator {

    override fun propagate(
        currentRange: Range,
        action: GameAction,
        state: GameState,
        profile: StrategyProfile
    ): Range {
        val leducState = state as LeducState
        val leducRange = currentRange as LeducRange

        val actions = leducState.getLegalActions()
        val actionIndex = actions.indexOfFirst { it.getActionId() == action.getActionId() }

        if (actionIndex == -1) {
            throw IllegalArgumentException(
                "Action ${action.getActionId()} not legal at state with history: ${leducState.history}"
            )
        }

        val newWeights = mutableMapOf<Int, Double>()

        // Debug: print action being propagated
        val debug = false // Set to true for debugging
        if (debug) {
            println("Propagating through action: ${action.getActionId()} (index $actionIndex)")
            println("Available actions: ${actions.map { it.getActionId() }}")
        }

        // For each hand in the current range
        for ((hand, weight) in currentRange.getActiveHands()) {
            if (weight <= 0.0) continue

            val leducHand = hand as LeducHand

            // Get this hand's equilibrium strategy at this state
            val infoSet = getInfoSetForHand(leducState, leducHand)
            val strategy = try {
                profile.getInfoSetStrategy(infoSet, actions.size).getAverageStrategy()
            } catch (e: Exception) {
                // If no strategy found (shouldn't happen in trained solver),
                // assume uniform distribution
                DoubleArray(actions.size) { 1.0 / actions.size }
            }

            // New weight = old weight × frequency of taking this action
            val actionFreq = strategy[actionIndex]
            if (debug && leducHand.rank == 2) { // Debug K only
                println("  K: infoSet='$infoSet', strategy=${strategy.joinToString(",") { "%.2f".format(it) }}, actionFreq=$actionFreq")
            }
            newWeights[leducHand.cardIdx] = weight * actionFreq
        }

        return LeducRange(newWeights)
    }

    /**
     * Get the info set string for a specific hand at a game state.
     *
     * Must match LeducState.getInfoSet() exactly:
     * - Round 1: "P{player}:{rank} {history}"        e.g. "P0:K xb"
     * - Round 2: "P{player}:{rank}{board} {history}"  e.g. "P1:KQ xxdb"
     */
    private fun getInfoSetForHand(
        state: LeducState,
        hand: LeducHand
    ): String {
        val player = state.currentPlayer() ?: return "terminal"
        val rank = hand.rankName
        val history = state.history.replace("|", "d")
        val playerPrefix = "P$player:"

        return if (state.round == 1) {
            "$playerPrefix$rank $history"
        } else {
            val boardRank = when(state.boardCard / 2) {
                0 -> "J"; 1 -> "Q"; 2 -> "K"; else -> "?"
            }
            "$playerPrefix$rank$boardRank $history"
        }
    }
}
