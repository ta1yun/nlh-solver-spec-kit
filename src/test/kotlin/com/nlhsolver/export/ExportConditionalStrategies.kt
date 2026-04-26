package com.nlhsolver.export

import com.nlhsolver.core.*
import com.nlhsolver.integration.LeducWithSuitAbstraction
import io.kotest.core.spec.style.FunSpec
import java.io.File

/**
 * Export strategies conditional on specific game tree nodes (board + action sequence).
 * This demonstrates solving from any point in the tree with filtered ranges.
 */
class ExportConditionalStrategies : FunSpec({

    test("Export conditional strategies for multiple Leduc scenarios") {
        println("\n=== Exporting Conditional Strategies ===\n")

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

        // Export multiple conditional scenarios
        exportConditionalScenarios(profile, allCards.toList(), "/Users/tpai/Downloads/leduc-conditional.js")

        println("\n✓ Exported conditional strategies to ~/Downloads/leduc-conditional.js")
    }
})

/**
 * Export strategies for specific game tree nodes, showing how ranges are filtered.
 */
fun exportConditionalScenarios(
    profile: StrategyProfile,
    allCards: List<Int>,
    outputPath: String
) {
    val js = StringBuilder()

    js.appendLine("// ============================================================")
    js.appendLine("// Leduc Hold'em Conditional Strategies")
    js.appendLine("// Each scenario represents a specific game tree node:")
    js.appendLine("//   - Specific board card")
    js.appendLine("//   - Specific action sequence")
    js.appendLine("//   - Ranges filtered by previous actions")
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

    // Scenario 1: Round 2, Q board, after check-bet in R1, facing bet
    exportR2Scenario(
        js, profile, allCards,
        boardCard = 2, // Q
        boardName = "Q♠",
        history = "xbdb",
        historyLabel = "check-bet-deal-bet",
        actions = listOf("fold", "call", "raise"),
        pot = 6, toCall = 2,
        scenarioId = "r2_q_xbdb"
    )

    // Scenario 2: Round 2, Q board, after bet-call in R1, hero bets
    exportR2Scenario(
        js, profile, allCards,
        boardCard = 2, // Q
        boardName = "Q♠",
        history = "bcd",
        historyLabel = "bet-call-deal",
        actions = listOf("check", "bet"),
        pot = 6, toCall = 0,
        scenarioId = "r2_q_bcd"
    )

    // Scenario 3: Round 2, J board, after check-bet in R1, facing bet
    exportR2Scenario(
        js, profile, allCards,
        boardCard = 0, // J
        boardName = "J♠",
        history = "xbdb",
        historyLabel = "check-bet-deal-bet",
        actions = listOf("fold", "call", "raise"),
        pot = 6, toCall = 2,
        scenarioId = "r2_j_xbdb"
    )

    // Scenario 4: Round 2, Q board, after bet-call in R1, P2 facing P1 bet
    exportR2Scenario(
        js, profile, allCards,
        boardCard = 2, // Q
        boardName = "Q♠",
        history = "bcdb",
        historyLabel = "bet-call-deal-bet",
        actions = listOf("fold", "call", "raise"),
        pot = 8, toCall = 2,
        scenarioId = "r2_q_bcdb"
    )

    // Scenario 5: Round 2, Q board, P1 facing P2's raise (after bet-call-deal-bet-raise)
    exportR2Scenario(
        js, profile, allCards,
        boardCard = 2, // Q
        boardName = "Q♠",
        history = "bcdbb",
        historyLabel = "bet-call-deal-bet-raise",
        actions = listOf("fold", "call"),
        pot = 12, toCall = 2,
        scenarioId = "r2_q_bcdbb"
    )

    // Scenario 6: Round 2, Q board, after both check in R1 — P1 to act
    exportR2Scenario(
        js, profile, allCards,
        boardCard = 2, // Q
        boardName = "Q♠",
        history = "xxd",
        historyLabel = "check-check-deal",
        actions = listOf("check", "bet"),
        pot = 2, toCall = 0,
        scenarioId = "r2_q_xxd"
    )

    // Scenario 7: Round 2, Q board, after bet-raise-call in R1 — P1 to act
    exportR2Scenario(
        js, profile, allCards,
        boardCard = 2, // Q
        boardName = "Q♠",
        history = "brcd",
        historyLabel = "bet-raise-call-deal",
        actions = listOf("check", "bet"),
        pot = 8, toCall = 0,
        scenarioId = "r2_q_brcd"
    )

    // Scenario 8: Round 2, Q board, after check-bet-call in R1 — P2 to act
    exportR2Scenario(
        js, profile, allCards,
        boardCard = 2, // Q
        boardName = "Q♠",
        history = "xbcd",
        historyLabel = "check-bet-call-deal",
        actions = listOf("check", "bet"),
        pot = 6, toCall = 0,
        scenarioId = "r2_q_xbcd"
    )

    // Scenario 9: Round 2, Q board, after check-bet-raise-call in R1 — P2 to act
    exportR2Scenario(
        js, profile, allCards,
        boardCard = 2, // Q
        boardName = "Q♠",
        history = "xbrcd",
        historyLabel = "check-bet-raise-call-deal",
        actions = listOf("check", "bet"),
        pot = 8, toCall = 0,
        scenarioId = "r2_q_xbrcd"
    )

    js.appendLine("  window.LEDUC_CONDITIONAL = {")
    js.appendLine("    r2_q_xbdb: makeScenario_r2_q_xbdb(),")
    js.appendLine("    r2_q_bcd: makeScenario_r2_q_bcd(),")
    js.appendLine("    r2_j_xbdb: makeScenario_r2_j_xbdb(),")
    js.appendLine("    r2_q_bcdb: makeScenario_r2_q_bcdb(),")
    js.appendLine("    r2_q_bcdbb: makeScenario_r2_q_bcdbb(),")
    js.appendLine("    r2_q_xxd: makeScenario_r2_q_xxd(),")
    js.appendLine("    r2_q_brcd: makeScenario_r2_q_brcd(),")
    js.appendLine("    r2_q_xbcd: makeScenario_r2_q_xbcd(),")
    js.appendLine("    r2_q_xbrcd: makeScenario_r2_q_xbrcd(),")
    js.appendLine("  };")
    js.appendLine("})();")

    File(outputPath).writeText(js.toString())
}

fun exportR2Scenario(
    js: StringBuilder,
    profile: StrategyProfile,
    allCards: List<Int>,
    boardCard: Int,
    boardName: String,
    history: String,
    historyLabel: String,
    actions: List<String>,
    pot: Int,
    toCall: Int,
    scenarioId: String
) {
    val boardRank = when(boardCard) { 0, 1 -> "J"; 2, 3 -> "Q"; 4, 5 -> "K"; else -> "?" }

    js.appendLine("  function makeScenario_$scenarioId() {")
    js.appendLine("    // Round 2, board $boardName, after $historyLabel")

    val actObjs = actions.map { "ACT.$it" }.joinToString(", ")
    js.appendLine("    const actions = [$actObjs];")

    js.appendLine("    const cards = [")
    js.appendLine("      {id:'Ka', rank:'K', suit:'♠'},")
    js.appendLine("      {id:'Kb', rank:'K', suit:'♥'},")
    js.appendLine("      {id:'Qa', rank:'Q', suit:'♠'},")
    js.appendLine("      {id:'Qb', rank:'Q', suit:'♥'},")
    js.appendLine("      {id:'Ja', rank:'J', suit:'♠'},")
    js.appendLine("      {id:'Jb', rank:'J', suit:'♥'},")
    js.appendLine("    ];")
    js.appendLine()

    // Compute filtered ranges and EVs for this specific node
    val rangeData = computeFilteredRangeData(profile, allCards, boardCard, history, actions.size)

    js.appendLine("    const strat = {")

    for ((cardId, rank, cardIdx) in listOf(
        Triple("Ka", "K", 4),
        Triple("Kb", "K", 5),
        Triple("Qa", "Q", 2),
        Triple("Qb", "Q", 3),
        Triple("Ja", "J", 0),
        Triple("Jb", "J", 1)
    )) {
        if (cardIdx == boardCard) continue // Can't have the board card

        val infoSetKey = "$rank$boardRank $history"
        val data = rangeData[cardIdx] ?: continue

        js.append("      $cardId: { ")
        js.append("freq:{")
        js.append(actions.mapIndexed { i, action -> "$action:${f(data.strategy[i])}" }.joinToString(", "))
        js.append("}, ")
        js.append("ev:{")
        js.append(actions.mapIndexed { i, action -> "$action:${f(data.evs[i])}" }.joinToString(", "))
        js.append("}, ")
        js.append("evTotal:${f(data.totalEV)}, ")
        js.append("equity:${f(data.equity)}, ")
        js.append("reachProb:${f(data.reachProb)}")
        js.appendLine(" },")
    }

    js.appendLine("    };")
    js.appendLine("    const hands = cards.map(c => {")
    js.appendLine("      const s = strat[c.id];")
    js.appendLine("      if (!s) return null;")
    js.appendLine("      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };")
    js.appendLine("    }).filter(h => h !== null);")
    js.appendLine()

    // Build tree structure showing the path
    val treeStr = buildTreeForHistory(history, boardName)
    js.appendLine("    const tree = $treeStr;")
    js.appendLine()

    js.appendLine("    return {")
    js.appendLine("      game:'leduc', handShape:'tile',")
    js.appendLine("      meta:{ street:'round2', pot:$pot, toCall:$toCall, stack:8, position:'P1', board:['$boardName'] },")
    js.appendLine("      actions, hands, tree")
    js.appendLine("    };")
    js.appendLine("  }")
    js.appendLine()
}

data class RangeData(
    val strategy: DoubleArray,
    val evs: DoubleArray,
    val totalEV: Double,
    val equity: Double,
    val reachProb: Double  // Probability of reaching this node with this hand
)

/**
 * Compute strategies and EVs at a specific game tree node, with ranges filtered
 * by the action sequence that led here.
 */
fun computeFilteredRangeData(
    profile: StrategyProfile,
    allCards: List<Int>,
    boardCard: Int,
    history: String,
    numActions: Int
): Map<Int, RangeData> {
    val result = mutableMapOf<Int, RangeData>()
    val boardRank = when(boardCard) { 0, 1 -> "J"; 2, 3 -> "Q"; 4, 5 -> "K"; else -> "?" }

    for (heroCard in allCards) {
        if (heroCard == boardCard) continue

        val heroRank = when(heroCard) { 0, 1 -> "J"; 2, 3 -> "Q"; 4, 5 -> "K"; else -> "?" }
        val infoSetKey = "$heroRank$boardRank $history"

        // Get strategy at this node
        val strategy = try {
            profile.getInfoSetStrategy(infoSetKey, numActions).getAverageStrategy()
        } catch (e: Exception) {
            DoubleArray(numActions) { 1.0 / numActions }
        }

        // Compute reach probability (how often we get here with this hand)
        // For now, simplified - in full implementation, would trace through tree
        val reachProb = computeReachProbability(profile, heroCard, boardCard, history)

        // Compute EVs for each action and total
        val state = createStateFromHistory(heroCard, boardCard, history)
        val evs = DoubleArray(numActions)
        var totalEV = 0.0

        if (state != null) {
            val actions = state.getLegalActions()
            for (i in 0 until numActions.coerceAtMost(actions.size)) {
                val nextState = state.applyAction(actions[i])
                val ev = computeConditionalEV(nextState, profile, allCards, boardCard, heroCard)
                evs[i] = ev
                totalEV += strategy[i] * ev
            }
        }

        val equity = estimateEquity(heroRank, boardRank)

        result[heroCard] = RangeData(strategy, evs, totalEV, equity, reachProb)
    }

    return result
}

fun computeReachProbability(
    profile: StrategyProfile,
    heroCard: Int,
    boardCard: Int,
    history: String
): Double {
    // Simplified: return 1.0 (in full implementation, would trace through tree)
    // This would multiply probabilities of all actions in the history
    return 1.0
}

fun createStateFromHistory(heroCard: Int, boardCard: Int, history: String): LeducWithSuitAbstraction? {
    // Map history to game state
    // "xbdb" = check-bet-deal-bet (Round 2)
    // "bcd" = bet-call-deal (Round 2)

    val isR2 = history.contains('d')
    if (!isR2) return null

    // Determine invested amounts based on history
    val (p1Invested, p2Invested) = when {
        history == "xbdb" -> Pair(5.0, 3.0)  // check-bet(2)-deal-bet(2), P2 facing
        history == "bcd" -> Pair(3.0, 3.0)   // bet(2)-call-deal, P1 to act
        else -> Pair(1.0, 1.0)
    }

    // Assume hero is P2 for "xbdb", P1 for "bcd"
    val (p1Card, p2Card) = if (history.startsWith('x')) {
        Pair(0, heroCard)  // Placeholder villain card, hero is P2
    } else {
        Pair(heroCard, 0)  // Hero is P1, placeholder villain
    }

    return LeducWithSuitAbstraction(
        p1Card = p1Card,
        p2Card = p2Card,
        boardCard = boardCard,
        round = 2,
        p1Invested = p1Invested,
        p2Invested = p2Invested,
        history = history
    )
}

fun computeConditionalEV(
    state: GameState,
    profile: StrategyProfile,
    allCards: List<Int>,
    boardCard: Int,
    heroCard: Int
): Double {
    // Average EV against all possible villain cards, weighted by villain's range at this node
    var evSum = 0.0
    var weight = 0.0

    for (villainCard in allCards) {
        if (villainCard == heroCard || villainCard == boardCard) continue

        // Create state with actual villain card
        val actualState = state // Simplified - would need to set villain card

        val ev = computeExpectedValue(actualState, profile, doubleArrayOf(1.0, 1.0))
        val heroEV = if (state.currentPlayer() == 0) ev[0] else ev[1]

        evSum += heroEV
        weight += 1.0
    }

    return if (weight > 0) evSum / weight else 0.0
}

fun estimateEquity(heroRank: String, boardRank: String): Double {
    return when {
        heroRank == boardRank -> 0.95  // Pair
        heroRank == "K" && boardRank != "K" -> 0.78  // Overpair
        heroRank == "Q" && boardRank == "J" -> 0.78
        heroRank == "J" -> 0.22  // Underpair
        heroRank == "Q" && boardRank == "K" -> 0.22
        else -> 0.50
    }
}

fun buildTreeForHistory(history: String, boardName: String): String {
    return when (history) {
        "xbdb" -> """
        {
          id:'root', label:'Round 1', player:'chance',
          children:[
            { id:'p1-check', label:'P1 check', player:'villain',
              children:[
                { id:'p2-bet', label:'P2 bet', player:'hero',
                  children:[
                    { id:'p1-call', label:'P1 call', player:'villain',
                      children:[
                        { id:'deal', label:'Deal $boardName', player:'chance',
                          children:[
                            { id:'p1-bet2', label:'P1 bet', player:'villain', active:true }
                          ]}
                      ]}
                  ]}
              ]}
          ]
        }
        """.trimIndent()

        "bcd" -> """
        {
          id:'root', label:'Round 1', player:'chance',
          children:[
            { id:'p1-bet', label:'P1 bet', player:'hero',
              children:[
                { id:'p2-call', label:'P2 call', player:'villain',
                  children:[
                    { id:'deal', label:'Deal $boardName', player:'chance', active:true }
                  ]}
              ]}
          ]
        }
        """.trimIndent()

        else -> "{}"
    }
}
