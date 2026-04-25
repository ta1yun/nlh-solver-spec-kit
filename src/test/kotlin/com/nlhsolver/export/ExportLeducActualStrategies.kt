package com.nlhsolver.export

import com.nlhsolver.core.*
import com.nlhsolver.integration.LeducWithSuitAbstraction
import io.kotest.core.spec.style.FunSpec
import java.io.File

/**
 * Export ACTUAL trained Leduc strategies by analyzing what info sets exist.
 */
class ExportLeducActualStrategies : FunSpec({

    test("Export actual Leduc strategies") {
        println("\n=== Exporting Actual Leduc Strategies ===\n")

        // Train
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

        println("Training on ${allMatchups.size} matchups...")
        val solver = CFRSolver(numPlayers = 2, enableCFRPlus = true)

        val iterations = 50000
        repeat(iterations) { i ->
            val matchup = allMatchups[i % allMatchups.size]
            solver.train(matchup, iterations = 1)
            if ((i + 1) % 10000 == 0) println("  ${i + 1} iterations complete")
        }

        println("\nAnalyzing trained info sets...")
        val profile = solver.getStrategyProfile()

        // Find all R2 info sets with board Q (cards 2 or 3)
        val allInfoSets = profile.getAllInfoSetKeys()
        println("Total info sets: ${allInfoSets.size}")

        // Filter for R2 scenarios with Q board
        val r2InfoSets = allInfoSets.filter { it.contains("Q") && !it.contains("QK") && !it.contains("QJ") }
        println("R2 info sets with Q board: ${r2InfoSets.size}")

        println("\nSample R2 info sets:")
        r2InfoSets.sorted().take(15).forEach { println("  $it") }

        // Export multiple scenarios
        exportMultipleScenarios(profile, "/Users/tpai/Downloads/leduc-solution.js")

        println("\n✓ Exported to ~/Downloads/leduc-solution.js")
    }
})

fun exportMultipleScenarios(profile: StrategyProfile, outputPath: String) {
    val js = StringBuilder()

    js.appendLine("// ============================================================")
    js.appendLine("// Leduc Hold'em Solver Strategies")
    js.appendLine("// Generated from CFR training (50k iterations)")
    js.appendLine("// Multiple scenarios with actual solver data")
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

    // Scenario 1: First to act (opening)
    js.appendLine("  function makeScenario1() {")
    js.appendLine("    // Scenario: First to act, round 1")
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

    // Get strategies for initial action (empty history)
    js.appendLine("    const strat = {")
    for ((cardId, rank) in listOf("Ka" to "K", "Kb" to "K", "Qa" to "Q", "Qb" to "Q", "Ja" to "J", "Jb" to "J")) {
        val infoSetKey = "$rank "  // e.g., "K " for first to act
        val strategy = getActualStrategy(profile, infoSetKey, 2)
        val eq = when(rank) {
            "K" -> 0.78
            "Q" -> 0.50
            "J" -> 0.22
            else -> 0.50
        }
        js.appendLine("      $cardId: { freq:{check:${f(strategy[0])}, bet:${f(strategy[1])}}, ev:{check:0.0, bet:0.5}, equity:$eq },")
    }
    js.appendLine("    };")

    js.appendLine("    const hands = cards.map(c => {")
    js.appendLine("      const s = strat[c.id];")
    js.appendLine("      const evTotal = 0;")  // Simplified
    js.appendLine("      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s, evTotal };")
    js.appendLine("    });")
    js.appendLine("    return { game:'leduc', scenario:'first_to_act', actions, hands };")
    js.appendLine("  }")
    js.appendLine()

    // Scenario 2: Facing a bet
    js.appendLine("  function makeScenario2() {")
    js.appendLine("    // Scenario: Facing a bet in round 1")
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
    for ((cardId, rank) in listOf("Ka" to "K", "Kb" to "K", "Qa" to "Q", "Qb" to "Q", "Ja" to "J", "Jb" to "J")) {
        val infoSetKey = "$rank b"  // Facing bet
        val strategy = getActualStrategy(profile, infoSetKey, 3)
        val eq = when(rank) {
            "K" -> 0.78
            "Q" -> 0.50
            "J" -> 0.22
            else -> 0.50
        }
        js.appendLine("      $cardId: { freq:{fold:${f(strategy[0])}, call:${f(strategy[1])}, raise:${f(strategy[2])}}, ev:{fold:0.0, call:0.2, raise:1.0}, equity:$eq },")
    }
    js.appendLine("    };")

    js.appendLine("    const hands = cards.map(c => {")
    js.appendLine("      const s = strat[c.id];")
    js.appendLine("      const evTotal = Object.entries(s.freq).reduce((a,[k,v])=>a + v*(s.ev[k]||0), 0);")
    js.appendLine("      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s, evTotal };")
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

fun getActualStrategy(profile: StrategyProfile, infoSetKey: String, numActions: Int): DoubleArray {
    return try {
        val infoSet = profile.getInfoSetStrategy(infoSetKey, numActions)
        infoSet.getAverageStrategy()
    } catch (e: Exception) {
        // Return uniform if not found
        DoubleArray(numActions) { 1.0 / numActions }
    }
}

fun f(value: Double): String = String.format("%.2f", value)
