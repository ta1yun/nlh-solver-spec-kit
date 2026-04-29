package com.nlhsolver.range

/**
 * Represents a probability distribution over hands.
 *
 * A Range tracks how often each hand reaches a specific game tree node.
 * As players take actions, their ranges evolve based on their strategies.
 *
 * Example:
 * - Pre-flop: Uniform range (all hands equally likely)
 * - After P1 bets: Polarized range (mostly strong hands + some bluffs)
 * - After P2 calls: Capped range (removed very strong hands that would raise)
 *
 * This is the foundation of range-based EV calculation in poker solvers.
 */
interface Range {
    /**
     * Get probability weight for a specific hand.
     *
     * @param hand The hand to query
     * @return Weight in [0, 1] where 0 = never in range, 1 = always in range
     */
    fun getWeight(hand: Hand): Double

    /**
     * Get all hands with non-zero weight.
     *
     * This is used for efficient iteration - no need to check every possible
     * hand if most have zero weight.
     *
     * @return List of (hand, weight) pairs where weight > 0
     */
    fun getActiveHands(): List<Pair<Hand, Double>>

    /**
     * Total weight across all hands.
     *
     * Used for normalization. In a properly normalized range, this should be
     * close to the number of hand combos possible (e.g., 1326 for NLH pre-flop).
     *
     * @return Sum of all hand weights
     */
    fun getTotalWeight(): Double

    /**
     * Create a new range excluding hands that conflict with the given hand.
     *
     * This is used when computing matchup EVs - if hero has AK, opponent
     * cannot have AK, AQ, KQ, etc. (any hand with A or K).
     *
     * @param hand The hand to exclude
     * @return New range with conflicting hands removed
     */
    fun excluding(hand: Hand): Range
}
