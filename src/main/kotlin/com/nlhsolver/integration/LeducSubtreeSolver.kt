package com.nlhsolver.integration

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.server.HandStrategy

/**
 * Solver for specific Leduc Hold'em subtrees.
 * Used by the HTTP API for on-demand solving.
 */
class LeducSubtreeSolver {

    fun solve(board: String, history: String, iterations: Int): Map<String, HandStrategy> {
        val boardCard = when(board) {
            "J" -> 0
            "Q" -> 2
            "K" -> 4
            else -> 2
        }

        // Convert history to solver format (use 'd' instead of '|')
        val solverHistory = history.replace("|", "d")
        val round = if ('|' in history || 'd' in history) 2 else 1

        // Compute invested amounts based on R1 history
        val (p1Invested, p2Invested) = computeInvestedAmounts(solverHistory)

        // Generate all matchups - MUST start from root for CFR to work
        val matchups = mutableListOf<LeducState>()
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 == p2 || p1 == boardCard || p2 == boardCard) continue

                matchups.add(
                    LeducState(
                        p1Card = p1,
                        p2Card = p2,
                        boardCard = boardCard,
                        round = 1,  // Always start from round 1
                        p1Invested = 1.0,  // Always start with antes
                        p2Invested = 1.0,
                        history = ""  // Always start from root
                    )
                )
            }
        }

        println("DEBUG: Generated ${matchups.size} matchups")
        if (matchups.isEmpty()) {
            throw IllegalStateException("No matchups generated for board=$board, history=$history")
        }

        // Train solver
        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        repeat(iterations) { i ->
            val matchup = matchups[i % matchups.size]
            solver.train(matchup, iterations = 1)
        }

        // Extract strategies
        val profile = solver.getStrategyProfile()
        val strategies = mutableMapOf<String, HandStrategy>()

        val boardRank = when(boardCard) { 0, 1 -> "J"; 2, 3 -> "Q"; 4, 5 -> "K"; else -> "?" }

        // Determine available actions based on history
        val actions = determineActions(solverHistory)
        println("DEBUG: solverHistory='$solverHistory', actions=$actions")

        for (card in 0..5) {
            if (card == boardCard) continue

            val cardRank = when(card) { 0, 1 -> "J"; 2, 3 -> "Q"; 4, 5 -> "K"; else -> "?" }
            val cardSuit = if (card % 2 == 0) "♠" else "♥"
            val cardId = "$cardRank$cardSuit"

            val infoSetKey = "$cardRank$boardRank $solverHistory"

            val strategy = try {
                val strat = profile.getInfoSetStrategy(infoSetKey, actions.size).getAverageStrategy()
                println("DEBUG: infoSetKey='$infoSetKey', strategy.size=${strat.size}")
                strat
            } catch (e: Exception) {
                println("DEBUG: infoSetKey='$infoSetKey' not found, using uniform. Error: ${e.message}")
                DoubleArray(actions.size) { 1.0 / actions.size }
            }

            println("DEBUG: About to create freqMap. actions.size=${actions.size}, strategy.size=${strategy.size}")
            val freqMap = actions.mapIndexed { i, action -> action to strategy[i] }.toMap()
            val evMap = actions.associateWith { 0.0 } // Simplified - not computing EVs for now

            strategies[cardId] = HandStrategy(
                hand = cardId,
                freq = freqMap,
                ev = evMap,
                evTotal = 0.0,
                equity = 0.5 // Simplified
            )
        }

        return strategies
    }

    private fun computeInvestedAmounts(history: String): Pair<Double, Double> {
        // Start with antes
        var p1 = 1.0
        var p2 = 1.0

        // Parse R1 history (before 'd' if present)
        val r1History = if ('d' in history) history.substringBefore("d") else history

        var currentPlayer = 0 // P1 starts
        for (action in r1History) {
            when (action) {
                'b' -> {
                    if (currentPlayer == 0) p1 += 2.0 else p2 += 2.0
                    currentPlayer = 1 - currentPlayer
                }
                'r' -> {
                    // Raise means matching opponent + raising 2
                    if (currentPlayer == 0) {
                        p1 = p2 + 2.0
                    } else {
                        p2 = p1 + 2.0
                    }
                    currentPlayer = 1 - currentPlayer
                }
                'c' -> {
                    // Call means matching opponent
                    if (currentPlayer == 0) p1 = p2 else p2 = p1
                    currentPlayer = 1 - currentPlayer
                }
                'x' -> {
                    // Check - no chips, just switch player
                    currentPlayer = 1 - currentPlayer
                }
                'f' -> {
                    // Fold - shouldn't happen in histories leading to R2
                }
            }
        }

        return Pair(p1, p2)
    }

    private fun determineActions(history: String): List<String> {
        // Determine what actions are available based on history
        // Remove the 'd' separator if present
        val r2History = if ('d' in history) history.substringAfter("d") else history
        val lastAction = r2History.lastOrNull()
        val betCount = r2History.count { it == 'b' || it == 'r' }

        val actions = when {
            lastAction == null || lastAction == 'x' -> listOf("check", "bet")
            lastAction == 'c' -> listOf("check", "bet") // After call, next round
            lastAction == 'b' && betCount < 2 -> listOf("fold", "call", "raise")
            lastAction == 'r' || (lastAction == 'b' && betCount >= 2) -> listOf("fold", "call")
            else -> listOf("check", "bet")
        }

        if (actions.isEmpty()) {
            throw IllegalStateException("No actions determined for history='$history' (r2='$r2History', lastAction='$lastAction')")
        }

        return actions
    }
}
