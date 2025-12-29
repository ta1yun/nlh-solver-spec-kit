package com.nlhsolver.poker

/**
 * Evaluates poker hands to determine their rank.
 * Supports both 5-card and 7-card evaluation (finds best 5-card hand from 7).
 */
object HandEvaluator {

    /**
     * Evaluate a 5-card poker hand
     */
    fun evaluate(cards: List<Card>): HandRank {
        require(cards.size == 5) { "Must evaluate exactly 5 cards, got ${cards.size}" }
        require(cards.distinct().size == 5) { "Cards must be distinct" }

        val sorted = cards.sortedByDescending { it.rank.value }
        val ranks = sorted.map { it.rank }
        val suits = sorted.map { it.suit }

        val isFlush = suits.distinct().size == 1
        val isStraight = checkStraight(ranks)

        return when {
            isFlush && isStraight && ranks[0] == Rank.ACE -> HandRank.royalFlush()
            isFlush && isStraight -> HandRank.straightFlush(ranks[0])
            else -> evaluateNonFlushStraight(ranks, isFlush)
        }
    }

    /**
     * Evaluate best 5-card hand from 7 cards (hole cards + board)
     */
    fun evaluateBest7(cards: List<Card>): HandRank {
        require(cards.size == 7) { "Must evaluate exactly 7 cards for best hand" }
        require(cards.distinct().size == 7) { "Cards must be distinct" }

        // Generate all 5-card combinations (C(7,5) = 21 combinations)
        val combinations = cards.combinations(5)

        // Evaluate each and return the best
        return combinations.map { evaluate(it) }.maxOrNull()
            ?: throw IllegalStateException("No valid hand found")
    }

    /**
     * Evaluate hands that are not straight flushes
     */
    private fun evaluateNonFlushStraight(ranks: List<Rank>, isFlush: Boolean): HandRank {
        val rankCounts = ranks.groupingBy { it }.eachCount()
            .entries.sortedWith(compareByDescending<Map.Entry<Rank, Int>> { it.value }.thenByDescending { it.key.value })

        val (quads, trips, pairs, singles) = categorizeRanks(rankCounts)

        return when {
            quads.isNotEmpty() -> {
                val kicker = (trips + pairs + singles).first()
                HandRank.fourOfAKind(quads.first(), kicker)
            }
            trips.isNotEmpty() && pairs.isNotEmpty() -> {
                HandRank.fullHouse(trips.first(), pairs.first())
            }
            isFlush -> HandRank.flush(ranks)
            checkStraight(ranks) -> HandRank.straight(ranks[0])
            trips.isNotEmpty() -> {
                val kickers = (pairs + singles).take(2)
                HandRank.threeOfAKind(trips.first(), kickers)
            }
            pairs.size >= 2 -> {
                val kicker = (singles + pairs.drop(2)).first()
                HandRank.twoPair(pairs[0], pairs[1], kicker)
            }
            pairs.size == 1 -> {
                val kickers = singles.take(3)
                HandRank.onePair(pairs.first(), kickers)
            }
            else -> {
                HandRank.highCard(ranks[0], ranks.drop(1).take(4))
            }
        }
    }

    /**
     * Check if ranks form a straight (5 consecutive cards)
     */
    private fun checkStraight(ranks: List<Rank>): Boolean {
        require(ranks.size >= 5) { "Need at least 5 ranks to check straight" }

        val sorted = ranks.sortedByDescending { it.value }

        // Check for regular straight
        val isRegularStraight = (0..sorted.size - 5).any { start ->
            (0 until 4).all { i ->
                sorted[start + i].value == sorted[start + i + 1].value + 1
            }
        }

        // Check for Ace-low straight (A-2-3-4-5, also called "wheel")
        val isWheelStraight = sorted.map { it.value }.containsAll(listOf(14, 5, 4, 3, 2))

        return isRegularStraight || isWheelStraight
    }

    /**
     * Categorize ranks by their frequency (quads, trips, pairs, singles)
     */
    private fun categorizeRanks(rankCounts: List<Map.Entry<Rank, Int>>): RankCategories {
        val quads = mutableListOf<Rank>()
        val trips = mutableListOf<Rank>()
        val pairs = mutableListOf<Rank>()
        val singles = mutableListOf<Rank>()

        rankCounts.forEach { (rank, count) ->
            when (count) {
                4 -> quads.add(rank)
                3 -> trips.add(rank)
                2 -> pairs.add(rank)
                1 -> singles.add(rank)
            }
        }

        return RankCategories(quads, trips, pairs, singles)
    }

    /**
     * Helper data class for categorized ranks
     */
    private data class RankCategories(
        val quads: List<Rank>,
        val trips: List<Rank>,
        val pairs: List<Rank>,
        val singles: List<Rank>
    )

    /**
     * Extension function to generate combinations
     */
    private fun <T> List<T>.combinations(k: Int): List<List<T>> {
        if (k == 0) return listOf(emptyList())
        if (isEmpty()) return emptyList()

        val head = first()
        val tail = drop(1)

        // Combinations that include head + combinations from tail
        val withHead = tail.combinations(k - 1).map { listOf(head) + it }
        // Combinations that don't include head
        val withoutHead = tail.combinations(k)

        return withHead + withoutHead
    }
}
