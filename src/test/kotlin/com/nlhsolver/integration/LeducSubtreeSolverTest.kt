package com.nlhsolver.integration

import io.kotest.core.spec.style.FunSpec

class LeducSubtreeSolverTest : FunSpec({

    test("Test solver with simple history") {
        val solver = LeducSubtreeSolver()

        try {
            val result = solver.solve("Q", "bc|", 1000)
            println("Success! Got ${result.size} strategies")
            result.forEach { (hand, strat) ->
                println("$hand: ${strat.freq}")
            }
        } catch (e: Exception) {
            println("Error: ${e.message}")
            e.printStackTrace()
        }
    }
})
