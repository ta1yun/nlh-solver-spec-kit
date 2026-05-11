package com.nlhsolver.range

import com.nlhsolver.core.GameAction
import com.nlhsolver.core.GameState
import com.nlhsolver.core.PokerGameState
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.solver.HandIdentifier

/**
 * Propagates NLH ranges through game tree actions.
 *
 * When a player takes an action, their range changes based on how often
 * each hand takes that action according to equilibrium strategy.
 *
 * Example:
 * - P1 raises pre-flop with equilibrium strategy
 * - AA raises 100%, AKs raises 80%, 72o raises 2%
 * - Raising range becomes: Premium-heavy (AA, AKs high weight, 72o low weight)
 */
class NLHRangePropagator : RangePropagator {

    override fun propagate(
        currentRange: Range,
        action: GameAction,
        state: GameState,
        profile: StrategyProfile
    ): Range {
        val pokerState = state as PokerGameState
        val nlhRange = currentRange as NLHRange

        val actions = pokerState.getLegalActions()
        val actionIndex = actions.indexOfFirst { it.getActionId() == action.getActionId() }

        if (actionIndex == -1) {
            throw IllegalArgumentException(
                "Action ${action.getActionId()} not legal at state with history: ${pokerState.actionHistory}"
            )
        }

        val newWeights = mutableMapOf<NLHHand, Double>()

        // For each hand in the current range
        for ((hand, weight) in currentRange.getActiveHands()) {
            if (weight <= 0.0) continue

            val nlhHand = hand as NLHHand

            // Get this hand's equilibrium strategy at this state
            val infoSet = getInfoSetForHand(pokerState, nlhHand)
            val strategy = try {
                profile.getInfoSetStrategy(infoSet, actions.size).getAverageStrategy()
            } catch (e: Exception) {
                // If no strategy found (shouldn't happen in trained solver),
                // assume uniform distribution
                DoubleArray(actions.size) { 1.0 / actions.size }
            }

            // New weight = old weight × frequency of taking this action
            val actionFreq = strategy[actionIndex]
            newWeights[nlhHand] = weight * actionFreq
        }

        return NLHRange(newWeights)
    }

    /**
     * Get the info set string for a specific hand at a game state.
     *
     * This constructs an info set string that matches the format used
     * during CFR training in PokerGameState.getInfoSet().
     *
     * The format is:
     * "p{player}:{handKey}:street={street}:board={cards}:pot={pot}:history={actions}"
     *
     * @param state The game state
     * @param hand The hand to get the info set for
     * @return Info set string for this hand at this state
     */
    private fun getInfoSetForHand(
        state: PokerGameState,
        hand: NLHHand
    ): String {
        val player = state.currentPlayer() ?: return "terminal"

        // Create hand identifier for this specific hand
        // This can be either an exact hand or a bucket ID
        val handKey = HandIdentifier.ExactHand(hand.card1, hand.card2).toInfoSetKey()

        return buildString {
            append("p${player}:")
            append("$handKey:")
            append("street=${state.street.name}:")
            append("board=${state.board.joinToString(",") { "${it.rank}${it.suit}" }}:")
            append("pot=${state.pot}:")
            append("history=${state.actionHistory.joinToString("|") { it.toString() }}")
        }
    }
}
