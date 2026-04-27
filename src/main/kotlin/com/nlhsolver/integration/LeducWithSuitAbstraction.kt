package com.nlhsolver.integration

import com.nlhsolver.core.GameAction
import com.nlhsolver.core.GameState
import com.nlhsolver.core.SimpleGameAction

/**
 * Leduc Hold'em with suit abstraction.
 * Extracted from ProperLeducWithSuitAbstraction for use in main code.
 */
data class LeducWithSuitAbstraction(
    val p1Card: Int,      // 0=J♦, 1=J♥, 2=Q♦, 3=Q♥, 4=K♦, 5=K♥
    val p2Card: Int,
    val boardCard: Int,
    val round: Int,
    val p1Invested: Double,
    val p2Invested: Double,
    val history: String
) : GameState {

    private fun getRank(card: Int) = card / 2  // 0-1→J(0), 2-3→Q(1), 4-5→K(2)
    private fun hasPair(card: Int, board: Int) = getRank(card) == getRank(board)

    /**
     * CANONICAL HAND REPRESENTATION
     *
     * This is the key abstraction that makes it generalizable.
     *
     * For Leduc:
     * - Pre-flop: Just rank (J, Q, K)
     * - Post-flop: Rank combo (J-J, J-Q, ..., K-K)
     *
     * For NLH, this would be:
     * - Pre-flop: Pocket pair (AA), suited (AKs), offsuit (AKo)
     * - Post-flop: Hand category + board texture (flush draws, etc.)
     */
    private fun getCanonicalHand(playerCard: Int, boardCard: Int?, round: Int): String {
        val rank = getRank(playerCard)
        val rankName = when(rank) {
            0 -> "J"
            1 -> "Q"
            2 -> "K"
            else -> "?"
        }

        return if (round == 1) {
            // PRE-FLOP: Board hidden, only rank matters
            // J♦ and J♥ are isomorphic → both map to "J"
            rankName
        } else {
            // POST-FLOP: Board revealed, use rank combination
            // (J, K) and (J, K) are same regardless of suits
            val boardRank = getRank(boardCard!!)
            val boardRankName = when(boardRank) {
                0 -> "J"
                1 -> "Q"
                2 -> "K"
                else -> "?"
            }
            "$rankName-$boardRankName"  // e.g., "J-K", "K-K"
        }
    }

    private fun countBets(history: String): Int {
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

        if (currentHistory == "xx") {
            return if (round == 1) false else true
        }

        if (currentHistory.endsWith("bc") || currentHistory.endsWith("rc")) {
            return if (round == 1) false else true
        }

        return false
    }

    override fun getUtility(): DoubleArray {
        if (!isTerminal()) return doubleArrayOf(0.0, 0.0)

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
            lastAction == null || lastAction == 'x' -> listOf(
                SimpleGameAction("x", "Check"),
                SimpleGameAction("b", "Bet")
            )
            lastAction == 'b' && betCount < 2 -> listOf(
                SimpleGameAction("f", "Fold"),
                SimpleGameAction("c", "Call"),
                SimpleGameAction("r", "Raise")
            )
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
                if (player == 0) newP1Inv += betSize else newP2Inv += betSize
            }
            "r" -> {
                if (player == 0) {
                    newP1Inv = p2Invested + betSize
                } else {
                    newP2Inv = p1Invested + betSize
                }
            }
            "c" -> {
                val lastAction = history.lastOrNull()
                if (lastAction == 'b' || lastAction == 'r') {
                    if (player == 0) newP1Inv = p2Invested else newP2Inv = p1Invested
                }
            }
        }

        if (round == 1) {
            val currentHistory = newHistory
            if (currentHistory == "xx" || currentHistory.endsWith("bc") || currentHistory.endsWith("rc")) {
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

        // KEY: Use canonical hand representation instead of raw card ID
        // MUST match reference format EXACTLY: "JK xxd" not "J-K xx|"
        val canonicalHand = if (round == 1) {
            getCanonicalHand(card, null, round)
        } else {
            // Remove dash to match reference: "JK" not "J-K"
            getCanonicalHand(card, boardCard, round).replace("-", "")
        }

        // Convert history separator to match reference: 'd' instead of '|'
        val referenceHistory = history.replace("|", "d")

        // Format: "JK xxd" (no spaces except between card and history)
        return "$canonicalHand $referenceHistory"
    }

    override fun getStateHash(): String {
        // State hash still uses full card IDs for exact state identification
        return "p1=$p1Card:p2=$p2Card:board=$boardCard:r$round:h=$history"
    }
}

/*
 * HOW THIS GENERALIZES TO NLH:
 *
 * For NLH, getCanonicalHand() would be more complex:
 *
 * fun getCanonicalHand(hole: Pair<Card, Card>, board: List<Card>, street: Street): String {
 *     if (street == Street.PREFLOP) {
 *         // Pre-flop: Use pocket pair / suited / offsuit abstraction
 *         val (c1, c2) = hole
 *         if (c1.rank == c2.rank) return "${c1.rank}${c2.rank}"  // "AA", "KK", etc.
 *
 *         val suited = c1.suit == c2.suit
 *         val ranks = listOf(c1.rank, c2.rank).sortedDescending()
 *         return "${ranks[0]}${ranks[1]}${if (suited) "s" else "o"}"  // "AKs", "AKo"
 *     } else {
 *         // Post-flop: Use hand strength + board texture
 *         val handStrength = evaluateHand(hole, board)  // "pair", "two-pair", etc.
 *         val boardTexture = analyzeBoardTexture(board)  // "rainbow", "flush-draw", etc.
 *         return "$handStrength:$boardTexture"
 *     }
 * }
 *
 * The key insight: Store raw cards, but abstract to canonical form for info sets!
 */
