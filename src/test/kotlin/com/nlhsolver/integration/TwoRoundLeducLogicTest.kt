package com.nlhsolver.integration

import com.nlhsolver.core.SimpleGameAction
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

/**
 * Verify 2-round Leduc game logic.
 */
class TwoRoundLeducLogicTest : FunSpec({

    test("Round 1: check-check advances to round 2") {
        val s0 = TwoRoundLeducState(
            p1Card = 2, p2Card = 1, boardCard = 2,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val s1 = s0.applyAction(SimpleGameAction("c", "Check")) as TwoRoundLeducState
        println("After P1 checks (R1): round=${s1.round}, history='${s1.history}', terminal=${s1.isTerminal()}")

        val s2 = s1.applyAction(SimpleGameAction("c", "Check")) as TwoRoundLeducState
        println("After P2 checks (R1): round=${s2.round}, history='${s2.history}', terminal=${s2.isTerminal()}")

        s2.round shouldBe 2
        s2.history shouldBe ""  // History resets for round 2
        s2.isTerminal() shouldBe false
    }

    test("Round 1: bet-call advances to round 2") {
        val s0 = TwoRoundLeducState(
            p1Card = 2, p2Card = 1, boardCard = 2,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val s1 = s0.applyAction(SimpleGameAction("b", "Bet")) as TwoRoundLeducState
        println("After P1 bets (R1): round=${s1.round}, history='${s1.history}', investments=P1:${s1.p1Invested},P2:${s1.p2Invested}")

        val s2 = s1.applyAction(SimpleGameAction("c", "Call")) as TwoRoundLeducState
        println("After P2 calls (R1): round=${s2.round}, history='${s2.history}', investments=P1:${s2.p1Invested},P2:${s2.p2Invested}")

        s2.round shouldBe 2
        s2.history shouldBe ""
        s2.p1Invested shouldBe 3.0  // 1 ante + 2 bet
        s2.p2Invested shouldBe 3.0  // 1 ante + 2 call
        s2.isTerminal() shouldBe false
    }

    test("Round 2: check-check goes to showdown") {
        val s0 = TwoRoundLeducState(
            p1Card = 2, p2Card = 1, boardCard = 2,
            round = 2, p1Invested = 3.0, p2Invested = 3.0, history = ""
        )

        val s1 = s0.applyAction(SimpleGameAction("c", "Check")) as TwoRoundLeducState
        val s2 = s1.applyAction(SimpleGameAction("c", "Check")) as TwoRoundLeducState

        println("After R2 check-check: terminal=${s2.isTerminal()}, utility=${s2.getUtility().contentToString()}")

        s2.isTerminal() shouldBe true
        s2.getUtility() shouldBe doubleArrayOf(3.0, -3.0)  // P1 has pair, wins
    }

    test("Round 2: bet-call goes to showdown with larger bet") {
        val s0 = TwoRoundLeducState(
            p1Card = 2, p2Card = 1, boardCard = 2,
            round = 2, p1Invested = 3.0, p2Invested = 3.0, history = ""
        )

        val s1 = s0.applyAction(SimpleGameAction("b", "Bet")) as TwoRoundLeducState
        println("After P1 bets (R2): investments=P1:${s1.p1Invested},P2:${s1.p2Invested}")

        val s2 = s1.applyAction(SimpleGameAction("c", "Call")) as TwoRoundLeducState
        println("After P2 calls (R2): investments=P1:${s2.p1Invested},P2:${s2.p2Invested}, utility=${s2.getUtility().contentToString()}")

        s2.isTerminal() shouldBe true
        s2.p1Invested shouldBe 7.0  // 3 from R1 + 4 bet
        s2.p2Invested shouldBe 7.0  // 3 from R1 + 4 call
        s2.getUtility() shouldBe doubleArrayOf(7.0, -7.0)
    }

    test("Round 1: fold ends game immediately") {
        val s0 = TwoRoundLeducState(
            p1Card = 2, p2Card = 1, boardCard = 2,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val s1 = s0.applyAction(SimpleGameAction("b", "Bet")) as TwoRoundLeducState
        val s2 = s1.applyAction(SimpleGameAction("f", "Fold")) as TwoRoundLeducState

        println("After P2 folds (R1): terminal=${s2.isTerminal()}, utility=${s2.getUtility().contentToString()}")

        s2.isTerminal() shouldBe true
        s2.getUtility() shouldBe doubleArrayOf(1.0, -1.0)  // P1 wins P2's ante
    }

    test("Info sets: Round 1 hides board, Round 2 reveals board") {
        val s0 = TwoRoundLeducState(
            p1Card = 2, p2Card = 1, boardCard = 2,
            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
        )

        val infoR1 = s0.getInfoSet()
        println("Round 1 info set: $infoR1")
        infoR1 shouldBe "p0:c2:r1:h="  // No board card!

        val s1 = TwoRoundLeducState(
            p1Card = 2, p2Card = 1, boardCard = 2,
            round = 2, p1Invested = 3.0, p2Invested = 3.0, history = ""
        )

        val infoR2 = s1.getInfoSet()
        println("Round 2 info set: $infoR2")
        infoR2 shouldBe "p0:c2:board2:r2:h="  // Board revealed!
    }
})
