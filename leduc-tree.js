// Recursive Leduc Tree Structure
// Subgame refinement (5M baseline + 2M bc|xb)

(function() {
  window.LEDUC_TREE = {
  j: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.24, evRange: 0.24, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: -0.00, bet: 0.33}, evA: {check: -0.00, bet: 0.33} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.24, evRange: 0.24, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: -0.00, bet: 0.33}, evA: {check: -0.00, bet: 0.33} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.69, evRange: -0.69, rangeWeight: 0.17, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.76, bet: 0.16}, evA: {check: -0.76, bet: 0.16} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.69, evRange: -0.69, rangeWeight: 0.17, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.76, bet: 0.16}, evA: {check: -0.76, bet: 0.16} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.38, evRange: 0.64, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.64} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.38, evRange: 0.64, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.64} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.32, evRange: 0.55, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.32, evRange: 0.55, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.00, bet: 0.19}, evA: {check: 0.00, bet: 0.41} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.00, bet: 0.19}, evA: {check: 0.00, bet: 0.41} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.41, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.63}, evA: {check: -0.41, bet: -3.44} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.41, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.63}, evA: {check: -0.41, bet: -3.44} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.83, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88}, evA: {check: -0.83, bet: -3.93} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.83, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88}, evA: {check: -0.83, bet: -3.93} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.02, evRange: 1.02, rangeWeight: 0.47, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.02, bet: 1.26}, evA: {check: 1.02, bet: 1.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.23, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.16}, evA: {check: -0.49, bet: -3.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.23, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.16}, evA: {check: -0.49, bet: -3.65} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.50}, evA: {check: -0.90, bet: -2.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.50}, evA: {check: -0.90, bet: -2.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, rangeWeight: 0.70, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00}, evA: {check: 0.53, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.68}, evA: {fold: -1.00, call: -3.24, raise: -4.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.68}, evA: {fold: -1.00, call: -3.24, raise: -4.80} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.11}, evA: {fold: -1.00, call: -4.52, raise: -6.54} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.11}, evA: {fold: -1.00, call: -4.52, raise: -6.54} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.32, evRange: 5.05, rangeWeight: 0.47, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.32}, evA: {fold: -1.00, call: 1.51, raise: 5.05} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.23, evRange: -3.02, rangeWeight: 0.00, freq: {fold: 0.34, call: 0.66}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.44} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.23, evRange: -3.02, rangeWeight: 0.00, freq: {fold: 0.34, call: 0.66}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.44} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.06} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.06} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.70, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 4.76} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.72, evRange: -1.02, rangeWeight: 0.00, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.39}, evA: {fold: -1.00, call: -2.47, raise: -2.60} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.72, evRange: -1.02, rangeWeight: 0.00, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.39}, evA: {fold: -1.00, call: -2.47, raise: -2.60} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.89}, evA: {fold: -1.00, call: -4.48, raise: -3.02} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.89}, evA: {fold: -1.00, call: -4.48, raise: -3.02} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.70, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.17}, evA: {fold: -1.00, call: 2.64, raise: 5.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.37, evRange: -4.88, rangeWeight: 0.13, freq: {fold: 0.91, call: 0.09}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.84} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.37, evRange: -4.88, rangeWeight: 0.13, freq: {fold: 0.91, call: 0.09}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.84} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.14} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.14} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.47, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 2.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.15, evRange: 0.68, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.50}, evA: {check: 0.68, bet: 0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.15, evRange: 0.68, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.50}, evA: {check: 0.68, bet: 0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.21, evRange: 1.29, rangeWeight: 0.10, freq: {check: 0.47, bet: 0.53}, ev: {check: 1.20, bet: 3.11}, evA: {check: 1.30, bet: 1.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.33, evRange: -0.24, rangeWeight: 0.35, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.51}, evA: {check: -0.24, bet: -0.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.33, evRange: -0.24, rangeWeight: 0.35, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.51}, evA: {check: -0.24, bet: -0.25} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 0.66, rangeWeight: 0.00, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: -0.70}, evA: {check: 0.49, bet: 0.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 0.66, rangeWeight: 0.00, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: -0.70}, evA: {check: 0.49, bet: 0.22} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.82, evRange: 1.35, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.82}, evA: {check: 0.90, bet: 1.35} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.47, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.73}, evA: {check: -0.53, bet: -0.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.47, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.73}, evA: {check: -0.53, bet: -0.69} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.08, evRange: 1.06, rangeWeight: 0.09, freq: {fold: 0.59, call: 0.41, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.38}, evA: {fold: -1.00, call: 3.24, raise: 3.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.08, evRange: 1.06, rangeWeight: 0.09, freq: {fold: 0.59, call: 0.41, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.38}, evA: {fold: -1.00, call: 3.24, raise: 3.66} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.19, evRange: 5.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.19}, evA: {fold: -1.00, call: 4.52, raise: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.83}, evA: {fold: -1.00, call: -1.51, raise: 2.55} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.83}, evA: {fold: -1.00, call: -1.51, raise: 2.55} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.31, evRange: -3.95, rangeWeight: 0.00, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.44} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.31, evRange: -3.95, rangeWeight: 0.00, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.44} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.76} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.22, evRange: 3.27, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.43}, evA: {fold: -1.00, call: 2.47, raise: 2.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.22, evRange: 3.27, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.43}, evA: {fold: -1.00, call: 2.47, raise: 2.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.71, evRange: 5.72, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.71}, evA: {fold: -1.00, call: 4.48, raise: 5.72} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.12, evRange: -0.99, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.50}, evA: {fold: -1.00, call: -2.64, raise: -0.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.12, evRange: -0.99, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.50}, evA: {fold: -1.00, call: -2.64, raise: -0.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 5.50, rangeWeight: 0.09, freq: {fold: 0.14, call: 0.86}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.84} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 5.50, rangeWeight: 0.09, freq: {fold: 0.14, call: 0.86}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.84} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.44, evRange: 1.51, rangeWeight: 0.09, freq: {check: 0.00, bet: 1.00}, ev: {check: 2.33, bet: 2.44}, evA: {check: 1.48, bet: 1.51} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.26, evRange: 0.92, rangeWeight: 0.10, freq: {check: 0.44, bet: 0.56}, ev: {check: -0.74, bet: -1.67}, evA: {check: 0.92, bet: 0.93} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.26, evRange: 0.92, rangeWeight: 0.10, freq: {check: 0.44, bet: 0.56}, ev: {check: -0.74, bet: -1.67}, evA: {check: 0.92, bet: 0.93} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.30, rangeWeight: 0.35, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.71}, evA: {check: -0.31, bet: -0.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.30, rangeWeight: 0.35, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.71}, evA: {check: -0.31, bet: -0.30} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.91, rangeWeight: 0.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00}, evA: {check: 0.91, bet: 1.91} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.41, evRange: 0.40, rangeWeight: 0.09, freq: {check: 0.67, bet: 0.33}, ev: {check: 0.25, bet: -1.74}, evA: {check: 0.52, bet: -0.15} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.41, evRange: 0.40, rangeWeight: 0.09, freq: {check: 0.67, bet: 0.33}, ev: {check: 0.25, bet: -1.74}, evA: {check: 0.52, bet: -0.15} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -0.47, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53}, evA: {check: -0.53, bet: -1.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -0.47, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53}, evA: {check: -0.53, bet: -1.79} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 5.81, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.06}, evA: {fold: -1.00, call: 4.99, raise: 5.81} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 4.50, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.32}, evA: {fold: -1.00, call: 4.49, raise: 4.62} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 4.50, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.32}, evA: {fold: -1.00, call: 4.49, raise: 4.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53}, evA: {fold: -1.00, call: -1.51, raise: 0.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53}, evA: {fold: -1.00, call: -1.51, raise: 0.69} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.24, evRange: 6.08, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.67} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.24, evRange: 6.08, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.06, evRange: -4.97, rangeWeight: 0.41, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.06, evRange: -4.97, rangeWeight: 0.41, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.76} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.12, evRange: 6.11, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.13}, evA: {fold: -1.00, call: 4.53, raise: 6.11} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.60, evRange: 2.13, rangeWeight: 0.09, freq: {fold: 0.29, call: 0.71, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.38}, evA: {fold: -1.00, call: 2.60, raise: 3.17} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.60, evRange: 2.13, rangeWeight: 0.09, freq: {fold: 0.29, call: 0.71, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.38}, evA: {fold: -1.00, call: 2.60, raise: 3.17} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.56}, evA: {fold: -1.00, call: -2.64, raise: -1.62} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.56}, evA: {fold: -1.00, call: -2.64, raise: -1.62} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: 8.08, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 8.08} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: 8.08, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 8.08} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.11, evRange: -4.85, rangeWeight: 0.35, freq: {fold: 0.93, call: 0.07}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.11, evRange: -4.85, rangeWeight: 0.35, freq: {fold: 0.93, call: 0.07}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.33, raise: 0.67}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.33, raise: 0.67}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.85, raise: 0.15}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.85, raise: 0.15}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.94, evRange: -0.94, rangeWeight: 0.32, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.94, evRange: -0.94, rangeWeight: 0.32, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.86, evRange: 1.71, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.87, bet: -0.10}, evA: {check: 1.71, bet: 1.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.86, evRange: 1.71, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.87, bet: -0.10}, evA: {check: 1.71, bet: 1.22} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.56, evRange: -2.36, rangeWeight: 0.35, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.55, bet: -3.22}, evA: {check: -2.35, bet: -2.67} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.56, evRange: -2.36, rangeWeight: 0.35, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.55, bet: -3.22}, evA: {check: -2.35, bet: -2.67} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.35, evRange: 4.44, rangeWeight: 0.05, freq: {check: 0.15, bet: 0.85}, ev: {check: 3.45, bet: 4.51}, evA: {check: 3.43, bet: 4.62} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: 2.32, rangeWeight: 0.25, freq: {check: 0.86, bet: 0.14}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.92, bet: 2.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: 2.32, rangeWeight: 0.25, freq: {check: 0.86, bet: 0.14}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.92, bet: 2.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.81, evRange: -1.76, rangeWeight: 0.21, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -3.29}, evA: {check: -1.50, bet: -2.08} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.81, evRange: -1.76, rangeWeight: 0.21, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -3.29}, evA: {check: -1.50, bet: -2.08} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 4.00, rangeWeight: 0.08, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.84, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.11, rangeWeight: 0.12, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 2.33, raise: 6.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.11, rangeWeight: 0.12, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 2.33, raise: 6.07} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.87, rangeWeight: 0.35, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.27, raise: -0.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.87, rangeWeight: 0.35, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.27, raise: -0.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.05, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.47, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: 0.57, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 7.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: 0.57, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 7.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -6.03, rangeWeight: 0.21, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -6.03, rangeWeight: 0.21, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.08, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.53, evRange: 3.07, rangeWeight: 0.25, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.47}, evA: {fold: -3.00, call: 4.48, raise: 5.90} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.53, evRange: 3.07, rangeWeight: 0.25, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.47}, evA: {fold: -3.00, call: 4.48, raise: 5.90} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.98, evRange: -2.97, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.33}, evA: {fold: -3.00, call: -3.50, raise: 5.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.98, evRange: -2.97, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.33}, evA: {fold: -3.00, call: -3.50, raise: 5.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.04, evRange: 7.02, rangeWeight: 0.08, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04}, evA: {fold: -3.00, call: 6.63, raise: 7.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.82, evRange: -6.77, rangeWeight: 0.12, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.82, evRange: -6.77, rangeWeight: 0.12, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.66} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.05, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.38, evRange: -1.26, rangeWeight: 0.17, freq: {check: 0.08, bet: 0.92}, ev: {check: 0.78, bet: -0.48}, evA: {check: -0.50, bet: -1.32} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.38, evRange: -1.26, rangeWeight: 0.17, freq: {check: 0.08, bet: 0.92}, ev: {check: 0.78, bet: -0.48}, evA: {check: -0.50, bet: -1.32} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.37, evRange: 4.55, rangeWeight: 0.50, freq: {check: 0.01, bet: 0.99}, ev: {check: 3.49, bet: 4.38}, evA: {check: 3.48, bet: 4.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.94, evRange: -2.51, rangeWeight: 0.08, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.66, bet: -1.93}, evA: {check: -3.20, bet: -2.50} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.94, evRange: -2.51, rangeWeight: 0.08, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.66, bet: -1.93}, evA: {check: -3.20, bet: -2.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.79, evRange: -1.49, rangeWeight: 0.29, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.92, bet: -1.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.79, evRange: -1.49, rangeWeight: 0.29, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.92, bet: -1.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 4.00, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 1.50, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.66, evRange: -3.24, rangeWeight: 0.09, freq: {check: 0.61, bet: 0.39}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -3.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.66, evRange: -3.24, rangeWeight: 0.09, freq: {check: 0.61, bet: 0.39}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -3.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: -0.25, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.33, raise: 2.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: -0.25, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.33, raise: 2.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.50, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.27, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -3.60, rangeWeight: 0.08, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.47, raise: -1.47} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -3.60, rangeWeight: 0.08, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.47, raise: -1.47} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -5.82, rangeWeight: 0.29, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -5.82, rangeWeight: 0.29, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 5.51} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -8.55, rangeWeight: 0.09, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -8.55, rangeWeight: 0.09, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -2.99, rangeWeight: 0.29, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.48, raise: -3.90} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -2.99, rangeWeight: 0.29, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.48, raise: -3.90} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 7.01, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00}, evA: {fold: -3.00, call: 3.50, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.28, evRange: -2.97, rangeWeight: 0.09, freq: {fold: 0.87, call: 0.00, raise: 0.13}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.63, raise: -2.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.28, evRange: -2.97, rangeWeight: 0.09, freq: {fold: 0.87, call: 0.00, raise: 0.13}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.63, raise: -2.74} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.98, evRange: -6.99, rangeWeight: 0.17, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.98, evRange: -6.99, rangeWeight: 0.17, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.66} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.50, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.58, evRange: 3.55, rangeWeight: 0.13, freq: {check: 0.91, bet: 0.09}, ev: {check: 3.54, bet: 3.97}, evA: {check: 3.46, bet: 4.38} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.87, evRange: -0.70, rangeWeight: 0.38, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.87, bet: 0.09}, evA: {check: -0.70, bet: -1.59} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.87, evRange: -0.70, rangeWeight: 0.38, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.87, bet: 0.09}, evA: {check: -0.70, bet: -1.59} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.59, evRange: -3.17, rangeWeight: 0.06, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.62, bet: -1.81}, evA: {check: -3.18, bet: -2.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.59, evRange: -3.17, rangeWeight: 0.06, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.62, bet: -1.81}, evA: {check: -3.18, bet: -2.92} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 4.00, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.60, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.78, evRange: -0.14, rangeWeight: 0.26, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.87}, evA: {check: -0.60, bet: -0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.78, evRange: -0.14, rangeWeight: 0.26, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.87}, evA: {check: -0.60, bet: -0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.81, evRange: -3.50, rangeWeight: 0.09, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -4.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.81, evRange: -3.50, rangeWeight: 0.09, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -4.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.13, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.89, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: -0.50, rangeWeight: 0.38, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.82, raise: 2.62} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: -0.50, rangeWeight: 0.38, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.82, raise: 2.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -3.58, rangeWeight: 0.06, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.47, raise: -1.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -3.58, rangeWeight: 0.06, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.47, raise: -1.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.30, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 9.55} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -3.66, rangeWeight: 0.26, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.19} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -3.66, rangeWeight: 0.26, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -8.67, rangeWeight: 0.09, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -8.67, rangeWeight: 0.09, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 6.08, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.83, evRange: -1.71, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -1.39, raise: 3.18} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.83, evRange: -1.71, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -1.39, raise: 3.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -2.92, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.63, raise: 4.44} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -2.92, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.63, raise: 4.44} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.68} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.97, evRange: -6.99, rangeWeight: 0.38, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.44} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.97, evRange: -6.99, rangeWeight: 0.38, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.44} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 1.93, rangeWeight: 0.39, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.25, bet: -0.04}, evA: {check: 1.93, bet: 1.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 1.93, rangeWeight: 0.39, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.25, bet: -0.04}, evA: {check: 1.93, bet: 1.93} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.65, rangeWeight: 0.09, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.41}, evA: {check: -3.65, bet: -3.81} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.65, rangeWeight: 0.09, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.41}, evA: {check: -3.65, bet: -3.81} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.81, evRange: 6.94, rangeWeight: 0.04, freq: {check: 0.02, bet: 0.98}, ev: {check: 6.81, bet: 6.81}, evA: {check: 6.96, bet: 6.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.35, evRange: 0.98, rangeWeight: 0.25, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.62}, evA: {check: 0.83, bet: 0.73} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.35, evRange: 0.98, rangeWeight: 0.25, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.62}, evA: {check: 0.83, bet: 0.73} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.49, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.49}, evA: {check: -4.50, bet: -7.52} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.49, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.49}, evA: {check: -4.50, bet: -7.52} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 8.21, rangeWeight: 0.08, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 4.80, bet: 8.21} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.23, evRange: 4.17, rangeWeight: 0.39, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.55}, evA: {fold: -5.00, call: 3.00, raise: 4.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.23, evRange: 4.17, rangeWeight: 0.39, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.55}, evA: {fold: -5.00, call: 3.00, raise: 4.19} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.14}, evA: {fold: -5.00, call: -6.78, raise: -5.32} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.14}, evA: {fold: -5.00, call: -6.78, raise: -5.32} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.77, evRange: 10.90, rangeWeight: 0.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.77}, evA: {fold: -5.00, call: 8.32, raise: 10.90} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.71, evRange: 1.61, rangeWeight: 0.25, freq: {fold: 0.13, call: 0.87}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.71, evRange: 1.61, rangeWeight: 0.25, freq: {fold: 0.13, call: 0.87}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.16} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.02, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.02, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.49} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.03, evRange: 1.03, rangeWeight: 0.25, freq: {fold: 0.17, call: 0.80, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.63}, evA: {fold: -5.00, call: 1.49, raise: 5.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.03, evRange: 1.03, rangeWeight: 0.25, freq: {fold: 0.17, call: 0.80, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.63}, evA: {fold: -5.00, call: 1.49, raise: 5.35} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.90, evRange: -4.86, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.90}, evA: {fold: -5.00, call: -8.11, raise: 0.57} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.90, evRange: -4.86, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.90}, evA: {fold: -5.00, call: -8.11, raise: 0.57} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.82, evRange: 10.29, rangeWeight: 0.08, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.82}, evA: {fold: -5.00, call: 8.64, raise: 10.29} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.13, evRange: -3.01, rangeWeight: 0.39, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.13, evRange: -3.01, rangeWeight: 0.39, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.01, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.79} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.01, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.79} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: -1.84, rangeWeight: 0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.32, bet: -0.12}, evA: {check: -1.84, bet: -2.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: -1.84, rangeWeight: 0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.32, bet: -0.12}, evA: {check: -1.84, bet: -2.06} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.75, evRange: 7.53, rangeWeight: 0.10, freq: {check: 0.98, bet: 0.02}, ev: {check: 6.73, bet: 7.30}, evA: {check: 7.53, bet: 7.47} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.86, evRange: -4.56, rangeWeight: 0.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.88}, evA: {check: -4.55, bet: -4.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.86, evRange: -4.56, rangeWeight: 0.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.88}, evA: {check: -4.55, bet: -4.83} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.37, evRange: -0.14, rangeWeight: 0.29, freq: {check: 0.42, bet: 0.58}, ev: {check: 1.25, bet: -0.27}, evA: {check: -0.83, bet: -0.15} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.37, evRange: -0.14, rangeWeight: 0.29, freq: {check: 0.42, bet: 0.58}, ev: {check: 1.25, bet: -0.27}, evA: {check: -0.83, bet: -0.15} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.13, evRange: 7.66, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.13}, evA: {check: 4.50, bet: 7.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.78, rangeWeight: 0.09, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -3.96}, evA: {check: -4.80, bet: -4.77} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.78, rangeWeight: 0.09, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -3.96}, evA: {check: -4.80, bet: -4.77} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -2.18, rangeWeight: 0.41, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.64}, evA: {fold: -5.00, call: -3.00, raise: -0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -2.18, rangeWeight: 0.41, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.64}, evA: {fold: -5.00, call: -3.00, raise: -0.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.77, evRange: 10.18, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.77}, evA: {fold: -5.00, call: 6.78, raise: 10.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.21, evRange: -4.50, rangeWeight: 0.04, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: -0.71}, evA: {fold: -5.00, call: -8.32, raise: -2.28} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.21, evRange: -4.50, rangeWeight: 0.04, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: -0.71}, evA: {fold: -5.00, call: -8.32, raise: -2.28} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.32, evRange: -5.69, rangeWeight: 0.29, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.32, evRange: -5.69, rangeWeight: 0.29, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 11.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.35, evRange: -1.92, rangeWeight: 0.29, freq: {fold: 0.36, call: 0.63, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.33}, evA: {fold: -5.00, call: -1.49, raise: 1.97} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.35, evRange: -1.92, rangeWeight: 0.29, freq: {fold: 0.36, call: 0.63, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.33}, evA: {fold: -5.00, call: -1.49, raise: 1.97} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.12, evRange: 10.97, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.12}, evA: {fold: -5.00, call: 8.11, raise: 10.97} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.37, evRange: -4.60, rangeWeight: 0.09, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.48}, evA: {fold: -5.00, call: -8.64, raise: -3.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.37, evRange: -4.60, rangeWeight: 0.09, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.48}, evA: {fold: -5.00, call: -8.64, raise: -3.41} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.39, evRange: -4.86, rangeWeight: 0.41, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.39, evRange: -4.86, rangeWeight: 0.41, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.33} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.79} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.02, evRange: -9.06, rangeWeight: 0.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.02, evRange: -9.06, rangeWeight: 0.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.33, evRange: 6.25, rangeWeight: 0.59, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.96, bet: 6.33}, evA: {check: 5.54, bet: 6.25} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.16, evRange: -1.85, rangeWeight: 0.14, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.56, bet: -0.16}, evA: {check: -2.02, bet: -1.85} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.16, evRange: -1.85, rangeWeight: 0.14, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.56, bet: -0.16}, evA: {check: -2.02, bet: -1.85} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.18, evRange: -2.21, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -4.36, bet: -1.17}, evA: {check: -4.90, bet: -2.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.18, evRange: -2.21, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -4.36, bet: -1.17}, evA: {check: -4.90, bet: -2.21} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.88, evRange: 7.35, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.88}, evA: {check: 2.04, bet: 7.35} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.23, evRange: -2.80, rangeWeight: 0.26, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.05}, evA: {check: -3.67, bet: -5.69} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.23, evRange: -2.80, rangeWeight: 0.26, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.05}, evA: {check: -3.67, bet: -5.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.85, evRange: -5.77, rangeWeight: 0.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -3.96}, evA: {check: -4.80, bet: -7.05} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.85, evRange: -5.77, rangeWeight: 0.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -3.96}, evA: {check: -4.80, bet: -7.05} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.16, evRange: 9.24, rangeWeight: 0.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.17}, evA: {fold: -5.00, call: 6.28, raise: 9.25} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.37, evRange: -2.36, rangeWeight: 0.14, freq: {fold: 0.26, call: 0.71, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 3.31}, evA: {fold: -5.00, call: -3.63, raise: -0.22} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.37, evRange: -2.36, rangeWeight: 0.14, freq: {fold: 0.26, call: 0.71, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 3.31}, evA: {fold: -5.00, call: -3.63, raise: -0.22} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.37, evRange: -4.55, rangeWeight: 0.06, freq: {fold: 0.90, call: 0.01, raise: 0.08}, ev: {fold: -5.00, call: -6.75, raise: 2.58}, evA: {fold: -5.00, call: -8.32, raise: 0.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.37, evRange: -4.55, rangeWeight: 0.06, freq: {fold: 0.90, call: 0.01, raise: 0.08}, ev: {fold: -5.00, call: -6.75, raise: 2.58}, evA: {fold: -5.00, call: -8.32, raise: 0.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.30, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 5.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -7.97, evRange: -8.84, rangeWeight: 0.26, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.54} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -7.97, evRange: -8.84, rangeWeight: 0.26, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.54} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.01, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01}, evA: {fold: -5.00, call: 3.67, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.91, evRange: -4.99, rangeWeight: 0.26, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -6.61, raise: -6.21} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.91, evRange: -4.99, rangeWeight: 0.26, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -6.61, raise: -6.21} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.43, evRange: -4.98, rangeWeight: 0.09, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: 3.45}, evA: {fold: -5.00, call: -8.64, raise: -4.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.43, evRange: -4.98, rangeWeight: 0.09, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: 3.45}, evA: {fold: -5.00, call: -8.64, raise: -4.89} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.07} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.95, evRange: -8.97, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.95, evRange: -8.97, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.42, raise: 0.58}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.42, raise: 0.58}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.63, raise: 0.37}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.63, raise: 0.37}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.82, evRange: -0.82, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.82, evRange: -0.82, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: 1.61, rangeWeight: 0.25, freq: {check: 0.94, bet: 0.06}, ev: {check: -0.24, bet: -0.39}, evA: {check: 1.61, bet: 1.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: 1.61, rangeWeight: 0.25, freq: {check: 0.94, bet: 0.06}, ev: {check: -0.24, bet: -0.39}, evA: {check: 1.61, bet: 1.62} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.50, evRange: -1.91, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.49, bet: -3.36}, evA: {check: -1.91, bet: -1.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.50, evRange: -1.91, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.49, bet: -3.36}, evA: {check: -1.91, bet: -1.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.61, evRange: 4.32, rangeWeight: 0.02, freq: {check: 0.02, bet: 0.98}, ev: {check: 4.40, bet: 4.62}, evA: {check: 4.12, bet: 4.32} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.08, evRange: 1.76, rangeWeight: 0.19, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -0.81}, evA: {check: 1.66, bet: 1.68} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.08, evRange: 1.76, rangeWeight: 0.19, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -0.81}, evA: {check: 1.66, bet: 1.68} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.26, evRange: -2.06, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.08, bet: -4.18} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.26, evRange: -2.06, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.08, bet: -4.18} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.44, evRange: 5.46, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.44}, evA: {check: 2.93, bet: 5.46} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: 4.39, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: 3.65, raise: 4.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: 4.39, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: 3.65, raise: 4.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.01, evRange: -2.70, rangeWeight: 0.24, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.04}, evA: {fold: -3.00, call: -4.43, raise: -0.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.01, evRange: -2.70, rangeWeight: 0.24, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.04}, evA: {fold: -3.00, call: -4.43, raise: -0.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.24, evRange: 8.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.24}, evA: {fold: -3.00, call: 6.60, raise: 8.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.01, evRange: 1.39, rangeWeight: 0.19, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.10} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.01, evRange: 1.39, rangeWeight: 0.19, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.10} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.00, rangeWeight: 0.28, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.64} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.00, rangeWeight: 0.28, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.64} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.62, evRange: 2.52, rangeWeight: 0.19, freq: {fold: 0.24, call: 0.75, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.05}, evA: {fold: -3.00, call: 3.88, raise: 5.83} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.62, evRange: 2.52, rangeWeight: 0.19, freq: {fold: 0.24, call: 0.75, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.05}, evA: {fold: -3.00, call: 3.88, raise: 5.83} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.94, evRange: -2.88, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 0.18}, evA: {fold: -3.00, call: -4.86, raise: 3.39} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.94, evRange: -2.88, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 0.18}, evA: {fold: -3.00, call: -4.86, raise: 3.39} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.52, evRange: 7.53, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.52}, evA: {fold: -3.00, call: 6.83, raise: 7.53} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.49, evRange: -3.42, rangeWeight: 0.25, freq: {fold: 0.74, call: 0.26}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.49, evRange: -3.42, rangeWeight: 0.25, freq: {fold: 0.74, call: 0.26}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -6.97} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -6.97} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.71, evRange: -2.04, rangeWeight: 0.32, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.72, bet: 0.25}, evA: {check: -2.04, bet: -2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.71, evRange: -2.04, rangeWeight: 0.32, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.72, bet: 0.25}, evA: {check: -2.04, bet: -2.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.29, evRange: 3.96, rangeWeight: 0.31, freq: {check: 0.48, bet: 0.52}, ev: {check: 5.02, bet: 3.62}, evA: {check: 3.98, bet: 3.94} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.04, evRange: -2.56, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.94, bet: -1.03}, evA: {check: -3.27, bet: -2.55} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.04, evRange: -2.56, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.94, bet: -1.03}, evA: {check: -3.27, bet: -2.55} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.73, evRange: -1.10, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: -0.81}, evA: {check: -1.66, bet: -3.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.73, evRange: -1.10, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: -0.81}, evA: {check: -1.66, bet: -3.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.46, evRange: 6.73, rangeWeight: 0.37, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.46}, evA: {check: 2.08, bet: 6.73} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.75, evRange: -6.67, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.93, bet: -6.70} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.75, evRange: -6.67, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.93, bet: -6.70} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: -2.03, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: -3.65, raise: -3.09} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: -2.03, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: -3.65, raise: -3.09} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.22, evRange: 8.88, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.22}, evA: {fold: -3.00, call: 4.43, raise: 8.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.00, evRange: -3.33, rangeWeight: 0.03, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.00}, evA: {fold: -3.00, call: -6.60, raise: -5.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.00, evRange: -3.33, rangeWeight: 0.03, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.00}, evA: {fold: -3.00, call: -6.60, raise: -5.89} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.05, evRange: -5.11, rangeWeight: 0.24, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.10} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.05, evRange: -5.11, rangeWeight: 0.24, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.10} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.37, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.64} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.55, evRange: -2.84, rangeWeight: 0.24, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.88, raise: -1.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.55, evRange: -2.84, rangeWeight: 0.24, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.88, raise: -1.06} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.02, evRange: 7.03, rangeWeight: 0.37, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02}, evA: {fold: -3.00, call: 4.86, raise: 7.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.99, evRange: -2.99, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.42}, evA: {fold: -3.00, call: -6.83, raise: 1.23} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.99, evRange: -2.99, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.42}, evA: {fold: -3.00, call: -6.83, raise: 1.23} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.92, evRange: -6.97, rangeWeight: 0.32, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.92, evRange: -6.97, rangeWeight: 0.32, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.74} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 6.97} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.04, evRange: 4.63, rangeWeight: 0.32, freq: {check: 0.17, bet: 0.83}, ev: {check: 4.97, bet: 5.05}, evA: {check: 5.27, bet: 4.50} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.23, evRange: -1.37, rangeWeight: 0.31, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.51, bet: -1.06}, evA: {check: -1.37, bet: -1.36} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.23, evRange: -1.37, rangeWeight: 0.31, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.51, bet: -1.06}, evA: {check: -1.37, bet: -1.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.91, evRange: -1.68, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.67, bet: -1.91}, evA: {check: -3.07, bet: -1.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.91, evRange: -1.68, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.67, bet: -1.91}, evA: {check: -3.07, bet: -1.67} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.44, evRange: 6.71, rangeWeight: 0.22, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.44}, evA: {check: 2.04, bet: 6.71} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.17, evRange: -2.23, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -0.81}, evA: {check: -1.71, bet: -4.09} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.17, evRange: -2.23, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -0.81}, evA: {check: -1.71, bet: -4.09} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.21, evRange: -4.35, rangeWeight: 0.07, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.93, bet: -6.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.21, evRange: -4.35, rangeWeight: 0.07, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.93, bet: -6.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.24, evRange: 9.05, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.24}, evA: {fold: -3.00, call: 5.49, raise: 9.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.74, evRange: -0.89, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: -2.37, raise: -0.86} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.74, evRange: -0.89, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: -2.37, raise: -0.86} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.01, evRange: -3.21, rangeWeight: 0.03, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.04}, evA: {fold: -3.00, call: -6.60, raise: -4.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.01, evRange: -3.21, rangeWeight: 0.03, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.04}, evA: {fold: -3.00, call: -6.60, raise: -4.89} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.48} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.01, evRange: -5.21, rangeWeight: 0.33, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.27} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.01, evRange: -5.21, rangeWeight: 0.33, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.01, evRange: -7.03, rangeWeight: 0.07, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.01, evRange: -7.03, rangeWeight: 0.07, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.43, evRange: 7.77, rangeWeight: 0.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.43}, evA: {fold: -3.00, call: 4.76, raise: 7.77} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.57, evRange: -2.88, rangeWeight: 0.33, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: -3.99, raise: -1.99} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.57, evRange: -2.88, rangeWeight: 0.33, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: -3.99, raise: -1.99} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.71, evRange: -2.41, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: 0.59}, evA: {fold: -3.00, call: -6.83, raise: -1.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.71, evRange: -2.41, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: 0.59}, evA: {fold: -3.00, call: -6.83, raise: -1.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.32, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.62} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.93, evRange: -5.81, rangeWeight: 0.31, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.73} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.93, evRange: -5.81, rangeWeight: 0.31, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.73} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 2.33, rangeWeight: 0.25, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.11}, evA: {check: 2.33, bet: 2.34} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 2.33, rangeWeight: 0.25, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.11}, evA: {check: 2.33, bet: 2.34} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.84, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.14}, evA: {check: -3.84, bet: -5.19} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.84, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.14}, evA: {check: -3.84, bet: -5.19} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.94, evRange: 7.35, rangeWeight: 0.02, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.94, bet: 6.94}, evA: {check: 7.37, bet: 7.35} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.29, evRange: 2.90, rangeWeight: 0.30, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74}, evA: {check: 2.77, bet: 2.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.29, evRange: 2.90, rangeWeight: 0.30, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74}, evA: {check: 2.77, bet: 2.77} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.43, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.49}, evA: {check: -3.47, bet: -4.58} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.43, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.49}, evA: {check: -3.47, bet: -4.58} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 7.03, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 4.88, bet: 7.03} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.24, evRange: 4.46, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26}, evA: {fold: -5.00, call: 3.95, raise: 4.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.24, evRange: 4.46, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26}, evA: {fold: -5.00, call: 3.95, raise: 4.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.49}, evA: {fold: -5.00, call: -6.98, raise: -7.86} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.49}, evA: {fold: -5.00, call: -6.98, raise: -7.86} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.99, evRange: 11.44, rangeWeight: 0.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.75, raise: 11.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.23, evRange: 7.83, rangeWeight: 0.30, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.23, evRange: 7.83, rangeWeight: 0.30, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.83, evRange: 4.85, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: 4.99, raise: 7.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.83, evRange: 4.85, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: 4.99, raise: 7.11} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.96, evRange: -4.92, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -0.89}, evA: {fold: -5.00, call: -6.25, raise: 2.56} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.96, evRange: -4.92, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -0.89}, evA: {fold: -5.00, call: -6.25, raise: 2.56} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.80, evRange: 9.82, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.80}, evA: {fold: -5.00, call: 8.78, raise: 9.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.12, evRange: -2.84, rangeWeight: 0.25, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.12, evRange: -2.84, rangeWeight: 0.25, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.71} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.08} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.08} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.53, evRange: -2.62, rangeWeight: 0.32, freq: {check: 0.30, bet: 0.70}, ev: {check: 0.26, bet: -0.86}, evA: {check: -2.61, bet: -2.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.53, evRange: -2.62, rangeWeight: 0.32, freq: {check: 0.30, bet: 0.70}, ev: {check: 0.26, bet: -0.86}, evA: {check: -2.61, bet: -2.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.02, evRange: 7.89, rangeWeight: 0.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 6.58, bet: 8.03}, evA: {check: 7.87, bet: 7.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.82, evRange: -4.83, rangeWeight: 0.03, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.24}, evA: {check: -4.83, bet: -4.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.82, evRange: -4.83, rangeWeight: 0.03, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.24}, evA: {check: -4.83, bet: -4.82} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: -3.17, rangeWeight: 0.35, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28}, evA: {check: -2.77, bet: -4.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: -3.17, rangeWeight: 0.35, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28}, evA: {check: -2.77, bet: -4.50} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 8.62, rangeWeight: 0.22, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 3.47, bet: 8.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.85, rangeWeight: 0.03, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.46}, evA: {check: -4.88, bet: -8.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.85, rangeWeight: 0.03, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.46}, evA: {check: -4.88, bet: -8.49} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.18, evRange: -2.22, rangeWeight: 0.32, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.34}, evA: {fold: -5.00, call: -3.95, raise: -1.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.18, evRange: -2.22, rangeWeight: 0.32, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.34}, evA: {fold: -5.00, call: -3.95, raise: -1.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.12, evRange: 10.96, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.12}, evA: {fold: -5.00, call: 6.98, raise: 10.96} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.44}, evA: {fold: -5.00, call: -8.75, raise: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.44}, evA: {fold: -5.00, call: -8.75, raise: -4.76} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.44, evRange: -6.65, rangeWeight: 0.35, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.44, evRange: -6.65, rangeWeight: 0.35, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.02, evRange: -9.09, rangeWeight: 0.03, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.68} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.02, evRange: -9.09, rangeWeight: 0.03, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.47, evRange: -3.81, rangeWeight: 0.35, freq: {fold: 0.38, call: 0.53, raise: 0.09}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: -4.99, raise: -2.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.47, evRange: -3.81, rangeWeight: 0.35, freq: {fold: 0.38, call: 0.53, raise: 0.09}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: -4.99, raise: -2.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.79, evRange: 10.44, rangeWeight: 0.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.79}, evA: {fold: -5.00, call: 6.25, raise: 10.44} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.34, evRange: -4.44, rangeWeight: 0.03, freq: {fold: 0.60, call: 0.00, raise: 0.40}, ev: {fold: -5.00, call: -6.75, raise: -0.84}, evA: {fold: -5.00, call: -8.78, raise: -3.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.34, evRange: -4.44, rangeWeight: 0.03, freq: {fold: 0.60, call: 0.00, raise: 0.40}, ev: {fold: -5.00, call: -6.75, raise: -0.84}, evA: {fold: -5.00, call: -8.78, raise: -3.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.17, evRange: -6.70, rangeWeight: 0.32, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.17, evRange: -6.70, rangeWeight: 0.32, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.71} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.08} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.52, evRange: 7.11, rangeWeight: 0.32, freq: {check: 0.46, bet: 0.54}, ev: {check: 7.92, bet: 7.19}, evA: {check: 7.11, bet: 7.12} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.22, evRange: -4.00, rangeWeight: 0.31, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.39, bet: -1.15}, evA: {check: -4.00, bet: -4.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.22, evRange: -4.00, rangeWeight: 0.31, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.39, bet: -1.15}, evA: {check: -4.00, bet: -4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.26, evRange: -4.98, rangeWeight: 0.03, freq: {check: 0.45, bet: 0.55}, ev: {check: -1.18, bet: -3.14}, evA: {check: -4.96, bet: -4.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.26, evRange: -4.98, rangeWeight: 0.03, freq: {check: 0.45, bet: 0.55}, ev: {check: -1.18, bet: -3.14}, evA: {check: -4.96, bet: -4.99} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.26, evRange: 6.73, rangeWeight: 0.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 9.26}, evA: {check: 3.40, bet: 6.73} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.28, evRange: -2.48, rangeWeight: 0.26, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.67}, evA: {check: -2.85, bet: -3.30} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.28, evRange: -2.48, rangeWeight: 0.26, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.67}, evA: {check: -2.85, bet: -3.30} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -2.63, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.73}, evA: {check: -4.88, bet: -2.62} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -2.63, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.73}, evA: {check: -4.88, bet: -2.62} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.15, evRange: 9.24, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.15}, evA: {fold: -5.00, call: 5.34, raise: 9.24} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.91, evRange: -4.71, rangeWeight: 0.31, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.35}, evA: {fold: -5.00, call: -5.77, raise: -3.27} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.91, evRange: -4.71, rangeWeight: 0.31, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.35}, evA: {fold: -5.00, call: -5.77, raise: -3.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 2.11, evRange: -1.43, rangeWeight: 0.03, freq: {fold: 0.08, call: 0.00, raise: 0.92}, ev: {fold: -5.00, call: -6.75, raise: 2.73}, evA: {fold: -5.00, call: -8.75, raise: -1.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 2.11, evRange: -1.43, rangeWeight: 0.03, freq: {fold: 0.08, call: 0.00, raise: 0.92}, ev: {fold: -5.00, call: -6.75, raise: 2.73}, evA: {fold: -5.00, call: -8.75, raise: -1.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 8.84} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.15, evRange: -8.71, rangeWeight: 0.26, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.42} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.15, evRange: -8.71, rangeWeight: 0.26, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.42} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.68} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.01, rangeWeight: 0.41, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01}, evA: {fold: -5.00, call: 6.12, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.23, evRange: -4.13, rangeWeight: 0.26, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -5.13, raise: -1.19} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.23, evRange: -4.13, rangeWeight: 0.26, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -5.13, raise: -1.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.58, evRange: -3.09, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.47}, evA: {fold: -5.00, call: -8.78, raise: 1.70} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.58, evRange: -3.09, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.47}, evA: {fold: -5.00, call: -8.78, raise: 1.70} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.32, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 7.72} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.97, evRange: -8.99, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.97, evRange: -8.99, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
      }
    },
      }
    },
      }
    },
  q: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.24, evRange: 0.24, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: -0.00, bet: 0.33}, evA: {check: -0.00, bet: 0.33} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.24, evRange: 0.24, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: -0.00, bet: 0.33}, evA: {check: -0.00, bet: 0.33} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.69, evRange: -0.69, rangeWeight: 0.17, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.76, bet: 0.16}, evA: {check: -0.76, bet: 0.16} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.69, evRange: -0.69, rangeWeight: 0.17, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.76, bet: 0.16}, evA: {check: -0.76, bet: 0.16} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.38, evRange: 0.64, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.64} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.38, evRange: 0.64, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.64} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.32, evRange: 0.55, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.32, evRange: 0.55, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.00, bet: 0.19}, evA: {check: 0.00, bet: 0.41} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.00, bet: 0.19}, evA: {check: 0.00, bet: 0.41} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.41, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.63}, evA: {check: -0.41, bet: -3.44} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.41, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.63}, evA: {check: -0.41, bet: -3.44} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.83, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88}, evA: {check: -0.83, bet: -3.93} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.83, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88}, evA: {check: -0.83, bet: -3.93} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.02, evRange: 1.02, rangeWeight: 0.47, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.02, bet: 1.26}, evA: {check: 1.02, bet: 1.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.23, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.16}, evA: {check: -0.49, bet: -3.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.23, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.16}, evA: {check: -0.49, bet: -3.65} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.50}, evA: {check: -0.90, bet: -2.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.50}, evA: {check: -0.90, bet: -2.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, rangeWeight: 0.70, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00}, evA: {check: 0.53, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.68}, evA: {fold: -1.00, call: -3.24, raise: -4.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.68}, evA: {fold: -1.00, call: -3.24, raise: -4.80} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.11}, evA: {fold: -1.00, call: -4.52, raise: -6.54} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.11}, evA: {fold: -1.00, call: -4.52, raise: -6.54} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.32, evRange: 5.05, rangeWeight: 0.47, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.32}, evA: {fold: -1.00, call: 1.51, raise: 5.05} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.23, evRange: -3.02, rangeWeight: 0.00, freq: {fold: 0.34, call: 0.66}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.44} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.23, evRange: -3.02, rangeWeight: 0.00, freq: {fold: 0.34, call: 0.66}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.44} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.06} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.06} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.70, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 4.76} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.72, evRange: -1.02, rangeWeight: 0.00, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.39}, evA: {fold: -1.00, call: -2.47, raise: -2.60} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.72, evRange: -1.02, rangeWeight: 0.00, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.39}, evA: {fold: -1.00, call: -2.47, raise: -2.60} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.89}, evA: {fold: -1.00, call: -4.48, raise: -3.02} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.89}, evA: {fold: -1.00, call: -4.48, raise: -3.02} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.70, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.17}, evA: {fold: -1.00, call: 2.64, raise: 5.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.37, evRange: -4.88, rangeWeight: 0.13, freq: {fold: 0.91, call: 0.09}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.84} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.37, evRange: -4.88, rangeWeight: 0.13, freq: {fold: 0.91, call: 0.09}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.84} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.14} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.14} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.47, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 2.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.15, evRange: 0.68, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.50}, evA: {check: 0.68, bet: 0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.15, evRange: 0.68, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.50}, evA: {check: 0.68, bet: 0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.21, evRange: 1.29, rangeWeight: 0.10, freq: {check: 0.47, bet: 0.53}, ev: {check: 1.20, bet: 3.11}, evA: {check: 1.30, bet: 1.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.33, evRange: -0.24, rangeWeight: 0.35, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.51}, evA: {check: -0.24, bet: -0.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.33, evRange: -0.24, rangeWeight: 0.35, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.51}, evA: {check: -0.24, bet: -0.25} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 0.66, rangeWeight: 0.00, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: -0.70}, evA: {check: 0.49, bet: 0.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 0.66, rangeWeight: 0.00, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: -0.70}, evA: {check: 0.49, bet: 0.22} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.82, evRange: 1.35, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.82}, evA: {check: 0.90, bet: 1.35} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.47, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.73}, evA: {check: -0.53, bet: -0.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.47, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.73}, evA: {check: -0.53, bet: -0.69} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.08, evRange: 1.06, rangeWeight: 0.09, freq: {fold: 0.59, call: 0.41, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.38}, evA: {fold: -1.00, call: 3.24, raise: 3.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.08, evRange: 1.06, rangeWeight: 0.09, freq: {fold: 0.59, call: 0.41, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.38}, evA: {fold: -1.00, call: 3.24, raise: 3.66} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.19, evRange: 5.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.19}, evA: {fold: -1.00, call: 4.52, raise: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.83}, evA: {fold: -1.00, call: -1.51, raise: 2.55} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.83}, evA: {fold: -1.00, call: -1.51, raise: 2.55} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.31, evRange: -3.95, rangeWeight: 0.00, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.44} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.31, evRange: -3.95, rangeWeight: 0.00, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.44} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.76} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.22, evRange: 3.27, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.43}, evA: {fold: -1.00, call: 2.47, raise: 2.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.22, evRange: 3.27, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.43}, evA: {fold: -1.00, call: 2.47, raise: 2.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.71, evRange: 5.72, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.71}, evA: {fold: -1.00, call: 4.48, raise: 5.72} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.12, evRange: -0.99, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.50}, evA: {fold: -1.00, call: -2.64, raise: -0.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.12, evRange: -0.99, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.50}, evA: {fold: -1.00, call: -2.64, raise: -0.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 5.50, rangeWeight: 0.09, freq: {fold: 0.14, call: 0.86}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.84} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 5.50, rangeWeight: 0.09, freq: {fold: 0.14, call: 0.86}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.84} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.44, evRange: 1.51, rangeWeight: 0.09, freq: {check: 0.00, bet: 1.00}, ev: {check: 2.33, bet: 2.44}, evA: {check: 1.48, bet: 1.51} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.26, evRange: 0.92, rangeWeight: 0.10, freq: {check: 0.44, bet: 0.56}, ev: {check: -0.74, bet: -1.67}, evA: {check: 0.92, bet: 0.93} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.26, evRange: 0.92, rangeWeight: 0.10, freq: {check: 0.44, bet: 0.56}, ev: {check: -0.74, bet: -1.67}, evA: {check: 0.92, bet: 0.93} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.30, rangeWeight: 0.35, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.71}, evA: {check: -0.31, bet: -0.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.30, rangeWeight: 0.35, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.71}, evA: {check: -0.31, bet: -0.30} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.91, rangeWeight: 0.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00}, evA: {check: 0.91, bet: 1.91} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.41, evRange: 0.40, rangeWeight: 0.09, freq: {check: 0.67, bet: 0.33}, ev: {check: 0.25, bet: -1.74}, evA: {check: 0.52, bet: -0.15} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.41, evRange: 0.40, rangeWeight: 0.09, freq: {check: 0.67, bet: 0.33}, ev: {check: 0.25, bet: -1.74}, evA: {check: 0.52, bet: -0.15} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -0.47, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53}, evA: {check: -0.53, bet: -1.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -0.47, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53}, evA: {check: -0.53, bet: -1.79} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 5.81, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.06}, evA: {fold: -1.00, call: 4.99, raise: 5.81} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 4.50, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.32}, evA: {fold: -1.00, call: 4.49, raise: 4.62} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 4.50, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.32}, evA: {fold: -1.00, call: 4.49, raise: 4.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53}, evA: {fold: -1.00, call: -1.51, raise: 0.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53}, evA: {fold: -1.00, call: -1.51, raise: 0.69} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.24, evRange: 6.08, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.67} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.24, evRange: 6.08, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.06, evRange: -4.97, rangeWeight: 0.41, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.06, evRange: -4.97, rangeWeight: 0.41, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.76} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.12, evRange: 6.11, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.13}, evA: {fold: -1.00, call: 4.53, raise: 6.11} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.60, evRange: 2.13, rangeWeight: 0.09, freq: {fold: 0.29, call: 0.71, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.38}, evA: {fold: -1.00, call: 2.60, raise: 3.17} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.60, evRange: 2.13, rangeWeight: 0.09, freq: {fold: 0.29, call: 0.71, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.38}, evA: {fold: -1.00, call: 2.60, raise: 3.17} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.56}, evA: {fold: -1.00, call: -2.64, raise: -1.62} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.56}, evA: {fold: -1.00, call: -2.64, raise: -1.62} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: 8.08, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 8.08} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: 8.08, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 8.08} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.11, evRange: -4.85, rangeWeight: 0.35, freq: {fold: 0.93, call: 0.07}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.11, evRange: -4.85, rangeWeight: 0.35, freq: {fold: 0.93, call: 0.07}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.33, raise: 0.67}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.33, raise: 0.67}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.85, raise: 0.15}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.85, raise: 0.15}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.94, evRange: -0.94, rangeWeight: 0.32, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.94, evRange: -0.94, rangeWeight: 0.32, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.86, evRange: 1.71, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.87, bet: -0.10}, evA: {check: 1.71, bet: 1.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.86, evRange: 1.71, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.87, bet: -0.10}, evA: {check: 1.71, bet: 1.22} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.56, evRange: -2.36, rangeWeight: 0.35, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.55, bet: -3.22}, evA: {check: -2.35, bet: -2.67} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.56, evRange: -2.36, rangeWeight: 0.35, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.55, bet: -3.22}, evA: {check: -2.35, bet: -2.67} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.35, evRange: 4.44, rangeWeight: 0.05, freq: {check: 0.15, bet: 0.85}, ev: {check: 3.45, bet: 4.51}, evA: {check: 3.43, bet: 4.62} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: 2.32, rangeWeight: 0.25, freq: {check: 0.86, bet: 0.14}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.92, bet: 2.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: 2.32, rangeWeight: 0.25, freq: {check: 0.86, bet: 0.14}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.92, bet: 2.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.81, evRange: -1.76, rangeWeight: 0.21, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -3.29}, evA: {check: -1.50, bet: -2.08} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.81, evRange: -1.76, rangeWeight: 0.21, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -3.29}, evA: {check: -1.50, bet: -2.08} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 4.00, rangeWeight: 0.08, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.84, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.11, rangeWeight: 0.12, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 2.33, raise: 6.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.11, rangeWeight: 0.12, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 2.33, raise: 6.07} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.87, rangeWeight: 0.35, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.27, raise: -0.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.87, rangeWeight: 0.35, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.27, raise: -0.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.05, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.47, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: 0.57, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 7.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: 0.57, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 7.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -6.03, rangeWeight: 0.21, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -6.03, rangeWeight: 0.21, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.08, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.53, evRange: 3.07, rangeWeight: 0.25, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.47}, evA: {fold: -3.00, call: 4.48, raise: 5.90} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.53, evRange: 3.07, rangeWeight: 0.25, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.47}, evA: {fold: -3.00, call: 4.48, raise: 5.90} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.98, evRange: -2.97, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.33}, evA: {fold: -3.00, call: -3.50, raise: 5.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.98, evRange: -2.97, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.33}, evA: {fold: -3.00, call: -3.50, raise: 5.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.04, evRange: 7.02, rangeWeight: 0.08, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04}, evA: {fold: -3.00, call: 6.63, raise: 7.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.82, evRange: -6.77, rangeWeight: 0.12, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.82, evRange: -6.77, rangeWeight: 0.12, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.66} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.05, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.38, evRange: -1.26, rangeWeight: 0.17, freq: {check: 0.08, bet: 0.92}, ev: {check: 0.78, bet: -0.48}, evA: {check: -0.50, bet: -1.32} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.38, evRange: -1.26, rangeWeight: 0.17, freq: {check: 0.08, bet: 0.92}, ev: {check: 0.78, bet: -0.48}, evA: {check: -0.50, bet: -1.32} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.37, evRange: 4.55, rangeWeight: 0.50, freq: {check: 0.01, bet: 0.99}, ev: {check: 3.49, bet: 4.38}, evA: {check: 3.48, bet: 4.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.94, evRange: -2.51, rangeWeight: 0.08, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.66, bet: -1.93}, evA: {check: -3.20, bet: -2.50} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.94, evRange: -2.51, rangeWeight: 0.08, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.66, bet: -1.93}, evA: {check: -3.20, bet: -2.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.79, evRange: -1.49, rangeWeight: 0.29, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.92, bet: -1.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.79, evRange: -1.49, rangeWeight: 0.29, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.92, bet: -1.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 4.00, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 1.50, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.66, evRange: -3.24, rangeWeight: 0.09, freq: {check: 0.61, bet: 0.39}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -3.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.66, evRange: -3.24, rangeWeight: 0.09, freq: {check: 0.61, bet: 0.39}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -3.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: -0.25, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.33, raise: 2.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: -0.25, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.33, raise: 2.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.50, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.27, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -3.60, rangeWeight: 0.08, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.47, raise: -1.47} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -3.60, rangeWeight: 0.08, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.47, raise: -1.47} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -5.82, rangeWeight: 0.29, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -5.82, rangeWeight: 0.29, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 5.51} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -8.55, rangeWeight: 0.09, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -8.55, rangeWeight: 0.09, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -2.99, rangeWeight: 0.29, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.48, raise: -3.90} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -2.99, rangeWeight: 0.29, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.48, raise: -3.90} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 7.01, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00}, evA: {fold: -3.00, call: 3.50, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.28, evRange: -2.97, rangeWeight: 0.09, freq: {fold: 0.87, call: 0.00, raise: 0.13}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.63, raise: -2.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.28, evRange: -2.97, rangeWeight: 0.09, freq: {fold: 0.87, call: 0.00, raise: 0.13}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.63, raise: -2.74} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.98, evRange: -6.99, rangeWeight: 0.17, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.98, evRange: -6.99, rangeWeight: 0.17, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.66} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.50, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.58, evRange: 3.55, rangeWeight: 0.13, freq: {check: 0.91, bet: 0.09}, ev: {check: 3.54, bet: 3.97}, evA: {check: 3.46, bet: 4.38} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.87, evRange: -0.70, rangeWeight: 0.38, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.87, bet: 0.09}, evA: {check: -0.70, bet: -1.59} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.87, evRange: -0.70, rangeWeight: 0.38, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.87, bet: 0.09}, evA: {check: -0.70, bet: -1.59} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.59, evRange: -3.17, rangeWeight: 0.06, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.62, bet: -1.81}, evA: {check: -3.18, bet: -2.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.59, evRange: -3.17, rangeWeight: 0.06, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.62, bet: -1.81}, evA: {check: -3.18, bet: -2.92} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 4.00, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.60, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.78, evRange: -0.14, rangeWeight: 0.26, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.87}, evA: {check: -0.60, bet: -0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.78, evRange: -0.14, rangeWeight: 0.26, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.87}, evA: {check: -0.60, bet: -0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.81, evRange: -3.50, rangeWeight: 0.09, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -4.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.81, evRange: -3.50, rangeWeight: 0.09, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -4.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.13, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.89, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: -0.50, rangeWeight: 0.38, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.82, raise: 2.62} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: -0.50, rangeWeight: 0.38, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.82, raise: 2.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -3.58, rangeWeight: 0.06, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.47, raise: -1.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -3.58, rangeWeight: 0.06, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.47, raise: -1.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.30, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 9.55} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -3.66, rangeWeight: 0.26, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.19} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -3.66, rangeWeight: 0.26, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -8.67, rangeWeight: 0.09, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -8.67, rangeWeight: 0.09, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 6.08, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.83, evRange: -1.71, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -1.39, raise: 3.18} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.83, evRange: -1.71, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -1.39, raise: 3.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -2.92, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.63, raise: 4.44} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -2.92, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.63, raise: 4.44} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.68} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.97, evRange: -6.99, rangeWeight: 0.38, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.44} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.97, evRange: -6.99, rangeWeight: 0.38, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.44} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 1.93, rangeWeight: 0.39, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.25, bet: -0.04}, evA: {check: 1.93, bet: 1.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 1.93, rangeWeight: 0.39, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.25, bet: -0.04}, evA: {check: 1.93, bet: 1.93} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.65, rangeWeight: 0.09, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.41}, evA: {check: -3.65, bet: -3.81} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.65, rangeWeight: 0.09, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.41}, evA: {check: -3.65, bet: -3.81} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.81, evRange: 6.94, rangeWeight: 0.04, freq: {check: 0.02, bet: 0.98}, ev: {check: 6.81, bet: 6.81}, evA: {check: 6.96, bet: 6.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.35, evRange: 0.98, rangeWeight: 0.25, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.62}, evA: {check: 0.83, bet: 0.73} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.35, evRange: 0.98, rangeWeight: 0.25, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.62}, evA: {check: 0.83, bet: 0.73} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.49, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.49}, evA: {check: -4.50, bet: -7.52} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.49, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.49}, evA: {check: -4.50, bet: -7.52} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 8.21, rangeWeight: 0.08, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 4.80, bet: 8.21} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.23, evRange: 4.17, rangeWeight: 0.39, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.55}, evA: {fold: -5.00, call: 3.00, raise: 4.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.23, evRange: 4.17, rangeWeight: 0.39, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.55}, evA: {fold: -5.00, call: 3.00, raise: 4.19} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.14}, evA: {fold: -5.00, call: -6.78, raise: -5.32} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.14}, evA: {fold: -5.00, call: -6.78, raise: -5.32} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.77, evRange: 10.90, rangeWeight: 0.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.77}, evA: {fold: -5.00, call: 8.32, raise: 10.90} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.71, evRange: 1.61, rangeWeight: 0.25, freq: {fold: 0.13, call: 0.87}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.71, evRange: 1.61, rangeWeight: 0.25, freq: {fold: 0.13, call: 0.87}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.16} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.02, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.02, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.49} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.03, evRange: 1.03, rangeWeight: 0.25, freq: {fold: 0.17, call: 0.80, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.63}, evA: {fold: -5.00, call: 1.49, raise: 5.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.03, evRange: 1.03, rangeWeight: 0.25, freq: {fold: 0.17, call: 0.80, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.63}, evA: {fold: -5.00, call: 1.49, raise: 5.35} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.90, evRange: -4.86, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.90}, evA: {fold: -5.00, call: -8.11, raise: 0.57} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.90, evRange: -4.86, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.90}, evA: {fold: -5.00, call: -8.11, raise: 0.57} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.82, evRange: 10.29, rangeWeight: 0.08, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.82}, evA: {fold: -5.00, call: 8.64, raise: 10.29} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.13, evRange: -3.01, rangeWeight: 0.39, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.13, evRange: -3.01, rangeWeight: 0.39, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.01, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.79} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.01, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.79} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: -1.84, rangeWeight: 0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.32, bet: -0.12}, evA: {check: -1.84, bet: -2.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: -1.84, rangeWeight: 0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.32, bet: -0.12}, evA: {check: -1.84, bet: -2.06} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.75, evRange: 7.53, rangeWeight: 0.10, freq: {check: 0.98, bet: 0.02}, ev: {check: 6.73, bet: 7.30}, evA: {check: 7.53, bet: 7.47} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.86, evRange: -4.56, rangeWeight: 0.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.88}, evA: {check: -4.55, bet: -4.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.86, evRange: -4.56, rangeWeight: 0.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.88}, evA: {check: -4.55, bet: -4.83} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.37, evRange: -0.14, rangeWeight: 0.29, freq: {check: 0.42, bet: 0.58}, ev: {check: 1.25, bet: -0.27}, evA: {check: -0.83, bet: -0.15} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.37, evRange: -0.14, rangeWeight: 0.29, freq: {check: 0.42, bet: 0.58}, ev: {check: 1.25, bet: -0.27}, evA: {check: -0.83, bet: -0.15} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.13, evRange: 7.66, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.13}, evA: {check: 4.50, bet: 7.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.78, rangeWeight: 0.09, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -3.96}, evA: {check: -4.80, bet: -4.77} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.78, rangeWeight: 0.09, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -3.96}, evA: {check: -4.80, bet: -4.77} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -2.18, rangeWeight: 0.41, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.64}, evA: {fold: -5.00, call: -3.00, raise: -0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -2.18, rangeWeight: 0.41, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.64}, evA: {fold: -5.00, call: -3.00, raise: -0.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.77, evRange: 10.18, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.77}, evA: {fold: -5.00, call: 6.78, raise: 10.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.21, evRange: -4.50, rangeWeight: 0.04, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: -0.71}, evA: {fold: -5.00, call: -8.32, raise: -2.28} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.21, evRange: -4.50, rangeWeight: 0.04, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: -0.71}, evA: {fold: -5.00, call: -8.32, raise: -2.28} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.32, evRange: -5.69, rangeWeight: 0.29, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.32, evRange: -5.69, rangeWeight: 0.29, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 11.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.35, evRange: -1.92, rangeWeight: 0.29, freq: {fold: 0.36, call: 0.63, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.33}, evA: {fold: -5.00, call: -1.49, raise: 1.97} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.35, evRange: -1.92, rangeWeight: 0.29, freq: {fold: 0.36, call: 0.63, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.33}, evA: {fold: -5.00, call: -1.49, raise: 1.97} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.12, evRange: 10.97, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.12}, evA: {fold: -5.00, call: 8.11, raise: 10.97} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.37, evRange: -4.60, rangeWeight: 0.09, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.48}, evA: {fold: -5.00, call: -8.64, raise: -3.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.37, evRange: -4.60, rangeWeight: 0.09, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.48}, evA: {fold: -5.00, call: -8.64, raise: -3.41} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.39, evRange: -4.86, rangeWeight: 0.41, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.39, evRange: -4.86, rangeWeight: 0.41, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.33} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.79} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.02, evRange: -9.06, rangeWeight: 0.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.02, evRange: -9.06, rangeWeight: 0.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.33, evRange: 6.25, rangeWeight: 0.59, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.96, bet: 6.33}, evA: {check: 5.54, bet: 6.25} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.16, evRange: -1.85, rangeWeight: 0.14, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.56, bet: -0.16}, evA: {check: -2.02, bet: -1.85} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.16, evRange: -1.85, rangeWeight: 0.14, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.56, bet: -0.16}, evA: {check: -2.02, bet: -1.85} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.18, evRange: -2.21, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -4.36, bet: -1.17}, evA: {check: -4.90, bet: -2.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.18, evRange: -2.21, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -4.36, bet: -1.17}, evA: {check: -4.90, bet: -2.21} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.88, evRange: 7.35, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.88}, evA: {check: 2.04, bet: 7.35} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.23, evRange: -2.80, rangeWeight: 0.26, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.05}, evA: {check: -3.67, bet: -5.69} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.23, evRange: -2.80, rangeWeight: 0.26, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.05}, evA: {check: -3.67, bet: -5.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.85, evRange: -5.77, rangeWeight: 0.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -3.96}, evA: {check: -4.80, bet: -7.05} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.85, evRange: -5.77, rangeWeight: 0.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -3.96}, evA: {check: -4.80, bet: -7.05} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.16, evRange: 9.24, rangeWeight: 0.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.17}, evA: {fold: -5.00, call: 6.28, raise: 9.25} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.37, evRange: -2.36, rangeWeight: 0.14, freq: {fold: 0.26, call: 0.71, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 3.31}, evA: {fold: -5.00, call: -3.63, raise: -0.22} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.37, evRange: -2.36, rangeWeight: 0.14, freq: {fold: 0.26, call: 0.71, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 3.31}, evA: {fold: -5.00, call: -3.63, raise: -0.22} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.37, evRange: -4.55, rangeWeight: 0.06, freq: {fold: 0.90, call: 0.01, raise: 0.08}, ev: {fold: -5.00, call: -6.75, raise: 2.58}, evA: {fold: -5.00, call: -8.32, raise: 0.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.37, evRange: -4.55, rangeWeight: 0.06, freq: {fold: 0.90, call: 0.01, raise: 0.08}, ev: {fold: -5.00, call: -6.75, raise: 2.58}, evA: {fold: -5.00, call: -8.32, raise: 0.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.30, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 5.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -7.97, evRange: -8.84, rangeWeight: 0.26, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.54} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -7.97, evRange: -8.84, rangeWeight: 0.26, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.54} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.01, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01}, evA: {fold: -5.00, call: 3.67, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.91, evRange: -4.99, rangeWeight: 0.26, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -6.61, raise: -6.21} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.91, evRange: -4.99, rangeWeight: 0.26, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -6.61, raise: -6.21} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.43, evRange: -4.98, rangeWeight: 0.09, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: 3.45}, evA: {fold: -5.00, call: -8.64, raise: -4.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.43, evRange: -4.98, rangeWeight: 0.09, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: 3.45}, evA: {fold: -5.00, call: -8.64, raise: -4.89} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.07} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.95, evRange: -8.97, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.95, evRange: -8.97, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.42, raise: 0.58}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.42, raise: 0.58}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.63, raise: 0.37}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.63, raise: 0.37}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.82, evRange: -0.82, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.82, evRange: -0.82, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: 1.61, rangeWeight: 0.25, freq: {check: 0.94, bet: 0.06}, ev: {check: -0.24, bet: -0.39}, evA: {check: 1.61, bet: 1.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: 1.61, rangeWeight: 0.25, freq: {check: 0.94, bet: 0.06}, ev: {check: -0.24, bet: -0.39}, evA: {check: 1.61, bet: 1.62} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.50, evRange: -1.91, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.49, bet: -3.36}, evA: {check: -1.91, bet: -1.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.50, evRange: -1.91, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.49, bet: -3.36}, evA: {check: -1.91, bet: -1.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.61, evRange: 4.32, rangeWeight: 0.02, freq: {check: 0.02, bet: 0.98}, ev: {check: 4.40, bet: 4.62}, evA: {check: 4.12, bet: 4.32} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.08, evRange: 1.76, rangeWeight: 0.19, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -0.81}, evA: {check: 1.66, bet: 1.68} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.08, evRange: 1.76, rangeWeight: 0.19, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -0.81}, evA: {check: 1.66, bet: 1.68} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.26, evRange: -2.06, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.08, bet: -4.18} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.26, evRange: -2.06, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.08, bet: -4.18} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.44, evRange: 5.46, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.44}, evA: {check: 2.93, bet: 5.46} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: 4.39, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: 3.65, raise: 4.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: 4.39, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: 3.65, raise: 4.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.01, evRange: -2.70, rangeWeight: 0.24, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.04}, evA: {fold: -3.00, call: -4.43, raise: -0.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.01, evRange: -2.70, rangeWeight: 0.24, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.04}, evA: {fold: -3.00, call: -4.43, raise: -0.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.24, evRange: 8.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.24}, evA: {fold: -3.00, call: 6.60, raise: 8.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.01, evRange: 1.39, rangeWeight: 0.19, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.10} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.01, evRange: 1.39, rangeWeight: 0.19, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.10} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.00, rangeWeight: 0.28, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.64} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.00, rangeWeight: 0.28, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.64} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.62, evRange: 2.52, rangeWeight: 0.19, freq: {fold: 0.24, call: 0.75, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.05}, evA: {fold: -3.00, call: 3.88, raise: 5.83} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.62, evRange: 2.52, rangeWeight: 0.19, freq: {fold: 0.24, call: 0.75, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.05}, evA: {fold: -3.00, call: 3.88, raise: 5.83} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.94, evRange: -2.88, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 0.18}, evA: {fold: -3.00, call: -4.86, raise: 3.39} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.94, evRange: -2.88, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 0.18}, evA: {fold: -3.00, call: -4.86, raise: 3.39} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.52, evRange: 7.53, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.52}, evA: {fold: -3.00, call: 6.83, raise: 7.53} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.49, evRange: -3.42, rangeWeight: 0.25, freq: {fold: 0.74, call: 0.26}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.49, evRange: -3.42, rangeWeight: 0.25, freq: {fold: 0.74, call: 0.26}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -6.97} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -6.97} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.71, evRange: -2.04, rangeWeight: 0.32, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.72, bet: 0.25}, evA: {check: -2.04, bet: -2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.71, evRange: -2.04, rangeWeight: 0.32, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.72, bet: 0.25}, evA: {check: -2.04, bet: -2.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.29, evRange: 3.96, rangeWeight: 0.31, freq: {check: 0.48, bet: 0.52}, ev: {check: 5.02, bet: 3.62}, evA: {check: 3.98, bet: 3.94} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.04, evRange: -2.56, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.94, bet: -1.03}, evA: {check: -3.27, bet: -2.55} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.04, evRange: -2.56, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.94, bet: -1.03}, evA: {check: -3.27, bet: -2.55} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.73, evRange: -1.10, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: -0.81}, evA: {check: -1.66, bet: -3.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.73, evRange: -1.10, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: -0.81}, evA: {check: -1.66, bet: -3.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.46, evRange: 6.73, rangeWeight: 0.37, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.46}, evA: {check: 2.08, bet: 6.73} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.75, evRange: -6.67, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.93, bet: -6.70} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.75, evRange: -6.67, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.93, bet: -6.70} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: -2.03, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: -3.65, raise: -3.09} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: -2.03, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: -3.65, raise: -3.09} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.22, evRange: 8.88, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.22}, evA: {fold: -3.00, call: 4.43, raise: 8.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.00, evRange: -3.33, rangeWeight: 0.03, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.00}, evA: {fold: -3.00, call: -6.60, raise: -5.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.00, evRange: -3.33, rangeWeight: 0.03, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.00}, evA: {fold: -3.00, call: -6.60, raise: -5.89} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.05, evRange: -5.11, rangeWeight: 0.24, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.10} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.05, evRange: -5.11, rangeWeight: 0.24, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.10} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.37, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.64} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.55, evRange: -2.84, rangeWeight: 0.24, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.88, raise: -1.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.55, evRange: -2.84, rangeWeight: 0.24, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.88, raise: -1.06} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.02, evRange: 7.03, rangeWeight: 0.37, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02}, evA: {fold: -3.00, call: 4.86, raise: 7.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.99, evRange: -2.99, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.42}, evA: {fold: -3.00, call: -6.83, raise: 1.23} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.99, evRange: -2.99, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.42}, evA: {fold: -3.00, call: -6.83, raise: 1.23} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.92, evRange: -6.97, rangeWeight: 0.32, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.92, evRange: -6.97, rangeWeight: 0.32, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.74} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 6.97} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.04, evRange: 4.63, rangeWeight: 0.32, freq: {check: 0.17, bet: 0.83}, ev: {check: 4.97, bet: 5.05}, evA: {check: 5.27, bet: 4.50} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.23, evRange: -1.37, rangeWeight: 0.31, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.51, bet: -1.06}, evA: {check: -1.37, bet: -1.36} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.23, evRange: -1.37, rangeWeight: 0.31, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.51, bet: -1.06}, evA: {check: -1.37, bet: -1.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.91, evRange: -1.68, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.67, bet: -1.91}, evA: {check: -3.07, bet: -1.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.91, evRange: -1.68, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.67, bet: -1.91}, evA: {check: -3.07, bet: -1.67} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.44, evRange: 6.71, rangeWeight: 0.22, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.44}, evA: {check: 2.04, bet: 6.71} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.17, evRange: -2.23, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -0.81}, evA: {check: -1.71, bet: -4.09} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.17, evRange: -2.23, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -0.81}, evA: {check: -1.71, bet: -4.09} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.21, evRange: -4.35, rangeWeight: 0.07, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.93, bet: -6.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.21, evRange: -4.35, rangeWeight: 0.07, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.93, bet: -6.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.24, evRange: 9.05, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.24}, evA: {fold: -3.00, call: 5.49, raise: 9.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.74, evRange: -0.89, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: -2.37, raise: -0.86} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.74, evRange: -0.89, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: -2.37, raise: -0.86} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.01, evRange: -3.21, rangeWeight: 0.03, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.04}, evA: {fold: -3.00, call: -6.60, raise: -4.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.01, evRange: -3.21, rangeWeight: 0.03, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.04}, evA: {fold: -3.00, call: -6.60, raise: -4.89} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.48} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.01, evRange: -5.21, rangeWeight: 0.33, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.27} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.01, evRange: -5.21, rangeWeight: 0.33, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.01, evRange: -7.03, rangeWeight: 0.07, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.01, evRange: -7.03, rangeWeight: 0.07, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.43, evRange: 7.77, rangeWeight: 0.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.43}, evA: {fold: -3.00, call: 4.76, raise: 7.77} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.57, evRange: -2.88, rangeWeight: 0.33, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: -3.99, raise: -1.99} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.57, evRange: -2.88, rangeWeight: 0.33, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: -3.99, raise: -1.99} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.71, evRange: -2.41, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: 0.59}, evA: {fold: -3.00, call: -6.83, raise: -1.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.71, evRange: -2.41, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: 0.59}, evA: {fold: -3.00, call: -6.83, raise: -1.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.32, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.62} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.93, evRange: -5.81, rangeWeight: 0.31, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.73} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.93, evRange: -5.81, rangeWeight: 0.31, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.73} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 2.33, rangeWeight: 0.25, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.11}, evA: {check: 2.33, bet: 2.34} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 2.33, rangeWeight: 0.25, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.11}, evA: {check: 2.33, bet: 2.34} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.84, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.14}, evA: {check: -3.84, bet: -5.19} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.84, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.14}, evA: {check: -3.84, bet: -5.19} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.94, evRange: 7.35, rangeWeight: 0.02, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.94, bet: 6.94}, evA: {check: 7.37, bet: 7.35} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.29, evRange: 2.90, rangeWeight: 0.30, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74}, evA: {check: 2.77, bet: 2.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.29, evRange: 2.90, rangeWeight: 0.30, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74}, evA: {check: 2.77, bet: 2.77} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.43, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.49}, evA: {check: -3.47, bet: -4.58} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.43, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.49}, evA: {check: -3.47, bet: -4.58} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 7.03, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 4.88, bet: 7.03} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.24, evRange: 4.46, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26}, evA: {fold: -5.00, call: 3.95, raise: 4.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.24, evRange: 4.46, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26}, evA: {fold: -5.00, call: 3.95, raise: 4.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.49}, evA: {fold: -5.00, call: -6.98, raise: -7.86} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.49}, evA: {fold: -5.00, call: -6.98, raise: -7.86} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.99, evRange: 11.44, rangeWeight: 0.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.75, raise: 11.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.23, evRange: 7.83, rangeWeight: 0.30, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.23, evRange: 7.83, rangeWeight: 0.30, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.83, evRange: 4.85, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: 4.99, raise: 7.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.83, evRange: 4.85, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: 4.99, raise: 7.11} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.96, evRange: -4.92, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -0.89}, evA: {fold: -5.00, call: -6.25, raise: 2.56} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.96, evRange: -4.92, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -0.89}, evA: {fold: -5.00, call: -6.25, raise: 2.56} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.80, evRange: 9.82, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.80}, evA: {fold: -5.00, call: 8.78, raise: 9.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.12, evRange: -2.84, rangeWeight: 0.25, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.12, evRange: -2.84, rangeWeight: 0.25, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.71} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.08} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.08} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.53, evRange: -2.62, rangeWeight: 0.32, freq: {check: 0.30, bet: 0.70}, ev: {check: 0.26, bet: -0.86}, evA: {check: -2.61, bet: -2.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.53, evRange: -2.62, rangeWeight: 0.32, freq: {check: 0.30, bet: 0.70}, ev: {check: 0.26, bet: -0.86}, evA: {check: -2.61, bet: -2.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.02, evRange: 7.89, rangeWeight: 0.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 6.58, bet: 8.03}, evA: {check: 7.87, bet: 7.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.82, evRange: -4.83, rangeWeight: 0.03, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.24}, evA: {check: -4.83, bet: -4.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.82, evRange: -4.83, rangeWeight: 0.03, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.24}, evA: {check: -4.83, bet: -4.82} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: -3.17, rangeWeight: 0.35, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28}, evA: {check: -2.77, bet: -4.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: -3.17, rangeWeight: 0.35, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28}, evA: {check: -2.77, bet: -4.50} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 8.62, rangeWeight: 0.22, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 3.47, bet: 8.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.85, rangeWeight: 0.03, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.46}, evA: {check: -4.88, bet: -8.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.85, rangeWeight: 0.03, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.46}, evA: {check: -4.88, bet: -8.49} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.18, evRange: -2.22, rangeWeight: 0.32, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.34}, evA: {fold: -5.00, call: -3.95, raise: -1.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.18, evRange: -2.22, rangeWeight: 0.32, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.34}, evA: {fold: -5.00, call: -3.95, raise: -1.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.12, evRange: 10.96, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.12}, evA: {fold: -5.00, call: 6.98, raise: 10.96} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.44}, evA: {fold: -5.00, call: -8.75, raise: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.44}, evA: {fold: -5.00, call: -8.75, raise: -4.76} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.44, evRange: -6.65, rangeWeight: 0.35, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.44, evRange: -6.65, rangeWeight: 0.35, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.02, evRange: -9.09, rangeWeight: 0.03, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.68} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.02, evRange: -9.09, rangeWeight: 0.03, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.47, evRange: -3.81, rangeWeight: 0.35, freq: {fold: 0.38, call: 0.53, raise: 0.09}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: -4.99, raise: -2.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.47, evRange: -3.81, rangeWeight: 0.35, freq: {fold: 0.38, call: 0.53, raise: 0.09}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: -4.99, raise: -2.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.79, evRange: 10.44, rangeWeight: 0.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.79}, evA: {fold: -5.00, call: 6.25, raise: 10.44} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.34, evRange: -4.44, rangeWeight: 0.03, freq: {fold: 0.60, call: 0.00, raise: 0.40}, ev: {fold: -5.00, call: -6.75, raise: -0.84}, evA: {fold: -5.00, call: -8.78, raise: -3.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.34, evRange: -4.44, rangeWeight: 0.03, freq: {fold: 0.60, call: 0.00, raise: 0.40}, ev: {fold: -5.00, call: -6.75, raise: -0.84}, evA: {fold: -5.00, call: -8.78, raise: -3.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.17, evRange: -6.70, rangeWeight: 0.32, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.17, evRange: -6.70, rangeWeight: 0.32, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.71} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.08} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.52, evRange: 7.11, rangeWeight: 0.32, freq: {check: 0.46, bet: 0.54}, ev: {check: 7.92, bet: 7.19}, evA: {check: 7.11, bet: 7.12} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.22, evRange: -4.00, rangeWeight: 0.31, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.39, bet: -1.15}, evA: {check: -4.00, bet: -4.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.22, evRange: -4.00, rangeWeight: 0.31, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.39, bet: -1.15}, evA: {check: -4.00, bet: -4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.26, evRange: -4.98, rangeWeight: 0.03, freq: {check: 0.45, bet: 0.55}, ev: {check: -1.18, bet: -3.14}, evA: {check: -4.96, bet: -4.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.26, evRange: -4.98, rangeWeight: 0.03, freq: {check: 0.45, bet: 0.55}, ev: {check: -1.18, bet: -3.14}, evA: {check: -4.96, bet: -4.99} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.26, evRange: 6.73, rangeWeight: 0.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 9.26}, evA: {check: 3.40, bet: 6.73} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.28, evRange: -2.48, rangeWeight: 0.26, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.67}, evA: {check: -2.85, bet: -3.30} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.28, evRange: -2.48, rangeWeight: 0.26, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.67}, evA: {check: -2.85, bet: -3.30} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -2.63, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.73}, evA: {check: -4.88, bet: -2.62} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -2.63, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.73}, evA: {check: -4.88, bet: -2.62} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.15, evRange: 9.24, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.15}, evA: {fold: -5.00, call: 5.34, raise: 9.24} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.91, evRange: -4.71, rangeWeight: 0.31, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.35}, evA: {fold: -5.00, call: -5.77, raise: -3.27} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.91, evRange: -4.71, rangeWeight: 0.31, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.35}, evA: {fold: -5.00, call: -5.77, raise: -3.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 2.11, evRange: -1.43, rangeWeight: 0.03, freq: {fold: 0.08, call: 0.00, raise: 0.92}, ev: {fold: -5.00, call: -6.75, raise: 2.73}, evA: {fold: -5.00, call: -8.75, raise: -1.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 2.11, evRange: -1.43, rangeWeight: 0.03, freq: {fold: 0.08, call: 0.00, raise: 0.92}, ev: {fold: -5.00, call: -6.75, raise: 2.73}, evA: {fold: -5.00, call: -8.75, raise: -1.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 8.84} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.15, evRange: -8.71, rangeWeight: 0.26, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.42} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.15, evRange: -8.71, rangeWeight: 0.26, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.42} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.68} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.01, rangeWeight: 0.41, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01}, evA: {fold: -5.00, call: 6.12, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.23, evRange: -4.13, rangeWeight: 0.26, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -5.13, raise: -1.19} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.23, evRange: -4.13, rangeWeight: 0.26, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -5.13, raise: -1.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.58, evRange: -3.09, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.47}, evA: {fold: -5.00, call: -8.78, raise: 1.70} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.58, evRange: -3.09, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.47}, evA: {fold: -5.00, call: -8.78, raise: 1.70} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.32, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 7.72} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.97, evRange: -8.99, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.97, evRange: -8.99, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
      }
    },
      }
    },
      }
    },
  k: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.24, evRange: 0.24, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: -0.00, bet: 0.33}, evA: {check: -0.00, bet: 0.33} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.24, evRange: 0.24, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: -0.00, bet: 0.33}, evA: {check: -0.00, bet: 0.33} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.69, evRange: -0.69, rangeWeight: 0.17, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.76, bet: 0.16}, evA: {check: -0.76, bet: 0.16} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.69, evRange: -0.69, rangeWeight: 0.17, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.76, bet: 0.16}, evA: {check: -0.76, bet: 0.16} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.38, evRange: 0.64, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.64} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.38, evRange: 0.64, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.64} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.32, evRange: 0.55, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.32, evRange: 0.55, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.00, bet: 0.19}, evA: {check: 0.00, bet: 0.41} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.00, bet: 0.19}, evA: {check: 0.00, bet: 0.41} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.41, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.63}, evA: {check: -0.41, bet: -3.44} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.41, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.63}, evA: {check: -0.41, bet: -3.44} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.83, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88}, evA: {check: -0.83, bet: -3.93} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.83, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88}, evA: {check: -0.83, bet: -3.93} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.02, evRange: 1.02, rangeWeight: 0.47, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.02, bet: 1.26}, evA: {check: 1.02, bet: 1.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.23, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.16}, evA: {check: -0.49, bet: -3.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.23, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.16}, evA: {check: -0.49, bet: -3.65} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.50}, evA: {check: -0.90, bet: -2.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.50}, evA: {check: -0.90, bet: -2.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, rangeWeight: 0.70, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00}, evA: {check: 0.53, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.68}, evA: {fold: -1.00, call: -3.24, raise: -4.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.68}, evA: {fold: -1.00, call: -3.24, raise: -4.80} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.11}, evA: {fold: -1.00, call: -4.52, raise: -6.54} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.11}, evA: {fold: -1.00, call: -4.52, raise: -6.54} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.32, evRange: 5.05, rangeWeight: 0.47, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.32}, evA: {fold: -1.00, call: 1.51, raise: 5.05} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.23, evRange: -3.02, rangeWeight: 0.00, freq: {fold: 0.34, call: 0.66}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.44} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.23, evRange: -3.02, rangeWeight: 0.00, freq: {fold: 0.34, call: 0.66}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.44} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.06} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.06} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.70, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 4.76} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.72, evRange: -1.02, rangeWeight: 0.00, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.39}, evA: {fold: -1.00, call: -2.47, raise: -2.60} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.72, evRange: -1.02, rangeWeight: 0.00, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.39}, evA: {fold: -1.00, call: -2.47, raise: -2.60} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.89}, evA: {fold: -1.00, call: -4.48, raise: -3.02} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.89}, evA: {fold: -1.00, call: -4.48, raise: -3.02} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.70, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.17}, evA: {fold: -1.00, call: 2.64, raise: 5.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.37, evRange: -4.88, rangeWeight: 0.13, freq: {fold: 0.91, call: 0.09}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.84} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.37, evRange: -4.88, rangeWeight: 0.13, freq: {fold: 0.91, call: 0.09}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.84} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.14} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.14} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.47, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 2.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.15, evRange: 0.68, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.50}, evA: {check: 0.68, bet: 0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.15, evRange: 0.68, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.50}, evA: {check: 0.68, bet: 0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.21, evRange: 1.29, rangeWeight: 0.10, freq: {check: 0.47, bet: 0.53}, ev: {check: 1.20, bet: 3.11}, evA: {check: 1.30, bet: 1.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.33, evRange: -0.24, rangeWeight: 0.35, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.51}, evA: {check: -0.24, bet: -0.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.33, evRange: -0.24, rangeWeight: 0.35, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.51}, evA: {check: -0.24, bet: -0.25} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 0.66, rangeWeight: 0.00, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: -0.70}, evA: {check: 0.49, bet: 0.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 0.66, rangeWeight: 0.00, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: -0.70}, evA: {check: 0.49, bet: 0.22} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.82, evRange: 1.35, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.82}, evA: {check: 0.90, bet: 1.35} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.47, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.73}, evA: {check: -0.53, bet: -0.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.47, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.73}, evA: {check: -0.53, bet: -0.69} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.08, evRange: 1.06, rangeWeight: 0.09, freq: {fold: 0.59, call: 0.41, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.38}, evA: {fold: -1.00, call: 3.24, raise: 3.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.08, evRange: 1.06, rangeWeight: 0.09, freq: {fold: 0.59, call: 0.41, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.38}, evA: {fold: -1.00, call: 3.24, raise: 3.66} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.19, evRange: 5.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.19}, evA: {fold: -1.00, call: 4.52, raise: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.83}, evA: {fold: -1.00, call: -1.51, raise: 2.55} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.83}, evA: {fold: -1.00, call: -1.51, raise: 2.55} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.31, evRange: -3.95, rangeWeight: 0.00, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.44} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.31, evRange: -3.95, rangeWeight: 0.00, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.44} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.76} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.22, evRange: 3.27, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.43}, evA: {fold: -1.00, call: 2.47, raise: 2.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.22, evRange: 3.27, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.43}, evA: {fold: -1.00, call: 2.47, raise: 2.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.71, evRange: 5.72, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.71}, evA: {fold: -1.00, call: 4.48, raise: 5.72} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.12, evRange: -0.99, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.50}, evA: {fold: -1.00, call: -2.64, raise: -0.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.12, evRange: -0.99, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.50}, evA: {fold: -1.00, call: -2.64, raise: -0.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 5.50, rangeWeight: 0.09, freq: {fold: 0.14, call: 0.86}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.84} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 5.50, rangeWeight: 0.09, freq: {fold: 0.14, call: 0.86}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.84} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.44, evRange: 1.51, rangeWeight: 0.09, freq: {check: 0.00, bet: 1.00}, ev: {check: 2.33, bet: 2.44}, evA: {check: 1.48, bet: 1.51} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.26, evRange: 0.92, rangeWeight: 0.10, freq: {check: 0.44, bet: 0.56}, ev: {check: -0.74, bet: -1.67}, evA: {check: 0.92, bet: 0.93} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.26, evRange: 0.92, rangeWeight: 0.10, freq: {check: 0.44, bet: 0.56}, ev: {check: -0.74, bet: -1.67}, evA: {check: 0.92, bet: 0.93} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.30, rangeWeight: 0.35, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.71}, evA: {check: -0.31, bet: -0.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.30, rangeWeight: 0.35, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.71}, evA: {check: -0.31, bet: -0.30} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.91, rangeWeight: 0.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00}, evA: {check: 0.91, bet: 1.91} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.41, evRange: 0.40, rangeWeight: 0.09, freq: {check: 0.67, bet: 0.33}, ev: {check: 0.25, bet: -1.74}, evA: {check: 0.52, bet: -0.15} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.41, evRange: 0.40, rangeWeight: 0.09, freq: {check: 0.67, bet: 0.33}, ev: {check: 0.25, bet: -1.74}, evA: {check: 0.52, bet: -0.15} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -0.47, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53}, evA: {check: -0.53, bet: -1.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -0.47, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53}, evA: {check: -0.53, bet: -1.79} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 5.81, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.06}, evA: {fold: -1.00, call: 4.99, raise: 5.81} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 4.50, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.32}, evA: {fold: -1.00, call: 4.49, raise: 4.62} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 4.50, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.32}, evA: {fold: -1.00, call: 4.49, raise: 4.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53}, evA: {fold: -1.00, call: -1.51, raise: 0.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53}, evA: {fold: -1.00, call: -1.51, raise: 0.69} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.24, evRange: 6.08, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.67} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.24, evRange: 6.08, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.06, evRange: -4.97, rangeWeight: 0.41, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.06, evRange: -4.97, rangeWeight: 0.41, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.76} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.12, evRange: 6.11, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.13}, evA: {fold: -1.00, call: 4.53, raise: 6.11} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.60, evRange: 2.13, rangeWeight: 0.09, freq: {fold: 0.29, call: 0.71, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.38}, evA: {fold: -1.00, call: 2.60, raise: 3.17} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.60, evRange: 2.13, rangeWeight: 0.09, freq: {fold: 0.29, call: 0.71, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.38}, evA: {fold: -1.00, call: 2.60, raise: 3.17} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.56}, evA: {fold: -1.00, call: -2.64, raise: -1.62} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.56}, evA: {fold: -1.00, call: -2.64, raise: -1.62} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: 8.08, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 8.08} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: 8.08, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 8.08} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.11, evRange: -4.85, rangeWeight: 0.35, freq: {fold: 0.93, call: 0.07}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.11, evRange: -4.85, rangeWeight: 0.35, freq: {fold: 0.93, call: 0.07}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.33, raise: 0.67}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.33, raise: 0.67}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.85, raise: 0.15}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.85, raise: 0.15}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.94, evRange: -0.94, rangeWeight: 0.32, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.94, evRange: -0.94, rangeWeight: 0.32, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.86, evRange: 1.71, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.87, bet: -0.10}, evA: {check: 1.71, bet: 1.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.86, evRange: 1.71, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.87, bet: -0.10}, evA: {check: 1.71, bet: 1.22} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.56, evRange: -2.36, rangeWeight: 0.35, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.55, bet: -3.22}, evA: {check: -2.35, bet: -2.67} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.56, evRange: -2.36, rangeWeight: 0.35, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.55, bet: -3.22}, evA: {check: -2.35, bet: -2.67} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.35, evRange: 4.44, rangeWeight: 0.05, freq: {check: 0.15, bet: 0.85}, ev: {check: 3.45, bet: 4.51}, evA: {check: 3.43, bet: 4.62} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: 2.32, rangeWeight: 0.25, freq: {check: 0.86, bet: 0.14}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.92, bet: 2.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: 2.32, rangeWeight: 0.25, freq: {check: 0.86, bet: 0.14}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.92, bet: 2.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.81, evRange: -1.76, rangeWeight: 0.21, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -3.29}, evA: {check: -1.50, bet: -2.08} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.81, evRange: -1.76, rangeWeight: 0.21, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -3.29}, evA: {check: -1.50, bet: -2.08} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 4.00, rangeWeight: 0.08, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.84, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.11, rangeWeight: 0.12, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 2.33, raise: 6.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.11, rangeWeight: 0.12, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 2.33, raise: 6.07} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.87, rangeWeight: 0.35, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.27, raise: -0.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.87, rangeWeight: 0.35, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.27, raise: -0.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.05, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.47, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: 0.57, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 7.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: 0.57, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 7.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.63, evRange: -6.03, rangeWeight: 0.21, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.63, evRange: -6.03, rangeWeight: 0.21, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.08, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.53, evRange: 3.07, rangeWeight: 0.25, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.47}, evA: {fold: -3.00, call: 4.48, raise: 5.90} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.53, evRange: 3.07, rangeWeight: 0.25, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.47}, evA: {fold: -3.00, call: 4.48, raise: 5.90} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.98, evRange: -2.97, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.33}, evA: {fold: -3.00, call: -3.50, raise: 5.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.98, evRange: -2.97, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.33}, evA: {fold: -3.00, call: -3.50, raise: 5.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.04, evRange: 7.02, rangeWeight: 0.08, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04}, evA: {fold: -3.00, call: 6.63, raise: 7.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.82, evRange: -6.77, rangeWeight: 0.12, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.82, evRange: -6.77, rangeWeight: 0.12, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.66} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.05, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.38, evRange: -1.26, rangeWeight: 0.17, freq: {check: 0.08, bet: 0.92}, ev: {check: 0.78, bet: -0.48}, evA: {check: -0.50, bet: -1.32} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.38, evRange: -1.26, rangeWeight: 0.17, freq: {check: 0.08, bet: 0.92}, ev: {check: 0.78, bet: -0.48}, evA: {check: -0.50, bet: -1.32} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.37, evRange: 4.55, rangeWeight: 0.50, freq: {check: 0.01, bet: 0.99}, ev: {check: 3.49, bet: 4.38}, evA: {check: 3.48, bet: 4.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.94, evRange: -2.51, rangeWeight: 0.08, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.66, bet: -1.93}, evA: {check: -3.20, bet: -2.50} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.94, evRange: -2.51, rangeWeight: 0.08, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.66, bet: -1.93}, evA: {check: -3.20, bet: -2.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.79, evRange: -1.49, rangeWeight: 0.29, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.92, bet: -1.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.79, evRange: -1.49, rangeWeight: 0.29, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.92, bet: -1.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 4.00, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 1.50, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.66, evRange: -3.24, rangeWeight: 0.09, freq: {check: 0.61, bet: 0.39}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -3.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.66, evRange: -3.24, rangeWeight: 0.09, freq: {check: 0.61, bet: 0.39}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -3.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: -0.25, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.33, raise: 2.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: -0.25, rangeWeight: 0.17, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.33, raise: 2.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.50, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.27, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -3.60, rangeWeight: 0.08, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.47, raise: -1.47} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -3.60, rangeWeight: 0.08, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.47, raise: -1.47} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -5.82, rangeWeight: 0.29, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -5.82, rangeWeight: 0.29, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.25, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 5.51} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -8.55, rangeWeight: 0.09, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -8.55, rangeWeight: 0.09, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -2.99, rangeWeight: 0.29, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.48, raise: -3.90} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -2.99, rangeWeight: 0.29, freq: {fold: 0.58, call: 0.42, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.48, raise: -3.90} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 7.01, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00}, evA: {fold: -3.00, call: 3.50, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.28, evRange: -2.97, rangeWeight: 0.09, freq: {fold: 0.87, call: 0.00, raise: 0.13}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.63, raise: -2.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.28, evRange: -2.97, rangeWeight: 0.09, freq: {fold: 0.87, call: 0.00, raise: 0.13}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.63, raise: -2.74} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.98, evRange: -6.99, rangeWeight: 0.17, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.98, evRange: -6.99, rangeWeight: 0.17, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.66} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.50, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.58, evRange: 3.55, rangeWeight: 0.13, freq: {check: 0.91, bet: 0.09}, ev: {check: 3.54, bet: 3.97}, evA: {check: 3.46, bet: 4.38} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.87, evRange: -0.70, rangeWeight: 0.38, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.87, bet: 0.09}, evA: {check: -0.70, bet: -1.59} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.87, evRange: -0.70, rangeWeight: 0.38, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.87, bet: 0.09}, evA: {check: -0.70, bet: -1.59} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.59, evRange: -3.17, rangeWeight: 0.06, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.62, bet: -1.81}, evA: {check: -3.18, bet: -2.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.59, evRange: -3.17, rangeWeight: 0.06, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.62, bet: -1.81}, evA: {check: -3.18, bet: -2.92} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 4.00, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.60, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.78, evRange: -0.14, rangeWeight: 0.26, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.87}, evA: {check: -0.60, bet: -0.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.78, evRange: -0.14, rangeWeight: 0.26, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.87}, evA: {check: -0.60, bet: -0.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.81, evRange: -3.50, rangeWeight: 0.09, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -4.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.81, evRange: -3.50, rangeWeight: 0.09, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -4.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.33, evRange: 4.33, rangeWeight: 0.13, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.89, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.21, evRange: -0.50, rangeWeight: 0.38, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.82, raise: 2.62} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.21, evRange: -0.50, rangeWeight: 0.38, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.82, raise: 2.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -3.58, rangeWeight: 0.06, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.47, raise: -1.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -3.58, rangeWeight: 0.06, freq: {fold: 0.33, call: 0.33, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.47, raise: -1.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.00, evRange: 2.00, rangeWeight: 0.30, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 9.55} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.13, evRange: -3.66, rangeWeight: 0.26, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.19} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.13, evRange: -3.66, rangeWeight: 0.26, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.63, evRange: -8.67, rangeWeight: 0.09, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.63, evRange: -8.67, rangeWeight: 0.09, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 6.08, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.83, evRange: -1.71, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -1.39, raise: 3.18} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.83, evRange: -1.71, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -1.39, raise: 3.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -2.92, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.63, raise: 4.44} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -2.92, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.63, raise: 4.44} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.68} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.97, evRange: -6.99, rangeWeight: 0.38, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.44} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.97, evRange: -6.99, rangeWeight: 0.38, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.44} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 1.93, rangeWeight: 0.39, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.25, bet: -0.04}, evA: {check: 1.93, bet: 1.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 1.93, rangeWeight: 0.39, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.25, bet: -0.04}, evA: {check: 1.93, bet: 1.93} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.65, rangeWeight: 0.09, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.41}, evA: {check: -3.65, bet: -3.81} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.65, rangeWeight: 0.09, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -4.41}, evA: {check: -3.65, bet: -3.81} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.81, evRange: 6.94, rangeWeight: 0.04, freq: {check: 0.02, bet: 0.98}, ev: {check: 6.81, bet: 6.81}, evA: {check: 6.96, bet: 6.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.35, evRange: 0.98, rangeWeight: 0.25, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.62}, evA: {check: 0.83, bet: 0.73} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.35, evRange: 0.98, rangeWeight: 0.25, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.62}, evA: {check: 0.83, bet: 0.73} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.49, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.49}, evA: {check: -4.50, bet: -7.52} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.49, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.49}, evA: {check: -4.50, bet: -7.52} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 8.21, rangeWeight: 0.08, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 4.80, bet: 8.21} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.23, evRange: 4.17, rangeWeight: 0.39, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.55}, evA: {fold: -5.00, call: 3.00, raise: 4.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.23, evRange: 4.17, rangeWeight: 0.39, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.55}, evA: {fold: -5.00, call: 3.00, raise: 4.19} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.14}, evA: {fold: -5.00, call: -6.78, raise: -5.32} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.14}, evA: {fold: -5.00, call: -6.78, raise: -5.32} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.77, evRange: 10.90, rangeWeight: 0.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.77}, evA: {fold: -5.00, call: 8.32, raise: 10.90} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.71, evRange: 1.61, rangeWeight: 0.25, freq: {fold: 0.13, call: 0.87}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.71, evRange: 1.61, rangeWeight: 0.25, freq: {fold: 0.13, call: 0.87}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.16} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.02, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.02, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.49} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.03, evRange: 1.03, rangeWeight: 0.25, freq: {fold: 0.17, call: 0.80, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.63}, evA: {fold: -5.00, call: 1.49, raise: 5.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.03, evRange: 1.03, rangeWeight: 0.25, freq: {fold: 0.17, call: 0.80, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.63}, evA: {fold: -5.00, call: 1.49, raise: 5.35} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.90, evRange: -4.86, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.90}, evA: {fold: -5.00, call: -8.11, raise: 0.57} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.90, evRange: -4.86, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.90}, evA: {fold: -5.00, call: -8.11, raise: 0.57} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.82, evRange: 10.29, rangeWeight: 0.08, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.82}, evA: {fold: -5.00, call: 8.64, raise: 10.29} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.13, evRange: -3.01, rangeWeight: 0.39, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.13, evRange: -3.01, rangeWeight: 0.39, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.01, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.79} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.01, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.79} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: -1.84, rangeWeight: 0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.32, bet: -0.12}, evA: {check: -1.84, bet: -2.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: -1.84, rangeWeight: 0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.32, bet: -0.12}, evA: {check: -1.84, bet: -2.06} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.75, evRange: 7.53, rangeWeight: 0.10, freq: {check: 0.98, bet: 0.02}, ev: {check: 6.73, bet: 7.30}, evA: {check: 7.53, bet: 7.47} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.86, evRange: -4.56, rangeWeight: 0.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.88}, evA: {check: -4.55, bet: -4.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.86, evRange: -4.56, rangeWeight: 0.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.88}, evA: {check: -4.55, bet: -4.83} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.37, evRange: -0.14, rangeWeight: 0.29, freq: {check: 0.42, bet: 0.58}, ev: {check: 1.25, bet: -0.27}, evA: {check: -0.83, bet: -0.15} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.37, evRange: -0.14, rangeWeight: 0.29, freq: {check: 0.42, bet: 0.58}, ev: {check: 1.25, bet: -0.27}, evA: {check: -0.83, bet: -0.15} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.13, evRange: 7.66, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.13}, evA: {check: 4.50, bet: 7.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.78, rangeWeight: 0.09, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -3.96}, evA: {check: -4.80, bet: -4.77} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.78, rangeWeight: 0.09, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -3.96}, evA: {check: -4.80, bet: -4.77} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -2.18, rangeWeight: 0.41, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.64}, evA: {fold: -5.00, call: -3.00, raise: -0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -2.18, rangeWeight: 0.41, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.64}, evA: {fold: -5.00, call: -3.00, raise: -0.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.77, evRange: 10.18, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.77}, evA: {fold: -5.00, call: 6.78, raise: 10.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.21, evRange: -4.50, rangeWeight: 0.04, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: -0.71}, evA: {fold: -5.00, call: -8.32, raise: -2.28} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.21, evRange: -4.50, rangeWeight: 0.04, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: -0.71}, evA: {fold: -5.00, call: -8.32, raise: -2.28} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.32, evRange: -5.69, rangeWeight: 0.29, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.32, evRange: -5.69, rangeWeight: 0.29, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 11.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.35, evRange: -1.92, rangeWeight: 0.29, freq: {fold: 0.36, call: 0.63, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.33}, evA: {fold: -5.00, call: -1.49, raise: 1.97} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.35, evRange: -1.92, rangeWeight: 0.29, freq: {fold: 0.36, call: 0.63, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.33}, evA: {fold: -5.00, call: -1.49, raise: 1.97} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.12, evRange: 10.97, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.12}, evA: {fold: -5.00, call: 8.11, raise: 10.97} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.37, evRange: -4.60, rangeWeight: 0.09, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.48}, evA: {fold: -5.00, call: -8.64, raise: -3.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.37, evRange: -4.60, rangeWeight: 0.09, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.48}, evA: {fold: -5.00, call: -8.64, raise: -3.41} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.39, evRange: -4.86, rangeWeight: 0.41, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.39, evRange: -4.86, rangeWeight: 0.41, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.33} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.79} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.02, evRange: -9.06, rangeWeight: 0.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.02, evRange: -9.06, rangeWeight: 0.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.33, evRange: 6.25, rangeWeight: 0.59, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.96, bet: 6.33}, evA: {check: 5.54, bet: 6.25} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.16, evRange: -1.85, rangeWeight: 0.14, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.56, bet: -0.16}, evA: {check: -2.02, bet: -1.85} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.16, evRange: -1.85, rangeWeight: 0.14, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.56, bet: -0.16}, evA: {check: -2.02, bet: -1.85} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.18, evRange: -2.21, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -4.36, bet: -1.17}, evA: {check: -4.90, bet: -2.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.18, evRange: -2.21, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -4.36, bet: -1.17}, evA: {check: -4.90, bet: -2.21} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.88, evRange: 7.35, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.88}, evA: {check: 2.04, bet: 7.35} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.23, evRange: -2.80, rangeWeight: 0.26, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.05}, evA: {check: -3.67, bet: -5.69} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.23, evRange: -2.80, rangeWeight: 0.26, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.05}, evA: {check: -3.67, bet: -5.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.85, evRange: -5.77, rangeWeight: 0.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -3.96}, evA: {check: -4.80, bet: -7.05} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.85, evRange: -5.77, rangeWeight: 0.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -3.96}, evA: {check: -4.80, bet: -7.05} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.16, evRange: 9.24, rangeWeight: 0.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.17}, evA: {fold: -5.00, call: 6.28, raise: 9.25} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.37, evRange: -2.36, rangeWeight: 0.14, freq: {fold: 0.26, call: 0.71, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 3.31}, evA: {fold: -5.00, call: -3.63, raise: -0.22} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.37, evRange: -2.36, rangeWeight: 0.14, freq: {fold: 0.26, call: 0.71, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 3.31}, evA: {fold: -5.00, call: -3.63, raise: -0.22} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.37, evRange: -4.55, rangeWeight: 0.06, freq: {fold: 0.90, call: 0.01, raise: 0.08}, ev: {fold: -5.00, call: -6.75, raise: 2.58}, evA: {fold: -5.00, call: -8.32, raise: 0.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.37, evRange: -4.55, rangeWeight: 0.06, freq: {fold: 0.90, call: 0.01, raise: 0.08}, ev: {fold: -5.00, call: -6.75, raise: 2.58}, evA: {fold: -5.00, call: -8.32, raise: 0.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.30, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 5.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -7.97, evRange: -8.84, rangeWeight: 0.26, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.54} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -7.97, evRange: -8.84, rangeWeight: 0.26, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.54} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.01, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01}, evA: {fold: -5.00, call: 3.67, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.91, evRange: -4.99, rangeWeight: 0.26, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -6.61, raise: -6.21} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.91, evRange: -4.99, rangeWeight: 0.26, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -6.61, raise: -6.21} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.43, evRange: -4.98, rangeWeight: 0.09, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: 3.45}, evA: {fold: -5.00, call: -8.64, raise: -4.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.43, evRange: -4.98, rangeWeight: 0.09, freq: {fold: 0.81, call: 0.00, raise: 0.19}, ev: {fold: -5.00, call: -6.75, raise: 3.45}, evA: {fold: -5.00, call: -8.64, raise: -4.89} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.07} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.95, evRange: -8.97, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.95, evRange: -8.97, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.42, raise: 0.58}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.42, raise: 0.58}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.63, raise: 0.37}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.63, raise: 0.37}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.82, evRange: -0.82, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.82, evRange: -0.82, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.00}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: 1.61, rangeWeight: 0.25, freq: {check: 0.94, bet: 0.06}, ev: {check: -0.24, bet: -0.39}, evA: {check: 1.61, bet: 1.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: 1.61, rangeWeight: 0.25, freq: {check: 0.94, bet: 0.06}, ev: {check: -0.24, bet: -0.39}, evA: {check: 1.61, bet: 1.62} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.50, evRange: -1.91, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.49, bet: -3.36}, evA: {check: -1.91, bet: -1.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.50, evRange: -1.91, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.49, bet: -3.36}, evA: {check: -1.91, bet: -1.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.61, evRange: 4.32, rangeWeight: 0.02, freq: {check: 0.02, bet: 0.98}, ev: {check: 4.40, bet: 4.62}, evA: {check: 4.12, bet: 4.32} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.08, evRange: 1.76, rangeWeight: 0.19, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -0.81}, evA: {check: 1.66, bet: 1.68} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.08, evRange: 1.76, rangeWeight: 0.19, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -0.81}, evA: {check: 1.66, bet: 1.68} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.26, evRange: -2.06, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.08, bet: -4.18} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.26, evRange: -2.06, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.08, bet: -4.18} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.44, evRange: 5.46, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.44}, evA: {check: 2.93, bet: 5.46} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: 4.39, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: 3.65, raise: 4.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: 4.39, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: 3.65, raise: 4.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.01, evRange: -2.70, rangeWeight: 0.24, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.04}, evA: {fold: -3.00, call: -4.43, raise: -0.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.01, evRange: -2.70, rangeWeight: 0.24, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.04}, evA: {fold: -3.00, call: -4.43, raise: -0.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.24, evRange: 8.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.24}, evA: {fold: -3.00, call: 6.60, raise: 8.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.01, evRange: 1.39, rangeWeight: 0.19, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.10} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.01, evRange: 1.39, rangeWeight: 0.19, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.10} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.00, rangeWeight: 0.28, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.64} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.00, rangeWeight: 0.28, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.64} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.62, evRange: 2.52, rangeWeight: 0.19, freq: {fold: 0.24, call: 0.75, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.05}, evA: {fold: -3.00, call: 3.88, raise: 5.83} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.62, evRange: 2.52, rangeWeight: 0.19, freq: {fold: 0.24, call: 0.75, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.05}, evA: {fold: -3.00, call: 3.88, raise: 5.83} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.94, evRange: -2.88, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 0.18}, evA: {fold: -3.00, call: -4.86, raise: 3.39} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.94, evRange: -2.88, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 0.18}, evA: {fold: -3.00, call: -4.86, raise: 3.39} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.52, evRange: 7.53, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.52}, evA: {fold: -3.00, call: 6.83, raise: 7.53} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.49, evRange: -3.42, rangeWeight: 0.25, freq: {fold: 0.74, call: 0.26}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.49, evRange: -3.42, rangeWeight: 0.25, freq: {fold: 0.74, call: 0.26}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -6.97} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -6.97} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.71, evRange: -2.04, rangeWeight: 0.32, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.72, bet: 0.25}, evA: {check: -2.04, bet: -2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.71, evRange: -2.04, rangeWeight: 0.32, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.72, bet: 0.25}, evA: {check: -2.04, bet: -2.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.29, evRange: 3.96, rangeWeight: 0.31, freq: {check: 0.48, bet: 0.52}, ev: {check: 5.02, bet: 3.62}, evA: {check: 3.98, bet: 3.94} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.04, evRange: -2.56, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.94, bet: -1.03}, evA: {check: -3.27, bet: -2.55} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.04, evRange: -2.56, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.94, bet: -1.03}, evA: {check: -3.27, bet: -2.55} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.73, evRange: -1.10, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: -0.81}, evA: {check: -1.66, bet: -3.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.73, evRange: -1.10, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.75, bet: -0.81}, evA: {check: -1.66, bet: -3.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.46, evRange: 6.73, rangeWeight: 0.37, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.46}, evA: {check: 2.08, bet: 6.73} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.75, evRange: -6.67, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.93, bet: -6.70} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.75, evRange: -6.67, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.93, bet: -6.70} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: -2.03, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: -3.65, raise: -3.09} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: -2.03, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: -3.65, raise: -3.09} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.22, evRange: 8.88, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.22}, evA: {fold: -3.00, call: 4.43, raise: 8.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.00, evRange: -3.33, rangeWeight: 0.03, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.00}, evA: {fold: -3.00, call: -6.60, raise: -5.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.00, evRange: -3.33, rangeWeight: 0.03, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.00}, evA: {fold: -3.00, call: -6.60, raise: -5.89} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.05, evRange: -5.11, rangeWeight: 0.24, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.10} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.05, evRange: -5.11, rangeWeight: 0.24, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.10} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.37, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.64} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.55, evRange: -2.84, rangeWeight: 0.24, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.88, raise: -1.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.55, evRange: -2.84, rangeWeight: 0.24, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.88, raise: -1.06} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.02, evRange: 7.03, rangeWeight: 0.37, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02}, evA: {fold: -3.00, call: 4.86, raise: 7.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.99, evRange: -2.99, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.42}, evA: {fold: -3.00, call: -6.83, raise: 1.23} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.99, evRange: -2.99, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.42}, evA: {fold: -3.00, call: -6.83, raise: 1.23} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.92, evRange: -6.97, rangeWeight: 0.32, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.92, evRange: -6.97, rangeWeight: 0.32, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.74} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 6.97} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.04, evRange: 4.63, rangeWeight: 0.32, freq: {check: 0.17, bet: 0.83}, ev: {check: 4.97, bet: 5.05}, evA: {check: 5.27, bet: 4.50} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.23, evRange: -1.37, rangeWeight: 0.31, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.51, bet: -1.06}, evA: {check: -1.37, bet: -1.36} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.23, evRange: -1.37, rangeWeight: 0.31, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.51, bet: -1.06}, evA: {check: -1.37, bet: -1.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.91, evRange: -1.68, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.67, bet: -1.91}, evA: {check: -3.07, bet: -1.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.91, evRange: -1.68, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.67, bet: -1.91}, evA: {check: -3.07, bet: -1.67} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.44, evRange: 6.71, rangeWeight: 0.22, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.44}, evA: {check: 2.04, bet: 6.71} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.17, evRange: -2.23, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -0.81}, evA: {check: -1.71, bet: -4.09} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.17, evRange: -2.23, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -0.81}, evA: {check: -1.71, bet: -4.09} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.21, evRange: -4.35, rangeWeight: 0.07, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.93, bet: -6.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.21, evRange: -4.35, rangeWeight: 0.07, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.77}, evA: {check: -2.93, bet: -6.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.24, evRange: 9.05, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.24}, evA: {fold: -3.00, call: 5.49, raise: 9.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.74, evRange: -0.89, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: -2.37, raise: -0.86} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.74, evRange: -0.89, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 1.44}, evA: {fold: -3.00, call: -2.37, raise: -0.86} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.01, evRange: -3.21, rangeWeight: 0.03, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.04}, evA: {fold: -3.00, call: -6.60, raise: -4.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.01, evRange: -3.21, rangeWeight: 0.03, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: -3.04}, evA: {fold: -3.00, call: -6.60, raise: -4.89} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.48} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.01, evRange: -5.21, rangeWeight: 0.33, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.27} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.01, evRange: -5.21, rangeWeight: 0.33, freq: {fold: 0.39, call: 0.61}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.01, evRange: -7.03, rangeWeight: 0.07, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.01, evRange: -7.03, rangeWeight: 0.07, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.43, evRange: 7.77, rangeWeight: 0.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.43}, evA: {fold: -3.00, call: 4.76, raise: 7.77} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.57, evRange: -2.88, rangeWeight: 0.33, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: -3.99, raise: -1.99} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.57, evRange: -2.88, rangeWeight: 0.33, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: -3.99, raise: -1.99} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.71, evRange: -2.41, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: 0.59}, evA: {fold: -3.00, call: -6.83, raise: -1.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.71, evRange: -2.41, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: 0.59}, evA: {fold: -3.00, call: -6.83, raise: -1.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.32, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.62} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.93, evRange: -5.81, rangeWeight: 0.31, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.73} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.93, evRange: -5.81, rangeWeight: 0.31, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.73} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -0.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 2.33, rangeWeight: 0.25, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.11}, evA: {check: 2.33, bet: 2.34} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 2.33, rangeWeight: 0.25, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.11}, evA: {check: 2.33, bet: 2.34} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.84, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.14}, evA: {check: -3.84, bet: -5.19} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.84, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.14}, evA: {check: -3.84, bet: -5.19} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.94, evRange: 7.35, rangeWeight: 0.02, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.94, bet: 6.94}, evA: {check: 7.37, bet: 7.35} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.29, evRange: 2.90, rangeWeight: 0.30, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74}, evA: {check: 2.77, bet: 2.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.29, evRange: 2.90, rangeWeight: 0.30, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74}, evA: {check: 2.77, bet: 2.77} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.43, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.49}, evA: {check: -3.47, bet: -4.58} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.43, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.49}, evA: {check: -3.47, bet: -4.58} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 7.03, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 4.88, bet: 7.03} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.24, evRange: 4.46, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26}, evA: {fold: -5.00, call: 3.95, raise: 4.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.24, evRange: 4.46, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26}, evA: {fold: -5.00, call: 3.95, raise: 4.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.49}, evA: {fold: -5.00, call: -6.98, raise: -7.86} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.49}, evA: {fold: -5.00, call: -6.98, raise: -7.86} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.99, evRange: 11.44, rangeWeight: 0.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.75, raise: 11.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.23, evRange: 7.83, rangeWeight: 0.30, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.23, evRange: 7.83, rangeWeight: 0.30, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.20} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.83, evRange: 4.85, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: 4.99, raise: 7.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.83, evRange: 4.85, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: 4.99, raise: 7.11} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.96, evRange: -4.92, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -0.89}, evA: {fold: -5.00, call: -6.25, raise: 2.56} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.96, evRange: -4.92, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -0.89}, evA: {fold: -5.00, call: -6.25, raise: 2.56} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.80, evRange: 9.82, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.80}, evA: {fold: -5.00, call: 8.78, raise: 9.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.12, evRange: -2.84, rangeWeight: 0.25, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.12, evRange: -2.84, rangeWeight: 0.25, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.71} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.08} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.08} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "Q♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.53, evRange: -2.62, rangeWeight: 0.32, freq: {check: 0.30, bet: 0.70}, ev: {check: 0.26, bet: -0.86}, evA: {check: -2.61, bet: -2.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.53, evRange: -2.62, rangeWeight: 0.32, freq: {check: 0.30, bet: 0.70}, ev: {check: 0.26, bet: -0.86}, evA: {check: -2.61, bet: -2.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.02, evRange: 7.89, rangeWeight: 0.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 6.58, bet: 8.03}, evA: {check: 7.87, bet: 7.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.82, evRange: -4.83, rangeWeight: 0.03, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.24}, evA: {check: -4.83, bet: -4.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.82, evRange: -4.83, rangeWeight: 0.03, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.24}, evA: {check: -4.83, bet: -4.82} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: -3.17, rangeWeight: 0.35, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28}, evA: {check: -2.77, bet: -4.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: -3.17, rangeWeight: 0.35, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28}, evA: {check: -2.77, bet: -4.50} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 8.62, rangeWeight: 0.22, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 3.47, bet: 8.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.85, rangeWeight: 0.03, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.46}, evA: {check: -4.88, bet: -8.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.85, rangeWeight: 0.03, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.46}, evA: {check: -4.88, bet: -8.49} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.18, evRange: -2.22, rangeWeight: 0.32, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.34}, evA: {fold: -5.00, call: -3.95, raise: -1.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.18, evRange: -2.22, rangeWeight: 0.32, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.34}, evA: {fold: -5.00, call: -3.95, raise: -1.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.12, evRange: 10.96, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.12}, evA: {fold: -5.00, call: 6.98, raise: 10.96} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.44}, evA: {fold: -5.00, call: -8.75, raise: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.44}, evA: {fold: -5.00, call: -8.75, raise: -4.76} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.44, evRange: -6.65, rangeWeight: 0.35, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.44, evRange: -6.65, rangeWeight: 0.35, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.20} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.02, evRange: -9.09, rangeWeight: 0.03, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.68} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.02, evRange: -9.09, rangeWeight: 0.03, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.47, evRange: -3.81, rangeWeight: 0.35, freq: {fold: 0.38, call: 0.53, raise: 0.09}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: -4.99, raise: -2.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.47, evRange: -3.81, rangeWeight: 0.35, freq: {fold: 0.38, call: 0.53, raise: 0.09}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: -4.99, raise: -2.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.79, evRange: 10.44, rangeWeight: 0.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.79}, evA: {fold: -5.00, call: 6.25, raise: 10.44} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.34, evRange: -4.44, rangeWeight: 0.03, freq: {fold: 0.60, call: 0.00, raise: 0.40}, ev: {fold: -5.00, call: -6.75, raise: -0.84}, evA: {fold: -5.00, call: -8.78, raise: -3.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.34, evRange: -4.44, rangeWeight: 0.03, freq: {fold: 0.60, call: 0.00, raise: 0.40}, ev: {fold: -5.00, call: -6.75, raise: -0.84}, evA: {fold: -5.00, call: -8.78, raise: -3.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.17, evRange: -6.70, rangeWeight: 0.32, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.17, evRange: -6.70, rangeWeight: 0.32, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.71} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.08} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.52, evRange: 7.11, rangeWeight: 0.32, freq: {check: 0.46, bet: 0.54}, ev: {check: 7.92, bet: 7.19}, evA: {check: 7.11, bet: 7.12} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.22, evRange: -4.00, rangeWeight: 0.31, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.39, bet: -1.15}, evA: {check: -4.00, bet: -4.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.22, evRange: -4.00, rangeWeight: 0.31, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.39, bet: -1.15}, evA: {check: -4.00, bet: -4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.26, evRange: -4.98, rangeWeight: 0.03, freq: {check: 0.45, bet: 0.55}, ev: {check: -1.18, bet: -3.14}, evA: {check: -4.96, bet: -4.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.26, evRange: -4.98, rangeWeight: 0.03, freq: {check: 0.45, bet: 0.55}, ev: {check: -1.18, bet: -3.14}, evA: {check: -4.96, bet: -4.99} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.26, evRange: 6.73, rangeWeight: 0.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 9.26}, evA: {check: 3.40, bet: 6.73} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.28, evRange: -2.48, rangeWeight: 0.26, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.67}, evA: {check: -2.85, bet: -3.30} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.28, evRange: -2.48, rangeWeight: 0.26, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.67}, evA: {check: -2.85, bet: -3.30} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -2.63, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.73}, evA: {check: -4.88, bet: -2.62} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -2.63, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.73}, evA: {check: -4.88, bet: -2.62} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.15, evRange: 9.24, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.15}, evA: {fold: -5.00, call: 5.34, raise: 9.24} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.91, evRange: -4.71, rangeWeight: 0.31, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.35}, evA: {fold: -5.00, call: -5.77, raise: -3.27} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.91, evRange: -4.71, rangeWeight: 0.31, freq: {fold: 0.71, call: 0.29, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.35}, evA: {fold: -5.00, call: -5.77, raise: -3.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 2.11, evRange: -1.43, rangeWeight: 0.03, freq: {fold: 0.08, call: 0.00, raise: 0.92}, ev: {fold: -5.00, call: -6.75, raise: 2.73}, evA: {fold: -5.00, call: -8.75, raise: -1.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 2.11, evRange: -1.43, rangeWeight: 0.03, freq: {fold: 0.08, call: 0.00, raise: 0.92}, ev: {fold: -5.00, call: -6.75, raise: 2.73}, evA: {fold: -5.00, call: -8.75, raise: -1.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 8.84} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.15, evRange: -8.71, rangeWeight: 0.26, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.42} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.15, evRange: -8.71, rangeWeight: 0.26, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.42} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.68} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.01, rangeWeight: 0.41, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01}, evA: {fold: -5.00, call: 6.12, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.23, evRange: -4.13, rangeWeight: 0.26, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -5.13, raise: -1.19} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.23, evRange: -4.13, rangeWeight: 0.26, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -5.13, raise: -1.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.58, evRange: -3.09, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.47}, evA: {fold: -5.00, call: -8.78, raise: 1.70} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.58, evRange: -3.09, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.47}, evA: {fold: -5.00, call: -8.78, raise: 1.70} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.32, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 7.72} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.97, evRange: -8.99, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.97, evRange: -8.99, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
      }
    },
      }
    },
      }
    } },
        ] },
      }
    },
      }
    },
      }
    }
  };
})();
