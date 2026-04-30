package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

/**
 * Count and compare info sets between Leduc and NLH.
 */
class InfoSetCountTest : FunSpec({

    test("Count 2-round Leduc info sets") {
        println("\n=== 2-Round Leduc Info Set Count ===\n")

        val boardCard = 5  // K♥
        val infoSets = mutableSetOf<String>()

        // Generate all possible game states
        fun exploreState(state: TwoRoundLeducState) {
            if (state.isTerminal()) return

            // Record current info set
            infoSets.add(state.getInfoSet())

            // Explore all legal actions
            for (action in state.getLegalActions()) {
                val nextState = state.applyAction(action) as TwoRoundLeducState
                exploreState(nextState)
            }
        }

        // Explore from all starting matchups
        val matchups = mutableListOf<TwoRoundLeducState>()
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 != p2 && p1 != boardCard && p2 != boardCard) {
                    val state = TwoRoundLeducState(
                        p1Card = p1, p2Card = p2, boardCard = boardCard,
                        round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                    )
                    matchups.add(state)
                    exploreState(state)
                }
            }
        }

        println("Matchups explored: ${matchups.size}")
        println("Total unique info sets: ${infoSets.size}")

        // Break down by round
        val r1InfoSets = infoSets.filter { "r1:" in it }
        val r2InfoSets = infoSets.filter { "r2:" in it }

        println("\nBreakdown:")
        println("  Round 1 info sets: ${r1InfoSets.size}")
        println("  Round 2 info sets: ${r2InfoSets.size}")

        // Show some examples
        println("\nExample Round 1 info sets:")
        r1InfoSets.take(5).forEach { println("  $it") }

        println("\nExample Round 2 info sets:")
        r2InfoSets.take(5).forEach { println("  $it") }

        println("\n=== For Comparison ===")
        println("NLH starting hands: 1,326 (52 choose 2)")
        println("NLH with 4 streets, multiple bet sizes: MILLIONS of info sets")
        println("2-Round Leduc should be MUCH simpler!")
    }

    test("Track info set visits during training") {
        println("\n=== Info Set Visit Frequency ===\n")

        val boardCard = 5  // K♥
        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        val infoSetVisits = mutableMapOf<String, Int>()

        // Create matchups
        val matchups = mutableListOf<TwoRoundLeducState>()
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 != p2 && p1 != boardCard && p2 != boardCard) {
                    matchups.add(
                        TwoRoundLeducState(
                            p1Card = p1, p2Card = p2, boardCard = boardCard,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        )
                    )
                }
            }
        }

        // Count info set visits during one iteration per matchup
        fun countVisits(state: GameState) {
            if (state.isTerminal()) return
            val infoSet = state.getInfoSet()
            infoSetVisits[infoSet] = infoSetVisits.getOrDefault(infoSet, 0) + 1

            // Pick random action and recurse
            val actions = state.getLegalActions()
            if (actions.isNotEmpty()) {
                val action = actions.random()
                countVisits(state.applyAction(action))
            }
        }

        println("Simulating ${matchups.size} game trees...")
        matchups.forEach { countVisits(it) }

        val totalVisits = infoSetVisits.values.sum()
        val uniqueInfoSets = infoSetVisits.size
        val avgVisitsPerInfoSet = totalVisits.toDouble() / uniqueInfoSets

        println("Total info set visits: $totalVisits")
        println("Unique info sets visited: $uniqueInfoSets")
        println("Average visits per info set: ${String.format("%.1f", avgVisitsPerInfoSet)}")

        println("\nMost visited info sets:")
        infoSetVisits.entries
            .sortedByDescending { it.value }
            .take(10)
            .forEach { (infoSet, count) ->
                println("  $infoSet: $count visits")
            }

        println("\nLeast visited info sets:")
        infoSetVisits.entries
            .sortedBy { it.value }
            .take(10)
            .forEach { (infoSet, count) ->
                println("  $infoSet: $count visits")
            }
    }
})
