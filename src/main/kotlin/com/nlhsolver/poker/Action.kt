package com.nlhsolver.poker

/**
 * Represents a poker action that a player can take.
 * Sealed class ensures exhaustive when expressions and type safety.
 */
sealed class Action {
    /** Fold - discard hand and forfeit pot */
    data object Fold : Action() {
        override fun toString(): String = "Fold"
    }

    /** Check - pass action without betting (only valid when no bet to face) */
    data object Check : Action() {
        override fun toString(): String = "Check"
    }

    /** Call - match the current bet */
    data object Call : Action() {
        override fun toString(): String = "Call"
    }

    /** Bet - make an initial bet (no prior bet on current street) */
    data class Bet(val amountBb: Double) : Action() {
        init {
            require(amountBb > 0) { "Bet amount must be positive: $amountBb" }
        }

        override fun toString(): String = "Bet ${amountBb}bb"
    }

    /** Raise - increase an existing bet */
    data class Raise(val totalAmountBb: Double) : Action() {
        init {
            require(totalAmountBb > 0) { "Raise amount must be positive: $totalAmountBb" }
        }

        override fun toString(): String = "Raise to ${totalAmountBb}bb"
    }

    /** AllIn - bet all remaining chips */
    data class AllIn(val amountBb: Double) : Action() {
        init {
            require(amountBb > 0) { "All-in amount must be positive: $amountBb" }
        }

        override fun toString(): String = "All-In ${amountBb}bb"
    }

    /**
     * Get the amount of chips this action commits (in big blinds)
     */
    fun getAmount(): Double = when (this) {
        is Fold -> 0.0
        is Check -> 0.0
        is Call -> 0.0 // Amount determined by pot state
        is Bet -> amountBb
        is Raise -> totalAmountBb
        is AllIn -> amountBb
    }

    /**
     * Check if this action commits chips
     */
    fun isCommit(): Boolean = when (this) {
        is Fold, is Check, is Call -> false
        is Bet, is Raise, is AllIn -> true
    }

    /**
     * Check if this action ends the hand
     */
    fun isTerminal(): Boolean = this is Fold || this is AllIn

    companion object {
        /**
         * Parse action from string representation
         */
        fun fromString(str: String): Action {
            val parts = str.trim().split(" ")
            return when (parts[0].uppercase()) {
                "FOLD" -> Fold
                "CHECK" -> Check
                "CALL" -> Call
                "BET" -> {
                    require(parts.size >= 2) { "Bet action requires amount" }
                    val amount = parts[1].replace("bb", "").toDouble()
                    Bet(amount)
                }
                "RAISE" -> {
                    require(parts.size >= 3) { "Raise action requires amount" }
                    val amount = parts[2].replace("bb", "").toDouble()
                    Raise(amount)
                }
                "ALL-IN", "ALLIN" -> {
                    require(parts.size >= 2) { "All-in action requires amount" }
                    val amount = parts[1].replace("bb", "").toDouble()
                    AllIn(amount)
                }
                else -> throw IllegalArgumentException("Invalid action: $str")
            }
        }
    }
}
