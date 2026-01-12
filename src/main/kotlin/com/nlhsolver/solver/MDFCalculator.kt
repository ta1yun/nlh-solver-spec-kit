package com.nlhsolver.solver

import com.nlhsolver.core.StrategyProfile
import com.nlhsolver.poker.Action
import com.nlhsolver.poker.Position

/**
 * Minimum Defense Frequency (MDF) calculator and analyzer.
 *
 * MDF = POT / (POT + BET)
 *
 * This is the minimum frequency a defender must call/raise to prevent
 * the aggressor from profitably bluffing with any two cards.
 *
 * Example: If pot is 20 and bet is 10, MDF = 20/(20+10) = 66.67%
 * The defender must defend at least 66.67% to prevent pure bluff exploitation.
 *
 * If defender folds more than 33.33%, the aggressor can profitably bluff any hand.
 */
class MDFCalculator {
    /**
     * Calculate theoretical MDF for a given pot and bet size.
     *
     * @param pot Pot size before the bet
     * @param betSize Size of the bet being made
     * @return MDF as a decimal (0.0 to 1.0)
     */
    fun calculateMDF(pot: Double, betSize: Double): Double {
        require(pot > 0.0) { "Pot must be positive (got $pot)" }
        require(betSize > 0.0) { "Bet size must be positive (got $betSize)" }
        return pot / (pot + betSize)
    }

    /**
     * Calculate MDF from a river configuration.
     *
     * Assumes BTN has bet and BB faces decision.
     *
     * @param configuration River solve configuration
     * @return Theoretical MDF
     */
    fun calculateMDF(configuration: SolveConfiguration): Double {
        val potBeforeBet = configuration.pot - configuration.btnInvested
        val betSize = configuration.btnInvested
        return calculateMDF(potBeforeBet, betSize)
    }

    /**
     * Analyze defense frequency in a solved strategy.
     *
     * This extracts the actual fold/call/raise frequencies from BB's strategy
     * when facing a river bet, and compares to theoretical MDF.
     *
     * @param configuration The river scenario configuration
     * @param strategyProfile The solved strategy to analyze
     * @return Analysis of defense frequency vs MDF
     */
    fun analyzeDefenseFrequency(
        configuration: SolveConfiguration,
        strategyProfile: StrategyProfile
    ): MDFAnalysis {
        // Calculate theoretical MDF
        val theoreticalMDF = calculateMDF(configuration)

        // For now, return a placeholder analysis
        // Full implementation would:
        // 1. Traverse strategy to find BB's decision nodes on river
        // 2. Extract action frequencies (fold, call, raise)
        // 3. Calculate defense frequency = call% + raise%
        // 4. Compare to theoretical MDF

        // TODO: Implement strategy traversal and frequency extraction
        // This requires understanding the StrategyProfile data structure
        // and how to query info set strategies

        return MDFAnalysis(
            theoreticalMDF = theoreticalMDF,
            actualDefenseFreq = 0.0,  // Placeholder
            foldFreq = 0.0,            // Placeholder
            callFreq = 0.0,            // Placeholder
            raiseFreq = 0.0,           // Placeholder
            isExploitable = false,
            exploitabilityGap = 0.0,
            recommendation = "Strategy analysis not yet implemented"
        )
    }

    /**
     * Calculate pot odds offered by a bet.
     *
     * Pot odds = CALL_AMOUNT / (POT + CALL_AMOUNT)
     *
     * This is related to but distinct from MDF. Pot odds tell us the minimum
     * equity needed to call profitably with a specific hand.
     *
     * @param pot Current pot size (including the bet)
     * @param callAmount Amount needed to call
     * @return Pot odds as a decimal (0.0 to 1.0)
     */
    fun calculatePotOdds(pot: Double, callAmount: Double): Double {
        require(pot > 0.0) { "Pot must be positive" }
        require(callAmount > 0.0) { "Call amount must be positive" }
        return callAmount / (pot + callAmount)
    }

    /**
     * Calculate alpha (bluff-to-value ratio) from MDF.
     *
     * Alpha = (1 - MDF) / MDF
     *
     * This tells us the optimal bluff-to-value ratio for the aggressor.
     * For example, if MDF = 2/3, then alpha = 0.5 (1 bluff for every 2 value bets).
     *
     * @param mdf Minimum defense frequency
     * @return Optimal bluff-to-value ratio
     */
    fun calculateAlpha(mdf: Double): Double {
        require(mdf > 0.0 && mdf < 1.0) { "MDF must be between 0 and 1" }
        return (1.0 - mdf) / mdf
    }
}

/**
 * Result of MDF defense frequency analysis.
 *
 * @property theoreticalMDF The theoretical MDF based on pot odds
 * @property actualDefenseFreq Actual defense frequency (call% + raise%) from strategy
 * @property foldFreq Fold frequency
 * @property callFreq Call frequency
 * @property raiseFreq Raise frequency
 * @property isExploitable Whether BB is defending below MDF (exploitable by pure bluffs)
 * @property exploitabilityGap How much below MDF (if exploitable), or 0.0 if not
 * @property recommendation Human-readable recommendation
 */
data class MDFAnalysis(
    val theoreticalMDF: Double,
    val actualDefenseFreq: Double,
    val foldFreq: Double,
    val callFreq: Double,
    val raiseFreq: Double,
    val isExploitable: Boolean,
    val exploitabilityGap: Double,
    val recommendation: String
) {
    init {
        // Frequencies should sum to ~1.0 (allowing small floating point error)
        val totalFreq = foldFreq + callFreq + raiseFreq
        require(totalFreq >= 0.99 && totalFreq <= 1.01) {
            "Frequencies must sum to 1.0 (got $totalFreq)"
        }

        // Defense frequency should equal call + raise
        val expectedDefense = callFreq + raiseFreq
        require(kotlin.math.abs(actualDefenseFreq - expectedDefense) < 0.01) {
            "Defense frequency ($actualDefenseFreq) must equal call + raise ($expectedDefense)"
        }
    }

    /**
     * Format analysis as human-readable string.
     */
    fun format(): String = buildString {
        appendLine("=== MDF Analysis ===")
        appendLine("Theoretical MDF: ${"%.2f".format(theoreticalMDF * 100)}%")
        appendLine()
        appendLine("BB's Strategy:")
        appendLine("  Fold:    ${"%.2f".format(foldFreq * 100)}%")
        appendLine("  Call:    ${"%.2f".format(callFreq * 100)}%")
        appendLine("  Raise:   ${"%.2f".format(raiseFreq * 100)}%")
        appendLine("  Defense: ${"%.2f".format(actualDefenseFreq * 100)}%")
        appendLine()
        if (isExploitable) {
            appendLine("⚠️  EXPLOITABLE: Defending below MDF by ${"%.2f".format(exploitabilityGap * 100)}%")
            appendLine("BTN can profitably bluff any two cards")
        } else {
            appendLine("✅ Not exploitable by pure bluffs")
            val surplus = actualDefenseFreq - theoreticalMDF
            if (surplus > 0.02) {
                appendLine("   (Defending ${"%.2f".format(surplus * 100)}% above MDF)")
            }
        }
        appendLine()
        appendLine("Recommendation: $recommendation")
    }
}
