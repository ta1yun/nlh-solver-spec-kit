package com.nlhsolver.integration

import com.nlhsolver.core.*
import io.kotest.core.spec.style.FunSpec

class CompareKeys : FunSpec({

    test("Compare reference keys vs our keys") {
        println("\n=== Key Format Comparison ===\n")

        println("Reference keys (first 30 sorted):")
        val refTrainer = ReferenceLeducTrainer()
        val (_, refMap) = refTrainer.train(1000)
        refMap.keys.sorted().take(30).forEach { println("  '$it'") }

        println("\nOur keys from same game:")
        val ourState = LeducWithSuitAbstraction(0, 2, 4, 1, 1.0, 1.0, "")

        println("  R1 initial (P0=J): '${ourState.getInfoSet()}'")

        val s1 = ourState.applyAction(SimpleGameAction("x", "")) as LeducWithSuitAbstraction
        println("  After P0 checks (P1=Q): '${s1.getInfoSet()}'")

        val s2 = s1.applyAction(SimpleGameAction("x", "")) as LeducWithSuitAbstraction
        println("  R2 start (P0=J, board=K): '${s2.getInfoSet()}'")

        val s3 = s2.applyAction(SimpleGameAction("x", "")) as LeducWithSuitAbstraction
        println("  R2 after P0 checks (P1=Q): '${s3.getInfoSet()}'")

        println("\n  R1 with bet:")
        val b1 = ourState.applyAction(SimpleGameAction("b", "")) as LeducWithSuitAbstraction
        println("  After P0 bets (P1=Q): '${b1.getInfoSet()}'")

        println("\nExpected reference format:")
        println("  'J ' - Jack initial")
        println("  'Q x' - Queen after opponent checks")
        println("  'JK xxd' - Jack in R2 with King board after check-check")
        println("  'QK xxdx' - Queen in R2 after check-check-check")
        println("  'Q b' - Queen facing bet")
    }
})
