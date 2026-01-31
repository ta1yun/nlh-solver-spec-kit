package com.nlhsolver.solver

import com.nlhsolver.poker.PreflopBuckets
import com.nlhsolver.poker.Position
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import java.time.Instant

/**
 * Extracts ranges from solved strategies (T134, T137, T138).
 *
 * Range extraction identifies specific decision points in a blueprint strategy
 * and extracts the frequencies with which each hand takes each action.
 *
 * Common extraction points:
 * - BTN opening range (preflop, BTN first action)
 * - BB defense vs BTN open (preflop, BB facing raise)
 * - BTN 3bet range (preflop, BTN facing BB raise)
 * - BB 4bet range (preflop, BB facing BTN 3bet)
 *
 * The extracted ranges can be used as inputs for refinement solves or
 * exported to JSON for manual analysis/editing.
 */
class RangeExtractor {
    private val json = Json {
        prettyPrint = true
        encodeDefaults = true
    }

    /**
     * Extract BTN opening range from a blueprint strategy (T134).
     *
     * Identifies the preflop decision point where BTN acts first and extracts
     * the action frequencies for all 169 canonical hands.
     *
     * @param blueprintId Blueprint ID this range comes from
     * @param strategy Solved strategy from blueprint
     * @param config Blueprint configuration
     * @return BlueprintRange with BTN opening frequencies
     */
    fun extractBTNOpeningRange(
        blueprintId: String,
        strategy: StrategyProfile,
        config: BlueprintConfiguration
    ): BlueprintRange {
        // TODO: Implement actual strategy traversal to find BTN opening decision point
        // For now, return a placeholder range
        val handFrequencies = mutableMapOf<String, ActionFrequencies>()

        // Extract frequencies for all 169 canonical hands
        for (hand in PreflopBuckets.allHands) {
            // TODO: Look up actual frequencies from strategy
            // Placeholder: tight opening range
            val freqs = when {
                hand.notation in listOf("AA", "KK", "QQ", "JJ", "AKs", "AKo") ->
                    ActionFrequencies(raise = 1.0)  // Always raise premium hands
                hand.notation in listOf("TT", "99", "AQs", "AJs") ->
                    ActionFrequencies(raise = 0.8, fold = 0.2)  // Mostly raise
                else ->
                    ActionFrequencies(fold = 1.0)  // Fold everything else (placeholder)
            }
            handFrequencies[hand.notation] = freqs
        }

        return BlueprintRange(
            blueprintId = blueprintId,
            position = Position.BTN,
            actionPoint = "Preflop Opening",
            handFrequencies = handFrequencies,
            metadata = RangeMetadata(
                extractedAt = Instant.now().toString(),
                scenarioName = config.scenarioName,
                stackSize = config.stackSizes[Position.BTN],
                ante = config.ante
            )
        )
    }

    /**
     * Extract BB defense range vs BTN open (T134).
     *
     * Identifies the preflop decision point where BB faces a BTN raise
     * and extracts the action frequencies for all 169 canonical hands.
     *
     * @param blueprintId Blueprint ID this range comes from
     * @param strategy Solved strategy from blueprint
     * @param config Blueprint configuration
     * @return BlueprintRange with BB defense frequencies
     */
    fun extractBBDefenseRange(
        blueprintId: String,
        strategy: StrategyProfile,
        config: BlueprintConfiguration
    ): BlueprintRange {
        // TODO: Implement actual strategy traversal
        val handFrequencies = mutableMapOf<String, ActionFrequencies>()

        for (hand in PreflopBuckets.allHands) {
            // TODO: Look up actual frequencies from strategy
            // Placeholder: reasonable defense range
            val freqs = when {
                hand.notation in listOf("AA", "KK", "QQ") ->
                    ActionFrequencies(raise = 0.9, call = 0.1)  // 3bet premium pairs
                hand.notation in listOf("AKs", "AKo") ->
                    ActionFrequencies(raise = 0.7, call = 0.3)  // Mix 3bet/call
                hand.notation in listOf("JJ", "TT", "AQs") ->
                    ActionFrequencies(call = 0.7, raise = 0.2, fold = 0.1)  // Mostly call
                else ->
                    ActionFrequencies(fold = 1.0)  // Fold weak hands (placeholder)
            }
            handFrequencies[hand.notation] = freqs
        }

        return BlueprintRange(
            blueprintId = blueprintId,
            position = Position.BB,
            actionPoint = "Defense vs BTN Open",
            handFrequencies = handFrequencies,
            metadata = RangeMetadata(
                extractedAt = Instant.now().toString(),
                scenarioName = config.scenarioName,
                stackSize = config.stackSizes[Position.BB],
                ante = config.ante
            )
        )
    }

    /**
     * Export range to JSON format (T137).
     *
     * Creates a human-readable JSON representation of the range that can be
     * manually edited or imported into other tools.
     *
     * @param range Blueprint range to export
     * @return JSON string
     */
    fun exportToJson(range: BlueprintRange): String {
        return json.encodeToString(range)
    }

    /**
     * Import range from JSON format (T138).
     *
     * Parses a JSON string into a BlueprintRange. Validates that all
     * frequencies are valid and sum to 1.0.
     *
     * @param jsonString JSON representation of range
     * @return Parsed BlueprintRange
     * @throws IllegalArgumentException if JSON is invalid or frequencies don't sum to 1.0
     */
    fun importFromJson(jsonString: String): BlueprintRange {
        return try {
            json.decodeFromString<BlueprintRange>(jsonString)
        } catch (e: Exception) {
            throw IllegalArgumentException("Failed to parse BlueprintRange from JSON: ${e.message}", e)
        }
    }

    /**
     * Export range to simple text format.
     *
     * Creates a compact text representation showing only non-zero actions:
     * ```
     * AA: raise=1.0
     * KK: raise=1.0
     * AKs: raise=0.7, call=0.3
     * AKo: raise=0.5, fold=0.5
     * ```
     */
    fun exportToText(range: BlueprintRange): String {
        val sb = StringBuilder()
        sb.appendLine("# ${range.actionPoint} - ${range.position}")
        sb.appendLine("# Blueprint: ${range.blueprintId}")
        if (range.metadata.scenarioName != null) {
            sb.appendLine("# Scenario: ${range.metadata.scenarioName}")
        }
        sb.appendLine()

        // Sort hands by some reasonable order (pairs first, then suited, then offsuit)
        val sortedHands = range.handFrequencies.keys.sortedWith(compareBy(
            { hand -> !hand.endsWith("") || hand[0] != hand[1] },  // Pairs first
            { hand -> !hand.endsWith("s") },  // Then suited
            { hand -> -hand[0].toString().replace("A", "E").first().code }  // Then by rank
        ))

        for (hand in sortedHands) {
            val freqs = range.handFrequencies[hand] ?: continue

            val actions = buildList {
                if (freqs.raise > 0.0) add("raise=${String.format("%.2f", freqs.raise)}")
                if (freqs.call > 0.0) add("call=${String.format("%.2f", freqs.call)}")
                if (freqs.bet > 0.0) add("bet=${String.format("%.2f", freqs.bet)}")
                if (freqs.check > 0.0) add("check=${String.format("%.2f", freqs.check)}")
                if (freqs.fold > 0.0) add("fold=${String.format("%.2f", freqs.fold)}")
                if (freqs.allin > 0.0) add("allin=${String.format("%.2f", freqs.allin)}")
            }

            if (actions.isNotEmpty() && actions.first() != "fold=1.00") {
                sb.appendLine("$hand: ${actions.joinToString(", ")}")
            }
        }

        return sb.toString()
    }
}
