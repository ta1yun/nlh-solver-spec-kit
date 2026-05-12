package com.nlhsolver.integration

import io.kotest.core.spec.style.FunSpec

/**
 * Manually compute CFR values to verify our implementation.
 * Compare with the expected algorithm behavior.
 */
class ManualCFRCalculationTest : FunSpec({

    test("Manual CFR calculation for simple scenario") {
        println("\n=== Manual CFR Calculation ===\n")
        println("Deal: P0=J(0), P1=Q(2), Board=K(4)")
        println("P0 is weaker (J < Q), both lose to board K\n")

        println("Round 1 - P0 acts first with J:")
        println("  Actions: Check (x) or Bet (b)")
        println("  Initial strategy: Uniform [0.5, 0.5]\n")

        println("Scenario 1: P0 checks")
        println("  → P1 sees 'x' with Q")
        println("    P1 can: Check (xx) or Bet (xb)")
        println("    If P1 checks: Go to R2, both see board K, showdown")
        println("      Pot=2, Both have pair K, Split → P0 gets 0")
        println("    If P1 bets: P0 faces bet")
        println("      If P0 folds (xbf): P1 wins 1, P0 gets -1")
        println("      If P0 calls (xbc): Go to R2, showdown → P0 gets 0\n")

        println("Scenario 2: P0 bets")
        println("  → P1 faces bet with Q")
        println("    P1 can: Fold (bf), Call (bc), or Raise (br)")
        println("    If P1 folds: P0 wins 1")
        println("    If P1 calls: Go to R2, showdown → P0 gets 0")
        println("    If P1 raises: P0 faces raise")
        println("      If P0 folds (brf): P1 wins 3, P0 gets -3")
        println("      If P0 calls (brc): Go to R2, showdown → P0 gets 0\n")

        println("With uniform strategies throughout:")
        println("  Value(check) = 0.5 * EV(P1 checks) + 0.5 * EV(P1 bets)")
        println("                = 0.5 * 0 + 0.5 * (0.5 * (-1) + 0.5 * 0)")
        println("                = -0.25 * 0.5 = -0.125")
        println()
        println("  Value(bet) = P(fold) * 1 + P(call) * 0 + P(raise) * EV(raise)")
        println("             = 0.333 * 1 + 0.333 * 0 + 0.333 * (0.5 * (-3) + 0.5 * 0)")
        println("             = 0.333 - 0.333 * 1.5 = -0.167")
        println()
        println("  Value(mixed) = 0.5 * (-0.125) + 0.5 * (-0.167) = -0.146")
        println()
        println("  Regret[check] = -0.125 - (-0.146) = 0.021")
        println("  Regret[bet] = -0.167 - (-0.146) = -0.021")
        println()
        println("But we're seeing regrets of Check=-0.024, Bet=0.024")
        println("The sign is FLIPPED!")
        println()
        println("Wait... I think I computed the values wrong.")
        println("Let me recalculate more carefully...")
    }
})
