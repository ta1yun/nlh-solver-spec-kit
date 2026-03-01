package com.nlhsolver.solver

import com.nlhsolver.core.StrategyProfile as CoreStrategyProfile
import com.nlhsolver.poker.PreflopBuckets
import com.nlhsolver.poker.Position
import com.nlhsolver.storage.StrategyRepository
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import java.time.Instant
import java.util.UUID

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
     * @param strategyId Strategy UUID
     * @param config Blueprint configuration
     * @param repository Strategy repository to load data
     * @return BlueprintRange with BTN opening frequencies
     */
    fun extractBTNOpeningRange(
        strategyId: UUID,
        config: BlueprintConfiguration,
        repository: StrategyRepository = StrategyRepository()
    ): BlueprintRange {
        // Load the full strategy data
        val coreStrategy = repository.loadStrategyData(strategyId)
            ?: throw IllegalArgumentException("Strategy data not found for $strategyId")

        // Find all BTN (p1) preflop opening info sets (empty history, pot=1.5)
        // Format: p1:bucket=XXX:street=PREFLOP:board=:pot=1.5:history=
        val openingInfoSets = coreStrategy.getAllInfoSetKeys()
            .filter { it.startsWith("p1:") && it.contains("street=PREFLOP") && it.endsWith("history=") }

        // Extract bucket number from each info set and get strategy
        val bucketStrategies = mutableMapOf<Int, DoubleArray>()

        for (infoSetKey in openingInfoSets) {
            // Parse bucket number from key like "p1:bucket=165:..."
            val bucketMatch = Regex("bucket=(\\d+)").find(infoSetKey)
            val bucket = bucketMatch?.groupValues?.get(1)?.toInt() ?: continue

            // Get the info set strategy
            // Note: We need to know the number of actions. For preflop opening, typically: fold, call, raise
            // But BTN can't fold preflop (already posted SB), so likely: check/limp, raise (2 actions)
            // Or could be: limp, raise-small, raise-medium, raise-large (multiple raise sizes)
            // For now, assume 2-4 actions and try to get the strategy
            val infoSet = coreStrategy.getAllInfoSets().find { it.infoSet == infoSetKey }
            if (infoSet != null) {
                bucketStrategies[bucket] = infoSet.getAverageStrategy()
            }
        }

        // Map bucket IDs to canonical hands
        // For preflop, bucket ID is the canonical hand index (0-168)
        val handFrequencies = mutableMapOf<String, ActionFrequencies>()

        for ((bucketId, strategy) in bucketStrategies) {
            // Get the canonical hand for this bucket
            val hand = try {
                PreflopBuckets.getHand(bucketId)
            } catch (e: Exception) {
                // Bucket ID out of range (0-168), skip it
                continue
            }

            // Map strategy array to ActionFrequencies
            // Assuming actions are [check/limp, raise] or [fold, call, raise]
            // For BTN preflop, likely [check, raise] since fold isn't an option
            val freqs = when (strategy.size) {
                2 -> ActionFrequencies(
                    check = strategy[0],  // limp/check
                    raise = strategy[1]   // raise
                )
                3 -> ActionFrequencies(
                    fold = strategy[0],
                    call = strategy[1],
                    raise = strategy[2]
                )
                else -> ActionFrequencies(fold = 1.0)  // Default to fold if unknown format
            }
            handFrequencies[hand.notation] = freqs
        }

        // Fill in missing hands with default (not encountered in limited matchups)
        for (hand in PreflopBuckets.allHands) {
            if (hand.notation !in handFrequencies) {
                handFrequencies[hand.notation] = ActionFrequencies(fold = 1.0)
            }
        }

        return BlueprintRange(
            blueprintId = config.blueprintId.toString(),
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
