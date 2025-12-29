package com.nlhsolver.poker

/**
 * Detects and normalizes suit isomorphisms in poker boards.
 *
 * Suit isomorphism: Boards that differ only in suit assignments are strategically equivalent.
 * For example, A♠K♠Q♥ is equivalent to A♥K♥Q♠ (both have two cards of one suit, one of another).
 *
 * This reduces the game tree size significantly by mapping equivalent boards to canonical forms.
 */
object SuitIsomorphism {

    /**
     * Get canonical (normalized) representation of a board.
     * Maps suits to a standardized order based on first appearance.
     */
    fun getCanonicalBoard(cards: List<Card>): List<Card> {
        if (cards.isEmpty()) return emptyList()

        val suitMapping = mutableMapOf<Suit, Suit>()
        val availableSuits = Suit.entries.toMutableList()

        return cards.map { card ->
            val canonicalSuit = suitMapping.getOrPut(card.suit) {
                availableSuits.removeAt(0)
            }
            Card(card.rank, canonicalSuit)
        }
    }

    /**
     * Check if two boards are suit isomorphic (strategically equivalent)
     */
    fun areIsomorphic(board1: List<Card>, board2: List<Card>): Boolean {
        if (board1.size != board2.size) return false

        val canonical1 = getCanonicalBoard(board1)
        val canonical2 = getCanonicalBoard(board2)

        return canonical1 == canonical2
    }

    /**
     * Get canonical board hash for efficient lookup/comparison
     */
    fun getCanonicalHash(cards: List<Card>): BoardHash {
        val canonical = getCanonicalBoard(cards)
        return BoardHash(
            cards = canonical,
            hashCode = canonical.hashCode(),
            signature = canonical.joinToString("") { "${it.rank.symbol}${it.suit.symbol}" }
        )
    }

    /**
     * Detect suit isomorphism pattern for a board.
     * Returns suit distribution information useful for game tree reduction.
     */
    fun analyzeSuitStructure(cards: List<Card>): SuitStructure {
        if (cards.isEmpty()) {
            return SuitStructure(
                suitCounts = emptyMap(),
                pattern = emptyList(),
                isMonotone = false,
                isTwoTone = false,
                isRainbow = false
            )
        }

        val suitCounts = cards.groupingBy { it.suit }.eachCount()
        val pattern = suitCounts.values.sortedDescending()

        return SuitStructure(
            suitCounts = suitCounts,
            pattern = pattern,
            isMonotone = pattern.size == 1,
            isTwoTone = pattern.size == 2,
            isRainbow = pattern.all { it == 1 }
        )
    }

    /**
     * Normalize hole cards + board to canonical form for isomorphic lookup
     */
    fun getCanonicalGameState(
        holeCards: List<Card>,
        board: List<Card>
    ): CanonicalGameState {
        // Combine all cards to determine suit mapping
        val allCards = holeCards + board
        val canonical = getCanonicalBoard(allCards)

        return CanonicalGameState(
            holeCards = canonical.take(holeCards.size),
            board = canonical.drop(holeCards.size),
            signature = canonical.joinToString("") { "${it.rank.symbol}${it.suit.symbol}" }
        )
    }

    /**
     * Check if adding a card to board maintains isomorphism class
     */
    fun preservesIsomorphismClass(
        currentBoard: List<Card>,
        newCard: Card
    ): Boolean {
        val currentStructure = analyzeSuitStructure(currentBoard)
        val newStructure = analyzeSuitStructure(currentBoard + newCard)

        // Check if suit pattern changes in a way that breaks equivalence
        return currentStructure.pattern == newStructure.pattern.dropLast(1) ||
                currentStructure.suitCounts.containsKey(newCard.suit)
    }

    /**
     * Generate all suit-equivalent variations of a board
     * (Useful for testing and validation)
     */
    fun generateIsomorphicBoards(cards: List<Card>): Set<List<Card>> {
        val results = mutableSetOf<List<Card>>()

        // Generate all 4! = 24 suit permutations
        val suitPermutations = generatePermutations(Suit.entries)

        for (permutation in suitPermutations) {
            val suitMap = Suit.entries.zip(permutation).toMap()
            val transformed = cards.map { card ->
                Card(card.rank, suitMap[card.suit]!!)
            }
            results.add(transformed)
        }

        return results
    }

    /**
     * Get isomorphism reduction factor for a given street
     * Returns how much the game tree can be reduced via suit isomorphism
     */
    fun getReductionFactor(street: Street): Double {
        return when (street) {
            Street.PREFLOP -> 1.0 // No reduction preflop (hole cards not public)
            Street.FLOP -> 4.0 // Flops reduce by ~4x due to suit symmetry
            Street.TURN -> 2.5 // Additional reduction on turn
            Street.RIVER -> 2.0 // Further reduction on river
        }
    }

    private fun <T> generatePermutations(list: List<T>): List<List<T>> {
        if (list.size <= 1) return listOf(list)

        val result = mutableListOf<List<T>>()
        for (i in list.indices) {
            val remaining = list.toMutableList().apply { removeAt(i) }
            val perms = generatePermutations(remaining)
            perms.forEach { perm ->
                result.add(listOf(list[i]) + perm)
            }
        }
        return result
    }

    /**
     * Represents canonical hash of a board for efficient lookups
     */
    data class BoardHash(
        val cards: List<Card>,
        val hashCode: Int,
        val signature: String
    ) {
        override fun equals(other: Any?): Boolean {
            if (this === other) return true
            if (other !is BoardHash) return false
            return signature == other.signature
        }

        override fun hashCode(): Int = signature.hashCode()
    }

    /**
     * Describes the suit structure of a board
     */
    data class SuitStructure(
        val suitCounts: Map<Suit, Int>,
        val pattern: List<Int>, // e.g., [3, 1, 1] for three-flush board
        val isMonotone: Boolean, // All same suit
        val isTwoTone: Boolean, // Exactly two suits
        val isRainbow: Boolean // All different suits
    ) {
        val numSuits: Int get() = suitCounts.size

        val hasFlushDraw: Boolean
            get() = pattern.firstOrNull() ?: 0 >= 3

        val hasTwoSuitedFlushDraw: Boolean
            get() = pattern.count { it >= 2 } >= 2

        override fun toString(): String = when {
            isMonotone -> "Monotone (${pattern[0]} cards)"
            isTwoTone -> "Two-tone (${pattern[0]}-${pattern[1]})"
            isRainbow -> "Rainbow"
            else -> "Mixed (${pattern.joinToString("-")})"
        }
    }

    /**
     * Canonical representation of hole cards + board
     */
    data class CanonicalGameState(
        val holeCards: List<Card>,
        val board: List<Card>,
        val signature: String
    ) {
        override fun equals(other: Any?): Boolean {
            if (this === other) return true
            if (other !is CanonicalGameState) return false
            return signature == other.signature
        }

        override fun hashCode(): Int = signature.hashCode()
    }
}
