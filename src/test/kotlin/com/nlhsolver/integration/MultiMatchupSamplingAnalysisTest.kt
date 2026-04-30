package com.nlhsolver.integration

import com.nlhsolver.core.*
import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Street
import com.nlhsolver.solver.AbstractionMode
import io.kotest.core.spec.style.FunSpec

/**
 * Analyze sampling distribution and per-matchup exploitability.
 */
class MultiMatchupSamplingAnalysisTest : FunSpec({

    test("analyze per-matchup exploitability with external sampling") {
        println("\n=== Analyzing External Sampling Per-Matchup ===\n")

        val board = listOf(
            Card.fromString("Qd"),
            Card.fromString("7c"),
            Card.fromString("2h")
        )

        // Create just 5 matchups for detailed analysis
        data class WeightedMatchup(val state: PokerGameState, val weight: Double, val name: String)

        val matchupPairs = listOf(
            "AA vs KK" to (Pair(Card.fromString("As"), Card.fromString("Ah")) to Pair(Card.fromString("Ks"), Card.fromString("Kh"))),
            "KK vs JJ" to (Pair(Card.fromString("Ks"), Card.fromString("Kh")) to Pair(Card.fromString("Js"), Card.fromString("Jh"))),
            "JJ vs TT" to (Pair(Card.fromString("Js"), Card.fromString("Jh")) to Pair(Card.fromString("Ts"), Card.fromString("Th"))),
            "AK vs 99" to (Pair(Card.fromString("As"), Card.fromString("Kd")) to Pair(Card.fromString("9s"), Card.fromString("9h"))),
            "A5s vs K8s" to (Pair(Card.fromString("As"), Card.fromString("5s")) to Pair(Card.fromString("Kd"), Card.fromString("8d")))
        )

        val weightedMatchups = matchupPairs.map { (name, hands) ->
            val (btnHand, bbHand) = hands
            WeightedMatchup(
                state = StartingHandSampler.createGameState(
                    street = Street.FLOP,
                    board = board,
                    btnHand = btnHand,
                    bbHand = bbHand,
                    btnStack = 48.5,
                    bbStack = 48.5,
                    pot = 3.0,
                    btnInvested = 1.5,
                    bbInvested = 1.5,
                    abstractionMode = AbstractionMode.EQUITY_BUCKETING,
                    numBuckets = 25,
                    maxRaisesPerStreet = 4
                ),
                weight = 1.0 / matchupPairs.size,
                name = name
            )
        }

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        // Weighted random sampling
        fun sampleMatchup(): WeightedMatchup {
            val totalWeight = weightedMatchups.sumOf { it.weight }
            var random = Math.random() * totalWeight
            for (matchup in weightedMatchups) {
                random -= matchup.weight
                if (random <= 0) return matchup
            }
            return weightedMatchups.last()
        }

        // Track sampling counts
        val sampleCounts = mutableMapOf<String, Int>()
        weightedMatchups.forEach { sampleCounts[it.name] = 0 }

        println("Training with external sampling...")
        val checkpoints = listOf(0, 1000, 5000, 10000)
        var lastCheckpoint = 0

        for (checkpoint in checkpoints) {
            val iterationsToRun = checkpoint - lastCheckpoint

            // Train
            for (iter in 1..iterationsToRun) {
                val sampled = sampleMatchup()
                sampleCounts[sampled.name] = sampleCounts[sampled.name]!! + 1
                solver.train(sampled.state, iterations = 1)
            }

            // Evaluate per-matchup exploitability
            println("\n=== After $checkpoint iterations ===")
            println("Sample counts: $sampleCounts")
            println("\nPer-matchup exploitability:")

            var totalExploit = 0.0
            for (matchup in weightedMatchups) {
                val exploit = exploitCalc.calculateExploitability(
                    matchup.state,
                    solver.getStrategyProfile()
                )
                val exploitPct = (exploit / 3.0) * 100
                totalExploit += exploit * matchup.weight

                val samples = sampleCounts[matchup.name]!!
                println("  ${matchup.name.padEnd(15)}: ${String.format("%6.2f%%", exploitPct)} (sampled $samples times)")
            }

            val avgExploitPct = (totalExploit / 3.0) * 100
            println("  ${"Average".padEnd(15)}: ${String.format("%6.2f%%", avgExploitPct)}")

            lastCheckpoint = checkpoint
        }
    }
})
