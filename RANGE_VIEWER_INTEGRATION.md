# Range Viewer Integration Guide

## Connecting to Your Kotlin Solver

### Option 1: Export JSON from Solver

Add a function to export strategies as JSON:

```kotlin
fun exportStrategiesToJson(
    strategyProfile: StrategyProfile,
    outputFile: String
) {
    val strategies = mutableMapOf<String, Map<String, Double>>()

    strategyProfile.getAllInfoSets().forEach { infoSet ->
        val key = infoSet.key  // e.g., "JK xxd"
        val avgStrategy = infoSet.getAverageStrategy()
        val actions = getLegalActionsForInfoSet(key)

        val strategyMap = actions.mapIndexed { i, action ->
            action.getActionId() to avgStrategy[i] * 100
        }.toMap()

        strategies[key] = strategyMap
    }

    File(outputFile).writeText(Json.encodeToString(strategies))
}
```

### Option 2: REST API Server

Create a simple Ktor server to serve strategy data:

```kotlin
fun Application.module() {
    routing {
        get("/api/strategy/{infoSet}") {
            val infoSet = call.parameters["infoSet"] ?: return@get call.respond(HttpStatusCode.BadRequest)
            val strategy = strategyProfile.getInfoSetStrategy(infoSet)

            call.respond(mapOf(
                "infoSet" to infoSet,
                "strategy" to strategy.getAverageStrategy(),
                "actions" to actions
            ))
        }

        get("/api/ranges/{position}/{situation}") {
            // Return all hands for a given position/situation
            val ranges = computeRangesFor(
                position = call.parameters["position"]!!,
                situation = call.parameters["situation"]!!
            )
            call.respond(ranges)
        }
    }
}
```

### Option 3: SQLite Export

Export to SQLite for efficient querying:

```kotlin
fun exportToSQLite(strategyProfile: StrategyProfile, dbPath: String) {
    Database.connect("jdbc:sqlite:$dbPath", "org.sqlite.JDBC")

    transaction {
        SchemaUtils.create(Strategies)

        strategyProfile.getAllInfoSets().forEach { infoSet ->
            Strategies.insert {
                it[infoSetKey] = infoSet.key
                it[foldFreq] = getActionFreq(infoSet, "f")
                it[callFreq] = getActionFreq(infoSet, "c")
                it[raiseFreq] = getActionFreq(infoSet, "r")
                // ...
            }
        }
    }
}
```

## Data Format

The viewer expects this JSON structure:

```json
{
  "situation": {
    "position": "BTN",
    "facing": "open",
    "street": "preflop",
    "history": ""
  },
  "ranges": {
    "AA": {
      "fold": 0,
      "call": 0,
      "raise": 100
    },
    "KK": {
      "fold": 0,
      "call": 5,
      "raise": 95
    },
    "72o": {
      "fold": 100,
      "call": 0,
      "raise": 0
    }
  }
}
```

## JavaScript Integration

Update the `getStrategy()` function in range-viewer.html:

```javascript
async function getStrategy(hand, situation) {
    const response = await fetch(`/api/strategy/${hand.label}?situation=${situation}`);
    const data = await response.json();
    return data.strategy;
}

// Or load from JSON file
let strategiesData = null;

async function loadStrategies() {
    const response = await fetch('strategies.json');
    strategiesData = await response.json();
}

function getStrategy(hand, situation) {
    if (!strategiesData) return { fold: 33, call: 33, raise: 34 };

    const key = `${situation}_${hand.label}`;
    return strategiesData[key] || { fold: 100, call: 0, raise: 0 };
}
```

## Advanced Features to Add

### 1. Range Visualization Modes

- **Heatmap**: Color intensity by EV
- **Frequency**: Show % of range each hand represents
- **Action-specific**: Filter to show only hands that bet >X%

### 2. Comparison Mode

Show two ranges side-by-side:
- GTO vs Exploitative
- Pre-flop vs Post-flop adjusted
- Different positions

### 3. Board Texture Filters

For post-flop:
```javascript
{
  "board": "Ks9h2d",
  "texture": "king-high",
  "ranges": {
    "KK": { "bet": 95, "check": 5 },
    "AA": { "bet": 60, "check": 40 }
  }
}
```

### 4. Export Functionality

- PNG export of range charts
- CSV export for analysis
- PioSolver format compatibility

## Styling Customization

The CSS uses CSS variables for easy theming:

```css
:root {
    --bg-primary: #1a1a2e;
    --bg-secondary: #16213e;
    --accent: #4ecca3;
    --text: #eee;

    /* Action colors */
    --color-fold: #c0392b;
    --color-call: #3498db;
    --color-raise: #27ae60;
}
```

## Performance Considerations

For large datasets (13×13 × many situations):

1. **Lazy loading**: Only load visible ranges
2. **Caching**: Cache computed strategies
3. **Web Workers**: Parse JSON in background
4. **Virtualization**: For very large lists

## Example: Leduc Integration

```kotlin
// In your test code
val solver = CFRSolver(numPlayers = 2)

// Train
allMatchups.forEach { matchup ->
    solver.train(matchup, iterations = 10000)
}

// Export for viewer
val strategies = mutableMapOf<String, Map<String, Double>>()

listOf("J ", "Q ", "K ", "J b", "Q b", "K b").forEach { infoSet ->
    val strategy = solver.getStrategyProfile().getInfoSetStrategy(infoSet, 2)
    val avg = strategy.getAverageStrategy()

    strategies[infoSet] = when {
        infoSet.endsWith("b") -> mapOf(
            "fold" to avg[0] * 100,
            "call" to avg[1] * 100,
            "raise" to avg.getOrNull(2)?.times(100) ?: 0.0
        )
        else -> mapOf(
            "check" to avg[0] * 100,
            "bet" to avg[1] * 100
        )
    }
}

File("strategies.json").writeText(Json.encodeToString(strategies))
```

Then in the HTML, replace the sample `getStrategy()` function with:

```javascript
async function loadLeducStrategies() {
    const response = await fetch('strategies.json');
    return await response.json();
}

let leducData = null;
loadLeducStrategies().then(data => {
    leducData = data;
    updateRange();
});

function getStrategy(hand, situation) {
    if (!leducData) return { check: 50, bet: 50 };

    const key = hand.label.trim();  // e.g., "J ", "Q b"
    const strategy = leducData[key];

    if (!strategy) return { check: 50, bet: 50 };
    return strategy;
}
```
