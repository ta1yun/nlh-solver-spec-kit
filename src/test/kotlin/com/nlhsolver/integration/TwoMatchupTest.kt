package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Test convergence with just 2 matchups to isolate the issue.
 */
class TwoMatchupTest : FunSpec({

    test("Two isomorphic matchups (should converge)") {
        println("\n=== Two Isomorphic Matchups ===\n")

        // These share ALL info sets due to suit abstraction
        val matchup1 = LeducWithSuitAbstraction(
            p1Card = 0, p2Card = 2, boardCard = 5,  // J♦ vs Q♦, board K♥
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val matchup2 = LeducWithSuitAbstraction(
            p1Card = 1, p2Card = 3, boardCard = 5,  // J♥ vs Q♥, board K♥
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        println("Matchup 1: J♦ vs Q♦")
        println("Matchup 2: J♥ vs Q♥  (isomorphic)")
        println()

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        for (iters in listOf(100, 500, 1000, 5000)) {
            val prevIters = listOf(0, 100, 500, 1000).lastOrNull { it < iters } ?: 0
            repeat(iters - prevIters) {
                solver.train(matchup1, iterations = 1)
                solver.train(matchup2, iterations = 1)
            }

            val exploit1 = exploitCalc.calculateExploitability(matchup1, solver.getStrategyProfile())
            val exploit2 = exploitCalc.calculateExploitability(matchup2, solver.getStrategyProfile())

            println("  ${String.format("%4d", iters)} iters each:")
            println("    Matchup 1: ${String.format("%.2f%%", (exploit1 / 2.0) * 100)}")
            println("    Matchup 2: ${String.format("%.2f%%", (exploit2 / 2.0) * 100)}")
        }
        println()
    }

    test("Two diverse matchups (J vs Q and Q vs K)") {
        println("\n=== Two Diverse Matchups ===\n")

        // These share SOME but not all info sets
        val matchup1 = LeducWithSuitAbstraction(
            p1Card = 0, p2Card = 2, boardCard = 5,  // J♦ vs Q♦, board K♥
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val matchup2 = LeducWithSuitAbstraction(
            p1Card = 2, p2Card = 4, boardCard = 1,  // Q♦ vs K♦, board J♥
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        println("Matchup 1: J♦ vs Q♦, board K♥")
        println("Matchup 2: Q♦ vs K♦, board J♥  (diverse)")
        println()

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        for (iters in listOf(100, 500, 1000, 5000, 10000)) {
            val prevIters = listOf(0, 100, 500, 1000, 5000).lastOrNull { it < iters } ?: 0
            repeat(iters - prevIters) {
                solver.train(matchup1, iterations = 1)
                solver.train(matchup2, iterations = 1)
            }

            val exploit1 = exploitCalc.calculateExploitability(matchup1, solver.getStrategyProfile())
            val exploit2 = exploitCalc.calculateExploitability(matchup2, solver.getStrategyProfile())

            println("  ${String.format("%5d", iters)} iters each:")
            println("    Matchup 1: ${String.format("%.2f%%", (exploit1 / 2.0) * 100)}")
            println("    Matchup 2: ${String.format("%.2f%%", (exploit2 / 2.0) * 100)}")
        }
        println()
        println("If this converges, the problem is SCALE (120 matchups)")
        println("If this fails, the problem is DIVERSITY (conflicting info sets)")
    }

    test("Three diverse matchups (J vs Q, Q vs K, K vs J)") {
        println("\n=== Three Diverse Matchups ===\n")

        val matchup1 = LeducWithSuitAbstraction(
            p1Card = 0, p2Card = 2, boardCard = 5,  // J♦ vs Q♦, board K♥
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val matchup2 = LeducWithSuitAbstraction(
            p1Card = 2, p2Card = 4, boardCard = 1,  // Q♦ vs K♦, board J♥
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val matchup3 = LeducWithSuitAbstraction(
            p1Card = 4, p2Card = 0, boardCard = 3,  // K♦ vs J♦, board Q♥
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        println("Matchup 1: J♦ vs Q♦, board K♥")
        println("Matchup 2: Q♦ vs K♦, board J♥")
        println("Matchup 3: K♦ vs J♦, board Q♥")
        println()

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        for (iters in listOf(100, 500, 1000, 5000, 10000)) {
            val prevIters = listOf(0, 100, 500, 1000, 5000).lastOrNull { it < iters } ?: 0
            repeat(iters - prevIters) {
                solver.train(matchup1, iterations = 1)
                solver.train(matchup2, iterations = 1)
                solver.train(matchup3, iterations = 1)
            }

            val exploit1 = exploitCalc.calculateExploitability(matchup1, solver.getStrategyProfile())
            val exploit2 = exploitCalc.calculateExploitability(matchup2, solver.getStrategyProfile())
            val exploit3 = exploitCalc.calculateExploitability(matchup3, solver.getStrategyProfile())
            val avg = listOf(exploit1, exploit2, exploit3).average()

            println("  ${String.format("%5d", iters)} iters each:")
            println("    Matchup 1: ${String.format("%.2f%%", (exploit1 / 2.0) * 100)}")
            println("    Matchup 2: ${String.format("%.2f%%", (exploit2 / 2.0) * 100)}")
            println("    Matchup 3: ${String.format("%.2f%%", (exploit3 / 2.0) * 100)}")
            println("    Average:   ${String.format("%.2f%%", (avg / 2.0) * 100)}")
        }
    }
})
