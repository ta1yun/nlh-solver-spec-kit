package com.nlhsolver.integration

import io.kotest.core.spec.style.FunSpec

/**
 * Verify Leduc info sets are unique across matchups.
 */
class LeducInfoSetTest : FunSpec({

    test("Check for info set collisions") {
        val boardCard = 5  // K♥

        // Create a few matchups
        val matchups = listOf(
            TwoRoundLeducState(p1Card = 0, p2Card = 2, boardCard = boardCard, round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""),  // J♦ vs Q♦
            TwoRoundLeducState(p1Card = 1, p2Card = 3, boardCard = boardCard, round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""),  // J♥ vs Q♥
            TwoRoundLeducState(p1Card = 0, p2Card = 3, boardCard = boardCard, round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""),  // J♦ vs Q♥
        )

        println("\n=== Info Set Collision Check ===\n")

        println("Initial state info sets (should ALL be unique):")
        matchups.forEachIndexed { i, m ->
            println("  Matchup $i (P1=${m.p1Card}, P2=${m.p2Card}): ${m.getInfoSet()}")
        }

        val initialInfoSets = matchups.map { it.getInfoSet() }
        val uniqueInitial = initialInfoSets.toSet()
        println("\nUnique info sets: ${uniqueInitial.size} / ${initialInfoSets.size}")

        if (uniqueInitial.size < initialInfoSets.size) {
            println("⚠️  COLLISION DETECTED!")
            initialInfoSets.groupBy { it }.filter { it.value.size > 1 }.forEach { (infoSet, instances) ->
                println("  Info set '$infoSet' used by ${instances.size} matchups")
            }
        } else {
            println("✓ No collisions - all info sets are unique")
        }
    }
})
