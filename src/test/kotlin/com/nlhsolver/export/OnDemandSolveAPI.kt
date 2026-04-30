package com.nlhsolver.export

import com.nlhsolver.solver.SubtreeSolverFactory
import io.kotest.core.spec.style.FunSpec

/**
 * API endpoint for on-demand subtree solving.
 *
 * For NLH, this would be an HTTP endpoint that accepts:
 * - board: "Ah7d2c"
 * - history: "BTN raise, BB call"
 * - returns: JSON with strategies for all hands at this spot
 *
 * For now, demonstrating with Leduc.
 */
class OnDemandSolveAPI : FunSpec({

    test("Solve specific Leduc spot on-demand") {
        val solver = SubtreeSolverFactory.createLeducSolver()

        // Example: User requests strategy for Q board after bet-call-bet in R2
        val stateKey = "board=Q,history=bc|b"

        // Solve this specific subtree (50k iterations)
        val profile = solver.solveSubtree(stateKey, iterations = 50000)

        // Get P2's strategy facing the bet with Q (pair)
        val infoSetKey = "QQ bcdb"  // Q on Q board, history bcdb
        val strategy = solver.getStrategy(stateKey, infoSetKey, numActions = 3)

        println("\n=== On-Demand Solve: $stateKey ===")
        println("Info set: $infoSetKey")
        println("Strategy: fold=${f(strategy[0])}, call=${f(strategy[1])}, raise=${f(strategy[2])}")

        // Should mostly raise with the nuts
        assert(strategy[2] > 0.6) { "Q should raise >60% with nuts" }

        // Show cache stats
        val stats = solver.getCacheStats()
        println("Cache: ${stats.size} solved subtrees")
        println("✓ Subtree cached for future queries")
    }

    test("Demonstrate NLH usage pattern") {
        println("\n=== How this works for NLH ===")
        println("""
        1. User specifies spot in UI:
           - Board: "Ah 7d 2c"
           - History: "BTN raise, BB call"
           - Street: Flop

        2. API call:
           GET /solve?board=Ah7d2c&history=rc&street=flop

        3. Server:
           - Creates subtree starting from this spot
           - Solves turn/river decisions (50k iterations)
           - Caches result
           - Returns strategies as JSON

        4. UI:
           - Displays range grid with strategies
           - User can navigate turn/river continuations
           - All continuations use the same solved subtree (cached)

        5. Benefits:
           - Only solve spots users actually view
           - Each flop texture solved independently
           - Can solve 100BB, 50BB, 20BB stacks separately
           - No need for massive precomputed database
        """.trimIndent())
    }

    test("Show caching behavior") {
        val solver = SubtreeSolverFactory.createLeducSolver()

        // First solve - takes time
        val key = "board=K,history=xx|"
        println("\n=== First solve (cache miss) ===")
        val t1 = System.currentTimeMillis()
        solver.solveSubtree(key, iterations = 10000)
        val elapsed1 = System.currentTimeMillis() - t1
        println("Time: ${elapsed1}ms")

        // Second solve - instant (cached)
        println("\n=== Second solve (cache hit) ===")
        val t2 = System.currentTimeMillis()
        solver.solveSubtree(key, iterations = 10000)
        val elapsed2 = System.currentTimeMillis() - t2
        println("Time: ${elapsed2}ms")

        println("\n✓ Cache speedup: ${elapsed1 / elapsed2.coerceAtLeast(1)}x faster")
    }
})
