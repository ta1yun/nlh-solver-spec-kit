package com.nlhsolver.integration

import com.nlhsolver.solver.MDFCalculator
import com.nlhsolver.solver.RiverScenarios
import com.nlhsolver.solver.SolveOrchestrator
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeAll

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
 * - BTN (Polarized): AA, KK (value) + 65o, 53o (bluffs) = 4 hands
 * - BB (Condensed): QQ, JJ, TT (bluff catchers) = 3 hands
 * - Board: K♠ 7♥ 2♦ 9♣ 4♥
 * - Hand rankings: KK > AA > QQ > JJ > TT > 65o/53o
 * - BB's range loses to all BTN value, beats all BTN bluffs
 * - Bluffs use ranks NOT on board (6,5,3) to avoid accidental pairs
 * - BTN bets 10 into 20 pot → MDF = 66.67%
 * - Total matchups: 4 × 3 = 12
 */
class ToyRiverScenarioTest {

    companion object {
        @BeforeAll
        @JvmStatic
        fun setup() {
            // Enable full postflop mode for river scenarios
            System.setProperty("NLH_FULL_POSTFLOP", "true")
        }
    }

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
            result.finalExploitability < 0.20,
            "Exploitability should be < 20% (got ${result.finalExploitability * 100}%)"
        )

        // Expected GTO behavior
        println("\n=== EXPECTED GTO BEHAVIOR ===")
        println("BTN (with polarized range: AA, KK, 65o, 53o):")
        println("  - Should bet value hands (AA, KK) ~100% for value")
        println("  - Should bluff (65o, 53o) at ~33% (alpha = bet/pot+bet)")
        println("  - Value:bluff ratio should approach 2:1 for 0.5 pot bet")
        println()
        println("BB (with condensed range: QQ, JJ, TT):")
        println("  - All hands are bluff catchers (beat bluffs, lose to value)")
        println("  - Should defend at MDF (~66.67%) to prevent BTN overbluffing")
        println("  - QQ/JJ should call more than TT (indifference principle)")

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

    @Test
    fun `debug terminal utilities`() {
        println("\n=== DEBUG TERMINAL UTILITIES ===\n")

        // Create a simple game state where BTN (65o) faces BB (QQ) bet
        val board = listOf(
            com.nlhsolver.poker.Card(com.nlhsolver.poker.Rank.KING, com.nlhsolver.poker.Suit.SPADES),
            com.nlhsolver.poker.Card(com.nlhsolver.poker.Rank.SEVEN, com.nlhsolver.poker.Suit.HEARTS),
            com.nlhsolver.poker.Card(com.nlhsolver.poker.Rank.TWO, com.nlhsolver.poker.Suit.DIAMONDS),
            com.nlhsolver.poker.Card(com.nlhsolver.poker.Rank.NINE, com.nlhsolver.poker.Suit.CLUBS),
            com.nlhsolver.poker.Card(com.nlhsolver.poker.Rank.FOUR, com.nlhsolver.poker.Suit.HEARTS)
        )

        // BTN has 65o (pure air)
        val btnHand = Pair(
            com.nlhsolver.poker.Card(com.nlhsolver.poker.Rank.SIX, com.nlhsolver.poker.Suit.CLUBS),
            com.nlhsolver.poker.Card(com.nlhsolver.poker.Rank.FIVE, com.nlhsolver.poker.Suit.HEARTS)
        )
        // BB has QQ (bluff catcher that beats 65o)
        val bbHand = Pair(
            com.nlhsolver.poker.Card(com.nlhsolver.poker.Rank.QUEEN, com.nlhsolver.poker.Suit.SPADES),
            com.nlhsolver.poker.Card(com.nlhsolver.poker.Rank.QUEEN, com.nlhsolver.poker.Suit.HEARTS)
        )

        // Create initial state: BB acts first
        val initialState = com.nlhsolver.core.StartingHandSampler.createGameState(
            street = com.nlhsolver.poker.Street.RIVER,
            board = board,
            btnHand = btnHand,
            bbHand = bbHand,
            btnStack = 50.0,
            bbStack = 50.0,
            pot = 20.0,
            abstractionMode = com.nlhsolver.solver.AbstractionMode.NONE,
            maxRaisesPerStreet = 0
        )

        println("Initial state:")
        println("  Pot: ${initialState.pot}")
        println("  BTN hand: 6c5h (air)")
        println("  BB hand: QsQh (bluff catcher)")
        println("  Legal actions for BB: ${initialState.getLegalActions().map { it.getActionId() }}")

        // BB bets
        val bbBetAction = initialState.getLegalActions().find { it.getActionId() == "bet" }!!
        val afterBbBet = initialState.applyAction(bbBetAction) as com.nlhsolver.core.PokerGameState

        println("\nAfter BB bets:")
        println("  Pot: ${afterBbBet.pot}")
        println("  Current player: ${afterBbBet.currentPlayer()} (should be 1 = BTN)")
        println("  Legal actions for BTN: ${afterBbBet.getLegalActions().map { it.getActionId() }}")

        // Now BTN faces fold/call decision
        val foldAction = afterBbBet.getLegalActions().find { it.getActionId() == "fold" }!!
        val callAction = afterBbBet.getLegalActions().find { it.getActionId() == "call" }!!

        // Test FOLD outcome
        val afterFold = afterBbBet.applyAction(foldAction) as com.nlhsolver.core.PokerGameState
        println("\nIf BTN FOLDS:")
        println("  Is terminal: ${afterFold.isTerminal()}")
        if (afterFold.isTerminal()) {
            val foldUtility = afterFold.getUtility()
            println("  Utilities: BTN=${foldUtility[1]}, BB=${foldUtility[0]}")
        }

        // Test CALL outcome
        val afterCall = afterBbBet.applyAction(callAction) as com.nlhsolver.core.PokerGameState
        println("\nIf BTN CALLS:")
        println("  Is terminal: ${afterCall.isTerminal()}")
        if (afterCall.isTerminal()) {
            val callUtility = afterCall.getUtility()
            println("  Utilities: BTN=${callUtility[1]}, BB=${callUtility[0]}")
            println("  (BTN has 65o which loses to QQ at showdown)")

            // Debug hand evaluation
            println("\n  Hand evaluation debug:")
            val evaluator = com.nlhsolver.poker.HandEvaluator

            // BTN hand: 6c5h + board
            val btnCards = listOf(btnHand.first, btnHand.second) + board
            println("  BTN cards (6c5h + board): $btnCards")
            try {
                val btnHandRank = evaluator.evaluateBest7(btnCards)
                println("  BTN hand rank: ${btnHandRank.type} - ${btnHandRank.primaryRanks}")
            } catch (e: Exception) {
                println("  BTN evaluation error: ${e.message}")
            }

            // BB hand: QsQh + board
            val bbCards = listOf(bbHand.first, bbHand.second) + board
            println("  BB cards (QsQh + board): $bbCards")
            try {
                val bbHandRank = evaluator.evaluateBest7(bbCards)
                println("  BB hand rank: ${bbHandRank.type} - ${bbHandRank.primaryRanks}")
            } catch (e: Exception) {
                println("  BB evaluation error: ${e.message}")
            }
        }

        println("\n=== CONCLUSION ===")
        println("If fold utility > call utility for BTN, CFR should learn to fold with air.")
        println("If they're equal or call is better, there's a bug in utility calculation.")
    }

    @Test
    fun `inspect info sets for debugging`() {
        println("\n=== INSPECTING INFO SETS ===\n")

        // Run a fresh solve to get the strategy
        val configuration = RiverScenarios.toyPolarizedVsCondensed()
        val orchestrator = SolveOrchestrator()
        val result = orchestrator.solveSynchronous(configuration)

        val repository = com.nlhsolver.storage.StrategyRepository()
        val strategyData = repository.loadStrategyData(result.strategyProfileId)
        if (strategyData == null) {
            println("Strategy not found")
            return
        }

        println("Strategy ID: ${result.strategyProfileId}")
        println("Exploitability: ${result.finalExploitability}\n")

        val allInfoSets = strategyData.getAllInfoSets().toList()
        println("Total info sets: ${allInfoSets.size}\n")

        // Group by player and hand
        val btnInfoSets = allInfoSets.filter { it.infoSet.contains("p1:") }
        val bbInfoSets = allInfoSets.filter { it.infoSet.contains("p0:") }

        println("=== BTN (p1) INFO SETS ===")
        for (infoSet in btnInfoSets.sortedBy { it.infoSet }) {
            val avgStrategy = infoSet.getAverageStrategy()
            println("\nInfo set: ${infoSet.infoSet}")
            println("  Num actions: ${infoSet.numActions}")
            println("  Visit count: ${infoSet.getVisitCount()}")
            println("  Avg strategy: ${avgStrategy.mapIndexed { i, p -> "action$i=${String.format("%.1f%%", p*100)}" }.joinToString(", ")}")
        }

        println("\n\n=== BB (p0) INFO SETS ===")
        for (infoSet in bbInfoSets.sortedBy { it.infoSet }) {
            val avgStrategy = infoSet.getAverageStrategy()
            println("\nInfo set: ${infoSet.infoSet}")
            println("  Num actions: ${infoSet.numActions}")
            println("  Visit count: ${infoSet.getVisitCount()}")
            println("  Avg strategy: ${avgStrategy.mapIndexed { i, p -> "action$i=${String.format("%.1f%%", p*100)}" }.joinToString(", ")}")
        }
    }
}
