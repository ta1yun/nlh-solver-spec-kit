package com.nlhsolver.export

import com.nlhsolver.core.CFRSolver
import com.nlhsolver.integration.LeducWithSuitAbstraction
import io.kotest.core.spec.style.FunSpec

class TestInfoSet : FunSpec({
    test("Check xbr info set") {
        // Train solver briefly
        val matchups = mutableListOf<LeducWithSuitAbstraction>()
        for (p1 in 0..5) {
            for (p2 in 0..5) {
                for (board in 0..5) {
                    if (p1 != p2 && p1 != board && p2 != board) {
                        matchups.add(LeducWithSuitAbstraction(
                            p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        ))
                    }
                }
            }
        }
        
        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        repeat(50000) { solver.train(matchups[it % matchups.size], 1) }
        val profile = solver.getStrategyProfile()
        
        // Check info set for P2 with Jack at xbr
        val state = LeducWithSuitAbstraction(
            p1Card = 4, p2Card = 0, boardCard = 2,
            round = 1, p1Invested = 4.0, p2Invested = 2.0,
            history = "xbr"
        )
        
        println("State: P2 with Jack facing raise after xbr")
        println("Info set from game: ${state.getInfoSet()}")
        
        val actions = state.getLegalActions()
        println("Legal actions: ${actions.map { it.getActionId() }}")
        
        try {
            val strat = profile.getInfoSetStrategy(state.getInfoSet(), actions.size).getAverageStrategy()
            println("Strategy: fold=${(strat[0]*100).toFixed(1)}%, call=${(strat[1]*100).toFixed(1)}%")
        } catch (e: Exception) {
            println("ERROR: ${e.message}")
        }
        
        // Also check what export would generate
        val exportKey = "J xbr"
        println("\nExport key: '$exportKey'")
        try {
            val strat = profile.getInfoSetStrategy(exportKey, actions.size).getAverageStrategy()
            println("Strategy: fold=${(strat[0]*100).toFixed(1)}%, call=${(strat[1]*100).toFixed(1)}%")
        } catch (e: Exception) {
            println("ERROR: ${e.message}")
        }
    }
})

fun Double.toFixed(decimals: Int): String = "%.${decimals}f".format(this)
