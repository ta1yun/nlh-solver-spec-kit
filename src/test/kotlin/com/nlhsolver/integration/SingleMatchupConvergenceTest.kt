package com.nlhsolver.integration

import com.nlhsolver.core.*
import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Street
import com.nlhsolver.solver.AbstractionMode
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeLessThan

/**
 * Test CFR convergence on a single NLH matchup.
 *
 * This isolates whether the bug is in:
 * 1. PokerGameState implementation
 * 2. Parallel training (test runs single-threaded)
 * 3. Multi-matchup aggregation (only one matchup)
 *
 * If this test FAILS (high exploitability), the bug is in PokerGameState.
 * If this test PASSES (low exploitability), the bug is in parallel/multi-matchup handling.
 */
class SingleMatchupConvergenceTest : FunSpec({

    test("single NLH matchup should converge") {
        println("\n=== Testing Single NLH Matchup Convergence ===\n")

        // Simple preflop matchup: AA vs KK on a dry flop
        val btnHand = Pair(Card.fromString("As"), Card.fromString("Ah"))
        val bbHand = Pair(Card.fromString("Ks"), Card.fromString("Kh"))
        val board = listOf(
            Card.fromString("Qd"),
            Card.fromString("7c"),
            Card.fromString("2h")
        )

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
            abstractionMode = AbstractionMode.NONE, // No abstraction for simplicity
            numBuckets = 0, // Not used with NONE mode
            maxRaisesPerStreet = 4
        )

        println("Matchup: AA vs KK on Qd7c2h")
        println("Starting pot: 3.0 chips")
        println("Abstraction: NONE (exact hands)")
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

        // Final test - should converge to low exploitability
        solver.train(rootState, iterations = 20_000)

        val finalExploit = exploitCalc.calculateExploitability(
            rootState,
            solver.getStrategyProfile()
        )

        val finalExploitPct = (finalExploit / 3.0) * 100

        println()
        println("Final exploitability: ${String.format("%.2f%%", finalExploitPct)}")
        println()

        // For a simple AA vs KK postflop matchup, exploitability should converge well
        // Allow up to 10% since it's a simplified scenario
        finalExploitPct shouldBeLessThan 10.0

        println("✓ Single matchup converges!")
    }
})
