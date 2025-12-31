package com.nlhsolver.api

import com.nlhsolver.poker.Position
import com.nlhsolver.solver.*
import com.nlhsolver.storage.ConfigurationRepository
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import java.util.UUID

/**
 * REST API routes for solve configurations (T061-T063).
 *
 * Endpoints:
 * - POST /api/v1/configurations - Create a new configuration
 * - GET /api/v1/configurations - List all configurations
 * - GET /api/v1/configurations/{id} - Get a specific configuration
 */
fun Route.configurationRoutes(configRepository: ConfigurationRepository) {
    route("/configurations") {
        // POST /api/v1/configurations - Create configuration
        post {
            val request = call.receive<CreateConfigurationRequest>()

            // Validate request
            if (request.numPlayers !in 2..6) {
                call.respond(
                    HttpStatusCode.BadRequest,
                    ErrorResponse("INVALID_PLAYER_COUNT", "Number of players must be between 2 and 6")
                )
                return@post
            }

            // Convert request to domain entity
            val configuration = SolveConfiguration(
                name = request.name,
                numPlayers = request.numPlayers,
                stackSizes = request.stackSizes.mapKeys { Position.valueOf(it.key) },
                startingPosition = Position.valueOf(request.startingPosition),
                convergenceCriteria = ConvergenceCriteria(
                    targetExploitability = request.targetExploitability ?: 0.5,
                    maxIterations = request.maxIterations ?: 5_000_000,
                    evaluationFrequency = request.evaluationFrequency ?: 10_000,
                    timeoutHours = request.timeoutHours
                ),
                betSizingScheme = BetSizingScheme(
                    sizes = request.betSizes?.map { size ->
                        when {
                            size == "ALL_IN" -> BetSize.AllIn
                            size.endsWith("x") -> {
                                val multiplier = size.dropLast(1).toDouble()
                                BetSize.PotRelative(multiplier)
                            }
                            else -> BetSize.PotRelative(size.toDouble())
                        }
                    } ?: listOf(BetSize.PotRelative(0.5), BetSize.PotRelative(1.0), BetSize.AllIn)
                ),
                handAbstraction = HandAbstraction(
                    preflopBuckets = request.preflopBuckets ?: 169,
                    flopBuckets = request.flopBuckets ?: 200,
                    turnBuckets = request.turnBuckets ?: 200,
                    riverBuckets = request.riverBuckets ?: 200
                )
            )

            // Validate configuration
            val validationResult = ConfigurationValidator.validate(configuration)
            if (validationResult is ValidationResult.Failure) {
                call.respond(
                    HttpStatusCode.BadRequest,
                    ErrorResponse("VALIDATION_FAILED", validationResult.errors.joinToString(", "))
                )
                return@post
            }

            // Save configuration
            val saved = configRepository.save(configuration)

            // Return created configuration
            call.respond(HttpStatusCode.Created, toResponse(saved))
        }

        // GET /api/v1/configurations - List all configurations
        get {
            val configurations = configRepository.findAll()
            call.respond(configurations.map { toResponse(it) })
        }

        // GET /api/v1/configurations/{id} - Get specific configuration
        get("/{id}") {
            val id = call.parameters["id"]?.let { UUID.fromString(it) }
                ?: run {
                    call.respond(
                        HttpStatusCode.BadRequest,
                        ErrorResponse("INVALID_ID", "Invalid configuration ID")
                    )
                    return@get
                }

            val configuration = configRepository.findById(id)
            if (configuration == null) {
                call.respond(
                    HttpStatusCode.NotFound,
                    ErrorResponse("NOT_FOUND", "Configuration not found")
                )
                return@get
            }

            call.respond(toResponse(configuration))
        }
    }
}

/**
 * Request body for creating a configuration.
 */
@kotlinx.serialization.Serializable
data class CreateConfigurationRequest(
    val name: String,
    val numPlayers: Int,
    val stackSizes: Map<String, Double>,
    val startingPosition: String,
    val targetExploitability: Double? = null,
    val maxIterations: Long? = null,
    val evaluationFrequency: Int? = null,
    val timeoutHours: Int? = null,
    val betSizes: List<String>? = null,
    val preflopBuckets: Int? = null,
    val flopBuckets: Int? = null,
    val turnBuckets: Int? = null,
    val riverBuckets: Int? = null
)

/**
 * Response format for configuration.
 */
@kotlinx.serialization.Serializable
data class ConfigurationResponse(
    val configId: String,
    val name: String,
    val numPlayers: Int,
    val stackSizes: Map<String, Double>,
    val startingPosition: String,
    val targetExploitability: Double,
    val maxIterations: Long,
    val evaluationFrequency: Int,
    val timeoutHours: Int?,
    val betSizes: List<String>,
    val handAbstraction: HandAbstractionResponse,
    val createdAt: String,
    val updatedAt: String
)

@kotlinx.serialization.Serializable
data class HandAbstractionResponse(
    val preflopBuckets: Int,
    val flopBuckets: Int,
    val turnBuckets: Int,
    val riverBuckets: Int
)

/**
 * Convert domain entity to API response.
 */
private fun toResponse(config: SolveConfiguration): ConfigurationResponse {
    return ConfigurationResponse(
        configId = config.configId.toString(),
        name = config.name,
        numPlayers = config.numPlayers,
        stackSizes = config.stackSizes.mapKeys { it.key.name },
        startingPosition = config.startingPosition.name,
        targetExploitability = config.convergenceCriteria.targetExploitability,
        maxIterations = config.convergenceCriteria.maxIterations,
        evaluationFrequency = config.convergenceCriteria.evaluationFrequency,
        timeoutHours = config.convergenceCriteria.timeoutHours,
        betSizes = config.betSizingScheme.sizes.map { size ->
            when (size) {
                is BetSize.PotRelative -> "${size.multiplier}x"
                is BetSize.AllIn -> "ALL_IN"
            }
        },
        handAbstraction = HandAbstractionResponse(
            preflopBuckets = config.handAbstraction.preflopBuckets,
            flopBuckets = config.handAbstraction.flopBuckets,
            turnBuckets = config.handAbstraction.turnBuckets,
            riverBuckets = config.handAbstraction.riverBuckets
        ),
        createdAt = config.createdAt.toString(),
        updatedAt = config.updatedAt.toString()
    )
}
