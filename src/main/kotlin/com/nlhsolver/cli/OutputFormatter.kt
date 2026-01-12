package com.nlhsolver.cli

import com.nlhsolver.poker.PreflopBuckets
import com.nlhsolver.poker.PreflopBuckets.Suitedness
import com.nlhsolver.poker.Position
import com.nlhsolver.poker.Rank
import com.nlhsolver.solver.*
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

/**
 * Output formatting for CLI (T077).
 *
 * Supports both JSON and human-readable text output.
 */
object OutputFormatter {
    private val json = Json {
        prettyPrint = true
        isLenient = true
    }

    enum class Format {
        JSON,
        TEXT
    }

    /**
     * Format configuration output.
     */
    fun formatConfiguration(config: SolveConfiguration, format: Format = Format.TEXT): String {
        return when (format) {
            Format.JSON -> formatConfigurationJson(config)
            Format.TEXT -> formatConfigurationText(config)
        }
    }

    private fun formatConfigurationJson(config: SolveConfiguration): String {
        return buildString {
            appendLine("{")
            appendLine("  \"configId\": \"${config.configId}\",")
            appendLine("  \"name\": \"${config.name}\",")
            appendLine("  \"numPlayers\": ${config.numPlayers},")
            appendLine("  \"stackSizes\": {")
            config.stackSizes.entries.forEachIndexed { index, (pos, stack) ->
                val comma = if (index < config.stackSizes.size - 1) "," else ""
                appendLine("    \"$pos\": $stack$comma")
            }
            appendLine("  },")
            appendLine("  \"startingPosition\": \"${config.startingPosition}\",")
            appendLine("  \"targetExploitability\": ${config.convergenceCriteria.targetExploitability},")
            appendLine("  \"maxIterations\": ${config.convergenceCriteria.maxIterations}")
            appendLine("}")
        }
    }

    private fun formatConfigurationText(config: SolveConfiguration): String {
        return buildString {
            appendLine("Configuration: ${config.name}")
            appendLine("  ID: ${config.configId}")
            appendLine("  Players: ${config.numPlayers}")
            appendLine("  Stack Sizes:")
            config.stackSizes.forEach { (pos, stack) ->
                appendLine("    $pos: ${stack}bb")
            }
            appendLine("  Starting Position: ${config.startingPosition}")
            appendLine("  Target Exploitability: ${config.convergenceCriteria.targetExploitability}%")
            appendLine("  Max Iterations: ${config.convergenceCriteria.maxIterations}")
            appendLine("  Created: ${config.createdAt}")
        }
    }

    /**
     * Format job output.
     */
    fun formatJob(job: SolveJob, format: Format = Format.TEXT): String {
        return when (format) {
            Format.JSON -> formatJobJson(job)
            Format.TEXT -> formatJobText(job)
        }
    }

    private fun formatJobJson(job: SolveJob): String {
        return buildString {
            appendLine("{")
            appendLine("  \"jobId\": \"${job.jobId}\",")
            appendLine("  \"configurationId\": \"${job.configurationId}\",")
            appendLine("  \"status\": \"${job.status}\",")
            appendLine("  \"progress\": {")
            appendLine("    \"iterationsCompleted\": ${job.progress.iterationsCompleted},")
            appendLine("    \"currentExploitability\": ${job.progress.currentExploitability ?: "null"}")
            appendLine("  }")
            if (job.result != null) {
                appendLine("  ,\"result\": {")
                appendLine("    \"finalExploitability\": ${job.result.finalExploitability},")
                appendLine("    \"iterationsRun\": ${job.result.iterationsRun},")
                appendLine("    \"converged\": ${job.result.converged}")
                appendLine("  }")
            }
            appendLine("}")
        }
    }

    private fun formatJobText(job: SolveJob): String {
        return buildString {
            appendLine("Job: ${job.jobId}")
            appendLine("  Configuration: ${job.configurationId}")
            appendLine("  Status: ${job.status}")
            appendLine("  Progress:")
            appendLine("    Iterations: ${job.progress.iterationsCompleted}")
            job.progress.currentExploitability?.let {
                appendLine("    Exploitability: ${"%.6f".format(it)}%")
            }
            job.progress.estimatedIterationsRemaining?.let {
                appendLine("    Estimated remaining: $it iterations")
            }
            job.progress.estimatedTimeRemainingSeconds?.let {
                appendLine("    Estimated time: ${formatDuration(it)}")
            }

            job.result?.let { result ->
                appendLine("  Result:")
                appendLine("    Final Exploitability: ${"%.6f".format(result.finalExploitability)}%")
                appendLine("    Iterations Run: ${result.iterationsRun}")
                appendLine("    Converged: ${result.converged}")
                appendLine("    Completion: ${result.completionType}")
                appendLine("    Execution Time: ${formatDuration(result.executionTimeSeconds)}")
                appendLine("    Strategy: ${result.strategyProfileId}")
            }

            job.error?.let { error ->
                appendLine("  Error:")
                appendLine("    Code: ${error.errorCode}")
                appendLine("    Message: ${error.message}")
                appendLine("    Retriable: ${error.isRetriable}")
            }

            appendLine("  Created: ${job.createdAt}")
            job.completedAt?.let { appendLine("  Completed: $it") }
        }
    }

    /**
     * Format strategy query result.
     */
    fun formatStrategyQuery(result: StrategyQueryResult, format: Format = Format.TEXT): String {
        return when (format) {
            Format.JSON -> formatStrategyQueryJson(result)
            Format.TEXT -> formatStrategyQueryText(result)
        }
    }

    private fun formatStrategyQueryJson(result: StrategyQueryResult): String {
        return buildString {
            appendLine("{")
            appendLine("  \"found\": ${result.found},")
            appendLine("  \"infoSet\": \"${result.infoSet}\",")
            appendLine("  \"actionProbabilities\": {")
            result.actionProbabilities.entries.forEachIndexed { index, (action, prob) ->
                val comma = if (index < result.actionProbabilities.size - 1) "," else ""
                appendLine("    \"$action\": $prob$comma")
            }
            appendLine("  },")
            appendLine("  \"exploitability\": ${result.exploitability}")
            appendLine("}")
        }
    }

    private fun formatStrategyQueryText(result: StrategyQueryResult): String {
        return buildString {
            if (!result.found) {
                appendLine("Strategy not found for this game state")
                appendLine("Info Set: ${result.infoSet}")
                return@buildString
            }

            appendLine("Strategy Recommendations:")
            appendLine("  Info Set: ${result.infoSet}")
            appendLine("  Exploitability: ${"%.6f".format(result.exploitability)}%")
            appendLine()
            appendLine("  Actions:")
            result.recommendations.forEach { rec ->
                val percentage = "%.2f".format(rec.probability * 100)
                appendLine("    ${rec.action.padEnd(10)} ${percentage}%")
            }
        }
    }

    /**
     * Format a list of items.
     */
    fun <T> formatList(
        items: List<T>,
        title: String,
        formatter: (T) -> String,
        format: Format = Format.TEXT
    ): String {
        if (items.isEmpty()) {
            return "No $title found"
        }

        return buildString {
            appendLine("$title (${items.size}):")
            appendLine()
            items.forEach { item ->
                appendLine(formatter(item))
                appendLine()
            }
        }
    }

    /**
     * Format duration in seconds to human-readable string.
     */
    private fun formatDuration(seconds: Long): String {
        val hours = seconds / 3600
        val minutes = (seconds % 3600) / 60
        val secs = seconds % 60

        return when {
            hours > 0 -> "${hours}h ${minutes}m ${secs}s"
            minutes > 0 -> "${minutes}m ${secs}s"
            else -> "${secs}s"
        }
    }

    /**
     * Format error message.
     */
    fun formatError(message: String): String {
        return "ERROR: $message"
    }

    /**
     * Format success message.
     */
    fun formatSuccess(message: String): String {
        return "SUCCESS: $message"
    }

    /**
     * Format strategy list.
     */
    fun formatStrategyList(strategies: List<StrategyProfile>, format: Format = Format.TEXT): String {
        return when (format) {
            Format.JSON -> formatStrategyListJson(strategies)
            Format.TEXT -> formatStrategyListText(strategies)
        }
    }

    private fun formatStrategyListJson(strategies: List<StrategyProfile>): String {
        return buildString {
            appendLine("[")
            strategies.forEachIndexed { index, strategy ->
                val comma = if (index < strategies.size - 1) "," else ""
                appendLine("  {")
                appendLine("    \"strategyId\": \"${strategy.strategyId}\",")
                appendLine("    \"solveJobId\": \"${strategy.solveJobId}\",")
                appendLine("    \"exploitability\": ${strategy.exploitability},")
                appendLine("    \"createdAt\": \"${strategy.createdAt}\"")
                append("  }$comma")
                if (index < strategies.size - 1) appendLine()
            }
            appendLine()
            appendLine("]")
        }
    }

    private fun formatStrategyListText(strategies: List<StrategyProfile>): String {
        return buildString {
            appendLine("Strategies (${strategies.size}):")
            appendLine()
            strategies.forEach { strategy ->
                appendLine("  ${strategy.strategyId}")
                appendLine("    Solve Job: ${strategy.solveJobId}")
                appendLine("    Exploitability: ${"%.6f".format(strategy.exploitability)}%")
                appendLine("    Created: ${strategy.createdAt}")
                appendLine()
            }
        }
    }

    /**
     * Format strategy details.
     */
    fun formatStrategyDetails(
        strategy: StrategyProfile,
        coreStrategy: com.nlhsolver.core.StrategyProfile?,
        format: Format = Format.TEXT
    ): String {
        return when (format) {
            Format.JSON -> formatStrategyDetailsJson(strategy, coreStrategy)
            Format.TEXT -> formatStrategyDetailsText(strategy, coreStrategy)
        }
    }

    private fun formatStrategyDetailsJson(
        strategy: StrategyProfile,
        coreStrategy: com.nlhsolver.core.StrategyProfile?
    ): String {
        return buildString {
            appendLine("{")
            appendLine("  \"strategyId\": \"${strategy.strategyId}\",")
            appendLine("  \"solveJobId\": \"${strategy.solveJobId}\",")
            appendLine("  \"exploitability\": ${strategy.exploitability},")
            appendLine("  \"createdAt\": \"${strategy.createdAt}\"")
            if (coreStrategy != null) {
                appendLine("  ,\"infoSetCount\": ${coreStrategy.size()},")
                val totalVisits = coreStrategy.getAllInfoSets().sumOf { it.getVisitCount() }
                appendLine("  \"totalVisits\": $totalVisits")
            }
            appendLine("}")
        }
    }

    private fun formatStrategyDetailsText(
        strategy: StrategyProfile,
        coreStrategy: com.nlhsolver.core.StrategyProfile?
    ): String {
        return buildString {
            appendLine("Strategy: ${strategy.strategyId}")
            appendLine("  Solve Job: ${strategy.solveJobId}")
            appendLine("  Exploitability: ${"%.6f".format(strategy.exploitability)}%")
            appendLine("  Created: ${strategy.createdAt}")

            if (coreStrategy != null) {
                appendLine()
                appendLine("  Detailed Statistics:")
                appendLine("    Info Sets: ${coreStrategy.size()}")
                val totalVisits = coreStrategy.getAllInfoSets().sumOf { it.getVisitCount() }
                appendLine("    Total Visits: $totalVisits")

                val avgActions = if (coreStrategy.size() > 0) {
                    coreStrategy.getAllInfoSets().sumOf { it.numActions }.toDouble() / coreStrategy.size()
                } else {
                    0.0
                }
                appendLine("    Avg Actions per Info Set: ${"%.2f".format(avgActions)}")
            }
        }
    }

    /**
     * Format complete strategy breakdown by info set.
     */
    fun formatFullStrategy(
        strategy: StrategyProfile,
        coreStrategy: com.nlhsolver.core.StrategyProfile?,
        limit: Int?,
        format: Format = Format.TEXT
    ): String {
        return when (format) {
            Format.JSON -> formatFullStrategyJson(strategy, coreStrategy, limit)
            Format.TEXT -> formatFullStrategyText(strategy, coreStrategy, limit)
        }
    }

    private fun formatFullStrategyJson(
        strategy: StrategyProfile,
        coreStrategy: com.nlhsolver.core.StrategyProfile?,
        limit: Int?
    ): String {
        if (coreStrategy == null) {
            return "{\"error\": \"Strategy data not loaded\"}"
        }

        val infoSets = coreStrategy.getAllInfoSets().toList()
        val limitedInfoSets = if (limit != null) infoSets.take(limit) else infoSets

        return buildString {
            appendLine("{")
            appendLine("  \"strategyId\": \"${strategy.strategyId}\",")
            appendLine("  \"exploitability\": ${strategy.exploitability},")
            appendLine("  \"infoSetCount\": ${infoSets.size},")
            appendLine("  \"infoSets\": [")

            limitedInfoSets.forEachIndexed { index, infoSetStrategy ->
                val avgStrategy = infoSetStrategy.getAverageStrategy()
                val comma = if (index < limitedInfoSets.size - 1) "," else ""

                appendLine("    {")
                appendLine("      \"infoSet\": \"${infoSetStrategy.infoSet}\",")
                appendLine("      \"numActions\": ${infoSetStrategy.numActions},")
                appendLine("      \"visits\": ${infoSetStrategy.getVisitCount()},")
                appendLine("      \"strategy\": [")

                avgStrategy.forEachIndexed { actionIdx, prob ->
                    val actionComma = if (actionIdx < avgStrategy.size - 1) "," else ""
                    appendLine("        ${prob}$actionComma")
                }

                appendLine("      ]")
                append("    }$comma")
                if (index < limitedInfoSets.size - 1) appendLine()
            }

            appendLine()
            appendLine("  ]")
            appendLine("}")
        }
    }

    private fun formatFullStrategyText(
        strategy: StrategyProfile,
        coreStrategy: com.nlhsolver.core.StrategyProfile?,
        limit: Int?
    ): String {
        if (coreStrategy == null) {
            return "ERROR: Strategy data not available. Try running with --full flag."
        }

        val infoSets = coreStrategy.getAllInfoSets().toList()
        val limitedInfoSets = if (limit != null) infoSets.take(limit) else infoSets

        return buildString {
            appendLine("Strategy: ${strategy.strategyId}")
            appendLine("  Exploitability: ${"%.6f".format(strategy.exploitability)}%")
            appendLine("  Total Info Sets: ${infoSets.size}")
            if (limit != null) {
                appendLine("  Showing: ${limitedInfoSets.size} (limited)")
            }
            appendLine()
            appendLine("=" .repeat(80))
            appendLine()

            limitedInfoSets.forEachIndexed { index, infoSetStrategy ->
                appendLine("Info Set ${index + 1}:")

                // Parse and display info set components
                val infoSetParts = parseInfoSet(infoSetStrategy.infoSet)
                infoSetParts.forEach { (key, value) ->
                    appendLine("  $key: $value")
                }
                appendLine("  Visits: ${infoSetStrategy.getVisitCount()}")
                appendLine()

                // Display strategy
                appendLine("  Strategy:")
                val avgStrategy = infoSetStrategy.getAverageStrategy()
                val actionNames = getActionNames(infoSetStrategy.numActions)

                avgStrategy.forEachIndexed { actionIdx, prob ->
                    val actionName = actionNames.getOrNull(actionIdx) ?: "Action$actionIdx"
                    val percentage = "%.2f".format(prob * 100)
                    val bar = "█".repeat((prob * 40).toInt())
                    appendLine("    ${actionName.padEnd(12)} $percentage%  $bar")
                }

                appendLine()
                if (index < limitedInfoSets.size - 1) {
                    appendLine("-".repeat(80))
                    appendLine()
                }
            }

            appendLine("=" .repeat(80))
        }
    }

    /**
     * Parse info set string into key-value pairs.
     */
    private fun parseInfoSet(infoSet: String): Map<String, String> {
        val parts = mutableMapOf<String, String>()

        // Example: "p0:bucket=unknown:street=PREFLOP:board=:pot=1.5:history=BTN:CHECK"
        val segments = infoSet.split(":")

        for (segment in segments) {
            if (segment.contains("=")) {
                val (key, value) = segment.split("=", limit = 2)
                parts[key.capitalize()] = if (value.isEmpty()) "(empty)" else value
            } else {
                // Handle segments without '=' (like "p0" or action names in history)
                if (segment.startsWith("p")) {
                    parts["Player"] = segment
                } else if (parts.containsKey("History")) {
                    parts["History"] = parts["History"]!! + ":" + segment
                }
            }
        }

        return parts
    }

    /**
     * Get common action names based on number of actions.
     */
    private fun getActionNames(numActions: Int): List<String> {
        // Common poker action patterns
        return when (numActions) {
            1 -> listOf("Check")
            2 -> listOf("Fold", "Call")  // or Check, Bet depending on context
            3 -> listOf("Fold", "Call", "Raise")  // or Check, Bet, Raise
            4 -> listOf("Fold", "Call", "Raise", "All-In")
            else -> (0 until numActions).map { "Action$it" }
        }
    }

    private fun String.capitalize(): String {
        return this.replaceFirstChar { if (it.isLowerCase()) it.titlecase() else it.toString() }
    }

    // ========== Phase 2.5/2.6: Range Visualization (T204, T220) ==========

    /**
     * Format a range as a 13x13 grid.
     *
     * The grid follows standard poker range notation:
     * - Diagonal: Pairs (AA, KK, ..., 22)
     * - Above diagonal: Suited hands (AKs, AQs, ...)
     * - Below diagonal: Offsuit hands (AKo, AQo, ...)
     *
     * Phase 2.6 extends this to support flop ranges with board display.
     */
    fun formatPreflopRange(
        rangeResults: Map<String, CanonicalHandQueryResult>,
        position: Position,
        format: Format = Format.TEXT
    ): String {
        return when (format) {
            Format.JSON -> formatPreflopRangeJson(rangeResults, position)
            Format.TEXT -> formatPreflopRangeText(rangeResults, position)
        }
    }

    private fun formatPreflopRangeJson(
        rangeResults: Map<String, CanonicalHandQueryResult>,
        position: Position
    ): String {
        // Get street and board info from first result (all should have same)
        val firstResult = rangeResults.values.firstOrNull()
        val street = firstResult?.street ?: com.nlhsolver.poker.Street.PREFLOP
        val board = firstResult?.board ?: emptyList()

        return buildString {
            appendLine("{")
            appendLine("  \"position\": \"$position\",")
            appendLine("  \"street\": \"$street\",")
            if (board.isNotEmpty()) {
                appendLine("  \"board\": \"${formatBoard(board)}\",")
            }
            appendLine("  \"hands\": {")

            rangeResults.entries.forEachIndexed { index, (notation, result) ->
                val comma = if (index < rangeResults.size - 1) "," else ""
                appendLine("    \"$notation\": {")
                appendLine("      \"raise\": ${result.raiseFrequency},")
                appendLine("      \"call\": ${result.callFrequency},")
                appendLine("      \"fold\": ${result.foldFrequency}")
                append("    }$comma")
                if (index < rangeResults.size - 1) appendLine()
            }

            appendLine()
            appendLine("  }")
            appendLine("}")
        }
    }

    private fun formatPreflopRangeText(
        rangeResults: Map<String, CanonicalHandQueryResult>,
        position: Position
    ): String {
        val ranks = listOf(
            Rank.ACE, Rank.KING, Rank.QUEEN, Rank.JACK, Rank.TEN,
            Rank.NINE, Rank.EIGHT, Rank.SEVEN, Rank.SIX, Rank.FIVE,
            Rank.FOUR, Rank.THREE, Rank.TWO
        )

        // Get street and board info from first result
        val firstResult = rangeResults.values.firstOrNull()
        val street = firstResult?.street ?: com.nlhsolver.poker.Street.PREFLOP
        val board = firstResult?.board ?: emptyList()

        return buildString {
            // Title with street and board
            if (street == com.nlhsolver.poker.Street.PREFLOP) {
                appendLine("Preflop Range for $position")
            } else {
                appendLine("$street Range for $position")
                if (board.isNotEmpty()) {
                    appendLine("Board: ${formatBoardPretty(board)}")
                }
            }
            appendLine("=" .repeat(70))
            appendLine()
            appendLine("Legend: R=Raise% C=Call% F=Fold%  |  Green=Raise  Yellow=Call  Red=Fold")
            appendLine()

            // Header row
            append("     ")
            ranks.forEach { rank -> append(" ${rank.symbol}    ") }
            appendLine()
            appendLine("-".repeat(70))

            // Grid rows
            for ((rowIdx, rowRank) in ranks.withIndex()) {
                append("${rowRank.symbol}  | ")

                for ((colIdx, colRank) in ranks.withIndex()) {
                    // Determine hand notation
                    val notation = when {
                        rowIdx == colIdx -> {
                            // Pair (diagonal)
                            "${rowRank.symbol}${colRank.symbol}"
                        }
                        rowIdx < colIdx -> {
                            // Suited (above diagonal): row rank is higher
                            "${rowRank.symbol}${colRank.symbol}s"
                        }
                        else -> {
                            // Offsuit (below diagonal): col rank is higher
                            "${colRank.symbol}${rowRank.symbol}o"
                        }
                    }

                    val result = rangeResults[notation]
                    val cell = if (result != null && result.found) {
                        formatRangeCell(result)
                    } else {
                        "  -  "
                    }

                    append("$cell ")
                }
                appendLine()
            }

            appendLine()
            appendLine("-".repeat(70))
            appendLine()

            // Summary statistics
            val foundResults = rangeResults.values.filter { it.found }
            if (foundResults.isNotEmpty()) {
                val avgRaise = foundResults.map { it.raiseFrequency }.average() * 100
                val avgCall = foundResults.map { it.callFrequency }.average() * 100
                val avgFold = foundResults.map { it.foldFrequency }.average() * 100

                appendLine("Summary:")
                appendLine("  Hands with data: ${foundResults.size}/169")
                appendLine("  Average Raise: ${"%.1f".format(avgRaise)}%")
                appendLine("  Average Call:  ${"%.1f".format(avgCall)}%")
                appendLine("  Average Fold:  ${"%.1f".format(avgFold)}%")
            }
        }
    }

    /**
     * Format a single cell in the range grid.
     * Shows the dominant action frequency.
     */
    private fun formatRangeCell(result: CanonicalHandQueryResult): String {
        val raise = result.raiseFrequency
        val call = result.callFrequency
        val fold = result.foldFrequency

        // Determine dominant action
        return when {
            raise >= call && raise >= fold -> {
                val pct = (raise * 100).toInt().coerceIn(0, 99)
                "R${"%2d".format(pct)} "
            }
            call >= raise && call >= fold -> {
                val pct = (call * 100).toInt().coerceIn(0, 99)
                "C${"%2d".format(pct)} "
            }
            else -> {
                val pct = (fold * 100).toInt().coerceIn(0, 99)
                "F${"%2d".format(pct)} "
            }
        }
    }

    /**
     * Format a single canonical hand query result.
     */
    fun formatCanonicalHandQuery(result: CanonicalHandQueryResult, format: Format = Format.TEXT): String {
        return when (format) {
            Format.JSON -> formatCanonicalHandQueryJson(result)
            Format.TEXT -> formatCanonicalHandQueryText(result)
        }
    }

    private fun formatCanonicalHandQueryJson(result: CanonicalHandQueryResult): String {
        return buildString {
            appendLine("{")
            appendLine("  \"hand\": \"${result.handNotation}\",")
            appendLine("  \"position\": \"${result.position}\",")
            appendLine("  \"street\": \"${result.street}\",")
            if (result.board.isNotEmpty()) {
                appendLine("  \"board\": \"${formatBoard(result.board)}\",")
            }
            appendLine("  \"bucketId\": ${result.bucketId},")
            appendLine("  \"found\": ${result.found},")
            appendLine("  \"infoSetsMatched\": ${result.infoSetsMatched},")
            appendLine("  \"actions\": {")
            result.actionProbabilities.entries.forEachIndexed { index, (action, prob) ->
                val comma = if (index < result.actionProbabilities.size - 1) "," else ""
                appendLine("    \"$action\": $prob$comma")
            }
            appendLine("  }")
            appendLine("}")
        }
    }

    private fun formatCanonicalHandQueryText(result: CanonicalHandQueryResult): String {
        return buildString {
            appendLine("Hand: ${result.handNotation}")
            appendLine("  Position: ${result.position}")
            appendLine("  Street: ${result.street}")
            if (result.board.isNotEmpty()) {
                appendLine("  Board: ${formatBoardPretty(result.board)}")
            }
            appendLine("  Bucket ID: ${result.bucketId}")

            if (!result.found) {
                appendLine("  Status: No strategy data found")
                return@buildString
            }

            appendLine("  Info Sets Matched: ${result.infoSetsMatched}")
            appendLine()
            appendLine("  Action Frequencies:")

            val actions = listOf("raise" to result.raiseFrequency, "call" to result.callFrequency, "fold" to result.foldFrequency, "check" to result.checkFrequency)
                .filter { it.second >= 0.005 }  // Hide actions below 0.5%
                .sortedByDescending { it.second }

            for ((action, freq) in actions) {
                val pct = "%.1f".format(freq * 100)
                val bar = "█".repeat((freq * 30).toInt())
                appendLine("    ${action.padEnd(8)} $pct%  $bar")
            }
        }
    }

    /**
     * Format board cards as compact string (e.g., "Ks7h2d").
     */
    private fun formatBoard(board: List<com.nlhsolver.poker.Card>): String {
        return board.joinToString("") { "${it.rank.symbol}${it.suit.symbol}" }
    }

    /**
     * Format board cards with Unicode suit symbols (e.g., "K♠7♥2♦").
     */
    private fun formatBoardPretty(board: List<com.nlhsolver.poker.Card>): String {
        return board.joinToString(" ") { card ->
            val suitSymbol = when (card.suit) {
                com.nlhsolver.poker.Suit.SPADES -> "♠"
                com.nlhsolver.poker.Suit.HEARTS -> "♥"
                com.nlhsolver.poker.Suit.DIAMONDS -> "♦"
                com.nlhsolver.poker.Suit.CLUBS -> "♣"
            }
            "${card.rank.symbol}$suitSymbol"
        }
    }
}
