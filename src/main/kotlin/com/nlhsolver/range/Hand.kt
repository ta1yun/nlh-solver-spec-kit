package com.nlhsolver.range

/**
 * Represents a player's hand in any poker variant.
 *
 * This interface generalizes across:
 * - Leduc: Single card (J, Q, K)
 * - NLH: Two hole cards (AKs, 72o, etc.)
 * - PLO: Four hole cards
 *
 * The key abstraction is that hands can conflict (can't both be dealt)
 * and need unique identifiers for tracking in ranges.
 */
interface Hand {
    /** Unique identifier for this hand (e.g., "Ka", "AKs", "AA72s") */
    val id: String

    /**
     * Check if this hand conflicts with another hand.
     *
     * Two hands conflict if they cannot both be dealt from the same deck.
     * In Leduc with suit abstraction, same-rank hands conflict.
     * In NLH, hands sharing a specific card conflict.
     *
     * @param other The other hand to check against
     * @return true if hands conflict (cannot both be dealt)
     */
    fun conflicts(other: Hand): Boolean
}
