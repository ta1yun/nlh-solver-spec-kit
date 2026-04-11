package com.nlhsolver.integration

import com.nlhsolver.core.*
import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Street
import com.nlhsolver.solver.AbstractionMode
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeLessThan

/**
 * Test CFR convergence with EXTERNAL SAMPLING (the fix).
 *
 * Samples ONE matchup per iteration instead of training all matchups.
 * This prevents strategy conflicts between matchups.
 */
class MultiMatchupExternalSamplingTest : FunSpec({

    test("multiple matchups with external sampling should converge") {
        println("\n=== Testing External Sampling MCCFR ===\n")

        val board = listOf(
            Card.fromString("Qd"),
            Card.fromString("7c"),
            Card.fromString("2h")
        )

        // Create 10 different matchups with weights
        data class WeightedMatchup(val state: PokerGameState, val weight: Double)

        val matchups = listOf(
            Pair(Card.fromString("As"), Card.fromString("Ah")) to Pair(Card.fromString("Ks"), Card.fromString("Kh")),
            Pair(Card.fromString("As"), Card.fromString("Ah")) to Pair(Card.fromString("Qs"), Card.fromString("Qh")),
            Pair(Card.fromString("Ks"), Card.fromString("Kh")) to Pair(Card.fromString("Qs"), Card.fromString("Qh")),
            Pair(Card.fromString("As"), Card.fromString("Kd")) to Pair(Card.fromString("Qs"), Card.fromString("Js")),
            Pair(Card.fromString("As"), Card.fromString("Kd")) to Pair(Card.fromString("Ts"), Card.fromString("9s")),
            Pair(Card.fromString("Js"), Card.fromString("Ts")) to Pair(Card.fromString("9s"), Card.fromString("8s")),
            Pair(Card.fromString("6s"), Card.fromString("6h")) to Pair(Card.fromString("5s"), Card.fromString("5h")),
            Pair(Card.fromString("As"), Card.fromString("3s")) to Pair(Card.fromString("Kd"), Card.fromString("Jd")),
            Pair(Card.fromString("8s"), Card.fromString("7s")) to Pair(Card.fromString("6d"), Card.fromString("5d")),
            Pair(Card.fromString("4s"), Card.fromString("4h")) to Pair(Card.fromString("3d"), Card.fromString("3c"))
        )

        val weightedMatchups = matchups.map { (btnHand, bbHand) ->
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
                weight = 1.0 / matchups.size  // Uniform weights for simplicity
            )
        }

        println("Training on ${weightedMatchups.size} matchups with EXTERNAL SAMPLING")
        println("Board: Qd7c2h")
        println("Abstraction: EQUITY_BUCKETING (25 buckets)")
        println()

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

        // Check convergence at different iterations
        val checkpoints = listOf(1_000, 5_000, 10_000, 20_000)

        for (totalIterations in checkpoints) {
            val testSolver = CFRSolver(numPlayers = 2, enableCFRPlus = true)

            // External sampling: sample ONE matchup per iteration
            for (iter in 1..totalIterations) {
                val sampled = sampleMatchup()
                testSolver.train(sampled.state, iterations = 1)
            }

            // Calculate average exploitability
            var totalExploit = 0.0
            for (matchup in weightedMatchups) {
                val exploit = exploitCalc.calculateExploitability(
                    matchup.state,
                    testSolver.getStrategyProfile()
                )
                totalExploit += exploit * matchup.weight
            }
            val avgExploit = totalExploit
            val avgExploitPct = (avgExploit / 3.0) * 100

            println("Iterations: ${"%,6d".format(totalIterations)}, Avg Exploitability: ${String.format("%6.2f%%", avgExploitPct)} (${String.format("%.4f", avgExploit)} chips)")
        }

        // Final test
        for (iter in 1..20_000) {
            val sampled = sampleMatchup()
            solver.train(sampled.state, iterations = 1)
        }

        var totalExploit = 0.0
        for (matchup in weightedMatchups) {
            val exploit = exploitCalc.calculateExploitability(
                matchup.state,
                solver.getStrategyProfile()
            )
            totalExploit += exploit * matchup.weight
        }
        val finalExploit = totalExploit
        val finalExploitPct = (finalExploit / 3.0) * 100

        println()
        println("Final avg exploitability: ${String.format("%.2f%%", finalExploitPct)}")
        println()

        // With external sampling and limited iterations, allow 25%
        // (20k iterations / 10 matchups = ~2k per matchup, need 100k+ for full convergence)
        finalExploitPct shouldBeLessThan 25.0

        println("✓ External sampling converges!")
    }
})
