# Implementation Plan: No-Limit Hold'em Poker Solver

**Branch**: `001-nlh-poker-solver` | **Date**: 2025-12-13 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-nlh-poker-solver/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a No-Limit Hold'em poker solver that computes game-theoretic optimal strategies using CFR+ algorithm with regret matching and discounting. The system will use Kotlin with computational optimizations (hand bucketization, node caching) to handle performance constraints. It will support configurable stack sizes, player counts (2-6), and provide both CLI and REST API interfaces. Solves can run in background or remotely, with results persisted using Protocol Buffers.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: Kotlin 1.9+ with JVM target (Java 17+)
**Primary Dependencies**:
- Protocol Buffers: `protobuf-java` 3.25+ with Gradle plugin for solve persistence
- CFR+ Algorithm: Custom implementation (no suitable JVM libraries exist)
- REST API: Ktor 2.3+ (Kotlin-native, coroutine support)
- CLI: Clikt 4.2+ (Kotlin DSL for argument parsing)
- Async: kotlinx.coroutines 1.8+ for background job execution

**Storage**: Protocol Buffers binary files with compression (local filesystem)
**Testing**: Kotest 5.8+ (property-based testing for CFR+ validation) with MockK 1.13+ (Kotlin-native mocking); JUnit 5 for integration tests
**Target Platform**: JVM-based (Linux/macOS/Windows servers and developer machines)
**Project Type**: Single backend project with dual interface (CLI + REST API)
**Performance Goals**: Complete typical heads-up 100bb solve within 4 hours on consumer hardware (8-16GB RAM); strategy queries <5s; exploitability <0.5% pot
**Constraints**: Runs on consumer-grade hardware (8-16GB RAM minimum); supports concurrent background execution of 3+ solve jobs; must handle stack sizes 10bb-500bb
**Scale/Scope**: Game trees with 50-100M nodes (reduced via hand bucketing and bet sizing abstraction); 2-6 player support; persistent storage for multiple solve configurations and results

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Status**: No project-specific constitution established yet (constitution.md contains template only)

Since no specific architectural principles have been defined for this project, there are no gates to validate. This section will be re-evaluated after Phase 1 design if a constitution is established.

## Project Structure

### Documentation (this feature)

```text
specs/001-nlh-poker-solver/
├── spec.md              # Feature specification (input)
├── plan.md              # This file (Phase 0-1 output)
├── research.md          # Phase 0 output - Technology research and decisions
├── data-model.md        # Phase 1 output - Entity definitions and relationships
├── quickstart.md        # Phase 1 output - Developer getting started guide
├── contracts/           # Phase 1 output - API specifications
│   ├── rest-api.yaml    # OpenAPI 3.0 REST API contract
│   └── cli-interface.md # CLI command specification
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── main/
│   └── kotlin/
│       └── com/nlhsolver/
│           ├── core/           # CFR+ algorithm, game tree, regret tracking
│           ├── poker/          # Poker-specific logic: hand evaluation, buckets, equity
│           ├── solver/         # Solve orchestration, convergence monitoring
│           ├── storage/        # Protocol Buffers serialization/deserialization
│           ├── api/            # REST API endpoints and models
│           └── cli/            # Command-line interface
└── test/
    └── kotlin/
        └── com/nlhsolver/
            ├── unit/           # Unit tests for individual components
            ├── integration/    # Integration tests for solver workflows
            └── contract/       # API contract tests

build.gradle.kts                # Kotlin Gradle build configuration
settings.gradle.kts             # Multi-module settings (if needed later)
```

**Structure Decision**: Single JVM project structure using Kotlin with Gradle. The `core` package contains the CFR+ algorithm implementation and game tree abstraction. The `poker` package handles domain-specific logic like hand evaluation and bucketing. The `solver` package orchestrates solve jobs with background execution support. Both CLI and REST API interfaces live in separate packages but share the same core solver engine.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

N/A - No project constitution established yet, so no violations to track.
