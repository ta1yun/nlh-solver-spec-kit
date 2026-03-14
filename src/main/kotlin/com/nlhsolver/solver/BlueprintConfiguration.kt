package com.nlhsolver.solver

import com.nlhsolver.poker.Position
import java.time.Instant
import java.util.UUID

/**
 * Configuration for blueprint solving (T129, T132).
 *
 * A blueprint is a coarse-grained preflop-to-river strategy that uses aggressive
 * abstraction (coarse hand bucketing + board clustering) to solve quickly.
 * Blueprints establish baseline ranges that can be refined for specific boards.
 *
 * Blueprint Workflow:
 * 1. Solve preflop-to-river with coarse abstraction (1-2 hours)
 * 2. Extract opening and defense ranges from solution
 * 3. Use these ranges as inputs for refinement solves
 *
 * Expected Quality:
 * - Exploitability: < 1% (looser than refinement's 0.5%)
 * - EV loss: < 2% of pot vs fine abstraction
 * - Solve time: 1-2 hours for full game tree
 *
 * @property blueprintId Unique identifier for this blueprint
 * @property scenarioName Human-readable scenario name (e.g., "HU 100bb No Ante")
 * @property description Optional description of the scenario
 * @property stackSizes Stack sizes in big blinds for each position
 * @property ante Ante size in big blinds (0.0 for no ante)
 * @property positions Positions involved (default: BTN, BB for heads-up)
 * @property preflopBuckets Number of preflop buckets (8, 12, or 15)
 * @property betSizingScheme Bet sizing scheme for this scenario
 * @property createdAt Timestamp when this blueprint was created
 * @property solveStatus Status of the blueprint solve
 * @property solvedAt Timestamp when the solve completed (if status = SOLVED)
 */
data class BlueprintConfiguration(
    val blueprintId: UUID = UUID.randomUUID(),
    val scenarioName: String,
    val description: String? = null,
    val stackSizes: Map<Position, Double>,
    val ante: Double = 0.0,
    val positions: List<Position> = listOf(Position.BTN, Position.BB),
    val preflopBuckets: Int = 8,
    val betSizingScheme: BetSizingScheme = BetSizingScheme(),
    val createdAt: Instant = Instant.now(),
    val solveStatus: BlueprintStatus = BlueprintStatus.PENDING,
    val solvedAt: Instant? = null
) {
    init {
        require(scenarioName.isNotBlank()) { "Scenario name cannot be blank" }
        require(scenarioName.length <= 100) { "Scenario name must be at most 100 characters" }
        description?.let { require(it.length <= 500) { "Description must be at most 500 characters" } }
        require(stackSizes.isNotEmpty()) { "Stack sizes cannot be empty" }
        require(stackSizes.values.all { it in 10.0..500.0 }) { "All stack sizes must be between 10bb and 500bb" }
        require(ante >= 0.0) { "Ante must be non-negative (got $ante)" }
        require(ante <= 1.0) { "Ante cannot exceed 1bb (got $ante)" }
        require(positions.isNotEmpty()) { "Positions cannot be empty" }
        require(positions.size == stackSizes.size) {
            "Number of positions (${positions.size}) must match number of stack sizes (${stackSizes.size})"
        }
        require(preflopBuckets in setOf(8, 12, 15)) {
            "Preflop buckets must be 8, 12, or 15 (got $preflopBuckets)"
        }
        if (solveStatus == BlueprintStatus.SOLVED) {
            require(solvedAt != null) { "solvedAt must be set when status is SOLVED" }
        }
    }

    /**
     * Create a SolveConfiguration for this blueprint.
     *
     * Uses coarse hand abstraction (8-15 preflop buckets, 25/15/10 postflop buckets)
     * and aggressive board clustering (100 flop, 50 turn clusters).
     *
     * @return SolveConfiguration ready for blueprint solving
     */
    fun toSolveConfiguration(): SolveConfiguration {
        val pot = 1.5 + (positions.size * ante)  // SB + BB + antes

        return SolveConfiguration.blueprint(
            stackSizes = stackSizes,
            preflopBuckets = preflopBuckets,
            convergenceCriteria = ConvergenceCriteria(
                targetExploitability = 0.01,  // 1% exploitability (0.01 = 1% of pot) (T132)
                maxIterations = 1_000_000,    // 1M iterations (plenty for convergence)
                evaluationFrequency = 5_000   // Check every 5k iterations (~10 min at 8.5 iter/s)
            ),
            betSizingScheme = betSizingScheme,
            name = scenarioName
        ).copy(
            pot = pot  // Adjust pot for antes
        )
    }

    /**
     * Mark this blueprint as solved.
     */
    fun markSolved(): BlueprintConfiguration {
        return this.copy(
            solveStatus = BlueprintStatus.SOLVED,
            solvedAt = Instant.now()
        )
    }

    /**
     * Mark this blueprint as failed.
     */
    fun markFailed(): BlueprintConfiguration {
        return this.copy(solveStatus = BlueprintStatus.FAILED)
    }

    companion object {
        /**
         * Create a standard heads-up blueprint.
         *
         * @param stackSize Stack size in big blinds (default: 100bb)
         * @param ante Ante size in big blinds (default: 0.0)
         * @param preflopBuckets Number of preflop buckets (default: 8)
         * @param betSizingScheme Bet sizing scheme
         * @return BlueprintConfiguration for HU scenario
         */
        fun headsUp(
            stackSize: Double = 100.0,
            ante: Double = 0.0,
            preflopBuckets: Int = 8,
            betSizingScheme: BetSizingScheme = BetSizingScheme()
        ): BlueprintConfiguration {
            val scenarioName = buildString {
                append("HU ${stackSize.toInt()}bb")
                if (ante > 0.0) {
                    append(" Ante ${ante}bb")
                }
            }

            return BlueprintConfiguration(
                scenarioName = scenarioName,
                stackSizes = mapOf(
                    Position.BTN to stackSize,
                    Position.BB to stackSize
                ),
                ante = ante,
                positions = listOf(Position.BTN, Position.BB),
                preflopBuckets = preflopBuckets,
                betSizingScheme = betSizingScheme
            )
        }
    }
}

/**
 * Status of a blueprint solve.
 */
enum class BlueprintStatus {
    /**
     * Blueprint has been configured but not yet solved.
     */
    PENDING,

    /**
     * Blueprint solve is currently running.
     */
    SOLVING,

    /**
     * Blueprint solve completed successfully.
     */
    SOLVED,

    /**
     * Blueprint solve failed.
     */
    FAILED
}
