package com.nlhsolver.integration

import com.nlhsolver.core.*
import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Street
import com.nlhsolver.solver.AbstractionMode
import io.kotest.core.spec.style.FunSpec

/**
 * Debug the AK vs 99 matchup that shows >100% exploitability.
 */
class AKvs99DebugTest : FunSpec({

    test("debug AK vs 99 exploitability bug") {
        println("\n=== Debugging AK vs 99 Matchup ===\n")

        val board = listOf(
            Card.fromString("Qd"),
            Card.fromString("7c"),
            Card.fromString("2h")
        )

        // The broken matchup
        val akState = StartingHandSampler.createGameState(
            street = Street.FLOP,
            board = board,
            btnHand = Pair(Card.fromString("As"), Card.fromString("Kd")),
            bbHand = Pair(Card.fromString("9s"), Card.fromString("9h")),
            btnStack = 48.5,
            bbStack = 48.5,
            pot = 3.0,
            btnInvested = 1.5,
            bbInvested = 1.5,
            abstractionMode = AbstractionMode.EQUITY_BUCKETING,
            numBuckets = 25,
            maxRaisesPerStreet = 4
        )

        // A working matchup for comparison
        val aaState = StartingHandSampler.createGameState(
            street = Street.FLOP,
            board = board,
            btnHand = Pair(Card.fromString("As"), Card.fromString("Ah")),
            bbHand = Pair(Card.fromString("Ks"), Card.fromString("Kh")),
            btnStack = 48.5,
            bbStack = 48.5,
            pot = 3.0,
            btnInvested = 1.5,
            bbInvested = 1.5,
            abstractionMode = AbstractionMode.EQUITY_BUCKETING,
            numBuckets = 25,
            maxRaisesPerStreet = 4
        )

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        println("Initial state (0 iterations):")
        var akExploit = exploitCalc.calculateExploitability(akState, solver.getStrategyProfile())
        var aaExploit = exploitCalc.calculateExploitability(aaState, solver.getStrategyProfile())
        println("  AK vs 99: ${String.format("%.2f%%", (akExploit / 3.0) * 100)} (${String.format("%.4f", akExploit)} chips)")
        println("  AA vs KK: ${String.format("%.2f%%", (aaExploit / 3.0) * 100)} (${String.format("%.4f", aaExploit)} chips)")

        // Train ONLY on AK vs 99
        println("\nTraining ONLY on AK vs 99:")
        for (iterations in listOf(100, 1000, 5000)) {
            val prevIter = when(iterations) {
                100 -> 100
                1000 -> 900
                5000 -> 4000
                else -> 0
            }
            solver.train(akState, iterations = prevIter)

            akExploit = exploitCalc.calculateExploitability(akState, solver.getStrategyProfile())
            aaExploit = exploitCalc.calculateExploitability(aaState, solver.getStrategyProfile())

            println("  After $iterations iterations:")
            println("    AK vs 99: ${String.format("%7.2f%%", (akExploit / 3.0) * 100)} (${String.format("%.4f", akExploit)} chips)")
            println("    AA vs KK: ${String.format("%7.2f%%", (aaExploit / 3.0) * 100)} (${String.format("%.4f", aaExploit)} chips)")

            if (akExploit > 3.0) {
                println("    *** BUG: Exploitability (${String.format("%.4f", akExploit)}) exceeds pot size (3.0)! ***")
            }
        }

        // Now try training ONLY on AA vs KK
        println("\nTraining ONLY on AA vs KK:")
        val solver2 = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        for (iterations in listOf(100, 1000, 5000)) {
            val prevIter = when(iterations) {
                100 -> 100
                1000 -> 900
                5000 -> 4000
                else -> 0
            }
            solver2.train(aaState, iterations = prevIter)

            akExploit = exploitCalc.calculateExploitability(akState, solver2.getStrategyProfile())
            aaExploit = exploitCalc.calculateExploitability(aaState, solver2.getStrategyProfile())

            println("  After $iterations iterations:")
            println("    AK vs 99: ${String.format("%7.2f%%", (akExploit / 3.0) * 100)} (${String.format("%.4f", akExploit)} chips)")
            println("    AA vs KK: ${String.format("%7.2f%%", (aaExploit / 3.0) * 100)} (${String.format("%.4f", aaExploit)} chips)")
        }
    }
})
