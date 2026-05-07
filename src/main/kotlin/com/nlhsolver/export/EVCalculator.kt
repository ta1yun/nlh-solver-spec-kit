package com.nlhsolver.export

import com.nlhsolver.core.GameAction
import com.nlhsolver.core.GameState
import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.range.Hand
import com.nlhsolver.range.Range

/**
 * Calculates expected values (EVs) for hands in any poker variant.
 *
 * This interface separates generic EV calculation logic (tree traversal,
 * range-based averaging) from game-specific logic (showdown evaluation,
 * hand conflicts, board representation).
 *
 * Usage:
 * ```
 * val calculator = LeducEVCalculator()
 * val ev = calculator.calculateEV(
 *     state = leducState,
 *     heroHand = LeducHand(4),  // K♠
 *     heroRange = heroRange,
 *     opponentRange = oppRange,
 *     profile = trainedProfile,
 *     heroPlayer = 0
 * )
 * ```
 *
 * Implementations:
 * - LeducEVCalculator: Leduc Hold'em (6-card deck, pair/high-card evaluation)
 * - NLHEVCalculator: No-Limit Hold'em (52-card deck, 5-card hand evaluation)
 *
 * @param S GameState type (LeducState, NLHState, etc.)
 * @param H Hand type (LeducHand, NLHHand, etc.)
 */
interface EVCalculator<S : GameState, H : Hand> {
    /**
     * Calculate EV for a hand using opponent's equilibrium range.
     *
     * This is the primary method for computing EVs during tree export.
     * It accounts for how opponent's range evolved through equilibrium play.
     *
     * @param state Current game state
     * @param heroHand Hero's specific hand
     * @param heroRange Hero's range at this node (for future use)
     * @param opponentRange Opponent's range distribution at this node
     * @param profile Strategy profile containing equilibrium strategies
     * @param heroPlayer Which player is hero (0 or 1)
     * @return Expected value in big blinds from hero's perspective
     */
    fun calculateEV(
        state: S,
        heroHand: H,
        heroRange: Range,
        opponentRange: Range,
        profile: StrategyProfile,
        heroPlayer: Int
    ): Double

    /**
     * Calculate EV for taking a specific action.
     *
     * Returns the EV if hero takes this action, then follows equilibrium
     * strategy for the rest of the game.
     *
     * @param state Current game state
     * @param heroHand Hero's specific hand
     * @param action The action to evaluate
     * @param heroRange Hero's range at this node
     * @param opponentRange Opponent's range distribution
     * @param profile Strategy profile containing equilibrium strategies
     * @param heroPlayer Which player is hero
     * @return EV of taking this action, in big blinds
     */
    fun calculateEVForAction(
        state: S,
        heroHand: H,
        action: GameAction,
        heroRange: Range,
        opponentRange: Range,
        profile: StrategyProfile,
        heroPlayer: Int
    ): Double

    /**
     * Get terminal utility for a specific hand matchup.
     *
     * Game-specific implementation:
     * - Leduc: Compare pairs, then ranks
     * - NLH: Evaluate 5-card hands
     * - PLO: Evaluate best 5-card from 9 cards
     *
     * @param state Terminal game state
     * @param heroHand Hero's hand
     * @param oppHand Opponent's hand
     * @param heroPlayer Which player is hero
     * @return Hero's utility (positive = win, negative = loss)
     */
    fun getMatchupUtility(
        state: S,
        heroHand: H,
        oppHand: H,
        heroPlayer: Int
    ): Double

    /**
     * Get valid opponent hands given current constraints.
     *
     * Filters opponent range to exclude:
     * - Hands conflicting with hero's hand
     * - Hands conflicting with dealt board cards
     *
     * Game-specific logic:
     * - Leduc: Exclude 1 hero card + up to 1 board card
     * - NLH: Exclude 2 hero cards + up to 5 board cards
     *
     * @param heroHand Hero's hand
     * @param state Current game state (for board information)
     * @param range Opponent's full range distribution
     * @return List of (hand, weight) pairs for valid opponent hands
     */
    fun getValidOpponentHands(
        heroHand: H,
        state: S,
        range: Range
    ): List<Pair<H, Double>>

    /**
     * Check if state requires board averaging.
     *
     * Returns true when:
     * - Round 1 and board not dealt yet (boardCard = -1 in Leduc)
     * - Street transition happening (flop/turn/river not dealt in NLH)
     *
     * @param state Current game state
     * @return true if EV should average over possible boards
     */
    fun shouldAverageOverBoards(state: S): Boolean

    /**
     * Get all possible board outcomes for averaging.
     *
     * Used when shouldAverageOverBoards() returns true.
     *
     * Game-specific:
     * - Leduc: 6 possible board cards (J/Q/K in two suits)
     * - NLH Flop: C(48,3) possible flops (or bucketed)
     * - NLH Turn: 44 possible turn cards (or bucketed)
     *
     * @param state Current game state
     * @param heroHand Hero's hand (to exclude conflicts)
     * @return List of (boardState, probability) pairs
     */
    fun getPossibleBoards(
        state: S,
        heroHand: H
    ): List<Pair<S, Double>>
}
