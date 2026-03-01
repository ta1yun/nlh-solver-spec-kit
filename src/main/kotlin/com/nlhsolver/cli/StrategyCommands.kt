package com.nlhsolver.cli

import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.core.subcommands
import com.github.ajalt.clikt.parameters.arguments.argument
import com.github.ajalt.clikt.parameters.options.*
import com.github.ajalt.clikt.parameters.types.double
import com.nlhsolver.core.PokerGameState
import com.nlhsolver.core.PokerPlayerState
import com.nlhsolver.poker.*
import com.nlhsolver.solver.StrategyQueryService
import com.nlhsolver.storage.StrategyRepository
import java.util.UUID

/**
 * Strategy command group (T076).
 *
 * Subcommands:
 * - list: List all solved strategies
 * - show: Show strategy details
 * - query: Query strategy for a game state
 */
class StrategyCommand : CliktCommand(
    name = "strategy",
    help = "Manage and query solved strategies"
) {
    init {
        subcommands(
            StrategyListCommand(),
            StrategyShowCommand(),
            StrategyQueryCommand(),
            StrategyHandCommand(),
            StrategyRangeCommand(),
            StrategyInspectCommand(),
            StrategyExtractRangeCommand()
        )
    }

    override fun run() {}
}

/**
 * Query strategy (T076).
 */
class StrategyQueryCommand : CliktCommand(
    name = "query",
    help = "Query strategy for a game state"
) {
    private val strategyId by argument(help = "Strategy ID")
    private val street by option("--street", help = "Street (PREFLOP, FLOP, TURN, RIVER)").required()
    private val board by option("--board", help = "Board cards (e.g., 'AsKdQh')").default("")
    private val pot by option("--pot", help = "Pot size in big blinds").double().required()
    private val position by option("--position", help = "Player position").required()
    private val stack by option("--stack", help = "Player stack in big blinds").double().default(100.0)
    private val json by option("--json", help = "Output in JSON format").flag()

    override fun run() {
        val repository = StrategyRepository()
        val queryService = StrategyQueryService(repository)

        try {
            val id = UUID.fromString(strategyId)

            // Parse street
            val streetEnum = Street.valueOf(street.uppercase())

            // Parse board cards
            val boardCards = if (board.isNotEmpty()) {
                parseBoardCards(board)
            } else {
                emptyList()
            }

            // Parse position
            val positionEnum = Position.valueOf(position.uppercase())

            // Build game state
            val gameState = PokerGameState(
                street = streetEnum,
                board = boardCards,
                pot = pot,
                playerStates = mapOf(
                    positionEnum to PokerPlayerState(
                        position = positionEnum,
                        stackBb = stack,
                        investedThisRound = 0.0
                    )
                ),
                actionHistory = emptyList()
            )

            // Query strategy
            val result = queryService.query(id, gameState)

            val format = if (json) OutputFormatter.Format.JSON else OutputFormatter.Format.TEXT
            echo(OutputFormatter.formatStrategyQuery(result, format))
        } catch (e: IllegalArgumentException) {
            echo(OutputFormatter.formatError("Invalid input: ${e.message}"))
        } catch (e: Exception) {
            echo(OutputFormatter.formatError(e.message ?: "Strategy query failed"))
        }
    }

    private fun parseBoardCards(boardStr: String): List<Card> {
        // Parse cards like "AsKdQh" into list of Card objects
        val cards = mutableListOf<Card>()
        var i = 0

        while (i < boardStr.length) {
            if (i + 1 >= boardStr.length) {
                throw IllegalArgumentException("Invalid board format: $boardStr")
            }

            val rankChar = boardStr[i].uppercaseChar()
            val suitChar = boardStr[i + 1].lowercaseChar()

            val rank = parseRank(rankChar)
            val suit = parseSuit(suitChar)

            cards.add(Card(rank, suit))
            i += 2
        }

        return cards
    }

    private fun parseRank(rankChar: Char): Rank {
        return when (rankChar) {
            'A' -> Rank.ACE
            'K' -> Rank.KING
            'Q' -> Rank.QUEEN
            'J' -> Rank.JACK
            'T' -> Rank.TEN
            '9' -> Rank.NINE
            '8' -> Rank.EIGHT
            '7' -> Rank.SEVEN
            '6' -> Rank.SIX
            '5' -> Rank.FIVE
            '4' -> Rank.FOUR
            '3' -> Rank.THREE
            '2' -> Rank.TWO
            else -> throw IllegalArgumentException("Invalid rank: $rankChar")
        }
    }

    private fun parseSuit(suitChar: Char): Suit {
        return when (suitChar) {
            's' -> Suit.SPADES
            'h' -> Suit.HEARTS
            'd' -> Suit.DIAMONDS
            'c' -> Suit.CLUBS
            else -> throw IllegalArgumentException("Invalid suit: $suitChar")
        }
    }
}

/**
 * List all solved strategies.
 */
class StrategyListCommand : CliktCommand(
    name = "list",
    help = "List all solved strategies"
) {
    private val json by option("--json", help = "Output in JSON format").flag()

    override fun run() {
        val repository = StrategyRepository()

        try {
            val strategies = repository.findAll()

            if (strategies.isEmpty()) {
                echo("No strategies found.")
                return
            }

            val format = if (json) OutputFormatter.Format.JSON else OutputFormatter.Format.TEXT
            echo(OutputFormatter.formatStrategyList(strategies, format))
        } catch (e: Exception) {
            echo(OutputFormatter.formatError(e.message ?: "Failed to list strategies"))
        }
    }
}

/**
 * Show strategy details.
 */
class StrategyShowCommand : CliktCommand(
    name = "show",
    help = "Show strategy details"
) {
    private val strategyId by argument(help = "Strategy ID")
    private val json by option("--json", help = "Output in JSON format").flag()
    private val verbose by option("-v", "--verbose", help = "Show detailed statistics").flag()
    private val full by option("--full", help = "Show complete strategy breakdown by info set").flag()
    private val limit by option("--limit", help = "Limit number of info sets shown (default: all)").convert { it.toInt() }

    override fun run() {
        val repository = StrategyRepository()

        try {
            val id = UUID.fromString(strategyId)
            val strategy = repository.findById(id)
                ?: throw IllegalArgumentException("Strategy $strategyId not found")

            // Load full strategy data if verbose or full is requested
            val coreStrategy = if (verbose || full) {
                repository.loadStrategyData(id)
            } else {
                null
            }

            val format = if (json) OutputFormatter.Format.JSON else OutputFormatter.Format.TEXT

            if (full) {
                echo(OutputFormatter.formatFullStrategy(strategy, coreStrategy, limit, format))
            } else {
                echo(OutputFormatter.formatStrategyDetails(strategy, coreStrategy, format))
            }
        } catch (e: IllegalArgumentException) {
            echo(OutputFormatter.formatError("Invalid input: ${e.message}"))
        } catch (e: Exception) {
            echo(OutputFormatter.formatError(e.message ?: "Failed to show strategy"))
        }
    }
}

/**
 * Query strategy by canonical hand notation (Phase 2.5 - T203, T219).
 *
 * Example: nlhsolver strategy hand <strategy-id> --hand AKs --position BTN
 * Example: nlhsolver strategy hand <strategy-id> --hand AKs --position BTN --street FLOP --board Ks7h2d
 */
class StrategyHandCommand : CliktCommand(
    name = "hand",
    help = "Query strategy for a canonical hand (e.g., AKs, QQ, 72o)"
) {
    private val strategyId by argument(help = "Strategy ID")
    private val hand by option("--hand", "-h", help = "Hand notation (e.g., AKs, QQ, 72o)").required()
    private val position by option("--position", "-p", help = "Position (BTN or BB)").default("BTN")
    private val street by option("--street", "-s", help = "Street (PREFLOP, FLOP)").default("PREFLOP")
    private val board by option("--board", "-b", help = "Board cards (e.g., 'Ks7h2d')").default("")
    private val facing by option("--facing", "-f", help = "Filter by action faced (e.g., 'check', 'bet', 'bet:10')").default("")
    private val json by option("--json", help = "Output in JSON format").flag()

    override fun run() {
        val repository = StrategyRepository()
        val queryService = StrategyQueryService(repository)

        try {
            val id = UUID.fromString(strategyId)
            val positionEnum = Position.valueOf(position.uppercase())
            val streetEnum = Street.valueOf(street.uppercase())

            // Parse board cards if provided
            val boardCards = if (board.isNotEmpty()) {
                parseBoardCards(board)
            } else {
                emptyList()
            }

            // Validate board for flop
            if (streetEnum == Street.FLOP && boardCards.size != 3) {
                echo(OutputFormatter.formatError("Flop requires exactly 3 board cards. Use --board Ks7h2d"))
                return
            }

            val result = queryService.queryByCanonicalHand(id, hand, positionEnum, streetEnum, boardCards, facing)

            val format = if (json) OutputFormatter.Format.JSON else OutputFormatter.Format.TEXT
            echo(OutputFormatter.formatCanonicalHandQuery(result, format))
        } catch (e: IllegalArgumentException) {
            echo(OutputFormatter.formatError("Invalid input: ${e.message}"))
        } catch (e: Exception) {
            echo(OutputFormatter.formatError(e.message ?: "Hand query failed"))
        }
    }

    private fun parseBoardCards(boardStr: String): List<Card> {
        val cards = mutableListOf<Card>()
        var i = 0

        while (i < boardStr.length) {
            if (i + 1 >= boardStr.length) {
                throw IllegalArgumentException("Invalid board format: $boardStr")
            }

            val rankChar = boardStr[i].uppercaseChar()
            val suitChar = boardStr[i + 1].lowercaseChar()

            val rank = parseRank(rankChar)
            val suit = parseSuit(suitChar)

            cards.add(Card(rank, suit))
            i += 2
        }

        return cards
    }

    private fun parseRank(rankChar: Char): Rank {
        return when (rankChar) {
            'A' -> Rank.ACE
            'K' -> Rank.KING
            'Q' -> Rank.QUEEN
            'J' -> Rank.JACK
            'T' -> Rank.TEN
            '9' -> Rank.NINE
            '8' -> Rank.EIGHT
            '7' -> Rank.SEVEN
            '6' -> Rank.SIX
            '5' -> Rank.FIVE
            '4' -> Rank.FOUR
            '3' -> Rank.THREE
            '2' -> Rank.TWO
            else -> throw IllegalArgumentException("Invalid rank: $rankChar")
        }
    }

    private fun parseSuit(suitChar: Char): Suit {
        return when (suitChar) {
            's' -> Suit.SPADES
            'h' -> Suit.HEARTS
            'd' -> Suit.DIAMONDS
            'c' -> Suit.CLUBS
            else -> throw IllegalArgumentException("Invalid suit: $suitChar")
        }
    }
}

/**
 * Display full range as 13x13 grid (Phase 2.5 - T204, T219).
 *
 * Example: nlhsolver strategy range <strategy-id> --position BTN
 * Example: nlhsolver strategy range <strategy-id> --position BTN --street FLOP --board Ks7h2d
 */
class StrategyRangeCommand : CliktCommand(
    name = "range",
    help = "Display full range as 13x13 grid"
) {
    private val strategyId by argument(help = "Strategy ID")
    private val position by option("--position", "-p", help = "Position (BTN or BB)").default("BTN")
    private val street by option("--street", "-s", help = "Street (PREFLOP, FLOP)").default("PREFLOP")
    private val board by option("--board", "-b", help = "Board cards (e.g., 'Ks7h2d')").default("")
    private val facing by option("--facing", "-f", help = "Filter by action faced (e.g., 'check', 'bet', 'bet:10')").default("")
    private val json by option("--json", help = "Output in JSON format").flag()

    override fun run() {
        val repository = StrategyRepository()
        val queryService = StrategyQueryService(repository)

        try {
            val id = UUID.fromString(strategyId)
            val positionEnum = Position.valueOf(position.uppercase())
            val streetEnum = Street.valueOf(street.uppercase())

            // Parse board cards if provided
            val boardCards = if (board.isNotEmpty()) {
                parseBoardCards(board)
            } else {
                emptyList()
            }

            // Validate board for flop
            if (streetEnum == Street.FLOP && boardCards.size != 3) {
                echo(OutputFormatter.formatError("Flop requires exactly 3 board cards. Use --board Ks7h2d"))
                return
            }

            val streetLabel = if (streetEnum == Street.PREFLOP) "preflop" else "flop (${formatBoard(boardCards)})"
            val facingLabel = if (facing.isNotEmpty()) " facing $facing" else ""
            echo("Loading $streetLabel range for $positionEnum$facingLabel...")
            val rangeResults = queryService.queryFullRange(id, positionEnum, streetEnum, boardCards, facing)

            val format = if (json) OutputFormatter.Format.JSON else OutputFormatter.Format.TEXT
            echo(OutputFormatter.formatPreflopRange(rangeResults, positionEnum, format))
        } catch (e: IllegalArgumentException) {
            echo(OutputFormatter.formatError("Invalid input: ${e.message}"))
        } catch (e: Exception) {
            echo(OutputFormatter.formatError(e.message ?: "Range query failed"))
        }
    }

    private fun parseBoardCards(boardStr: String): List<Card> {
        val cards = mutableListOf<Card>()
        var i = 0

        while (i < boardStr.length) {
            if (i + 1 >= boardStr.length) {
                throw IllegalArgumentException("Invalid board format: $boardStr")
            }

            val rankChar = boardStr[i].uppercaseChar()
            val suitChar = boardStr[i + 1].lowercaseChar()

            val rank = parseRank(rankChar)
            val suit = parseSuit(suitChar)

            cards.add(Card(rank, suit))
            i += 2
        }

        return cards
    }

    private fun parseRank(rankChar: Char): Rank {
        return when (rankChar) {
            'A' -> Rank.ACE
            'K' -> Rank.KING
            'Q' -> Rank.QUEEN
            'J' -> Rank.JACK
            'T' -> Rank.TEN
            '9' -> Rank.NINE
            '8' -> Rank.EIGHT
            '7' -> Rank.SEVEN
            '6' -> Rank.SIX
            '5' -> Rank.FIVE
            '4' -> Rank.FOUR
            '3' -> Rank.THREE
            '2' -> Rank.TWO
            else -> throw IllegalArgumentException("Invalid rank: $rankChar")
        }
    }

    private fun parseSuit(suitChar: Char): Suit {
        return when (suitChar) {
            's' -> Suit.SPADES
            'h' -> Suit.HEARTS
            'd' -> Suit.DIAMONDS
            'c' -> Suit.CLUBS
            else -> throw IllegalArgumentException("Invalid suit: $suitChar")
        }
    }

    private fun formatBoard(cards: List<Card>): String {
        return cards.joinToString("") { "${it.rank.symbol}${it.suit.symbol}" }
    }
}

/**
 * Inspect strategy info sets.
 */
class StrategyInspectCommand : CliktCommand(
    name = "inspect",
    help = "Inspect information sets in a strategy"
) {
    private val strategyId by argument(help = "Strategy ID")
    private val limit by option("--limit", "-n", help = "Limit number of info sets shown").convert { it.toInt() }.default(50)
    private val filter by option("--filter", "-f", help = "Filter info sets by prefix (e.g., 'PREFLOP')").default("")

    override fun run() {
        val repository = StrategyRepository()

        try {
            val id = UUID.fromString(strategyId)
            val coreStrategy = repository.loadStrategyData(id)
                ?: throw IllegalArgumentException("Strategy data not found for $strategyId")

            echo("Strategy ID: $strategyId")
            echo("="

.repeat(80))
            echo()

            // Get all info sets
            val allInfoSets = coreStrategy.getAllInfoSetKeys().sorted()
            val filteredInfoSets = if (filter.isNotEmpty()) {
                allInfoSets.filter { it.contains(filter, ignoreCase = true) }
            } else {
                allInfoSets
            }

            echo("Total info sets: ${allInfoSets.size}")
            if (filter.isNotEmpty()) {
                echo("Filtered (containing '$filter'): ${filteredInfoSets.size}")
            }
            echo()

            // Show sample of info sets
            val displayCount = minOf(limit, filteredInfoSets.size)
            echo("Showing first $displayCount info sets:")
            echo("-".repeat(80))

            filteredInfoSets.take(displayCount).forEach { infoSet ->
                echo(infoSet)
            }

            if (filteredInfoSets.size > limit) {
                echo()
                echo("... and ${filteredInfoSets.size - limit} more")
                echo()
                echo("Use --limit to show more, or --filter to narrow down")
            }
        } catch (e: IllegalArgumentException) {
            echo(OutputFormatter.formatError("Invalid input: ${e.message}"))
        } catch (e: Exception) {
            echo(OutputFormatter.formatError(e.message ?: "Failed to inspect strategy"))
        }
    }
}

/**
 * Extract blueprint range from strategy.
 */
class StrategyExtractRangeCommand : CliktCommand(
    name = "extract-range",
    help = "Extract BTN opening range from a blueprint strategy"
) {
    private val strategyId by argument(help = "Strategy ID")
    private val blueprintId by argument(help = "Blueprint ID")
    private val output by option("--output", "-o", help = "Output file (default: stdout)")

    override fun run() {
        val repository = com.nlhsolver.storage.StrategyRepository()
        val blueprintRepo = com.nlhsolver.storage.BlueprintRepository()
        val extractor = com.nlhsolver.solver.RangeExtractor()

        try {
            val id = UUID.fromString(strategyId)
            val bpId = UUID.fromString(blueprintId)

            // Load blueprint config
            val config = blueprintRepo.findConfiguration(bpId)
                ?: throw IllegalArgumentException("Blueprint $blueprintId not found")

            echo("Extracting BTN opening range...")
            echo("  Strategy: $strategyId")
            echo("  Blueprint: ${config.scenarioName}")
            echo()

            // Extract range
            val range = extractor.extractBTNOpeningRange(id, config, repository)

            // Output as text
            val text = extractor.exportToText(range)

            if (output != null) {
                java.io.File(output!!).writeText(text)
                echo("✓ Range exported to: $output")
            } else {
                echo(text)
            }
        } catch (e: IllegalArgumentException) {
            echo(OutputFormatter.formatError("Invalid input: ${e.message}"))
        } catch (e: Exception) {
            echo(OutputFormatter.formatError(e.message ?: "Failed to extract range"))
            e.printStackTrace()
        }
    }
}
