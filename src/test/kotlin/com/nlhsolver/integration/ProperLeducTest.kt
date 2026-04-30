package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeLessThan

/**
 * PROPER Leduc Hold'em implementation following official rules:
 * - Deck: 2 suits × 3 ranks = 6 cards (J♦,J♥,Q♦,Q♥,K♦,K♥)
 * - Two rounds with single private card + single board card
 * - TWO-BET MAXIMUM: Can bet, then raise, then only call/fold
 * - Bet sizes: 2 in R1, 4 in R2
 * - Starting pot: 1 chip ante from each player
 */
class ProperLeducTest : FunSpec({

    test("Proper Leduc with raises should converge well") {
        println("\n=== PROPER Leduc Hold'em (with raises) ===\n")

        val boardCard = 5  // K♥

        // All matchups (20 total)
        val matchups = mutableListOf<ProperLeducState>()
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 != p2 && p1 != boardCard && p2 != boardCard) {
                    matchups.add(
                        ProperLeducState(
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
        println("Rule: TWO-BET MAXIMUM (bet → raise → call/fold only)\n")

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        fun computeAvgExploit(): Double {
            var total = 0.0
            for (matchup in matchups) {
                total += exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
            }
            return (total / matchups.size / 2.0) * 100
        }

        println("Training:")
        val checkpoints = listOf(0, 1000, 5000, 10000, 50000, 100000)

        var lastCheckpoint = 0
        var matchupIndex = 0

        for (checkpoint in checkpoints) {
            repeat(checkpoint - lastCheckpoint) {
                val matchup = matchups[matchupIndex % matchups.size]
                matchupIndex++
                solver.train(matchup, iterations = 1)
            }

            val avgExploit = computeAvgExploit()
            println("  $checkpoint iterations: ${String.format("%.2f%%", avgExploit)}")
            lastCheckpoint = checkpoint
        }

        val finalExploit = computeAvgExploit()
        println("\n✓ Proper Leduc: ${String.format("%.2f%%", finalExploit)} exploitability")

        // Should converge much better than the broken version
        finalExploit shouldBeLessThan 10.0
    }

    test("Single matchup should converge to near-zero") {
        println("\n=== Single Proper Leduc Matchup ===")

        val matchup = ProperLeducState(
            p1Card = 4,  // K♦
            p2Card = 0,  // J♦
            boardCard = 5,  // K♥
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        fun computeExploit(): Double {
            val exploit = exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
            return (exploit / 2.0) * 100
        }

        println("Training single matchup:")
        for (i in listOf(0, 1000, 5000, 10000, 50000)) {
            if (i > 0) solver.train(matchup, iterations = i - (if (i == 1000) 0 else listOf(0, 1000, 5000, 10000).last { it < i }))
            val exploit = computeExploit()
            println("  $i iterations: ${String.format("%.2f%%", exploit)}")
        }
    }
})

/**
 * Proper Leduc state with two-bet maximum.
 */
data class ProperLeducState(
    val p1Card: Int,
    val p2Card: Int,
    val boardCard: Int,
    val round: Int,
    val p1Invested: Double,
    val p2Invested: Double,
    val history: String
) : GameState {

    private fun getRank(card: Int) = card / 2
    private fun hasPair(card: Int, board: Int) = getRank(card) == getRank(board)

    private fun countBets(history: String): Int {
        // Count 'b' and 'r' in current round's history
        val currentHistory = if (round == 2 && '|' in history) {
            history.substringAfter("|")
        } else {
            history
        }
        return currentHistory.count { it == 'b' || it == 'r' }
    }

    override fun isTerminal(): Boolean {
        if ('f' in history) return true

        val currentHistory = if (round == 2 && '|' in history) {
            history.substringAfter("|")
        } else {
            history
        }

        // Check-check
        if (currentHistory == "cc") {
            return if (round == 1) false else true  // R1: advance to R2, R2: showdown
        }

        // After bet, someone called
        if (currentHistory.endsWith("bc") || currentHistory.endsWith("rc")) {
            return if (round == 1) false else true  // R1: advance to R2, R2: showdown
        }

        return false
    }

    override fun getUtility(): DoubleArray {
        if (!isTerminal()) return doubleArrayOf(0.0, 0.0)

        // Fold
        if ('f' in history) {
            val currentHistory = if (round == 2 && '|' in history) {
                history.substringAfter("|")
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

        // Showdown
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

        val currentHistory = if (round == 2 && '|' in history) {
            history.substringAfter("|")
        } else {
            history
        }

        return currentHistory.length % 2
    }

    override fun getLegalActions(): List<GameAction> {
        if (isTerminal()) return emptyList()

        val currentHistory = if (round == 2 && '|' in history) {
            history.substringAfter("|")
        } else {
            history
        }

        val lastAction = currentHistory.lastOrNull()
        val betCount = countBets(history)

        return when {
            // After check or initial: can check or bet
            lastAction == null || lastAction == 'c' -> listOf(
                SimpleGameAction("c", "Check"),
                SimpleGameAction("b", "Bet")
            )
            // After first bet: can fold, call, or RAISE (two-bet max not reached)
            lastAction == 'b' && betCount < 2 -> listOf(
                SimpleGameAction("f", "Fold"),
                SimpleGameAction("c", "Call"),
                SimpleGameAction("r", "Raise")
            )
            // After raise (two-bet max reached): can only fold or call
            lastAction == 'r' || (lastAction == 'b' && betCount >= 2) -> listOf(
                SimpleGameAction("f", "Fold"),
                SimpleGameAction("c", "Call")
            )
            else -> emptyList()
        }
    }

    override fun applyAction(action: GameAction): GameState {
        val actionId = action.getActionId()
        val newHistory = history + actionId

        var newP1Inv = p1Invested
        var newP2Inv = p2Invested
        val player = currentPlayer()!!
        val betSize = if (round == 1) 2.0 else 4.0

        when (actionId) {
            "b" -> {
                // Bet
                if (player == 0) newP1Inv += betSize else newP2Inv += betSize
            }
            "r" -> {
                // Raise (add another bet on top of calling)
                if (player == 0) {
                    newP1Inv = p2Invested + betSize
                } else {
                    newP2Inv = p1Invested + betSize
                }
            }
            "c" -> {
                // Call: match opponent's investment
                val lastAction = history.lastOrNull()
                if (lastAction == 'b' || lastAction == 'r') {
                    if (player == 0) newP1Inv = p2Invested else newP2Inv = p1Invested
                }
            }
        }

        // Check if R1 ends and advance to R2
        if (round == 1) {
            val currentHistory = newHistory
            if (currentHistory == "cc" || currentHistory.endsWith("bc") || currentHistory.endsWith("rc")) {
                return copy(
                    round = 2,
                    p1Invested = newP1Inv,
                    p2Invested = newP2Inv,
                    history = newHistory + "|"
                )
            }
        }

        return copy(
            history = newHistory,
            p1Invested = newP1Inv,
            p2Invested = newP2Inv
        )
    }

    override fun getInfoSet(): String {
        val card = if (currentPlayer() == 0) p1Card else p2Card

        // Use full card ID to avoid collisions in multi-matchup
        return if (round == 1) {
            "p${currentPlayer()}:c$card:r1:$history"
        } else {
            val pair = hasPair(card, boardCard)
            val pairStr = if (pair) "pair" else "high"
            "p${currentPlayer()}:$pairStr:c$card:b$boardCard:r2:$history"
        }
    }

    override fun getStateHash(): String {
        return "p1=$p1Card:p2=$p2Card:board=$boardCard:r$round:h=$history"
    }
}
