package com.nlhsolver.core

import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Position
import com.nlhsolver.poker.Street
import java.security.MessageDigest

/**
 * Provides canonical hash functions for game states (T058).
 *
 * Game state hashing is critical for:
 * 1. Strategy lookups - Finding the correct strategy for a given game state
 * 2. Caching - Avoiding recomputation of identical states
 * 3. Information sets - Grouping indistinguishable states
 *
 * The hash must be:
 * - Deterministic: Same state always produces same hash
 * - Canonical: Equivalent states produce same hash (e.g., suit isomorphism)
 * - Collision-resistant: Different states rarely hash to same value
 */
object GameStateHash {
    /**
     * Compute a canonical hash for a poker game state.
     *
     * The hash includes:
     * - Street (PREFLOP, FLOP, TURN, RIVER)
     * - Board cards (canonicalized for suit isomorphism)
     * - Pot size
     * - Player positions and stack sizes
     * - Action history
     *
     * @param state Poker game state
     * @return Canonical hash string
     */
    fun hash(state: PokerGameState): String {
        return buildString {
            append("street=${state.street.name}")
            append(":board=${canonicalizeBoard(state.board)}")
            append(":pot=${state.pot}")
            append(":players=${hashPlayerStates(state.playerStates)}")
            append(":actions=${hashActionHistory(state.actionHistory)}")
        }
    }

    /**
     * Compute a short hash suitable for file names or IDs.
     *
     * Uses SHA-256 and truncates to 16 characters for compactness.
     *
     * @param state Poker game state
     * @return Short hash string (16 characters)
     */
    fun shortHash(state: PokerGameState): String {
        val fullHash = hash(state)
        val digest = MessageDigest.getInstance("SHA-256")
        val hashBytes = digest.digest(fullHash.toByteArray())
        return hashBytes.joinToString("") { "%02x".format(it) }.take(16)
    }

    /**
     * Canonicalize board cards to handle suit isomorphism.
     *
     * Suit isomorphism: Boards that differ only in suit assignments are equivalent.
     * For example: [As, Ks, Qs] is equivalent to [Ah, Kh, Qh]
     *
     * This function maps suits to a canonical representation based on
     * the order they appear on the board.
     *
     * @param board List of community cards
     * @return Canonical board string
     */
    private fun canonicalizeBoard(board: List<Card>): String {
        if (board.isEmpty()) return "empty"

        // Build suit mapping based on order of appearance
        val suitMapping = mutableMapOf<Char, Char>()
        val canonicalSuits = listOf('s', 'h', 'd', 'c')
        var nextSuitIndex = 0

        val canonicalCards = board.map { card ->
            val canonicalSuit = suitMapping.getOrPut(card.suit.symbol) {
                canonicalSuits[nextSuitIndex++]
            }
            "${card.rank.symbol}$canonicalSuit"
        }

        return canonicalCards.joinToString(",")
    }

    /**
     * Hash player states to a canonical string.
     *
     * Includes position, stack size, invested amount, and status flags.
     *
     * @param playerStates Map of position to player state
     * @return Canonical player state string
     */
    private fun hashPlayerStates(playerStates: Map<Position, PokerPlayerState>): String {
        return playerStates.entries
            .sortedBy { it.key.ordinal } // Ensure consistent ordering
            .joinToString("|") { (pos, state) ->
                "${pos.name}:stack=${state.stackBb}:invested=${state.investedThisRound}:folded=${state.isFolded}:allin=${state.isAllIn}"
            }
    }

    /**
     * Hash action history to a canonical string.
     *
     * @param actionHistory List of historical actions
     * @return Canonical action history string
     */
    private fun hashActionHistory(actionHistory: List<HistoricalAction>): String {
        if (actionHistory.isEmpty()) return "noactions"

        return actionHistory.joinToString("|") { action ->
            action.toString()
        }
    }

    /**
     * Validate that a game state hash is well-formed.
     *
     * @param hash Game state hash string
     * @return true if valid, false otherwise
     */
    fun isValidHash(hash: String): Boolean {
        // Basic sanity checks
        return hash.contains("street=") &&
                hash.contains("board=") &&
                hash.contains("pot=") &&
                hash.contains("players=") &&
                hash.contains("actions=")
    }

    /**
     * Extract street from a game state hash.
     *
     * @param hash Game state hash string
     * @return Street, or null if not found
     */
    fun extractStreet(hash: String): Street? {
        val streetMatch = Regex("street=([A-Z]+)").find(hash)
        return streetMatch?.groupValues?.get(1)?.let {
            try {
                Street.valueOf(it)
            } catch (e: IllegalArgumentException) {
                null
            }
        }
    }
}
