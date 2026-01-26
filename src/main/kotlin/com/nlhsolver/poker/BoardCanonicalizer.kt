package com.nlhsolver.poker

/**
 * Canonicalizes boards for suit isomorphism reduction.
 *
 * In poker, boards that differ only in suit assignments are strategically equivalent.
 * For example, A♠K♥2♦ is equivalent to A♣K♦2♥ - the strategic considerations are identical.
 *
 * This class provides:
 * 1. Board canonicalization with reversible suit mapping
 * 2. Hand remapping to match canonical board representation
 * 3. Result translation back to original suit assignments
 *
 * Usage:
 * ```
 * val canonicalizer = BoardCanonicalizer.canonicalize(originalBoard)
 * val canonicalBoard = canonicalizer.canonicalBoard
 * val remappedHand = canonicalizer.remapHand(hand)
 * // ... solve using canonical representations ...
 * val originalHand = canonicalizer.unmapHand(solvedHand)
 * ```
 */
class BoardCanonicalizer private constructor(
    val originalBoard: List<Card>,
    val canonicalBoard: List<Card>,
    private val suitMapping: Map<Suit, Suit>,    // original -> canonical
    private val reverseSuitMapping: Map<Suit, Suit> // canonical -> original
) {
    /**
     * The suit mapping used (original suit -> canonical suit).
     * Useful for debugging and verification.
     */
    val mapping: Map<Suit, Suit> get() = suitMapping

    /**
     * Remap a hand (hole cards) to match the canonical board representation.
     * Must be called for hands to properly match the canonical board.
     */
    fun remapHand(hand: Pair<Card, Card>): Pair<Card, Card> {
        return Pair(
            remapCard(hand.first),
            remapCard(hand.second)
        )
    }

    /**
     * Remap a list of cards to match the canonical board representation.
     */
    fun remapCards(cards: List<Card>): List<Card> {
        return cards.map { remapCard(it) }
    }

    /**
     * Remap a single card to canonical representation.
     */
    fun remapCard(card: Card): Card {
        val canonicalSuit = suitMapping[card.suit] ?: card.suit
        return Card(card.rank, canonicalSuit)
    }

    /**
     * Unmap a hand from canonical representation back to original suits.
     * Use this when presenting results to the user.
     */
    fun unmapHand(hand: Pair<Card, Card>): Pair<Card, Card> {
        return Pair(
            unmapCard(hand.first),
            unmapCard(hand.second)
        )
    }

    /**
     * Unmap a list of cards from canonical representation.
     */
    fun unmapCards(cards: List<Card>): List<Card> {
        return cards.map { unmapCard(it) }
    }

    /**
     * Unmap a single card from canonical representation.
     */
    fun unmapCard(card: Card): Card {
        val originalSuit = reverseSuitMapping[card.suit] ?: card.suit
        return Card(card.rank, originalSuit)
    }

    /**
     * Check if a hand has cards that conflict with the board (same card exists on board).
     */
    fun hasConflict(hand: Pair<Card, Card>): Boolean {
        val remapped = remapHand(hand)
        return canonicalBoard.contains(remapped.first) || canonicalBoard.contains(remapped.second)
    }

    /**
     * Get a signature string for this canonical board (useful for hash keys).
     */
    fun getSignature(): String {
        return canonicalBoard.joinToString("") { "${it.rank.symbol}${it.suit.symbol}" }
    }

    override fun toString(): String {
        return "BoardCanonicalizer(original=$originalBoard, canonical=$canonicalBoard, mapping=$suitMapping)"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is BoardCanonicalizer) return false
        return canonicalBoard == other.canonicalBoard
    }

    override fun hashCode(): Int {
        return canonicalBoard.hashCode()
    }

    companion object {
        /**
         * Create a canonicalizer for the given board.
         *
         * The canonicalization assigns suits in order of first appearance:
         * - First suit seen -> SPADES
         * - Second suit seen -> HEARTS
         * - Third suit seen -> DIAMONDS
         * - Fourth suit seen -> CLUBS
         *
         * This ensures boards with the same structure map to the same canonical form.
         */
        fun canonicalize(board: List<Card>): BoardCanonicalizer {
            if (board.isEmpty()) {
                return BoardCanonicalizer(
                    originalBoard = emptyList(),
                    canonicalBoard = emptyList(),
                    suitMapping = emptyMap(),
                    reverseSuitMapping = emptyMap()
                )
            }

            val canonicalSuitOrder = listOf(Suit.SPADES, Suit.HEARTS, Suit.DIAMONDS, Suit.CLUBS)
            val suitMapping = mutableMapOf<Suit, Suit>()
            var nextCanonicalIndex = 0

            // Build suit mapping based on order of first appearance
            for (card in board) {
                if (card.suit !in suitMapping) {
                    suitMapping[card.suit] = canonicalSuitOrder[nextCanonicalIndex]
                    nextCanonicalIndex++
                }
            }

            // Map remaining unseen suits (for hole cards that may introduce new suits)
            for (suit in Suit.entries) {
                if (suit !in suitMapping) {
                    suitMapping[suit] = canonicalSuitOrder[nextCanonicalIndex]
                    nextCanonicalIndex++
                }
            }

            // Build reverse mapping
            val reverseSuitMapping = suitMapping.entries.associate { (k, v) -> v to k }

            // Apply mapping to board
            val canonicalBoard = board.map { card ->
                Card(card.rank, suitMapping[card.suit]!!)
            }

            return BoardCanonicalizer(
                originalBoard = board,
                canonicalBoard = canonicalBoard,
                suitMapping = suitMapping,
                reverseSuitMapping = reverseSuitMapping
            )
        }

        /**
         * Create an identity canonicalizer (no transformation).
         * Useful for preflop or when isomorphism is disabled.
         */
        fun identity(): BoardCanonicalizer {
            val identityMapping = Suit.entries.associateWith { it }
            return BoardCanonicalizer(
                originalBoard = emptyList(),
                canonicalBoard = emptyList(),
                suitMapping = identityMapping,
                reverseSuitMapping = identityMapping
            )
        }

        /**
         * Count unique canonical flops from all possible flops.
         *
         * Without isomorphism: 52 choose 3 = 22,100 flops
         * With isomorphism: ~1,755 canonical flops
         *
         * Returns (totalFlops, uniqueCanonicalFlops)
         */
        fun countCanonicalFlops(): Pair<Int, Int> {
            val deck = Card.standardDeck()
            val seen = mutableSetOf<String>()

            var totalFlops = 0
            for (i in 0 until deck.size - 2) {
                for (j in i + 1 until deck.size - 1) {
                    for (k in j + 1 until deck.size) {
                        totalFlops++
                        val flop = listOf(deck[i], deck[j], deck[k])
                        val canonicalizer = canonicalize(flop)
                        seen.add(canonicalizer.getSignature())
                    }
                }
            }

            return Pair(totalFlops, seen.size)
        }

        /**
         * Get all canonical flops (for precomputation).
         */
        fun getAllCanonicalFlops(): List<List<Card>> {
            val deck = Card.standardDeck()
            val seen = mutableMapOf<String, List<Card>>()

            for (i in 0 until deck.size - 2) {
                for (j in i + 1 until deck.size - 1) {
                    for (k in j + 1 until deck.size) {
                        val flop = listOf(deck[i], deck[j], deck[k])
                        val canonicalizer = canonicalize(flop)
                        val signature = canonicalizer.getSignature()
                        if (signature !in seen) {
                            seen[signature] = canonicalizer.canonicalBoard
                        }
                    }
                }
            }

            return seen.values.toList()
        }
    }
}
