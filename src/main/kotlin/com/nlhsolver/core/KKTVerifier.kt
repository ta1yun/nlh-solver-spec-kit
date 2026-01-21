package com.nlhsolver.core

/**
 * Verifies Karush-Kuhn-Tucker (KKT) conditions for Nash equilibrium.
 *
 * In a Nash equilibrium:
 * - Actions played with positive probability must have equal EV (indifference)
 * - Actions not played must have EV <= mixed strategy EV
 *
 * This class computes action EVs by traversing the game tree and checks
 * these conditions at each information set.
 */
class KKTVerifier(
    private val numPlayers: Int = 2
) {
    /**
     * Result of KKT verification for a single info set.
     */
    data class InfoSetKKTResult(
        val infoSet: String,
        val player: Int,
        val reachProbability: Double,
        val actionLabels: List<String>,
        val actionProbabilities: DoubleArray,
        val actionEVs: DoubleArray,
        val mixedEV: Double,
        val violations: List<String>
    ) {
        val passed: Boolean get() = violations.isEmpty()

        fun summary(): String = buildString {
            append("InfoSet: $infoSet (player $player, reach=${String.format("%.4f", reachProbability)})\n")
            for (i in actionLabels.indices) {
                val prob = String.format("%.1f%%", actionProbabilities[i] * 100)
                val ev = String.format("%.4f", actionEVs[i])
                append("  ${actionLabels[i]}: p=$prob, EV=$ev\n")
            }
            append("  Mixed EV: ${String.format("%.4f", mixedEV)}\n")
            if (violations.isNotEmpty()) {
                append("  VIOLATIONS:\n")
                violations.forEach { append("    - $it\n") }
            }
        }
    }

    /**
     * Result of bluff indifference test.
     */
    data class BluffIndifferenceResult(
        val infoSet: String,
        val hand: String,
        val bluffProbability: Double,
        val bluffEV: Double,
        val isIndifferent: Boolean,
        val violation: String?
    )

    /**
     * Result of MDF frequency test.
     */
    data class MDFResult(
        val infoSet: String,
        val hand: String,
        val foldFrequency: Double,
        val expectedMDF: Double,
        val actualDefenseFrequency: Double,
        val violation: String?
    )

    /**
     * Full KKT verification result.
     */
    data class KKTVerificationResult(
        val infoSetResults: List<InfoSetKKTResult>,
        val bluffResults: List<BluffIndifferenceResult>,
        val mdfResults: List<MDFResult>,
        val config: VerificationConfig
    ) {
        val allKKTPassed: Boolean get() = infoSetResults.all { it.passed }
        val allBluffsPassed: Boolean get() = bluffResults.all { it.violation == null }
        val allMDFPassed: Boolean get() = mdfResults.all { it.violation == null }

        val failedInfoSets: List<InfoSetKKTResult> get() = infoSetResults.filter { !it.passed }
        val failedBluffs: List<BluffIndifferenceResult> get() = bluffResults.filter { it.violation != null }
        val failedMDF: List<MDFResult> get() = mdfResults.filter { it.violation != null }
    }

    /**
     * Configuration for KKT verification.
     */
    data class VerificationConfig(
        val tau: Double = 0.01,           // Minimum probability threshold for "played" actions
        val epsEV: Double = 0.5,          // EV tolerance (in chips) for indifference
        val epsMDF: Double = 0.10,        // MDF tolerance (10% of theoretical)
        val reachThreshold: Double = 0.001, // Minimum reach probability to include info set
        val potSize: Double = 20.0        // Pot size for normalizing EVs
    )

    /**
     * Compute action EVs for all info sets by traversing the game tree.
     *
     * Returns a map from info set -> (action index -> EV)
     */
    fun computeActionEVs(
        rootState: GameState,
        strategyProfile: StrategyProfile
    ): Map<String, ActionEVData> {
        val result = mutableMapOf<String, ActionEVData>()
        computeActionEVsRecursive(
            state = rootState,
            strategyProfile = strategyProfile,
            reachProbs = DoubleArray(numPlayers) { 1.0 },
            result = result
        )
        return result
    }

    /**
     * Data class for action EV information at an info set.
     */
    data class ActionEVData(
        val infoSet: String,
        val player: Int,
        val reachProbability: Double,
        val actionLabels: List<String>,
        val actionEVs: DoubleArray,
        val strategy: DoubleArray
    ) {
        val mixedEV: Double get() = actionEVs.indices.sumOf { strategy[it] * actionEVs[it] }
    }

    /**
     * Recursive helper to compute action EVs.
     */
    private fun computeActionEVsRecursive(
        state: GameState,
        strategyProfile: StrategyProfile,
        reachProbs: DoubleArray,
        result: MutableMap<String, ActionEVData>
    ): DoubleArray {
        if (state.isTerminal()) {
            return state.getUtility()
        }

        val currentPlayer = state.currentPlayer()
            ?: error("Non-terminal state must have a current player")

        val infoSet = state.getInfoSet()
        val actions = state.getLegalActions()
        val numActions = actions.size

        // Get strategy for this info set
        val infoSetStrategy = strategyProfile.getInfoSetStrategy(infoSet, numActions)
        val strategy = infoSetStrategy.getAverageStrategy()

        // Compute EVs for each action
        val actionEVs = DoubleArray(numActions)
        val nodeUtility = DoubleArray(numPlayers)

        for (i in actions.indices) {
            val nextState = state.applyAction(actions[i])
            val nextReachProbs = reachProbs.copyOf()
            nextReachProbs[currentPlayer] *= strategy[i]

            val actionUtility = computeActionEVsRecursive(
                nextState, strategyProfile, nextReachProbs, result
            )

            actionEVs[i] = actionUtility[currentPlayer]
            for (p in 0 until numPlayers) {
                nodeUtility[p] += strategy[i] * actionUtility[p]
            }
        }

        // Store action EV data for this info set
        // Use reach probability excluding current player's contribution
        val opponentReach = reachProbs.filterIndexed { idx, _ -> idx != currentPlayer }
            .fold(1.0) { acc, prob -> acc * prob }

        val existingData = result[infoSet]
        if (existingData == null || opponentReach > existingData.reachProbability) {
            result[infoSet] = ActionEVData(
                infoSet = infoSet,
                player = currentPlayer,
                reachProbability = opponentReach,
                actionLabels = actions.map { it.getActionId() },
                actionEVs = actionEVs,
                strategy = strategy
            )
        }

        return nodeUtility
    }

    /**
     * (A) Core KKT test: Verify indifference conditions.
     *
     * For each action a in info set I:
     * - If p[a] > tau: |EV[a] - EV_mix| < eps (indifference)
     * - If p[a] <= tau: EV[a] <= EV_mix + eps (not better than mix)
     */
    fun verifyKKTConditions(
        actionEVData: Map<String, ActionEVData>,
        config: VerificationConfig
    ): List<InfoSetKKTResult> {
        return actionEVData.values
            .filter { it.reachProbability >= config.reachThreshold }  // (D) Reach-aware filtering
            .map { data ->
                val violations = mutableListOf<String>()
                val mixedEV = data.mixedEV

                for (i in data.actionEVs.indices) {
                    val prob = data.strategy[i]
                    val ev = data.actionEVs[i]
                    val action = data.actionLabels[i]

                    if (prob > config.tau) {
                        // Played action: should be indifferent
                        val diff = kotlin.math.abs(ev - mixedEV)
                        if (diff > config.epsEV) {
                            violations.add(
                                "$action: played (p=${String.format("%.1f%%", prob * 100)}) " +
                                "but EV diff = ${String.format("%.4f", diff)} > eps (${config.epsEV})"
                            )
                        }
                    } else {
                        // Not played: should not be strictly better
                        if (ev > mixedEV + config.epsEV) {
                            violations.add(
                                "$action: not played (p=${String.format("%.1f%%", prob * 100)}) " +
                                "but EV = ${String.format("%.4f", ev)} > mix + eps (${String.format("%.4f", mixedEV + config.epsEV)})"
                            )
                        }
                    }
                }

                InfoSetKKTResult(
                    infoSet = data.infoSet,
                    player = data.player,
                    reachProbability = data.reachProbability,
                    actionLabels = data.actionLabels,
                    actionProbabilities = data.strategy,
                    actionEVs = data.actionEVs,
                    mixedEV = mixedEV,
                    violations = violations
                )
            }
    }

    /**
     * (B) Bluff indifference test: Bluffs played with positive frequency should have EV ≈ 0.
     *
     * @param actionEVData Action EV data from computeActionEVs
     * @param bluffInfoSets Info sets corresponding to bluff hands (e.g., "65o", "53o")
     * @param betActionIndex Index of the bet action
     * @param config Verification config
     */
    fun verifyBluffIndifference(
        actionEVData: Map<String, ActionEVData>,
        bluffHandPatterns: List<String>,
        betActionId: String,
        config: VerificationConfig
    ): List<BluffIndifferenceResult> {
        return actionEVData.values
            .filter { data ->
                data.reachProbability >= config.reachThreshold &&
                bluffHandPatterns.any { pattern -> data.infoSet.contains(pattern) }
            }
            .mapNotNull { data ->
                val betIndex = data.actionLabels.indexOf(betActionId)
                if (betIndex < 0) return@mapNotNull null

                val bluffProb = data.strategy[betIndex]
                val bluffEV = data.actionEVs[betIndex]

                // Extract hand from info set
                val handMatch = Regex("hand=([^:]+)").find(data.infoSet)
                val hand = handMatch?.groupValues?.get(1) ?: "unknown"

                val violation = if (bluffProb > config.tau && kotlin.math.abs(bluffEV) > config.epsEV) {
                    "Bluff $hand played at ${String.format("%.1f%%", bluffProb * 100)} " +
                    "but EV = ${String.format("%.4f", bluffEV)} ≠ 0 (tolerance: ${config.epsEV})"
                } else null

                BluffIndifferenceResult(
                    infoSet = data.infoSet,
                    hand = hand,
                    bluffProbability = bluffProb,
                    bluffEV = bluffEV,
                    isIndifferent = kotlin.math.abs(bluffEV) <= config.epsEV,
                    violation = violation
                )
            }
    }

    /**
     * (C) MDF frequency test: When bluffs are played, opponent should fold at exactly MDF.
     *
     * MDF = Pot / (Pot + Bet)
     * Defense frequency = 1 - fold frequency
     *
     * @param actionEVData Action EV data
     * @param defenderInfoSets Info sets for the defending player facing a bet
     * @param foldActionId Action ID for fold
     * @param potSize Current pot size
     * @param betSize Bet size being faced
     * @param config Verification config
     */
    fun verifyMDFFrequency(
        actionEVData: Map<String, ActionEVData>,
        defenderHandPatterns: List<String>,
        foldActionId: String,
        potSize: Double,
        betSize: Double,
        config: VerificationConfig
    ): List<MDFResult> {
        val expectedMDF = potSize / (potSize + betSize)

        return actionEVData.values
            .filter { data ->
                data.reachProbability >= config.reachThreshold &&
                defenderHandPatterns.any { pattern -> data.infoSet.contains(pattern) } &&
                data.actionLabels.contains(foldActionId)
            }
            .mapNotNull { data ->
                val foldIndex = data.actionLabels.indexOf(foldActionId)
                if (foldIndex < 0) return@mapNotNull null

                val foldFreq = data.strategy[foldIndex]
                val defenseFreq = 1.0 - foldFreq

                val handMatch = Regex("hand=([^:]+)").find(data.infoSet)
                val hand = handMatch?.groupValues?.get(1) ?: "unknown"

                val violation = if (kotlin.math.abs(defenseFreq - expectedMDF) > config.epsMDF) {
                    "Defender $hand: defense freq = ${String.format("%.1f%%", defenseFreq * 100)} " +
                    "but MDF = ${String.format("%.1f%%", expectedMDF * 100)} (tolerance: ${config.epsMDF * 100}%)"
                } else null

                MDFResult(
                    infoSet = data.infoSet,
                    hand = hand,
                    foldFrequency = foldFreq,
                    expectedMDF = expectedMDF,
                    actualDefenseFrequency = defenseFreq,
                    violation = violation
                )
            }
    }

    /**
     * Run full KKT verification suite.
     */
    fun verify(
        rootState: GameState,
        strategyProfile: StrategyProfile,
        bluffHandPatterns: List<String> = emptyList(),
        defenderHandPatterns: List<String> = emptyList(),
        betActionId: String = "bet",
        foldActionId: String = "fold",
        potSize: Double = 20.0,
        betSize: Double = 10.0,
        config: VerificationConfig = VerificationConfig()
    ): KKTVerificationResult {
        val actionEVData = computeActionEVs(rootState, strategyProfile)

        val kktResults = verifyKKTConditions(actionEVData, config)

        val bluffResults = if (bluffHandPatterns.isNotEmpty()) {
            verifyBluffIndifference(actionEVData, bluffHandPatterns, betActionId, config)
        } else emptyList()

        val mdfResults = if (defenderHandPatterns.isNotEmpty()) {
            verifyMDFFrequency(actionEVData, defenderHandPatterns, foldActionId, potSize, betSize, config)
        } else emptyList()

        return KKTVerificationResult(
            infoSetResults = kktResults,
            bluffResults = bluffResults,
            mdfResults = mdfResults,
            config = config
        )
    }
}
