package com.nlhsolver.cli

import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.core.subcommands

/**
 * Main CLI application for NLH Solver (T069).
 *
 * Usage:
 *   nlhsolver config create --players 2 --stacks "BTN:100,BB:100" --position BTN
 *   nlhsolver config list
 *   nlhsolver config get <id>
 *   nlhsolver solve run --config <id>
 *   nlhsolver job list
 *   nlhsolver job status <id>
 *   nlhsolver strategy query <id> --street FLOP --board "AsKdQh" --pot 7.0 --position BB
 */
class NlhSolverCli : CliktCommand(
    name = "nlhsolver",
    help = """
        No-Limit Hold'em Poker Solver

        A CFR+ based solver for computing Nash equilibrium strategies in poker.
    """.trimIndent()
) {
    override fun run() {
        // Main command does nothing - subcommands handle everything
    }
}

/**
 * Main entry point for CLI.
 */
fun main(args: Array<String>) {
    NlhSolverCli()
        .subcommands(
            ConfigCommand(),
            SolveCommand(),
            JobCommand(),
            StrategyCommand()
        )
        .main(args)
}
