package com.nlhsolver.examples.leduc

/**
 * Cards in Leduc poker: 2 Jacks, 2 Queens, 2 Kings.
 */
enum class LeducCard(val rank: Int) {
    JACK(0),
    QUEEN(1),
    KING(2);

    companion object {
        fun all() = values().toList()
    }

    fun beats(other: LeducCard): Boolean = this.rank > other.rank
}
