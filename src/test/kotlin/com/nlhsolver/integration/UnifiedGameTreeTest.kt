package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Test CFR on a unified game tree where matchup selection is a chance node.
 * This is the theoretically correct way to model Leduc with all possible deals.
 */
class UnifiedGameTreeTest : FunSpec({

    test("Train on unified game tree with chance node") {
        println("\n=== Unified Game Tree with Chance Node ===\n")

        // Create root state that represents "before cards are dealt"
        val rootState = LeducUnifiedGameTree()

        println("Training on unified game tree:")
        println("  - Root is a chance node that deals cards")
        println("  - All 120 matchups are part of ONE game tree")
        println("  - Reach probabilities are global")
        println()

        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val exploitCalc = ExploitabilityCalculator(numPlayers = 2)

        // Train on the unified tree
        println("Training:")
        for (iters in listOf(10, 50, 100, 500, 1000)) {
            val prevIters = listOf(0, 10, 50, 100, 500).lastOrNull { it < iters } ?: 0
            solver.train(rootState, iterations = iters - prevIters)

            // Compute exploitability on the unified tree
            val exploit = exploitCalc.calculateExploitability(rootState, solver.getStrategyProfile())
            val exploitPct = (exploit / 2.0) * 100

            println("  ${String.format("%4d", iters)} iters: ${String.format("%.2f%%", exploitPct)}")
        }

        println()
        println("Expected: Should converge since this is ONE game tree!")
    }
})

/**
 * Unified Leduc game tree where the root is a chance node that deals cards.
 * This models the ACTUAL game of Leduc: first chance deals cards, then players act.
 */
class LeducUnifiedGameTree(
    val phase: String = "deal",  // "deal" or "play"
    val p1Card: Int? = null,
    val p2Card: Int? = null,
    val boardCard: Int? = null,
    val round: Int = 1,
    val p1Invested: Double = 0.0,
    val p2Invested: Double = 0.0,
    val history: String = ""
) : GameState {

    override fun isTerminal(): Boolean {
        if (phase == "deal") return false

        // Delegate to LeducWithSuitAbstraction for play phase
        if (phase == "play") {
            val playState = LeducWithSuitAbstraction(
                p1Card = p1Card!!, p2Card = p2Card!!, boardCard = boardCard!!,
                round = round, p1Invested = p1Invested, p2Invested = p2Invested,
                history = history
            )
            return playState.isTerminal()
        }

        return false
    }

    override fun getUtility(): DoubleArray {
        if (phase == "play") {
            val playState = LeducWithSuitAbstraction(
                p1Card = p1Card!!, p2Card = p2Card!!, boardCard = boardCard!!,
                round = round, p1Invested = p1Invested, p2Invested = p2Invested,
                history = history
            )
            return playState.getUtility()
        }
        return doubleArrayOf(0.0, 0.0)
    }

    override fun currentPlayer(): Int? {
        // Deal phase is a chance node (no player acts)
        if (phase == "deal") return null

        // Play phase delegates to regular game
        if (phase == "play") {
            val playState = LeducWithSuitAbstraction(
                p1Card = p1Card!!, p2Card = p2Card!!, boardCard = boardCard!!,
                round = round, p1Invested = p1Invested, p2Invested = p2Invested,
                history = history
            )
            return playState.currentPlayer()
        }

        return null
    }

    override fun getLegalActions(): List<GameAction> {
        // Deal phase: all possible card deals
        if (phase == "deal") {
            val allCards = 0..5
            val deals = mutableListOf<GameAction>()

            for (p1 in allCards) {
                for (p2 in allCards) {
                    for (board in allCards) {
                        if (p1 != p2 && p1 != board && p2 != board) {
                            deals.add(SimpleGameAction(
                                "deal_${p1}_${p2}_${board}",
                                "Deal P1=$p1, P2=$p2, Board=$board"
                            ))
                        }
                    }
                }
            }

            return deals
        }

        // Play phase: delegate to regular game
        if (phase == "play") {
            val playState = LeducWithSuitAbstraction(
                p1Card = p1Card!!, p2Card = p2Card!!, boardCard = boardCard!!,
                round = round, p1Invested = p1Invested, p2Invested = p2Invested,
                history = history
            )
            return playState.getLegalActions()
        }

        return emptyList()
    }

    override fun applyAction(action: GameAction): GameState {
        val actionId = action.getActionId()

        // Deal phase: transition to play phase with dealt cards
        if (phase == "deal" && actionId.startsWith("deal_")) {
            val parts = actionId.removePrefix("deal_").split("_")
            val p1 = parts[0].toInt()
            val p2 = parts[1].toInt()
            val board = parts[2].toInt()

            return LeducUnifiedGameTree(
                phase = "play",
                p1Card = p1,
                p2Card = p2,
                boardCard = board,
                round = 1,
                p1Invested = 1.0,  // Antes
                p2Invested = 1.0,
                history = ""
            )
        }

        // Play phase: delegate to regular game and wrap result
        if (phase == "play") {
            val playState = LeducWithSuitAbstraction(
                p1Card = p1Card!!, p2Card = p2Card!!, boardCard = boardCard!!,
                round = round, p1Invested = p1Invested, p2Invested = p2Invested,
                history = history
            )
            val nextPlayState = playState.applyAction(action) as LeducWithSuitAbstraction

            return LeducUnifiedGameTree(
                phase = "play",
                p1Card = nextPlayState.p1Card,
                p2Card = nextPlayState.p2Card,
                boardCard = nextPlayState.boardCard,
                round = nextPlayState.round,
                p1Invested = nextPlayState.p1Invested,
                p2Invested = nextPlayState.p2Invested,
                history = nextPlayState.history
            )
        }

        error("Invalid action: $actionId in phase: $phase")
    }

    override fun getInfoSet(): String {
        // Deal phase: this is a chance node, no info set needed
        // (but CFR will call this, so return something unique)
        if (phase == "deal") {
            return "chance:deal"
        }

        // Play phase: use the same info sets as regular game
        if (phase == "play") {
            val playState = LeducWithSuitAbstraction(
                p1Card = p1Card!!, p2Card = p2Card!!, boardCard = boardCard!!,
                round = round, p1Invested = p1Invested, p2Invested = p2Invested,
                history = history
            )
            return playState.getInfoSet()
        }

        return "unknown"
    }

    override fun getStateHash(): String {
        if (phase == "deal") {
            return "phase=deal"
        }
        return "phase=play:p1=$p1Card:p2=$p2Card:board=$boardCard:r$round:h=$history"
    }
}
