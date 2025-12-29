package com.nlhsolver.core

/**
 * Represents a player in a poker game.
 * Using enum for efficiency in CFR algorithms where player indexing is common.
 */
enum class Player(val index: Int) {
    PLAYER_1(0),
    PLAYER_2(1);

    /**
     * Get the opponent of this player
     */
    fun opponent(): Player = when (this) {
        PLAYER_1 -> PLAYER_2
        PLAYER_2 -> PLAYER_1
    }

    companion object {
        fun fromIndex(index: Int): Player = when (index) {
            0 -> PLAYER_1
            1 -> PLAYER_2
            else -> throw IllegalArgumentException("Invalid player index: $index")
        }

        val all = listOf(PLAYER_1, PLAYER_2)
        const val NUM_PLAYERS = 2
    }
}
