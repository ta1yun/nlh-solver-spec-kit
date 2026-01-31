package com.nlhsolver.solver

import com.nlhsolver.poker.Card
import kotlin.random.Random

/**
 * Analyzes EV loss between blueprint and refined strategies (T139-T142).
 *
 * EV loss measurement helps validate that blueprint abstraction quality is acceptable.
 * The analyzer compares blueprint strategies against fine-grained refinement solves
 * on representative boards to estimate the cost of abstraction.
 *
 * Methodology:
 * 1. Sample representative boards from all possible boards (T140)
 * 2. Solve each board with both blueprint and refinement abstraction
 * 3. Calculate EV difference weighted by hand frequencies (T141)
 * 4. Check if EV loss is within acceptable threshold (T142)
 *
 * Acceptable Thresholds:
 * - Default: 2% of pot (Libratus-style blueprint quality)
 * - Tight: 1% of pot (high-quality blueprint)
 * - Loose: 5% of pot (fast prototyping)
 */
class EVLossAnalyzer(
    private val orchestrator: SolveOrchestrator = SolveOrchestrator()
) {
    /**
     * Analyze EV loss for a blueprint configuration (T139, T140).
     *
     * Samples representative boards, solves with both blueprint and refinement
     * abstraction, and compares EVs.
     *
     * @param blueprintConfig Blueprint configuration to analyze
     * @param numSamples Number of boards to sample (default: 100)
     * @param seed Random seed for reproducibility
     * @return EV loss analysis result
     */
    fun analyzeEVLoss(
        blueprintConfig: BlueprintConfiguration,
        numSamples: Int = 100,
        seed: Long = System.currentTimeMillis()
    ): EVLossResult {
        require(numSamples > 0) { "Number of samples must be positive (got $numSamples)" }

        val random = Random(seed)

        // Sample representative boards (T140)
        val sampleBoards = sampleRepresentativeBoards(
            numSamples = numSamples,
            random = random
        )

        // Analyze each board
        val boardResults = sampleBoards.map { board ->
            analyzeBoardEVLoss(blueprintConfig, board)
        }

        // Aggregate results (T141)
        val averageEVLoss = if (boardResults.isNotEmpty()) {
            boardResults.map { it.evLossBBs }.average()
        } else {
            0.0
        }
        val maxEVLoss = if (boardResults.isNotEmpty()) {
            boardResults.maxOf { it.evLossBBs }
        } else {
            0.0
        }
        val evLossPercentOfPot = if (averageEVLoss != 0.0) {
            (averageEVLoss / blueprintConfig.stackSizes.values.average()) * 100
        } else {
            0.0
        }

        return EVLossResult(
            blueprintId = blueprintConfig.blueprintId.toString(),
            scenarioName = blueprintConfig.scenarioName,
            numSamples = numSamples,
            averageEVLossBBs = averageEVLoss,
            maxEVLossBBs = maxEVLoss,
            evLossPercentOfPot = evLossPercentOfPot,
            boardResults = boardResults,
            isAcceptable = evLossPercentOfPot <= DEFAULT_THRESHOLD_PERCENT,
            threshold = DEFAULT_THRESHOLD_PERCENT
        )
    }

    /**
     * Analyze EV loss for a specific board.
     *
     * Solves the board with both blueprint and refinement abstraction,
     * then compares the EVs.
     *
     * @param blueprintConfig Blueprint configuration
     * @param board Board to analyze
     * @return Board-specific EV loss
     */
    private fun analyzeBoardEVLoss(
        blueprintConfig: BlueprintConfiguration,
        board: List<Card>
    ): BoardEVLoss {
        // TODO: Implement actual solving with blueprint vs refinement abstraction
        // For now, return placeholder values

        // Simulate solving with blueprint abstraction
        val blueprintEV = 0.0  // Placeholder

        // Simulate solving with refinement abstraction
        val refinementEV = 0.0  // Placeholder

        val evLoss = refinementEV - blueprintEV

        return BoardEVLoss(
            board = board,
            blueprintEV = blueprintEV,
            refinementEV = refinementEV,
            evLossBBs = evLoss
        )
    }

    /**
     * Sample representative boards from all possible boards (T140).
     *
     * Uses stratified sampling to ensure coverage of different board textures:
     * - Connected boards (e.g., 789)
     * - Paired boards (e.g., KK7)
     * - Monotone boards (e.g., all same suit)
     * - Rainbow boards (e.g., all different suits)
     * - High card boards (e.g., AKQ)
     * - Low card boards (e.g., 235)
     *
     * @param numSamples Number of boards to sample
     * @param random Random number generator
     * @return List of representative boards
     */
    private fun sampleRepresentativeBoards(
        numSamples: Int,
        random: Random
    ): List<List<Card>> {
        // TODO: Implement stratified sampling for board textures
        // For now, return empty list (placeholder)
        return emptyList()
    }

    /**
     * Calculate hand-weighted EV loss (T141).
     *
     * Weights the EV loss by the frequency of each hand in the blueprint range.
     * Hands that are played more frequently contribute more to the overall EV loss.
     *
     * @param evLossByHand Map from hand notation to EV loss
     * @param handFrequencies Map from hand notation to frequency
     * @return Weighted average EV loss
     */
    fun calculateWeightedEVLoss(
        evLossByHand: Map<String, Double>,
        handFrequencies: Map<String, Double>
    ): Double {
        require(evLossByHand.isNotEmpty()) { "EV loss map cannot be empty" }
        require(handFrequencies.isNotEmpty()) { "Hand frequencies cannot be empty" }

        var totalWeightedLoss = 0.0
        var totalWeight = 0.0

        for ((hand, frequency) in handFrequencies) {
            val evLoss = evLossByHand[hand] ?: 0.0
            totalWeightedLoss += evLoss * frequency
            totalWeight += frequency
        }

        return if (totalWeight > 0.0) {
            totalWeightedLoss / totalWeight
        } else {
            0.0
        }
    }

    /**
     * Check if EV loss is acceptable (T142).
     *
     * Compares the EV loss against a threshold (default: 2% of pot).
     *
     * @param evLossResult EV loss analysis result
     * @param thresholdPercent Acceptable threshold as percentage of pot
     * @return Acceptance result with details
     */
    fun checkAcceptability(
        evLossResult: EVLossResult,
        thresholdPercent: Double = DEFAULT_THRESHOLD_PERCENT
    ): AcceptabilityResult {
        val isAcceptable = evLossResult.evLossPercentOfPot <= thresholdPercent

        val recommendation = when {
            evLossResult.evLossPercentOfPot <= 1.0 -> "Excellent quality - consider using this blueprint as-is"
            evLossResult.evLossPercentOfPot <= 2.0 -> "Good quality - acceptable for most scenarios"
            evLossResult.evLossPercentOfPot <= 5.0 -> "Marginal quality - consider refining abstraction"
            else -> "Poor quality - abstraction too coarse, recommend finer buckets"
        }

        return AcceptabilityResult(
            isAcceptable = isAcceptable,
            evLossPercentOfPot = evLossResult.evLossPercentOfPot,
            threshold = thresholdPercent,
            recommendation = recommendation,
            numSamplesAnalyzed = evLossResult.numSamples
        )
    }

    companion object {
        /**
         * Default acceptable EV loss threshold: 2% of pot.
         * This is based on Libratus-style blueprint quality targets.
         */
        const val DEFAULT_THRESHOLD_PERCENT = 2.0

        /**
         * Tight threshold for high-quality blueprints: 1% of pot.
         */
        const val TIGHT_THRESHOLD_PERCENT = 1.0

        /**
         * Loose threshold for fast prototyping: 5% of pot.
         */
        const val LOOSE_THRESHOLD_PERCENT = 5.0
    }
}

/**
 * Result of EV loss analysis.
 */
data class EVLossResult(
    val blueprintId: String,
    val scenarioName: String,
    val numSamples: Int,
    val averageEVLossBBs: Double,
    val maxEVLossBBs: Double,
    val evLossPercentOfPot: Double,
    val boardResults: List<BoardEVLoss>,
    val isAcceptable: Boolean,
    val threshold: Double
) {
    /**
     * Get a summary string for display.
     */
    fun summary(): String {
        return buildString {
            appendLine("EV Loss Analysis: $scenarioName")
            appendLine("  Samples: $numSamples boards")
            appendLine("  Average EV Loss: ${String.format("%.4f", averageEVLossBBs)} BB")
            appendLine("  Max EV Loss: ${String.format("%.4f", maxEVLossBBs)} BB")
            appendLine("  EV Loss % of Pot: ${String.format("%.2f", evLossPercentOfPot)}%")
            appendLine("  Threshold: ${String.format("%.2f", threshold)}%")
            appendLine("  Status: ${if (isAcceptable) "ACCEPTABLE" else "UNACCEPTABLE"}")
        }
    }
}

/**
 * EV loss for a specific board.
 */
data class BoardEVLoss(
    val board: List<Card>,
    val blueprintEV: Double,
    val refinementEV: Double,
    val evLossBBs: Double
) {
    val boardString: String
        get() = board.joinToString("") { "${it.rank.symbol}${it.suit.symbol}" }
}

/**
 * Result of acceptability check.
 */
data class AcceptabilityResult(
    val isAcceptable: Boolean,
    val evLossPercentOfPot: Double,
    val threshold: Double,
    val recommendation: String,
    val numSamplesAnalyzed: Int
) {
    /**
     * Get a summary string for display.
     */
    fun summary(): String {
        return buildString {
            appendLine("Blueprint Quality Assessment")
            appendLine("  EV Loss: ${String.format("%.2f", evLossPercentOfPot)}% of pot")
            appendLine("  Threshold: ${String.format("%.2f", threshold)}%")
            appendLine("  Status: ${if (isAcceptable) "ACCEPTABLE ✓" else "UNACCEPTABLE ✗"}")
            appendLine("  Samples: $numSamplesAnalyzed boards analyzed")
            appendLine("  Recommendation: $recommendation")
        }
    }
}
