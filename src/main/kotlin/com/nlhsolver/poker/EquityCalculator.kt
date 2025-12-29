package com.nlhsolver.poker

import kotlin.random.Random

/**
 * Calculates hand equity using Monte Carlo simulation.
 * Equity represents the probability of winning at showdown.
 */
object EquityCalculator {

    /**
     * Calculate equity for a hand against an opponent range
     * @param heroCards Player's hole cards
     * @param board Current board cards (0 for preflop, 3 for flop, 4 for turn, 5 for river)
     * @param numOpponents Number of opponents (default 1 for heads-up)
     * @param numSimulations Number of Monte Carlo simulations to run
     * @return Equity as a percentage (0.0 to 1.0)
     */
    fun calculateEquity(
        heroCards: List<Card>,
        board: List<Card> = emptyList(),
        numOpponents: Int = 1,
        numSimulations: Int = 10000
    ): EquityResult {
        require(heroCards.size == 2) { "Hero must have exactly 2 hole cards" }
        require(board.size in 0..5) { "Board must have 0-5 cards" }
        require(numOpponents in 1..5) { "Number of opponents must be 1-5" }
        require(numSimulations > 0) { "Must run at least 1 simulation" }

        val deadCards = (heroCards + board).toSet()
        val deck = Card.createDeck().filterNot { it in deadCards }

        var wins = 0
        var ties = 0
        var losses = 0

        repeat(numSimulations) {
            val result = simulateHand(heroCards, board, deck, numOpponents)
            when (result) {
                HandResult.WIN -> wins++
                HandResult.TIE -> ties++
                HandResult.LOSS -> losses++
            }
        }

        val equity = (wins + ties * 0.5) / numSimulations
        return EquityResult(
            equity = equity,
            wins = wins,
            ties = ties,
            losses = losses,
            simulations = numSimulations
        )
    }

    /**
     * Calculate equity against a specific opponent hand
     */
    fun calculateEquityVsHand(
        heroCards: List<Card>,
        villainCards: List<Card>,
        board: List<Card> = emptyList(),
        numSimulations: Int = 10000
    ): EquityResult {
        require(heroCards.size == 2) { "Hero must have exactly 2 hole cards" }
        require(villainCards.size == 2) { "Villain must have exactly 2 hole cards" }
        require(board.size in 0..5) { "Board must have 0-5 cards" }

        val deadCards = (heroCards + villainCards + board).toSet()
        require(deadCards.size == heroCards.size + villainCards.size + board.size) {
            "Cards must be distinct"
        }

        val deck = Card.createDeck().filterNot { it in deadCards }

        var wins = 0
        var ties = 0
        var losses = 0

        repeat(numSimulations) {
            val finalBoard = completeBoard(board, deck)
            val heroHand = HandEvaluator.evaluateBest7(heroCards + finalBoard)
            val villainHand = HandEvaluator.evaluateBest7(villainCards + finalBoard)

            when {
                heroHand > villainHand -> wins++
                heroHand == villainHand -> ties++
                else -> losses++
            }
        }

        val equity = (wins + ties * 0.5) / numSimulations
        return EquityResult(
            equity = equity,
            wins = wins,
            ties = ties,
            losses = losses,
            simulations = numSimulations
        )
    }

    /**
     * Simulate a single hand to completion
     */
    private fun simulateHand(
        heroCards: List<Card>,
        board: List<Card>,
        deck: List<Card>,
        numOpponents: Int
    ): HandResult {
        // Deal opponent hands
        val shuffled = deck.shuffled()
        val opponentHands = (0 until numOpponents).map { i ->
            listOf(shuffled[i * 2], shuffled[i * 2 + 1])
        }

        // Complete the board
        val usedCards = opponentHands.flatten().size
        val finalBoard = completeBoard(board, shuffled.drop(usedCards))

        // Evaluate all hands
        val heroHand = HandEvaluator.evaluateBest7(heroCards + finalBoard)
        val opponentBestHand = opponentHands
            .map { HandEvaluator.evaluateBest7(it + finalBoard) }
            .maxOrNull() ?: return HandResult.WIN

        return when {
            heroHand > opponentBestHand -> HandResult.WIN
            heroHand == opponentBestHand -> HandResult.TIE
            else -> HandResult.LOSS
        }
    }

    /**
     * Complete the board to 5 cards by dealing from deck
     */
    private fun completeBoard(currentBoard: List<Card>, deck: List<Card>): List<Card> {
        val cardsNeeded = 5 - currentBoard.size
        return if (cardsNeeded > 0) {
            currentBoard + deck.take(cardsNeeded)
        } else {
            currentBoard
        }
    }

    /**
     * Calculate equity distribution (equity histogram) for bucketing
     * Returns equity against various opponent ranges
     */
    fun calculateEquityDistribution(
        heroCards: List<Card>,
        board: List<Card>,
        numSamples: Int = 100
    ): EquityDistribution {
        val equities = mutableListOf<Double>()
        val deadCards = (heroCards + board).toSet()
        val deck = Card.createDeck().filterNot { it in deadCards }

        // Sample random opponent hands
        repeat(numSamples) {
            val shuffled = deck.shuffled()
            val villainCards = listOf(shuffled[0], shuffled[1])

            val result = calculateEquityVsHand(
                heroCards = heroCards,
                villainCards = villainCards,
                board = board,
                numSimulations = 1000 // Fewer sims per sample for speed
            )
            equities.add(result.equity)
        }

        return EquityDistribution(
            mean = equities.average(),
            median = equities.sorted()[numSamples / 2],
            stdDev = calculateStdDev(equities),
            min = equities.minOrNull() ?: 0.0,
            max = equities.maxOrNull() ?: 1.0,
            samples = equities
        )
    }

    private fun calculateStdDev(values: List<Double>): Double {
        val mean = values.average()
        val variance = values.map { (it - mean) * (it - mean) }.average()
        return kotlin.math.sqrt(variance)
    }

    enum class HandResult {
        WIN, TIE, LOSS
    }

    data class EquityResult(
        val equity: Double,
        val wins: Int,
        val ties: Int,
        val losses: Int,
        val simulations: Int
    ) {
        val winPercentage: Double get() = wins.toDouble() / simulations * 100
        val tiePercentage: Double get() = ties.toDouble() / simulations * 100
        val lossPercentage: Double get() = losses.toDouble() / simulations * 100

        override fun toString(): String =
            "Equity: ${String.format("%.2f", equity * 100)}% " +
                    "(W: ${String.format("%.1f", winPercentage)}%, " +
                    "T: ${String.format("%.1f", tiePercentage)}%, " +
                    "L: ${String.format("%.1f", lossPercentage)}%)"
    }

    data class EquityDistribution(
        val mean: Double,
        val median: Double,
        val stdDev: Double,
        val min: Double,
        val max: Double,
        val samples: List<Double>
    ) {
        override fun toString(): String =
            "Equity Distribution: μ=${String.format("%.3f", mean)}, " +
                    "σ=${String.format("%.3f", stdDev)}, " +
                    "range=[${String.format("%.3f", min)}, ${String.format("%.3f", max)}]"
    }
}
