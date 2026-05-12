package com.nlhsolver.integration

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.SamplingMode
import io.kotest.core.spec.style.FunSpec

/**
 * Trace a single deal through one CFR iteration with full details.
 * This helps verify our implementation matches zig's calculations.
 */
class DetailedSingleDealTraceTest : FunSpec({

    test("Trace single deal: P0=J(0), P1=Q(2), Board=K(4)") {
        println("\n=== Single Deal Detailed Trace ===")
        println("Deal: P0=J(0), P1=Q(2), Board=K(4)")
        println("Initial pot: 2 (1+1 antes)\n")

        val deal = LeducState(
            p1Card = 0,  // J
            p2Card = 2,  // Q
            boardCard = 4,  // K
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        // Create solver with instrumentation
        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = false,
            samplingMode = SamplingMode.VANILLA
        )

        // Train for 1 iteration
        solver.train(deal, iterations = 1)

        println("After 1 iteration:\n")

        // Get all info sets
        val profile = solver.getStrategyProfile()
        val allInfoSets = profile.getAllInfoSets().sortedBy { it.infoSet }

        for (infoSet in allInfoSets) {
            val avgStrat = infoSet.getAverageStrategy()
            val regrets = infoSet.getRegrets()
            val visits = infoSet.getVisitCount()

            println("Info Set: ${infoSet.infoSet}")
            println("  Actions: [check, bet] or [fold, call] or [fold, call, raise]")
            println("  Avg Strategy: ${avgStrat.joinToString(", ") { String.format("%.4f", it) }}")
            println("  Regrets: ${regrets.joinToString(", ") { String.format("%.4f", it) }}")
            println("  Visits: $visits")
            println()
        }

        println("=== Game Tree for this deal ===")
        println("Root: P0 has J, P1 has Q, Board will be K")
        println("├─ P0 checks (x)")
        println("│  ├─ P1 checks (xx)")
        println("│  │  └─ R2: Board K revealed → continues...")
        println("│  └─ P1 bets (xb)")
        println("│     ├─ P0 folds (xbf) → P1 wins 1")
        println("│     └─ P0 calls (xbc)")
        println("│        └─ R2: Board K revealed → continues...")
        println("└─ P0 bets (b)")
        println("   ├─ P1 folds (bf) → P0 wins 1")
        println("   ├─ P1 calls (bc)")
        println("   │  └─ R2: Board K revealed → continues...")
        println("   └─ P1 raises (br)")
        println("      ├─ P0 folds (brf) → P1 wins 3")
        println("      └─ P0 calls (brc)")
        println("         └─ R2: Board K revealed → continues...")
    }

    test("Compare first iteration regrets with expected values") {
        println("\n=== Verify First Iteration Regrets ===\n")

        val deal = LeducState(
            p1Card = 0,  // J
            p2Card = 2,  // Q
            boardCard = 4,  // K
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = false,
            samplingMode = SamplingMode.VANILLA
        )

        solver.train(deal, iterations = 1)

        val profile = solver.getStrategyProfile()
        val p0J = profile.getAllInfoSets().find { it.infoSet == "P0:J " }

        if (p0J != null) {
            val regrets = p0J.getRegrets()
            println("P0:J regrets after 1 iteration:")
            println("  Check: ${String.format("%.6f", regrets[0])}")
            println("  Bet: ${String.format("%.6f", regrets[1])}")
            println()

            println("Expected calculation:")
            println("  With uniform strategy [0.5, 0.5]:")
            println("  - Value(check) = average payoff if always check")
            println("  - Value(bet) = average payoff if always bet")
            println("  - Value(mixed) = 0.5*Value(check) + 0.5*Value(bet)")
            println("  - Regret[check] = Value(check) - Value(mixed)")
            println("  - Regret[bet] = Value(bet) - Value(mixed)")
            println()
            println("  These regrets should match zig's output for the same deal.")
        }
    }

    test("Trace all 120 deals for P0:J initial regret") {
        println("\n=== Accumulate P0:J regrets across all deals ===\n")

        // Generate all 120 deals
        val allDeals = mutableListOf<LeducState>()
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 == p2) continue
                for (board in 0..5) {
                    if (board == p1 || board == p2) continue
                    allDeals.add(
                        LeducState(p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = "")
                    )
                }
            }
        }

        // Filter deals where P0 has J
        val dealsWithP0J = allDeals.filter { state ->
            val card = state.p1Card
            card == 0 || card == 1  // J cards
        }

        println("Total deals: ${allDeals.size}")
        println("Deals where P0 has J: ${dealsWithP0J.size}")
        println()

        // Train on each deal individually to see contributions
        var totalCheckRegret = 0.0
        var totalBetRegret = 0.0

        for (deal in dealsWithP0J) {
            val solver = CFRSolver(
                numPlayers = 2,
                enableCFRPlus = false,
                samplingMode = SamplingMode.VANILLA
            )

            solver.train(deal, iterations = 1)

            val profile = solver.getStrategyProfile()
            val p0J = profile.getAllInfoSets().find { it.infoSet == "P0:J " }

            if (p0J != null) {
                val regrets = p0J.getRegrets()
                totalCheckRegret += regrets[0]
                totalBetRegret += regrets[1]
            }
        }

        println("Summed regrets across all ${dealsWithP0J.size} deals:")
        println("  Check: ${String.format("%.6f", totalCheckRegret)}")
        println("  Bet: ${String.format("%.6f", totalBetRegret)}")
        println()

        println("This should match the regrets we see after training on all deals in one iteration.")
    }
})
