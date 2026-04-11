package com.nlhsolver.integration

import com.nlhsolver.core.*
import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Street
import com.nlhsolver.solver.AbstractionMode
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeLessThan

/**
 * Test CFR convergence on a single NLH matchup WITH equity bucketing.
 *
 * This tests if the bug is in the equity bucketing abstraction.
 * The previous test (without bucketing) passed, so if this fails,
 * the bug is in the equity bucketing implementation.
 */
class SingleMatchupWithBucketingTest : FunSpec({

    test("single NLH matchup with equity bucketing should converge") {
        println("\n=== Testing Single Matchup with Equity Bucketing ===\n")

        // Same matchup as before: AA vs KK on dry flop
        val btnHand = Pair(Card.fromString("As"), Card.fromString("Ah"))
        val bbHand = Pair(Card.fromString("Ks"), Card.fromString("Kh"))
        val board = listOf(
            Card.fromString("Qd"),
            Card.fromString("7c"),
            Card.fromString("2h")
        )

        // Use equity bucketing like the full solve
        val rootState = StartingHandSampler.createGameState(
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
            numBuckets = 25, // Flop buckets from default
            maxRaisesPerStreet = 4
        )

        println("Matchup: AA vs KK on Qd7c2h")
        println("Starting pot: 3.0 chips")
        println("Abstraction: EQUITY_BUCKETING (25 buckets)")
        println()

        // Train with CFR
        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        // Check convergence at different iterations
        val checkpoints = listOf(1_000, 5_000, 10_000, 20_000)

        for (iterations in checkpoints) {
            val testSolver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
            testSolver.train(rootState, iterations = iterations)

            val exploitability = exploitCalc.calculateExploitability(
                rootState,
                testSolver.getStrategyProfile()
            )

            // Normalize by pot
            val exploitPct = (exploitability / 3.0) * 100

            println("Iterations: ${"%,6d".format(iterations)}, Exploitability: ${String.format("%6.2f%%", exploitPct)} (${String.format("%.4f", exploitability)} chips)")
        }

        // Final test
        solver.train(rootState, iterations = 20_000)

        val finalExploit = exploitCalc.calculateExploitability(
            rootState,
            solver.getStrategyProfile()
        )

        val finalExploitPct = (finalExploit / 3.0) * 100

        println()
        println("Final exploitability: ${String.format("%.2f%%", finalExploitPct)}")
        println()

        // With bucketing, allow slightly higher exploitability (up to 5%)
        // since abstraction introduces some error
        finalExploitPct shouldBeLessThan 5.0

        println("✓ Single matchup with bucketing converges!")
    }
})
