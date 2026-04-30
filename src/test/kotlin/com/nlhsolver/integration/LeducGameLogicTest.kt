package com.nlhsolver.integration

import com.nlhsolver.core.SimpleGameAction
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

/**
 * Verify Leduc poker game logic is correct.
 */
class LeducGameLogicTest : FunSpec({

    test("Check-check goes to showdown") {
        val state = SimpleLeducState(
            p1Card = 2, p2Card = 1, boardCard = 2,
            pot = 2.0, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )
        val s1 = state.applyAction(SimpleGameAction("c", "Check")) as SimpleLeducState
        val s2 = s1.applyAction(SimpleGameAction("c", "Check")) as SimpleLeducState

        println("  History: '${s2.history}'")
        println("  Terminal: ${s2.isTerminal()}")
        println("  Utility: ${s2.getUtility().contentToString()}")

        s2.history shouldBe "cc"
        s2.isTerminal() shouldBe true
        s2.p1Invested shouldBe 1.0
        s2.p2Invested shouldBe 1.0
        s2.getUtility() shouldBe doubleArrayOf(1.0, -1.0)  // P1 wins with pair
    }

    test("Bet-call goes to showdown with correct investments") {
        val state = SimpleLeducState(
            p1Card = 2, p2Card = 1, boardCard = 2,
            pot = 2.0, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )
        val s1 = state.applyAction(SimpleGameAction("b", "Bet")) as SimpleLeducState
        val s2 = s1.applyAction(SimpleGameAction("c", "Call")) as SimpleLeducState

        println("  History: '${s2.history}'")
        println("  Terminal: ${s2.isTerminal()}")
        println("  Investments: P1=${s2.p1Invested}, P2=${s2.p2Invested}")
        println("  Utility: ${s2.getUtility().contentToString()}")

        s2.history shouldBe "bc"
        s2.isTerminal() shouldBe true
        s2.p1Invested shouldBe 3.0  // 1 ante + 2 bet
        s2.p2Invested shouldBe 3.0  // 1 ante + 2 call
        s2.getUtility() shouldBe doubleArrayOf(3.0, -3.0)  // P1 wins P2's full investment
    }

    test("Check-bet-call goes to showdown") {
        val state = SimpleLeducState(
            p1Card = 2, p2Card = 1, boardCard = 2,
            pot = 2.0, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )
        val s1 = state.applyAction(SimpleGameAction("c", "Check")) as SimpleLeducState
        val s2 = s1.applyAction(SimpleGameAction("b", "Bet")) as SimpleLeducState
        val s3 = s2.applyAction(SimpleGameAction("c", "Call")) as SimpleLeducState

        println("  History: '${s3.history}'")
        println("  Terminal: ${s3.isTerminal()}")
        println("  Investments: P1=${s3.p1Invested}, P2=${s3.p2Invested}")
        println("  Utility: ${s3.getUtility().contentToString()}")

        s3.history shouldBe "cbc"
        s3.isTerminal() shouldBe true
        s3.p1Invested shouldBe 3.0  // 1 ante + 2 call
        s3.p2Invested shouldBe 3.0  // 1 ante + 2 bet
        s3.getUtility() shouldBe doubleArrayOf(3.0, -3.0)  // P1 wins
    }

    test("Bet-fold ends immediately") {
        val state = SimpleLeducState(
            p1Card = 2, p2Card = 1, boardCard = 2,
            pot = 2.0, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )
        val s1 = state.applyAction(SimpleGameAction("b", "Bet")) as SimpleLeducState
        val s2 = s1.applyAction(SimpleGameAction("f", "Fold")) as SimpleLeducState

        println("  History: '${s2.history}'")
        println("  Terminal: ${s2.isTerminal()}")
        println("  Investments: P1=${s2.p1Invested}, P2=${s2.p2Invested}")
        println("  Utility: ${s2.getUtility().contentToString()}")

        s2.history shouldBe "bf"
        s2.isTerminal() shouldBe true
        s2.p1Invested shouldBe 3.0
        s2.p2Invested shouldBe 1.0  // Didn't call
        s2.getUtility() shouldBe doubleArrayOf(1.0, -1.0)  // P1 wins P2's ante
    }

    test("Check-bet-fold with P2 winning") {
        val state = SimpleLeducState(
            p1Card = 1, p2Card = 2, boardCard = 2,
            pot = 2.0, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )
        val s1 = state.applyAction(SimpleGameAction("c", "Check")) as SimpleLeducState
        val s2 = s1.applyAction(SimpleGameAction("b", "Bet")) as SimpleLeducState
        val s3 = s2.applyAction(SimpleGameAction("f", "Fold")) as SimpleLeducState

        println("  History: '${s3.history}'")
        println("  Terminal: ${s3.isTerminal()}")
        println("  Investments: P1=${s3.p1Invested}, P2=${s3.p2Invested}")
        println("  Utility: ${s3.getUtility().contentToString()}")

        s3.history shouldBe "cbf"
        s3.isTerminal() shouldBe true
        s3.p1Invested shouldBe 1.0  // Didn't call
        s3.p2Invested shouldBe 3.0
        s3.getUtility() shouldBe doubleArrayOf(-1.0, 1.0)  // P2 wins P1's ante
    }

    test("Check-bet is NOT terminal") {
        val state = SimpleLeducState(
            p1Card = 2, p2Card = 1, boardCard = 2,
            pot = 2.0, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )
        val s1 = state.applyAction(SimpleGameAction("c", "Check")) as SimpleLeducState
        val s2 = s1.applyAction(SimpleGameAction("b", "Bet")) as SimpleLeducState

        println("  History: '${s2.history}'")
        println("  Terminal: ${s2.isTerminal()}")
        println("  Legal actions: ${s2.getLegalActions().map { it.getActionId() }}")

        s2.history shouldBe "cb"
        s2.isTerminal() shouldBe false  // P1 still needs to act!
        s2.getLegalActions().map { it.getActionId() } shouldBe listOf("f", "c")
    }
})
