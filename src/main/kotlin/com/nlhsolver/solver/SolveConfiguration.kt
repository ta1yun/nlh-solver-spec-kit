package com.nlhsolver.solver

import com.nlhsolver.poker.BoardCanonicalizer
import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Position
import com.nlhsolver.poker.Street
import java.time.Instant
import java.util.UUID

/**
 * Represents the complete parameterization of a poker solve request (T023).
 *
 * This entity defines all the parameters needed to construct and solve a poker game tree,
 * including player configuration, stack sizes, convergence criteria, bet sizing schemes,
 * and hand abstraction strategies.
 *
 * **Unified Range-Based Solving**: This configuration supports solving from any street
 * (preflop, flop, turn, river) with weighted range distributions. Preflop solving is
 * just a special case where street=PREFLOP, board=[], ranges=allCanonicalHands().
 *
 * @property configId Unique identifier for this configuration
 * @property name Human-readable name for this configuration
 * @property description Optional description of the solve scenario
 * @property numPlayers Number of players (2-6)
 * @property stackSizes Stack sizes in big blinds for each position
 * @property startingPosition The position that acts first
 * @property convergenceCriteria Criteria for when the solve should terminate
 * @property betSizingScheme Discretized bet sizing options
 * @property handAbstraction Hand bucketing strategy
 * @property createdAt Timestamp when this configuration was created
 * @property updatedAt Timestamp when this configuration was last modified
 * @property startingStreet Starting street (PREFLOP, FLOP, TURN, RIVER). Default: PREFLOP
 * @property board Board cards at starting state. Must match street's board card count.
 * @property btnRange BTN's weighted range. Default: all 169 canonical hands
 * @property bbRange BB's weighted range. Default: all 169 canonical hands
 * @property pot Pot size at starting state. Default: 1.5 (SB=0.5 + BB=1.0)
 * @property btnInvested BTN's investment on current street. Default: 0.0
 * @property bbInvested BB's investment on current street. Default: 0.0
 */
data class SolveConfiguration(
    val configId: UUID = UUID.randomUUID(),
    val name: String = "Untitled Solve",
    val description: String? = null,
    val numPlayers: Int,
    val stackSizes: Map<Position, Double>,
    val startingPosition: Position,
    val convergenceCriteria: ConvergenceCriteria = ConvergenceCriteria(),
    val betSizingScheme: BetSizingScheme = BetSizingScheme(),
    val handAbstraction: HandAbstraction = HandAbstraction(),
    val createdAt: Instant = Instant.now(),
    val updatedAt: Instant = Instant.now(),

    // === Starting State Parameters (for unified range-based solving) ===
    /**
     * Starting street (PREFLOP, FLOP, TURN, RIVER).
     * Default: PREFLOP (backward compatible)
     */
    val startingStreet: Street = Street.PREFLOP,

    /**
     * Board cards at starting state.
     * - PREFLOP: empty list
     * - FLOP: 3 cards
     * - TURN: 4 cards
     * - RIVER: 5 cards
     */
    val board: List<Card> = emptyList(),

    /**
     * BTN's weighted range.
     * Default: All 169 canonical hands with combo frequencies (preflop)
     */
    val btnRange: HandRange = HandRange.allCanonicalHands(),

    /**
     * BB's weighted range.
     * Default: All 169 canonical hands with combo frequencies (preflop)
     */
    val bbRange: HandRange = HandRange.allCanonicalHands(),

    /**
     * Pot size at starting state.
     * Default: 1.5 (SB=0.5 + BB=1.0 for preflop)
     */
    val pot: Double = 1.5,

    /**
     * BTN's investment on current street.
     * Default: 0.0
     */
    val btnInvested: Double = 0.0,

    /**
     * BB's investment on current street.
     * Default: 0.0
     */
    val bbInvested: Double = 0.0,

    // === Action Tree Configuration ===
    /**
     * Maximum number of raises allowed per street.
     * - 0 = no raises (only bet/call/fold) - useful for testing classic poker theory
     * - 1 = one raise allowed (bet, raise, no re-raise)
     * - 2+ = multiple raises allowed (default: 2)
     *
     * Note: "raises" includes both initial bets and subsequent raises in the count.
     * Setting to 0 creates a simplified game tree for polarized vs condensed scenarios.
     */
    val maxRaisesPerStreet: Int = 2
) {
    init {
        // Existing validation
        require(name.length <= 100) { "Name must be at most 100 characters" }
        description?.let { require(it.length <= 500) { "Description must be at most 500 characters" } }
        require(numPlayers in 2..6) { "Number of players must be between 2 and 6" }
        require(stackSizes.size == numPlayers) { "Stack sizes must have exactly $numPlayers entries" }
        require(stackSizes.values.all { it in 10.0..500.0 }) { "All stack sizes must be between 10bb and 500bb" }

        // Starting state validation
        require(board.size == startingStreet.boardCardCount) {
            "Board must have ${startingStreet.boardCardCount} cards for ${startingStreet.name} (has ${board.size})"
        }
        require(pot > 0.0) { "Pot must be positive (got $pot)" }
        require(btnInvested >= 0.0) { "BTN invested amount must be non-negative (got $btnInvested)" }
        require(bbInvested >= 0.0) { "BB invested amount must be non-negative (got $bbInvested)" }

        // Board cards must be unique
        require(board.distinct().size == board.size) { "Board cards must be unique" }
    }

    /**
     * Get a canonicalizer for this configuration's board.
     * Returns identity canonicalizer for preflop (no board).
     */
    fun getBoardCanonicalizer(): BoardCanonicalizer {
        return if (board.isEmpty()) {
            BoardCanonicalizer.identity()
        } else {
            BoardCanonicalizer.canonicalize(board)
        }
    }

    /**
     * Create a new configuration with the board canonicalized.
     * This is useful for solving - use canonical board, then translate results back.
     */
    fun withCanonicalBoard(): Pair<SolveConfiguration, BoardCanonicalizer> {
        if (board.isEmpty()) {
            return Pair(this, BoardCanonicalizer.identity())
        }

        val canonicalizer = BoardCanonicalizer.canonicalize(board)
        val canonicalConfig = this.copy(board = canonicalizer.canonicalBoard)
        return Pair(canonicalConfig, canonicalizer)
    }

    companion object {
        /**
         * Create a preflop configuration (backward compatible helper).
         *
         * This creates a configuration for standard preflop solving with all 169 canonical hands.
         *
         * @param stackSizes Stack sizes for BTN and BB
         * @param convergenceCriteria Convergence criteria for the solve
         * @param betSizingScheme Bet sizing scheme to use
         * @param handAbstraction Hand abstraction strategy
         * @param name Optional name for this configuration
         * @return SolveConfiguration for preflop solving
         */
        fun preflop(
            stackSizes: Map<Position, Double>,
            convergenceCriteria: ConvergenceCriteria = ConvergenceCriteria(),
            betSizingScheme: BetSizingScheme = BetSizingScheme(),
            handAbstraction: HandAbstraction = HandAbstraction(),
            name: String = "Preflop Solve"
        ): SolveConfiguration = SolveConfiguration(
            numPlayers = 2,
            stackSizes = stackSizes,
            startingPosition = Position.BTN,
            convergenceCriteria = convergenceCriteria,
            betSizingScheme = betSizingScheme,
            handAbstraction = handAbstraction,
            name = name,
            // All other fields use defaults (PREFLOP, empty board, 169 hands, pot=1.5)
        )

        /**
         * Create a river configuration.
         *
         * This creates a configuration for river solving with custom ranges and board.
         *
         * @param board Board cards (must be exactly 5 cards)
         * @param btnRange BTN's weighted range
         * @param bbRange BB's weighted range
         * @param pot Pot size at river decision point
         * @param stackSizes Stack sizes for BTN and BB
         * @param btnInvested BTN's investment on river (e.g., bet size if BTN bet)
         * @param bbInvested BB's investment on river (usually 0.0 if facing bet)
         * @param convergenceCriteria Convergence criteria for the solve
         * @param name Optional name for this configuration
         * @return SolveConfiguration for river solving
         */
        fun river(
            board: List<Card>,
            btnRange: HandRange,
            bbRange: HandRange,
            pot: Double,
            stackSizes: Map<Position, Double>,
            btnInvested: Double = 0.0,
            bbInvested: Double = 0.0,
            convergenceCriteria: ConvergenceCriteria = ConvergenceCriteria(),
            name: String = "River Solve",
            maxRaisesPerStreet: Int = 2
        ): SolveConfiguration {
            require(board.size == 5) { "River requires exactly 5 board cards (got ${board.size})" }
            return SolveConfiguration(
                numPlayers = 2,
                stackSizes = stackSizes,
                startingPosition = Position.BTN,
                convergenceCriteria = convergenceCriteria,
                name = name,
                startingStreet = Street.RIVER,
                board = board,
                btnRange = btnRange,
                bbRange = bbRange,
                pot = pot,
                btnInvested = btnInvested,
                bbInvested = bbInvested,
                maxRaisesPerStreet = maxRaisesPerStreet
            )
        }
    }
}
