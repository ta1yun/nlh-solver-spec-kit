package com.nlhsolver.solver

import com.nlhsolver.core.*
import com.nlhsolver.poker.Card
import java.nio.file.Path
import java.nio.file.Paths
import java.time.Instant
import java.util.UUID

/**
 * Orchestrates the end-to-end solve process (T047-T048).
 *
 * Coordinates:
 * 1. Game tree construction from configuration
 * 2. CFR+ execution with convergence monitoring
 * 3. Strategy extraction and persistence
 *
 * Supports both synchronous (blocking) and asynchronous execution.
 */
class SolveOrchestrator(
    private val strategyExtractor: StrategyExtractor = StrategyExtractor(),
    private val strategyRepository: com.nlhsolver.storage.StrategyRepository = com.nlhsolver.storage.StrategyRepository()
) {
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

        // Unified Range-Based Solving: Generate weighted matchups from ranges
        // Works for all streets (PREFLOP, FLOP, TURN, RIVER)
        // For quick testing, limit matchups via NLH_MAX_MATCHUPS environment variable
        val maxMatchups = System.getenv("NLH_MAX_MATCHUPS")?.toIntOrNull()
        val allMatchupsRaw = com.nlhsolver.core.StartingHandSampler.generateMatchupsFromRanges(
            street = configuration.startingStreet,
            board = configuration.board,
            btnRange = configuration.btnRange,
            bbRange = configuration.bbRange
        )
        val allMatchups = if (maxMatchups != null && maxMatchups > 0) {
            println("  [TEST MODE] Limiting to $maxMatchups matchups")
            allMatchupsRaw.take(maxMatchups)
        } else {
            allMatchupsRaw
        }
        val totalWeight = allMatchups.sumOf { it.weight }

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
                    bbInvested = configuration.bbInvested
                ),
                matchup = matchup,
                normalizedWeight = matchup.weight / totalWeight
            )
        }

        println("Unified range-based solving: ${configuration.startingStreet.name}")
        println("  Board: ${if (configuration.board.isEmpty()) "(empty)" else configuration.board.joinToString("")}")
        println("  Total matchups: ${allMatchups.size}")
        println("  Total weight: ${"%.2f".format(totalWeight)}")
        println("  Pot: ${configuration.pot}")

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

            val avgExploitability = if (weightSum > 0) totalWeightedExploitability / weightSum else 0.0

            // Debug: Log exploitability on first check
            if (currentIteration == configuration.convergenceCriteria.evaluationFrequency) {
                println("DEBUG: First exploitability check at iteration $currentIteration")
                println("  Weighted average exploitability: ${"%.4f".format(avgExploitability)}")
                println("  Total matchups evaluated: ${weightedStates.size}")
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
