package com.nlhsolver.poker

/**
 * Player positions in poker.
 * Order represents action priority (BTN acts last preflop except vs BB).
 */
enum class Position(val displayName: String, val minPlayers: Int) {
    /** Small Blind - posts small blind, acts first postflop */
    SB("Small Blind", 3),

    /** Big Blind - posts big blind, acts last preflop */
    BB("Big Blind", 2),

    /** Under the Gun - first to act preflop (6-max only) */
    UTG("Under the Gun", 6),

    /** Middle Position - acts after UTG (6-max only) */
    MP("Middle Position", 6),

    /** Cutoff - acts before button */
    CO("Cutoff", 4),

    /** Button - dealer position, acts last postflop */
    BTN("Button", 2);

    companion object {
        /**
         * Get valid positions for a given number of players
         */
        fun forPlayerCount(numPlayers: Int): List<Position> = when (numPlayers) {
            2 -> listOf(BTN, BB) // Heads-up: BTN is also SB
            3 -> listOf(BTN, SB, BB)
            4 -> listOf(BTN, CO, SB, BB)
            5 -> listOf(BTN, CO, SB, BB, UTG)
            6 -> listOf(BTN, CO, MP, UTG, SB, BB)
            else -> throw IllegalArgumentException("Unsupported player count: $numPlayers (must be 2-6)")
        }

        /**
         * Validate that a position is valid for the given player count
         */
        fun isValidForPlayerCount(position: Position, numPlayers: Int): Boolean =
            position.minPlayers <= numPlayers

        /**
         * Parse position from string (e.g., "BTN", "BB")
         */
        fun fromString(str: String): Position = entries.find { it.name == str.uppercase() }
            ?: throw IllegalArgumentException("Invalid position: $str")
    }
}
