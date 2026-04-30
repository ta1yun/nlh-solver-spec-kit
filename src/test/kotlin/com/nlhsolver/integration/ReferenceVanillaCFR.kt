package com.nlhsolver.integration

import io.kotest.core.spec.style.FunSpec
import kotlin.math.max

/**
 * Exact translation of the reference implementation's vanilla CFR.
 * This matches the F# code line-by-line to verify their approach.
 */
class ReferenceVanillaCFR : FunSpec({

    test("Reference implementation - exact translation") {
        println("\n=== Reference Implementation (Exact Translation) ===\n")

        val trainer = ReferenceLeducTrainer()
        val numIterations = 50000

        println("Training for $numIterations iterations (cycling through matchups)...")
        val (avgUtility, infoSetMap) = trainer.train(numIterations)

        println()
        println("Average game value for first player: ${String.format("%.5f", avgUtility)}")
        println("Total info sets: ${infoSetMap.size}")
        println()

        // Check a few strategies
        println("Sample strategies:")
        infoSetMap.entries.take(10).forEach { (key, infoSet) ->
            val avgStrategy = infoSet.getAverageStrategy()
            val actions = when {
                key.endsWith("b") -> arrayOf("f", "c", "r")
                key.endsWith("r") -> arrayOf("f", "c")
                else -> arrayOf("x", "b")
            }
            val stratStr = actions.zip(avgStrategy.toList()).joinToString(", ") { (a, p) ->
                "$a: ${String.format("%.5f", p)}"
            }
            println("  $key: $stratStr")
        }

        println()
        println("If this converges to ~0 avg utility and sensible strategies,")
        println("then the reference approach works and we have a bug in our implementation.")
    }
})

/**
 * Information set with regret sum and strategy sum.
 */
data class ReferenceInfoSet(
    val regretSum: DoubleArray,
    val strategySum: DoubleArray
) {
    fun getStrategy(): DoubleArray {
        // Regret matching: strategy proportional to positive regrets
        val strategy = regretSum.map { max(0.0, it) }.toDoubleArray()
        val sum = strategy.sum()

        return if (sum > 0.0) {
            strategy.map { it / sum }.toDoubleArray()
        } else {
            DoubleArray(strategy.size) { 1.0 / strategy.size }  // Uniform
        }
    }

    fun getAverageStrategy(): DoubleArray {
        val sum = strategySum.sum()
        return if (sum > 0.0) {
            strategySum.map { it / sum }.toDoubleArray()
        } else {
            DoubleArray(strategySum.size) { 1.0 / strategySum.size }
        }
    }

    fun accumulate(regrets: DoubleArray, strategy: DoubleArray): ReferenceInfoSet {
        return ReferenceInfoSet(
            regretSum = regretSum.zip(regrets).map { (a, b) -> a + b }.toDoubleArray(),
            strategySum = strategySum.zip(strategy).map { (a, b) -> a + b }.toDoubleArray()
        )
    }

    override fun equals(other: Any?) = other is ReferenceInfoSet &&
        regretSum.contentEquals(other.regretSum) &&
        strategySum.contentEquals(other.strategySum)
    override fun hashCode() = regretSum.contentHashCode() + strategySum.contentHashCode()
}

/**
 * Reference Leduc trainer - exact translation of F# implementation.
 */
class ReferenceLeducTrainer {
    private val deck = listOf("J", "J", "Q", "Q", "K", "K")
    private val numPlayers = 2

    private fun rank(card: String) = when(card) {
        "J" -> 11
        "Q" -> 12
        "K" -> 13
        else -> error("Unknown card")
    }

    private fun isRoundEnd(round: String) = round in setOf("xx", "bc", "xbc", "brc", "xbrc")

    private fun isTerminal(rounds: Array<String>): Boolean {
        val lastRound = rounds.last()
        return when {
            lastRound.endsWith('f') -> true
            rounds.size == 2 -> isRoundEnd(lastRound)
            else -> false
        }
    }

    private fun getLegalActions(history: String): Array<String> {
        return when (history.lastOrNull()) {
            null, 'd', 'x' -> arrayOf("x", "b")
            'b' -> arrayOf("f", "c", "r")
            'r' -> arrayOf("f", "c")
            else -> error("Unexpected history: $history")
        }
    }

    private fun getPayoff(playerCards: Array<String>, communityCard: String, rounds: Array<String>): Int {
        val ante = 1

        fun pay(round: String) = when(round) {
            "xx", "bf", "xbf" -> 0
            "brf", "xbrf", "bc", "xbc" -> 2
            "brc", "xbrc" -> 4
            else -> error("Unexpected round: $round")
        }

        if (rounds.size == 2) {
            val pot = ante + pay(rounds[0]) + 2 * pay(rounds[1])
            return if (rounds[1].endsWith('f')) {
                pot
            } else {  // Showdown
                val activePlayer = rounds[1].length % numPlayers
                val opponent = (activePlayer + 1) % numPlayers

                when {
                    playerCards[activePlayer] == communityCard -> pot
                    playerCards[opponent] == communityCard -> -pot
                    else -> {
                        val diff = rank(playerCards[activePlayer]) - rank(playerCards[opponent])
                        when {
                            diff > 0 -> pot
                            diff == 0 -> 0
                            else -> -pot
                        }
                    }
                }
            }
        } else {
            return ante + pay(rounds[0])
        }
    }

    private fun cfr(
        infoSetMap: MutableMap<String, ReferenceInfoSet>,
        playerCards: Array<String>,
        communityCard: String
    ): Pair<Double, List<Pair<String, ReferenceInfoSet>>> {

        fun loop(history: String, reachProbs: DoubleArray): Pair<Double, List<Pair<String, ReferenceInfoSet>>> {
            val rounds = history.split('d').toTypedArray()

            // Terminal?
            if (isTerminal(rounds)) {
                val payoff = getPayoff(playerCards, communityCard, rounds).toDouble()
                return payoff to emptyList()
            }

            // Round end?
            if (isRoundEnd(rounds.last())) {
                val sign = if (history in setOf("xbc", "brc")) -1.0 else 1.0
                val (utility, keyedInfoSets) = loop(history + "d", reachProbs)
                return (sign * utility) to keyedInfoSets
            }

            // Player action
            val activePlayer = rounds.last().length % numPlayers
            val infoSetKey = buildString {
                append(playerCards[activePlayer])
                if (rounds.size == 2) append(communityCard)
                append(" ")
                append(history)
            }

            val actions = getLegalActions(history)
            val infoSet = infoSetMap.getOrPut(infoSetKey) {
                ReferenceInfoSet(
                    regretSum = DoubleArray(actions.size),
                    strategySum = DoubleArray(actions.size)
                )
            }

            val strategy = infoSet.getStrategy()

            // Evaluate all actions
            val actionResults = actions.mapIndexed { i, action ->
                val nextReachProbs = reachProbs.copyOf()
                nextReachProbs[activePlayer] *= strategy[i]
                loop(history + action, nextReachProbs)
            }

            val actionUtilities = actionResults.map { -it.first }.toDoubleArray()  // Negate opponent utilities
            val allKeyedInfoSets = actionResults.flatMap { it.second }

            // Compute node utility
            val utility = strategy.zip(actionUtilities.toList()).sumOf { (prob, util) -> prob * util }

            // Accumulate regrets and strategy
            val opponent = (activePlayer + 1) % numPlayers
            val regrets = actionUtilities.map { (it - utility) * reachProbs[opponent] }.toDoubleArray()
            val weightedStrategy = strategy.map { it * reachProbs[activePlayer] }.toDoubleArray()

            val updatedInfoSet = infoSet.accumulate(regrets, weightedStrategy)

            return utility to (allKeyedInfoSets + (infoSetKey to updatedInfoSet))
        }

        return loop("", doubleArrayOf(1.0, 1.0))
    }

    fun train(numIterations: Int): Pair<Double, Map<String, ReferenceInfoSet>> {
        // Generate all permutations (all possible deals)
        val permutations = generatePermutations(deck).map { perm ->
            arrayOf(perm[0], perm[1]) to perm[2]  // playerCards to communityCard
        }

        var infoSetMap = mutableMapOf<String, ReferenceInfoSet>()
        val utilities = mutableListOf<Double>()

        for (i in 0 until numIterations) {
            val (playerCards, communityCard) = permutations[i % permutations.size]

            val (utility, keyedInfoSets) = cfr(infoSetMap, playerCards, communityCard)
            utilities.add(utility)

            // Update info sets
            for ((key, infoSet) in keyedInfoSets) {
                infoSetMap[key] = infoSet
            }
        }

        val avgUtility = utilities.average()
        return avgUtility to infoSetMap
    }

    private fun generatePermutations(list: List<String>): List<List<String>> {
        if (list.isEmpty()) return listOf(emptyList())

        val result = mutableListOf<List<String>>()
        for (i in list.indices) {
            val element = list[i]
            val remaining = list.take(i) + list.drop(i + 1)
            for (perm in generatePermutations(remaining)) {
                result.add(listOf(element) + perm)
            }
        }
        return result
    }
}
