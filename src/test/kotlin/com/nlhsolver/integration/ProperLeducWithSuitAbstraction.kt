package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeLessThan
import io.kotest.matchers.shouldBe

/**
 * Suit-abstraction behaviour of LeducState (generalizable to NLH).
 *
 * Key insight: Pre-flop, suits are isomorphic. J♦ and J♥ are strategically
 * equivalent when you can't see the board. This is like how in NLH,
 * J♥J♦ is equivalent to J♥J♠ pre-flop.
 *
 * Post-flop, only the rank combination matters for hand strength.
 */
class ProperLeducWithSuitAbstraction : FunSpec({

    test("Proper Leduc with suit abstraction should have 288 info sets") {
        println("\n=== Counting Info Sets with Suit Abstraction ===\n")

        val infoSets = mutableSetOf<String>()

        fun exploreState(state: LeducState) {
            if (state.isTerminal()) return
            infoSets.add(state.getInfoSet())

            for (action in state.getLegalActions()) {
                val nextState = state.applyAction(action) as LeducState
                exploreState(nextState)
            }
        }

        // Explore ALL possible games (not just fixed board)
        val allCards = 0..5  // J♦(0), J♥(1), Q♦(2), Q♥(3), K♦(4), K♥(5)

        for (p1 in allCards) {
            for (p2 in allCards) {
                for (board in allCards) {
                    // Valid if all different cards
                    if (p1 != p2 && p1 != board && p2 != board) {
                        exploreState(LeducState(
                            p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        ))
                    }
                }
            }
        }

        val r1InfoSets = infoSets.filter { "r1:" in it }
        val r2InfoSets = infoSets.filter { "r2:" in it }

        println("Total info sets: ${infoSets.size}")
        println("  Pre-flop (R1): ${r1InfoSets.size}")
        println("  Post-flop (R2): ${r2InfoSets.size}")
        println()
        println("Expected: 288 (18 pre-flop + 270 post-flop)")
        println("Match: ${if (infoSets.size == 288) "✓" else "✗"}")

        println("\nSample pre-flop info sets:")
        r1InfoSets.sorted().take(10).forEach { println("  $it") }

        println("\nSample post-flop info sets:")
        r2InfoSets.sorted().take(10).forEach { println("  $it") }

        infoSets.size shouldBe 288
    }

    test("Single matchup should converge quickly") {
        println("\n=== Single Matchup Convergence ===")

        val matchup = LeducState(
            p1Card = 4, p2Card = 0, boardCard = 5,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        fun computeExploit(): Double {
            val exploit = exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
            return (exploit / 2.0) * 100
        }

        println("Training:")
        for (iters in listOf(0, 1000, 5000, 10000, 50000)) {
            if (iters > 0) {
                val prev = listOf(0, 1000, 5000, 10000).lastOrNull { it < iters } ?: 0
                solver.train(matchup, iterations = iters - prev)
            }
            val exploit = computeExploit()
            println("  $iters: ${String.format("%.2f%%", exploit)}")
        }

        val finalExploit = computeExploit()
        finalExploit shouldBeLessThan 1.0
    }
})
