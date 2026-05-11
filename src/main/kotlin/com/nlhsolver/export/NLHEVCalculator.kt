package com.nlhsolver.export

import com.nlhsolver.core.PokerGameState
import com.nlhsolver.poker.Card
import com.nlhsolver.poker.HandEvaluator
import com.nlhsolver.poker.Street
import com.nlhsolver.range.NLHHand
import com.nlhsolver.range.NLHRange

/**
 * EV calculator for No-Limit Hold'em.
 *
 * Extends BaseEVCalculator to provide NLH-specific implementations:
 * - Showdown evaluation using 5-card hand evaluator
 * - Board averaging for undealt cards (flop, turn, river)
 * - Card removal effects (hero's cards can't be in opponent's range)
 *
 * The base class handles all tree traversal logic, so this only needs
 * to implement 4 game-specific methods.
 */
class NLHEVCalculator : BaseEVCalculator<PokerGameState, NLHHand>() {

    /**
     * Calculate utility when both players showdown.
     *
     * Uses HandEvaluator to compare 5-card hands (hole cards + board).
     * Returns positive if hero wins, negative if hero loses, 0 if tie.
     *
     * @param state Game state at showdown (must have complete board)
     * @param heroHand Hero's two hole cards
     * @param oppHand Opponent's two hole cards
     * @param heroPlayer Hero's player index (0 or 1)
     * @return Utility in big blinds (pot goes to winner, split on tie)
     */
    override fun getMatchupUtility(
        state: PokerGameState,
        heroHand: NLHHand,
        oppHand: NLHHand,
        heroPlayer: Int
    ): Double {
        // Evaluate both hands using 7-card evaluator (finds best 5-card hand)
        val heroCards = listOf(heroHand.card1, heroHand.card2) + state.board
        val oppCards = listOf(oppHand.card1, oppHand.card2) + state.board

        val heroHandValue = HandEvaluator.evaluateBest7(heroCards)
        val oppHandValue = HandEvaluator.evaluateBest7(oppCards)

        // Compare hand strengths
        return when {
            heroHandValue > oppHandValue -> state.pot  // Hero wins pot
            heroHandValue < oppHandValue -> -state.pot  // Hero loses (pot goes to opp)
            else -> 0.0  // Tie - pot split
        }
    }

    /**
     * Get valid opponent hands that don't conflict with hero's cards or board.
     *
     * Filters out hands that share any cards with hero's hand or the board.
     * Returns list of (hand, weight) pairs from opponent's range.
     *
     * @param heroHand Hero's hand
     * @param state Current game state
     * @param range Opponent's range at this node
     * @return List of valid opponent hands with their range weights
     */
    override fun getValidOpponentHands(
        heroHand: NLHHand,
        state: PokerGameState,
        range: com.nlhsolver.range.Range
    ): List<Pair<NLHHand, Double>> {
        val nlhRange = range as NLHRange

        // Get all cards that are "dead" (can't be in opponent's hand)
        val deadCards = mutableSetOf<Card>()
        deadCards.add(heroHand.card1)
        deadCards.add(heroHand.card2)
        deadCards.addAll(state.board)

        // Filter opponent's range to hands that don't use dead cards
        return nlhRange.getActiveHands()
            .filter { (hand, weight) ->
                weight > 0.0 &&
                hand is NLHHand &&
                hand.card1 !in deadCards &&
                hand.card2 !in deadCards
            }
            .map { (hand, weight) -> (hand as NLHHand) to weight }
    }

    /**
     * Check if we need to average over possible board cards.
     *
     * Returns true if the next street hasn't been dealt yet.
     * - PREFLOP with empty board → true (need to average over flops)
     * - FLOP with 3 cards → true (need to average over turn cards)
     * - TURN with 4 cards → true (need to average over river cards)
     * - RIVER with 5 cards → false (complete board)
     *
     * @param state Current game state
     * @return True if board averaging needed
     */
    override fun shouldAverageOverBoards(state: PokerGameState): Boolean {
        return when (state.street) {
            Street.PREFLOP -> state.board.size < 3   // Need to deal flop
            Street.FLOP -> state.board.size < 4      // Need to deal turn
            Street.TURN -> state.board.size < 5      // Need to deal river
            Street.RIVER -> false                    // Complete board
        }
    }

    /**
     * Generate possible next boards for averaging.
     *
     * In full implementation, this would generate all possible next cards.
     * For now, returns a single representative board for simplicity.
     *
     * TODO: Implement full board generation or use bucketed boards
     * - PREFLOP: Generate sample flops (or use canonical flop buckets)
     * - FLOP: Generate all possible turn cards
     * - TURN: Generate all possible river cards
     *
     * @param state Current game state
     * @param heroHand Hero's hand
     * @return List of (nextState, probability) pairs
     */
    override fun getPossibleBoards(
        state: PokerGameState,
        heroHand: NLHHand
    ): List<Pair<PokerGameState, Double>> {
        // Get dead cards (hero's hand + current board)
        val deadCards = mutableSetOf<Card>()
        deadCards.add(heroHand.card1)
        deadCards.add(heroHand.card2)
        deadCards.addAll(state.board)

        // Get remaining deck
        val fullDeck = Card.createDeck()
        val remainingDeck = fullDeck.filter { it !in deadCards }

        // Generate next board scenarios based on current street
        return when (state.street) {
            Street.PREFLOP -> {
                // TODO: Generate sample flops or use bucketed flops
                // For now, return empty list (no board averaging at preflop)
                emptyList()
            }
            Street.FLOP -> {
                // Generate all possible turn cards
                remainingDeck.map { turnCard ->
                    val newBoard = state.board + turnCard
                    val newState = state.copy(
                        street = Street.TURN,
                        board = newBoard
                    )
                    val probability = 1.0 / remainingDeck.size
                    newState to probability
                }
            }
            Street.TURN -> {
                // Generate all possible river cards
                remainingDeck.map { riverCard ->
                    val newBoard = state.board + riverCard
                    val newState = state.copy(
                        street = Street.RIVER,
                        board = newBoard
                    )
                    val probability = 1.0 / remainingDeck.size
                    newState to probability
                }
            }
            Street.RIVER -> {
                // Already complete board
                emptyList()
            }
        }
    }
}
