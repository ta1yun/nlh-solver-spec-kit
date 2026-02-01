package com.nlhsolver.solver

import com.nlhsolver.common.MemoryGuard
import com.nlhsolver.common.logger
import com.nlhsolver.common.logSolveStart
import com.nlhsolver.common.logSolveComplete
import com.nlhsolver.core.*
import com.nlhsolver.poker.Card
import java.nio.file.Path
import java.nio.file.Paths
import java.time.Instant
import java.util.UUID

/**
 * Orchestrates the end-to-end solve process (T047-T048, T117).
 *
 * Coordinates:
 * 1. Game tree construction from configuration
 * 2. CFR+ execution with convergence monitoring
 * 3. Strategy extraction and persistence
 *
 * Supports both synchronous (blocking) and asynchronous execution.
 * Uses structured logging for observability.
 */
class SolveOrchestrator(
    private val strategyExtractor: StrategyExtractor = StrategyExtractor(),
    private val strategyRepository: com.nlhsolver.storage.StrategyRepository = com.nlhsolver.storage.StrategyRepository()
) {
    private val logger = logger()
    /**
     * Execute a solve synchronously (blocking until completion).
     *
     * This is the main entry point for User Story 1 (MVP).
     *
     * @param configuration Solve configuration parameters
     * @param progressCallback Optional callback for progress updates
     * @return SolveResult with final strategy and metrics
     */
    fun solveSynchronous(
        configuration: SolveConfiguration,
        progressCallback: ((JobProgress) -> Unit)? = null
    ): SolveResult {
        // Validate configuration
        val validationResult = ConfigurationValidator.validate(configuration)
        if (validationResult is ValidationResult.Failure) {
            throw IllegalArgumentException("Invalid configuration: ${validationResult.errors.joinToString(", ")}")
        }

        // T115: Check memory before starting solve (OOM graceful degradation)
        val estimatedMemoryMB = MemoryGuard.estimateMemoryRequired(
            configuration.handAbstraction.numBuckets.takeIf { configuration.handAbstraction.mode != AbstractionMode.NONE }
        )
        logger.info("Memory check",
            "estimated" to "${estimatedMemoryMB}MB",
            "stats" to MemoryGuard.getMemoryStats()
        )
        MemoryGuard.checkSufficientMemory(requiredMB = estimatedMemoryMB)

        // Create CFR solver
        val cfrSolver = CFRSolver(
            numPlayers = configuration.numPlayers,
            enableCFRPlus = true,  // Always use CFR+ for MVP
            regretDiscountFactor = 1.0  // No discounting (validated)
        )

        // Create exploitability calculator
        val exploitabilityCalculator = ExploitabilityCalculator(configuration.numPlayers)

        // Create convergence monitor
        val convergenceMonitor = ConvergenceMonitor(
            criteria = configuration.convergenceCriteria,
            exploitabilityCalculator = exploitabilityCalculator
        )

        // Phase 2.7 (T241): Board canonicalization for suit isomorphism
        // Use canonical board to reduce equivalent boards to a single representation
        val (effectiveConfig, boardCanonicalizer) = if (configuration.board.isNotEmpty()) {
            configuration.withCanonicalBoard()
        } else {
            Pair(configuration, com.nlhsolver.poker.BoardCanonicalizer.identity())
        }

        // Unified Range-Based Solving: Generate weighted matchups from ranges
        // Works for all streets (PREFLOP, FLOP, TURN, RIVER)
        // For quick testing, limit matchups via NLH_MAX_MATCHUPS environment variable
        val maxMatchups = System.getenv("NLH_MAX_MATCHUPS")?.toIntOrNull()
        val allMatchupsRaw = com.nlhsolver.core.StartingHandSampler.generateMatchupsFromRanges(
            street = effectiveConfig.startingStreet,
            board = effectiveConfig.board,
            btnRange = effectiveConfig.btnRange,
            bbRange = effectiveConfig.bbRange
        )
        val allMatchups = if (maxMatchups != null && maxMatchups > 0) {
            logger.warn("TEST MODE - Limiting matchups", "limit" to maxMatchups)
            allMatchupsRaw.take(maxMatchups)
        } else {
            allMatchupsRaw
        }
        val totalWeight = allMatchups.sumOf { it.weight }

        // Determine effective abstraction mode based on range sizes
        val btnRangeSize = (configuration.btnRange as? HandRange.WeightedRange)?.size() ?: 169
        val bbRangeSize = (configuration.bbRange as? HandRange.WeightedRange)?.size() ?: 169
        val effectiveMode = configuration.handAbstraction.effectiveMode(btnRangeSize, bbRangeSize)
        val numBuckets = configuration.handAbstraction.numBuckets

        // Create root states with weight information for each matchup
        data class WeightedRootState(
            val state: PokerGameState,
            val matchup: com.nlhsolver.core.StartingHandSampler.WeightedMatchup,
            val normalizedWeight: Double
        )

        val weightedStates = allMatchups.map { matchup ->
            WeightedRootState(
                state = com.nlhsolver.core.StartingHandSampler.createGameState(
                    street = configuration.startingStreet,
                    board = configuration.board,
                    btnHand = matchup.btnCards,
                    bbHand = matchup.bbCards,
                    btnStack = configuration.stackSizes[com.nlhsolver.poker.Position.BTN] ?: 50.0,
                    bbStack = configuration.stackSizes[com.nlhsolver.poker.Position.BB] ?: 50.0,
                    pot = configuration.pot,
                    btnInvested = configuration.btnInvested,
                    bbInvested = configuration.bbInvested,
                    abstractionMode = effectiveMode,
                    numBuckets = numBuckets,
                    maxRaisesPerStreet = configuration.maxRaisesPerStreet
                ),
                matchup = matchup,
                normalizedWeight = matchup.weight / totalWeight
            )
        }

        logger.info("Starting unified range-based solve",
            "street" to configuration.startingStreet.name,
            "board" to if (configuration.board.isEmpty()) "(empty)" else configuration.board.joinToString(""),
            "matchups" to allMatchups.size,
            "totalWeight" to String.format("%.2f", totalWeight),
            "pot" to configuration.pot,
            "abstraction" to if (effectiveMode == AbstractionMode.EQUITY_BUCKETING) "${effectiveMode.name} ($numBuckets buckets)" else effectiveMode.name
        )

        if (effectiveConfig.board != configuration.board && configuration.board.isNotEmpty()) {
            logger.info("Using canonical board (suit isomorphism)",
                "original" to configuration.board.joinToString(""),
                "canonical" to effectiveConfig.board.joinToString("")
            )
        }

        // Start convergence monitoring
        convergenceMonitor.start()

        var currentIteration = 0
        var converged = false
        var convergenceStatus: ConvergenceStatus = ConvergenceStatus.NotConverged

        // Main CFR iteration loop
        while (!converged) {
            currentIteration++

            // Run one CFR iteration on all starting hands with combo weighting
            // Each matchup is weighted by its combo frequency
            for (weightedState in weightedStates) {
                cfrSolver.train(weightedState.state, iterations = 1)
            }

            // Check convergence (this is expensive, so only done at intervals)
            // Calculate weighted average exploitability across all matchups
            var totalWeightedExploitability = 0.0
            var weightSum = 0.0

            for (weightedState in weightedStates) {
                val exploitability = exploitabilityCalculator.calculateExploitability(
                    weightedState.state,
                    cfrSolver.getStrategyProfile()
                )
                totalWeightedExploitability += exploitability * weightedState.normalizedWeight
                weightSum += weightedState.normalizedWeight
            }

            val avgExploitabilityChips = if (weightSum > 0) totalWeightedExploitability / weightSum else 0.0
            // Normalize exploitability by pot size to get a percentage (e.g., 3.7 chips / 20 pot = 0.185 = 18.5%)
            val avgExploitability = avgExploitabilityChips / configuration.pot

            // Debug: Log exploitability on first check
            if (currentIteration == configuration.convergenceCriteria.evaluationFrequency) {
                logger.debug("First exploitability check",
                    "iteration" to currentIteration,
                    "exploitability" to String.format("%.4f", avgExploitability),
                    "exploitabilityPct" to String.format("%.2f%%", avgExploitability * 100),
                    "matchups" to weightedStates.size
                )
            }

            // Use first root state for convergence check, but override exploitability with average
            convergenceStatus = convergenceMonitor.checkConvergenceWithExploitability(
                currentIteration = currentIteration,
                exploitability = avgExploitability
            )

            // Update progress callback if provided
            if (currentIteration % 1000 == 0) {
                val iterationSpeed = convergenceMonitor.getIterationSpeed(currentIteration)
                val estimatedTimeRemaining = convergenceMonitor.getEstimatedTimeRemaining(iterationSpeed)

                val exploitability = convergenceMonitor.getBestExploitability()
                // Only report exploitability if it's a valid value
                val validExploitability = when {
                    exploitability.isNaN() || exploitability.isInfinite() -> null
                    exploitability < 0.0 || exploitability >= Double.MAX_VALUE -> null
                    else -> exploitability
                }
                progressCallback?.invoke(
                    JobProgress(
                        iterationsCompleted = currentIteration.toLong(),
                        currentExploitability = validExploitability,
                        estimatedIterationsRemaining = convergenceMonitor.getEstimatedIterationsRemaining()?.toLong(),
                        estimatedTimeRemainingSeconds = estimatedTimeRemaining
                    )
                )
            }

            // Check if converged
            if (convergenceStatus is ConvergenceStatus.Converged) {
                converged = true
            }
        }

        // Create solve result
        val finalStatus = convergenceStatus as ConvergenceStatus.Converged
        val jobId = UUID.randomUUID()

        // Normalize exploitability value (handle NaN, Infinity, and negative values)
        val normalizedExploitability = when {
            finalStatus.finalExploitability.isNaN() -> 100.0  // NaN -> worst case
            finalStatus.finalExploitability.isInfinite() -> 100.0  // Infinity -> worst case
            finalStatus.finalExploitability < 0.0 -> 0.0  // Negative -> best case (nash equilibrium)
            finalStatus.finalExploitability > 100.0 -> 100.0  // Too high -> cap at 100%
            else -> finalStatus.finalExploitability
        }

        // Get CFR strategy profile
        val cfrStrategyProfile = cfrSolver.getStrategyProfile()

        // Extract final strategy metadata
        val strategyProfile = strategyExtractor.extractStrategy(
            cfrStrategyProfile = cfrStrategyProfile,
            solveJobId = jobId,
            finalExploitability = normalizedExploitability
        )

        // Persist strategy to disk
        strategyRepository.save(strategyProfile)  // Save metadata
        strategyRepository.saveStrategyData(strategyProfile.strategyId, cfrStrategyProfile)  // Save full strategy data

        // Determine if we actually converged (exploitability met target)
        val actuallyConverged = normalizedExploitability <= configuration.convergenceCriteria.targetExploitability

        // Ensure completionType matches converged status
        val completionType = if (actuallyConverged) {
            CompletionType.CONVERGED
        } else {
            finalStatus.reason.toCompletionType()
        }

        return SolveResult(
            strategyProfileId = strategyProfile.strategyId,
            finalExploitability = normalizedExploitability,
            iterationsRun = finalStatus.iterations.toLong(),
            converged = actuallyConverged,
            completionType = completionType,
            executionTimeSeconds = finalStatus.elapsedSeconds,
            storagePathPb = Paths.get("data/strategies/${strategyProfile.strategyId}.pb.gz")
        )
    }

    /**
     * Estimate solve time based on configuration.
     *
     * This is a rough estimate based on empirical data.
     *
     * @param configuration Solve configuration
     * @return Estimated solve time in seconds
     */
    fun estimateSolveTime(configuration: SolveConfiguration): Long {
        // Rough estimate: 1000 iterations per second on average hardware
        // This would be calibrated with actual benchmarks
        val iterationsPerSecond = 1000.0
        val estimatedIterations = configuration.convergenceCriteria.maxIterations

        return (estimatedIterations / iterationsPerSecond).toLong()
    }

    /**
     * Validate that a configuration can be solved.
     *
     * @param configuration Solve configuration
     * @return ValidationResult indicating success or failure
     */
    fun validateConfiguration(configuration: SolveConfiguration): ValidationResult {
        return ConfigurationValidator.validate(configuration)
    }
}

/**
 * Represents progress during a solve execution.
 *
 * Used for callbacks and monitoring.
 */
data class SolveProgress(
    val iterationsCompleted: Long,
    val currentExploitability: Double?,
    val estimatedIterationsRemaining: Long?,
    val iterationSpeed: Double,
    val elapsedSeconds: Long
)
