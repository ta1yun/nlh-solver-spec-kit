package com.nlhsolver.solver

import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Position
import com.nlhsolver.poker.Street
import java.time.Instant
import java.util.UUID

/**
 * Configuration for refinement solving (T143).
 *
 * Refinement solving takes a solved blueprint and refines it for a specific board
 * with fine-grained abstraction. This two-phase approach enables:
 * 1. Blueprint Phase: Fast preflop-to-river solve with coarse abstraction (1-2 hours)
 * 2. Refinement Phase: Precise postflop solve for specific boards (10-30 minutes)
 *
 * The refinement solver:
 * - Uses blueprint ranges as starting ranges (filtered for card removal)
 * - Applies fine hand abstraction (200-1000 buckets vs 8-25 in blueprint)
 * - Solves only postflop streets (flop, turn, river)
 * - Achieves lower exploitability (< 0.5% vs < 1% in blueprint)
 *
 * Example:
 * ```kotlin
 * val config = RefinementConfiguration(
 *     blueprintId = blueprintId,
 *     board = listOf(Ks, 7h, 2d),  // Flop board
 *     startingStreet = Street.FLOP,
 *     flopBuckets = 200,
 *     turnBuckets = 200,
 *     riverBuckets = 200
 * )
 * ```
 *
 * @property refinementId Unique identifier for this refinement solve
 * @property blueprintId Reference to the blueprint configuration
 * @property scenarioName Human-readable scenario name (e.g., "Ks7h2d Flop")
 * @property description Optional description
 * @property board Board cards to solve (3 for flop, 4 for turn, 5 for river)
 * @property startingStreet Street to solve from (FLOP, TURN, or RIVER)
 * @property stackSizes Stack sizes in big blinds (copied from blueprint)
 * @property pot Pot size at starting state
 * @property btnInvested BTN's investment on current street
 * @property bbInvested BB's investment on current street
 * @property flopBuckets Number of hand buckets for flop (default: 200)
 * @property turnBuckets Number of hand buckets for turn (default: 200)
 * @property riverBuckets Number of hand buckets for river (default: 200)
 * @property convergenceCriteria Convergence criteria (tighter than blueprint)
 * @property betSizingScheme Bet sizing scheme (copied from blueprint)
 * @property createdAt Timestamp when this refinement was created
 * @property solveStatus Status of the refinement solve
 * @property solvedAt Timestamp when the solve completed (if status = SOLVED)
 */
data class RefinementConfiguration(
    val refinementId: UUID = UUID.randomUUID(),
    val blueprintId: UUID,
    val scenarioName: String,
    val description: String? = null,
    val board: List<Card>,
    val startingStreet: Street,
    val stackSizes: Map<Position, Double>,
    val pot: Double,
    val btnInvested: Double = 0.0,
    val bbInvested: Double = 0.0,
    val flopBuckets: Int = 200,
    val turnBuckets: Int = 200,
    val riverBuckets: Int = 200,
    val convergenceCriteria: ConvergenceCriteria = ConvergenceCriteria(
        targetExploitability = 0.5,  // Tighter than blueprint (1%)
        maxIterations = 5_000_000,
        evaluationFrequency = 10_000
    ),
    val betSizingScheme: BetSizingScheme = BetSizingScheme(),
    val createdAt: Instant = Instant.now(),
    val solveStatus: RefinementStatus = RefinementStatus.PENDING,
    val solvedAt: Instant? = null
) {
    init {
        require(scenarioName.isNotBlank()) { "Scenario name cannot be blank" }
        require(scenarioName.length <= 100) { "Scenario name must be at most 100 characters" }
        description?.let { require(it.length <= 500) { "Description must be at most 500 characters" } }

        // Validate board matches starting street
        val expectedBoardSize = when (startingStreet) {
            Street.PREFLOP -> 0
            Street.FLOP -> 3
            Street.TURN -> 4
            Street.RIVER -> 5
        }
        require(board.size == expectedBoardSize) {
            "Board must have $expectedBoardSize cards for $startingStreet (got ${board.size})"
        }

        // Refinement solving only makes sense for postflop
        require(startingStreet != Street.PREFLOP) {
            "Refinement solving is for postflop streets only (FLOP, TURN, RIVER). Use blueprint solving for preflop."
        }

        require(stackSizes.isNotEmpty()) { "Stack sizes cannot be empty" }
        require(stackSizes.values.all { it in 10.0..500.0 }) {
            "All stack sizes must be between 10bb and 500bb"
        }
        require(pot > 0.0) { "Pot must be positive (got $pot)" }
        require(btnInvested >= 0.0) { "BTN invested must be non-negative (got $btnInvested)" }
        require(bbInvested >= 0.0) { "BB invested must be non-negative (got $bbInvested)" }

        // Validate bucket counts based on starting street
        if (startingStreet == Street.FLOP) {
            require(flopBuckets in 50..1000) {
                "Flop buckets must be between 50 and 1000 (got $flopBuckets)"
            }
        }
        if (startingStreet <= Street.TURN) {
            require(turnBuckets in 50..1000) {
                "Turn buckets must be between 50 and 1000 (got $turnBuckets)"
            }
        }
        require(riverBuckets in 50..1000) {
            "River buckets must be between 50 and 1000 (got $riverBuckets)"
        }

        if (solveStatus == RefinementStatus.SOLVED) {
            require(solvedAt != null) { "solvedAt must be set when status is SOLVED" }
        }
    }

    /**
     * Create a SolveConfiguration for this refinement.
     *
     * Uses fine hand abstraction (200-1000 buckets) and no board clustering.
     * Ranges will be populated from the blueprint after filtering for card removal.
     *
     * @param btnRange BTN's filtered range from blueprint
     * @param bbRange BB's filtered range from blueprint
     * @return SolveConfiguration ready for refinement solving
     */
    fun toSolveConfiguration(
        btnRange: HandRange.WeightedRange,
        bbRange: HandRange.WeightedRange
    ): SolveConfiguration {
        val handAbstraction = HandAbstraction(
            preflopBuckets = 169,  // No preflop abstraction for refinement
            flopBuckets = flopBuckets,
            turnBuckets = turnBuckets,
            riverBuckets = riverBuckets
        )

        return SolveConfiguration(
            name = scenarioName,
            description = description,
            numPlayers = 2,
            stackSizes = stackSizes,
            startingPosition = Position.BTN,
            convergenceCriteria = convergenceCriteria,
            betSizingScheme = betSizingScheme,
            handAbstraction = handAbstraction,
            boardClustering = com.nlhsolver.poker.BoardClustering.none(),  // No board clustering for refinement
            startingStreet = startingStreet,
            board = board,
            btnRange = btnRange,
            bbRange = bbRange,
            pot = pot,
            btnInvested = btnInvested,
            bbInvested = bbInvested
        )
    }

    /**
     * Mark this refinement as solved.
     */
    fun markSolved(): RefinementConfiguration {
        return this.copy(
            solveStatus = RefinementStatus.SOLVED,
            solvedAt = Instant.now()
        )
    }

    /**
     * Mark this refinement as failed.
     */
    fun markFailed(): RefinementConfiguration {
        return this.copy(solveStatus = RefinementStatus.FAILED)
    }

    /**
     * Get board string representation (e.g., "Ks7h2d").
     */
    fun boardString(): String {
        return board.joinToString("") { "${it.rank.symbol}${it.suit.symbol}" }
    }

    companion object {
        /**
         * Create a refinement configuration for a flop board.
         *
         * @param blueprintId Blueprint to refine from
         * @param board Flop board (3 cards)
         * @param stackSizes Stack sizes from blueprint
         * @param pot Pot size at flop
         * @param flopBuckets Number of flop buckets (default: 200)
         * @param turnBuckets Number of turn buckets (default: 200)
         * @param riverBuckets Number of river buckets (default: 200)
         * @return RefinementConfiguration for flop solve
         */
        fun flop(
            blueprintId: UUID,
            board: List<Card>,
            stackSizes: Map<Position, Double>,
            pot: Double,
            flopBuckets: Int = 200,
            turnBuckets: Int = 200,
            riverBuckets: Int = 200,
            betSizingScheme: BetSizingScheme = BetSizingScheme()
        ): RefinementConfiguration {
            require(board.size == 3) { "Flop board must have 3 cards" }

            val boardString = board.joinToString("") { "${it.rank.symbol}${it.suit.symbol}" }
            val scenarioName = "Flop: $boardString"

            return RefinementConfiguration(
                blueprintId = blueprintId,
                scenarioName = scenarioName,
                board = board,
                startingStreet = Street.FLOP,
                stackSizes = stackSizes,
                pot = pot,
                flopBuckets = flopBuckets,
                turnBuckets = turnBuckets,
                riverBuckets = riverBuckets,
                betSizingScheme = betSizingScheme
            )
        }

        /**
         * Create a refinement configuration for a turn board.
         *
         * @param blueprintId Blueprint to refine from
         * @param board Turn board (4 cards)
         * @param stackSizes Stack sizes from blueprint
         * @param pot Pot size at turn
         * @param turnBuckets Number of turn buckets (default: 200)
         * @param riverBuckets Number of river buckets (default: 200)
         * @return RefinementConfiguration for turn solve
         */
        fun turn(
            blueprintId: UUID,
            board: List<Card>,
            stackSizes: Map<Position, Double>,
            pot: Double,
            turnBuckets: Int = 200,
            riverBuckets: Int = 200,
            betSizingScheme: BetSizingScheme = BetSizingScheme()
        ): RefinementConfiguration {
            require(board.size == 4) { "Turn board must have 4 cards" }

            val boardString = board.joinToString("") { "${it.rank.symbol}${it.suit.symbol}" }
            val scenarioName = "Turn: $boardString"

            return RefinementConfiguration(
                blueprintId = blueprintId,
                scenarioName = scenarioName,
                board = board,
                startingStreet = Street.TURN,
                stackSizes = stackSizes,
                pot = pot,
                flopBuckets = 0,  // Not used for turn solve
                turnBuckets = turnBuckets,
                riverBuckets = riverBuckets,
                betSizingScheme = betSizingScheme
            )
        }

        /**
         * Create a refinement configuration for a river board.
         *
         * @param blueprintId Blueprint to refine from
         * @param board River board (5 cards)
         * @param stackSizes Stack sizes from blueprint
         * @param pot Pot size at river
         * @param riverBuckets Number of river buckets (default: 200)
         * @return RefinementConfiguration for river solve
         */
        fun river(
            blueprintId: UUID,
            board: List<Card>,
            stackSizes: Map<Position, Double>,
            pot: Double,
            riverBuckets: Int = 200,
            betSizingScheme: BetSizingScheme = BetSizingScheme()
        ): RefinementConfiguration {
            require(board.size == 5) { "River board must have 5 cards" }

            val boardString = board.joinToString("") { "${it.rank.symbol}${it.suit.symbol}" }
            val scenarioName = "River: $boardString"

            return RefinementConfiguration(
                blueprintId = blueprintId,
                scenarioName = scenarioName,
                board = board,
                startingStreet = Street.RIVER,
                stackSizes = stackSizes,
                pot = pot,
                flopBuckets = 0,  // Not used for river solve
                turnBuckets = 0,  // Not used for river solve
                riverBuckets = riverBuckets,
                betSizingScheme = betSizingScheme
            )
        }
    }
}

/**
 * Status of a refinement solve.
 */
enum class RefinementStatus {
    /**
     * Refinement has been configured but not yet solved.
     */
    PENDING,

    /**
     * Refinement solve is currently running.
     */
    SOLVING,

    /**
     * Refinement solve completed successfully.
     */
    SOLVED,

    /**
     * Refinement solve failed.
     */
    FAILED
}
