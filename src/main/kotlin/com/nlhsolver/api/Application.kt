package com.nlhsolver.api

import com.nlhsolver.solver.*
import com.nlhsolver.storage.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.http.*
import kotlinx.serialization.json.Json

/**
 * Ktor application setup for NLH Solver REST API (T060).
 *
 * Configures:
 * - Content negotiation (JSON serialization)
 * - Error handling and status pages
 * - Routing for all API endpoints
 * - CORS (if needed)
 */
fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        configureApplication()
    }.start(wait = true)
}

/**
 * Configure the Ktor application with all plugins and routes.
 */
fun Application.configureApplication() {
    // Install content negotiation for JSON
    install(ContentNegotiation) {
        json(Json {
            prettyPrint = true
            isLenient = true
            ignoreUnknownKeys = true
        })
    }

    // Install status pages for error handling
    install(StatusPages) {
        exception<IllegalArgumentException> { call, cause ->
            call.respond(
                HttpStatusCode.BadRequest,
                ErrorResponse(
                    error = "BAD_REQUEST",
                    message = cause.message ?: "Invalid request"
                )
            )
        }

        exception<StrategyNotFoundException> { call, cause ->
            call.respond(
                HttpStatusCode.NotFound,
                ErrorResponse(
                    error = "NOT_FOUND",
                    message = cause.message ?: "Strategy not found"
                )
            )
        }

        exception<InvalidGameStateException> { call, cause ->
            call.respond(
                HttpStatusCode.BadRequest,
                ErrorResponse(
                    error = "INVALID_GAME_STATE",
                    message = cause.message ?: "Invalid game state"
                )
            )
        }

        exception<Exception> { call, cause ->
            call.application.environment.log.error("Unhandled exception", cause)
            call.respond(
                HttpStatusCode.InternalServerError,
                ErrorResponse(
                    error = "INTERNAL_SERVER_ERROR",
                    message = "An unexpected error occurred"
                )
            )
        }
    }

    // Initialize repositories
    val configRepository = ConfigurationRepository()
    val jobRepository = JobRepository()
    val strategyRepository = StrategyRepository()

    // Initialize services
    val solveOrchestrator = SolveOrchestrator()
    val strategyQueryService = StrategyQueryService(strategyRepository)

    // Configure routing
    routing {
        // API version prefix
        route("/api/v1") {
            configurationRoutes(configRepository)
            jobRoutes(jobRepository, solveOrchestrator, configRepository)
            strategyRoutes(strategyQueryService, strategyRepository)
            healthRoutes()
        }
    }
}

/**
 * Standard error response format.
 */
@kotlinx.serialization.Serializable
data class ErrorResponse(
    val error: String,
    val message: String
)
