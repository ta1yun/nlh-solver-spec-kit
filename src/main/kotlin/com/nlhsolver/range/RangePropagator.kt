package com.nlhsolver.range

import com.nlhsolver.core.GameAction
import com.nlhsolver.core.GameState
import com.nlhsolver.core.StrategyProfile

/**
 * Propagates a range through a game tree action.
 *
 * When a player takes an action, their range changes based on how often
 * each hand takes that action according to equilibrium strategy.
 *
 * Example:
 * - Starting range: { AA: 1.0, KK: 1.0, 72o: 1.0 }
 * - Action: Raise (equilibrium: AA raises 100%, KK raises 80%, 72o raises 5%)
 * - New range: { AA: 1.0, KK: 0.8, 72o: 0.05 }
 *
 * This models: "If I had this hand, how often would I take this action?"
 */
interface RangePropagator {
    /**
     * Compute new range after taking an action.
     *
     * For each hand in current range:
     *   newWeight[hand] = currentWeight[hand] × strategy[hand, action]
     *
     * @param currentRange The range before taking the action
     * @param action The action being taken
     * @param state The game state before the action
     * @param profile Strategy profile containing equilibrium strategies
     * @return New range after applying action frequencies
     */
    fun propagate(
        currentRange: Range,
        action: GameAction,
        state: GameState,
        profile: StrategyProfile
    ): Range
}
