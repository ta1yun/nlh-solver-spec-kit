package com.nlhsolver.integration

import io.kotest.core.spec.style.FunSpec

/**
 * Manually trace through all info sets to verify the count.
 */
class TraceProperLeducInfoSets : FunSpec({

    test("Trace all info sets from one matchup") {
        println("\n=== Tracing Info Sets from P1=K♦(4) vs P2=J♦(0) ===\n")

        val allInfoSets = mutableSetOf<String>()
        var nodeCount = 0

        fun explore(state: ProperLeducState, depth: Int = 0, path: String = "") {
            if (state.isTerminal()) {
                println("${"  ".repeat(depth)}Terminal: $path")
                return
            }

            nodeCount++
            val infoSet = state.getInfoSet()
            val isNew = allInfoSets.add(infoSet)
            val marker = if (isNew) "NEW" else "seen"

            println("${"  ".repeat(depth)}[$marker] $infoSet")

            for (action in state.getLegalActions()) {
                val nextState = state.applyAction(action) as ProperLeducState
                explore(nextState, depth + 1, "$path${action.getActionId()}")
            }
        }

        val state = ProperLeducState(
            p1Card = 4,  // K♦
            p2Card = 0,  // J♦
            boardCard = 5,  // K♥
            round = 1,
            p1Invested = 1.0,
            p2Invested = 1.0,
            history = ""
        )

        explore(state)

        println("\n=== Summary ===")
        println("Nodes visited: $nodeCount")
        println("Unique info sets from this matchup: ${allInfoSets.size}")

        // Categorize by round and decision point
        val r1InfoSets = allInfoSets.filter { "r1:" in it }
        val r2InfoSets = allInfoSets.filter { "r2:" in it }

        println("\nRound 1 info sets: ${r1InfoSets.size}")
        r1InfoSets.sorted().forEach { println("  $it") }

        println("\nRound 2 info sets: ${r2InfoSets.size}")
        println("(showing first 20)")
        r2InfoSets.sorted().take(20).forEach { println("  $it") }
    }

    test("Calculate expected info sets analytically") {
        println("\n=== Analytical Calculation ===\n")

        val boardCard = 5  // K♥
        val availableCards = (0..5).filter { it != boardCard }  // 5 cards

        println("Available cards: ${availableCards.size}")
        println()

        // Round 1 decision points with their histories
        val r1DecisionPoints = listOf(
            "" to "P0 initial",
            "c" to "P1 after P0 check",
            "b" to "P1 after P0 bet (can fold/call/raise)",
            "cb" to "P0 after check-bet (can fold/call/raise)",
            "br" to "P0 after bet-raise (can fold/call only)",
            "cbr" to "P1 after check-bet-raise (can fold/call only)"
        )

        println("=== ROUND 1 ===")
        println("Decision points:")
        r1DecisionPoints.forEachIndexed { i, (hist, desc) ->
            println("  ${i+1}. '$hist' - $desc")
        }
        println("\nR1 info sets: ${r1DecisionPoints.size} decision points × ${availableCards.size} cards = ${r1DecisionPoints.size * availableCards.size}")

        // Round 1 endings that advance to R2 (non-terminal)
        val r1Endings = listOf(
            "cc|" to "check-check",
            "bc|" to "bet-call",
            "brc|" to "bet-raise-call",
            "cbc|" to "check-bet-call",
            "cbrc|" to "check-bet-raise-call"
        )

        println("\n=== ROUND 2 ===")
        println("R1 endings that advance to R2:")
        r1Endings.forEachIndexed { i, (ending, desc) ->
            println("  ${i+1}. '$ending' - $desc")
        }

        // Round 2 has same structure as R1 but after each ending
        val r2DecisionPointsPerEnding = listOf(
            "" to "P0 initial",
            "c" to "P1 after P0 check",
            "b" to "P1 after P0 bet (can fold/call/raise)",
            "cb" to "P0 after check-bet (can fold/call/raise)",
            "br" to "P0 after bet-raise (can fold/call only)",
            "cbr" to "P1 after check-bet-raise (can fold/call only)"
        )

        println("\nDecision points per R2 (same structure as R1):")
        r2DecisionPointsPerEnding.forEachIndexed { i, (hist, desc) ->
            println("  ${i+1}. 'XX|$hist' - $desc")
        }

        val r2InfoSetsPerEnding = r2DecisionPointsPerEnding.size * availableCards.size
        val totalR2InfoSets = r1Endings.size * r2InfoSetsPerEnding

        println("\nR2 info sets: ${r1Endings.size} R1 endings × ${r2DecisionPointsPerEnding.size} decision points × ${availableCards.size} cards")
        println("            = ${r1Endings.size} × ${r2DecisionPointsPerEnding.size} × ${availableCards.size}")
        println("            = $totalR2InfoSets")

        val totalInfoSets = (r1DecisionPoints.size * availableCards.size) + totalR2InfoSets

        println("\n=== TOTAL ===")
        println("Round 1: ${r1DecisionPoints.size * availableCards.size}")
        println("Round 2: $totalR2InfoSets")
        println("TOTAL: $totalInfoSets info sets")

        println("\nVerification:")
        println("  6 R1 decision points × 5 cards = 30")
        println("  5 R1 endings × 6 R2 decision points × 5 cards = 150")
        println("  30 + 150 = 180 ✓")
    }
})
