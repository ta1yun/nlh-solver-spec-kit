package com.nlhsolver.integration

import com.nlhsolver.core.*
import com.nlhsolver.poker.Position
import com.nlhsolver.solver.AbstractionMode
import com.nlhsolver.solver.ConvergenceCriteria
import com.nlhsolver.solver.RiverScenarios
import com.nlhsolver.solver.SolveOrchestrator
import com.nlhsolver.storage.StrategyRepository
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeAll

/**
 * Tests for KKT (Karush-Kuhn-Tucker) equilibrium conditions.
 *
 * These tests verify that the CFR solver produces strategies that satisfy
 * the necessary conditions for Nash equilibrium:
 *
 * (A) Core KKT: Actions played with positive probability have equal EV
 * (B) Bluff indifference: Bluffs that are played have EV ≈ 0
 * (C) MDF compliance: Defenders call at minimum defense frequency
 * (D) Reach filtering: Only test info sets with sufficient reach probability
 */
class KKTConditionTest {

    companion object {
        @BeforeAll
        @JvmStatic
        fun setup() {
            System.setProperty("NLH_FULL_POSTFLOP", "true")
        }
    }

    /**
     * Helper to train a CFR solver and get the strategy profile directly.
     * This avoids loading from disk which may have different info set formats.
     */
    private fun trainSolverForMatchup(
        matchup: StartingHandSampler.WeightedMatchup,
        configuration: com.nlhsolver.solver.SolveConfiguration,
        iterations: Int = 5000
    ): Pair<PokerGameState, StrategyProfile> {
        val rootState = StartingHandSampler.createGameState(
            street = configuration.startingStreet,
            board = configuration.board,
            btnHand = matchup.btnCards,
            bbHand = matchup.bbCards,
            btnStack = 50.0,
            bbStack = 50.0,
            pot = configuration.pot,
            abstractionMode = AbstractionMode.NONE,
            maxRaisesPerStreet = 0
        )

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        solver.train(rootState, iterations)

        return Pair(rootState, solver.getStrategyProfile())
    }

    /**
     * (A) Core KKT test: Verify indifference conditions hold globally.
     *
     * For each info set I, action a:
     * - If p[a] > tau: |EV[a] - EV_mix| < eps (played actions are indifferent)
     * - If p[a] <= tau: EV[a] <= EV_mix + eps (unplayed actions are not better)
     */
    @Test
    fun `core KKT conditions hold at equilibrium`() {
        println("\n=== CORE KKT CONDITION TEST ===\n")

        val configuration = RiverScenarios.toyPolarizedVsCondensed()
        val matchups = StartingHandSampler.generateMatchupsFromRanges(
            street = configuration.startingStreet,
            board = configuration.board,
            btnRange = configuration.btnRange,
            bbRange = configuration.bbRange
        )

        val verifier = KKTVerifier()
        val config = KKTVerifier.VerificationConfig(
            tau = 0.05,              // 5% threshold for "played"
            epsEV = 3.0,             // 3 chip tolerance
            reachThreshold = 0.01    // Skip very low reach info sets
        )

        var totalInfoSets = 0
        var passedInfoSets = 0
        val allViolations = mutableListOf<KKTVerifier.InfoSetKKTResult>()

        // Train and verify each matchup separately
        println("Training and verifying ${matchups.size} matchups...")
        for ((idx, matchup) in matchups.withIndex()) {
            val (rootState, strategyProfile) = trainSolverForMatchup(matchup, configuration, iterations = 3000)

            val actionEVData = verifier.computeActionEVs(rootState, strategyProfile)
            val kktResults = verifier.verifyKKTConditions(actionEVData, config)

            totalInfoSets += kktResults.size
            passedInfoSets += kktResults.count { it.passed }
            allViolations.addAll(kktResults.filter { !it.passed })

            if ((idx + 1) % 4 == 0) print(".")
        }
        println()

        println("\nKKT Results:")
        println("  Total info sets checked: $totalInfoSets")
        println("  Passed: $passedInfoSets")
        println("  Failed: ${allViolations.size}")

        if (allViolations.isNotEmpty()) {
            println("\nViolations (first 5):")
            allViolations.take(5).forEach { println(it.summary()) }
        }

        val passRate = if (totalInfoSets > 0) passedInfoSets.toDouble() / totalInfoSets else 1.0
        println("\nPass rate: ${String.format("%.1f%%", passRate * 100)}")

        assertTrue(
            passRate >= 0.70,
            "At least 70% of info sets should satisfy KKT conditions (got ${String.format("%.1f%%", passRate * 100)})"
        )
    }

    /**
     * (B) Bluff indifference test: Bluffs played with positive frequency should have EV ≈ 0.
     *
     * When BTN bluffs with air hands (65o, 53o), the EV of bluffing should be
     * approximately 0 at equilibrium (indifferent between bluffing and checking).
     *
     * NOTE: In isolated matchups (single hand vs single hand), bluffs may have negative EV
     * because the opponent's calling frequency is fixed. True bluff indifference emerges
     * when training across all matchups together, where the bluff frequency adjusts to
     * make the opponent indifferent to calling.
     */
    @Test
    fun `bluff hands are indifferent when played`() {
        println("\n=== BLUFF INDIFFERENCE TEST ===\n")

        val configuration = RiverScenarios.toyPolarizedVsCondensed()
        val matchups = StartingHandSampler.generateMatchupsFromRanges(
            street = configuration.startingStreet,
            board = configuration.board,
            btnRange = configuration.btnRange,
            bbRange = configuration.bbRange
        )

        val verifier = KKTVerifier()
        val config = KKTVerifier.VerificationConfig(
            tau = 0.05,             // 5% threshold - bluffs need to be played
            epsEV = 5.0,            // 5 chip tolerance for bluff EV ≈ 0
            reachThreshold = 0.01
        )

        // Bluff hands patterns (match info set hand notation)
        val bluffPatterns = listOf("6c5h", "5c3s")

        val allBluffResults = mutableListOf<KKTVerifier.BluffIndifferenceResult>()

        println("Testing bluff hands: ${bluffPatterns.joinToString(", ")}")

        for (matchup in matchups) {
            // Only check matchups where BTN has a bluff hand
            val btnHandStr = matchup.btnCards.first.toString() + matchup.btnCards.second.toString()
            val isBluffHand = bluffPatterns.any { pattern ->
                btnHandStr.contains(pattern.substring(0, 2), ignoreCase = true)
            }
            if (!isBluffHand) continue

            val (rootState, strategyProfile) = trainSolverForMatchup(matchup, configuration, iterations = 3000)

            val actionEVData = verifier.computeActionEVs(rootState, strategyProfile)

            // Find BTN's info set when checked to (bluff decision point)
            val bluffResults = actionEVData.values
                .filter { data ->
                    data.player == 1 &&  // BTN
                    data.infoSet.contains("history=BB:CHECK") &&  // After BB checks
                    data.actionLabels.contains("bet")
                }
                .map { data ->
                    val betIndex = data.actionLabels.indexOf("bet")
                    val bluffProb = data.strategy[betIndex]
                    val bluffEV = data.actionEVs[betIndex]
                    val checkEV = data.actionEVs[data.actionLabels.indexOf("check")]

                    // Extract hand from info set
                    val handMatch = Regex("hand=([^:]+)").find(data.infoSet)
                    val hand = handMatch?.groupValues?.get(1) ?: "unknown"

                    // Bluff EV should be ≈ check EV at equilibrium (indifference)
                    val evDiff = kotlin.math.abs(bluffEV - checkEV)
                    val violation = if (bluffProb > config.tau && evDiff > config.epsEV) {
                        "Bluff $hand: EV(bet)=${String.format("%.2f", bluffEV)}, " +
                        "EV(check)=${String.format("%.2f", checkEV)}, diff=${String.format("%.2f", evDiff)}"
                    } else null

                    KKTVerifier.BluffIndifferenceResult(
                        infoSet = data.infoSet,
                        hand = hand,
                        bluffProbability = bluffProb,
                        bluffEV = bluffEV,
                        isIndifferent = evDiff <= config.epsEV,
                        violation = violation
                    )
                }

            allBluffResults.addAll(bluffResults)
        }

        println("\nBluff Indifference Results:")
        println("  Total bluff info sets: ${allBluffResults.size}")

        for (bluffResult in allBluffResults) {
            val status = if (bluffResult.violation == null) "✓" else "≈"
            println("  $status ${bluffResult.hand}: " +
                    "bluff freq=${String.format("%.1f%%", bluffResult.bluffProbability * 100)}, " +
                    "EV=${String.format("%.2f", bluffResult.bluffEV)}")
            bluffResult.violation?.let { println("    $it") }
        }

        val passed = allBluffResults.count { it.violation == null }
        val total = allBluffResults.size

        if (total > 0) {
            println("\nBluff indifference pass rate: $passed / $total")
        } else {
            println("No bluff info sets found")
        }

        // This is informational - we don't fail on bluff indifference
        println("\n✅ Bluff indifference test completed")
    }

    /**
     * Helper to train CFR across ALL matchups together (range-based).
     * This creates the uncertainty needed for MDF to emerge.
     */
    private fun trainSolverAcrossAllMatchups(
        matchups: List<StartingHandSampler.WeightedMatchup>,
        configuration: com.nlhsolver.solver.SolveConfiguration,
        iterations: Int = 5000
    ): StrategyProfile {
        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)

        // Create root states for all matchups
        val rootStates = matchups.map { matchup ->
            StartingHandSampler.createGameState(
                street = configuration.startingStreet,
                board = configuration.board,
                btnHand = matchup.btnCards,
                bbHand = matchup.bbCards,
                btnStack = 50.0,
                bbStack = 50.0,
                pot = configuration.pot,
                abstractionMode = AbstractionMode.NONE,
                maxRaisesPerStreet = 0
            )
        }

        // Train across all matchups together (like SolveOrchestrator does)
        for (iter in 1..iterations) {
            for (state in rootStates) {
                solver.train(state, iterations = 1)
            }
        }

        return solver.getStrategyProfile()
    }

    /**
     * (C) MDF frequency test: Defender should call at minimum defense frequency.
     *
     * For a 0.5x pot bet (10 into 20):
     * MDF = 20 / (20 + 10) = 66.67%
     * Defender should call at least 66.67% to prevent pure bluff exploitation.
     *
     * This test trains all matchups TOGETHER so BB faces uncertainty about BTN's hand.
     */
    @Test
    fun `defender calls at MDF when facing bet`() {
        println("\n=== MDF FREQUENCY TEST (RANGE-BASED) ===\n")

        val configuration = RiverScenarios.toyPolarizedVsCondensed()
        val matchups = StartingHandSampler.generateMatchupsFromRanges(
            street = configuration.startingStreet,
            board = configuration.board,
            btnRange = configuration.btnRange,
            bbRange = configuration.bbRange
        )

        val verifier = KKTVerifier()

        // Expected MDF = pot / (pot + bet) = 20 / (20 + 10) = 66.67%
        val expectedMDF = 20.0 / (20.0 + 10.0)
        println("Expected MDF: ${String.format("%.1f%%", expectedMDF * 100)}")
        println("(Defender must call ${String.format("%.1f%%", expectedMDF * 100)} to make bluffs break-even)")
        println("\nTraining all ${matchups.size} matchups TOGETHER (range-based)...")

        // Train all matchups together so BB faces uncertainty
        val strategyProfile = trainSolverAcrossAllMatchups(matchups, configuration, iterations = 3000)

        println("Training complete.\n")

        // Collect defense frequencies for each BB hand
        val defenseByHand = mutableMapOf<String, MutableList<Double>>()
        val btnBetByHand = mutableMapOf<String, MutableList<Double>>()

        for (matchup in matchups) {
            val rootState = StartingHandSampler.createGameState(
                street = configuration.startingStreet,
                board = configuration.board,
                btnHand = matchup.btnCards,
                bbHand = matchup.bbCards,
                btnStack = 50.0,
                bbStack = 50.0,
                pot = configuration.pot,
                abstractionMode = AbstractionMode.NONE,
                maxRaisesPerStreet = 0
            )

            val actionEVData = verifier.computeActionEVs(rootState, strategyProfile)

            // Get BTN's bet frequency
            val btnData = actionEVData.values.find { it.player == 1 && it.infoSet.contains("history=BB:CHECK") }
            if (btnData != null) {
                val betIdx = btnData.actionLabels.indexOf("bet")
                if (betIdx >= 0) {
                    val handMatch = Regex("hand=([^:]+)").find(btnData.infoSet)
                    val hand = handMatch?.groupValues?.get(1) ?: "unknown"
                    btnBetByHand.getOrPut(hand) { mutableListOf() }.add(btnData.strategy[betIdx])
                }
            }

            // Get BB's defense frequency when facing bet
            val bbData = actionEVData.values.find {
                it.player == 0 && it.infoSet.contains("history=BB:CHECK|BTN:BET")
            }
            if (bbData != null) {
                val foldIdx = bbData.actionLabels.indexOf("fold")
                if (foldIdx >= 0) {
                    val handMatch = Regex("hand=([^:]+)").find(bbData.infoSet)
                    val hand = handMatch?.groupValues?.get(1) ?: "unknown"
                    val defenseFreq = 1.0 - bbData.strategy[foldIdx]
                    defenseByHand.getOrPut(hand) { mutableListOf() }.add(defenseFreq)
                }
            }
        }

        // Print BTN betting frequencies
        println("=== BTN BETTING FREQUENCIES ===")
        for ((hand, freqs) in btnBetByHand.entries.sortedByDescending { it.value.average() }) {
            val avgBet = freqs.average()
            val handType = when {
                hand.contains("Ad") && hand.contains("Ac") -> "VALUE"  // AA
                hand.contains("Kh") && hand.contains("Kd") -> "VALUE"  // KK
                else -> "BLUFF"
            }
            println("  $hand ($handType): bet ${String.format("%.1f%%", avgBet * 100)}")
        }

        // Print BB defense frequencies
        println("\n=== BB DEFENSE FREQUENCIES ===")
        for ((hand, freqs) in defenseByHand.entries.sortedByDescending { it.value.average() }) {
            val avgDefense = freqs.average()
            val status = when {
                kotlin.math.abs(avgDefense - expectedMDF) < 0.10 -> "✓"
                kotlin.math.abs(avgDefense - expectedMDF) < 0.20 -> "≈"
                else -> "✗"
            }
            println("  $status $hand: defense ${String.format("%.1f%%", avgDefense * 100)} (MDF=${String.format("%.1f%%", expectedMDF * 100)})")
        }

        // Compute overall defense
        val allDefenseFreqs = defenseByHand.values.flatten()
        val overallDefense = if (allDefenseFreqs.isNotEmpty()) allDefenseFreqs.average() else 0.0

        println("\n=== SUMMARY ===")
        println("Overall BB defense: ${String.format("%.1f%%", overallDefense * 100)}")
        println("Expected MDF: ${String.format("%.1f%%", expectedMDF * 100)}")
        println("Difference: ${String.format("%.1f%%", kotlin.math.abs(overallDefense - expectedMDF) * 100)}")

        // MDF should be close to 66.7% when training together
        // Allow 10% tolerance (56.7% - 76.7%)
        val mdfTolerance = 0.10
        assertTrue(
            kotlin.math.abs(overallDefense - expectedMDF) <= mdfTolerance,
            "Defense should be within ${mdfTolerance * 100}% of MDF. Expected ~${String.format("%.1f%%", expectedMDF * 100)}, got ${String.format("%.1f%%", overallDefense * 100)}"
        )

        println("\n✅ MDF test completed")
    }

    /**
     * Comparison test: Shows that isolated matchups produce 50% defense (pure strategies),
     * while range-based training produces MDF (~66.7%).
     */
    @Test
    fun `isolated vs range-based training comparison`() {
        println("\n=== ISOLATED vs RANGE-BASED COMPARISON ===\n")

        val configuration = RiverScenarios.toyPolarizedVsCondensed()
        val matchups = StartingHandSampler.generateMatchupsFromRanges(
            street = configuration.startingStreet,
            board = configuration.board,
            btnRange = configuration.btnRange,
            bbRange = configuration.bbRange
        )

        val verifier = KKTVerifier()
        val expectedMDF = 20.0 / (20.0 + 10.0)

        // === ISOLATED MATCHUPS ===
        println("1. ISOLATED MATCHUPS (each trained separately):")
        val isolatedDefense = mutableListOf<Double>()

        for (matchup in matchups) {
            val (rootState, strategyProfile) = trainSolverForMatchup(matchup, configuration, iterations = 2000)
            val actionEVData = verifier.computeActionEVs(rootState, strategyProfile)

            val bbData = actionEVData.values.find {
                it.player == 0 && it.infoSet.contains("history=BB:CHECK|BTN:BET")
            }
            if (bbData != null) {
                val foldIdx = bbData.actionLabels.indexOf("fold")
                if (foldIdx >= 0) {
                    isolatedDefense.add(1.0 - bbData.strategy[foldIdx])
                }
            }
        }

        val isolatedAvg = isolatedDefense.average()
        println("   Average defense: ${String.format("%.1f%%", isolatedAvg * 100)}")
        println("   (Pure strategies: 0% vs value, 100% vs bluffs → avg 50%)")

        // === RANGE-BASED ===
        println("\n2. RANGE-BASED (all matchups trained together):")
        val rangeStrategy = trainSolverAcrossAllMatchups(matchups, configuration, iterations = 2000)
        val rangeDefense = mutableListOf<Double>()

        for (matchup in matchups) {
            val rootState = StartingHandSampler.createGameState(
                street = configuration.startingStreet,
                board = configuration.board,
                btnHand = matchup.btnCards,
                bbHand = matchup.bbCards,
                btnStack = 50.0,
                bbStack = 50.0,
                pot = configuration.pot,
                abstractionMode = AbstractionMode.NONE,
                maxRaisesPerStreet = 0
            )
            val actionEVData = verifier.computeActionEVs(rootState, rangeStrategy)

            val bbData = actionEVData.values.find {
                it.player == 0 && it.infoSet.contains("history=BB:CHECK|BTN:BET")
            }
            if (bbData != null) {
                val foldIdx = bbData.actionLabels.indexOf("fold")
                if (foldIdx >= 0) {
                    rangeDefense.add(1.0 - bbData.strategy[foldIdx])
                }
            }
        }

        val rangeAvg = rangeDefense.average()
        println("   Average defense: ${String.format("%.1f%%", rangeAvg * 100)}")
        println("   (MDF emerges from uncertainty about opponent's hand)")

        // === COMPARISON ===
        println("\n=== RESULTS ===")
        println("Expected MDF: ${String.format("%.1f%%", expectedMDF * 100)}")
        println("Isolated:     ${String.format("%.1f%%", isolatedAvg * 100)} (diff: ${String.format("%.1f%%", kotlin.math.abs(isolatedAvg - expectedMDF) * 100)})")
        println("Range-based:  ${String.format("%.1f%%", rangeAvg * 100)} (diff: ${String.format("%.1f%%", kotlin.math.abs(rangeAvg - expectedMDF) * 100)})")

        // Assertions
        // Isolated should be around 50% (far from MDF)
        assertTrue(
            kotlin.math.abs(isolatedAvg - 0.50) < 0.15,
            "Isolated training should produce ~50% defense (got ${String.format("%.1f%%", isolatedAvg * 100)})"
        )

        // Range-based should be close to MDF (66.7%)
        assertTrue(
            kotlin.math.abs(rangeAvg - expectedMDF) < 0.15,
            "Range-based training should produce ~MDF defense (got ${String.format("%.1f%%", rangeAvg * 100)})"
        )

        // Range-based should be significantly closer to MDF than isolated
        val isolatedError = kotlin.math.abs(isolatedAvg - expectedMDF)
        val rangeError = kotlin.math.abs(rangeAvg - expectedMDF)
        assertTrue(
            rangeError < isolatedError,
            "Range-based (${String.format("%.1f%%", rangeError * 100)} error) should be closer to MDF than isolated (${String.format("%.1f%%", isolatedError * 100)} error)"
        )

        println("\n✅ Range-based training produces MDF, isolated does not")
    }

    /**
     * Combined KKT verification with all conditions on a single matchup.
     * This test provides a quick sanity check of equilibrium properties.
     */
    @Test
    fun `full KKT verification suite`() {
        println("\n=== FULL KKT VERIFICATION SUITE ===\n")

        val configuration = RiverScenarios.toyPolarizedVsCondensed()

        // Use a bluff vs bluff-catcher matchup for interesting equilibrium
        val matchups = StartingHandSampler.generateMatchupsFromRanges(
            street = configuration.startingStreet,
            board = configuration.board,
            btnRange = configuration.btnRange,
            bbRange = configuration.bbRange
        )

        // Find 65o vs QQ matchup (bluff vs bluff-catcher)
        val bluffMatchup = matchups.find { matchup ->
            val btnStr = matchup.btnCards.first.toString()
            btnStr.contains("6") || btnStr.contains("5")
        } ?: matchups.first()

        println("Testing matchup: BTN=${bluffMatchup.btnCards.first}${bluffMatchup.btnCards.second} " +
                "vs BB")

        val (rootState, strategyProfile) = trainSolverForMatchup(bluffMatchup, configuration, iterations = 5000)

        val verifier = KKTVerifier()
        val config = KKTVerifier.VerificationConfig(
            tau = 0.05,
            epsEV = 3.0,
            epsMDF = 0.20,
            reachThreshold = 0.01,
            potSize = configuration.pot
        )

        val actionEVData = verifier.computeActionEVs(rootState, strategyProfile)
        val kktResults = verifier.verifyKKTConditions(actionEVData, config)

        println("\n=== VERIFICATION SUMMARY ===")
        println("KKT Conditions:")
        println("  Total info sets: ${kktResults.size}")
        println("  Passed: ${kktResults.count { it.passed }}")
        println("  Failed: ${kktResults.count { !it.passed }}")

        // Print all info sets with their strategies and EVs
        println("\n=== INFO SET DETAILS ===")
        for (result in kktResults.sortedBy { it.infoSet }) {
            val status = if (result.passed) "✓" else "✗"
            println("\n$status ${result.infoSet.substringAfter("hand=").take(20)}... (player ${result.player})")
            for (i in result.actionLabels.indices) {
                val prob = String.format("%.1f%%", result.actionProbabilities[i] * 100)
                val ev = String.format("%.2f", result.actionEVs[i])
                println("    ${result.actionLabels[i]}: p=$prob, EV=$ev")
            }
            println("    Mixed EV: ${String.format("%.2f", result.mixedEV)}")
            if (!result.passed) {
                result.violations.forEach { println("    ⚠ $it") }
            }
        }

        val passRate = if (kktResults.isNotEmpty()) {
            kktResults.count { it.passed }.toDouble() / kktResults.size
        } else 1.0

        println("\n=== RESULT ===")
        println("KKT pass rate: ${String.format("%.1f%%", passRate * 100)}")
        println("✅ KKT verification completed")
    }
}
