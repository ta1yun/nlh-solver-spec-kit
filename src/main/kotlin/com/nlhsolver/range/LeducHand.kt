package com.nlhsolver.range

/**
 * Represents a single card in Leduc Hold'em.
 *
 * Leduc uses a 6-card deck: J♠, J♥, Q♠, Q♥, K♠, K♥
 * Cards are indexed 0-5: 0=J♠, 1=J♥, 2=Q♠, 3=Q♥, 4=K♠, 5=K♥
 *
 * With suit abstraction, J♠ and J♥ are strategically equivalent,
 * but they still conflict (can't both be dealt).
 */
data class LeducHand(val cardIdx: Int) : Hand {
    init {
        require(cardIdx in 0..5) { "Leduc card index must be 0-5, got $cardIdx" }
    }

    override val id: String = when(cardIdx) {
        0 -> "Ja"; 1 -> "Jb"
        2 -> "Qa"; 3 -> "Qb"
        4 -> "Ka"; 5 -> "Kb"
        else -> "?"
    }

    val rank: Int = cardIdx / 2  // 0=J, 1=Q, 2=K
    val rankName: String = when(rank) {
        0 -> "J"; 1 -> "Q"; 2 -> "K"
        else -> "?"
    }

    val suit: String = if (cardIdx % 2 == 0) "♠" else "♥"

    override fun conflicts(other: Hand): Boolean {
        // Two hands conflict only if they're the exact same card
        // (J♠ and J♥ are different cards and don't conflict)
        return (other as LeducHand).cardIdx == this.cardIdx
    }

    override fun toString(): String = "$rankName$suit"
}
