package com.nlhsolver.integration

import com.nlhsolver.core.*
import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Street
import com.nlhsolver.solver.AbstractionMode
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeLessThan

/**
 * Test CFR convergence on MULTIPLE matchups trained SEQUENTIALLY.
 *
 * This isolates whether the bug is in:
 * - Multi-matchup aggregation itself, OR
 * - Parallel training race conditions
 *
 * If this FAILS: bug is in multi-matchup strategy aggregation
 * If this PASSES: bug is in parallel training
 */
class MultiMatchupSequentialTest : FunSpec({

    test("multiple matchups trained sequentially should converge") {
        println("\n=== Testing Multiple Matchups (Sequential Training) ===\n")

        val board = listOf(
            Card.fromString("Qd"),
            Card.fromString("7c"),
            Card.fromString("2h")
        )

        // Create 10 different matchups
        val matchups = listOf(
            Pair(Card.fromString("As"), Card.fromString("Ah")) to Pair(Card.fromString("Ks"), Card.fromString("Kh")), // AA vs KK
            Pair(Card.fromString("As"), Card.fromString("Ah")) to Pair(Card.fromString("Qs"), Card.fromString("Qh")), // AA vs QQ
            Pair(Card.fromString("Ks"), Card.fromString("Kh")) to Pair(Card.fromString("Qs"), Card.fromString("Qh")), // KK vs QQ
            Pair(Card.fromString("As"), Card.fromString("Kd")) to Pair(Card.fromString("Qs"), Card.fromString("Js")), // AK vs QJ
            Pair(Card.fromString("As"), Card.fromString("Kd")) to Pair(Card.fromString("Ts"), Card.fromString("9s")), // AK vs T9
            Pair(Card.fromString("Js"), Card.fromString("Ts")) to Pair(Card.fromString("9s"), Card.fromString("8s")), // JT vs 98
            Pair(Card.fromString("6s"), Card.fromString("6h")) to Pair(Card.fromString("5s"), Card.fromString("5h")), // 66 vs 55
            Pair(Card.fromString("As"), Card.fromString("3s")) to Pair(Card.fromString("Kd"), Card.fromString("Jd")), // A3s vs KJ
            Pair(Card.fromString("8s"), Card.fromString("7s")) to Pair(Card.fromString("6d"), Card.fromString("5d")), // 87s vs 65
            Pair(Card.fromString("4s"), Card.fromString("4h")) to Pair(Card.fromString("3d"), Card.fromString("3c"))  // 44 vs 33
        )

        val rootStates = matchups.map { (btnHand, bbHand) ->
            StartingHandSampler.createGameState(
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
            )
        }

        println("Training on ${rootStates.size} matchups SEQUENTIALLY")
        println("Board: Qd7c2h")
        println("Abstraction: EQUITY_BUCKETING (25 buckets)")
        println()

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        // Check convergence at different iterations
        val checkpoints = listOf(1_000, 5_000, 10_000)

        for (iterations in checkpoints) {
            val testSolver = CFRSolver(numPlayers = 2, enableCFRPlus = true)

            // Train SEQUENTIALLY on all matchups
            for (rootState in rootStates) {
                testSolver.train(rootState, iterations = iterations / rootStates.size)
            }

            // Calculate average exploitability across matchups
            var totalExploit = 0.0
            for (rootState in rootStates) {
                val exploit = exploitCalc.calculateExploitability(
                    rootState,
                    testSolver.getStrategyProfile()
                )
                totalExploit += exploit
            }
            val avgExploit = totalExploit / rootStates.size
            val avgExploitPct = (avgExploit / 3.0) * 100

            println("Iterations: ${"%,6d".format(iterations)}, Avg Exploitability: ${String.format("%6.2f%%", avgExploitPct)} (${String.format("%.4f", avgExploit)} chips)")
        }

        // Final test
        for (rootState in rootStates) {
            solver.train(rootState, iterations = 10_000 / rootStates.size)
        }

        var totalExploit = 0.0
        for (rootState in rootStates) {
            val exploit = exploitCalc.calculateExploitability(
                rootState,
                solver.getStrategyProfile()
            )
            totalExploit += exploit
        }
        val finalExploit = totalExploit / rootStates.size
        val finalExploitPct = (finalExploit / 3.0) * 100

        println()
        println("Final avg exploitability: ${String.format("%.2f%%", finalExploitPct)}")
        println()

        // Allow up to 10% for multi-matchup (some cross-interference expected)
        finalExploitPct shouldBeLessThan 10.0

        println("✓ Multiple matchups (sequential) converge!")
    }
})
