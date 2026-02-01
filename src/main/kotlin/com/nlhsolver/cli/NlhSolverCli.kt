package com.nlhsolver.cli

import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.core.subcommands
import com.nlhsolver.common.*
import kotlin.system.exitProcess

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
 * Main entry point for CLI (T116).
 *
 * Provides helpful error messages for common failure scenarios:
 * - Configuration validation errors
 * - Memory/resource errors
 * - Strategy not found errors
 * - Solve failures
 */
fun main(args: Array<String>) {
    try {
        NlhSolverCli()
            .subcommands(
                ConfigCommand(),
                SolveCommand(),
                JobCommand(),
                StrategyCommand(),
                blueprintCommand(),
                refinementCommand()
            )
            .main(args)
    } catch (e: InvalidConfigurationException) {
        System.err.println("❌ Configuration Error:")
        System.err.println("   ${e.message}")
        System.err.println()
        System.err.println("💡 Tip: Use 'nlhsolver config create --help' to see valid configuration options.")
        exitProcess(1)
    } catch (e: InvalidArgumentException) {
        System.err.println("❌ Invalid Argument:")
        System.err.println("   ${e.message}")
        System.err.println()
        System.err.println("💡 Tip: Check the command help with --help flag for correct argument format.")
        exitProcess(1)
    } catch (e: OutOfMemoryException) {
        System.err.println("❌ Out of Memory:")
        System.err.println("   ${e.message}")
        System.err.println()
        System.err.println("💡 Solutions:")
        System.err.println("   1. Increase heap size: JAVA_OPTS=\"-Xmx4g\" ./gradlew run --args=\"...\"")
        System.err.println("   2. Use coarser abstraction (fewer buckets)")
        System.err.println("   3. Solve specific boards instead of full game tree")
        exitProcess(137) // Standard exit code for OOM
    } catch (e: ResourceNotFoundException) {
        System.err.println("❌ Not Found:")
        System.err.println("   ${e.message}")
        System.err.println()
        System.err.println("💡 Tip: Use 'nlhsolver ${e.resourceType.lowercase()} list' to see available resources.")
        exitProcess(2)
    } catch (e: StrategyNotFoundException) {
        System.err.println("❌ Strategy Not Found:")
        System.err.println("   ${e.message}")
        System.err.println()
        System.err.println("💡 Tip: Run a solve first or check strategy ID with 'nlhsolver strategy list'.")
        exitProcess(2)
    } catch (e: SolveFailedException) {
        System.err.println("❌ Solve Failed:")
        System.err.println("   ${e.message}")
        if (e.cause != null) {
            System.err.println("   Caused by: ${e.cause?.message}")
        }
        System.err.println()
        System.err.println("💡 Troubleshooting:")
        System.err.println("   - Check logs for detailed error information")
        System.err.println("   - Verify configuration is valid")
        System.err.println("   - Try reducing abstraction complexity or max iterations")
        exitProcess(3)
    } catch (e: ConvergenceException) {
        System.err.println("⚠️  Convergence Warning:")
        System.err.println("   ${e.message}")
        System.err.println()
        System.err.println("💡 Suggestions:")
        System.err.println("   - Increase max iterations in configuration")
        System.err.println("   - Relax exploitability target (e.g., 1% instead of 0.5%)")
        System.err.println("   - Check if abstraction is too coarse")
        exitProcess(4)
    } catch (e: BlueprintException) {
        System.err.println("❌ Blueprint Error:")
        System.err.println("   ${e.message}")
        System.err.println()
        System.err.println("💡 Tip: Use 'nlhsolver blueprint list' to see available blueprints.")
        exitProcess(5)
    } catch (e: RefinementException) {
        System.err.println("❌ Refinement Error:")
        System.err.println("   ${e.message}")
        System.err.println()
        System.err.println("💡 Tip: Ensure you have a valid blueprint to refine from.")
        exitProcess(6)
    } catch (e: StorageException) {
        System.err.println("❌ Storage Error:")
        System.err.println("   ${e.message}")
        System.err.println()
        System.err.println("💡 Check:")
        System.err.println("   - Disk space available")
        System.err.println("   - Write permissions in data directory")
        System.err.println("   - File system not corrupted")
        exitProcess(7)
    } catch (e: IllegalArgumentException) {
        System.err.println("❌ Invalid Input:")
        System.err.println("   ${e.message}")
        System.err.println()
        System.err.println("💡 Tip: Use --help to see correct argument format.")
        exitProcess(1)
    } catch (e: Exception) {
        // Catch-all for unexpected errors
        System.err.println("❌ Unexpected Error:")
        System.err.println("   ${e.message ?: e::class.simpleName}")
        System.err.println()
        System.err.println("Stack trace:")
        e.printStackTrace(System.err)
        System.err.println()
        System.err.println("💡 This may be a bug. Please report it with the stack trace above.")
        exitProcess(99)
    }
}
