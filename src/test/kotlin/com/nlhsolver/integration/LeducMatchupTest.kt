package com.nlhsolver.integration

import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

/**
 * Verify matchup generation is correct.
 */
class LeducMatchupTest : FunSpec({

    test("Count matchups for 2-round Leduc") {
        val boardCard = 5  // K♥

        val matchups = mutableListOf<Pair<Int, Int>>()
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                if (p1 != p2 && p1 != boardCard && p2 != boardCard) {
                    matchups.add(p1 to p2)
                }
            }
        }

        println("\nGenerated ${matchups.size} matchups:")
        matchups.forEach { (p1, p2) ->
            val p1Name = when(p1) {
                0 -> "J♦"; 1 -> "J♥"; 2 -> "Q♦"; 3 -> "Q♥"; 4 -> "K♦"; else -> "?"
            }
            val p2Name = when(p2) {
                0 -> "J♦"; 1 -> "J♥"; 2 -> "Q♦"; 3 -> "Q♥"; 4 -> "K♦"; else -> "?"
            }
            println("  P1=$p1Name($p1), P2=$p2Name($p2)")
        }

        println("\nExpected: 20 matchups (5 possible P1 cards × 4 remaining for P2)")
        matchups.size shouldBe 20
    }
})
