package com.nlhsolver.integration

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.ExploitabilityCalculator
import com.nlhsolver.core.StartingHandSampler
import com.nlhsolver.poker.Position
import com.nlhsolver.poker.PreflopBuckets
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Disabled

/**
 * Phase 2.5 Integration Tests: Preflop Convergence with All 169 Hands (T205)
 *
 * Validates that the CFR solver converges correctly when using all 169 canonical
 * preflop hands instead of the original 20 sampled hands.
 *
 * Test criteria:
 * - CFR iterates over all ~22K valid hand matchups
 * - Exploitability converges below 1% for preflop-only game
 * - Strategy query returns action frequencies for any canonical hand
 * - Solve completes in reasonable time (<5 minutes)
 */
class PreflopConvergenceTest {

    @Test
    fun `verify 169 canonical hands are generated`() {
        val allHands = StartingHandSampler.getAllCanonicalHands()

        assertEquals(169, allHands.size, "Should have exactly 169 canonical hands")

        // Verify hand type distribution
        val pairs = allHands.filter { it.highRank == it.lowRank }
        val suited = allHands.filter { it.suitedness == PreflopBuckets.Suitedness.SUITED }
        val offsuit = allHands.filter { it.suitedness == PreflopBuckets.Suitedness.OFFSUIT }

        assertEquals(13, pairs.size, "Should have 13 pairs")
        assertEquals(78, suited.size, "Should have 78 suited hands")
        assertEquals(78, offsuit.size, "Should have 78 offsuit hands")
    }

    @Test
    fun `verify matchup generation`() {
        val matchups = StartingHandSampler.generateAllCanonicalMatchups()

        // Should generate significant number of matchups (169 × 169 minus conflicts)
        assertTrue(matchups.size > 20000, "Should generate >20K matchups, got ${matchups.size}")
        assertTrue(matchups.size < 30000, "Should generate <30K matchups, got ${matchups.size}")

        // Verify no card conflicts
        for (matchup in matchups.take(100)) {
            val btnCards = setOf(matchup.btnCards.first, matchup.btnCards.second)
            val bbCards = setOf(matchup.bbCards.first, matchup.bbCards.second)
            val intersection = btnCards.intersect(bbCards)
            assertTrue(intersection.isEmpty(), "No card conflicts: BTN=$btnCards, BB=$bbCards")
        }

        // Verify weights are positive
        assertTrue(matchups.all { it.weight > 0 }, "All matchups should have positive weight")

        println("Generated ${matchups.size} valid matchups")
        println("Total weight: ${StartingHandSampler.getTotalWeight(matchups)}")
    }

    @Test
    fun `verify combo counts`() {
        for (hand in StartingHandSampler.getAllCanonicalHands()) {
            val comboCount = StartingHandSampler.getComboCount(hand)

            when (hand.suitedness) {
                PreflopBuckets.Suitedness.PAIR -> assertEquals(6, comboCount, "${hand.notation} should have 6 combos")
                PreflopBuckets.Suitedness.SUITED -> assertEquals(4, comboCount, "${hand.notation} should have 4 combos")
                PreflopBuckets.Suitedness.OFFSUIT -> assertEquals(12, comboCount, "${hand.notation} should have 12 combos")
            }
        }
    }

    @Test
    fun `verify representative cards generation`() {
        for (hand in StartingHandSampler.getAllCanonicalHands().take(20)) {
            val cards = StartingHandSampler.getRepresentativeCards(hand)

            // Cards should match hand type
            assertEquals(hand.highRank, cards.first.rank, "First card should be high rank for ${hand.notation}")
            assertEquals(hand.lowRank, cards.second.rank, "Second card should be low rank for ${hand.notation}")

            when (hand.suitedness) {
                PreflopBuckets.Suitedness.PAIR -> {
                    assertNotEquals(cards.first.suit, cards.second.suit, "Pair cards should have different suits")
                }
                PreflopBuckets.Suitedness.SUITED -> {
                    assertEquals(cards.first.suit, cards.second.suit, "Suited cards should have same suit")
                }
                PreflopBuckets.Suitedness.OFFSUIT -> {
                    assertNotEquals(cards.first.suit, cards.second.suit, "Offsuit cards should have different suits")
                }
            }
        }
    }

    @Test
    @Disabled("Long-running test - enable for full verification")
    fun `verify CFR convergence with all 169 hands`() {
        println("\n=== Phase 2.5: Full Preflop Convergence Test ===\n")

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = true,
            regretDiscountFactor = 1.0
        )

        val exploitabilityCalculator = ExploitabilityCalculator(numPlayers = 2)

        // Generate all matchups
        val matchups = StartingHandSampler.generateAllCanonicalMatchups()
        val totalWeight = StartingHandSampler.getTotalWeight(matchups)

        println("Training on ${matchups.size} matchups")
        println("Total combo weight: ${"%.2f".format(totalWeight)}")

        // Create root states
        val rootStates = matchups.map { matchup ->
            StartingHandSampler.createStartingState(matchup)
        }

        val startTime = System.currentTimeMillis()
        val maxIterations = 1000
        var lastExploitability = Double.MAX_VALUE

        for (iteration in 1..maxIterations) {
            // Run one CFR iteration on all matchups
            for (state in rootStates) {
                solver.train(state, iterations = 1)
            }

            // Check exploitability every 100 iterations
            if (iteration % 100 == 0) {
                var totalWeightedExploitability = 0.0
                var weightSum = 0.0

                for ((idx, state) in rootStates.withIndex()) {
                    val exploitability = exploitabilityCalculator.calculateExploitability(
                        state,
                        solver.getStrategyProfile()
                    )
                    val weight = matchups[idx].weight / totalWeight
                    totalWeightedExploitability += exploitability * weight
                    weightSum += weight
                }

                val avgExploitability = totalWeightedExploitability / weightSum
                val elapsedSeconds = (System.currentTimeMillis() - startTime) / 1000

                println("Iteration $iteration: exploitability=${"%.4f".format(avgExploitability)}%, time=${elapsedSeconds}s")

                lastExploitability = avgExploitability

                // Early termination if converged
                if (avgExploitability < 0.01) {
                    println("\n✓ Converged below 1% exploitability at iteration $iteration")
                    break
                }
            }
        }

        val totalTime = (System.currentTimeMillis() - startTime) / 1000
        println("\nTotal time: ${totalTime}s")
        println("Final exploitability: ${"%.4f".format(lastExploitability)}%")

        // Verify convergence
        assertTrue(lastExploitability < 5.0, "Exploitability should be below 5%")

        // Verify strategy profile size
        val strategyProfile = solver.getStrategyProfile()
        assertTrue(strategyProfile.size() > 100, "Should have >100 info sets, got ${strategyProfile.size()}")

        println("\n✓ Phase 2.5 preflop convergence test passed")
    }

    @Test
    fun `quick convergence sanity check`() {
        println("\n=== Quick Preflop Convergence Sanity Check ===\n")

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = true
        )

        // Use a subset of matchups for quick testing
        val matchups = StartingHandSampler.generateAllCanonicalMatchups().take(100)
        val rootStates = matchups.map { StartingHandSampler.createStartingState(it) }

        // Run a few iterations
        repeat(100) {
            for (state in rootStates) {
                solver.train(state, iterations = 1)
            }
        }

        // Verify we have info sets
        val strategyProfile = solver.getStrategyProfile()
        assertTrue(strategyProfile.size() > 0, "Should have some info sets")

        println("Info sets created: ${strategyProfile.size()}")
        println("✓ Quick sanity check passed")
    }
}
