package com.nlhsolver.solver

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.core.GameState
import com.nlhsolver.core.StrategyProfile
import java.util.concurrent.ConcurrentHashMap

/**
 * On-demand solver for specific game subtrees.
 *
 * Use case for NLH:
 * 1. User specifies: board="Ah7d2c", history="BTN raise, BB call"
 * 2. This solver creates a CFR instance starting from that exact spot
 * 3. Solves the subtree (turn/river decisions)
 * 4. Returns strategies for that specific context
 *
 * Benefits:
 * - No need to precompute entire game tree
 * - Solves exactly the spots users care about
 * - Caches results for repeated queries
 */
class SubtreeSolver<T : GameState>(
    private val createInitialState: (String) -> T,
    private val getAllMatchups: (String) -> List<T>,
    private val enableCFRPlus: Boolean = true
) {
    private val cache = ConcurrentHashMap<String, StrategyProfile>()

    /**
     * Solve a specific subtree starting from the given state.
     *
     * @param stateKey Unique identifier for this starting state
     *                 For NLH: "board=Ah7d2c,history=rc,pos=BTN"
     * @param iterations Number of CFR iterations
     * @return Solved strategy profile for this subtree
     */
    fun solveSubtree(
        stateKey: String,
        iterations: Int = 50000
    ): StrategyProfile {
        return cache.getOrPut(stateKey) {
            println("Solving subtree: $stateKey ($iterations iterations)")

            val solver = CFRSolver(numPlayers = 2, enableCFRPlus = enableCFRPlus)
            val matchups = getAllMatchups(stateKey)

            // Train on all matchups in this subtree
            repeat(iterations) { i ->
                val matchup = matchups[i % matchups.size]
                solver.train(matchup, iterations = 1)

                if ((i + 1) % 10000 == 0) {
                    println("  $stateKey: ${i + 1} iterations")
                }
            }

            println("✓ Solved $stateKey")
            solver.getStrategyProfile()
        }
    }

    /**
     * Get strategy at a specific info set within a solved subtree.
     *
     * @param stateKey The subtree state key
     * @param infoSetKey The specific info set (e.g., "QQ bcdbr")
     * @param numActions Number of available actions at this info set
     * @return Strategy (action probabilities)
     */
    fun getStrategy(
        stateKey: String,
        infoSetKey: String,
        numActions: Int,
        iterations: Int = 50000
    ): DoubleArray {
        val profile = solveSubtree(stateKey, iterations)

        return try {
            profile.getInfoSetStrategy(infoSetKey, numActions).getAverageStrategy()
        } catch (e: Exception) {
            // Return uniform strategy if info set doesn't exist
            DoubleArray(numActions) { 1.0 / numActions }
        }
    }

    /**
     * Clear the cache (useful for testing or when memory constrained).
     */
    fun clearCache() {
        cache.clear()
    }

    /**
     * Get cache statistics.
     */
    fun getCacheStats(): CacheStats {
        return CacheStats(
            size = cache.size,
            keys = cache.keys.toList()
        )
    }
}

data class CacheStats(
    val size: Int,
    val keys: List<String>
)

/**
 * Factory for creating subtree solvers for different games.
 */
object SubtreeSolverFactory {
    /**
     * Create a subtree solver for Leduc Hold'em.
     *
     * State key format: "board=Q,history=bc|b"
     */
    fun createLeducSolver(): SubtreeSolver<com.nlhsolver.integration.LeducWithSuitAbstraction> {
        return SubtreeSolver(
            createInitialState = { key ->
                // Parse key like "board=Q,history=bc|b"
                val parts = key.split(",").associate {
                    val (k, v) = it.split("=")
                    k to v
                }
                val boardCard = when(parts["board"]) {
                    "J" -> 0
                    "Q" -> 2
                    "K" -> 4
                    else -> 2
                }
                val history = parts["history"] ?: ""

                // Create initial state (will enumerate all hero/villain combos)
                com.nlhsolver.integration.LeducWithSuitAbstraction(
                    p1Card = 0,  // Will be varied in matchups
                    p2Card = 1,
                    boardCard = boardCard,
                    round = if ('|' in history || 'd' in history) 2 else 1,
                    p1Invested = 1.0,
                    p2Invested = 1.0,
                    history = history
                )
            },
            getAllMatchups = { key ->
                val parts = key.split(",").associate {
                    val (k, v) = it.split("=")
                    k to v
                }
                val boardCard = when(parts["board"]) {
                    "J" -> 0
                    "Q" -> 2
                    "K" -> 4
                    else -> 2
                }
                val history = parts["history"] ?: ""
                val round = if ('|' in history || 'd' in history) 2 else 1

                // Generate all valid matchups
                val matchups = mutableListOf<com.nlhsolver.integration.LeducWithSuitAbstraction>()
                for (p1 in 0..5) {
                    for (p2 in 0..5) {
                        if (p1 == p2 || p1 == boardCard || p2 == boardCard) continue

                        matchups.add(
                            com.nlhsolver.integration.LeducWithSuitAbstraction(
                                p1Card = p1,
                                p2Card = p2,
                                boardCard = boardCard,
                                round = round,
                                p1Invested = 1.0,
                                p2Invested = 1.0,
                                history = history
                            )
                        )
                    }
                }
                matchups
            }
        )
    }

    // TODO: Add createNLHSolver() when NLH game is implemented
    // fun createNLHSolver(
    //     board: String,           // "Ah7d2c"
    //     history: String,         // "rc" (raise-call)
    //     position: String,        // "BTN"
    //     effectiveStack: Double   // 100.0 BB
    // ): SubtreeSolver<NLHGameState>
}
