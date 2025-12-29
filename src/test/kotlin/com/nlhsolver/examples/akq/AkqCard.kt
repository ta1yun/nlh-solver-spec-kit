package com.nlhsolver.examples.akq

/**
 * Simplified card for AKQ game - only Ace, King, or Queen
 */
enum class AkqCard(val rank: Int) {
    ACE(3),
    KING(2),
    QUEEN(1);

    fun beats(other: AkqCard): Boolean = this.rank > other.rank

    override fun toString(): String = when (this) {
        ACE -> "A"
        KING -> "K"
        QUEEN -> "Q"
    }

    companion object {
        fun all(): List<AkqCard> = listOf(ACE, KING, QUEEN)
    }
}
