package com.nlhsolver.poker

/**
 * Betting rounds in No-Limit Hold'em poker.
 * Each street represents a distinct phase of the game with specific board card counts.
 */
enum class Street(
    val boardCardCount: Int,
    val displayName: String
) {
    /** Preflop - no community cards dealt yet */
    PREFLOP(0, "Preflop"),

    /** Flop - first 3 community cards */
    FLOP(3, "Flop"),

    /** Turn - 4th community card */
    TURN(4, "Turn"),

    /** River - 5th and final community card */
    RIVER(5, "River");

    /**
     * Get the next street in the game sequence
     */
    fun next(): Street? = when (this) {
        PREFLOP -> FLOP
        FLOP -> TURN
        TURN -> RIVER
        RIVER -> null // No street after river
    }

    /**
     * Get the previous street in the game sequence
     */
    fun previous(): Street? = when (this) {
        PREFLOP -> null
        FLOP -> PREFLOP
        TURN -> FLOP
        RIVER -> TURN
    }

    /**
     * Check if this is a postflop street
     */
    fun isPostflop(): Boolean = this != PREFLOP

    /**
     * Check if community cards are dealt on this street
     */
    fun hasBoard(): Boolean = boardCardCount > 0

    companion object {
        /**
         * Get street by board card count
         */
        fun fromBoardSize(size: Int): Street = entries.find { it.boardCardCount == size }
            ?: throw IllegalArgumentException("Invalid board size: $size (must be 0, 3, 4, or 5)")

        /**
         * Parse street from string (case-insensitive)
         */
        fun fromString(str: String): Street = entries.find { it.name.equals(str, ignoreCase = true) }
            ?: throw IllegalArgumentException("Invalid street: $str")
    }
}
