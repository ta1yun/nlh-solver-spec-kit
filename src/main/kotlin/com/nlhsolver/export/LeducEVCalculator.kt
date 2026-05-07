package com.nlhsolver.export

import com.nlhsolver.integration.LeducState
import com.nlhsolver.range.Hand
import com.nlhsolver.range.LeducHand
import com.nlhsolver.range.Range

/**
 * EV calculator for Leduc Hold'em.
 *
 * Implements game-specific logic:
 * - Showdown evaluation: Pair > High card > Low card
 * - Hand conflicts: Same card index cannot appear twice
 * - Board averaging: 6 possible board cards (J/Q/K in two suits)
 *
 * Usage:
 * ```
 * val calculator = LeducEVCalculator()
 * val ev = calculator.calculateEV(
 *     state = leducState,
 *     heroHand = LeducHand(4),  // K♠
 *     heroRange = heroRange,
 *     opponentRange = oppRange,
 *     profile = profile,
 *     heroPlayer = 0
 * )
 * ```
 */
class LeducEVCalculator : BaseEVCalculator<LeducState, LeducHand>() {

    override fun getMatchupUtility(
        state: LeducState,
        heroHand: LeducHand,
        oppHand: LeducHand,
        heroPlayer: Int
    ): Double {
        // Create final state with actual cards dealt
        val finalState = state.copy(
            p1Card = if (heroPlayer == 0) heroHand.cardIdx else oppHand.cardIdx,
            p2Card = if (heroPlayer == 0) oppHand.cardIdx else heroHand.cardIdx
        )

        // Get utility from showdown evaluation
        val utilities = finalState.getUtility()
        return utilities[heroPlayer]
    }

    override fun getValidOpponentHands(
        heroHand: LeducHand,
        state: LeducState,
        range: Range
    ): List<Pair<LeducHand, Double>> {
        // Start by excluding hero's card
        var filtered = range.excluding(heroHand)

        // If board is dealt, also exclude board card
        if (state.boardCard >= 0) {
            val boardHand = LeducHand(state.boardCard)
            filtered = filtered.excluding(boardHand)
        }

        // Convert to list of (LeducHand, weight) pairs
        return filtered.getActiveHands()
            .filter { it.second > 0.0 }
            .map { (hand, weight) ->
                (hand as LeducHand) to weight
            }
    }

    override fun shouldAverageOverBoards(state: LeducState): Boolean {
        // Average over boards when:
        // 1. Board not dealt yet (boardCard = -1)
        // 2. Not a terminal state (terminals require dealt board for showdown)
        // 3. Not a fold (folds don't need board)

        if (state.boardCard >= 0) return false  // Board already dealt
        if (state.isTerminal() && 'f' in state.history) return false  // Fold doesn't need board

        // If board is -1 and we're not at a fold terminal, we need to average
        return true
    }

    override fun getPossibleBoards(
        state: LeducState,
        heroHand: LeducHand
    ): List<Pair<LeducState, Double>> {
        require(shouldAverageOverBoards(state)) {
            "getPossibleBoards called but shouldAverageOverBoards is false"
        }

        val possibleBoards = mutableListOf<Pair<LeducState, Double>>()

        // All 6 Leduc cards are possible board cards
        for (boardCardIdx in 0..5) {
            // Skip if board card conflicts with hero's card
            if (boardCardIdx == heroHand.cardIdx) continue

            // Create state with this specific board card
            // If we're transitioning from R1 to R2, update round and add separator
            val nextState = if (state.round == 1) {
                state.copy(
                    boardCard = boardCardIdx,
                    round = 2,
                    history = state.history + "|"
                )
            } else {
                state.copy(boardCard = boardCardIdx)
            }

            // Uniform probability (all remaining cards equally likely)
            possibleBoards.add(nextState to 1.0)
        }

        // Normalize probabilities to sum to 1.0
        val totalWeight = possibleBoards.size.toDouble()
        return possibleBoards.map { (s, _) -> s to (1.0 / totalWeight) }
    }
}
