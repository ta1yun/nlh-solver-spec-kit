package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeLessThan

/**
 * Proper 2-round Leduc Poker implementation.
 *
 * Rules:
 * - 2 players, 6 cards (J, Q, K each with 2 suits)
 * - Ante: 1 chip each
 * - Round 1: Private cards dealt, betting (bet size = 2)
 * - Board card revealed
 * - Round 2: Betting (bet size = 4)
 * - Showdown: Pair > high card
 *
 * Key difference from SimplifiedLeducTest:
 * - Round 1 info sets do NOT include board card (hidden)
 * - Round 2 info sets DO include board card (revealed)
 * - This creates strategic depth: bluff with weak hands before board, value bet pairs after
 */
class TwoRoundLeducTest : FunSpec({

    test("Two-round Leduc should converge to near-zero exploitability") {
        println("\n=== Two-Round Leduc Poker ===\n")

        // Cards: 0=J♦, 1=J♥, 2=Q♦, 3=Q♥, 4=K♦, 5=K♥
        val boardCard = 5  // K♥

        // All matchups with fixed board (20 total: 5 choices for P1 × 4 remaining for P2)
        val matchups = mutableListOf<TwoRoundLeducState>()
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 != p2 && p1 != boardCard && p2 != boardCard) {
                    matchups.add(
                        TwoRoundLeducState(
                            p1Card = p1,
                            p2Card = p2,
                            boardCard = boardCard,
                            round = 1,
                            p1Invested = 1.0,
                            p2Invested = 1.0,
                            history = ""
                        )
                    )
                }
            }
        }

        println("Matchups: ${matchups.size}")

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        fun sampleMatchup() = matchups.random()

        fun computeAvgExploit(): Double {
            var total = 0.0
            for (matchup in matchups) {
                total += exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
            }
            return (total / matchups.size / 2.0) * 100
        }

        println("\nTraining:")
        val checkpoints = listOf(0, 50000, 100000, 500000, 1000000)

        var lastCheckpoint = 0
        var matchupIndex = 0

        for (checkpoint in checkpoints) {
            repeat(checkpoint - lastCheckpoint) {
                // Cycle through matchups systematically
                val matchup = matchups[matchupIndex % matchups.size]
                matchupIndex++
                solver.train(matchup, iterations = 1)
            }

            val avgExploit = computeAvgExploit()
            println("  $checkpoint iterations: ${String.format("%.2f%%", avgExploit)}")
            lastCheckpoint = checkpoint
        }

        val finalExploit = computeAvgExploit()
        println("\n✓ Two-round Leduc: ${String.format("%.2f%%", finalExploit)} exploitability")

        // Should converge much better than 1-round version
        finalExploit shouldBeLessThan 5.0
    }
})

/**
 * Two-round Leduc state with proper hidden board in round 1.
 */
data class TwoRoundLeducState(
    val p1Card: Int,      // 0=J♦, 1=J♥, 2=Q♦, 3=Q♥, 4=K♦, 5=K♥
    val p2Card: Int,
    val boardCard: Int,
    val round: Int,       // 1 or 2
    val p1Invested: Double,
    val p2Invested: Double,
    val history: String   // Actions in current round only
) : GameState {

    private fun getRank(card: Int) = card / 2  // 0-1→0(J), 2-3→1(Q), 4-5→2(K)

    private fun hasPair(card: Int, board: Int) = getRank(card) == getRank(board)

    override fun isTerminal(): Boolean {
        // Fold
        if ('f' in history) return true

        // Round 1: check-check or bet-call advances to round 2
        if (round == 1) {
            return false  // Never terminal in round 1 (except fold)
        }

        // Round 2: check-check or bet-call goes to showdown
        // History format in R2: "R1_actions|R2_actions"
        if (round == 2) {
            val r2History = history.substringAfter("|", "")
            if (r2History == "cc") return true
            if ("bc" in r2History) return true
        }

        return false
    }

    override fun getUtility(): DoubleArray {
        if (!isTerminal()) return doubleArrayOf(0.0, 0.0)

        // Fold
        if ('f' in history) {
            // Get current round's history to determine who folded
            val currentHistory = if (round == 2) {
                history.substringAfter("|", "")
            } else {
                history
            }
            val foldPlayer = (currentHistory.length - 1) % 2
            return if (foldPlayer == 0) {
                doubleArrayOf(-p1Invested, p1Invested)
            } else {
                doubleArrayOf(p2Invested, -p2Invested)
            }
        }

        // Showdown: pair > high card, then compare ranks
        val p1HasPair = hasPair(p1Card, boardCard)
        val p2HasPair = hasPair(p2Card, boardCard)
        val p1Rank = getRank(p1Card)
        val p2Rank = getRank(p2Card)

        val p1Score = if (p1HasPair) 100 + p1Rank else p1Rank
        val p2Score = if (p2HasPair) 100 + p2Rank else p2Rank

        return when {
            p1Score > p2Score -> doubleArrayOf(p2Invested, -p2Invested)
            p2Score > p1Score -> doubleArrayOf(-p1Invested, p1Invested)
            else -> doubleArrayOf(0.0, 0.0)
        }
    }

    override fun currentPlayer(): Int? {
        if (isTerminal()) return null

        // Get current round's history (excluding "|" separator)
        val currentHistory = if (round == 2) {
            history.substringAfter("|", "")
        } else {
            history
        }

        return currentHistory.length % 2
    }

    override fun getLegalActions(): List<GameAction> {
        if (isTerminal()) return emptyList()

        // Get current round's history
        val currentHistory = if (round == 2) {
            history.substringAfter("|", "")
        } else {
            history
        }

        val lastAction = currentHistory.lastOrNull()
        return when (lastAction) {
            null, 'c' -> listOf(
                SimpleGameAction("c", "Check"),
                SimpleGameAction("b", "Bet")
            )
            'b' -> listOf(
                SimpleGameAction("f", "Fold"),
                SimpleGameAction("c", "Call")
            )
            '|' -> listOf(  // Start of round 2
                SimpleGameAction("c", "Check"),
                SimpleGameAction("b", "Bet")
            )
            else -> emptyList()
        }
    }

    override fun applyAction(action: GameAction): GameState {
        val actionId = action.getActionId()
        val newHistory = history + actionId

        var newP1Inv = p1Invested
        var newP2Inv = p2Invested
        var newRound = round

        val player = currentPlayer()!!
        val betSize = if (round == 1) 2.0 else 4.0

        when (actionId) {
            "b" -> {
                if (player == 0) newP1Inv += betSize else newP2Inv += betSize
            }
            "c" -> {
                // Call matches opponent's investment
                if (history.lastOrNull() == 'b') {
                    if (player == 0) newP1Inv = p2Invested else newP2Inv = p1Invested
                }
            }
        }

        // Check if round 1 ends and advances to round 2
        if (round == 1 && (newHistory == "cc" || "bc" in newHistory)) {
            // Advance to round 2, preserve R1 history with separator
            return copy(
                round = 2,
                p1Invested = newP1Inv,
                p2Invested = newP2Inv,
                history = newHistory + "|"  // Separator between rounds
            )
        }

        return copy(
            history = newHistory,
            p1Invested = newP1Inv,
            p2Invested = newP2Inv,
            round = newRound
        )
    }

    override fun getInfoSet(): String {
        val card = if (currentPlayer() == 0) p1Card else p2Card

        // For multi-matchup solving: include full card ID to avoid collisions
        // (J♦ and J♥ must have different strategies when facing different opponents)
        // Round 1: Board is hidden, only see own card (with suit)
        return if (round == 1) {
            "p${currentPlayer()}:c$card:r1:$history"
        } else {
            // Round 2: Board revealed, include card and board (with suits)
            val pair = hasPair(card, boardCard)
            if (pair) {
                "p${currentPlayer()}:pair:c$card:b$boardCard:r2:$history"
            } else {
                "p${currentPlayer()}:high:c$card:b$boardCard:r2:$history"
            }
        }
    }

    override fun getStateHash(): String {
        return "p1=$p1Card:p2=$p2Card:board=$boardCard:r$round:h=$history"
    }
}
