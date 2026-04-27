package com.nlhsolver.server

import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

/**
 * HTTP server providing on-demand poker strategy solving.
 *
 * Endpoints:
 * - GET /solve?board=Q&history=bc|b - Solve specific subtree
 * - GET /health - Health check
 */
fun main() {
    embeddedServer(Netty, port = 8080, host = "127.0.0.1") {
        configureSolverAPI()
    }.start(wait = true)
}

fun Application.configureSolverAPI() {
    // JSON serialization
    install(ContentNegotiation) {
        json(Json {
            prettyPrint = true
            isLenient = true
        })
    }

    // CORS for browser access
    install(CORS) {
        allowMethod(HttpMethod.Get)
        allowMethod(HttpMethod.Post)
        allowHeader(HttpHeaders.ContentType)
        anyHost()
    }

    routing {
        get("/health") {
            call.respond(mapOf("status" to "ok", "service" to "poker-solver"))
        }

        get("/solve") {
            val board = call.request.queryParameters["board"] ?: "Q"
            val history = call.request.queryParameters["history"] ?: ""
            val iterations = call.request.queryParameters["iterations"]?.toIntOrNull() ?: 50000

            try {
                val result = solveSubtree(board, history, iterations)
                call.respond(result)
            } catch (e: Exception) {
                call.respond(
                    HttpStatusCode.InternalServerError,
                    ErrorResponse(e.message ?: "Unknown error")
                )
            }
        }

        get("/cache/stats") {
            call.respond(getCacheStats())
        }

        get("/cache/clear") {
            clearCache()
            call.respond(mapOf("status" to "cleared"))
        }
    }
}

@Serializable
data class SolveRequest(
    val board: String,
    val history: String,
    val iterations: Int = 50000
)

@Serializable
data class SolveResponse(
    val board: String,
    val history: String,
    val strategies: Map<String, HandStrategy>,
    val cached: Boolean,
    val solveTime: Long
)

@Serializable
data class HandStrategy(
    val hand: String,
    val freq: Map<String, Double>,
    val ev: Map<String, Double>,
    val evTotal: Double,
    val equity: Double
)

@Serializable
data class ErrorResponse(
    val error: String
)

@Serializable
data class CacheStatsResponse(
    val size: Int,
    val keys: List<String>
)

// Global solver instance (in production, would use dependency injection)
private val solverCache = mutableMapOf<String, CachedSolution>()

data class CachedSolution(
    val strategies: Map<String, HandStrategy>,
    val timestamp: Long
)

/**
 * Solve a specific subtree and return strategies.
 */
fun solveSubtree(board: String, history: String, iterations: Int): SolveResponse {
    val startTime = System.currentTimeMillis()
    val cacheKey = "board=$board,history=$history"

    // Check cache
    val cached = solverCache[cacheKey]
    if (cached != null) {
        return SolveResponse(
            board = board,
            history = history,
            strategies = cached.strategies,
            cached = true,
            solveTime = System.currentTimeMillis() - startTime
        )
    }

    // Solve on-demand
    println("Solving: $cacheKey ($iterations iterations)")

    // Import the solver here to avoid circular dependencies
    val solver = com.nlhsolver.integration.LeducSubtreeSolver()
    val result = solver.solve(board, history, iterations)

    // Cache result
    solverCache[cacheKey] = CachedSolution(
        strategies = result,
        timestamp = System.currentTimeMillis()
    )

    val solveTime = System.currentTimeMillis() - startTime
    println("✓ Solved in ${solveTime}ms")

    return SolveResponse(
        board = board,
        history = history,
        strategies = result,
        cached = false,
        solveTime = solveTime
    )
}

fun getCacheStats(): CacheStatsResponse {
    return CacheStatsResponse(
        size = solverCache.size,
        keys = solverCache.keys.toList()
    )
}

fun clearCache() {
    solverCache.clear()
    println("Cache cleared")
}
