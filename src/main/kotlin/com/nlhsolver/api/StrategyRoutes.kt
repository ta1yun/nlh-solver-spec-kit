package com.nlhsolver.api

import com.nlhsolver.core.PokerGameState
import com.nlhsolver.core.PokerPlayerState
import com.nlhsolver.poker.Card
import com.nlhsolver.poker.Position
import com.nlhsolver.poker.Rank
import com.nlhsolver.poker.Street
import com.nlhsolver.poker.Suit
import com.nlhsolver.solver.StrategyQueryService
import com.nlhsolver.storage.StrategyRepository
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import java.util.UUID

/**
 * REST API routes for strategy queries (T067).
 *
 * Endpoints:
 * - POST /api/v1/strategies/{id}/query - Query strategy for a game state
 */
fun Route.strategyRoutes(
    strategyQueryService: StrategyQueryService,
    strategyRepository: StrategyRepository
) {
    route("/strategies") {
        // POST /api/v1/strategies/{id}/query - Query strategy
        post("/{id}/query") {
            val id = call.parameters["id"]?.let { UUID.fromString(it) }
                ?: run {
                    call.respond(
                        HttpStatusCode.BadRequest,
                        ErrorResponse("INVALID_ID", "Invalid strategy ID")
                    )
                    return@post
                }

            val request = call.receive<StrategyQueryRequest>()

            // Build game state from request
            val gameState = try {
                buildGameState(request)
            } catch (e: Exception) {
                call.respond(
                    HttpStatusCode.BadRequest,
                    ErrorResponse("INVALID_GAME_STATE", e.message ?: "Invalid game state")
                )
                return@post
            }

            // Query strategy
            val result = try {
                strategyQueryService.query(id, gameState)
            } catch (e: Exception) {
                call.respond(
                    HttpStatusCode.InternalServerError,
                    ErrorResponse("QUERY_FAILED", e.message ?: "Strategy query failed")
                )
                return@post
            }

            call.respond(toResponse(result))
        }

        // GET /api/v1/strategies/{id} - Get strategy metadata
        get("/{id}") {
            val id = call.parameters["id"]?.let { UUID.fromString(it) }
                ?: run {
                    call.respond(
                        HttpStatusCode.BadRequest,
                        ErrorResponse("INVALID_ID", "Invalid strategy ID")
                    )
                    return@get
                }

            val strategy = strategyRepository.findById(id)
            if (strategy == null) {
                call.respond(
                    HttpStatusCode.NotFound,
                    ErrorResponse("NOT_FOUND", "Strategy not found")
                )
                return@get
            }

            call.respond(
                mapOf(
                    "strategyId" to strategy.strategyId.toString(),
                    "solveJobId" to strategy.solveJobId.toString(),
                    "exploitability" to strategy.exploitability,
                    "createdAt" to strategy.createdAt.toString()
                )
            )
        }
    }
}

/**
 * Request body for querying a strategy.
 */
@kotlinx.serialization.Serializable
data class StrategyQueryRequest(
    val street: String,
    val board: List<String>,
    val pot: Double,
    val position: String,
    val stackBb: Double,
    val actionHistory: List<String> = emptyList()
)

/**
 * Response format for strategy query.
 */
@kotlinx.serialization.Serializable
data class StrategyQueryResponse(
    val found: Boolean,
    val gameStateHash: String,
    val infoSet: String,
    val actionProbabilities: Map<String, Double>,
    val recommendations: List<ActionRecommendationResponse>,
    val exploitability: Double
)

@kotlinx.serialization.Serializable
data class ActionRecommendationResponse(
    val action: String,
    val probability: Double,
    val expectedValue: Double? = null
)

/**
 * Build PokerGameState from request.
 */
private fun buildGameState(request: StrategyQueryRequest): PokerGameState {
    val street = Street.valueOf(request.street.uppercase())
    val position = Position.valueOf(request.position.uppercase())

    // Parse board cards
    val board = request.board.map { parseCard(it) }

    // Create player states (simplified for MVP)
    val playerStates = mapOf(
        position to PokerPlayerState(
            position = position,
            stackBb = request.stackBb,
            investedThisRound = 0.0
        )
    )

    return PokerGameState(
        street = street,
        board = board,
        pot = request.pot,
        playerStates = playerStates,
        actionHistory = emptyList() // Simplified for MVP
    )
}

/**
 * Parse card from string (e.g., "As" = Ace of Spades).
 */
private fun parseCard(cardStr: String): Card {
    require(cardStr.length == 2) { "Card must be 2 characters (e.g., 'As')" }

    val rankChar = cardStr[0].uppercaseChar()
    val suitChar = cardStr[1].lowercaseChar()

    val rank = when (rankChar) {
        'A' -> Rank.ACE
        'K' -> Rank.KING
        'Q' -> Rank.QUEEN
        'J' -> Rank.JACK
        'T' -> Rank.TEN
        in '2'..'9' -> Rank.values().find { it.symbol == rankChar }
            ?: throw IllegalArgumentException("Invalid rank: $rankChar")
        else -> throw IllegalArgumentException("Invalid rank: $rankChar")
    }

    val suit = when (suitChar) {
        's' -> Suit.SPADES
        'h' -> Suit.HEARTS
        'd' -> Suit.DIAMONDS
        'c' -> Suit.CLUBS
        else -> throw IllegalArgumentException("Invalid suit: $suitChar")
    }

    return Card(rank, suit)
}

/**
 * Convert query result to API response.
 */
private fun toResponse(result: com.nlhsolver.solver.StrategyQueryResult): StrategyQueryResponse {
    return StrategyQueryResponse(
        found = result.found,
        gameStateHash = result.gameStateHash,
        infoSet = result.infoSet,
        actionProbabilities = result.actionProbabilities,
        recommendations = result.recommendations.map {
            ActionRecommendationResponse(
                action = it.action,
                probability = it.probability,
                expectedValue = it.expectedValue
            )
        },
        exploitability = result.exploitability
    )
}
