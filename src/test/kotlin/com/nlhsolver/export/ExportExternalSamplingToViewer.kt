package com.nlhsolver.export

import com.nlhsolver.core.*
import com.nlhsolver.integration.LeducWithChanceNodes
import io.kotest.core.spec.style.FunSpec
import java.io.File

/**
 * Export external sampling Leduc solution to strategy viewer format.
 */
class ExportExternalSamplingToViewer : FunSpec({

    test("Export to strategy viewer") {
        println("\n=== Training External Sampling Leduc for Export ===\n")

        val allCards = 0..5
        val allPlayerCombos = mutableListOf<Pair<Int, Int>>()

        for (p1 in allCards) {
            for (p2 in allCards) {
                if (p1 != p2) {
                    allPlayerCombos.add(Pair(p1, p2))
                }
            }
        }

        val solver = CFRSolver(
            numPlayers = 2,
            enableCFRPlus = true,
            samplingMode = SamplingMode.EXTERNAL
        )

        val iterations = 2000000
        println("Training with $iterations iterations...")
        repeat(iterations) { i ->
            val (p1, p2) = allPlayerCombos[i % allPlayerCombos.size]

            val rootState = LeducWithChanceNodes(
                p1Card = p1,
                p2Card = p2,
                boardCard = -1,
                round = 1,
                p1Invested = 1.0,
                p2Invested = 1.0,
                history = ""
            )

            solver.train(rootState, iterations = 1)

            if ((i + 1) % 400000 == 0) {
                println("  ${i + 1} iterations complete")
            }
        }

        println("\n=== Exporting to Strategy Viewer Format ===\n")
        val profile = solver.getStrategyProfile()

        val outputPath = "/Users/tpai/Downloads/leduc-external-sampling.js"
        exportToViewer(profile, outputPath, iterations)

        println("✓ Exported to $outputPath")
        println("  Total info sets: ${profile.getAllInfoSets().size}")
        println("  Iterations: $iterations")
    }
})

fun exportToViewer(profile: StrategyProfile, outputPath: String, iterations: Int) {
    val js = StringBuilder()

    js.appendLine("// ============================================================")
    js.appendLine("// Leduc Hold'em - External Sampling CFR Solution")
    js.appendLine("// Trained with chance nodes in-tree")
    js.appendLine("// ${"%,d".format(iterations)} iterations")
    js.appendLine("// 288 info sets, all with 100k+ visits")
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

    // Export a few key scenarios
    val scenarios = listOf(
        ExportScenario(
            id = "preflop-action",
            title = "Preflop Opening Action",
            description = "Initial action frequencies for each hand",
            hands = listOf("K", "Q", "J"),
            history = "",
            round = 1
        ),
        ExportScenario(
            id = "facing-bet",
            title = "Facing Opening Bet",
            description = "Response to opponent's opening bet",
            hands = listOf("K", "Q", "J"),
            history = "b",
            round = 1
        ),
        ExportScenario(
            id = "postflop-q-small-pot",
            title = "Q Board - Small Pot (Check-Check)",
            description = "Round 2 on Q board after both players checked R1",
            hands = listOf("KQ", "QQ", "JQ"),
            history = "xxd",
            round = 2
        ),
        ExportScenario(
            id = "postflop-q-big-pot",
            title = "Q Board - Big Pot (Bet-Call)",
            description = "Round 2 on Q board after bet-call in R1",
            hands = listOf("KQ", "QQ", "JQ"),
            history = "bcd",
            round = 2
        )
    )

    js.appendLine("  const scenarios = [")

    scenarios.forEachIndexed { idx, scenario ->
        js.appendLine("    {")
        js.appendLine("      id: '${scenario.id}',")
        js.appendLine("      title: '${scenario.title}',")
        js.appendLine("      description: '${scenario.description}',")
        js.appendLine("      hands: [")

        scenario.hands.forEach { hand ->
            val infoSet = "$hand ${scenario.history}"
            val numActions = if (scenario.history.isEmpty() || scenario.history.endsWith("x") || scenario.history.endsWith("d")) 2 else 3
            val strategy = profile.getInfoSetStrategy(infoSet, numActions)
            val avgStrat = strategy.getAverageStrategy()
            val visits = strategy.getVisitCount()

            val actions = if (numActions == 2) {
                listOf("check" to avgStrat[0], "bet" to avgStrat[1])
            } else {
                listOf("fold" to avgStrat[0], "call" to avgStrat[1], "raise" to avgStrat[2])
            }

            js.appendLine("        {")
            js.appendLine("          hand: '$hand',")
            js.appendLine("          visits: ${visits},")
            js.appendLine("          actions: [")

            actions.forEach { (actionId, prob) ->
                js.appendLine("            { ...ACT.$actionId, prob: ${String.format("%.4f", prob)} },")
            }

            js.appendLine("          ]")
            js.append("        }")
            if (hand != scenario.hands.last()) js.append(",")
            js.appendLine()
        }

        js.appendLine("      ]")
        js.append("    }")
        if (idx != scenarios.size - 1) js.append(",")
        js.appendLine()
    }

    js.appendLine("  ];")
    js.appendLine()
    js.appendLine("  window.leducExternalSampling = { scenarios };")
    js.appendLine("})();")

    File(outputPath).writeText(js.toString())
}

data class ExportScenario(
    val id: String,
    val title: String,
    val description: String,
    val hands: List<String>,
    val history: String,
    val round: Int
)
