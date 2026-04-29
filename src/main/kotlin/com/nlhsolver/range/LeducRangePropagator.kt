package com.nlhsolver.range

import com.nlhsolver.core.GameAction
import com.nlhsolver.core.GameState
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.integration.LeducWithSuitAbstraction

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
        val leducState = state as LeducWithSuitAbstraction
        val leducRange = currentRange as LeducRange

        val actions = leducState.getLegalActions()
        val actionIndex = actions.indexOfFirst { it.getActionId() == action.getActionId() }

        if (actionIndex == -1) {
            throw IllegalArgumentException(
                "Action ${action.getActionId()} not legal at state with history: ${leducState.history}"
            )
        }

        val newWeights = mutableMapOf<Int, Double>()

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
            newWeights[leducHand.cardIdx] = weight * actionFreq
        }

        return LeducRange(newWeights)
    }

    /**
     * Get the info set string for a specific hand at a game state.
     *
     * This must match the format used during CFR training.
     * - Round 1: "K " (rank only, space, history)
     * - Round 2: "KQ xbrcdx" (rank+board, no dash, history with d separator)
     */
    private fun getInfoSetForHand(
        state: LeducWithSuitAbstraction,
        hand: LeducHand
    ): String {
        val rank = hand.rankName
        val history = state.history.replace("|", "d")

        return if (state.round == 1) {
            "$rank $history"
        } else {
            val boardRank = when(state.boardCard / 2) {
                0 -> "J"; 1 -> "Q"; 2 -> "K"; else -> "?"
            }
            "$rank$boardRank $history"  // No dash!
        }
    }
}
