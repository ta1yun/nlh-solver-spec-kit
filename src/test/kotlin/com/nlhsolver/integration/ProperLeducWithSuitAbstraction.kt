package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.doubles.shouldBeLessThan
import io.kotest.matchers.shouldBe

/**
 * Proper Leduc with SUIT ABSTRACTION (generalizable to NLH).
 *
 * Key insight: Pre-flop, suits are isomorphic. J♦ and J♥ are strategically
 * equivalent when you can't see the board. This is like how in NLH,
 * J♥J♦ is equivalent to J♥J♠ pre-flop.
 *
 * Post-flop, only the rank combination matters for hand strength.
 */
class ProperLeducWithSuitAbstraction : FunSpec({

    test("Proper Leduc with suit abstraction should have 288 info sets") {
        println("\n=== Counting Info Sets with Suit Abstraction ===\n")

        val infoSets = mutableSetOf<String>()

        fun exploreState(state: LeducWithSuitAbstraction) {
            if (state.isTerminal()) return
            infoSets.add(state.getInfoSet())

            for (action in state.getLegalActions()) {
                val nextState = state.applyAction(action) as LeducWithSuitAbstraction
                exploreState(nextState)
            }
        }

        // Explore ALL possible games (not just fixed board)
        val allCards = 0..5  // J♦(0), J♥(1), Q♦(2), Q♥(3), K♦(4), K♥(5)

        for (p1 in allCards) {
            for (p2 in allCards) {
                for (board in allCards) {
                    // Valid if all different cards
                    if (p1 != p2 && p1 != board && p2 != board) {
                        exploreState(LeducWithSuitAbstraction(
                            p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        ))
                    }
                }
            }
        }

        val r1InfoSets = infoSets.filter { "r1:" in it }
        val r2InfoSets = infoSets.filter { "r2:" in it }

        println("Total info sets: ${infoSets.size}")
        println("  Pre-flop (R1): ${r1InfoSets.size}")
        println("  Post-flop (R2): ${r2InfoSets.size}")
        println()
        println("Expected: 288 (18 pre-flop + 270 post-flop)")
        println("Match: ${if (infoSets.size == 288) "✓" else "✗"}")

        println("\nSample pre-flop info sets:")
        r1InfoSets.sorted().take(10).forEach { println("  $it") }

        println("\nSample post-flop info sets:")
        r2InfoSets.sorted().take(10).forEach { println("  $it") }

        infoSets.size shouldBe 288
    }

    test("Single matchup should converge quickly") {
        println("\n=== Single Matchup Convergence ===")

        val matchup = LeducWithSuitAbstraction(
            p1Card = 4, p2Card = 0, boardCard = 5,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        fun computeExploit(): Double {
            val exploit = exploitCalc.calculateExploitability(matchup, solver.getStrategyProfile())
            return (exploit / 2.0) * 100
        }

        println("Training:")
        for (iters in listOf(0, 1000, 5000, 10000, 50000)) {
            if (iters > 0) {
                val prev = listOf(0, 1000, 5000, 10000).lastOrNull { it < iters } ?: 0
                solver.train(matchup, iterations = iters - prev)
            }
            val exploit = computeExploit()
            println("  $iters: ${String.format("%.2f%%", exploit)}")
        }

        val finalExploit = computeExploit()
        finalExploit shouldBeLessThan 1.0
    }
})

/**
 * Leduc state with suit abstraction.
 *
 * This demonstrates the pattern for generalizable suit isomorphism:
 * 1. Store raw card IDs internally
 * 2. Convert to canonical representation for info sets
 * 3. Pre-flop: abstract to rank only
 * 4. Post-flop: abstract to rank combination
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

    /**
     * Returns true if the current betting round is complete.
     *
     * A betting round is complete when:
     * 1. Both players have equal investment (pot is "capped")
     * 2. The last action was passive (check or call, not bet or raise)
     * 3. At least one action has been taken
     *
     * In Leduc, this happens when:
     * - Both check: "xx"
     * - Bet-call: ends with "bc"
     * - Raise-call: ends with "rc"
     * - Check-bet-call: ends with "xbc"
     * - Check-bet-raise-call: ends with "xbrc"
     * - Bet-raise-call: ends with "brc"
     */
    fun isBettingRoundComplete(): Boolean {
        if (isTerminal()) return false

        val currentHistory = if (round == 2 && '|' in history) {
            history.substringAfter("|")
        } else {
            history
        }

        // No actions yet - round not complete
        if (currentHistory.isEmpty()) return false

        // Check for pot-capped patterns
        return currentHistory == "xx" ||
               currentHistory.endsWith("bc") ||
               currentHistory.endsWith("rc")
    }

    /**
     * Returns true if we should transition to the next round.
     * True when betting is complete and we're still in Round 1.
     */
    fun shouldTransitionToRound2(): Boolean {
        return round == 1 && isBettingRoundComplete()
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

        // Use the generalized method to check for round transition
        val newState = copy(
            p1Invested = newP1Inv,
            p2Invested = newP2Inv,
            history = newHistory
        )

        // Transition to Round 2 if betting is complete
        if (newState.shouldTransitionToRound2()) {
            return newState.copy(
                round = 2,
                history = newHistory + "|"
            )
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
