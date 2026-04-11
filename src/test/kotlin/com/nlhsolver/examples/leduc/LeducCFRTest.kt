package com.nlhsolver.examples.leduc

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.ExploitabilityCalculator
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.assertTrue
import kotlin.math.abs

/**
 * Test CFR convergence on Leduc poker.
 *
 * Leduc has a known Nash equilibrium, so we can verify:
 * 1. Exploitability converges to ~0
 * 2. Strategy frequencies match published Nash equilibrium (TODO)
 */
class LeducCFRTest {

    @Test
    fun `test CFR converges on Leduc poker`() {
        println("\n=== Testing CFR on Leduc Poker ===\n")

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        // Create all possible deal scenarios
        val rootStates = mutableListOf<LeducGameState>()

        for (p1Card in LeducCard.all()) {
            for (p2Card in LeducCard.all()) {
                if (p1Card != p2Card) { // Can't have same card
                    rootStates.add(
                        LeducGameState(
                            p1Card = p1Card,
                            p2Card = p2Card,
                            boardCard = null,
                            history = ""
                        )
                    )
                }
            }
        }

        println("Training on ${rootStates.size} starting deals...")

        // Train on all starting hands
        val checkpoints = listOf(1_000, 10_000, 50_000, 100_000)

        for (iterations in checkpoints) {
            val trainingSolver = CFRSolver(numPlayers = 2, enableCFRPlus = true)

            // Train on all deals
            for (rootState in rootStates) {
                trainingSolver.train(rootState, iterations = iterations / rootStates.size)
            }

            // Calculate average exploitability across all deals
            var totalExploit = 0.0
            for (rootState in rootStates) {
                val exploit = exploitCalc.calculateExploitability(
                    rootState,
                    trainingSolver.getStrategyProfile()
                )
                totalExploit += exploit
            }
            val avgExploit = totalExploit / rootStates.size

            println("Iterations: ${"%,7d".format(iterations)}, Avg Exploitability: ${String.format("%.6f", avgExploit)}")
        }

        // Final convergence check
        val finalSolver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        for (rootState in rootStates) {
            finalSolver.train(rootState, iterations = 100_000 / rootStates.size)
        }

        var totalExploit = 0.0
        for (rootState in rootStates) {
            val exploit = exploitCalc.calculateExploitability(
                rootState,
                finalSolver.getStrategyProfile()
            )
            totalExploit += exploit
        }
        val finalExploit = totalExploit / rootStates.size

        println("\nFinal average exploitability: $finalExploit")

        assertTrue(
            finalExploit < 0.1,
            "Leduc poker should converge to low exploitability. Got: $finalExploit"
        )

        println("\n✓ CFR converges on Leduc poker!")
    }
}
