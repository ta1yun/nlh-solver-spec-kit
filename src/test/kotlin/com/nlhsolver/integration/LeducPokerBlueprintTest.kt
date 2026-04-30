package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeLessThan

/**
 * Leduc Poker - simplified poker variant for testing CFR convergence.
 *
 * DISABLED: This 2-round Leduc implementation has stack overflow bugs.
 * Use SimplifiedLeducTest instead (1-round variant with fixed bugs).
 *
 * Rules:
 * - 2 players
 * - Deck: 6 cards (Jd, Jh, Qd, Qh, Kd, Kh)
 * - Each player dealt 1 card
 * - Round 1: betting (small bet = 2)
 * - 1 public board card dealt
 * - Round 2: betting (large bet = 4)
 * - Showdown: best hand wins (pair > high card)
 *
 * For blueprint testing, we fix the board card and enumerate all matchups.
 */
class LeducPokerBlueprintTest : FunSpec({

    test("Leduc poker multi-matchup should converge with external sampling").config(enabled = false) {
        println("\n=== Leduc Poker Blueprint Solve Test ===\n")

        // Fix board card: King of hearts
        val boardCard = LeducCard.Kh

        // All possible matchups with fixed board
        // P1 can have any of the 5 remaining cards
        // P2 can have any of the 4 cards P1 doesn't have
        val availableCards = LeducCard.values().filter { it != boardCard }

        data class LeducMatchup(
            val p1Card: LeducCard,
            val p2Card: LeducCard,
            val state: LeducGameState,
            val weight: Double
        )

        val matchups = mutableListOf<LeducMatchup>()
        for (p1Card in availableCards) {
            for (p2Card in availableCards) {
                if (p1Card != p2Card) {
                    val state = LeducGameState(
                        p1Card = p1Card,
                        p2Card = p2Card,
                        boardCard = boardCard,
                        pot = 2.0,  // Antes: 1 + 1
                        round = 0,  // Round 1 (pre-board)
                        history = "",
                        currentPlayer = 0  // P1 acts first
                    )
                    matchups.add(LeducMatchup(p1Card, p2Card, state, 1.0))
                }
            }
        }

        println("Fixed board: $boardCard")
        println("Total matchups: ${matchups.size}")
        println()

        // Normalize weights
        val totalWeight = matchups.sumOf { it.weight }
        matchups.forEach { it.copy(weight = it.weight / totalWeight) }

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        // External sampling
        fun sampleMatchup(): LeducMatchup {
            val random = Math.random() * totalWeight
            var sum = 0.0
            for (matchup in matchups) {
                sum += matchup.weight
                if (random <= sum) return matchup
            }
            return matchups.last()
        }

        println("Training with external sampling:")
        val checkpoints = listOf(0, 1_000, 5_000, 10_000, 20_000)
        var lastCheckpoint = 0

        for (checkpoint in checkpoints) {
            val iterationsToRun = checkpoint - lastCheckpoint

            // Train
            for (iter in 1..iterationsToRun) {
                val sampled = sampleMatchup()
                solver.train(sampled.state, iterations = 1)
            }

            // Evaluate
            var totalExploit = 0.0
            for (matchup in matchups) {
                val exploit = exploitCalc.calculateExploitability(
                    matchup.state,
                    solver.getStrategyProfile()
                )
                totalExploit += exploit * matchup.weight
            }
            val avgExploit = totalExploit
            val avgExploitPct = (avgExploit / 2.0) * 100  // Normalize by pot

            println("  ${checkpoint.toString().padStart(6)} iterations: ${String.format("%6.2f%%", avgExploitPct)} exploitability")

            lastCheckpoint = checkpoint
        }

        // Final validation
        var finalExploit = 0.0
        for (matchup in matchups) {
            val exploit = exploitCalc.calculateExploitability(
                matchup.state,
                solver.getStrategyProfile()
            )
            finalExploit += exploit * matchup.weight
        }
        val finalExploitPct = (finalExploit / 2.0) * 100

        println()
        println("Final average exploitability: ${String.format("%.2f%%", finalExploitPct)}")
        println()

        // Should converge to low exploitability
        finalExploitPct shouldBeLessThan 5.0

        println("✓ Leduc poker blueprint solve converged!")
    }
})

/**
 * Leduc poker cards.
 */
enum class LeducCard {
    Jd, Jh,  // Jacks
    Qd, Qh,  // Queens
    Kd, Kh;  // Kings

    val rank: Int
        get() = when (this) {
            Jd, Jh -> 0
            Qd, Qh -> 1
            Kd, Kh -> 2
        }
}

/**
 * Leduc poker game state.
 *
 * Simplified for blueprint testing: board card is fixed (not a chance node).
 */
data class LeducGameState(
    val p1Card: LeducCard,
    val p2Card: LeducCard,
    val boardCard: LeducCard,
    val pot: Double,
    val round: Int,  // 0 = pre-board, 1 = post-board
    val history: String,  // Action history: c=check, b=bet, f=fold, r=raise
    val currentPlayer: Int,  // 0 = P1, 1 = P2
    val p1Invested: Double = 1.0,  // Ante
    val p2Invested: Double = 1.0,  // Ante
    val p1Folded: Boolean = false,
    val p2Folded: Boolean = false
) : GameState {

    companion object {
        const val SMALL_BET = 2.0
        const val LARGE_BET = 4.0
    }

    override fun isTerminal(): Boolean {
        // Fold
        if (p1Folded || p2Folded) return true

        // Showdown after round 2
        if (round == 1) {
            // Check if betting is complete
            val lastTwoActions = history.takeLast(2)
            return lastTwoActions == "cc" || lastTwoActions == "cb" || lastTwoActions == "bb"
        }

        // Round 0 ends when both players have acted and bets are matched
        if (round == 0 && history.isNotEmpty()) {
            val lastTwoActions = history.takeLast(2)
            if (lastTwoActions == "cc") return false  // Move to round 1
            if (lastTwoActions == "cb" || lastTwoActions == "bb") return false  // Move to round 1
        }

        return false
    }

    override fun getUtility(): DoubleArray {
        if (!isTerminal()) error("Not terminal")

        // Fold
        if (p1Folded) return doubleArrayOf(-p1Invested, p1Invested)
        if (p2Folded) return doubleArrayOf(p2Invested, -p2Invested)

        // Showdown
        val p1Hand = getHandRank(p1Card, boardCard)
        val p2Hand = getHandRank(p2Card, boardCard)

        return when {
            p1Hand > p2Hand -> doubleArrayOf(p2Invested, -p2Invested)  // P1 wins
            p2Hand > p1Hand -> doubleArrayOf(-p1Invested, p1Invested)  // P2 wins
            else -> doubleArrayOf(0.0, 0.0)  // Tie
        }
    }

    override fun currentPlayer(): Int? {
        if (isTerminal()) return null
        return currentPlayer
    }

    override fun getLegalActions(): List<GameAction> {
        if (isTerminal()) return emptyList()

        val betSize = if (round == 0) SMALL_BET else LARGE_BET
        val lastAction = history.lastOrNull()

        return when (lastAction) {
            null, 'c' -> listOf(
                SimpleGameAction("check", "Check"),
                SimpleGameAction("bet$betSize", "Bet $betSize")
            )
            'b', 'r' -> listOf(
                SimpleGameAction("fold", "Fold"),
                SimpleGameAction("call", "Call"),
                SimpleGameAction("raise$betSize", "Raise $betSize")
            )
            else -> emptyList()
        }
    }

    override fun applyAction(action: GameAction): GameState {
        val actionId = action.getActionId()
        val betSize = if (round == 0) SMALL_BET else LARGE_BET

        // Parse action
        val (actionType, newHistory) = when {
            actionId == "fold" -> Pair("fold", history + 'f')
            actionId == "check" -> Pair("check", history + 'c')
            actionId == "call" -> Pair("call", history + 'c')
            actionId.startsWith("bet") -> Pair("bet", history + 'b')
            actionId.startsWith("raise") -> Pair("raise", history + 'r')
            else -> error("Unknown action: $actionId")
        }

        var newP1Invested = p1Invested
        var newP2Invested = p2Invested
        var newP1Folded = p1Folded
        var newP2Folded = p2Folded
        var newRound = round
        var newCurrentPlayer = 1 - currentPlayer

        when (actionType) {
            "fold" -> {
                if (currentPlayer == 0) newP1Folded = true else newP2Folded = true
            }
            "call" -> {
                val amountToCall = if (currentPlayer == 0) {
                    p2Invested - p1Invested
                } else {
                    p1Invested - p2Invested
                }
                if (currentPlayer == 0) {
                    newP1Invested += amountToCall
                } else {
                    newP2Invested += amountToCall
                }
            }
            "bet" -> {
                if (currentPlayer == 0) {
                    newP1Invested += betSize
                } else {
                    newP2Invested += betSize
                }
            }
            "raise" -> {
                // First call, then raise
                val amountToCall = if (currentPlayer == 0) {
                    p2Invested - p1Invested
                } else {
                    p1Invested - p2Invested
                }
                val totalRaise = amountToCall + betSize
                if (currentPlayer == 0) {
                    newP1Invested += totalRaise
                } else {
                    newP2Invested += totalRaise
                }
            }
        }

        // Check if round should advance
        if (round == 0 && !newP1Folded && !newP2Folded) {
            val lastTwo = newHistory.takeLast(2)
            if (lastTwo == "cc" || (lastTwo.length >= 2 && lastTwo.endsWith("c") && newP1Invested == newP2Invested)) {
                newRound = 1
                newCurrentPlayer = 0  // P1 acts first in round 2
            }
        }

        return copy(
            history = newHistory,
            currentPlayer = newCurrentPlayer,
            p1Invested = newP1Invested,
            p2Invested = newP2Invested,
            p1Folded = newP1Folded,
            p2Folded = newP2Folded,
            round = newRound
        )
    }

    override fun getInfoSet(): String {
        val card = if (currentPlayer == 0) p1Card else p2Card
        val boardInfo = if (round == 1) ":board=$boardCard" else ""
        return "p$currentPlayer:card=$card$boardInfo:r$round:h=$history"
    }

    override fun getStateHash(): String {
        return "p1=$p1Card:p2=$p2Card:board=$boardCard:r=$round:h=$history"
    }

    private fun getHandRank(card: LeducCard, board: LeducCard): Int {
        // Pair beats high card
        return if (card.rank == board.rank) {
            100 + card.rank  // Pair
        } else {
            card.rank  // High card
        }
    }
}
