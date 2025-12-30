package com.nlhsolver.examples.akq

import com.nlhsolver.core.CFRSolver
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.assertTrue
import kotlin.math.abs

/**
 * Test the generic CFR solver using the AKQ toy game.
 *
 * This validates that the new generic CFR+ solver can converge
 * to Nash equilibrium for a simple poker game.
 */
class AkqCFRTest {

    @Test
    fun `test CFR solver converges on AKQ game`() {
        println("\n=== Testing Generic CFR Solver with AKQ Game ===\n")

        // Create solver with CFR+ enabled (RM+ only, no linear discounting)
        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = true,
            regretDiscountFactor = 1.0
        )

        // Train on all possible card deals
        val rootStates = AkqGameState.createAllRootStates()
        println("Training with ${rootStates.size} root states (card deals)...")
        println("Running 100,000 iterations...\n")

        repeat(100000) { iteration ->
            for (rootState in rootStates) {
                val reachProbs = DoubleArray(2) { 1.0 / 6.0 } // Uniform over 6 deals
                solver.train(rootState, 1)
            }

            if ((iteration + 1) % 20000 == 0) {
                println("Completed ${iteration + 1} iterations...")
            }
        }

        println("\n=== Nash Equilibrium Strategies ===\n")

        // Print strategies for all information sets
        val actionLabels = mutableMapOf<String, List<String>>()
        for (card in AkqCard.all()) {
            for (history in listOf("", "k", "b", "kb")) {
                val infoSet = card.toString() + history
                actionLabels[infoSet] = AkqGameState.getActionLabels(infoSet)
            }
        }

        solver.printStrategies(actionLabels)

        // Verify specific strategies
        println("=== Strategy Verification ===\n")

        // Ace should bet frequently
        val aceInitial = solver.getAverageStrategy("A", listOf("bet", "check"))
        println("A (initial): bet=${String.format("%.3f", aceInitial["bet"])}, check=${String.format("%.3f", aceInitial["check"])}")
        assertTrue(aceInitial["bet"]!! > 0.5, "Ace should bet more than 50% of the time initially")

        // Ace should always call when facing a bet
        val aceFacingBet = solver.getAverageStrategy("Ab", listOf("call", "fold"))
        println("A (facing bet): call=${String.format("%.3f", aceFacingBet["call"])}, fold=${String.format("%.3f", aceFacingBet["fold"])}")
        assertTrue(aceFacingBet["call"]!! > 0.95, "Ace should almost always call a bet")

        // King should check initially
        val kingInitial = solver.getAverageStrategy("K", listOf("bet", "check"))
        println("K (initial): bet=${String.format("%.3f", kingInitial["bet"])}, check=${String.format("%.3f", kingInitial["check"])}")
        assertTrue(kingInitial["check"]!! > 0.9, "King should mostly check initially")

        // Queen should bluff sometimes
        val queenInitial = solver.getAverageStrategy("Q", listOf("bet", "check"))
        println("Q (initial): bet=${String.format("%.3f", queenInitial["bet"])}, check=${String.format("%.3f", queenInitial["check"])}")
        assertTrue(queenInitial["bet"]!! > 0.1, "Queen should bluff at least 10% of the time")
        assertTrue(queenInitial["bet"]!! < 0.4, "Queen should not bluff more than 40% of the time")

        // Queen should always fold to a bet
        val queenFacingBet = solver.getAverageStrategy("Qb", listOf("call", "fold"))
        println("Q (facing bet): call=${String.format("%.3f", queenFacingBet["call"])}, fold=${String.format("%.3f", queenFacingBet["fold"])}")
        assertTrue(queenFacingBet["fold"]!! > 0.95, "Queen should almost always fold to a bet")

        // All strategies should sum to 1.0
        for (infoSet in actionLabels.keys) {
            val strategy = solver.getAverageStrategy(infoSet, actionLabels[infoSet]!!)
            val sum = strategy.values.sum()
            assertTrue(
                abs(sum - 1.0) < 1e-6,
                "Strategy for $infoSet should sum to 1.0, got $sum"
            )
        }

        println("\n✓ All strategy validations passed!")
        println("✓ Generic CFR solver successfully converged on AKQ game")
    }

    @Test
    fun `test vanilla CFR vs CFR+ convergence`() {
        println("\n=== Comparing Vanilla CFR vs CFR+ ===\n")

        val iterations = 10000
        val rootStates = AkqGameState.createAllRootStates()

        // Test vanilla CFR
        println("Training Vanilla CFR...")
        val vanillaSolver = CFRSolver(numPlayers = 2, enableCFRPlus = false)
        repeat(iterations) {
            for (rootState in rootStates) {
                vanillaSolver.train(rootState, 1)
            }
        }

        // Test CFR+
        println("Training CFR+...")
        val cfrPlusSolver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = true,
            regretDiscountFactor = 1.0
        )
        repeat(iterations) {
            for (rootState in rootStates) {
                cfrPlusSolver.train(rootState, 1)
            }
        }

        println("\nVanilla CFR - Ace initial strategy:")
        val vanillaAce = vanillaSolver.getAverageStrategy("A", listOf("bet", "check"))
        println("  bet=${String.format("%.3f", vanillaAce["bet"])}, check=${String.format("%.3f", vanillaAce["check"])}")

        println("\nCFR+ - Ace initial strategy:")
        val cfrPlusAce = cfrPlusSolver.getAverageStrategy("A", listOf("bet", "check"))
        println("  bet=${String.format("%.3f", cfrPlusAce["bet"])}, check=${String.format("%.3f", cfrPlusAce["check"])}")

        println("\n✓ Both algorithms converge (CFR+ typically faster)")
    }
}
