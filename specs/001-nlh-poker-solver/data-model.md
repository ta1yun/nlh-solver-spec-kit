# Data Model: No-Limit Hold'em Poker Solver

**Feature**: 001-nlh-poker-solver
**Date**: 2025-12-13
**Status**: Design Phase

## Overview

This document defines the core domain entities for the NLH poker solver. Each entity includes fields, validation rules, relationships, and state transitions where applicable.

---

## Entity Diagram

```text
SolveConfiguration --1:N--> SolveJob
SolveJob --1:1--> GameTree
GameTree --1:N--> GameTreeNode
GameTreeNode --N:N--> HandBucket
SolveJob --1:1--> StrategyProfile (on completion)
StrategyProfile --N:N--> GameTreeNode
```

---

## Core Entities

### 1. SolveConfiguration

Represents the complete parameterization of a poker solve request.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `configId` | UUID | Yes | Generated | Valid UUID v4 |
| `name` | String | No | "Untitled Solve" | Max 100 chars |
| `description` | String | No | null | Max 500 chars |
| `numPlayers` | Int | Yes | 2 | Range: 2-6 |
| `stackSizes` | Map<Position, BigBlind> | Yes | - | Each value: 10-500bb |
| `startingPosition` | Position | Yes | - | Valid position for numPlayers |
| `convergenceCriteria` | ConvergenceCriteria | No | Default | See ConvergenceCriteria |
| `betSizingScheme` | BetSizingScheme | No | Default | See BetSizingScheme |
| `handAbstraction` | HandAbstraction | No | Default | See HandAbstraction |
| `createdAt` | Timestamp | Yes | Now | ISO 8601 |
| `updatedAt` | Timestamp | Yes | Now | ISO 8601 |

#### Validation Rules

- **VR-001**: `stackSizes` map must have exactly `numPlayers` entries
- **VR-002**: All stack sizes must be positive and within [10bb, 500bb] range
- **VR-003**: `startingPosition` must be valid for the number of players (e.g., Button valid for 2+, UTG only valid for 6+)
- **VR-004**: If `convergenceCriteria.maxIterations` is set, must be > 1000
- **VR-005**: `betSizingScheme.sizes` must contain at least 1 pot-relative multiplier and always include ALL_IN

#### Relationships

- One SolveConfiguration can be used by many SolveJobs (reusable configurations)

#### State

Immutable once created (copy-on-modify pattern for updates).

---

### 2. ConvergenceCriteria

Nested entity defining when a solve should terminate.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `targetExploitability` | Percentage | Yes | 0.5% | Range: 0.01%-5% |
| `maxIterations` | Long | No | 5_000_000 | Min: 1000 |
| `evaluationFrequency` | Int | No | 10_000 | Min: 100, max: 100_000 |
| `timeoutHours` | Int | No | null | Min: 1, max: 168 (7 days) |

#### Semantics

- **targetExploitability**: Solve terminates when measured exploitability falls below this threshold (as % of pot)
- **maxIterations**: Hard limit on CFR+ iterations; solve stops even if not converged
- **evaluationFrequency**: How often (in iterations) to calculate full exploitability (expensive operation)
- **timeoutHours**: Optional wall-clock time limit; solve terminates with partial results

---

### 3. BetSizingScheme

Nested entity defining discretized bet sizing options.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `sizes` | List<BetSize> | Yes | [0.33×, 0.5×, 0.75×, 1×, 1.5×, ALL_IN] | Min 1 size, must include ALL_IN |
| `allowCustomSizes` | Boolean | No | false | - |

#### BetSize Type

```kotlin
sealed class BetSize {
    data class PotRelative(val multiplier: Double) : BetSize() // e.g., 0.5 = 50% pot
    object AllIn : BetSize()
}
```

#### Validation Rules

- **VR-006**: All `PotRelative` multipliers must be positive
- **VR-007**: `sizes` list must always contain `AllIn`
- **VR-008**: Duplicate pot multipliers not allowed

---

### 4. HandAbstraction

Nested entity defining hand bucketing strategy.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `preflopBuckets` | Int | Yes | 169 | Fixed at 169 (canonical hands) |
| `flopBuckets` | Int | No | 200 | Range: 50-500 |
| `turnBuckets` | Int | No | 200 | Range: 50-500 |
| `riverBuckets` | Int | No | 200 | Range: 50-500 |
| `bucketingMethod` | BucketingMethod | No | EQUITY_HISTOGRAM | Enum: EQUITY_HISTOGRAM, POTENTIAL_AWARE |

#### Semantics

- More buckets = higher accuracy but larger game tree and longer solve time
- EQUITY_HISTOGRAM: Cluster hands by equity distribution vs. opponent range
- POTENTIAL_AWARE: Also considers hand improvement potential (better for draws)

---

### 5. SolveJob

Represents an active, queued, or completed solve request.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `jobId` | UUID | Yes | Generated | Valid UUID v4 |
| `configurationId` | UUID | Yes | - | Foreign key to SolveConfiguration |
| `status` | JobStatus | Yes | PENDING | Enum: PENDING, RUNNING, COMPLETED, FAILED, PARTIAL, CANCELLED |
| `progress` | JobProgress | Yes | Initial | See JobProgress |
| `result` | SolveResult | No | null | Populated on COMPLETED/PARTIAL |
| `error` | ErrorInfo | No | null | Populated on FAILED |
| `createdAt` | Timestamp | Yes | Now | ISO 8601 |
| `startedAt` | Timestamp | No | null | Set when status → RUNNING |
| `completedAt` | Timestamp | No | null | Set when status → terminal state |
| `submittedBy` | String | No | "system" | User identifier (future auth) |
| `executionLocation` | ExecutionLocation | Yes | LOCAL | Enum: LOCAL, REMOTE |

#### Validation Rules

- **VR-009**: `startedAt` must be >= `createdAt`
- **VR-010**: `completedAt` must be >= `startedAt`
- **VR-011**: `result` must be non-null when status is COMPLETED or PARTIAL
- **VR-012**: `error` must be non-null when status is FAILED

#### State Transitions

```text
PENDING → RUNNING → {COMPLETED, PARTIAL, FAILED, CANCELLED}
        ↘ CANCELLED
```

Valid transitions:
- PENDING → RUNNING (job picked up by worker)
- PENDING → CANCELLED (user cancellation before start)
- RUNNING → COMPLETED (converged to target exploitability)
- RUNNING → PARTIAL (reached max iterations without convergence)
- RUNNING → FAILED (error during computation)
- RUNNING → CANCELLED (user cancellation during execution)

Invalid: Cannot transition FROM terminal states (COMPLETED, PARTIAL, FAILED, CANCELLED)

---

### 6. JobProgress

Nested entity tracking solve progress in real-time.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `iterationsCompleted` | Long | Yes | 0 | >= 0 |
| `currentExploitability` | Percentage | No | null | Range: 0%-100% |
| `estimatedIterationsRemaining` | Long | No | null | >= 0 |
| `estimatedTimeRemainingSeconds` | Long | No | null | >= 0 |
| `lastUpdatedAt` | Timestamp | Yes | Now | ISO 8601 |

#### Semantics

- **currentExploitability**: Latest exploitability measurement (updated every `evaluationFrequency` iterations)
- **estimatedIterationsRemaining**: Extrapolated from convergence rate (null if insufficient data)
- **estimatedTimeRemainingSeconds**: Based on recent iteration speed

---

### 7. SolveResult

Nested entity containing solve outcome.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `strategyProfileId` | UUID | Yes | - | Foreign key to StrategyProfile |
| `finalExploitability` | Percentage | Yes | - | Range: 0%-100% |
| `iterationsRun` | Long | Yes | - | > 0 |
| `converged` | Boolean | Yes | - | true if finalExploitability <= targetExploitability |
| `completionType` | CompletionType | Yes | - | Enum: CONVERGED, ITERATION_LIMIT, TIMEOUT |
| `executionTimeSeconds` | Long | Yes | - | > 0 |
| `storagePathPb` | FilePath | Yes | - | Valid path to .pb.gz file |

#### Validation Rules

- **VR-013**: `converged = true` implies `completionType = CONVERGED`
- **VR-014**: `converged = false` implies `completionType ∈ {ITERATION_LIMIT, TIMEOUT}`

---

### 8. ErrorInfo

Nested entity for failure diagnostics.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `errorCode` | String | Yes | - | Max 50 chars, uppercase snake_case |
| `message` | String | Yes | - | Max 500 chars |
| `stackTrace` | String | No | null | Max 10,000 chars |
| `isRetriable` | Boolean | Yes | false | - |

#### Standard Error Codes

- `OUT_OF_MEMORY`: JVM heap exhausted
- `INVALID_CONFIGURATION`: Configuration validation failed
- `COMPUTATION_ERROR`: Error during CFR+ iteration
- `STORAGE_ERROR`: Failed to persist results
- `REMOTE_CONNECTION_ERROR`: Lost connection to remote executor
- `CANCELLED_BY_USER`: User-initiated cancellation

---

### 9. GameTree

Represents the complete extensive-form game structure for a solve.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `treeId` | UUID | Yes | Generated | Valid UUID v4 |
| `rootNode` | GameTreeNode | Yes | - | Must be initial game state |
| `nodeCount` | Long | Yes | - | > 0 |
| `maxDepth` | Int | Yes | - | > 0 (typically 4 streets: preflop, flop, turn, river) |
| `abstractionApplied` | HandAbstraction | Yes | - | Copy from SolveConfiguration |

#### Relationships

- One GameTree per SolveJob
- One GameTree contains many GameTreeNodes (tree structure)

#### Semantics

- Built during solve initialization from SolveConfiguration
- Immutable once constructed
- May be disk-backed for memory efficiency

---

### 10. GameTreeNode

Represents a single decision point in the game tree.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `nodeId` | UUID | Yes | Generated | Valid UUID v4 |
| `nodeType` | NodeType | Yes | - | Enum: DECISION, CHANCE, TERMINAL |
| `actingPlayer` | Position | No | null | Required if DECISION node |
| `gameState` | GameState | Yes | - | See GameState |
| `legalActions` | List<Action> | Yes | - | Non-empty for DECISION/CHANCE nodes |
| `children` | Map<Action, GameTreeNode> | Yes | - | One child per legal action |
| `regrets` | Map<Action, Double> | No | null | Only for DECISION nodes during solving |
| `strategy` | Map<Action, Probability> | No | null | Action probabilities; populated during/after solve |

#### Validation Rules

- **VR-015**: DECISION nodes must have `actingPlayer` and non-empty `legalActions`
- **VR-016**: CHANCE nodes represent random events (e.g., dealing cards)
- **VR-017**: TERMINAL nodes have empty `children` and represent game end (showdown or fold)
- **VR-018**: `strategy` probabilities must sum to 1.0 (within epsilon 0.0001)

#### Relationships

- Parent-child relationships form tree structure
- Associated with HandBuckets via gameState.handRanges

---

### 11. GameState

Nested entity describing poker-specific game state at a node.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `street` | Street | Yes | - | Enum: PREFLOP, FLOP, TURN, RIVER |
| `board` | List<Card> | Yes | - | Empty for PREFLOP, 3 for FLOP, 4 for TURN, 5 for RIVER |
| `pot` | BigBlind | Yes | - | > 0 |
| `playerStates` | Map<Position, PlayerState> | Yes | - | One per active player |
| `actionHistory` | List<HistoricalAction> | Yes | - | Ordered sequence of actions to reach this node |

#### Validation Rules

- **VR-019**: `board` size must match `street` (0/3/4/5)
- **VR-020**: All cards in `board` must be unique
- **VR-021**: `pot` equals sum of all bets in `actionHistory` plus blinds

---

### 12. PlayerState

Nested entity describing a single player's state.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `position` | Position | Yes | - | Enum: BTN, SB, BB, UTG, MP, CO (depends on numPlayers) |
| `stackBb` | BigBlind | Yes | - | >= 0 (can be 0 if all-in) |
| `investedThisRound` | BigBlind | Yes | 0 | >= 0 |
| `handRange` | HandBucket | No | null | Reference to abstraction bucket |
| `isFolded` | Boolean | Yes | false | - |
| `isAllIn` | Boolean | Yes | false | - |

#### Validation Rules

- **VR-022**: If `isAllIn = true`, then `stackBb = 0`
- **VR-023**: If `isFolded = true`, player not in `GameTreeNode.legalActions` decisions

---

### 13. HistoricalAction

Nested entity recording a past action.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `actor` | Position | Yes | - | - |
| `action` | Action | Yes | - | See Action |
| `amountBb` | BigBlind | No | null | Required for BET, RAISE actions |

---

### 14. Action

Sealed type representing legal poker actions.

```kotlin
sealed class Action {
    object Fold : Action()
    object Check : Action()
    object Call : Action()
    data class Bet(val sizeBb: BigBlind) : Action()
    data class Raise(val totalSizeBb: BigBlind) : Action() // Total bet, not increment
    object AllIn : Action()
}
```

#### Validation Rules

- **VR-024**: `Bet` and `Raise` amounts must be positive
- **VR-025**: `Raise` total must be > current highest bet
- **VR-026**: `Check` only valid when no bet to face
- **VR-027**: `Call` only valid when bet exists to face

---

### 15. HandBucket

Represents a cluster of strategically equivalent hands.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `bucketId` | Int | Yes | - | Unique within abstraction granularity |
| `street` | Street | Yes | - | Abstraction varies by street |
| `canonicalHand` | Hand | Yes | - | Representative hand for bucket |
| `memberHands` | List<Hand> | Yes | - | All hands in this bucket |
| `equityDistribution` | EquityHistogram | No | null | Used for bucketing algorithm |

#### Relationships

- Many hands map to one bucket (many-to-one)
- One bucket can appear in many GameTreeNodes (reusable abstraction)

#### Validation Rules

- **VR-028**: All hands in `memberHands` must be valid poker hands
- **VR-029**: Preflop buckets: typically 169 canonical hand types
- **VR-030**: Postflop buckets: typically 50-500 depending on abstraction granularity

---

### 16. StrategyProfile

Represents the complete solved strategy for all players.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `strategyId` | UUID | Yes | Generated | Valid UUID v4 |
| `solveJobId` | UUID | Yes | - | Foreign key to SolveJob |
| `strategies` | Map<GameTreeNode, Map<Action, Probability>> | Yes | - | Strategy for each decision node |
| `exploitability` | Percentage | Yes | - | Range: 0%-100% |
| `createdAt` | Timestamp | Yes | Now | ISO 8601 |

#### Validation Rules

- **VR-031**: For each node, action probabilities must sum to 1.0 ± 0.0001
- **VR-032**: Only DECISION nodes should have entries in `strategies`

#### Semantics

- Represents the equilibrium (Nash or approximate Nash) strategy
- Used to query optimal play for specific game states
- Persisted to Protocol Buffers for efficient storage and retrieval

---

### 17. StrategyQuery

Request entity for querying a strategy profile.

#### Fields

| Field | Type | Required | Default | Validation |
|-------|------|----------|---------|------------|
| `strategyId` | UUID | Yes | - | Foreign key to StrategyProfile |
| `gameState` | GameState | Yes | - | Must match solve configuration parameters |
| `position` | Position | Yes | - | Player whose strategy to retrieve |

#### Response: StrategyResponse

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `recommendations` | Map<Action, Probability> | Yes | Action frequencies (e.g., Bet 50% pot: 0.65, Check: 0.35) |
| `expectedValue` | BigBlind | No | EV of strategy in big blinds |

---

## Type Definitions

### Primitive Types

```kotlin
typealias UUID = java.util.UUID
typealias Timestamp = java.time.Instant
typealias BigBlind = Double
typealias Percentage = Double // 0.0 to 100.0
typealias Probability = Double // 0.0 to 1.0
typealias FilePath = java.nio.file.Path
```

### Enums

```kotlin
enum class Position {
    BTN,  // Button
    SB,   // Small Blind
    BB,   // Big Blind
    UTG,  // Under the Gun
    MP,   // Middle Position
    CO    // Cutoff
}

enum class Street {
    PREFLOP,
    FLOP,
    TURN,
    RIVER
}

enum class NodeType {
    DECISION,  // Player acts
    CHANCE,    // Random event (deal cards)
    TERMINAL   // Game ends
}

enum class JobStatus {
    PENDING,
    RUNNING,
    COMPLETED,
    PARTIAL,
    FAILED,
    CANCELLED
}

enum class CompletionType {
    CONVERGED,
    ITERATION_LIMIT,
    TIMEOUT
}

enum class ExecutionLocation {
    LOCAL,
    REMOTE
}

enum class BucketingMethod {
    EQUITY_HISTOGRAM,
    POTENTIAL_AWARE
}
```

---

## Data Relationships Summary

```text
SolveConfiguration (1) ----< (N) SolveJob
SolveJob (1) ----< (1) GameTree
GameTree (1) ----< (N) GameTreeNode
GameTreeNode (N) ----< (N) HandBucket
SolveJob (1) ----< (1) StrategyProfile (on completion)
StrategyProfile (1) ----< (N) GameTreeNode strategies
```

---

## Persistence Strategy

### Protocol Buffers Schemas

All entities will have corresponding `.proto` schema definitions for serialization:

- `solve_configuration.proto`: SolveConfiguration, ConvergenceCriteria, BetSizingScheme, HandAbstraction
- `solve_job.proto`: SolveJob, JobProgress, SolveResult, ErrorInfo
- `game_tree.proto`: GameTree, GameTreeNode, GameState, PlayerState, Action
- `strategy.proto`: StrategyProfile, StrategyQuery, StrategyResponse
- `hand_abstraction.proto`: HandBucket, EquityHistogram

### File Storage Layout

```text
data/
├── configurations/
│   └── <configId>.pb.gz
├── jobs/
│   └── <jobId>.pb.gz
├── trees/
│   └── <treeId>.pb.gz (disk-backed if large)
└── strategies/
    └── <strategyId>.pb.gz
```

### In-Memory vs. Disk Storage

- **In-Memory**: Active SolveJob, hot GameTreeNodes during solving
- **Disk-Backed**: Completed StrategyProfiles, large GameTrees exceeding memory limits
- **Compression**: All persisted data uses gzip compression (.pb.gz)

---

## Indexing & Query Patterns

### Common Queries

1. **List all solve jobs for a configuration**
   - Index: `SolveJob.configurationId`
   - Pattern: Scan job files, filter by configurationId

2. **Retrieve strategy for specific game state**
   - Index: `StrategyProfile.strategyId` → in-memory lookup table (GameState hash → strategy)
   - Pattern: Hash game state, retrieve from strategy map

3. **Find running jobs**
   - Index: `SolveJob.status`
   - Pattern: Scan job files, filter status = RUNNING

4. **Progress monitoring**
   - Index: `SolveJob.jobId` → `JobProgress.lastUpdatedAt`
   - Pattern: Periodic polling or event stream

### Future Optimization (Phase 2)

- SQLite database for job metadata (fast queries without deserializing all Protocol Buffers)
- Keep binary .pb.gz for full data, use SQL for indexing

---

## Change Log

| Date | Version | Changes |
|------|---------|---------|
| 2025-12-13 | 1.0 | Initial data model design from feature spec |
