# Feature Specification: No-Limit Hold'em Poker Solver

**Feature Branch**: `001-nlh-poker-solver`
**Created**: 2025-12-13
**Status**: Draft
**Input**: User description: "create a heads-up nlh solver along the lines of piosolver, using kotlin. given that this is potentially a less performant language, take advantage of game tree simplifications like bucketization, caching of common nodes, etc. consider queueing solves to run in the background, or even remotely. i have a tolerance in terms of runtime as long as we get to a reasonable regret threshold eventually. allow things like the stack size and number of players to be configurable"

## Clarifications

### Session 2025-12-13

- Q: Which solving algorithm should the system use to compute game-theoretic optimal strategies? → A: CFR+ with discounting
- Q: What storage format should be used for persisting solve results and configurations? → A: Protocol Buffers (binary format with compression)
- Q: How should the continuous bet sizing space be discretized for game tree construction? → A: Geometric progression with pot-relative sizing (e.g., 0.33×, 0.5×, 0.75×, 1×, 1.5× pot + all-in)
- Q: What should happen when a solve reaches maximum iteration limit without meeting convergence threshold? → A: Save partial results with warning about exploitability level
- Q: What user interface type should the system provide for configuration, job management, and result queries? → A: Hybrid approach with both command-line interface (CLI) and REST API to support local automation and future web integration

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Basic Heads-Up Solve Configuration (Priority: P1)

A poker player wants to analyze optimal strategies for a specific heads-up No-Limit Hold'em scenario by configuring game parameters and running a solve to convergence.

**Why this priority**: This is the core functionality - without the ability to configure and run basic solves, the tool has no value. All other features depend on this baseline capability.

**Independent Test**: Can be fully tested by setting up a simple heads-up scenario (e.g., 100bb stacks, button vs big blind preflop), initiating a solve, and verifying it converges to a solution with exploitability below threshold.

**Acceptance Scenarios**:

1. **Given** no active solve, **When** user specifies stack sizes (e.g., 100 big blinds for both players) and starting position (e.g., button vs big blind) via CLI or API, **Then** system accepts configuration and is ready to run solve
2. **Given** valid game configuration, **When** user initiates solve via CLI or API, **Then** system begins computation and tracks progress toward convergence
3. **Given** solve is running, **When** convergence threshold is reached (exploitability below acceptable regret level), **Then** system completes solve and provides optimal strategies for both players
4. **Given** completed solve, **When** user requests strategy for specific game state (e.g., button with AK on K-7-2 flop) via CLI or API, **Then** system returns recommended action frequencies (bet/check/fold percentages and sizing)

---

### User Story 2 - Multi-Player Configuration Support (Priority: P2)

A poker player wants to analyze 3-handed or full-ring scenarios by configuring the number of active players beyond heads-up.

**Why this priority**: Extends the solver's utility to more complex game formats, but heads-up analysis is the most common use case and must work first.

**Independent Test**: Can be tested by configuring a 3-player scenario (e.g., button, small blind, big blind with configurable stack sizes), running a solve, and verifying convergence for all player positions.

**Acceptance Scenarios**:

1. **Given** starting a new solve, **When** user specifies 3-6 players with individual stack sizes, **Then** system accepts multi-player configuration
2. **Given** multi-player configuration, **When** solve runs to convergence, **Then** system produces optimal strategies for each player position
3. **Given** completed multi-player solve, **When** user queries strategy, **Then** system returns position-specific recommendations

---

### User Story 3 - Background and Remote Solve Execution (Priority: P3)

A user wants to queue solve jobs that run asynchronously in the background or on remote compute resources, allowing them to continue working while long-running computations complete.

**Why this priority**: Improves user experience for intensive solves but is not essential for core functionality. Users can still run solves synchronously.

**Independent Test**: Can be tested by submitting a solve configuration to background queue, verifying user can continue other work, and confirming solve completes with results accessible later.

**Acceptance Scenarios**:

1. **Given** user has configured a solve, **When** user submits to background queue, **Then** solve runs asynchronously and user can initiate other actions
2. **Given** background solve is running, **When** user checks solve status, **Then** system reports current progress (iterations completed, exploitability level)
3. **Given** background solve completes, **When** user retrieves results, **Then** system provides completed strategies
4. **Given** remote compute capability is configured, **When** user submits solve to remote queue, **Then** system offloads computation and retrieves results when complete

---

### User Story 4 - Solve Progress Monitoring (Priority: P3)

A user wants to monitor solve progress in real-time to understand how close the solution is to convergence and estimate remaining runtime.

**Why this priority**: Helpful for user confidence and planning but not required for core solving capability.

**Independent Test**: Can be tested by initiating a solve and verifying the system provides periodic updates on iterations completed, current exploitability, and estimated time to convergence.

**Acceptance Scenarios**:

1. **Given** solve is running, **When** user requests progress update, **Then** system displays current iteration count, exploitability metric, and convergence status
2. **Given** solve has run for multiple iterations, **When** system estimates remaining time, **Then** estimate is based on recent iteration speed and distance to target exploitability

---

### Edge Cases

- What happens when user specifies invalid stack sizes (negative, zero, or exceeding reasonable limits)? → System rejects configuration with validation error message specifying acceptable range (10bb-500bb)
- How does system handle scenarios where convergence is extremely slow or doesn't meet threshold within reasonable iteration count? → System saves partial results with warning indicating actual exploitability level achieved, allowing user to decide whether to use partial solution or reconfigure
- What happens when user requests strategy for game state not included in solve configuration (e.g., wrong number of players, invalid board cards)? → System returns error indicating queried game state parameters don't match solve configuration
- How does system handle background solve failures (out of memory, computation errors)? → System marks solve job as failed, logs error details, preserves any partial results if available, and notifies user
- What happens when remote compute resources become unavailable during active solve? → System attempts reconnection with exponential backoff; if unrecoverable, saves partial results locally and marks job as failed with connectivity error
- How does system manage multiple concurrent background solves with limited memory? → System enforces queue with configurable concurrency limit (default 3); additional jobs wait in pending state
- What happens when user attempts to configure unsupported game variations (e.g., pot-limit instead of no-limit)? → System rejects configuration with error message listing supported game types (No-Limit Hold'em only)

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST allow users to configure stack sizes for each player position independently (in big blinds)
- **FR-002**: System MUST allow users to specify number of active players (2-6 players, defaulting to 2 for heads-up)
- **FR-003**: System MUST allow users to define starting game position (preflop positions: button, small blind, big blind, etc.)
- **FR-004**: System MUST accept configuration for convergence criteria (target exploitability/regret threshold)
- **FR-005**: System MUST compute game-theoretic optimal strategies using CFR+ (Counterfactual Regret Minimization with regret matching+ and discounting) algorithm to convergence
- **FR-006**: System MUST use computational optimizations to reduce solve time while maintaining solution quality
- **FR-007**: System MUST avoid redundant calculations by reusing previously computed results
- **FR-008**: System MUST track exploitability metric during solving to measure solution quality
- **FR-009**: System MUST allow users to query optimal strategy for specific game states from completed solve
- **FR-010**: System MUST provide action frequencies (percentages for each action: fold, call, raise) and bet sizing recommendations using pot-relative geometric progression (default sizes: 0.33×, 0.5×, 0.75×, 1×, 1.5× pot, plus all-in)
- **FR-011**: System MUST support background execution mode where solve runs asynchronously
- **FR-012**: System MUST allow users to check status of background solves (progress, estimated completion)
- **FR-013**: System MUST support queueing multiple solve jobs for sequential execution
- **FR-014**: System MUST provide option to offload computation to cloud computing services for scalable remote execution
- **FR-015**: System MUST persist solve configurations using Protocol Buffers binary format for repeatability
- **FR-016**: System MUST persist completed solve results using Protocol Buffers binary format with compression for efficient storage and later retrieval
- **FR-017**: System MUST validate game configurations before initiating solve (valid stack sizes, player counts, positions)
- **FR-018**: System MUST handle memory constraints gracefully by prioritizing most relevant game tree branches
- **FR-019**: System MUST provide meaningful error messages when solve fails or configuration is invalid
- **FR-020**: System MUST allow users to stop running solves (cancel operation)
- **FR-021**: System MUST enforce configurable maximum iteration limit to prevent indefinite computation
- **FR-022**: System MUST save partial solve results when maximum iteration limit is reached, including achieved exploitability level and warning that convergence threshold was not met
- **FR-023**: System MUST provide command-line interface (CLI) for all solve operations including configuration, job submission, status monitoring, result queries, and cancellation
- **FR-024**: System MUST provide REST API endpoints for all solve operations to enable web-based clients and remote monitoring
- **FR-025**: System MUST ensure CLI and REST API provide equivalent functionality and access the same underlying solver engine and data persistence layer

### Key Entities

- **Solve Configuration**: Represents parameters for a specific game theory solve including number of players, stack sizes per position, starting position, convergence criteria, bet sizing discretization (pot-relative multipliers), and game tree abstraction settings
- **Game Tree Node**: Represents a decision point in the poker game (specific hand ranges, board state, betting action history) with associated strategy and regret values
- **Strategy Profile**: Represents the computed optimal strategy for all players at all decision points, including action frequencies and bet sizing
- **Solve Job**: Represents an active or queued solve request with status (pending, running, completed, failed, partial), progress metrics (iterations completed, current exploitability), completion type (converged or iteration-limited), and configuration reference
- **Hand Bucket**: Represents a group of strategically similar hands treated equivalently for game tree abstraction (e.g., all suited connectors, all pocket pairs in specific range)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can configure and initiate a heads-up solve in under 5 minutes
- **SC-002**: System produces heads-up solve solutions with exploitability below 0.5% of pot (industry standard for high-quality approximation)
- **SC-003**: System completes typical heads-up, 100bb scenario solve within 4 hours on standard hardware
- **SC-004**: System supports concurrent background execution of at least 3 solve jobs without crashing
- **SC-005**: Users can retrieve strategy recommendations from completed solves in under 5 seconds per query
- **SC-006**: System successfully handles stack size configurations ranging from 10bb to 500bb
- **SC-007**: System successfully handles multi-player scenarios (3-6 players) with convergence to solutions under 1% exploitability
- **SC-008**: System runs typical heads-up scenarios on consumer-grade hardware (8-16GB RAM)
- **SC-009**: 90% of valid solve configurations complete successfully without manual intervention
- **SC-010**: Users can monitor solve progress with updates provided at least every 30 seconds during active computation

## Assumptions

- Users have basic understanding of poker game theory concepts (exploitability, Nash equilibrium, GTO strategy)
- Standard No-Limit Hold'em rules apply (no limit on bet sizing except stack size, standard hand rankings)
- Reasonable defaults exist for abstraction granularity (e.g., 169 preflop buckets based on hand strength, 50-200 flop buckets based on equity and potential)
- Convergence threshold of 0.5% pot exploitability is acceptable default for most use cases
- Users running solves have adequate hardware (minimum 8GB RAM, multi-core processor recommended)
- Remote execution assumes network connectivity and authenticated access to compute resources
- Solve persistence stores results in local file system using Protocol Buffers binary format
- Background execution runs in separate process or thread to avoid blocking user interface
- CLI users have terminal access to the system running the solver
- REST API clients can communicate over HTTP/HTTPS with the solver service
- Both CLI and REST API interface the same solver core engine and share the same persisted data

## Out of Scope

- Real-time solving during live play (solves are computational and take hours, not seconds)
- Integration with online poker platforms or hand history analysis
- Graphical desktop GUI application (CLI and REST API only; web frontend can consume REST API but is separate concern)
- Graphical visualization of game trees or strategy charts (text-based/JSON strategy output is sufficient)
- Support for other poker variants (Pot-Limit Omaha, Stud, etc.)
- Multiplayer scenarios beyond 6 players (computational complexity increases exponentially)
- Automated opponent modeling or exploitative strategy adjustments
