package com.nlhsolver.export

import com.nlhsolver.core.GameAction
import com.nlhsolver.core.GameState
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.range.Hand
import com.nlhsolver.range.Range

/**
 * Base implementation of EVCalculator with generic tree traversal logic.
 *
 * This class handles the recursive tree walking common to all poker variants:
 * 1. Terminal nodes: Average matchup utilities over opponent range
 * 2. Chance nodes: Average over possible board outcomes
 * 3. Decision nodes: Weighted average over equilibrium actions
 *
 * Subclasses implement game-specific methods:
 * - getMatchupUtility(): How to evaluate showdowns
 * - getValidOpponentHands(): What hands are possible given constraints
 * - shouldAverageOverBoards(): When to average over boards
 * - getPossibleBoards(): What boards are possible
 *
 * @param S GameState type
 * @param H Hand type
 */
abstract class BaseEVCalculator<S : GameState, H : Hand> : EVCalculator<S, H> {

    override fun calculateEV(
        state: S,
        heroHand: H,
        heroRange: Range,
        opponentRange: Range,
        profile: StrategyProfile,
        heroPlayer: Int
    ): Double {
        // Terminal node: weighted average over valid opponent hands
        if (state.isTerminal()) {
            return calculateTerminalEV(state, heroHand, opponentRange, heroPlayer)
        }

        // Board averaging: EV averaged over all possible board outcomes
        if (shouldAverageOverBoards(state)) {
            return calculateBoardAveragedEV(
                state, heroHand, heroRange, opponentRange, profile, heroPlayer
            )
        }

        // Decision node: weighted average over equilibrium actions
        return calculateDecisionNodeEV(
            state, heroHand, heroRange, opponentRange, profile, heroPlayer
        )
    }

    override fun calculateEVForAction(
        state: S,
        heroHand: H,
        action: GameAction,
        heroRange: Range,
        opponentRange: Range,
        profile: StrategyProfile,
        heroPlayer: Int
    ): Double {
        // Apply action to get next state
        val nextState = state.applyAction(action) as S

        // Recursively calculate EV from next state
        // (opponent's range will be recomputed at next node if needed)
        return calculateEV(
            nextState, heroHand, heroRange, opponentRange, profile, heroPlayer
        )
    }

    /**
     * Calculate EV at a terminal node.
     *
     * Averages matchup utilities over all valid opponent hands,
     * weighted by opponent's range distribution.
     */
    private fun calculateTerminalEV(
        state: S,
        heroHand: H,
        opponentRange: Range,
        heroPlayer: Int
    ): Double {
        val validHands = getValidOpponentHands(heroHand, state, opponentRange)

        var totalEV = 0.0
        var totalWeight = 0.0

        for ((oppHand, weight) in validHands) {
            if (weight <= 0.0) continue

            val utility = getMatchupUtility(state, heroHand, oppHand, heroPlayer)
            totalEV += weight * utility
            totalWeight += weight
        }

        return if (totalWeight > 0.0) totalEV / totalWeight else 0.0
    }

    /**
     * Calculate EV when board cards need to be averaged.
     *
     * This handles cases like:
     * - Leduc R1: Board not dealt yet, average over 6 cards
     * - NLH Preflop: Flop not dealt yet, average over all flops
     * - NLH Flop: Turn not dealt yet, average over all turns
     */
    private fun calculateBoardAveragedEV(
        state: S,
        heroHand: H,
        heroRange: Range,
        opponentRange: Range,
        profile: StrategyProfile,
        heroPlayer: Int
    ): Double {
        val possibleBoards = getPossibleBoards(state, heroHand)

        var totalEV = 0.0
        var totalProb = 0.0

        for ((boardState, probability) in possibleBoards) {
            if (probability <= 0.0) continue

            // Recursively calculate EV for this specific board
            val boardEV = calculateEV(
                boardState, heroHand, heroRange, opponentRange, profile, heroPlayer
            )

            totalEV += probability * boardEV
            totalProb += probability
        }

        return if (totalProb > 0.0) totalEV / totalProb else 0.0
    }

    /**
     * Calculate EV at a decision node.
     *
     * Weighted average over all actions according to equilibrium strategy.
     */
    private fun calculateDecisionNodeEV(
        state: S,
        heroHand: H,
        heroRange: Range,
        opponentRange: Range,
        profile: StrategyProfile,
        heroPlayer: Int
    ): Double {
        val actions = state.getLegalActions()
        if (actions.isEmpty()) return 0.0

        val infoSet = state.getInfoSet()
        val strategy = try {
            profile.getInfoSetStrategy(infoSet, actions.size).getAverageStrategy()
        } catch (e: Exception) {
            // If no strategy found, use uniform
            DoubleArray(actions.size) { 1.0 / actions.size }
        }

        var totalEV = 0.0
        for (i in actions.indices) {
            val actionEV = calculateEVForAction(
                state, heroHand, actions[i], heroRange, opponentRange, profile, heroPlayer
            )
            totalEV += strategy[i] * actionEV
        }

        return totalEV
    }

    // Subclasses must implement these game-specific methods
    abstract override fun getMatchupUtility(
        state: S,
        heroHand: H,
        oppHand: H,
        heroPlayer: Int
    ): Double

    abstract override fun getValidOpponentHands(
        heroHand: H,
        state: S,
        range: Range
    ): List<Pair<H, Double>>

    abstract override fun shouldAverageOverBoards(state: S): Boolean

    abstract override fun getPossibleBoards(
        state: S,
        heroHand: H
    ): List<Pair<S, Double>>
}
