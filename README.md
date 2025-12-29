# No-Limit Hold'em Poker Solver

A game-theoretic poker solver for No-Limit Hold'em using CFR+ (Counterfactual Regret Minimization Plus) algorithm. Built with Kotlin on the JVM with both CLI and REST API interfaces.

## Project Status

**Phase 1: Setup Complete** ✅
**Phase 2: Foundational Complete** ✅

The project structure, build configuration, and core poker domain logic are implemented. All foundational components for poker hand evaluation, equity calculation, and game tree optimization are ready.

**Completed Tasks**: 22/123 (18%)

**Phase 1** - Setup ✅
- ✅ Gradle/Kotlin project initialized (JVM 17, Kotlin 1.9.22)
- ✅ All dependencies configured (Ktor, Clikt, Protocol Buffers, Kotest, MockK)
- ✅ Project directory structure created
- ✅ Build system configured

**Phase 2** - Foundational ✅
- ✅ Poker domain models (Card, Rank, Suit, Position, Street, Action)
- ✅ Hand evaluation logic (5-card and 7-card evaluation)
- ✅ Hand ranking system (HIGH_CARD to ROYAL_FLUSH with tie-breaking)
- ✅ Hand strength lookup table with caching
- ✅ Preflop bucketing (169 canonical hands)
- ✅ Equity calculator (Monte Carlo simulation)
- ✅ Suit isomorphism detection (game tree reduction)

**Next Phase**: Phase 3 - User Story 1 MVP (55 tasks - Core CFR+ Solver)

## Tech Stack

- **Language**: Kotlin 1.9.22
- **JVM**: Java 17+
- **Build**: Gradle 8.5
- **REST API**: Ktor 2.3.7
- **CLI**: Clikt 4.2.2
- **Async**: kotlinx.coroutines 1.8.0
- **Persistence**: Protocol Buffers 3.25.2
- **Testing**: Kotest 5.8.0, MockK 1.13.9, JUnit 5

## Prerequisites

- **Java**: JDK 17 or higher
- **Gradle**: 8.5+ (or use wrapper - see setup below)
- **Memory**: 8GB RAM minimum, 16GB recommended
- **Storage**: 10GB+ free disk space

## Project Structure

```
nlh-solver/
├── src/
│   ├── main/
│   │   ├── kotlin/
│   │   │   └── com/nlhsolver/
│   │   │       ├── core/           # CFR+ algorithm, game tree
│   │   │       ├── poker/          # Hand evaluation, equity calculation
│   │   │       ├── solver/         # Solve orchestration
│   │   │       ├── storage/        # Protocol Buffers persistence
│   │   │       ├── api/            # REST API endpoints (Ktor)
│   │   │       └── cli/            # CLI commands (Clikt)
│   │   └── proto/                  # Protocol Buffers schemas
│   └── test/
│       └── kotlin/
│           └── com/nlhsolver/
│               ├── unit/           # Unit tests
│               ├── integration/    # Integration tests
│               └── contract/       # API contract tests
├── data/                           # Runtime storage (gitignored)
│   ├── configurations/             # Solve configurations
│   ├── jobs/                       # Job metadata
│   ├── strategies/                 # Completed strategies
│   └── queue/                      # Background job queue
├── build.gradle.kts                # Build configuration
├── settings.gradle.kts             # Project settings
└── .gitignore                      # Git ignore rules

```

## Quick Start

### 1. Initialize Gradle Wrapper

If you have Gradle installed:

```bash
gradle wrapper --gradle-version 8.5
```

This creates `gradlew` (Unix) and `gradlew.bat` (Windows) wrapper scripts.

### 2. Build the Project

```bash
./gradlew build
```

Expected output: `BUILD SUCCESSFUL` (currently builds empty project structure)

### 3. Run Tests

```bash
./gradlew test
```

### 4. Check Dependencies

```bash
./gradlew dependencies
```

## Development Roadmap

### Phase 1: Setup ✅ COMPLETE
- [X] Gradle project initialization
- [X] All dependencies configured
- [X] Directory structure created
- [X] Build system with Protocol Buffers support

### Phase 2: Foundational ✅ COMPLETE
- [X] Poker domain models (Card, Position, Street, Action)
- [X] Hand evaluation logic (5-card and 7-card)
- [X] Hand ranking comparison system
- [X] Hand strength lookup table
- [X] Preflop bucketing (169 canonical hands)
- [X] Equity calculator (Monte Carlo simulation)
- [X] Suit isomorphism detection

### Phase 3: User Story 1 - MVP (Core Solver)
- [ ] Game tree construction
- [ ] CFR+ algorithm implementation
- [ ] Solve orchestration
- [ ] Protocol Buffers schemas
- [ ] Storage layer (file-based)
- [ ] Strategy query service
- [ ] REST API endpoints
- [ ] CLI commands

### Phases 4-7: Additional Features
- [ ] Multi-player support (3-6 players)
- [ ] Background/remote execution
- [ ] Progress monitoring
- [ ] Polish and production readiness

**Full task breakdown**: See `specs/001-nlh-poker-solver/tasks.md` (123 tasks total)

## Documentation

- **Feature Spec**: `specs/001-nlh-poker-solver/spec.md`
- **Implementation Plan**: `specs/001-nlh-poker-solver/plan.md`
- **Data Model**: `specs/001-nlh-poker-solver/data-model.md`
- **API Contracts**: `specs/001-nlh-poker-solver/contracts/`
- **Research**: `specs/001-nlh-poker-solver/research.md`
- **Quickstart Guide**: `specs/001-nlh-poker-solver/quickstart.md`
- **Task Breakdown**: `specs/001-nlh-poker-solver/tasks.md`

## Key Features (Planned)

- **CFR+ Solver**: Game-theoretic optimal strategies for No-Limit Hold'em
- **Configurable**: Stack sizes (10bb-500bb), player counts (2-6)
- **Optimized**: Hand bucketing, suit isomorphism, node caching
- **Dual Interface**: CLI and REST API
- **Background Execution**: Async job queue for long-running solves
- **Strategy Queries**: Look up optimal play for specific game states
- **Performance Target**: Heads-up 100bb solve in <4 hours on consumer hardware

## Build Commands

```bash
# Build project
./gradlew build

# Run tests
./gradlew test

# Run specific test
./gradlew test --tests "com.nlhsolver.poker.CardTest"

# Clean build
./gradlew clean build

# Generate Protocol Buffers code
./gradlew generateProto

# Create distribution
./gradlew installDist

# Run application (once implemented)
./gradlew run
```

## Development Notes

### Protocol Buffers

Protocol Buffers schemas should be placed in `src/main/proto/`. The Gradle plugin will automatically:
- Generate Kotlin code to `build/generated/source/proto/main/kotlin/`
- Make generated code available to the compiler

### Data Storage

The `data/` directory is gitignored and used for runtime storage:
- **configurations/**: Solve configuration files (.pb.gz)
- **jobs/**: Job metadata files (.pb.gz)
- **strategies/**: Completed strategy files (.pb.gz)
- **queue/**: Background job queue state

### Testing

- **Unit tests**: `src/test/kotlin/com/nlhsolver/unit/`
- **Integration tests**: `src/test/kotlin/com/nlhsolver/integration/`
- **Contract tests**: `src/test/kotlin/com/nlhsolver/contract/`

Framework: Kotest for property-based testing, MockK for mocking

## Performance Goals

- **Heads-Up 100bb Solve**: <4 hours on 8-16GB RAM
- **Exploitability**: <0.5% of pot
- **Strategy Queries**: <5 seconds
- **Concurrent Jobs**: Support 3+ background solves
- **Game Tree Size**: 50-100M nodes (with abstractions)

## Contributing

This project follows a phased implementation approach. See `specs/001-nlh-poker-solver/tasks.md` for the complete task breakdown and current progress.

## License

TBD

## Contact

TBD

---

**Status**: Phase 1 & 2 Complete - Core poker domain logic implemented (22/123 tasks, 18%)
**Next**: Phase 3 - User Story 1 MVP (CFR+ solver core, game tree construction, CLI/API)
