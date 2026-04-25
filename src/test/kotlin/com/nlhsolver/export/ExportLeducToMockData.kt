package com.nlhsolver.export

import com.nlhsolver.core.*
import com.nlhsolver.integration.LeducWithSuitAbstraction
import io.kotest.core.spec.style.FunSpec
import java.io.File

/**
 * Export trained Leduc strategies to mock-data.js format.
 */
class ExportLeducToMockData : FunSpec({

    test("Export Leduc strategies to JavaScript") {
        println("\n=== Exporting Leduc Strategies ===\n")

        // Train the solver
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

            if ((i + 1) % 10000 == 0) {
                println("  ${i + 1} iterations complete")
            }
        }

        println("\nTraining complete!")
        println()

        // Export strategies for specific game state:
        // Round 2, facing bet after check-bet in R1, board = Q♠ (card 2)
        // History: "xbd" = check-bet-deal
        val profile = solver.getStrategyProfile()

        // Export for specific scenario
        exportToJS(
            profile,
            outputPath = "/Users/tpai/Downloads/leduc-solution.js",
            scenario = "R2 facing bet, board Q♠"
        )

        println("✓ Exported to ~/Downloads/leduc-solution.js")
    }
})

fun exportToJS(
    profile: StrategyProfile,
    outputPath: String,
    scenario: String
) {
    val cards = listOf(
        CardInfo("Ka", "K", "♠", 4),
        CardInfo("Kb", "K", "♥", 5),
        CardInfo("Qa", "Q", "♠", 2),
        CardInfo("Qb", "Q", "♥", 3),
        CardInfo("Ja", "J", "♠", 0),
        CardInfo("Jb", "J", "♥", 1)
    )

    val js = StringBuilder()

    js.appendLine("// ============================================================")
    js.appendLine("// Leduc Hold'em Solver Strategies")
    js.appendLine("// Generated from CFR training (50k iterations)")
    js.appendLine("// Scenario: $scenario")
    js.appendLine("// ============================================================")
    js.appendLine()
    js.appendLine("(function() {")
    js.appendLine("  const ACT = {")
    js.appendLine("    fold:  { id:'fold',  label:'Fold',  color:'#e5484d', kind:'fold' },")
    js.appendLine("    check: { id:'check', label:'Check', color:'#8b8d98', kind:'passive' },")
    js.appendLine("    call:  { id:'call',  label:'Call',  color:'#3b82f6', kind:'passive' },")
    js.appendLine("    raise: { id:'raise', label:'Raise', color:'#22c55e', kind:'aggressive' },")
    js.appendLine("  };")
    js.appendLine()
    js.appendLine("  function makeLeduc() {")
    js.appendLine("    const actions = [ACT.fold, ACT.check, ACT.call, ACT.raise];")
    js.appendLine()

    // Define all 6 cards
    js.appendLine("    const cards = [")
    cards.forEach { card ->
        js.appendLine("      {id:'${card.id}', rank:'${card.rank}', suit:'${card.suit}'},")
    }
    js.appendLine("    ];")
    js.appendLine()

    // Extract strategies for each card
    js.appendLine("    // Strategies for each card")
    js.appendLine("    const strat = {")

    cards.forEach { card ->
        val strategy = extractStrategy(profile, card)
        js.appendLine("      ${card.id}: { " +
            "freq:${formatFreq(strategy.freq)}, " +
            "ev:${formatEV(strategy.ev)}, " +
            "equity:${String.format("%.2f", strategy.equity)} },")
    }

    js.appendLine("    };")
    js.appendLine()

    // Map cards to hands with strategies
    js.appendLine("    const hands = cards.map(c => {")
    js.appendLine("      const s = strat[c.id];")
    js.appendLine("      const evTotal = Object.entries(s.freq).reduce((a,[k,v])=>a + v*s.ev[k], 0);")
    js.appendLine("      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s, evTotal };")
    js.appendLine("    });")
    js.appendLine()

    // Return structure
    js.appendLine("    return {")
    js.appendLine("      game:'leduc', handShape:'tile',")
    js.appendLine("      meta:{ street:'round2', pot:4, toCall:2, stack:8, position:'P1', board:['Q♠'] },")
    js.appendLine("      actions, hands,")
    js.appendLine("      tree: {")
    js.appendLine("        id:'root', label:'Round 1', player:'chance',")
    js.appendLine("        children:[")
    js.appendLine("          { id:'p1-check', label:'P1 check', player:'hero',")
    js.appendLine("            children:[")
    js.appendLine("              { id:'p2-bet', label:'P2 bet', player:'villain',")
    js.appendLine("                children:[")
    js.appendLine("                  { id:'r2', label:'Round 2 — Q♠', player:'chance', active:true,")
    js.appendLine("                    children:[")
    js.appendLine("                      { id:'p2-bet2', label:'P2 bet', player:'villain' },")
    js.appendLine("                    ]},")
    js.appendLine("                ]},")
    js.appendLine("            ]},")
    js.appendLine("          { id:'p1-bet', label:'P1 bet', player:'hero' },")
    js.appendLine("        ]")
    js.appendLine("      }")
    js.appendLine("    };")
    js.appendLine("  }")
    js.appendLine()
    js.appendLine("  window.LEDUC_SOLUTION = makeLeduc();")
    js.appendLine("})();")

    File(outputPath).writeText(js.toString())
}

data class CardInfo(
    val id: String,
    val rank: String,
    val suit: String,
    val cardIndex: Int
)

data class CardStrategy(
    val freq: Map<String, Double>,
    val ev: Map<String, Double>,
    val equity: Double
)

fun extractStrategy(profile: StrategyProfile, card: CardInfo): CardStrategy {
    // Get strategies for different scenarios
    // For Round 2, facing a bet after check-bet in R1, with board Q (card 2)

    val boardCard = 2 // Q♠
    val playerCard = card.cardIndex

    // Info set for R2 after xbd (check-bet-deal) facing bet
    // History in R2: "xbdb" means check-bet-deal-bet
    val infoSetKey = when (card.rank) {
        "K" -> "KQ xbdb"  // King with Queen board
        "Q" -> "QQ xbdb"  // Queen with Queen board (pair!)
        "J" -> "JQ xbdb"  // Jack with Queen board
        else -> "JQ xbdb"
    }

    // Try to get strategy from profile
    val infoSet = try {
        profile.getInfoSetStrategy(infoSetKey, 3) // 3 actions: fold, call, raise
    } catch (e: Exception) {
        // If not found, return uniform strategy
        return CardStrategy(
            freq = mapOf("fold" to 0.33, "check" to 0.0, "call" to 0.33, "raise" to 0.34),
            ev = mapOf("fold" to 0.0, "check" to 0.0, "call" to 0.0, "raise" to 0.0),
            equity = 0.5
        )
    }

    val avgStrategy = infoSet.getAverageStrategy()

    // Map to action frequencies (facing bet: fold, call, raise)
    val foldFreq = (avgStrategy.getOrNull(0) ?: 0.0).let { (it * 100).toInt() / 100.0 }
    val callFreq = (avgStrategy.getOrNull(1) ?: 0.0).let { (it * 100).toInt() / 100.0 }
    val raiseFreq = (avgStrategy.getOrNull(2) ?: 0.0).let { (it * 100).toInt() / 100.0 }

    val freq = mapOf(
        "fold" to foldFreq,
        "check" to 0.0, // Can't check when facing bet
        "call" to callFreq,
        "raise" to raiseFreq
    )

    // Compute EVs (simplified estimates)
    val equity = estimateEquity(card, boardCard)
    val pot = 4.0
    val toCall = 2.0

    val ev = mapOf(
        "fold" to 0.0,
        "check" to 0.0,
        "call" to (equity * (pot + toCall) - toCall),
        "raise" to (equity * (pot + toCall + 4) - 4) // Simplified
    )

    return CardStrategy(freq, ev, equity)
}

fun estimateEquity(card: CardInfo, boardCard: Int): Double {
    val boardRank = when (boardCard) {
        0, 1 -> "J"
        2, 3 -> "Q"
        4, 5 -> "K"
        else -> "Q"
    }

    return when {
        // Pair (player card matches board)
        card.rank == boardRank -> 0.95

        // Overpair (player card > board)
        card.rank == "K" && boardRank != "K" -> 0.78
        card.rank == "Q" && boardRank == "J" -> 0.78

        // Underpair (player card < board)
        card.rank == "J" -> 0.18
        card.rank == "Q" && boardRank == "K" -> 0.18

        else -> 0.5
    }
}

fun formatFreq(freq: Map<String, Double>): String {
    return "{" + freq.entries.joinToString(", ") { entry ->
        "${entry.key}:${String.format("%.2f", entry.value)}"
    } + "}"
}

fun formatEV(ev: Map<String, Double>): String {
    return "{" + ev.entries.joinToString(", ") { entry ->
        "${entry.key}:${String.format("%.1f", entry.value)}"
    } + "}"
}
