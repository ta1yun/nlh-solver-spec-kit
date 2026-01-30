package com.nlhsolver.solver

/**
 * Solver for blueprint strategies (T130, T131).
 *
 * A blueprint solver wraps SolveOrchestrator with coarse abstraction settings
 * to quickly derive baseline preflop-to-river strategies. These strategies are
 * used as starting ranges for refinement solves on specific boards.
 *
 * Blueprint Characteristics:
 * - Coarse hand abstraction: 8-15 preflop buckets, 25/15/10 postflop buckets
 * - Aggressive board clustering: 100 flop clusters, 50 turn clusters
 * - Looser convergence: 1% exploitability (vs 0.5% for refinement)
 * - Fast solving: 1-2 hours for full game tree
 * - Acceptable EV loss: <2% of pot vs fine abstraction
 *
 * Usage:
 * ```kotlin
 * val config = BlueprintConfiguration.headsUp(stackSize = 100.0, ante = 0.0)
 * val solver = BlueprintSolver()
 * val result = solver.solve(config)
 * ```
 */
class BlueprintSolver(
    private val orchestrator: SolveOrchestrator = SolveOrchestrator()
) {
    /**
     * Solve a blueprint configuration (T131).
     *
     * This performs a full preflop-to-river solve with coarse abstraction.
     * All 169 canonical hands are included in both BTN and BB ranges.
     *
     * Expected solve time: 1-2 hours for 100bb stacks
     * Expected exploitability: <1%
     * Expected EV loss: <2% of pot
     *
     * @param config Blueprint configuration
     * @param progressCallback Optional callback for progress updates
     * @return SolveResult with blueprint strategy
     */
    fun solve(
        config: BlueprintConfiguration,
        progressCallback: ((JobProgress) -> Unit)? = null
    ): SolveResult {
        // Convert blueprint config to solve config
        val solveConfig = config.toSolveConfiguration()

        // Solve using orchestrator with full ranges (T131)
        // btnRange and bbRange default to all 169 canonical hands in SolveConfiguration
        return orchestrator.solveSynchronous(
            configuration = solveConfig,
            progressCallback = progressCallback
        )
    }

    /**
     * Solve a blueprint configuration asynchronously.
     *
     * Returns immediately with a job that can be used to track progress
     * and retrieve results later.
     *
     * @param config Blueprint configuration
     * @param progressCallback Optional callback for progress updates
     * @return SolveJob for tracking
     */
    suspend fun solveAsync(
        config: BlueprintConfiguration,
        progressCallback: ((JobProgress) -> Unit)? = null
    ): SolveJob {
        // Convert blueprint config to solve config
        val solveConfig = config.toSolveConfiguration()

        // TODO: Implement async solving via orchestrator
        // For now, delegate to synchronous solve
        val result = orchestrator.solveSynchronous(
            configuration = solveConfig,
            progressCallback = progressCallback
        )

        // Create completed job
        return SolveJob.create(solveConfig.configId)
            .start()
            .complete(result)
    }

    /**
     * Estimate solve time for a blueprint configuration.
     *
     * Provides a rough estimate based on:
     * - Stack depth (deeper = more game tree nodes)
     * - Abstraction granularity (more buckets = longer solve)
     * - Number of iterations (more iterations = longer solve)
     *
     * @param config Blueprint configuration
     * @return Estimated solve time in seconds
     */
    fun estimateSolveTime(config: BlueprintConfiguration): Long {
        val solveConfig = config.toSolveConfiguration()

        // Rough heuristics (very approximate)
        val stackSize = config.stackSizes.values.average()
        val preflopBuckets = config.preflopBuckets
        val maxIterations = solveConfig.convergenceCriteria.maxIterations

        // Base time: 1 hour for 100bb with 8 buckets and default iterations
        val baseTimeSeconds = 3600L

        // Adjust for stack size (deeper stacks = larger tree)
        val stackFactor = (stackSize / 100.0).coerceIn(0.5, 2.0)

        // Adjust for preflop buckets (more buckets = more info sets)
        val bucketFactor = when (preflopBuckets) {
            8 -> 1.0
            12 -> 1.3
            15 -> 1.5
            else -> 1.0
        }

        // Adjust for iterations (linear approximation)
        val iterationFactor = maxIterations / 10_000_000.0

        return (baseTimeSeconds * stackFactor * bucketFactor * iterationFactor).toLong()
    }
}
