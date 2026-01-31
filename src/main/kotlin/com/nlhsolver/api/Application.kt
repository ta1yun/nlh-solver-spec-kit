package com.nlhsolver.api

import com.nlhsolver.common.*
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

    // Install status pages for error handling (T112)
    install(StatusPages) {
        // Configuration validation errors (400 Bad Request)
        exception<InvalidConfigurationException> { call, cause ->
            call.respond(
                HttpStatusCode.BadRequest,
                ErrorResponse(
                    error = "INVALID_CONFIGURATION",
                    message = cause.message ?: "Configuration validation failed"
                )
            )
        }

        exception<InvalidArgumentException> { call, cause ->
            call.respond(
                HttpStatusCode.BadRequest,
                ErrorResponse(
                    error = "INVALID_ARGUMENT",
                    message = cause.message ?: "Invalid argument"
                )
            )
        }

        exception<IllegalArgumentException> { call, cause ->
            call.respond(
                HttpStatusCode.BadRequest,
                ErrorResponse(
                    error = "BAD_REQUEST",
                    message = cause.message ?: "Invalid request"
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

        exception<InvalidJobStateException> { call, cause ->
            call.respond(
                HttpStatusCode.BadRequest,
                ErrorResponse(
                    error = "INVALID_JOB_STATE",
                    message = cause.message ?: "Job is in an invalid state for this operation"
                )
            )
        }

        // Not found errors (404 Not Found)
        exception<StrategyNotFoundException> { call, cause ->
            call.respond(
                HttpStatusCode.NotFound,
                ErrorResponse(
                    error = "STRATEGY_NOT_FOUND",
                    message = cause.message ?: "Strategy not found"
                )
            )
        }

        exception<ResourceNotFoundException> { call, cause ->
            call.respond(
                HttpStatusCode.NotFound,
                ErrorResponse(
                    error = "RESOURCE_NOT_FOUND",
                    message = cause.message ?: "${cause.resourceType} not found: ${cause.resourceId}"
                )
            )
        }

        exception<BlueprintException> { call, cause ->
            call.respond(
                HttpStatusCode.NotFound,
                ErrorResponse(
                    error = "BLUEPRINT_ERROR",
                    message = cause.message ?: "Blueprint error"
                )
            )
        }

        // Solve execution errors (500 Internal Server Error or 503 Service Unavailable)
        exception<SolveFailedException> { call, cause ->
            call.application.environment.log.error("Solve failed", cause)
            call.respond(
                HttpStatusCode.InternalServerError,
                ErrorResponse(
                    error = "SOLVE_FAILED",
                    message = cause.message ?: "Solve execution failed"
                )
            )
        }

        exception<ConvergenceException> { call, cause ->
            call.application.environment.log.warn("Convergence failed", cause)
            call.respond(
                HttpStatusCode.InternalServerError,
                ErrorResponse(
                    error = "CONVERGENCE_FAILED",
                    message = cause.message ?: "CFR failed to converge"
                )
            )
        }

        exception<GameTreeException> { call, cause ->
            call.application.environment.log.error("Game tree construction failed", cause)
            call.respond(
                HttpStatusCode.InternalServerError,
                ErrorResponse(
                    error = "GAME_TREE_ERROR",
                    message = cause.message ?: "Game tree construction failed"
                )
            )
        }

        // Memory errors (503 Service Unavailable)
        exception<OutOfMemoryException> { call, cause ->
            call.application.environment.log.error("Out of memory", cause)
            call.respond(
                HttpStatusCode.ServiceUnavailable,
                ErrorResponse(
                    error = "OUT_OF_MEMORY",
                    message = "Insufficient memory to complete operation. Try reducing abstraction size or increasing heap."
                )
            )
        }

        exception<OutOfMemoryError> { call, cause ->
            call.application.environment.log.error("JVM out of memory", cause)
            call.respond(
                HttpStatusCode.ServiceUnavailable,
                ErrorResponse(
                    error = "OUT_OF_MEMORY",
                    message = "Server out of memory. Please try again later or reduce problem size."
                )
            )
        }

        // Storage errors (500 Internal Server Error)
        exception<StorageException> { call, cause ->
            call.application.environment.log.error("Storage error", cause)
            call.respond(
                HttpStatusCode.InternalServerError,
                ErrorResponse(
                    error = "STORAGE_ERROR",
                    message = cause.message ?: "Failed to read/write from storage"
                )
            )
        }

        exception<RefinementException> { call, cause ->
            call.respond(
                HttpStatusCode.BadRequest,
                ErrorResponse(
                    error = "REFINEMENT_ERROR",
                    message = cause.message ?: "Refinement operation failed"
                )
            )
        }

        // Catch-all for unexpected errors (500 Internal Server Error)
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
