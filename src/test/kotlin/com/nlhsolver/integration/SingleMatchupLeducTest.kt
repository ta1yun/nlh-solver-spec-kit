package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeLessThan

/**
 * Test solving a SINGLE Leduc matchup (not all simultaneously).
 */
class SingleMatchupLeducTest : FunSpec({

    test("Single matchup: K♦ vs J♦ with board K♥") {
        println("\n=== Single Leduc Matchup ===")
        println("P1=K♦, P2=J♦, Board=K♥")
        println("P1 has pair of Kings\n")

        val matchup = TwoRoundLeducState(
            p1Card = 4,  // K♦
            p2Card = 0,  // J♦
            boardCard = 5,  // K♥
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        fun computeExploit(): Double {
            val exploit = exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
            return (exploit / 2.0) * 100
        }

        println("Training single matchup:")
        val checkpoints = listOf(0, 1000, 5000, 10000, 50000, 100000)

        var lastCheckpoint = 0
        for (checkpoint in checkpoints) {
            repeat(checkpoint - lastCheckpoint) {
                solver.train(matchup, iterations = 1)
            }

            val exploit = computeExploit()
            println("  $checkpoint iterations: ${String.format("%.2f%%", exploit)}")
            lastCheckpoint = checkpoint
        }

        val finalExploit = computeExploit()
        println("\n✓ Single matchup: ${String.format("%.2f%%", finalExploit)} exploitability")

        // Should converge much better for a single matchup
        finalExploit shouldBeLessThan 1.0
    }
})
