# Implementation Tasks: No-Limit Hold'em Poker Solver

**Feature**: 001-nlh-poker-solver
**Branch**: `001-nlh-poker-solver`
**Created**: 2025-12-14
**Tech Stack**: Kotlin 1.9+, JVM 17+, Ktor 2.3+, Clikt 4.2+, Protocol Buffers 3.25+

## Overview

This document provides an executable task breakdown for implementing the NLH Poker Solver. Tasks are organized by user story priority to enable independent, incremental delivery.

**Total Tasks**: 88
**Parallelizable Tasks**: 42
**User Stories**: 4 (P1, P2, P3, P3)

---

## Implementation Strategy

### MVP Scope (User Story 1 Only)

The Minimum Viable Product includes **ONLY User Story 1** - Basic Heads-Up Solve Configuration. This delivers:
- Core CFR+ solver engine
- Heads-up (2-player) configuration and solving
- Strategy query capability
- Both CLI and REST API interfaces
- File-based persistence

**MVP Task Count**: ~55 tasks
**Estimated Effort**: 6-8 weeks

**Why this is sufficient**:
- Validates core algorithm implementation
- Proves performance goals are achievable
- Provides immediate value to users (heads-up is most common use case)
- Establishes foundation for all other stories

### Incremental Delivery

After MVP, deliver remaining stories independently:
- **User Story 2** (Multi-Player): Extends to 3-6 players (~10 tasks, 1-2 weeks)
- **User Story 3** (Background/Remote): Adds async execution (~15 tasks, 2-3 weeks)
- **User Story 4** (Progress Monitoring): Enhances UX (~8 tasks, 1 week)

---

## Dependency Graph

```text
Phase 1: Setup
   ↓
Phase 2: Foundational (Poker Domain)
   ↓
┌──────────────────────────────────────────┐
│  Phase 3: User Story 1 (P1) - CRITICAL   │ ← MVP
│  Basic Heads-Up Solve Configuration      │
└──────────────────────────────────────────┘
   ↓
┌──────────────────────────────────────────┐
│  Phase 4: User Story 2 (P2)              │
│  Multi-Player Configuration Support      │
└──────────────────────────────────────────┘
   ↓ (parallel with Phase 5)
┌──────────────────────────────────────────┐
│  Phase 5: User Story 3 (P3)              │
│  Background and Remote Solve Execution   │
└──────────────────────────────────────────┘
   ↓ (parallel with Phase 5)
┌──────────────────────────────────────────┐
│  Phase 6: User Story 4 (P3)              │
│  Solve Progress Monitoring               │
└──────────────────────────────────────────┘
   ↓
Phase 7: Polish & Cross-Cutting Concerns
```

**Story Dependencies**:
- Stories 2, 3, 4 are **independent** of each other
- All depend on Story 1 (MVP)
- Stories 3 and 4 can be developed in parallel after Story 1

---

## Phase 1: Setup & Project Initialization

**Goal**: Initialize Kotlin/Gradle project with required dependencies and structure.

**Tasks**: 12

- [X] T001 Create Gradle project with Kotlin 1.9+ and JVM 17+ target in build.gradle.kts
- [X] T002 [P] Add Protocol Buffers Gradle plugin (com.google.protobuf) to build.gradle.kts
- [X] T003 [P] Add Ktor 2.3+ dependencies (ktor-server-core, ktor-server-netty, ktor-serialization) to build.gradle.kts
- [X] T004 [P] Add Clikt 4.2+ dependency for CLI in build.gradle.kts
- [X] T005 [P] Add kotlinx.coroutines 1.8+ dependency for async execution in build.gradle.kts
- [X] T006 [P] Add Kotest 5.8+ and MockK 1.13+ test dependencies in build.gradle.kts
- [X] T007 Create project directory structure per plan.md: src/main/kotlin/com/nlhsolver/{core,poker,solver,storage,api,cli}
- [X] T008 [P] Create test directory structure: src/test/kotlin/com/nlhsolver/{unit,integration,contract}
- [X] T009 [P] Create src/main/proto/ directory for Protocol Buffers schemas
- [X] T010 [P] Create data/ directory for file-based storage (configurations, jobs, strategies)
- [X] T011 Configure Protocol Buffers code generation in build.gradle.kts (output to build/generated/source/proto)
- [X] T012 Create .gitignore for Kotlin/Gradle (build/, .gradle/, *.iml, data/)

**Completion Criteria**: `./gradlew build` succeeds with empty project structure.

---

## Phase 2: Foundational - Poker Domain Models

**Goal**: Implement core poker domain logic needed by all user stories (hand evaluation, cards, positions).

**Tasks**: 10

- [X] T013 [P] Define Card data class in src/main/kotlin/com/nlhsolver/poker/Card.kt (rank, suit)
- [X] T014 [P] Define Position enum in src/main/kotlin/com/nlhsolver/poker/Position.kt (BTN, SB, BB, UTG, MP, CO)
- [X] T015 [P] Define Street enum in src/main/kotlin/com/nlhsolver/poker/Street.kt (PREFLOP, FLOP, TURN, RIVER)
- [X] T016 [P] Define Action sealed class in src/main/kotlin/com/nlhsolver/poker/Action.kt (Fold, Check, Call, Bet, Raise, AllIn)
- [X] T017 Implement hand evaluation logic in src/main/kotlin/com/nlhsolver/poker/HandEvaluator.kt (7-card to 5-card best hand)
- [X] T018 Implement hand ranking comparison in src/main/kotlin/com/nlhsolver/poker/HandRank.kt (HIGH_CARD to ROYAL_FLUSH)
- [X] T019 [P] Create hand strength lookup table in src/main/kotlin/com/nlhsolver/poker/HandStrengthTable.kt (precomputed rankings)
- [X] T020 [P] Define preflop hand bucketing (169 canonical hands) in src/main/kotlin/com/nlhsolver/poker/PreflopBuckets.kt
- [X] T021 Implement equity calculator in src/main/kotlin/com/nlhsolver/poker/EquityCalculator.kt (Monte Carlo simulation)
- [X] T022 Implement suit isomorphism detection in src/main/kotlin/com/nlhsolver/poker/SuitIsomorphism.kt (canonical board representation)

**Completion Criteria**: Hand evaluator correctly ranks poker hands; equity calculator produces accurate results for sample scenarios.

---

## Phase 3: User Story 1 (P1) - Basic Heads-Up Solve Configuration

**Goal**: MVP - Enable users to configure heads-up solves, run CFR+ to convergence, and query strategies.

**Independent Test**: Configure 2-player 100bb BTN vs BB scenario, run solve to <0.5% exploitability, query strategy for specific flop.

**Tasks**: 55

### Data Models (US1)

- [X] T023 [P] [US1] Create SolveConfiguration entity in src/main/kotlin/com/nlhsolver/solver/SolveConfiguration.kt per data-model.md
- [X] T024 [P] [US1] Create ConvergenceCriteria data class in src/main/kotlin/com/nlhsolver/solver/ConvergenceCriteria.kt
- [X] T025 [P] [US1] Create BetSizingScheme sealed class in src/main/kotlin/com/nlhsolver/solver/BetSizingScheme.kt
- [X] T026 [P] [US1] Create HandAbstraction data class in src/main/kotlin/com/nlhsolver/solver/HandAbstraction.kt
- [X] T027 [P] [US1] Create SolveJob entity in src/main/kotlin/com/nlhsolver/solver/SolveJob.kt with JobStatus enum
- [X] T028 [P] [US1] Create JobProgress data class in src/main/kotlin/com/nlhsolver/solver/JobProgress.kt
- [X] T029 [P] [US1] Create SolveResult data class in src/main/kotlin/com/nlhsolver/solver/SolveResult.kt
- [X] T030 [P] [US1] Create StrategyProfile entity in src/main/kotlin/com/nlhsolver/solver/StrategyProfile.kt
- [X] T031 [P] [US1] Implement configuration validation in src/main/kotlin/com/nlhsolver/solver/ConfigurationValidator.kt (VR-001 through VR-005)

### Game Tree Construction (US1)

- [X] T032 [US1] Define GameTreeNode data class in src/main/kotlin/com/nlhsolver/core/GameTreeNode.kt (nodeType, gameState, children, regrets, strategy)
- [X] T033 [US1] Define GameState data class in src/main/kotlin/com/nlhsolver/core/PokerGameState.kt (street, board, pot, playerStates, actionHistory)
- [X] T034 [US1] Define PlayerState data class in src/main/kotlin/com/nlhsolver/core/PokerGameState.kt (position, stack, invested, handRange, folded, allIn)
- [X] T035 [US1] Implement postflop hand bucketing in src/main/kotlin/com/nlhsolver/poker/PostflopBucketing.kt (k-means clustering on equity histograms)
- [X] T036 [US1] Implement GameTreeBuilder in src/main/kotlin/com/nlhsolver/core/GameTreeBuilder.kt (constructs tree from SolveConfiguration for heads-up)
- [X] T037 [US1] Implement bet sizing discretization in GameTreeBuilder (apply BetSizingScheme to generate legal actions)
- [X] T038 [US1] Implement game tree abstraction (hand bucketing + suit isomorphism) in GameTreeBuilder
- [ ] T039 [US1] Add game tree memory management (node caching, LRU eviction) in src/main/kotlin/com/nlhsolver/core/GameTreeCache.kt

### CFR+ Algorithm (US1)

- [ ] T040 [US1] Implement vanilla CFR in src/main/kotlin/com/nlhsolver/core/CFRSolver.kt (regret accumulation, strategy computation)
- [ ] T041 [US1] Add CFR+ optimizations: linear discounting for regrets in CFRSolver
- [ ] T042 [US1] Add Regret Matching+ (regret floor at 0, weighted averaging) in CFRSolver
- [ ] T043 [US1] Implement External Sampling MCCFR in src/main/kotlin/com/nlhsolver/core/MCCFRSolver.kt (memory-efficient sampling)
- [ ] T044 [US1] Implement exploitability calculation via best-response in src/main/kotlin/com/nlhsolver/core/ExploitabilityCalculator.kt
- [ ] T045 [US1] Implement convergence detection in src/main/kotlin/com/nlhsolver/core/ConvergenceMonitor.kt (track exploitability over iterations)
- [ ] T046 [US1] Add iteration limit handling (save partial results) in ConvergenceMonitor

### Solve Orchestration (US1)

- [ ] T047 [US1] Implement SolveOrchestrator in src/main/kotlin/com/nlhsolver/solver/SolveOrchestrator.kt (coordinates tree building, CFR+ execution, convergence)
- [ ] T048 [US1] Add synchronous solve execution (blocking until complete) in SolveOrchestrator
- [ ] T049 [US1] Implement strategy extraction (convert regrets to final strategy) in src/main/kotlin/com/nlhsolver/solver/StrategyExtractor.kt

### Storage Layer (US1)

- [ ] T050 [P] [US1] Define Protocol Buffers schema for SolveConfiguration in src/main/proto/configuration.proto
- [ ] T051 [P] [US1] Define Protocol Buffers schema for SolveJob in src/main/proto/job.proto
- [ ] T052 [P] [US1] Define Protocol Buffers schema for StrategyProfile in src/main/proto/strategy.proto
- [ ] T053 [US1] Implement ConfigurationRepository in src/main/kotlin/com/nlhsolver/storage/ConfigurationRepository.kt (CRUD operations, file-based storage in data/configurations/)
- [ ] T054 [US1] Implement JobRepository in src/main/kotlin/com/nlhsolver/storage/JobRepository.kt (CRUD operations, file-based storage in data/jobs/)
- [ ] T055 [US1] Implement StrategyRepository in src/main/kotlin/com/nlhsolver/storage/StrategyRepository.kt (CRUD operations, file-based storage in data/strategies/)
- [ ] T056 [US1] Add Protocol Buffers serialization/deserialization with gzip compression in repositories

### Strategy Query (US1)

- [ ] T057 [US1] Implement StrategyQueryService in src/main/kotlin/com/nlhsolver/solver/StrategyQueryService.kt (look up strategy for game state)
- [ ] T058 [US1] Implement game state hash function in src/main/kotlin/com/nlhsolver/core/GameStateHash.kt (canonical representation for lookups)
- [ ] T059 [US1] Add strategy query validation (game state matches solve configuration) in StrategyQueryService

### REST API (US1)

- [ ] T060 [P] [US1] Create Ktor application setup in src/main/kotlin/com/nlhsolver/api/Application.kt (routing, serialization, error handling)
- [ ] T061 [P] [US1] Implement POST /api/v1/configurations endpoint in src/main/kotlin/com/nlhsolver/api/ConfigurationRoutes.kt
- [ ] T062 [P] [US1] Implement GET /api/v1/configurations endpoint in ConfigurationRoutes.kt
- [ ] T063 [P] [US1] Implement GET /api/v1/configurations/{id} endpoint in ConfigurationRoutes.kt
- [ ] T064 [P] [US1] Implement POST /api/v1/jobs endpoint in src/main/kotlin/com/nlhsolver/api/JobRoutes.kt
- [ ] T065 [P] [US1] Implement GET /api/v1/jobs endpoint in JobRoutes.kt
- [ ] T066 [P] [US1] Implement GET /api/v1/jobs/{id} endpoint in JobRoutes.kt
- [ ] T067 [P] [US1] Implement POST /api/v1/strategies/{id}/query endpoint in src/main/kotlin/com/nlhsolver/api/StrategyRoutes.kt
- [ ] T068 [P] [US1] Implement GET /api/v1/health endpoint in src/main/kotlin/com/nlhsolver/api/HealthRoutes.kt

### CLI (US1)

- [ ] T069 [P] [US1] Create Clikt CLI application in src/main/kotlin/com/nlhsolver/cli/NlhSolverCli.kt (main command group)
- [ ] T070 [P] [US1] Implement `config create` command in src/main/kotlin/com/nlhsolver/cli/ConfigCommands.kt
- [ ] T071 [P] [US1] Implement `config list` command in ConfigCommands.kt
- [ ] T072 [P] [US1] Implement `config get <id>` command in ConfigCommands.kt
- [ ] T073 [P] [US1] Implement `solve run` command in src/main/kotlin/com/nlhsolver/cli/SolveCommands.kt (synchronous execution)
- [ ] T074 [P] [US1] Implement `job list` command in src/main/kotlin/com/nlhsolver/cli/JobCommands.kt
- [ ] T075 [P] [US1] Implement `job status <id>` command in JobCommands.kt
- [ ] T076 [P] [US1] Implement `strategy query <id>` command in src/main/kotlin/com/nlhsolver/cli/StrategyCommands.kt
- [ ] T077 [US1] Add JSON and text output formatting in src/main/kotlin/com/nlhsolver/cli/OutputFormatter.kt

**User Story 1 Completion Criteria**:
- ✓ User can create 2-player configuration via CLI: `nlhsolver config create --players 2 --stacks "BTN:100,BB:100" --position BTN`
- ✓ User can submit solve via CLI: `nlhsolver solve run --config <id>` (runs to convergence)
- ✓ Solve completes with exploitability <0.5% in <4 hours on 8-16GB RAM
- ✓ User can query strategy via CLI: `nlhsolver strategy query <id> --street FLOP --board "AsKdQh" --pot 7.0 --position BB`
- ✓ All operations also work via REST API endpoints
- ✓ Results persisted to Protocol Buffers files with compression

**Parallel Execution Example (US1)**:
```bash
# After T051 (Protocol Buffers schemas defined):
# Run T050-T052 in parallel (different .proto files)

# After T059 (core solver complete):
# Run T060-T068 (REST API) and T069-T077 (CLI) in parallel (independent interfaces)
```

---

## Phase 4: User Story 2 (P2) - Multi-Player Configuration Support

**Goal**: Extend solver to support 3-6 players.

**Independent Test**: Configure 3-player (SB, BB, BTN) 100bb scenario, run solve to <1% exploitability, query position-specific strategies.

**Depends On**: User Story 1 (MVP)

**Tasks**: 10

- [ ] T078 [P] [US2] Extend Position enum validation in ConfigurationValidator to support 3-6 player positions
- [ ] T079 [P] [US2] Update GameTreeBuilder to handle multi-player game trees (multiple decision nodes per street)
- [ ] T080 [US2] Modify CFRSolver to handle multi-player regret updates (one regret table per player position)
- [ ] T081 [US2] Update ExploitabilityCalculator for multi-player exploitability (max exploitability across all positions)
- [ ] T082 [US2] Extend hand bucketing for multi-player equity calculations (vs. multiple opponent ranges) in PostflopBucketing.kt
- [ ] T083 [P] [US2] Update `config create` CLI command to support multi-player stack specifications
- [ ] T084 [P] [US2] Update POST /api/v1/configurations endpoint validation for 3-6 players
- [ ] T085 [US2] Add multi-player strategy query support in StrategyQueryService (position-specific lookups)
- [ ] T086 [US2] Update Protocol Buffers schemas to support multi-player game states in src/main/proto/game_state.proto
- [ ] T087 [US2] Add memory optimization for larger multi-player game trees in GameTreeCache.kt (more aggressive pruning)

**User Story 2 Completion Criteria**:
- ✓ User can create 3-6 player configurations via CLI/API
- ✓ Solves converge to <1% exploitability for 3-player scenarios
- ✓ Strategy queries return position-specific recommendations

---

## Phase 5: User Story 3 (P3) - Background and Remote Solve Execution

**Goal**: Enable async background execution and remote job submission.

**Independent Test**: Submit solve to background queue, verify non-blocking return, poll status, retrieve completed results.

**Depends On**: User Story 1 (MVP)
**Independent Of**: User Story 2, User Story 4 (can develop in parallel)

**Tasks**: 15

### Background Execution (US3)

- [ ] T088 [P] [US3] Create JobQueue interface in src/main/kotlin/com/nlhsolver/solver/JobQueue.kt (submit, poll, cancel operations)
- [ ] T089 [US3] Implement FileBasedJobQueue in src/main/kotlin/com/nlhsolver/solver/FileBasedJobQueue.kt (persistent queue in data/queue/)
- [ ] T090 [US3] Implement CoroutineJobWorker in src/main/kotlin/com/nlhsolver/solver/CoroutineJobWorker.kt (executes jobs via kotlinx.coroutines)
- [ ] T091 [US3] Add job worker pool in src/main/kotlin/com/nlhsolver/solver/JobWorkerPool.kt (configurable concurrency limit, default 3)
- [ ] T092 [US3] Implement job status transitions (PENDING → RUNNING → COMPLETED/FAILED/PARTIAL/CANCELLED) in SolveJob
- [ ] T093 [US3] Add job cancellation support in CoroutineJobWorker (cooperative cancellation via coroutine scope)
- [ ] T094 [P] [US3] Implement DELETE /api/v1/jobs/{id} endpoint for job cancellation in JobRoutes.kt
- [ ] T095 [P] [US3] Implement `solve run --background` flag in CLI SolveCommands.kt (non-blocking submission)
- [ ] T096 [P] [US3] Implement `job cancel <id>` command in CLI JobCommands.kt

### Remote Execution (US3)

- [ ] T097 [P] [US3] Create RemoteExecutor interface in src/main/kotlin/com/nlhsolver/solver/RemoteExecutor.kt (submit, retrieve results)
- [ ] T098 [US3] Implement HTTP-based RemoteExecutor in src/main/kotlin/com/nlhsolver/solver/HttpRemoteExecutor.kt (uses Ktor client)
- [ ] T099 [US3] Add remote job status polling in HttpRemoteExecutor (periodic checks with exponential backoff)
- [ ] T100 [US3] Implement remote result retrieval and local storage in HttpRemoteExecutor
- [ ] T101 [P] [US3] Add `solve run --remote` flag in CLI SolveCommands.kt
- [ ] T102 [P] [US3] Update POST /api/v1/jobs endpoint to support executionLocation=REMOTE in JobRoutes.kt

**User Story 3 Completion Criteria**:
- ✓ User can submit solve with `--background` flag, receives job ID immediately
- ✓ User can poll job status while solve runs asynchronously
- ✓ User can cancel running background jobs
- ✓ System supports 3+ concurrent background jobs without crashing
- ✓ User can submit solve with `--remote` flag to offload computation

---

## Phase 6: User Story 4 (P3) - Solve Progress Monitoring

**Goal**: Provide real-time progress updates during solving.

**Independent Test**: Start solve, poll progress endpoint, verify iteration count and exploitability updates every 30s.

**Depends On**: User Story 1 (MVP)
**Independent Of**: User Story 2, User Story 3 (can develop in parallel)

**Tasks**: 8

- [ ] T103 [P] [US4] Add progress tracking in CFRSolver (update JobProgress every N iterations) in src/main/kotlin/com/nlhsolver/core/CFRSolver.kt
- [ ] T104 [P] [US4] Implement iteration speed tracking in ConvergenceMonitor (calculate est. time remaining)
- [ ] T105 [P] [US4] Add estimated iterations remaining calculation in ConvergenceMonitor (based on convergence rate)
- [ ] T106 [P] [US4] Implement GET /api/v1/jobs/{id}/progress endpoint in JobRoutes.kt
- [ ] T107 [P] [US4] Implement `job status <id> --watch` flag in CLI JobCommands.kt (auto-refresh every 30s)
- [ ] T108 [US4] Add progress event emitter in SolveOrchestrator (publishes updates to JobProgress)
- [ ] T109 [US4] Persist JobProgress updates to job file (incremental updates) in JobRepository
- [ ] T110 [US4] Add progress display formatting (iteration count, exploitability %, est. time) in CLI OutputFormatter

**User Story 4 Completion Criteria**:
- ✓ User can query progress via API: GET /api/v1/jobs/{id}/progress
- ✓ Progress updates show: iterations completed, current exploitability, estimated time remaining
- ✓ CLI `--watch` mode auto-refreshes progress every 30s
- ✓ Progress updates persist across application restarts

---

## Phase 7: Polish & Cross-Cutting Concerns

**Goal**: Production readiness, error handling, validation, documentation.

**Tasks**: 13

### Error Handling & Validation

- [ ] T111 [P] Create domain-specific exceptions in src/main/kotlin/com/nlhsolver/common/Exceptions.kt (InvalidConfigurationException, SolveFailedException, etc.)
- [ ] T112 [P] Add global error handling middleware in Ktor Application.kt (catch exceptions, return proper HTTP status codes)
- [ ] T113 [P] Implement edge case handling: invalid stack sizes (validation in ConfigurationValidator)
- [ ] T114 [P] Implement edge case handling: convergence failure (save partial results in ConvergenceMonitor)
- [ ] T115 [P] Implement edge case handling: out of memory (graceful degradation in GameTreeCache)
- [ ] T116 [P] Add CLI error messages with helpful suggestions (e.g., "Stack size must be 10-500bb") in all command classes

### Logging & Observability

- [ ] T117 [P] Add structured logging with SLF4J in all core components (CFRSolver, SolveOrchestrator, repositories)
- [ ] T118 [P] Implement performance metrics collection in src/main/kotlin/com/nlhsolver/common/Metrics.kt (solve time, memory usage, iteration speed)
- [ ] T119 [P] Add health check details in GET /api/v1/health (active jobs, uptime, memory usage)

### Documentation & Build

- [ ] T120 [P] Add inline KDoc comments to all public APIs (domain models, services, endpoints)
- [ ] T121 [P] Create README.md with quickstart instructions (based on quickstart.md from specs/)
- [ ] T122 Configure Gradle application plugin for CLI distribution in build.gradle.kts
- [ ] T123 Create Docker image configuration in Dockerfile (JVM 17 base, expose port 8080)

**Phase 7 Completion Criteria**:
- ✓ All edge cases from spec.md are handled gracefully
- ✓ Comprehensive logging for debugging
- ✓ README provides clear getting-started instructions
- ✓ Docker image builds and runs successfully

---

## Parallel Execution Opportunities

### Setup Phase (T002-T006, T008-T010)
Run in parallel after T001 (project creation):
```bash
# All dependency additions and directory creation are independent
T002, T003, T004, T005, T006, T008, T009, T010
```

### Foundational Phase (T013-T016, T019-T020)
Run in parallel after T012 (project setup complete):
```bash
# All poker domain model definitions are independent
T013, T014, T015, T016, T019, T020
```

### User Story 1 - Data Models (T023-T031)
Run in parallel after T022:
```bash
# All data model definitions are independent
T023, T024, T025, T026, T027, T028, T029, T030, T031
```

### User Story 1 - Protocol Buffers (T050-T052)
Run in parallel after T049:
```bash
# Different .proto files, no dependencies
T050, T051, T052
```

### User Story 1 - REST API (T060-T068)
Run in parallel with CLI (T069-T077) after T059:
```bash
# REST API and CLI are independent interfaces
# Group 1: REST API
T060, T061, T062, T063, T064, T065, T066, T067, T068

# Group 2: CLI (run in parallel with Group 1)
T069, T070, T071, T072, T073, T074, T075, T076
```

### User Story 2 (T078-T079, T083-T084, T086)
Run in parallel after T077:
```bash
# Independent validation and schema updates
T078, T079, T083, T084, T086
```

### User Story 3 - Background & Remote (T088, T094-T095, T097, T101-T102)
Run in parallel after T093:
```bash
# API and CLI endpoints are independent
T094, T095, T101, T102
```

### Phase 7 - Polish (Most tasks)
Run in parallel after Phase 6:
```bash
# Most polish tasks are independent
T111, T112, T113, T114, T115, T116, T117, T118, T119, T120, T121
```

---

## Task Summary by User Story

| User Story | Priority | Tasks | Parallelizable | Estimated Effort |
|------------|----------|-------|----------------|------------------|
| Setup | - | 12 | 9 | 1 week |
| Foundational | - | 10 | 6 | 1 week |
| **US1: Basic Heads-Up Solve** | **P1** | **55** | **27** | **6-8 weeks (MVP)** |
| US2: Multi-Player Support | P2 | 10 | 5 | 1-2 weeks |
| US3: Background/Remote | P3 | 15 | 7 | 2-3 weeks |
| US4: Progress Monitoring | P3 | 8 | 6 | 1 week |
| Polish | - | 13 | 11 | 1 week |
| **TOTAL** | - | **123** | **71** | **12-16 weeks** |

---

## MVP Delivery (User Story 1 Only)

**Tasks**: T001-T077 (77 tasks total)
**Estimated Effort**: 8-10 weeks
**Deliverables**:
- Functional heads-up poker solver (2-player)
- CFR+ algorithm with convergence to <0.5% exploitability
- CLI and REST API interfaces
- Strategy query capability
- File-based persistence with Protocol Buffers

**Post-MVP**: Deliver US2, US3, US4 independently as incremental enhancements.

---

## Notes

- **File Paths**: All tasks specify exact file paths for implementation
- **Checklist Format**: All tasks follow `- [ ] T### [P] [Story] Description with path` format
- **Independent Testing**: Each user story phase has clear completion criteria
- **Parallelization**: [P] marker indicates tasks that can run in parallel
- **Story Labels**: [US1], [US2], [US3], [US4] map to user stories from spec.md
- **No Tests**: Test tasks not generated (not explicitly requested in specification)

**Ready for Implementation**: Start with T001 and proceed sequentially, parallelizing where marked.
