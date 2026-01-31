package com.nlhsolver.cli

import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.core.subcommands
import com.github.ajalt.clikt.parameters.arguments.argument
import com.github.ajalt.clikt.parameters.options.*
import com.github.ajalt.clikt.parameters.types.double
import com.github.ajalt.clikt.parameters.types.int
import com.nlhsolver.poker.*
import com.nlhsolver.solver.RefinementConfiguration
import com.nlhsolver.solver.RefinementSolver
import com.nlhsolver.storage.BlueprintRepository
import java.util.UUID

/**
 * Refinement command group for solving specific boards with blueprint ranges (T151-T152).
 *
 * Subcommands:
 * - solve: Solve specific board with blueprint ranges
 * - compare: Compare blueprint vs refined strategies
 */
class RefinementCommand : CliktCommand(
    name = "refine",
    help = """
        Solve specific boards with blueprint ranges (fine abstraction for postflop solving).

        Refinement takes a blueprint and solves a specific board with fine abstraction,
        achieving lower exploitability than the blueprint.
    """.trimIndent()
) {
    override fun run() = Unit
}

/**
 * Refinement solve command (T151).
 *
 * Example:
 *   nlhsolver refine solve <blueprint-id> \
 *     --board "Ks7h2d" \
 *     --street FLOP \
 *     --pot 3.5 \
 *     --buckets 200
 */
class RefinementSolveCommand : CliktCommand(
    name = "solve",
    help = "Solve specific board with blueprint ranges (10-30 minutes with fine abstraction)"
) {
    private val blueprintId by argument(name = "blueprint-id", help = "Blueprint UUID to refine from")
    private val board by option("--board", "-b", help = "Board cards (e.g., 'Ks7h2d')").required()
    private val street by option("--street", "-s", help = "Starting street (FLOP, TURN, RIVER)").required()
    private val pot by option("--pot", "-p", help = "Pot size at starting state").double().required()
    private val flopBuckets by option("--flop-buckets", help = "Number of flop buckets").int().default(200)
    private val turnBuckets by option("--turn-buckets", help = "Number of turn buckets").int().default(200)
    private val riverBuckets by option("--river-buckets", help = "Number of river buckets").int().default(200)

    override fun run() {
        val repository = BlueprintRepository()
        val uuid = UUID.fromString(blueprintId)

        // Load blueprint configuration
        val blueprintConfig = repository.findConfiguration(uuid)
        if (blueprintConfig == null) {
            echo("Blueprint not found: $blueprintId", err = true)
            return
        }

        // Parse board and street
        val boardCards = parseBoard(board)
        val startingStreet = Street.valueOf(street.uppercase())

        // Create refinement configuration
        val config = when (startingStreet) {
            Street.FLOP -> RefinementConfiguration.flop(
                blueprintId = uuid,
                board = boardCards,
                stackSizes = blueprintConfig.stackSizes,
                pot = pot,
                flopBuckets = flopBuckets,
                turnBuckets = turnBuckets,
                riverBuckets = riverBuckets
            )
            Street.TURN -> RefinementConfiguration.turn(
                blueprintId = uuid,
                board = boardCards,
                stackSizes = blueprintConfig.stackSizes,
                pot = pot,
                turnBuckets = turnBuckets,
                riverBuckets = riverBuckets
            )
            Street.RIVER -> RefinementConfiguration.river(
                blueprintId = uuid,
                board = boardCards,
                stackSizes = blueprintConfig.stackSizes,
                pot = pot,
                riverBuckets = riverBuckets
            )
            Street.PREFLOP -> {
                echo("Refinement solving is for postflop streets only. Use blueprint solve for preflop.", err = true)
                return
            }
        }

        echo("Creating refinement: ${config.scenarioName}")
        echo("  Refinement ID: ${config.refinementId}")
        echo("  Blueprint: ${blueprintConfig.scenarioName}")
        echo("  Board: ${config.boardString()}")
        echo("  Street: $startingStreet")
        echo("  Pot: $pot bb")
        echo("  Buckets: flop=$flopBuckets, turn=$turnBuckets, river=$riverBuckets")
        echo("")

        // Solve
        echo("Starting refinement solve...")
        val solver = RefinementSolver()
        val result = solver.solve(config)

        echo("")
        echo(result.summary())
    }

    private fun parseBoard(boardStr: String): List<Card> {
        // Parse board string like "Ks7h2d" into list of cards
        val cards = mutableListOf<Card>()
        var i = 0
        while (i < boardStr.length - 1) {
            val rankChar = boardStr[i]
            val suitChar = boardStr[i + 1]

            val rank = parseRank(rankChar)
            val suit = parseSuit(suitChar)

            cards.add(Card(rank, suit))
            i += 2
        }

        return cards
    }

    private fun parseRank(rankChar: Char): Rank {
        return when (rankChar.uppercaseChar()) {
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
        return when (suitChar.lowercaseChar()) {
            's' -> Suit.SPADES
            'h' -> Suit.HEARTS
            'd' -> Suit.DIAMONDS
            'c' -> Suit.CLUBS
            else -> throw IllegalArgumentException("Invalid suit: $suitChar")
        }
    }
}

/**
 * Refinement compare command (T152).
 *
 * Example:
 *   nlhsolver refine compare <refinement-id>
 */
class RefinementCompareCommand : CliktCommand(
    name = "compare",
    help = "Compare blueprint vs refined strategies"
) {
    private val blueprintId by argument(name = "blueprint-id", help = "Blueprint UUID")
    private val board by option("--board", "-b", help = "Board cards (e.g., 'Ks7h2d')").required()
    private val street by option("--street", "-s", help = "Starting street (FLOP, TURN, RIVER)").required()
    private val pot by option("--pot", "-p", help = "Pot size at starting state").double().required()

    override fun run() {
        val repository = BlueprintRepository()
        val uuid = UUID.fromString(blueprintId)

        // Load blueprint configuration
        val blueprintConfig = repository.findConfiguration(uuid)
        if (blueprintConfig == null) {
            echo("Blueprint not found: $blueprintId", err = true)
            return
        }

        // Parse board and street
        val boardCards = parseBoard(board)
        val startingStreet = Street.valueOf(street.uppercase())

        // Create refinement configuration
        val config = when (startingStreet) {
            Street.FLOP -> RefinementConfiguration.flop(
                blueprintId = uuid,
                board = boardCards,
                stackSizes = blueprintConfig.stackSizes,
                pot = pot
            )
            Street.TURN -> RefinementConfiguration.turn(
                blueprintId = uuid,
                board = boardCards,
                stackSizes = blueprintConfig.stackSizes,
                pot = pot
            )
            Street.RIVER -> RefinementConfiguration.river(
                blueprintId = uuid,
                board = boardCards,
                stackSizes = blueprintConfig.stackSizes,
                pot = pot
            )
            Street.PREFLOP -> {
                echo("Refinement solving is for postflop streets only.", err = true)
                return
            }
        }

        echo("Comparing blueprint vs refinement")
        echo("  Blueprint: ${blueprintConfig.scenarioName}")
        echo("  Board: ${config.boardString()}")
        echo("  Street: $startingStreet")
        echo("")

        // Compare
        val solver = RefinementSolver()
        val comparison = solver.compareWithBlueprint(config)

        echo(comparison.summary())
    }

    private fun parseBoard(boardStr: String): List<Card> {
        // Parse board string like "Ks7h2d" into list of cards
        val cards = mutableListOf<Card>()
        var i = 0
        while (i < boardStr.length - 1) {
            val rankChar = boardStr[i]
            val suitChar = boardStr[i + 1]

            val rank = parseRank(rankChar)
            val suit = parseSuit(suitChar)

            cards.add(Card(rank, suit))
            i += 2
        }

        return cards
    }

    private fun parseRank(rankChar: Char): Rank {
        return when (rankChar.uppercaseChar()) {
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
        return when (suitChar.lowercaseChar()) {
            's' -> Suit.SPADES
            'h' -> Suit.HEARTS
            'd' -> Suit.DIAMONDS
            'c' -> Suit.CLUBS
            else -> throw IllegalArgumentException("Invalid suit: $suitChar")
        }
    }
}

/**
 * Main function to register refinement commands.
 */
fun refinementCommand(): CliktCommand {
    return RefinementCommand().subcommands(
        RefinementSolveCommand(),
        RefinementCompareCommand()
    )
}
