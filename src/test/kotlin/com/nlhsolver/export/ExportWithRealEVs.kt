package com.nlhsolver.export

import com.nlhsolver.core.*
import com.nlhsolver.integration.LeducWithSuitAbstraction
import io.kotest.core.spec.style.FunSpec
import java.io.File

/**
 * Export Leduc with ACTUAL computed EVs from the solver.
 */
class ExportWithRealEVs : FunSpec({

    test("Export with real EVs") {
        println("\n=== Computing Real EVs ===\n")

        // Train solver
        val allCards = 0..5
        val allMatchups = mutableListOf<LeducWithSuitAbstraction>()

        for (p1 in allCards) {
            for (p2 in allCards) {
                for (board in allCards) {
                    if (p1 != p2 && p1 != board && p2 != board) {
                        allMatchups.add(LeducWithSuitAbstraction(
                            p1Card = p1, p2Card = p2, boardCard = board,
                            round = 1, p1Invested = 1.0, p2Invested = 1.0, history = ""
                        ))
                    }
                }
            }
        }

        println("Training...")
        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)
        repeat(50000) { i ->
            val matchup = allMatchups[i % allMatchups.size]
            solver.train(matchup, iterations = 1)
            if ((i + 1) % 10000 == 0) println("  ${i + 1} iterations")
        }

        val profile = solver.getStrategyProfile()

        println("\nComputing EVs for each card...")

        // Compute EV for each card in each scenario
        val scenario1EVs = computeScenario1EVs(profile, allCards.toList())
        val scenario2EVs = computeScenario2EVs(profile, allCards.toList())

        println("\nScenario 1 (First to act) EVs:")
        listOf(4, 2, 0).forEach { cardIdx ->
            val rank = when(cardIdx) { 0, 1 -> "J"; 2, 3 -> "Q"; else -> "K" }
            val evs = scenario1EVs[cardIdx]
            if (evs != null) {
                println("  $rank: total=${String.format("%+.3f", evs.totalEV)} BB, check=${String.format("%+.3f", evs.checkEV)} BB, bet=${String.format("%+.3f", evs.betEV)} BB")
            }
        }

        println("\nScenario 2 (Facing bet) EVs:")
        listOf(4, 2, 0).forEach { cardIdx ->
            val rank = when(cardIdx) { 0, 1 -> "J"; 2, 3 -> "Q"; else -> "K" }
            val evs = scenario2EVs[cardIdx]
            if (evs != null) {
                println("  $rank: total=${String.format("%+.3f", evs.totalEV)} BB, fold=${String.format("%+.3f", evs.foldEV)} BB, call=${String.format("%+.3f", evs.callEV)} BB, raise=${String.format("%+.3f", evs.raiseEV)} BB")
            }
        }

        // Export with real EVs
        exportWithEVs(profile, scenario1EVs, scenario2EVs, "/Users/tpai/Downloads/leduc-solution.js")

        println("\n✓ Exported with real EVs to ~/Downloads/leduc-solution.js")
    }
})

data class ActionEVs(
    val checkEV: Double,
    val betEV: Double,
    val totalEV: Double
)

/**
 * Compute EV for each card when first to act in R1.
 * This scenario is already at the root, so EVs are computed directly.
 */
fun computeScenario1EVs(profile: StrategyProfile, allCards: List<Int>): Map<Int, ActionEVs> {
    val evs = mutableMapOf<Int, ActionEVs>()

    for (heroCard in allCards) {
        var checkEVSum = 0.0
        var betEVSum = 0.0
        var totalEVSum = 0.0
        var totalWeight = 0.0

        // Simulate against all possible opponent cards and boards
        for (villainCard in allCards) {
            if (villainCard == heroCard) continue

            for (boardCard in allCards) {
                if (boardCard == heroCard || boardCard == villainCard) continue

                // Weight by probability of this combination (uniform in Leduc)
                val weight = 1.0
                totalWeight += weight

                val state = LeducWithSuitAbstraction(
                    p1Card = heroCard,
                    p2Card = villainCard,
                    boardCard = boardCard,
                    round = 1,
                    p1Invested = 1.0,
                    p2Invested = 1.0,
                    history = ""
                )

                // Total EV (mixed strategy)
                val totalEV = computeExpectedValue(state, profile, doubleArrayOf(1.0, 1.0))
                totalEVSum += totalEV[0] * weight

                // EV if always checking
                val checkState = state.applyAction(state.getLegalActions()[0]) // Check
                val checkEV = computeExpectedValue(checkState, profile, doubleArrayOf(1.0, 1.0))
                checkEVSum += checkEV[0] * weight

                // EV if always betting
                val betState = state.applyAction(state.getLegalActions()[1]) // Bet
                val betEV = computeExpectedValue(betState, profile, doubleArrayOf(1.0, 1.0))
                betEVSum += betEV[0] * weight
            }
        }

        evs[heroCard] = ActionEVs(
            checkEV = checkEVSum / totalWeight,
            betEV = betEVSum / totalWeight,
            totalEV = totalEVSum / totalWeight
        )
    }

    return evs
}

data class ActionEVs2(
    val foldEV: Double,
    val callEV: Double,
    val raiseEV: Double,
    val totalEV: Double
)

/**
 * Compute EV for each card when facing a bet in R1.
 * Uses proper range weighting: starts from game root and weights by
 * villain's actual betting frequency with each hand.
 */
fun computeScenario2EVs(profile: StrategyProfile, allCards: List<Int>): Map<Int, ActionEVs2> {
    val evs = mutableMapOf<Int, ActionEVs2>()

    for (heroCard in allCards) {
        var foldEVSum = 0.0
        var callEVSum = 0.0
        var raiseEVSum = 0.0
        var totalEVSum = 0.0
        var totalWeight = 0.0

        for (villainCard in allCards) {
            if (villainCard == heroCard) continue

            for (boardCard in allCards) {
                if (boardCard == heroCard || boardCard == villainCard) continue

                // Start from game root to get villain's betting frequency
                val rootState = LeducWithSuitAbstraction(
                    p1Card = villainCard,
                    p2Card = heroCard,
                    boardCard = boardCard,
                    round = 1,
                    p1Invested = 1.0,
                    p2Invested = 1.0,
                    history = ""
                )

                // Get villain's (P1) strategy at the root
                val villainInfoSet = rootState.getInfoSet()
                val villainActions = rootState.getLegalActions()
                val villainStrategy = try {
                    profile.getInfoSetStrategy(villainInfoSet, villainActions.size)
                        .getAverageStrategy()
                } catch (e: Exception) {
                    DoubleArray(villainActions.size) { 1.0 / villainActions.size }
                }

                // Weight by probability that villain bets (action index 1)
                val betFrequency = villainStrategy.getOrElse(1) { 0.0 }
                if (betFrequency < 0.0001) continue // Skip if villain never bets with this hand

                val weight = betFrequency
                totalWeight += weight

                // Now we're at the state where villain has bet
                val state = LeducWithSuitAbstraction(
                    p1Card = villainCard,
                    p2Card = heroCard,
                    boardCard = boardCard,
                    round = 1,
                    p1Invested = 3.0,
                    p2Invested = 1.0,
                    history = "b"
                )

                // Total EV (mixed strategy)
                val totalEV = computeExpectedValue(state, profile, doubleArrayOf(1.0, 1.0))
                totalEVSum += totalEV[1] * weight

                val actions = state.getLegalActions()

                // EV if always folding
                val foldState = state.applyAction(actions[0]) // Fold
                val foldEV = computeExpectedValue(foldState, profile, doubleArrayOf(1.0, 1.0))
                foldEVSum += foldEV[1] * weight

                // EV if always calling
                val callState = state.applyAction(actions[1]) // Call
                val callEV = computeExpectedValue(callState, profile, doubleArrayOf(1.0, 1.0))
                callEVSum += callEV[1] * weight

                // EV if always raising
                val raiseState = state.applyAction(actions[2]) // Raise
                val raiseEV = computeExpectedValue(raiseState, profile, doubleArrayOf(1.0, 1.0))
                raiseEVSum += raiseEV[1] * weight
            }
        }

        evs[heroCard] = ActionEVs2(
            foldEV = foldEVSum / totalWeight,
            callEV = callEVSum / totalWeight,
            raiseEV = raiseEVSum / totalWeight,
            totalEV = totalEVSum / totalWeight
        )
    }

    return evs
}

fun computeExpectedValue(
    state: GameState,
    profile: StrategyProfile,
    reachProbs: DoubleArray
): DoubleArray {
    if (state.isTerminal()) {
        return state.getUtility()
    }

    val currentPlayer = state.currentPlayer()!!
    val infoSet = state.getInfoSet()
    val actions = state.getLegalActions()

    val strategy = try {
        val infoSetStrat = profile.getInfoSetStrategy(infoSet, actions.size)
        infoSetStrat.getAverageStrategy()
    } catch (e: Exception) {
        // Uniform if not found
        DoubleArray(actions.size) { 1.0 / actions.size }
    }

    val expectedValue = DoubleArray(2)
    for (i in actions.indices) {
        val nextState = state.applyAction(actions[i])
        val nextReachProbs = reachProbs.copyOf()
        nextReachProbs[currentPlayer] *= strategy[i]

        val actionValue = computeExpectedValue(nextState, profile, nextReachProbs)
        for (p in 0..1) {
            expectedValue[p] += strategy[i] * actionValue[p]
        }
    }

    return expectedValue
}

fun exportWithEVs(
    profile: StrategyProfile,
    scenario1EVs: Map<Int, ActionEVs>,
    scenario2EVs: Map<Int, ActionEVs2>,
    outputPath: String
) {
    val js = StringBuilder()

    js.appendLine("// ============================================================")
    js.appendLine("// Leduc Hold'em GTO Strategy with Real EVs")
    js.appendLine("// Generated from CFR training (50k iterations)")
    js.appendLine("// EVs computed by simulating all possible opponent/board combos")
    js.appendLine("// ============================================================")
    js.appendLine()
    js.appendLine("(function() {")
    js.appendLine("  const ACT = {")
    js.appendLine("    fold:  { id:'fold',  label:'Fold',  color:'#e5484d', kind:'fold' },")
    js.appendLine("    check: { id:'check', label:'Check', color:'#8b8d98', kind:'passive' },")
    js.appendLine("    call:  { id:'call',  label:'Call',  color:'#3b82f6', kind:'passive' },")
    js.appendLine("    bet:   { id:'bet',   label:'Bet',   color:'#f59e0b', kind:'aggressive' },")
    js.appendLine("    raise: { id:'raise', label:'Raise', color:'#22c55e', kind:'aggressive' },")
    js.appendLine("  };")
    js.appendLine()

    // Scenario 1
    js.appendLine("  function makeScenario1() {")
    js.appendLine("    const actions = [ACT.check, ACT.bet];")
    js.appendLine("    const cards = [")
    js.appendLine("      {id:'Ka', rank:'K', suit:'♠'},")
    js.appendLine("      {id:'Kb', rank:'K', suit:'♥'},")
    js.appendLine("      {id:'Qa', rank:'Q', suit:'♠'},")
    js.appendLine("      {id:'Qb', rank:'Q', suit:'♥'},")
    js.appendLine("      {id:'Ja', rank:'J', suit:'♠'},")
    js.appendLine("      {id:'Jb', rank:'J', suit:'♥'},")
    js.appendLine("    ];")
    js.appendLine()
    js.appendLine("    const strat = {")

    for ((cardId, rank, cardIdx) in listOf(
        Triple("Ka", "K", 4),
        Triple("Kb", "K", 5),
        Triple("Qa", "Q", 2),
        Triple("Qb", "Q", 3),
        Triple("Ja", "J", 0),
        Triple("Jb", "J", 1)
    )) {
        val infoSetKey = "$rank "
        val strategy = getActualStrategy(profile, infoSetKey, 2)
        val evs = scenario1EVs[cardIdx] ?: ActionEVs(0.0, 0.0, 0.0)
        val equity = when(rank) { "K" -> 0.78; "Q" -> 0.50; "J" -> 0.22; else -> 0.50 }

        js.appendLine("      $cardId: { " +
            "freq:{check:${f(strategy[0])}, bet:${f(strategy[1])}}, " +
            "ev:{check:${f(evs.checkEV)}, bet:${f(evs.betEV)}}, " +
            "evTotal:${f(evs.totalEV)}, " +
            "equity:$equity },")
    }

    js.appendLine("    };")
    js.appendLine("    const hands = cards.map(c => {")
    js.appendLine("      const s = strat[c.id];")
    js.appendLine("      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };")
    js.appendLine("    });")
    js.appendLine("    return { game:'leduc', scenario:'first_to_act', actions, hands };")
    js.appendLine("  }")
    js.appendLine()

    // Scenario 2
    js.appendLine("  function makeScenario2() {")
    js.appendLine("    const actions = [ACT.fold, ACT.call, ACT.raise];")
    js.appendLine("    const cards = [")
    js.appendLine("      {id:'Ka', rank:'K', suit:'♠'},")
    js.appendLine("      {id:'Kb', rank:'K', suit:'♥'},")
    js.appendLine("      {id:'Qa', rank:'Q', suit:'♠'},")
    js.appendLine("      {id:'Qb', rank:'Q', suit:'♥'},")
    js.appendLine("      {id:'Ja', rank:'J', suit:'♠'},")
    js.appendLine("      {id:'Jb', rank:'J', suit:'♥'},")
    js.appendLine("    ];")
    js.appendLine()
    js.appendLine("    const strat = {")

    for ((cardId, rank, cardIdx) in listOf(
        Triple("Ka", "K", 4),
        Triple("Kb", "K", 5),
        Triple("Qa", "Q", 2),
        Triple("Qb", "Q", 3),
        Triple("Ja", "J", 0),
        Triple("Jb", "J", 1)
    )) {
        val infoSetKey = "$rank b"
        val strategy = getActualStrategy(profile, infoSetKey, 3)
        val evs = scenario2EVs[cardIdx] ?: ActionEVs2(0.0, 0.0, 0.0, 0.0)
        val equity = when(rank) { "K" -> 0.78; "Q" -> 0.50; "J" -> 0.22; else -> 0.50 }

        js.appendLine("      $cardId: { " +
            "freq:{fold:${f(strategy[0])}, call:${f(strategy[1])}, raise:${f(strategy[2])}}, " +
            "ev:{fold:${f(evs.foldEV)}, call:${f(evs.callEV)}, raise:${f(evs.raiseEV)}}, " +
            "evTotal:${f(evs.totalEV)}, " +
            "equity:$equity },")
    }

    js.appendLine("    };")
    js.appendLine("    const hands = cards.map(c => {")
    js.appendLine("      const s = strat[c.id];")
    js.appendLine("      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };")
    js.appendLine("    });")
    js.appendLine("    return { game:'leduc', scenario:'facing_bet', actions, hands };")
    js.appendLine("  }")
    js.appendLine()

    js.appendLine("  window.LEDUC_SOLUTION = {")
    js.appendLine("    scenario1: makeScenario1(),")
    js.appendLine("    scenario2: makeScenario2(),")
    js.appendLine("  };")
    js.appendLine("})();")

    File(outputPath).writeText(js.toString())
}
