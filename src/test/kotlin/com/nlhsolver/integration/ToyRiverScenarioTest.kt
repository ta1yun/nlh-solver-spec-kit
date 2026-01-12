package com.nlhsolver.integration

import com.nlhsolver.solver.MDFCalculator
import com.nlhsolver.solver.RiverScenarios
import com.nlhsolver.solver.SolveOrchestrator
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.*

/**
 * Integration test for toy polarized vs condensed river scenario.
 *
 * This test verifies:
 * 1. River solving works correctly with minimal ranges
 * 2. Exploitability converges to near 0
 * 3. MDF calculations are correct
 * 4. Solver handles polarized vs condensed dynamics
 *
 * Scenario:
 * - BTN (Polarized): AA, KK (strong) + 72o, 83o (bluffs) = 4 hands
 * - BB (Condensed): JJ, TT, 99 (medium) = 3 hands
 * - Board: K♠ 7♥ 2♦ 9♣ 4♥
 * - BTN bets 10 into 20 pot → MDF = 66.67%
 * - Total matchups: 4 × 3 = 12
 */
class ToyRiverScenarioTest {

    @Test
    fun `toy scenario converges with low exploitability`() {
        println("\n=== TOY SCENARIO: Polarized vs Condensed (4 vs 3 hands) ===\n")

        // Load toy scenario
        val configuration = RiverScenarios.toyPolarizedVsCondensed()

        println("Configuration:")
        println("  Street: ${configuration.startingStreet.name}")
        println("  Board: ${configuration.board.joinToString("")}")
        println("  Pot: ${configuration.pot}")
        println("  BTN invested: ${configuration.btnInvested}")
        println("  BTN range size: ${(configuration.btnRange as com.nlhsolver.solver.HandRange.WeightedRange).size()} hands")
        println("  BB range size: ${(configuration.bbRange as com.nlhsolver.solver.HandRange.WeightedRange).size()} hands")

        println("\nScenario:")
        println("  Starting at beginning of river action (no bets yet)")
        println("  BTN will decide whether to bet or check")
        println("  Solver will learn optimal betting frequencies")

        // Run solver
        println("\nRunning solver...")
        val orchestrator = SolveOrchestrator()

        val startTime = System.currentTimeMillis()
        val result = try {
            orchestrator.solveSynchronous(configuration) { progress ->
                // Print progress every 1000 iterations
                if (progress.iterationsCompleted % 1000 == 0L) {
                    print(".")
                }
            }
        } catch (e: IllegalStateException) {
            println("\n\n⚠️  SOLVER FAILED:")
            println("   ${e.message}")
            println("\nLikely issue: The game tree doesn't properly handle RIVER as final street.")
            println("This is a Phase 2.6 limitation - the current code only supports PREFLOP→FLOP.")
            println("We need to update the game tree logic to handle full postflop (TURN, RIVER).")
            throw e
        }
        val endTime = System.currentTimeMillis()
        val solveTimeSeconds = (endTime - startTime) / 1000.0

        println("\n\n=== SOLVE RESULTS ===")
        println("Converged: ${result.converged}")
        println("Final exploitability: ${"%.6f".format(result.finalExploitability)} (${"%.4f".format(result.finalExploitability * 100)}%)")
        println("Iterations run: ${result.iterationsRun}")
        println("Solve time: ${"%.2f".format(solveTimeSeconds)}s")
        println("Strategy ID: ${result.strategyProfileId}")

        // Assertions
        assertTrue(result.converged, "Solver should converge on toy scenario")
        assertTrue(
            result.finalExploitability < 0.01,
            "Exploitability should be < 1% (got ${result.finalExploitability * 100}%)"
        )

        // Expected GTO behavior
        println("\n=== EXPECTED GTO BEHAVIOR ===")
        println("BTN (with polarized range: AA, KK, 72o, 83o):")
        println("  - Should bet strong hands (AA, KK) for value")
        println("  - Should bet some bluffs (72o, 83o) optimally")
        println("  - May check some hands")
        println()
        println("BB (with condensed range: JJ, TT, 99):")
        println("  - Should call/raise with best hands when facing bet")
        println("  - Should fold weakest hands")
        println("  - Exact frequencies depend on BTN's betting strategy")

        println("\n✅ Toy scenario test PASSED")
        println("   Exploitability: ${"%.4f".format(result.finalExploitability * 100)}%")
        println("   Solve time: ${"%.2f".format(solveTimeSeconds)}s")
        println("   Iterations: ${result.iterationsRun}")
    }

    @Test
    fun `MDF calculator computes correct values`() {
        val calculator = MDFCalculator()

        // Test case 1: 0.5 pot bet
        val mdf1 = calculator.calculateMDF(pot = 20.0, betSize = 10.0)
        assertEquals(0.6667, mdf1, 0.001, "0.5 pot bet should give MDF of 66.67%")

        // Test case 2: pot-sized bet
        val mdf2 = calculator.calculateMDF(pot = 20.0, betSize = 20.0)
        assertEquals(0.5, mdf2, 0.001, "Pot-sized bet should give MDF of 50%")

        // Test case 3: 2x pot bet
        val mdf3 = calculator.calculateMDF(pot = 20.0, betSize = 40.0)
        assertEquals(0.3333, mdf3, 0.001, "2x pot bet should give MDF of 33.33%")

        // Test alpha calculations
        val alpha1 = calculator.calculateAlpha(0.6667)
        assertEquals(0.5, alpha1, 0.01, "MDF of 66.67% should give alpha of 0.5")

        val alpha2 = calculator.calculateAlpha(0.5)
        assertEquals(1.0, alpha2, 0.01, "MDF of 50% should give alpha of 1.0")

        println("✅ MDF calculator tests PASSED")
    }
}
