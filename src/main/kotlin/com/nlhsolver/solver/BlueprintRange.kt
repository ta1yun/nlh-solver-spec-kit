package com.nlhsolver.solver

import com.nlhsolver.poker.Position
import kotlinx.serialization.Serializable
import java.util.UUID

/**
 * Represents a blueprint range for a specific position and action point (T133).
 *
 * A blueprint range captures the frequencies with which each canonical hand
 * should take each action at a specific decision point. These ranges are
 * extracted from blueprint solutions and used as inputs for refinement solves.
 *
 * Example:
 * - BTN opening range: AA=raise:1.0, KK=raise:1.0, 72o=fold:1.0
 * - BB defense vs raise: AA=3bet:0.8,call:0.2, KK=3bet:0.7,call:0.3
 *
 * @property blueprintId Reference to the blueprint this range comes from
 * @property position Position this range applies to (BTN, BB, etc.)
 * @property actionPoint Description of the decision point (e.g., "Preflop Opening", "BB vs BTN Raise")
 * @property handFrequencies Map from canonical hand notation to action frequencies
 */
@Serializable
data class BlueprintRange(
    val blueprintId: String,
    val position: Position,
    val actionPoint: String,
    val handFrequencies: Map<String, ActionFrequencies>,
    val metadata: RangeMetadata = RangeMetadata()
) {
    init {
        require(blueprintId.isNotBlank()) { "Blueprint ID cannot be blank" }
        require(actionPoint.isNotBlank()) { "Action point cannot be blank" }
        require(handFrequencies.isNotEmpty()) { "Hand frequencies cannot be empty" }

        // Validate that all action frequencies sum to ~1.0 for each hand
        handFrequencies.forEach { (hand, freqs) ->
            val sum = freqs.fold + freqs.call + freqs.raise + freqs.check + freqs.bet + freqs.allin
            require(sum in 0.99..1.01) {
                "Action frequencies for $hand must sum to 1.0 (got $sum)"
            }
        }
    }

    /**
     * Get frequency for a specific hand and action.
     */
    fun getFrequency(hand: String, action: Action): Double {
        val freqs = handFrequencies[hand] ?: return 0.0
        return when (action) {
            Action.FOLD -> freqs.fold
            Action.CALL -> freqs.call
            Action.RAISE -> freqs.raise
            Action.CHECK -> freqs.check
            Action.BET -> freqs.bet
            Action.ALLIN -> freqs.allin
        }
    }

    /**
     * Get all hands that have non-zero frequency for a specific action.
     */
    fun getHandsForAction(action: Action, minFrequency: Double = 0.01): List<String> {
        return handFrequencies.filter { (_, freqs) ->
            when (action) {
                Action.FOLD -> freqs.fold >= minFrequency
                Action.CALL -> freqs.call >= minFrequency
                Action.RAISE -> freqs.raise >= minFrequency
                Action.CHECK -> freqs.check >= minFrequency
                Action.BET -> freqs.bet >= minFrequency
                Action.ALLIN -> freqs.allin >= minFrequency
            }
        }.keys.toList()
    }

    /**
     * Filter range to only include hands with total action frequency >= threshold.
     */
    fun filterByFrequency(minFrequency: Double): BlueprintRange {
        val filtered = handFrequencies.filter { (_, freqs) ->
            (freqs.call + freqs.raise + freqs.check + freqs.bet + freqs.allin) >= minFrequency
        }
        return copy(handFrequencies = filtered)
    }

    companion object {
        /**
         * Create an empty range for a position/action point.
         */
        fun empty(
            blueprintId: String,
            position: Position,
            actionPoint: String
        ): BlueprintRange {
            return BlueprintRange(
                blueprintId = blueprintId,
                position = position,
                actionPoint = actionPoint,
                handFrequencies = mapOf(
                    "AA" to ActionFrequencies(fold = 1.0)  // Placeholder
                )
            )
        }
    }
}

/**
 * Action frequencies for a single hand at a decision point.
 * All frequencies must be in [0.0, 1.0] and sum to 1.0.
 */
@Serializable
data class ActionFrequencies(
    val fold: Double = 0.0,
    val call: Double = 0.0,
    val raise: Double = 0.0,
    val check: Double = 0.0,
    val bet: Double = 0.0,
    val allin: Double = 0.0
) {
    init {
        require(fold in 0.0..1.0) { "Fold frequency must be in [0.0, 1.0] (got $fold)" }
        require(call in 0.0..1.0) { "Call frequency must be in [0.0, 1.0] (got $call)" }
        require(raise in 0.0..1.0) { "Raise frequency must be in [0.0, 1.0] (got $raise)" }
        require(check in 0.0..1.0) { "Check frequency must be in [0.0, 1.0] (got $check)" }
        require(bet in 0.0..1.0) { "Bet frequency must be in [0.0, 1.0] (got $bet)" }
        require(allin in 0.0..1.0) { "All-in frequency must be in [0.0, 1.0] (got $allin)" }
    }

    /**
     * Check if frequencies sum to ~1.0.
     */
    fun isValid(): Boolean {
        val sum = fold + call + raise + check + bet + allin
        return sum in 0.99..1.01
    }

    companion object {
        /**
         * Pure fold.
         */
        fun fold() = ActionFrequencies(fold = 1.0)

        /**
         * Pure call.
         */
        fun call() = ActionFrequencies(call = 1.0)

        /**
         * Pure raise.
         */
        fun raise() = ActionFrequencies(raise = 1.0)

        /**
         * Pure check.
         */
        fun check() = ActionFrequencies(check = 1.0)

        /**
         * Pure bet.
         */
        fun bet() = ActionFrequencies(bet = 1.0)

        /**
         * Pure all-in.
         */
        fun allin() = ActionFrequencies(allin = 1.0)
    }
}

/**
 * Metadata about the range.
 */
@Serializable
data class RangeMetadata(
    val extractedAt: String? = null,
    val scenarioName: String? = null,
    val stackSize: Double? = null,
    val ante: Double? = null,
    val notes: String? = null
)

/**
 * Actions available in poker.
 */
enum class Action {
    FOLD,
    CALL,
    RAISE,
    CHECK,
    BET,
    ALLIN
}
