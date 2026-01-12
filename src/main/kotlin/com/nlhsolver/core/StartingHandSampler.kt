package com.nlhsolver.core

import com.nlhsolver.poker.*
import com.nlhsolver.poker.PreflopBuckets.PreflopHand
import com.nlhsolver.poker.PreflopBuckets.Suitedness
import com.nlhsolver.solver.HandRange

/**
 * Generates starting hand scenarios for CFR training.
 *
 * Phase 2.5 upgrade: Iterates over all 169 canonical preflop hands instead of
 * 20 sampled hands. This provides full coverage of the preflop strategy space.
 *
 * For each canonical hand type (e.g., "AKs", "QQ", "72o"), we:
 * 1. Generate one representative card combination
 * 2. Track the combo weight (6 for pairs, 4 suited, 12 offsuit)
 * 3. Use canonical hand notation for strategy storage
 */
object StartingHandSampler {

    /**
     * A hand matchup between BTN and BB with combo weighting.
     *
     * @property btnHand BTN's canonical hand type
     * @property bbHand BB's canonical hand type
     * @property btnCards Representative cards for BTN
     * @property bbCards Representative cards for BB
     * @property weight Combined weight (btnCombos × bbCombos adjusted for card removal)
     */
    data class HandMatchup(
        val btnHand: PreflopHand,
        val bbHand: PreflopHand,
        val btnCards: Pair<Card, Card>,
        val bbCards: Pair<Card, Card>,
        val weight: Double
    )

    /**
     * A weighted hand matchup for unified range-based solving (any street).
     *
     * This generalizes HandMatchup to work with ranges at any street, not just preflop.
     * For preflop, btnHand/bbHand will be PreflopHand instances. For postflop, they may be null.
     *
     * @property btnHand BTN's canonical hand (null for non-preflop)
     * @property bbHand BB's canonical hand (null for non-preflop)
     * @property btnCards BTN's specific card combination
     * @property bbCards BB's specific card combination
     * @property weight Combined probability weight from both ranges
     */
    data class WeightedMatchup(
        val btnHand: PreflopHand?,
        val bbHand: PreflopHand?,
        val btnCards: Pair<Card, Card>,
        val bbCards: Pair<Card, Card>,
        val weight: Double
    )

    // ========== Unified Range-Based Matchup Generation (All Streets) ==========

    /**
     * Generate weighted matchups from ranges at any street.
     *
     * This is the generalization of generateAllCanonicalMatchups() that works for all streets:
     * - PREFLOP: ranges = all 169 canonical hands with combo frequencies
     * - POSTFLOP: ranges = weighted distributions (condensed, polarized, etc.)
     *
     * For each (btnHand, btnWeight) in btnRange:
     *   For each (bbHand, bbWeight) in bbRange:
     *     If no card conflicts with board or each other:
     *       yield WeightedMatchup(btnHand, bbHand, btnWeight * bbWeight)
     *
     * @param street Starting street (PREFLOP, FLOP, TURN, RIVER)
     * @param board Board cards (empty for preflop)
     * @param btnRange BTN's weighted range
     * @param bbRange BB's weighted range
     * @return List of weighted matchups (not normalized)
     */
    fun generateMatchupsFromRanges(
        street: Street,
        board: List<Card>,
        btnRange: HandRange,
        bbRange: HandRange
    ): List<WeightedMatchup> {
        require(board.size == street.boardCardCount) {
            "Board must have ${street.boardCardCount} cards for ${street.name} (has ${board.size})"
        }

        // Extract WeightedRange from sealed class
        val btnWeightedRange = when (btnRange) {
            is HandRange.WeightedRange -> btnRange
        }
        val bbWeightedRange = when (bbRange) {
            is HandRange.WeightedRange -> bbRange
        }

        val matchups = mutableListOf<WeightedMatchup>()
        val boardSet = board.toSet()

        // Generate matchups by enumerating all combinations from both ranges
        for ((btnCards, btnWeight) in btnWeightedRange.hands) {
            // Check BTN cards don't conflict with board
            if (btnCards.first in boardSet || btnCards.second in boardSet) {
                continue
            }

            for ((bbCards, bbWeight) in bbWeightedRange.hands) {
                // Check BB cards don't conflict with board or BTN cards
                if (bbCards.first in boardSet || bbCards.second in boardSet) {
                    continue
                }
                if (bbCards.first == btnCards.first || bbCards.first == btnCards.second ||
                    bbCards.second == btnCards.first || bbCards.second == btnCards.second) {
                    continue
                }

                // Combined weight = product of individual weights
                val weight = btnWeight * bbWeight

                matchups.add(
                    WeightedMatchup(
                        btnHand = null,  // Not needed for unified solving path
                        bbHand = null,   // Not needed for unified solving path
                        btnCards = btnCards,
                        bbCards = bbCards,
                        weight = weight
                    )
                )
            }
        }

        return matchups
    }

    /**
     * Create game state from specific hands at any street.
     *
     * Generalizes createStartingState() to support any street:
     * - PREFLOP: board=[], assign preflop bucket IDs, standard blinds
     * - RIVER: board=[5 cards], assign postflop bucket IDs, custom pot/stacks
     * - etc.
     *
     * @param street Starting street
     * @param board Board cards (must match street's card count)
     * @param btnHand BTN's hole cards
     * @param bbHand BB's hole cards
     * @param btnStack BTN's remaining stack
     * @param bbStack BB's remaining stack
     * @param pot Current pot size
     * @param btnInvested BTN's investment on current street
     * @param bbInvested BB's investment on current street
     * @return PokerGameState at the specified street
     */
    fun createGameState(
        street: Street,
        board: List<Card>,
        btnHand: Pair<Card, Card>,
        bbHand: Pair<Card, Card>,
        btnStack: Double,
        bbStack: Double,
        pot: Double,
        btnInvested: Double = 0.0,
        bbInvested: Double = 0.0
    ): PokerGameState {
        require(board.size == street.boardCardCount) {
            "Board must have ${street.boardCardCount} cards for ${street.name} (has ${board.size})"
        }

        // Calculate bucket IDs based on street
        val btnBucket = if (street == Street.PREFLOP) {
            PreflopBuckets.getBucketId(btnHand.first, btnHand.second)
        } else {
            val bucketing = PostflopBucketing(numBuckets = 200)
            bucketing.getBucket(btnHand, board, street)
        }

        val bbBucket = if (street == Street.PREFLOP) {
            PreflopBuckets.getBucketId(bbHand.first, bbHand.second)
        } else {
            val bucketing = PostflopBucketing(numBuckets = 200)
            bucketing.getBucket(bbHand, board, street)
        }

        // Create player states
        val playerStates = mapOf(
            Position.BTN to PokerPlayerState(
                position = Position.BTN,
                stackBb = btnStack,
                investedThisRound = btnInvested,
                holeCards = btnHand,
                handRange = btnBucket
            ),
            Position.BB to PokerPlayerState(
                position = Position.BB,
                stackBb = bbStack,
                investedThisRound = bbInvested,
                holeCards = bbHand,
                handRange = bbBucket
            )
        )

        // Build action history for postflop scenarios
        // If BTN has invested, record a bet action
        val actionHistory = mutableListOf<HistoricalAction>()
        if (btnInvested > 0.0 && btnInvested > bbInvested) {
            // BTN has bet
            actionHistory.add(HistoricalAction(
                actor = Position.BTN,
                action = com.nlhsolver.poker.Action.Bet(btnInvested),
                amountBb = btnInvested
            ))
        }

        return PokerGameState(
            street = street,
            board = board,
            pot = pot,
            playerStates = playerStates,
            actionHistory = actionHistory
        )
    }

    // ========== Original Preflop-Specific API (Backward Compatible) ==========

    /**
     * Get the number of combos for a hand type.
     * - Pairs: 6 combos (C(4,2))
     * - Suited: 4 combos (one per suit)
     * - Offsuit: 12 combos (4 × 3)
     */
    fun getComboCount(hand: PreflopHand): Int {
        return when (hand.suitedness) {
            Suitedness.PAIR -> 6
            Suitedness.SUITED -> 4
            Suitedness.OFFSUIT -> 12
        }
    }

    /**
     * Generate all valid matchups between all 169 canonical hands.
     *
     * This is the Phase 2.5 upgrade from the original 20-hand sampling.
     * Generates ~22,000 valid matchups (169 × 169 minus card conflicts).
     *
     * @return List of all valid hand matchups with weights
     */
    fun generateAllCanonicalMatchups(): List<HandMatchup> {
        val matchups = mutableListOf<HandMatchup>()
        val allHands = PreflopBuckets.allHands

        for (btnHand in allHands) {
            // Get a representative card combination for BTN
            val btnCards = getRepresentativeCards(btnHand)

            for (bbHand in allHands) {
                // Get a representative card combination for BB that doesn't conflict
                val bbCards = getRepresentativeCardsAvoiding(bbHand, setOf(btnCards.first, btnCards.second))
                    ?: continue  // Skip if no valid combination exists

                // Calculate weight (combo count adjusted for card removal)
                val weight = calculateMatchupWeight(btnHand, bbHand)

                matchups.add(
                    HandMatchup(
                        btnHand = btnHand,
                        bbHand = bbHand,
                        btnCards = btnCards,
                        bbCards = bbCards,
                        weight = weight
                    )
                )
            }
        }

        return matchups
    }

    /**
     * Get a representative card combination for a canonical hand.
     * Uses spades and hearts as default suits.
     */
    fun getRepresentativeCards(hand: PreflopHand): Pair<Card, Card> {
        return when (hand.suitedness) {
            Suitedness.PAIR -> Pair(
                Card(hand.highRank, Suit.SPADES),
                Card(hand.lowRank, Suit.HEARTS)
            )
            Suitedness.SUITED -> Pair(
                Card(hand.highRank, Suit.SPADES),
                Card(hand.lowRank, Suit.SPADES)
            )
            Suitedness.OFFSUIT -> Pair(
                Card(hand.highRank, Suit.SPADES),
                Card(hand.lowRank, Suit.HEARTS)
            )
        }
    }

    /**
     * Get a representative card combination avoiding specific cards.
     * Used when dealing to multiple players to prevent card conflicts.
     *
     * @param hand The canonical hand type
     * @param avoid Cards to avoid
     * @return A valid card pair, or null if impossible
     */
    fun getRepresentativeCardsAvoiding(
        hand: PreflopHand,
        avoid: Set<Card>
    ): Pair<Card, Card>? {
        val combos = PreflopBuckets.getHandCombinations(hand)

        // Find first combo with no card conflicts
        return combos.firstOrNull { (c1, c2) ->
            c1 !in avoid && c2 !in avoid
        }
    }

    /**
     * Calculate the matchup weight considering card removal effects.
     *
     * Base weight = btnCombos × bbCombos
     * Adjusted for overlapping ranks which reduce available combos.
     */
    fun calculateMatchupWeight(btnHand: PreflopHand, bbHand: PreflopHand): Double {
        val btnCombos = getComboCount(btnHand).toDouble()
        val bbCombos = getComboCount(bbHand).toDouble()

        // Check for overlapping ranks that reduce combinations
        val btnRanks = setOf(btnHand.highRank, btnHand.lowRank)
        val bbRanks = setOf(bbHand.highRank, bbHand.lowRank)
        val overlappingRanks = btnRanks.intersect(bbRanks)

        // Simple approximation: reduce by fraction of blocked combos
        // More accurate calculation would enumerate actual valid combos
        val blockingFactor = when (overlappingRanks.size) {
            0 -> 1.0
            1 -> 0.75  // One rank overlap
            2 -> 0.5   // Both ranks overlap (same hand type)
            else -> 1.0
        }

        return btnCombos * bbCombos * blockingFactor
    }

    // ========== Legacy API (for backwards compatibility) ==========

    /**
     * Sample representative starting hand matchups.
     *
     * @deprecated Use generateAllCanonicalMatchups() for Phase 2.5+ solves.
     *             This method is kept for backwards compatibility.
     *
     * @param sampleSize Number of scenarios to generate
     * @return List of (BTN cards, BB cards) pairs
     */
    @Deprecated("Use generateAllCanonicalMatchups() for full 169-hand coverage")
    fun sampleRepresentativeHands(sampleSize: Int = 100): List<Pair<Pair<Card, Card>, Pair<Card, Card>>> {
        // Use the new API and convert to legacy format
        return generateAllCanonicalMatchups()
            .take(sampleSize)
            .map { matchup -> Pair(matchup.btnCards, matchup.bbCards) }
    }

    /**
     * Create a starting game state from a HandMatchup.
     *
     * @param matchup The hand matchup with BTN and BB hands
     * @param btnStack BTN stack size in BB
     * @param bbStack BB stack size in BB
     * @return PokerGameState with hole cards and buckets assigned
     */
    fun createStartingState(
        matchup: HandMatchup,
        btnStack: Double = 50.0,
        bbStack: Double = 50.0
    ): PokerGameState {
        return createStartingState(
            btnCards = matchup.btnCards,
            bbCards = matchup.bbCards,
            btnStack = btnStack,
            bbStack = bbStack
        )
    }

    /**
     * Create a starting game state with specific hole cards dealt.
     *
     * @param btnCards BTN's hole cards
     * @param bbCards BB's hole cards
     * @param btnStack BTN stack size in BB
     * @param bbStack BB stack size in BB
     * @return PokerGameState with hole cards and buckets assigned
     */
    fun createStartingState(
        btnCards: Pair<Card, Card>,
        bbCards: Pair<Card, Card>,
        btnStack: Double = 50.0,
        bbStack: Double = 50.0
    ): PokerGameState {
        // Calculate preflop buckets
        val btnBucket = PreflopBuckets.getBucketId(btnCards.first, btnCards.second)
        val bbBucket = PreflopBuckets.getBucketId(bbCards.first, bbCards.second)

        // Create player states with hole cards and buckets
        val playerStates = mapOf(
            Position.BTN to PokerPlayerState(
                position = Position.BTN,
                stackBb = btnStack - 0.5,  // Posted small blind
                investedThisRound = 0.5,    // Small blind
                holeCards = btnCards,
                handRange = btnBucket
            ),
            Position.BB to PokerPlayerState(
                position = Position.BB,
                stackBb = bbStack - 1.0,  // Posted big blind
                investedThisRound = 1.0,    // Big blind
                holeCards = bbCards,
                handRange = bbBucket
            )
        )

        return PokerGameState(
            street = Street.PREFLOP,
            board = emptyList(),
            pot = 1.5,  // 0.5 SB + 1.0 BB
            playerStates = playerStates
        )
    }

    /**
     * Get all 169 canonical hands (for iteration).
     */
    fun getAllCanonicalHands(): List<PreflopHand> = PreflopBuckets.allHands

    /**
     * Get total weight for normalization.
     * This is the sum of all matchup weights.
     */
    fun getTotalWeight(matchups: List<HandMatchup>): Double {
        return matchups.sumOf { it.weight }
    }

    // ========== Phase 2.6: Card Removal for Flop (T212) ==========

    /**
     * The fixed flop board used for Phase 2.6 verification.
     * K♠7♥2♦ - a dry rainbow board
     */
    val FIXED_FLOP_BOARD = listOf(
        Card(com.nlhsolver.poker.Rank.KING, com.nlhsolver.poker.Suit.SPADES),
        Card(com.nlhsolver.poker.Rank.SEVEN, com.nlhsolver.poker.Suit.HEARTS),
        Card(com.nlhsolver.poker.Rank.TWO, com.nlhsolver.poker.Suit.DIAMONDS)
    )

    /**
     * Filter matchups to exclude those that conflict with the board.
     * A conflict occurs when a player's hole cards contain any board card.
     *
     * @param matchups List of matchups to filter
     * @param board Board cards to check against
     * @return Filtered list with no card conflicts
     */
    fun filterMatchupsForBoard(
        matchups: List<HandMatchup>,
        board: List<Card> = FIXED_FLOP_BOARD
    ): List<HandMatchup> {
        val boardSet = board.toSet()

        return matchups.filter { matchup ->
            val btnCards = setOf(matchup.btnCards.first, matchup.btnCards.second)
            val bbCards = setOf(matchup.bbCards.first, matchup.bbCards.second)

            // No conflict if hole cards don't overlap with board
            btnCards.intersect(boardSet).isEmpty() && bbCards.intersect(boardSet).isEmpty()
        }
    }

    /**
     * Generate matchups for flop play (filtered for board card removal).
     *
     * @param board The flop board (default: FIXED_FLOP_BOARD)
     * @return Matchups with no card conflicts
     */
    fun generateFlopMatchups(board: List<Card> = FIXED_FLOP_BOARD): List<HandMatchup> {
        val allMatchups = generateAllCanonicalMatchups()
        return filterMatchupsForBoard(allMatchups, board)
    }
}
