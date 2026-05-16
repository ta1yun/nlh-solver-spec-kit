// Recursive Leduc Tree Structure
// Solver: vanilla CFR, 200k epochs × 30 deals
// Exploitability: 0.37% (1.9 mbb/g)

(function() {
  window.LEDUC_TREE = {
  j: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.10, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.10, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.11, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.11, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.07, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.07, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.17, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.17, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.14, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.16, bet: 0.84}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.14, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.16, bet: 0.84}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.05, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.05, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: -1.14, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: -0.56, bet: -1.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: -1.14, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: -0.56, bet: -1.72} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.31, evRange: -2.27, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.46, bet: -3.09} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.31, evRange: -2.27, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.46, bet: -3.09} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.33, evRange: 2.50, rangeWeight: 0.48, freq: {check: 1.00, bet: 0.00}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.79, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: 0.29}, evA: {check: -0.52, bet: -1.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.79, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: 0.29}, evA: {check: -0.52, bet: -1.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -2.03, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.91, bet: -3.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -2.03, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.91, bet: -3.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.67, evRange: 1.83, rangeWeight: 0.69, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.52, bet: 2.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -0.72, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: -3.19, raise: 0.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -0.72, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: -3.19, raise: 0.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -2.09, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.50, raise: -1.19} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -2.09, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.50, raise: -1.19} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.00, evRange: 3.67, rangeWeight: 0.48, freq: {fold: 0.00, call: 0.50, raise: 0.50}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 1.53, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -3.67, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -3.67, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.72} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.04, evRange: -6.34, rangeWeight: 0.15, freq: {fold: 0.98, call: 0.02}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.15} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.04, evRange: -6.34, rangeWeight: 0.15, freq: {fold: 0.98, call: 0.02}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.15} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.69, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 4.65} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.87, evRange: -0.33, rangeWeight: 0.00, freq: {fold: 0.94, call: 0.06, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: -2.62, raise: 1.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.87, evRange: -0.33, rangeWeight: 0.00, freq: {fold: 0.94, call: 0.06, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: -2.62, raise: 1.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -2.20, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.53, raise: -1.34} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -2.20, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.53, raise: -1.34} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.69, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 2.58, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.08, evRange: -4.24, rangeWeight: 0.13, freq: {fold: 0.30, call: 0.70}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.08, evRange: -4.24, rangeWeight: 0.13, freq: {fold: 0.30, call: 0.70}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.28, evRange: -6.19, rangeWeight: 0.13, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.10} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.28, evRange: -6.19, rangeWeight: 0.13, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.10} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.48, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 2.76} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: 1.98, rangeWeight: 0.10, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 1.92, bet: 2.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: 1.98, rangeWeight: 0.10, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 1.92, bet: 2.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.51, evRange: 2.50, rangeWeight: 0.09, freq: {check: 0.47, bet: 0.53}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.59, evRange: -0.60, rangeWeight: 0.36, freq: {check: 0.82, bet: 0.18}, ev: {check: -1.31, bet: -2.87}, evA: {check: -0.13, bet: -1.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.59, evRange: -0.60, rangeWeight: 0.36, freq: {check: 0.82, bet: 0.18}, ev: {check: -1.31, bet: -2.87}, evA: {check: -0.13, bet: -1.07} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: 1.18, rangeWeight: 0.00, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.52, bet: 1.67} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: 1.18, rangeWeight: 0.00, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.52, bet: 1.67} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.67, evRange: 1.83, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.91, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.91, evRange: -1.18, rangeWeight: 0.45, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.52, bet: -1.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.91, evRange: -1.18, rangeWeight: 0.45, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.52, bet: -1.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.02, evRange: 3.04, rangeWeight: 0.10, freq: {fold: 0.57, call: 0.43, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 3.19, raise: 6.10} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.02, evRange: 3.04, rangeWeight: 0.10, freq: {fold: 0.57, call: 0.43, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 3.19, raise: 6.10} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.50, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.07, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -1.53, raise: 1.68} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.07, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -1.53, raise: 1.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: 0.58, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: 0.58, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.72} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.15} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -4.50, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.65} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -4.50, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.65} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.76, evRange: 2.67, rangeWeight: 0.00, freq: {fold: 0.91, call: 0.08, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 2.62, raise: 5.58} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.76, evRange: 2.67, rangeWeight: 0.00, freq: {fold: 0.91, call: 0.08, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 2.62, raise: 5.58} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.99, evRange: 3.67, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.53, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.91, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -2.58, raise: 0.50} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.91, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -2.58, raise: 0.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: 1.10, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: 1.10, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.74} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -3.32, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -3.32, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.76} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.67, evRange: 2.50, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.50, evRange: 2.24, rangeWeight: 0.09, freq: {check: 0.43, bet: 0.57}, ev: {check: 0.77, bet: 0.29}, evA: {check: 2.13, bet: 2.35} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.50, evRange: 2.24, rangeWeight: 0.09, freq: {check: 0.43, bet: 0.57}, ev: {check: 0.77, bet: 0.29}, evA: {check: 2.13, bet: 2.35} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.43, evRange: -0.93, rangeWeight: 0.36, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.31, bet: -2.87}, evA: {check: -0.39, bet: -1.47} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.43, evRange: -0.93, rangeWeight: 0.36, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.31, bet: -2.87}, evA: {check: -0.39, bet: -1.47} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.65, evRange: 1.83, rangeWeight: 0.00, freq: {check: 0.01, bet: 0.99}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.90, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.25, evRange: 1.17, rangeWeight: 0.09, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.52, bet: 1.66} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.25, evRange: 1.17, rangeWeight: 0.09, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.52, bet: 1.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.76, evRange: -1.18, rangeWeight: 0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.52, bet: -1.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.76, evRange: -1.18, rangeWeight: 0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.52, bet: -1.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 5.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 3.35, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 4.50, raise: 6.55} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 3.35, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 4.50, raise: 6.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.47, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -1.53, raise: 1.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.47, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -1.53, raise: 1.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.92, evRange: 2.00, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.13} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: 0.57, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.69} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: 0.57, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -4.50, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.65} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -4.50, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.65} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.92, evRange: 3.67, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.01, raise: 0.98}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.52, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.62, evRange: 2.66, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 2.61, raise: 5.57} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.62, evRange: 2.66, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 2.61, raise: 5.57} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.91, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -2.58, raise: 0.50} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.91, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -2.58, raise: 0.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.01, evRange: 1.55, rangeWeight: 0.09, freq: {fold: 0.03, call: 0.97}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 8.10} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.01, evRange: 1.55, rangeWeight: 0.09, freq: {fold: 0.03, call: 0.97}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 8.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -3.88, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -3.88, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.76} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.06, evRange: 0.17, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.29, raise: 0.71}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.06, evRange: 0.17, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.29, raise: 0.71}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.26, evRange: 0.17, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.83, raise: 0.17}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.26, evRange: 0.17, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.83, raise: 0.17}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.92, evRange: 0.17, rangeWeight: 0.33, freq: {fold: 0.95, call: 0.03, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.92, evRange: 0.17, rangeWeight: 0.33, freq: {fold: 0.95, call: 0.03, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.98, evRange: 1.77, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 1.76, bet: 1.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.98, evRange: 1.77, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 1.76, bet: 1.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.62, evRange: -2.87, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.54, bet: -3.21} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.62, evRange: -2.87, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.54, bet: -3.21} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.98, evRange: 3.83, rangeWeight: 0.05, freq: {check: 0.05, bet: 0.95}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.76, evRange: 2.55, rangeWeight: 0.25, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.90, bet: 2.89} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.76, evRange: 2.55, rangeWeight: 0.25, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.90, bet: 2.89} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.75, evRange: -1.76, rangeWeight: 0.21, freq: {check: 0.52, bet: 0.48}, ev: {check: -2.25, bet: -3.29}, evA: {check: -1.52, bet: -2.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.75, evRange: -1.76, rangeWeight: 0.21, freq: {check: 0.52, bet: 0.48}, ev: {check: -2.25, bet: -3.29}, evA: {check: -1.52, bet: -2.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.84, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.75, evRange: 2.11, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 2.34, raise: 6.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.75, evRange: 2.11, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 2.34, raise: 6.07} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.99, evRange: -2.88, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.28, raise: -0.52} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.99, evRange: -2.88, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.28, raise: -0.52} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.48, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: 0.54, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: 0.54, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.98} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -6.07, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.58} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -6.07, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.58} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.41} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.51, evRange: 3.23, rangeWeight: 0.25, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 4.44, raise: 7.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.51, evRange: 3.23, rangeWeight: 0.25, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 4.44, raise: 7.54} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -1.78, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -3.55, raise: 0.93} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -1.78, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -3.55, raise: 0.93} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.42, evRange: 4.33, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.29, raise: 0.71}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.63, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -0.93, rangeWeight: 0.13, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.68} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -0.93, rangeWeight: 0.13, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.68} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.52, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.52, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.05, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.19} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.89, evRange: -0.45, rangeWeight: 0.18, freq: {check: 0.11, bet: 0.89}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.29, bet: -0.60} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.89, evRange: -0.45, rangeWeight: 0.18, freq: {check: 0.11, bet: 0.89}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.29, bet: -0.60} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.83, rangeWeight: 0.49, freq: {check: 0.01, bet: 0.99}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -3.55, rangeWeight: 0.08, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.16, bet: -3.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -3.55, rangeWeight: 0.08, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.16, bet: -3.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.79, evRange: -1.57, rangeWeight: 0.29, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.90, bet: -1.90} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.79, evRange: -1.57, rangeWeight: 0.29, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.90, bet: -1.90} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 1.52, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -3.37, rangeWeight: 0.09, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -3.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -3.37, rangeWeight: 0.09, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -3.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -0.27, rangeWeight: 0.18, freq: {fold: 0.46, call: 0.54, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.34, raise: 2.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -0.27, rangeWeight: 0.18, freq: {fold: 0.46, call: 0.54, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.34, raise: 2.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.49, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.28, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.84, evRange: -3.61, rangeWeight: 0.08, freq: {fold: 0.51, call: 0.00, raise: 0.49}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.48, raise: -1.48} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.84, evRange: -3.61, rangeWeight: 0.08, freq: {fold: 0.51, call: 0.00, raise: 0.49}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.48, raise: -1.48} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -5.47, evRange: -5.78, rangeWeight: 0.29, freq: {fold: 0.84, call: 0.16}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -5.47, evRange: -5.78, rangeWeight: 0.29, freq: {fold: 0.84, call: 0.16}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.98} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 5.58} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.55, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.55, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.41} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.90, evRange: -1.56, rangeWeight: 0.29, freq: {fold: 0.56, call: 0.44, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -4.44, raise: 1.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.90, evRange: -1.56, rangeWeight: 0.29, freq: {fold: 0.56, call: 0.44, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -4.44, raise: 1.22} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.00, evRange: 4.33, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.50, raise: 0.50}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 3.55, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.81, evRange: -3.66, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.63, raise: -1.55} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.81, evRange: -3.66, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.63, raise: -1.55} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -7.00, evRange: -4.07, rangeWeight: 0.18, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.68} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -7.00, evRange: -4.07, rangeWeight: 0.18, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.68} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.49, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.30} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.48, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.48, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.19} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.74, evRange: 3.83, rangeWeight: 0.14, freq: {check: 0.79, bet: 0.21}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.98, evRange: -0.69, rangeWeight: 0.37, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.52, bet: -0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.98, evRange: -0.69, rangeWeight: 0.37, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.52, bet: -0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.65, evRange: -3.53, rangeWeight: 0.06, freq: {check: 0.93, bet: 0.07}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.15, bet: -3.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.65, evRange: -3.53, rangeWeight: 0.06, freq: {check: 0.93, bet: 0.07}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.15, bet: -3.92} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.59, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.79, evRange: -0.20, rangeWeight: 0.26, freq: {check: 0.67, bet: 0.33}, ev: {check: 0.75, bet: 0.87}, evA: {check: -0.61, bet: -0.30} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.79, evRange: -0.20, rangeWeight: 0.26, freq: {check: 0.67, bet: 0.33}, ev: {check: 0.75, bet: 0.87}, evA: {check: -0.61, bet: -0.30} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.80, evRange: -3.45, rangeWeight: 0.09, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -4.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.80, evRange: -3.45, rangeWeight: 0.09, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -4.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.14, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.86, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.34, evRange: -0.53, rangeWeight: 0.37, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.87, raise: 2.57} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.34, evRange: -0.53, rangeWeight: 0.37, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.87, raise: 2.57} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.86, evRange: -3.59, rangeWeight: 0.06, freq: {fold: 0.94, call: 0.00, raise: 0.06}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.48, raise: -1.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.86, evRange: -3.59, rangeWeight: 0.06, freq: {fold: 0.94, call: 0.00, raise: 0.06}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.48, raise: -1.46} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 9.51} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -3.67, rangeWeight: 0.26, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.24} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -3.67, rangeWeight: 0.26, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.24} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.66, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.66, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.41} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.05, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.86, evRange: 0.03, rangeWeight: 0.26, freq: {fold: 0.55, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -1.43, raise: 3.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.86, evRange: 0.03, rangeWeight: 0.26, freq: {fold: 0.55, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -1.43, raise: 3.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.82, evRange: -3.75, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.63, raise: -1.66} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.82, evRange: -3.75, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.63, raise: -1.66} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.14, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -4.43, rangeWeight: 0.37, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.52} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -4.43, rangeWeight: 0.37, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.52} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.46, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.46, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.19} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.44, rangeWeight: 0.39, freq: {check: 0.93, bet: 0.07}, ev: {check: 1.19, bet: 1.46}, evA: {check: 2.29, bet: 2.58} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.44, rangeWeight: 0.39, freq: {check: 0.93, bet: 0.07}, ev: {check: 1.19, bet: 1.46}, evA: {check: 2.29, bet: 2.58} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.89, evRange: -3.71, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.80, bet: -3.61} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.89, evRange: -3.71, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.80, bet: -3.61} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.31, evRange: 1.31, rangeWeight: 0.25, freq: {check: 0.70, bet: 0.30}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.83, bet: 1.41} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.31, evRange: 1.31, rangeWeight: 0.25, freq: {check: 0.70, bet: 0.30}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.83, bet: 1.41} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.48, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.51, bet: -4.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.48, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.51, bet: -4.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.80, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: 2.25, rangeWeight: 0.39, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 3.01, raise: 7.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: 2.25, rangeWeight: 0.39, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 3.01, raise: 7.54} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -3.94, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.79, raise: -0.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -3.94, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.79, raise: -0.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.15, evRange: 5.00, rangeWeight: 0.04, freq: {fold: 0.10, call: 0.10, raise: 0.79}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.33, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.25, evRange: -2.94, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.25, evRange: -2.94, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.16} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.55, evRange: -10.33, rangeWeight: 0.21, freq: {fold: 0.27, call: 0.73}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.72} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.55, evRange: -10.33, rangeWeight: 0.21, freq: {fold: 0.27, call: 0.73}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.72} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.31, evRange: 1.08, rangeWeight: 0.25, freq: {fold: 0.16, call: 0.78, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 1.50, raise: 6.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.31, evRange: 1.08, rangeWeight: 0.25, freq: {fold: 0.16, call: 0.78, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 1.50, raise: 6.06} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.88, evRange: -4.80, rangeWeight: 0.21, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.11, raise: -1.33} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.88, evRange: -4.80, rangeWeight: 0.21, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.11, raise: -1.33} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.65, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.30, evRange: -1.46, rangeWeight: 0.39, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.30, evRange: -1.46, rangeWeight: 0.39, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.35} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.25, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.25, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.04} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.19, evRange: -0.49, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.19, bet: 1.46}, evA: {check: -0.61, bet: -0.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.19, evRange: -0.49, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.19, bet: 1.46}, evA: {check: -0.61, bet: -0.37} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.06, evRange: 5.17, rangeWeight: 0.10, freq: {check: 0.82, bet: 0.18}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.89, evRange: -4.60, rangeWeight: 0.04, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.69, bet: -4.51} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.89, evRange: -4.60, rangeWeight: 0.04, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.69, bet: -4.51} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.38, evRange: -0.05, rangeWeight: 0.29, freq: {check: 0.37, bet: 0.63}, ev: {check: 1.25, bet: 1.46}, evA: {check: -0.83, bet: 0.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.38, evRange: -0.05, rangeWeight: 0.29, freq: {check: 0.37, bet: 0.63}, ev: {check: 1.25, bet: 1.46}, evA: {check: -0.83, bet: 0.03} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.51, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.75, evRange: -4.78, rangeWeight: 0.09, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.80, bet: -4.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.75, evRange: -4.78, rangeWeight: 0.09, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.80, bet: -4.78} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.30, evRange: -0.71, rangeWeight: 0.41, freq: {fold: 0.28, call: 0.69, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -3.01, raise: 3.82} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.30, evRange: -0.71, rangeWeight: 0.41, freq: {fold: 0.28, call: 0.69, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -3.01, raise: 3.82} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.79, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.46, evRange: -4.85, rangeWeight: 0.04, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.33, raise: -1.39} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.46, evRange: -4.85, rangeWeight: 0.04, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.33, raise: -1.39} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.03, evRange: -4.68, rangeWeight: 0.29, freq: {fold: 0.59, call: 0.41}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.03, evRange: -4.68, rangeWeight: 0.29, freq: {fold: 0.59, call: 0.41}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 11.72} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.72, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.72, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.28, evRange: -0.31, rangeWeight: 0.29, freq: {fold: 0.35, call: 0.65, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -1.50, raise: 4.32} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.28, evRange: -0.31, rangeWeight: 0.29, freq: {fold: 0.35, call: 0.65, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -1.50, raise: 4.32} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.11, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.81, evRange: -5.11, rangeWeight: 0.09, freq: {fold: 0.74, call: 0.00, raise: 0.26}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.65, raise: -1.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.81, evRange: -5.11, rangeWeight: 0.09, freq: {fold: 0.74, call: 0.00, raise: 0.26}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.65, raise: -1.72} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.19, evRange: -5.18, rangeWeight: 0.41, freq: {fold: 0.44, call: 0.56}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.19, evRange: -5.18, rangeWeight: 0.41, freq: {fold: 0.44, call: 0.56}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.35} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.39, rangeWeight: 0.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.39, rangeWeight: 0.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.04} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.59, freq: {check: 0.01, bet: 0.99}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.44, evRange: -0.82, rangeWeight: 0.14, freq: {check: 0.06, bet: 0.94}, ev: {check: 1.19, bet: 1.46}, evA: {check: -0.94, bet: -0.70} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.44, evRange: -0.82, rangeWeight: 0.14, freq: {check: 0.06, bet: 0.94}, ev: {check: 1.19, bet: 1.46}, evA: {check: -0.94, bet: -0.70} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.71, evRange: -4.58, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.66, bet: -4.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.71, evRange: -4.58, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.66, bet: -4.49} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 2.03, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.29, evRange: -2.73, rangeWeight: 0.26, freq: {check: 0.82, bet: 0.18}, ev: {check: 1.25, bet: 1.46}, evA: {check: -3.68, bet: -2.69} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.29, evRange: -2.73, rangeWeight: 0.26, freq: {check: 0.82, bet: 0.18}, ev: {check: 1.25, bet: 1.46}, evA: {check: -3.68, bet: -2.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -4.68, rangeWeight: 0.09, freq: {check: 0.52, bet: 0.48}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.80, bet: -4.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -4.68, rangeWeight: 0.09, freq: {check: 0.52, bet: 0.48}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.80, bet: -4.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.25, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.23, evRange: -1.04, rangeWeight: 0.14, freq: {fold: 0.34, call: 0.66, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -3.69, raise: 3.41} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.23, evRange: -1.04, rangeWeight: 0.14, freq: {fold: 0.34, call: 0.66, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -3.69, raise: 3.41} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.94, evRange: -4.82, rangeWeight: 0.06, freq: {fold: 0.96, call: 0.02, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.33, raise: -1.36} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.94, evRange: -4.82, rangeWeight: 0.06, freq: {fold: 0.96, call: 0.02, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.33, raise: -1.36} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 5.27} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.99, evRange: -8.10, rangeWeight: 0.26, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.57} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.99, evRange: -8.10, rangeWeight: 0.26, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.57} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.59, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.59, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 10.73, evRange: 5.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.13, raise: 0.87}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 3.65, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.95, evRange: -3.03, rangeWeight: 0.26, freq: {fold: 0.72, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -6.63, raise: 0.90} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.95, evRange: -3.03, rangeWeight: 0.26, freq: {fold: 0.72, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -6.63, raise: 0.90} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.94, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 0.77, call: 0.00, raise: 0.23}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.65, raise: -1.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.94, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 0.77, call: 0.00, raise: 0.23}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.65, raise: -1.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.78, evRange: -5.59, rangeWeight: 0.14, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.34} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.78, evRange: -5.59, rangeWeight: 0.14, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.34} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.36, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.36, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.04} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.89, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.89, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.57, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.57, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.74, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.74, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.97, evRange: 2.39, rangeWeight: 0.24, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.98, bet: 0.87}, evA: {check: 2.33, bet: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.97, evRange: 2.39, rangeWeight: 0.24, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.98, bet: 0.87}, evA: {check: 2.33, bet: 2.45} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.61, evRange: -2.38, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.08, bet: -2.68} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.61, evRange: -2.38, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.08, bet: -2.68} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.95, evRange: 3.83, rangeWeight: 0.02, freq: {check: 0.14, bet: 0.86}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.80, evRange: 2.12, rangeWeight: 0.19, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.70, bet: 2.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.80, evRange: 2.12, rangeWeight: 0.19, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.70, bet: 2.40} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.25, evRange: -2.51, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.06, bet: -2.98} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.25, evRange: -2.51, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.06, bet: -2.98} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.93, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.59, evRange: 2.78, rangeWeight: 0.24, freq: {fold: 0.04, call: 0.95, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 3.64, raise: 6.95} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.59, evRange: 2.78, rangeWeight: 0.24, freq: {fold: 0.04, call: 0.95, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 3.64, raise: 6.95} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -2.35, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -4.43, raise: 0.18} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -2.35, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -4.43, raise: 0.18} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.01, evRange: -0.12, rangeWeight: 0.19, freq: {fold: 0.18, call: 0.82}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.01, evRange: -0.12, rangeWeight: 0.19, freq: {fold: 0.18, call: 0.82}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.23} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.22, rangeWeight: 0.28, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.55} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.22, rangeWeight: 0.28, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.55} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.74} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.73, evRange: 2.73, rangeWeight: 0.19, freq: {fold: 0.23, call: 0.75, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 3.96, raise: 6.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.73, evRange: 2.73, rangeWeight: 0.19, freq: {fold: 0.23, call: 0.75, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 3.96, raise: 6.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.65, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -4.80, raise: -0.22} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.65, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -4.80, raise: -0.22} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.83, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.39, evRange: -0.05, rangeWeight: 0.24, freq: {fold: 0.63, call: 0.37}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.39, evRange: -0.05, rangeWeight: 0.24, freq: {fold: 0.63, call: 0.37}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.72} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -6.82, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -6.96} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -6.82, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -6.96} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.37} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.98, evRange: -1.16, rangeWeight: 0.31, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.95, bet: -1.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.98, evRange: -1.16, rangeWeight: 0.31, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.95, bet: -1.37} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.31, freq: {check: 0.51, bet: 0.49}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.29, evRange: -3.60, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.21, bet: -4.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.29, evRange: -3.60, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.21, bet: -4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.75, evRange: -1.40, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.70, bet: -1.70} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.75, evRange: -1.40, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.70, bet: -1.70} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.37, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.06, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -3.55, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.93, bet: -4.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -3.55, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.93, bet: -4.20} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.73, evRange: -1.03, rangeWeight: 0.31, freq: {fold: 0.52, call: 0.48, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.64, raise: 1.92} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.73, evRange: -1.03, rangeWeight: 0.31, freq: {fold: 0.52, call: 0.48, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.64, raise: 1.92} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.43, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.79, evRange: -3.66, rangeWeight: 0.03, freq: {fold: 0.91, call: 0.00, raise: 0.09}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.60, raise: -1.56} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.79, evRange: -3.66, rangeWeight: 0.03, freq: {fold: 0.91, call: 0.00, raise: 0.09}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.60, raise: -1.56} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.89, evRange: -5.52, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.89, evRange: -5.52, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.23} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.37, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.83, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.83, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.74} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.57, evRange: -1.37, rangeWeight: 0.24, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.96, raise: 1.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.57, evRange: -1.37, rangeWeight: 0.24, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.96, raise: 1.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.37, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.80, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.00, evRange: -3.87, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.83, raise: -1.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.00, evRange: -3.87, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.83, raise: -1.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.45, evRange: -5.08, rangeWeight: 0.31, freq: {fold: 0.03, call: 0.97}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.45, evRange: -5.08, rangeWeight: 0.31, freq: {fold: 0.03, call: 0.97}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.72} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 6.96} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.56, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.56, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.94, evRange: 3.83, rangeWeight: 0.31, freq: {check: 0.18, bet: 0.82}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.93, evRange: -0.52, rangeWeight: 0.31, freq: {check: 0.56, bet: 0.44}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.36, bet: -0.68} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.93, evRange: -0.52, rangeWeight: 0.31, freq: {check: 0.56, bet: 0.44}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.36, bet: -0.68} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.29, evRange: -3.64, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.25, bet: -4.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.29, evRange: -3.64, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.25, bet: -4.04} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.06, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.80, evRange: -1.39, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.69, bet: -1.69} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.80, evRange: -1.39, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.69, bet: -1.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -3.55, rangeWeight: 0.07, freq: {check: 0.63, bet: 0.37}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.93, bet: -4.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -3.55, rangeWeight: 0.07, freq: {check: 0.63, bet: 0.37}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.93, bet: -4.20} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.50, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.41, evRange: -0.34, rangeWeight: 0.31, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.34, raise: 2.83} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.41, evRange: -0.34, rangeWeight: 0.31, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.34, raise: 2.83} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.64, evRange: -3.70, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 0.99}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.60, raise: -1.61} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.64, evRange: -3.70, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 0.99}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.60, raise: -1.61} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.21, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.57} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.88, evRange: -5.51, rangeWeight: 0.33, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.20} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.88, evRange: -5.51, rangeWeight: 0.33, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.83, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.83, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.74} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.21, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.82, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.52, evRange: -1.36, rangeWeight: 0.33, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.95, raise: 1.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.52, evRange: -1.36, rangeWeight: 0.33, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.95, raise: 1.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.15, evRange: -3.87, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.83, raise: -1.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.15, evRange: -3.87, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.83, raise: -1.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -5.02, evRange: -4.17, rangeWeight: 0.31, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.68} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -5.02, evRange: -4.17, rangeWeight: 0.31, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.68} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.61, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.61, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.61, rangeWeight: 0.24, freq: {check: 0.92, bet: 0.08}, ev: {check: 1.19, bet: 1.46}, evA: {check: 2.46, bet: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.61, rangeWeight: 0.24, freq: {check: 0.92, bet: 0.08}, ev: {check: 1.19, bet: 1.46}, evA: {check: 2.46, bet: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.90, evRange: -3.88, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.97, bet: -3.79} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.90, evRange: -3.88, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.97, bet: -3.79} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.02, freq: {check: 0.01, bet: 0.99}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.31, evRange: 3.21, rangeWeight: 0.30, freq: {check: 0.72, bet: 0.28}, ev: {check: 1.25, bet: 1.46}, evA: {check: 2.83, bet: 3.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.31, evRange: 3.21, rangeWeight: 0.30, freq: {check: 0.72, bet: 0.28}, ev: {check: 1.25, bet: 1.46}, evA: {check: 2.83, bet: 3.35} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.35, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -3.43, bet: -3.33} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.35, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -3.43, bet: -3.33} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.88, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.26, evRange: 2.42, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 4.00, raise: 7.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.26, evRange: 2.42, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 4.00, raise: 7.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -4.12, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.96, raise: -0.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -4.12, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.96, raise: -0.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.75, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.08, evRange: -0.50, rangeWeight: 0.30, freq: {fold: 0.01, call: 0.99}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.08, evRange: -0.50, rangeWeight: 0.30, freq: {fold: 0.01, call: 0.99}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.36} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.04, evRange: -8.89, rangeWeight: 0.19, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -8.92} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.04, evRange: -8.89, rangeWeight: 0.19, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -8.92} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.69} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.89, evRange: 3.01, rangeWeight: 0.30, freq: {fold: 0.07, call: 0.89, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 5.09, raise: 8.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.89, evRange: 3.01, rangeWeight: 0.30, freq: {fold: 0.07, call: 0.89, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 5.09, raise: 8.50} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -3.66, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.17, raise: 0.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -3.66, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.17, raise: 0.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.79, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.10, evRange: -1.25, rangeWeight: 0.24, freq: {fold: 0.52, call: 0.48}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.10, evRange: -1.25, rangeWeight: 0.24, freq: {fold: 0.52, call: 0.48}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.77} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.47, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.05} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.47, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.05} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.64} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.38, evRange: -1.23, rangeWeight: 0.31, freq: {check: 0.29, bet: 0.71}, ev: {check: 1.19, bet: 1.46}, evA: {check: -1.35, bet: -1.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.38, evRange: -1.23, rangeWeight: 0.31, freq: {check: 0.29, bet: 0.71}, ev: {check: 1.19, bet: 1.46}, evA: {check: -1.35, bet: -1.12} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.32, evRange: 5.17, rangeWeight: 0.31, freq: {check: 0.04, bet: 0.96}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.87, evRange: -4.91, rangeWeight: 0.03, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.99, bet: -4.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.87, evRange: -4.91, rangeWeight: 0.03, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.99, bet: -4.82} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.36, evRange: -1.79, rangeWeight: 0.35, freq: {check: 0.48, bet: 0.52}, ev: {check: 1.25, bet: 1.46}, evA: {check: -2.83, bet: -1.73} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.36, evRange: -1.79, rangeWeight: 0.35, freq: {check: 0.48, bet: 0.52}, ev: {check: 1.25, bet: 1.46}, evA: {check: -2.83, bet: -1.73} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.23, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 3.43, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.75, evRange: -4.84, rangeWeight: 0.03, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.88, bet: -4.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.75, evRange: -4.84, rangeWeight: 0.03, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.88, bet: -4.84} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.89, evRange: -1.45, rangeWeight: 0.31, freq: {fold: 0.23, call: 0.70, raise: 0.07}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -4.00, raise: 2.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.89, evRange: -1.45, rangeWeight: 0.31, freq: {fold: 0.23, call: 0.70, raise: 0.07}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -4.00, raise: 2.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.96, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.16, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.75, raise: -1.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.16, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.75, raise: -1.78} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.43, evRange: -6.89, rangeWeight: 0.35, freq: {fold: 0.55, call: 0.45}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.43, evRange: -6.89, rangeWeight: 0.35, freq: {fold: 0.55, call: 0.45}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.36} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 8.92} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -10.80, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -10.80, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.69} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.19, evRange: -2.07, rangeWeight: 0.35, freq: {fold: 0.37, call: 0.57, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.09, raise: 2.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.19, evRange: -2.07, rangeWeight: 0.35, freq: {fold: 0.37, call: 0.57, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.09, raise: 2.11} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.17, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.76, evRange: -5.17, rangeWeight: 0.03, freq: {fold: 0.51, call: 0.00, raise: 0.49}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.79, raise: -1.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.76, evRange: -5.17, rangeWeight: 0.03, freq: {fold: 0.51, call: 0.00, raise: 0.49}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.79, raise: -1.80} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.15, evRange: -6.12, rangeWeight: 0.31, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.15, evRange: -6.12, rangeWeight: 0.31, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.77} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.78, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.78, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.31, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.22, evRange: -2.24, rangeWeight: 0.31, freq: {check: 0.89, bet: 0.11}, ev: {check: 1.19, bet: 1.46}, evA: {check: -2.34, bet: -2.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.22, evRange: -2.24, rangeWeight: 0.31, freq: {check: 0.89, bet: 0.11}, ev: {check: 1.19, bet: 1.46}, evA: {check: -2.34, bet: -2.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -4.88, rangeWeight: 0.03, freq: {check: 0.47, bet: 0.53}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.97, bet: -4.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -4.88, rangeWeight: 0.03, freq: {check: 0.47, bet: 0.53}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.97, bet: -4.80} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.40, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 3.44, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.34, evRange: -1.78, rangeWeight: 0.26, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: -2.82, bet: -1.72} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.34, evRange: -1.78, rangeWeight: 0.26, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: -2.82, bet: -1.72} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.71, evRange: -4.84, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.88, bet: -4.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.71, evRange: -4.84, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.88, bet: -4.84} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 5.36, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.82, evRange: -2.46, rangeWeight: 0.31, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.77, raise: 1.61} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.82, evRange: -2.46, rangeWeight: 0.31, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.77, raise: 1.61} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.06, evRange: -5.13, rangeWeight: 0.03, freq: {fold: 0.15, call: 0.00, raise: 0.85}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.75, raise: -1.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.06, evRange: -5.13, rangeWeight: 0.03, freq: {fold: 0.15, call: 0.00, raise: 0.85}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.75, raise: -1.74} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.40, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 8.94} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.19, evRange: -6.88, rangeWeight: 0.26, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.19, evRange: -6.88, rangeWeight: 0.26, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.80, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.80, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.69} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 10.99, evRange: 5.00, rangeWeight: 0.40, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.19, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.42, evRange: -2.06, rangeWeight: 0.26, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.08, raise: 2.12} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.42, evRange: -2.06, rangeWeight: 0.26, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.08, raise: 2.12} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.42, evRange: -5.17, rangeWeight: 0.04, freq: {fold: 0.66, call: 0.00, raise: 0.34}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.79, raise: -1.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.42, evRange: -5.17, rangeWeight: 0.04, freq: {fold: 0.66, call: 0.00, raise: 0.34}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.79, raise: -1.80} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 7.74} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -9.00, evRange: -7.39, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -9.00, evRange: -7.39, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.74, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.74, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.10, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.10, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.11, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.11, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.07, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.07, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.17, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.17, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.14, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.16, bet: 0.84}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.14, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.16, bet: 0.84}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.05, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.05, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: -1.14, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: -0.56, bet: -1.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: -1.14, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: -0.56, bet: -1.72} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.31, evRange: -2.27, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.46, bet: -3.09} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.31, evRange: -2.27, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.46, bet: -3.09} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.33, evRange: 2.50, rangeWeight: 0.48, freq: {check: 1.00, bet: 0.00}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.79, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: 0.29}, evA: {check: -0.52, bet: -1.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.79, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: 0.29}, evA: {check: -0.52, bet: -1.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -2.03, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.91, bet: -3.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -2.03, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.91, bet: -3.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.67, evRange: 1.83, rangeWeight: 0.69, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.52, bet: 2.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -0.72, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: -3.19, raise: 0.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -0.72, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: -3.19, raise: 0.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -2.09, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.50, raise: -1.19} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -2.09, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.50, raise: -1.19} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.00, evRange: 3.67, rangeWeight: 0.48, freq: {fold: 0.00, call: 0.50, raise: 0.50}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 1.53, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -3.67, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -3.67, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.72} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.04, evRange: -6.34, rangeWeight: 0.15, freq: {fold: 0.98, call: 0.02}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.15} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.04, evRange: -6.34, rangeWeight: 0.15, freq: {fold: 0.98, call: 0.02}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.15} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.69, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 4.65} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.87, evRange: -0.33, rangeWeight: 0.00, freq: {fold: 0.94, call: 0.06, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: -2.62, raise: 1.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.87, evRange: -0.33, rangeWeight: 0.00, freq: {fold: 0.94, call: 0.06, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: -2.62, raise: 1.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -2.20, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.53, raise: -1.34} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -2.20, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.53, raise: -1.34} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.69, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 2.58, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.08, evRange: -4.24, rangeWeight: 0.13, freq: {fold: 0.30, call: 0.70}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.08, evRange: -4.24, rangeWeight: 0.13, freq: {fold: 0.30, call: 0.70}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.28, evRange: -6.19, rangeWeight: 0.13, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.10} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.28, evRange: -6.19, rangeWeight: 0.13, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.10} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.48, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 2.76} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: 1.98, rangeWeight: 0.10, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 1.92, bet: 2.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: 1.98, rangeWeight: 0.10, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 1.92, bet: 2.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.51, evRange: 2.50, rangeWeight: 0.09, freq: {check: 0.47, bet: 0.53}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.59, evRange: -0.60, rangeWeight: 0.36, freq: {check: 0.82, bet: 0.18}, ev: {check: -1.31, bet: -2.87}, evA: {check: -0.13, bet: -1.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.59, evRange: -0.60, rangeWeight: 0.36, freq: {check: 0.82, bet: 0.18}, ev: {check: -1.31, bet: -2.87}, evA: {check: -0.13, bet: -1.07} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: 1.18, rangeWeight: 0.00, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.52, bet: 1.67} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: 1.18, rangeWeight: 0.00, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.52, bet: 1.67} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.67, evRange: 1.83, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.91, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.91, evRange: -1.18, rangeWeight: 0.45, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.52, bet: -1.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.91, evRange: -1.18, rangeWeight: 0.45, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.52, bet: -1.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.02, evRange: 3.04, rangeWeight: 0.10, freq: {fold: 0.57, call: 0.43, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 3.19, raise: 6.10} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.02, evRange: 3.04, rangeWeight: 0.10, freq: {fold: 0.57, call: 0.43, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 3.19, raise: 6.10} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.50, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.07, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -1.53, raise: 1.68} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.07, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -1.53, raise: 1.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: 0.58, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: 0.58, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.72} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.15} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -4.50, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.65} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -4.50, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.65} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.76, evRange: 2.67, rangeWeight: 0.00, freq: {fold: 0.91, call: 0.08, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 2.62, raise: 5.58} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.76, evRange: 2.67, rangeWeight: 0.00, freq: {fold: 0.91, call: 0.08, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 2.62, raise: 5.58} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.99, evRange: 3.67, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.53, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.91, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -2.58, raise: 0.50} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.91, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -2.58, raise: 0.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: 1.10, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: 1.10, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.74} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -3.32, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -3.32, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.76} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.67, evRange: 2.50, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.50, evRange: 2.24, rangeWeight: 0.09, freq: {check: 0.43, bet: 0.57}, ev: {check: 0.77, bet: 0.29}, evA: {check: 2.13, bet: 2.35} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.50, evRange: 2.24, rangeWeight: 0.09, freq: {check: 0.43, bet: 0.57}, ev: {check: 0.77, bet: 0.29}, evA: {check: 2.13, bet: 2.35} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.43, evRange: -0.93, rangeWeight: 0.36, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.31, bet: -2.87}, evA: {check: -0.39, bet: -1.47} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.43, evRange: -0.93, rangeWeight: 0.36, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.31, bet: -2.87}, evA: {check: -0.39, bet: -1.47} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.65, evRange: 1.83, rangeWeight: 0.00, freq: {check: 0.01, bet: 0.99}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.90, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.25, evRange: 1.17, rangeWeight: 0.09, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.52, bet: 1.66} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.25, evRange: 1.17, rangeWeight: 0.09, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.52, bet: 1.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.76, evRange: -1.18, rangeWeight: 0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.52, bet: -1.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.76, evRange: -1.18, rangeWeight: 0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.52, bet: -1.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 5.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 3.35, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 4.50, raise: 6.55} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 3.35, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 4.50, raise: 6.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.47, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -1.53, raise: 1.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.47, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -1.53, raise: 1.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.92, evRange: 2.00, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.13} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: 0.57, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.69} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: 0.57, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -4.50, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.65} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -4.50, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.65} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.92, evRange: 3.67, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.01, raise: 0.98}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.52, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.62, evRange: 2.66, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 2.61, raise: 5.57} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.62, evRange: 2.66, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 2.61, raise: 5.57} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.91, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -2.58, raise: 0.50} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.91, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -2.58, raise: 0.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.01, evRange: 1.55, rangeWeight: 0.09, freq: {fold: 0.03, call: 0.97}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 8.10} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.01, evRange: 1.55, rangeWeight: 0.09, freq: {fold: 0.03, call: 0.97}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 8.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -3.88, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -3.88, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.76} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.06, evRange: 0.17, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.29, raise: 0.71}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.06, evRange: 0.17, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.29, raise: 0.71}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.26, evRange: 0.17, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.83, raise: 0.17}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.26, evRange: 0.17, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.83, raise: 0.17}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.92, evRange: 0.17, rangeWeight: 0.33, freq: {fold: 0.95, call: 0.03, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.92, evRange: 0.17, rangeWeight: 0.33, freq: {fold: 0.95, call: 0.03, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.98, evRange: 1.77, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 1.76, bet: 1.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.98, evRange: 1.77, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 1.76, bet: 1.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.62, evRange: -2.87, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.54, bet: -3.21} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.62, evRange: -2.87, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.54, bet: -3.21} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.98, evRange: 3.83, rangeWeight: 0.05, freq: {check: 0.05, bet: 0.95}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.76, evRange: 2.55, rangeWeight: 0.25, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.90, bet: 2.89} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.76, evRange: 2.55, rangeWeight: 0.25, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.90, bet: 2.89} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.75, evRange: -1.76, rangeWeight: 0.21, freq: {check: 0.52, bet: 0.48}, ev: {check: -2.25, bet: -3.29}, evA: {check: -1.52, bet: -2.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.75, evRange: -1.76, rangeWeight: 0.21, freq: {check: 0.52, bet: 0.48}, ev: {check: -2.25, bet: -3.29}, evA: {check: -1.52, bet: -2.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.84, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.75, evRange: 2.11, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 2.34, raise: 6.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.75, evRange: 2.11, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 2.34, raise: 6.07} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.99, evRange: -2.88, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.28, raise: -0.52} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.99, evRange: -2.88, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.28, raise: -0.52} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.48, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: 0.54, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: 0.54, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.98} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -6.07, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.58} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -6.07, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.58} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.41} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.51, evRange: 3.23, rangeWeight: 0.25, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 4.44, raise: 7.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.51, evRange: 3.23, rangeWeight: 0.25, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 4.44, raise: 7.54} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -1.78, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -3.55, raise: 0.93} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -1.78, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -3.55, raise: 0.93} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.42, evRange: 4.33, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.29, raise: 0.71}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.63, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -0.93, rangeWeight: 0.13, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.68} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -0.93, rangeWeight: 0.13, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.68} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.52, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.52, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.05, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.19} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.89, evRange: -0.45, rangeWeight: 0.18, freq: {check: 0.11, bet: 0.89}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.29, bet: -0.60} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.89, evRange: -0.45, rangeWeight: 0.18, freq: {check: 0.11, bet: 0.89}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.29, bet: -0.60} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.83, rangeWeight: 0.49, freq: {check: 0.01, bet: 0.99}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -3.55, rangeWeight: 0.08, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.16, bet: -3.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -3.55, rangeWeight: 0.08, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.16, bet: -3.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.79, evRange: -1.57, rangeWeight: 0.29, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.90, bet: -1.90} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.79, evRange: -1.57, rangeWeight: 0.29, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.90, bet: -1.90} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 1.52, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -3.37, rangeWeight: 0.09, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -3.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -3.37, rangeWeight: 0.09, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -3.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -0.27, rangeWeight: 0.18, freq: {fold: 0.46, call: 0.54, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.34, raise: 2.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -0.27, rangeWeight: 0.18, freq: {fold: 0.46, call: 0.54, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.34, raise: 2.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.49, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.28, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.84, evRange: -3.61, rangeWeight: 0.08, freq: {fold: 0.51, call: 0.00, raise: 0.49}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.48, raise: -1.48} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.84, evRange: -3.61, rangeWeight: 0.08, freq: {fold: 0.51, call: 0.00, raise: 0.49}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.48, raise: -1.48} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -5.47, evRange: -5.78, rangeWeight: 0.29, freq: {fold: 0.84, call: 0.16}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -5.47, evRange: -5.78, rangeWeight: 0.29, freq: {fold: 0.84, call: 0.16}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.98} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 5.58} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.55, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.55, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.41} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.90, evRange: -1.56, rangeWeight: 0.29, freq: {fold: 0.56, call: 0.44, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -4.44, raise: 1.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.90, evRange: -1.56, rangeWeight: 0.29, freq: {fold: 0.56, call: 0.44, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -4.44, raise: 1.22} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.00, evRange: 4.33, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.50, raise: 0.50}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 3.55, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.81, evRange: -3.66, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.63, raise: -1.55} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.81, evRange: -3.66, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.63, raise: -1.55} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -7.00, evRange: -4.07, rangeWeight: 0.18, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.68} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -7.00, evRange: -4.07, rangeWeight: 0.18, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.68} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.49, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.30} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.48, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.48, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.19} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.74, evRange: 3.83, rangeWeight: 0.14, freq: {check: 0.79, bet: 0.21}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.98, evRange: -0.69, rangeWeight: 0.37, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.52, bet: -0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.98, evRange: -0.69, rangeWeight: 0.37, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.52, bet: -0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.65, evRange: -3.53, rangeWeight: 0.06, freq: {check: 0.93, bet: 0.07}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.15, bet: -3.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.65, evRange: -3.53, rangeWeight: 0.06, freq: {check: 0.93, bet: 0.07}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.15, bet: -3.92} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.59, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.79, evRange: -0.20, rangeWeight: 0.26, freq: {check: 0.67, bet: 0.33}, ev: {check: 0.75, bet: 0.87}, evA: {check: -0.61, bet: -0.30} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.79, evRange: -0.20, rangeWeight: 0.26, freq: {check: 0.67, bet: 0.33}, ev: {check: 0.75, bet: 0.87}, evA: {check: -0.61, bet: -0.30} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.80, evRange: -3.45, rangeWeight: 0.09, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -4.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.80, evRange: -3.45, rangeWeight: 0.09, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -4.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.14, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.86, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.34, evRange: -0.53, rangeWeight: 0.37, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.87, raise: 2.57} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.34, evRange: -0.53, rangeWeight: 0.37, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.87, raise: 2.57} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.86, evRange: -3.59, rangeWeight: 0.06, freq: {fold: 0.94, call: 0.00, raise: 0.06}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.48, raise: -1.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.86, evRange: -3.59, rangeWeight: 0.06, freq: {fold: 0.94, call: 0.00, raise: 0.06}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.48, raise: -1.46} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 9.51} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -3.67, rangeWeight: 0.26, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.24} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -3.67, rangeWeight: 0.26, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.24} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.66, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.66, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.41} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.05, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.86, evRange: 0.03, rangeWeight: 0.26, freq: {fold: 0.55, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -1.43, raise: 3.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.86, evRange: 0.03, rangeWeight: 0.26, freq: {fold: 0.55, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -1.43, raise: 3.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.82, evRange: -3.75, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.63, raise: -1.66} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.82, evRange: -3.75, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.63, raise: -1.66} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.14, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -4.43, rangeWeight: 0.37, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.52} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -4.43, rangeWeight: 0.37, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.52} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.46, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.46, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.19} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.44, rangeWeight: 0.39, freq: {check: 0.93, bet: 0.07}, ev: {check: 1.19, bet: 1.46}, evA: {check: 2.29, bet: 2.58} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.44, rangeWeight: 0.39, freq: {check: 0.93, bet: 0.07}, ev: {check: 1.19, bet: 1.46}, evA: {check: 2.29, bet: 2.58} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.89, evRange: -3.71, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.80, bet: -3.61} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.89, evRange: -3.71, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.80, bet: -3.61} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.31, evRange: 1.31, rangeWeight: 0.25, freq: {check: 0.70, bet: 0.30}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.83, bet: 1.41} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.31, evRange: 1.31, rangeWeight: 0.25, freq: {check: 0.70, bet: 0.30}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.83, bet: 1.41} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.48, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.51, bet: -4.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.48, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.51, bet: -4.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.80, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: 2.25, rangeWeight: 0.39, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 3.01, raise: 7.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: 2.25, rangeWeight: 0.39, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 3.01, raise: 7.54} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -3.94, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.79, raise: -0.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -3.94, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.79, raise: -0.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.15, evRange: 5.00, rangeWeight: 0.04, freq: {fold: 0.10, call: 0.10, raise: 0.79}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.33, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.25, evRange: -2.94, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.25, evRange: -2.94, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.16} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.55, evRange: -10.33, rangeWeight: 0.21, freq: {fold: 0.27, call: 0.73}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.72} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.55, evRange: -10.33, rangeWeight: 0.21, freq: {fold: 0.27, call: 0.73}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.72} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.31, evRange: 1.08, rangeWeight: 0.25, freq: {fold: 0.16, call: 0.78, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 1.50, raise: 6.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.31, evRange: 1.08, rangeWeight: 0.25, freq: {fold: 0.16, call: 0.78, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 1.50, raise: 6.06} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.88, evRange: -4.80, rangeWeight: 0.21, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.11, raise: -1.33} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.88, evRange: -4.80, rangeWeight: 0.21, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.11, raise: -1.33} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.65, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.30, evRange: -1.46, rangeWeight: 0.39, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.30, evRange: -1.46, rangeWeight: 0.39, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.35} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.25, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.25, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.04} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.19, evRange: -0.49, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.19, bet: 1.46}, evA: {check: -0.61, bet: -0.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.19, evRange: -0.49, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.19, bet: 1.46}, evA: {check: -0.61, bet: -0.37} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.06, evRange: 5.17, rangeWeight: 0.10, freq: {check: 0.82, bet: 0.18}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.89, evRange: -4.60, rangeWeight: 0.04, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.69, bet: -4.51} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.89, evRange: -4.60, rangeWeight: 0.04, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.69, bet: -4.51} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.38, evRange: -0.05, rangeWeight: 0.29, freq: {check: 0.37, bet: 0.63}, ev: {check: 1.25, bet: 1.46}, evA: {check: -0.83, bet: 0.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.38, evRange: -0.05, rangeWeight: 0.29, freq: {check: 0.37, bet: 0.63}, ev: {check: 1.25, bet: 1.46}, evA: {check: -0.83, bet: 0.03} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.51, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.75, evRange: -4.78, rangeWeight: 0.09, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.80, bet: -4.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.75, evRange: -4.78, rangeWeight: 0.09, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.80, bet: -4.78} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.30, evRange: -0.71, rangeWeight: 0.41, freq: {fold: 0.28, call: 0.69, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -3.01, raise: 3.82} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.30, evRange: -0.71, rangeWeight: 0.41, freq: {fold: 0.28, call: 0.69, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -3.01, raise: 3.82} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.79, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.46, evRange: -4.85, rangeWeight: 0.04, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.33, raise: -1.39} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.46, evRange: -4.85, rangeWeight: 0.04, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.33, raise: -1.39} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.03, evRange: -4.68, rangeWeight: 0.29, freq: {fold: 0.59, call: 0.41}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.03, evRange: -4.68, rangeWeight: 0.29, freq: {fold: 0.59, call: 0.41}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 11.72} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.72, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.72, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.28, evRange: -0.31, rangeWeight: 0.29, freq: {fold: 0.35, call: 0.65, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -1.50, raise: 4.32} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.28, evRange: -0.31, rangeWeight: 0.29, freq: {fold: 0.35, call: 0.65, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -1.50, raise: 4.32} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.11, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.81, evRange: -5.11, rangeWeight: 0.09, freq: {fold: 0.74, call: 0.00, raise: 0.26}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.65, raise: -1.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.81, evRange: -5.11, rangeWeight: 0.09, freq: {fold: 0.74, call: 0.00, raise: 0.26}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.65, raise: -1.72} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.19, evRange: -5.18, rangeWeight: 0.41, freq: {fold: 0.44, call: 0.56}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.19, evRange: -5.18, rangeWeight: 0.41, freq: {fold: 0.44, call: 0.56}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.35} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.39, rangeWeight: 0.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.39, rangeWeight: 0.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.04} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.59, freq: {check: 0.01, bet: 0.99}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.44, evRange: -0.82, rangeWeight: 0.14, freq: {check: 0.06, bet: 0.94}, ev: {check: 1.19, bet: 1.46}, evA: {check: -0.94, bet: -0.70} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.44, evRange: -0.82, rangeWeight: 0.14, freq: {check: 0.06, bet: 0.94}, ev: {check: 1.19, bet: 1.46}, evA: {check: -0.94, bet: -0.70} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.71, evRange: -4.58, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.66, bet: -4.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.71, evRange: -4.58, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.66, bet: -4.49} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 2.03, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.29, evRange: -2.73, rangeWeight: 0.26, freq: {check: 0.82, bet: 0.18}, ev: {check: 1.25, bet: 1.46}, evA: {check: -3.68, bet: -2.69} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.29, evRange: -2.73, rangeWeight: 0.26, freq: {check: 0.82, bet: 0.18}, ev: {check: 1.25, bet: 1.46}, evA: {check: -3.68, bet: -2.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -4.68, rangeWeight: 0.09, freq: {check: 0.52, bet: 0.48}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.80, bet: -4.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -4.68, rangeWeight: 0.09, freq: {check: 0.52, bet: 0.48}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.80, bet: -4.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.25, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.23, evRange: -1.04, rangeWeight: 0.14, freq: {fold: 0.34, call: 0.66, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -3.69, raise: 3.41} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.23, evRange: -1.04, rangeWeight: 0.14, freq: {fold: 0.34, call: 0.66, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -3.69, raise: 3.41} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.94, evRange: -4.82, rangeWeight: 0.06, freq: {fold: 0.96, call: 0.02, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.33, raise: -1.36} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.94, evRange: -4.82, rangeWeight: 0.06, freq: {fold: 0.96, call: 0.02, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.33, raise: -1.36} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 5.27} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.99, evRange: -8.10, rangeWeight: 0.26, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.57} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.99, evRange: -8.10, rangeWeight: 0.26, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.57} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.59, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.59, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 10.73, evRange: 5.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.13, raise: 0.87}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 3.65, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.95, evRange: -3.03, rangeWeight: 0.26, freq: {fold: 0.72, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -6.63, raise: 0.90} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.95, evRange: -3.03, rangeWeight: 0.26, freq: {fold: 0.72, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -6.63, raise: 0.90} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.94, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 0.77, call: 0.00, raise: 0.23}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.65, raise: -1.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.94, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 0.77, call: 0.00, raise: 0.23}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.65, raise: -1.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.78, evRange: -5.59, rangeWeight: 0.14, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.34} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.78, evRange: -5.59, rangeWeight: 0.14, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.34} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.36, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.36, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.04} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.89, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.89, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.57, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.57, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.74, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.74, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.97, evRange: 2.39, rangeWeight: 0.24, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.98, bet: 0.87}, evA: {check: 2.33, bet: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.97, evRange: 2.39, rangeWeight: 0.24, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.98, bet: 0.87}, evA: {check: 2.33, bet: 2.45} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.61, evRange: -2.38, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.08, bet: -2.68} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.61, evRange: -2.38, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.08, bet: -2.68} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.95, evRange: 3.83, rangeWeight: 0.02, freq: {check: 0.14, bet: 0.86}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.80, evRange: 2.12, rangeWeight: 0.19, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.70, bet: 2.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.80, evRange: 2.12, rangeWeight: 0.19, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.70, bet: 2.40} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.25, evRange: -2.51, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.06, bet: -2.98} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.25, evRange: -2.51, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.06, bet: -2.98} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.93, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.59, evRange: 2.78, rangeWeight: 0.24, freq: {fold: 0.04, call: 0.95, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 3.64, raise: 6.95} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.59, evRange: 2.78, rangeWeight: 0.24, freq: {fold: 0.04, call: 0.95, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 3.64, raise: 6.95} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -2.35, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -4.43, raise: 0.18} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -2.35, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -4.43, raise: 0.18} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.01, evRange: -0.12, rangeWeight: 0.19, freq: {fold: 0.18, call: 0.82}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.01, evRange: -0.12, rangeWeight: 0.19, freq: {fold: 0.18, call: 0.82}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.23} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.22, rangeWeight: 0.28, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.55} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.22, rangeWeight: 0.28, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.55} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.74} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.73, evRange: 2.73, rangeWeight: 0.19, freq: {fold: 0.23, call: 0.75, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 3.96, raise: 6.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.73, evRange: 2.73, rangeWeight: 0.19, freq: {fold: 0.23, call: 0.75, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 3.96, raise: 6.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.65, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -4.80, raise: -0.22} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.65, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -4.80, raise: -0.22} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.83, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.39, evRange: -0.05, rangeWeight: 0.24, freq: {fold: 0.63, call: 0.37}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.39, evRange: -0.05, rangeWeight: 0.24, freq: {fold: 0.63, call: 0.37}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.72} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -6.82, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -6.96} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -6.82, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -6.96} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.37} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.98, evRange: -1.16, rangeWeight: 0.31, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.95, bet: -1.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.98, evRange: -1.16, rangeWeight: 0.31, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.95, bet: -1.37} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.31, freq: {check: 0.51, bet: 0.49}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.29, evRange: -3.60, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.21, bet: -4.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.29, evRange: -3.60, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.21, bet: -4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.75, evRange: -1.40, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.70, bet: -1.70} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.75, evRange: -1.40, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.70, bet: -1.70} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.37, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.06, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -3.55, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.93, bet: -4.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -3.55, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.93, bet: -4.20} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.73, evRange: -1.03, rangeWeight: 0.31, freq: {fold: 0.52, call: 0.48, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.64, raise: 1.92} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.73, evRange: -1.03, rangeWeight: 0.31, freq: {fold: 0.52, call: 0.48, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.64, raise: 1.92} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.43, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.79, evRange: -3.66, rangeWeight: 0.03, freq: {fold: 0.91, call: 0.00, raise: 0.09}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.60, raise: -1.56} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.79, evRange: -3.66, rangeWeight: 0.03, freq: {fold: 0.91, call: 0.00, raise: 0.09}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.60, raise: -1.56} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.89, evRange: -5.52, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.89, evRange: -5.52, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.23} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.37, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.83, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.83, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.74} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.57, evRange: -1.37, rangeWeight: 0.24, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.96, raise: 1.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.57, evRange: -1.37, rangeWeight: 0.24, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.96, raise: 1.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.37, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.80, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.00, evRange: -3.87, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.83, raise: -1.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.00, evRange: -3.87, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.83, raise: -1.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.45, evRange: -5.08, rangeWeight: 0.31, freq: {fold: 0.03, call: 0.97}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.45, evRange: -5.08, rangeWeight: 0.31, freq: {fold: 0.03, call: 0.97}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.72} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 6.96} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.56, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.56, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.94, evRange: 3.83, rangeWeight: 0.31, freq: {check: 0.18, bet: 0.82}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.93, evRange: -0.52, rangeWeight: 0.31, freq: {check: 0.56, bet: 0.44}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.36, bet: -0.68} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.93, evRange: -0.52, rangeWeight: 0.31, freq: {check: 0.56, bet: 0.44}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.36, bet: -0.68} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.29, evRange: -3.64, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.25, bet: -4.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.29, evRange: -3.64, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.25, bet: -4.04} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.06, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.80, evRange: -1.39, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.69, bet: -1.69} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.80, evRange: -1.39, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.69, bet: -1.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -3.55, rangeWeight: 0.07, freq: {check: 0.63, bet: 0.37}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.93, bet: -4.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -3.55, rangeWeight: 0.07, freq: {check: 0.63, bet: 0.37}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.93, bet: -4.20} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.50, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.41, evRange: -0.34, rangeWeight: 0.31, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.34, raise: 2.83} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.41, evRange: -0.34, rangeWeight: 0.31, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.34, raise: 2.83} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.64, evRange: -3.70, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 0.99}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.60, raise: -1.61} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.64, evRange: -3.70, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 0.99}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.60, raise: -1.61} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.21, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.57} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.88, evRange: -5.51, rangeWeight: 0.33, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.20} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.88, evRange: -5.51, rangeWeight: 0.33, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.83, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.83, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.74} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.21, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.82, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.52, evRange: -1.36, rangeWeight: 0.33, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.95, raise: 1.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.52, evRange: -1.36, rangeWeight: 0.33, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.95, raise: 1.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.15, evRange: -3.87, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.83, raise: -1.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.15, evRange: -3.87, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.83, raise: -1.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -5.02, evRange: -4.17, rangeWeight: 0.31, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.68} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -5.02, evRange: -4.17, rangeWeight: 0.31, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.68} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.61, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.61, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.61, rangeWeight: 0.24, freq: {check: 0.92, bet: 0.08}, ev: {check: 1.19, bet: 1.46}, evA: {check: 2.46, bet: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.61, rangeWeight: 0.24, freq: {check: 0.92, bet: 0.08}, ev: {check: 1.19, bet: 1.46}, evA: {check: 2.46, bet: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.90, evRange: -3.88, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.97, bet: -3.79} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.90, evRange: -3.88, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.97, bet: -3.79} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.02, freq: {check: 0.01, bet: 0.99}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.31, evRange: 3.21, rangeWeight: 0.30, freq: {check: 0.72, bet: 0.28}, ev: {check: 1.25, bet: 1.46}, evA: {check: 2.83, bet: 3.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.31, evRange: 3.21, rangeWeight: 0.30, freq: {check: 0.72, bet: 0.28}, ev: {check: 1.25, bet: 1.46}, evA: {check: 2.83, bet: 3.35} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.35, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -3.43, bet: -3.33} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.35, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -3.43, bet: -3.33} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.88, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.26, evRange: 2.42, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 4.00, raise: 7.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.26, evRange: 2.42, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 4.00, raise: 7.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -4.12, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.96, raise: -0.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -4.12, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.96, raise: -0.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.75, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.08, evRange: -0.50, rangeWeight: 0.30, freq: {fold: 0.01, call: 0.99}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.08, evRange: -0.50, rangeWeight: 0.30, freq: {fold: 0.01, call: 0.99}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.36} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.04, evRange: -8.89, rangeWeight: 0.19, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -8.92} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.04, evRange: -8.89, rangeWeight: 0.19, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -8.92} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.69} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.89, evRange: 3.01, rangeWeight: 0.30, freq: {fold: 0.07, call: 0.89, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 5.09, raise: 8.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.89, evRange: 3.01, rangeWeight: 0.30, freq: {fold: 0.07, call: 0.89, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 5.09, raise: 8.50} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -3.66, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.17, raise: 0.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -3.66, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.17, raise: 0.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.79, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.10, evRange: -1.25, rangeWeight: 0.24, freq: {fold: 0.52, call: 0.48}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.10, evRange: -1.25, rangeWeight: 0.24, freq: {fold: 0.52, call: 0.48}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.77} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.47, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.05} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.47, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.05} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.64} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.38, evRange: -1.23, rangeWeight: 0.31, freq: {check: 0.29, bet: 0.71}, ev: {check: 1.19, bet: 1.46}, evA: {check: -1.35, bet: -1.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.38, evRange: -1.23, rangeWeight: 0.31, freq: {check: 0.29, bet: 0.71}, ev: {check: 1.19, bet: 1.46}, evA: {check: -1.35, bet: -1.12} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.32, evRange: 5.17, rangeWeight: 0.31, freq: {check: 0.04, bet: 0.96}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.87, evRange: -4.91, rangeWeight: 0.03, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.99, bet: -4.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.87, evRange: -4.91, rangeWeight: 0.03, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.99, bet: -4.82} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.36, evRange: -1.79, rangeWeight: 0.35, freq: {check: 0.48, bet: 0.52}, ev: {check: 1.25, bet: 1.46}, evA: {check: -2.83, bet: -1.73} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.36, evRange: -1.79, rangeWeight: 0.35, freq: {check: 0.48, bet: 0.52}, ev: {check: 1.25, bet: 1.46}, evA: {check: -2.83, bet: -1.73} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.23, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 3.43, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.75, evRange: -4.84, rangeWeight: 0.03, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.88, bet: -4.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.75, evRange: -4.84, rangeWeight: 0.03, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.88, bet: -4.84} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.89, evRange: -1.45, rangeWeight: 0.31, freq: {fold: 0.23, call: 0.70, raise: 0.07}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -4.00, raise: 2.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.89, evRange: -1.45, rangeWeight: 0.31, freq: {fold: 0.23, call: 0.70, raise: 0.07}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -4.00, raise: 2.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.96, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.16, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.75, raise: -1.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.16, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.75, raise: -1.78} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.43, evRange: -6.89, rangeWeight: 0.35, freq: {fold: 0.55, call: 0.45}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.43, evRange: -6.89, rangeWeight: 0.35, freq: {fold: 0.55, call: 0.45}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.36} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 8.92} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -10.80, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -10.80, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.69} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.19, evRange: -2.07, rangeWeight: 0.35, freq: {fold: 0.37, call: 0.57, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.09, raise: 2.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.19, evRange: -2.07, rangeWeight: 0.35, freq: {fold: 0.37, call: 0.57, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.09, raise: 2.11} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.17, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.76, evRange: -5.17, rangeWeight: 0.03, freq: {fold: 0.51, call: 0.00, raise: 0.49}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.79, raise: -1.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.76, evRange: -5.17, rangeWeight: 0.03, freq: {fold: 0.51, call: 0.00, raise: 0.49}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.79, raise: -1.80} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.15, evRange: -6.12, rangeWeight: 0.31, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.15, evRange: -6.12, rangeWeight: 0.31, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.77} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.78, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.78, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.31, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.22, evRange: -2.24, rangeWeight: 0.31, freq: {check: 0.89, bet: 0.11}, ev: {check: 1.19, bet: 1.46}, evA: {check: -2.34, bet: -2.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.22, evRange: -2.24, rangeWeight: 0.31, freq: {check: 0.89, bet: 0.11}, ev: {check: 1.19, bet: 1.46}, evA: {check: -2.34, bet: -2.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -4.88, rangeWeight: 0.03, freq: {check: 0.47, bet: 0.53}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.97, bet: -4.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -4.88, rangeWeight: 0.03, freq: {check: 0.47, bet: 0.53}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.97, bet: -4.80} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.40, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 3.44, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.34, evRange: -1.78, rangeWeight: 0.26, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: -2.82, bet: -1.72} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.34, evRange: -1.78, rangeWeight: 0.26, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: -2.82, bet: -1.72} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.71, evRange: -4.84, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.88, bet: -4.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.71, evRange: -4.84, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.88, bet: -4.84} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 5.36, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.82, evRange: -2.46, rangeWeight: 0.31, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.77, raise: 1.61} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.82, evRange: -2.46, rangeWeight: 0.31, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.77, raise: 1.61} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.06, evRange: -5.13, rangeWeight: 0.03, freq: {fold: 0.15, call: 0.00, raise: 0.85}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.75, raise: -1.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.06, evRange: -5.13, rangeWeight: 0.03, freq: {fold: 0.15, call: 0.00, raise: 0.85}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.75, raise: -1.74} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.40, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 8.94} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.19, evRange: -6.88, rangeWeight: 0.26, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.19, evRange: -6.88, rangeWeight: 0.26, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.80, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.80, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.69} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 10.99, evRange: 5.00, rangeWeight: 0.40, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.19, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.42, evRange: -2.06, rangeWeight: 0.26, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.08, raise: 2.12} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.42, evRange: -2.06, rangeWeight: 0.26, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.08, raise: 2.12} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.42, evRange: -5.17, rangeWeight: 0.04, freq: {fold: 0.66, call: 0.00, raise: 0.34}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.79, raise: -1.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.42, evRange: -5.17, rangeWeight: 0.04, freq: {fold: 0.66, call: 0.00, raise: 0.34}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.79, raise: -1.80} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 7.74} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -9.00, evRange: -7.39, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -9.00, evRange: -7.39, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.74, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.74, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.10, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.10, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.11, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.11, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.07, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.07, evRange: -0.04, rangeWeight: 0.17, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.08, bet: -0.17}, evA: {check: 0.08, bet: -0.17} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.17, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.17, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.14, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.16, bet: 0.84}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.14, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.16, bet: 0.84}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.05, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.05, evRange: -0.08, rangeWeight: 0.17, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.00, bet: -0.17}, evA: {check: 0.00, bet: -0.17} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: -1.14, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: -0.56, bet: -1.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: -1.14, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: -0.56, bet: -1.72} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.31, evRange: -2.27, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.46, bet: -3.09} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.31, evRange: -2.27, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.31, bet: -2.87}, evA: {check: -1.46, bet: -3.09} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.33, evRange: 2.50, rangeWeight: 0.48, freq: {check: 1.00, bet: 0.00}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.79, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: 0.29}, evA: {check: -0.52, bet: -1.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.79, rangeWeight: 0.00, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: 0.29}, evA: {check: -0.52, bet: -1.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -2.03, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.91, bet: -3.20} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -2.03, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.91, bet: -3.20} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 2.67, evRange: 1.83, rangeWeight: 0.69, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.52, bet: 2.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -0.72, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: -3.19, raise: 0.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -0.72, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: -3.19, raise: 0.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -2.09, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.50, raise: -1.19} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -2.09, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.50, raise: -1.19} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.00, evRange: 3.67, rangeWeight: 0.48, freq: {fold: 0.00, call: 0.50, raise: 0.50}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 1.53, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: -3.67, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: -3.67, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.72} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.04, evRange: -6.34, rangeWeight: 0.15, freq: {fold: 0.98, call: 0.02}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.15} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.04, evRange: -6.34, rangeWeight: 0.15, freq: {fold: 0.98, call: 0.02}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.15} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.69, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 4.65} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.87, evRange: -0.33, rangeWeight: 0.00, freq: {fold: 0.94, call: 0.06, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: -2.62, raise: 1.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.87, evRange: -0.33, rangeWeight: 0.00, freq: {fold: 0.94, call: 0.06, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: -2.62, raise: 1.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -2.20, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.53, raise: -1.34} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -2.20, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -4.53, raise: -1.34} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.69, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 2.58, raise: 7.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.08, evRange: -4.24, rangeWeight: 0.13, freq: {fold: 0.30, call: 0.70}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.08, evRange: -4.24, rangeWeight: 0.13, freq: {fold: 0.30, call: 0.70}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.28, evRange: -6.19, rangeWeight: 0.13, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.10} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.28, evRange: -6.19, rangeWeight: 0.13, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.10} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.48, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 2.76} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.77, evRange: 1.98, rangeWeight: 0.10, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 1.92, bet: 2.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.77, evRange: 1.98, rangeWeight: 0.10, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.77, bet: 0.29}, evA: {check: 1.92, bet: 2.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.51, evRange: 2.50, rangeWeight: 0.09, freq: {check: 0.47, bet: 0.53}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.59, evRange: -0.60, rangeWeight: 0.36, freq: {check: 0.82, bet: 0.18}, ev: {check: -1.31, bet: -2.87}, evA: {check: -0.13, bet: -1.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.59, evRange: -0.60, rangeWeight: 0.36, freq: {check: 0.82, bet: 0.18}, ev: {check: -1.31, bet: -2.87}, evA: {check: -0.13, bet: -1.07} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: 1.18, rangeWeight: 0.00, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.52, bet: 1.67} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: 1.18, rangeWeight: 0.00, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.52, bet: 1.67} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.67, evRange: 1.83, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.91, bet: 2.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.91, evRange: -1.18, rangeWeight: 0.45, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.52, bet: -1.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.91, evRange: -1.18, rangeWeight: 0.45, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.52, bet: -1.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.02, evRange: 3.04, rangeWeight: 0.10, freq: {fold: 0.57, call: 0.43, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 3.19, raise: 6.10} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.02, evRange: 3.04, rangeWeight: 0.10, freq: {fold: 0.57, call: 0.43, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 3.19, raise: 6.10} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.50, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.07, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -1.53, raise: 1.68} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.07, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -1.53, raise: 1.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.38, evRange: 0.58, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.38, evRange: 0.58, rangeWeight: 0.00, freq: {fold: 0.50, call: 0.50}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.72} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.15} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -4.50, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.65} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -4.50, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.65} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.76, evRange: 2.67, rangeWeight: 0.00, freq: {fold: 0.91, call: 0.08, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 2.62, raise: 5.58} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.76, evRange: 2.67, rangeWeight: 0.00, freq: {fold: 0.91, call: 0.08, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 2.62, raise: 5.58} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.99, evRange: 3.67, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.53, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.91, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -2.58, raise: 0.50} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.91, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -2.58, raise: 0.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: 1.10, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: 1.10, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.74} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -3.32, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -3.32, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.76} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.67, evRange: 2.50, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 2.33, bet: 2.67}, evA: {check: 2.33, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.50, evRange: 2.24, rangeWeight: 0.09, freq: {check: 0.43, bet: 0.57}, ev: {check: 0.77, bet: 0.29}, evA: {check: 2.13, bet: 2.35} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.50, evRange: 2.24, rangeWeight: 0.09, freq: {check: 0.43, bet: 0.57}, ev: {check: 0.77, bet: 0.29}, evA: {check: 2.13, bet: 2.35} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.43, evRange: -0.93, rangeWeight: 0.36, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.31, bet: -2.87}, evA: {check: -0.39, bet: -1.47} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.43, evRange: -0.93, rangeWeight: 0.36, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.31, bet: -2.87}, evA: {check: -0.39, bet: -1.47} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.65, evRange: 1.83, rangeWeight: 0.00, freq: {check: 0.01, bet: 0.99}, ev: {check: 1.00, bet: 2.67}, evA: {check: 0.90, bet: 2.67} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.25, evRange: 1.17, rangeWeight: 0.09, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.52, bet: 1.66} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.25, evRange: 1.17, rangeWeight: 0.09, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: 0.29}, evA: {check: 0.52, bet: 1.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.76, evRange: -1.18, rangeWeight: 0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.52, bet: -1.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.76, evRange: -1.18, rangeWeight: 0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -2.87}, evA: {check: -0.52, bet: -1.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.00, evRange: 3.67, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 5.00, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 3.35, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 4.50, raise: 6.55} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 3.35, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 4.50, raise: 6.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.47, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -1.53, raise: 1.12} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.47, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -1.53, raise: 1.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.92, evRange: 2.00, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.13} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.25, evRange: 0.57, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.69} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.25, evRange: 0.57, rangeWeight: 0.09, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -4.50, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.65} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -4.50, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.65} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.92, evRange: 3.67, rangeWeight: 0.00, freq: {fold: 0.01, call: 0.01, raise: 0.98}, ev: {fold: -1.00, call: 5.00, raise: 7.00}, evA: {fold: -1.00, call: 4.52, raise: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.62, evRange: 2.66, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 2.61, raise: 5.57} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.62, evRange: 2.66, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 3.63}, evA: {fold: -1.00, call: 2.61, raise: 5.57} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.91, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -2.58, raise: 0.50} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.91, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -0.88}, evA: {fold: -1.00, call: -2.58, raise: 0.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 2.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.01, evRange: 1.55, rangeWeight: 0.09, freq: {fold: 0.03, call: 0.97}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 8.10} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.01, evRange: 1.55, rangeWeight: 0.09, freq: {fold: 0.03, call: 0.97}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 8.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -3.88, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -3.88, rangeWeight: 0.36, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.76} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.06, evRange: 0.17, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.29, raise: 0.71}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.06, evRange: 0.17, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.29, raise: 0.71}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.26, evRange: 0.17, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.83, raise: 0.17}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.26, evRange: 0.17, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.83, raise: 0.17}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.92, evRange: 0.17, rangeWeight: 0.33, freq: {fold: 0.95, call: 0.03, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.92, evRange: 0.17, rangeWeight: 0.33, freq: {fold: 0.95, call: 0.03, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.98, evRange: 1.77, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 1.76, bet: 1.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.98, evRange: 1.77, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: 1.76, bet: 1.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.62, evRange: -2.87, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.54, bet: -3.21} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.62, evRange: -2.87, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.54, bet: -3.21} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.98, evRange: 3.83, rangeWeight: 0.05, freq: {check: 0.05, bet: 0.95}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.76, evRange: 2.55, rangeWeight: 0.25, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.90, bet: 2.89} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.76, evRange: 2.55, rangeWeight: 0.25, freq: {check: 0.89, bet: 0.11}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.90, bet: 2.89} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.75, evRange: -1.76, rangeWeight: 0.21, freq: {check: 0.52, bet: 0.48}, ev: {check: -2.25, bet: -3.29}, evA: {check: -1.52, bet: -2.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.75, evRange: -1.76, rangeWeight: 0.21, freq: {check: 0.52, bet: 0.48}, ev: {check: -2.25, bet: -3.29}, evA: {check: -1.52, bet: -2.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.84, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.75, evRange: 2.11, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 2.34, raise: 6.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.75, evRange: 2.11, rangeWeight: 0.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 2.34, raise: 6.07} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.99, evRange: -2.88, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.28, raise: -0.52} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.99, evRange: -2.88, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -5.28, raise: -0.52} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.48, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.75, evRange: 0.54, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.75, evRange: 0.54, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.98} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -6.07, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.58} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -6.07, rangeWeight: 0.21, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.58} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.41} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.51, evRange: 3.23, rangeWeight: 0.25, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 4.44, raise: 7.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.51, evRange: 3.23, rangeWeight: 0.25, freq: {fold: 0.26, call: 0.74, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 4.44, raise: 7.54} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -1.78, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -3.55, raise: 0.93} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -1.78, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -3.55, raise: 0.93} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.42, evRange: 4.33, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.29, raise: 0.71}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.63, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.13, evRange: -0.93, rangeWeight: 0.13, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.68} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.13, evRange: -0.93, rangeWeight: 0.13, freq: {fold: 0.50, call: 0.50}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.68} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.52, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.52, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.05, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.19} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.89, evRange: -0.45, rangeWeight: 0.18, freq: {check: 0.11, bet: 0.89}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.29, bet: -0.60} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.89, evRange: -0.45, rangeWeight: 0.18, freq: {check: 0.11, bet: 0.89}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.29, bet: -0.60} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.83, rangeWeight: 0.49, freq: {check: 0.01, bet: 0.99}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -3.55, rangeWeight: 0.08, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.16, bet: -3.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -3.55, rangeWeight: 0.08, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.16, bet: -3.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.79, evRange: -1.57, rangeWeight: 0.29, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.90, bet: -1.90} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.79, evRange: -1.57, rangeWeight: 0.29, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.90, bet: -1.90} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 1.52, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -3.37, rangeWeight: 0.09, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -3.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -3.37, rangeWeight: 0.09, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -3.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -0.27, rangeWeight: 0.18, freq: {fold: 0.46, call: 0.54, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.34, raise: 2.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -0.27, rangeWeight: 0.18, freq: {fold: 0.46, call: 0.54, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.34, raise: 2.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.49, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.28, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.84, evRange: -3.61, rangeWeight: 0.08, freq: {fold: 0.51, call: 0.00, raise: 0.49}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.48, raise: -1.48} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.84, evRange: -3.61, rangeWeight: 0.08, freq: {fold: 0.51, call: 0.00, raise: 0.49}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.48, raise: -1.48} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -5.47, evRange: -5.78, rangeWeight: 0.29, freq: {fold: 0.84, call: 0.16}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -5.47, evRange: -5.78, rangeWeight: 0.29, freq: {fold: 0.84, call: 0.16}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.98} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 5.58} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.55, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.55, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.41} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.90, evRange: -1.56, rangeWeight: 0.29, freq: {fold: 0.56, call: 0.44, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -4.44, raise: 1.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.90, evRange: -1.56, rangeWeight: 0.29, freq: {fold: 0.56, call: 0.44, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -4.44, raise: 1.22} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.00, evRange: 4.33, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.50, raise: 0.50}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 3.55, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.81, evRange: -3.66, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.63, raise: -1.55} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.81, evRange: -3.66, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.63, raise: -1.55} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -7.00, evRange: -4.07, rangeWeight: 0.18, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.68} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -7.00, evRange: -4.07, rangeWeight: 0.18, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.68} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.49, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.30} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.48, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.48, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.19} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.74, evRange: 3.83, rangeWeight: 0.14, freq: {check: 0.79, bet: 0.21}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.98, evRange: -0.69, rangeWeight: 0.37, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.52, bet: -0.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.98, evRange: -0.69, rangeWeight: 0.37, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.52, bet: -0.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.65, evRange: -3.53, rangeWeight: 0.06, freq: {check: 0.93, bet: 0.07}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.15, bet: -3.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.65, evRange: -3.53, rangeWeight: 0.06, freq: {check: 0.93, bet: 0.07}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.15, bet: -3.92} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.59, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.79, evRange: -0.20, rangeWeight: 0.26, freq: {check: 0.67, bet: 0.33}, ev: {check: 0.75, bet: 0.87}, evA: {check: -0.61, bet: -0.30} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.79, evRange: -0.20, rangeWeight: 0.26, freq: {check: 0.67, bet: 0.33}, ev: {check: 0.75, bet: 0.87}, evA: {check: -0.61, bet: -0.30} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.80, evRange: -3.45, rangeWeight: 0.09, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -4.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.80, evRange: -3.45, rangeWeight: 0.09, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.84, bet: -4.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.14, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.86, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.34, evRange: -0.53, rangeWeight: 0.37, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.87, raise: 2.57} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.34, evRange: -0.53, rangeWeight: 0.37, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.87, raise: 2.57} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.86, evRange: -3.59, rangeWeight: 0.06, freq: {fold: 0.94, call: 0.00, raise: 0.06}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.48, raise: -1.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.86, evRange: -3.59, rangeWeight: 0.06, freq: {fold: 0.94, call: 0.00, raise: 0.06}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.48, raise: -1.46} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 9.51} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -3.67, rangeWeight: 0.26, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.24} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -3.67, rangeWeight: 0.26, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.24} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.66, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.66, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.41} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.05, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.86, evRange: 0.03, rangeWeight: 0.26, freq: {fold: 0.55, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -1.43, raise: 3.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.86, evRange: 0.03, rangeWeight: 0.26, freq: {fold: 0.55, call: 0.45, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -1.43, raise: 3.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.82, evRange: -3.75, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.63, raise: -1.66} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.82, evRange: -3.75, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.63, raise: -1.66} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.14, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -4.43, rangeWeight: 0.37, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.52} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -4.43, rangeWeight: 0.37, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.52} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.46, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.46, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.19} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.44, rangeWeight: 0.39, freq: {check: 0.93, bet: 0.07}, ev: {check: 1.19, bet: 1.46}, evA: {check: 2.29, bet: 2.58} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.44, rangeWeight: 0.39, freq: {check: 0.93, bet: 0.07}, ev: {check: 1.19, bet: 1.46}, evA: {check: 2.29, bet: 2.58} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.89, evRange: -3.71, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.80, bet: -3.61} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.89, evRange: -3.71, rangeWeight: 0.09, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.80, bet: -3.61} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.31, evRange: 1.31, rangeWeight: 0.25, freq: {check: 0.70, bet: 0.30}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.83, bet: 1.41} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.31, evRange: 1.31, rangeWeight: 0.25, freq: {check: 0.70, bet: 0.30}, ev: {check: 1.25, bet: 1.46}, evA: {check: 0.83, bet: 1.41} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.48, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.51, bet: -4.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.48, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.51, bet: -4.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.80, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.25, evRange: 2.25, rangeWeight: 0.39, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 3.01, raise: 7.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.25, evRange: 2.25, rangeWeight: 0.39, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 3.01, raise: 7.54} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -3.94, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.79, raise: -0.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -3.94, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.79, raise: -0.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.15, evRange: 5.00, rangeWeight: 0.04, freq: {fold: 0.10, call: 0.10, raise: 0.79}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.33, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.25, evRange: -2.94, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.25, evRange: -2.94, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.16} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.55, evRange: -10.33, rangeWeight: 0.21, freq: {fold: 0.27, call: 0.73}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.72} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.55, evRange: -10.33, rangeWeight: 0.21, freq: {fold: 0.27, call: 0.73}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.72} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.31, evRange: 1.08, rangeWeight: 0.25, freq: {fold: 0.16, call: 0.78, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 1.50, raise: 6.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.31, evRange: 1.08, rangeWeight: 0.25, freq: {fold: 0.16, call: 0.78, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 1.50, raise: 6.06} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.88, evRange: -4.80, rangeWeight: 0.21, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.11, raise: -1.33} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.88, evRange: -4.80, rangeWeight: 0.21, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.11, raise: -1.33} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.65, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.30, evRange: -1.46, rangeWeight: 0.39, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.30, evRange: -1.46, rangeWeight: 0.39, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.35} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.25, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.25, rangeWeight: 0.09, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.04} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.19, evRange: -0.49, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.19, bet: 1.46}, evA: {check: -0.61, bet: -0.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.19, evRange: -0.49, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.19, bet: 1.46}, evA: {check: -0.61, bet: -0.37} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.06, evRange: 5.17, rangeWeight: 0.10, freq: {check: 0.82, bet: 0.18}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.89, evRange: -4.60, rangeWeight: 0.04, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.69, bet: -4.51} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.89, evRange: -4.60, rangeWeight: 0.04, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.69, bet: -4.51} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.38, evRange: -0.05, rangeWeight: 0.29, freq: {check: 0.37, bet: 0.63}, ev: {check: 1.25, bet: 1.46}, evA: {check: -0.83, bet: 0.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.38, evRange: -0.05, rangeWeight: 0.29, freq: {check: 0.37, bet: 0.63}, ev: {check: 1.25, bet: 1.46}, evA: {check: -0.83, bet: 0.03} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.51, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.75, evRange: -4.78, rangeWeight: 0.09, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.80, bet: -4.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.75, evRange: -4.78, rangeWeight: 0.09, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.80, bet: -4.78} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.30, evRange: -0.71, rangeWeight: 0.41, freq: {fold: 0.28, call: 0.69, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -3.01, raise: 3.82} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.30, evRange: -0.71, rangeWeight: 0.41, freq: {fold: 0.28, call: 0.69, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -3.01, raise: 3.82} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.79, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.46, evRange: -4.85, rangeWeight: 0.04, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.33, raise: -1.39} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.46, evRange: -4.85, rangeWeight: 0.04, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.33, raise: -1.39} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.03, evRange: -4.68, rangeWeight: 0.29, freq: {fold: 0.59, call: 0.41}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.03, evRange: -4.68, rangeWeight: 0.29, freq: {fold: 0.59, call: 0.41}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 11.72} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.72, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.72, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.28, evRange: -0.31, rangeWeight: 0.29, freq: {fold: 0.35, call: 0.65, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -1.50, raise: 4.32} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.28, evRange: -0.31, rangeWeight: 0.29, freq: {fold: 0.35, call: 0.65, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -1.50, raise: 4.32} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.11, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.81, evRange: -5.11, rangeWeight: 0.09, freq: {fold: 0.74, call: 0.00, raise: 0.26}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.65, raise: -1.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.81, evRange: -5.11, rangeWeight: 0.09, freq: {fold: 0.74, call: 0.00, raise: 0.26}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.65, raise: -1.72} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.19, evRange: -5.18, rangeWeight: 0.41, freq: {fold: 0.44, call: 0.56}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.19, evRange: -5.18, rangeWeight: 0.41, freq: {fold: 0.44, call: 0.56}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.35} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.39, rangeWeight: 0.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.39, rangeWeight: 0.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.04} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.59, freq: {check: 0.01, bet: 0.99}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.44, evRange: -0.82, rangeWeight: 0.14, freq: {check: 0.06, bet: 0.94}, ev: {check: 1.19, bet: 1.46}, evA: {check: -0.94, bet: -0.70} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.44, evRange: -0.82, rangeWeight: 0.14, freq: {check: 0.06, bet: 0.94}, ev: {check: 1.19, bet: 1.46}, evA: {check: -0.94, bet: -0.70} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.71, evRange: -4.58, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.66, bet: -4.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.71, evRange: -4.58, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.66, bet: -4.49} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 2.03, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.29, evRange: -2.73, rangeWeight: 0.26, freq: {check: 0.82, bet: 0.18}, ev: {check: 1.25, bet: 1.46}, evA: {check: -3.68, bet: -2.69} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.29, evRange: -2.73, rangeWeight: 0.26, freq: {check: 0.82, bet: 0.18}, ev: {check: 1.25, bet: 1.46}, evA: {check: -3.68, bet: -2.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.73, evRange: -4.68, rangeWeight: 0.09, freq: {check: 0.52, bet: 0.48}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.80, bet: -4.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.73, evRange: -4.68, rangeWeight: 0.09, freq: {check: 0.52, bet: 0.48}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.80, bet: -4.67} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.25, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.23, evRange: -1.04, rangeWeight: 0.14, freq: {fold: 0.34, call: 0.66, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -3.69, raise: 3.41} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.23, evRange: -1.04, rangeWeight: 0.14, freq: {fold: 0.34, call: 0.66, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -3.69, raise: 3.41} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.94, evRange: -4.82, rangeWeight: 0.06, freq: {fold: 0.96, call: 0.02, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.33, raise: -1.36} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.94, evRange: -4.82, rangeWeight: 0.06, freq: {fold: 0.96, call: 0.02, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.33, raise: -1.36} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 5.27} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.99, evRange: -8.10, rangeWeight: 0.26, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.57} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.99, evRange: -8.10, rangeWeight: 0.26, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.57} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.59, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.59, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 10.73, evRange: 5.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.13, raise: 0.87}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 3.65, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.95, evRange: -3.03, rangeWeight: 0.26, freq: {fold: 0.72, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -6.63, raise: 0.90} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.95, evRange: -3.03, rangeWeight: 0.26, freq: {fold: 0.72, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -6.63, raise: 0.90} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.94, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 0.77, call: 0.00, raise: 0.23}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.65, raise: -1.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.94, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 0.77, call: 0.00, raise: 0.23}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.65, raise: -1.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.78, evRange: -5.59, rangeWeight: 0.14, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.34} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.78, evRange: -5.59, rangeWeight: 0.14, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.34} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.36, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.36, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.04} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.89, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.89, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.57, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.57, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.74, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.74, evRange: 0.17, rangeWeight: 0.17, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 1.50}, evA: {fold: -1.00, call: 0.00, raise: 1.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.97, evRange: 2.39, rangeWeight: 0.24, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.98, bet: 0.87}, evA: {check: 2.33, bet: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.97, evRange: 2.39, rangeWeight: 0.24, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.98, bet: 0.87}, evA: {check: 2.33, bet: 2.45} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.61, evRange: -2.38, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.08, bet: -2.68} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.61, evRange: -2.38, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.60, bet: -3.29}, evA: {check: -2.08, bet: -2.68} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 3.95, evRange: 3.83, rangeWeight: 0.02, freq: {check: 0.14, bet: 0.86}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.80, evRange: 2.12, rangeWeight: 0.19, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.70, bet: 2.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.80, evRange: 2.12, rangeWeight: 0.19, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: 0.87}, evA: {check: 1.70, bet: 2.40} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.25, evRange: -2.51, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.06, bet: -2.98} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.25, evRange: -2.51, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.06, bet: -2.98} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.93, bet: 4.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.59, evRange: 2.78, rangeWeight: 0.24, freq: {fold: 0.04, call: 0.95, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 3.64, raise: 6.95} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.59, evRange: 2.78, rangeWeight: 0.24, freq: {fold: 0.04, call: 0.95, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 3.64, raise: 6.95} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -2.35, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -4.43, raise: 0.18} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -2.35, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -4.43, raise: 0.18} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.60, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.01, evRange: -0.12, rangeWeight: 0.19, freq: {fold: 0.18, call: 0.82}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.01, evRange: -0.12, rangeWeight: 0.19, freq: {fold: 0.18, call: 0.82}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.23} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.22, rangeWeight: 0.28, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.55} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.22, rangeWeight: 0.28, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.55} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.74} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.73, evRange: 2.73, rangeWeight: 0.19, freq: {fold: 0.23, call: 0.75, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 3.96, raise: 6.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.73, evRange: 2.73, rangeWeight: 0.19, freq: {fold: 0.23, call: 0.75, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: 3.96, raise: 6.88} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.96, evRange: -2.65, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -4.80, raise: -0.22} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.96, evRange: -2.65, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -4.80, raise: -0.22} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 6.83, raise: 9.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.39, evRange: -0.05, rangeWeight: 0.24, freq: {fold: 0.63, call: 0.37}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.39, evRange: -0.05, rangeWeight: 0.24, freq: {fold: 0.63, call: 0.37}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.72} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -6.82, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -6.96} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -6.82, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -6.96} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.37} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.98, evRange: -1.16, rangeWeight: 0.31, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.95, bet: -1.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.98, evRange: -1.16, rangeWeight: 0.31, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.95, bet: -1.37} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 3.83, evRange: 3.83, rangeWeight: 0.31, freq: {check: 0.51, bet: 0.49}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.29, evRange: -3.60, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.21, bet: -4.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.29, evRange: -3.60, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.21, bet: -4.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.75, evRange: -1.40, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.70, bet: -1.70} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.75, evRange: -1.40, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.70, bet: -1.70} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.37, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.06, bet: 4.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.28, evRange: -3.55, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.93, bet: -4.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.28, evRange: -3.55, rangeWeight: 0.07, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.93, bet: -4.20} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.73, evRange: -1.03, rangeWeight: 0.31, freq: {fold: 0.52, call: 0.48, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.64, raise: 1.92} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.73, evRange: -1.03, rangeWeight: 0.31, freq: {fold: 0.52, call: 0.48, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.64, raise: 1.92} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.43, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.79, evRange: -3.66, rangeWeight: 0.03, freq: {fold: 0.91, call: 0.00, raise: 0.09}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.60, raise: -1.56} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.79, evRange: -3.66, rangeWeight: 0.03, freq: {fold: 0.91, call: 0.00, raise: 0.09}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.60, raise: -1.56} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.89, evRange: -5.52, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.89, evRange: -5.52, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.23} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.37, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.83, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.83, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.74} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.57, evRange: -1.37, rangeWeight: 0.24, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.96, raise: 1.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.57, evRange: -1.37, rangeWeight: 0.24, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.96, raise: 1.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.37, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.80, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.00, evRange: -3.87, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.83, raise: -1.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.00, evRange: -3.87, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.83, raise: -1.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.45, evRange: -5.08, rangeWeight: 0.31, freq: {fold: 0.03, call: 0.97}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.45, evRange: -5.08, rangeWeight: 0.31, freq: {fold: 0.03, call: 0.97}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.72} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 6.96} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.56, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.56, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.94, evRange: 3.83, rangeWeight: 0.31, freq: {check: 0.18, bet: 0.82}, ev: {check: 3.67, bet: 4.00}, evA: {check: 3.67, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.93, evRange: -0.52, rangeWeight: 0.31, freq: {check: 0.56, bet: 0.44}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.36, bet: -0.68} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.93, evRange: -0.52, rangeWeight: 0.31, freq: {check: 0.56, bet: 0.44}, ev: {check: 0.98, bet: 0.87}, evA: {check: -0.36, bet: -0.68} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.29, evRange: -3.64, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.25, bet: -4.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.29, evRange: -3.64, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: -2.60, bet: -3.29}, evA: {check: -3.25, bet: -4.04} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.00, evRange: 3.50, rangeWeight: 0.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.00}, evA: {check: 2.06, bet: 4.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.80, evRange: -1.39, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.69, bet: -1.69} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.80, evRange: -1.39, rangeWeight: 0.33, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: 0.87}, evA: {check: -1.69, bet: -1.69} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -3.55, rangeWeight: 0.07, freq: {check: 0.63, bet: 0.37}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.93, bet: -4.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -3.55, rangeWeight: 0.07, freq: {check: 0.63, bet: 0.37}, ev: {check: -2.25, bet: -3.29}, evA: {check: -2.93, bet: -4.20} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 5.50, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.41, evRange: -0.34, rangeWeight: 0.31, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.34, raise: 2.83} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.41, evRange: -0.34, rangeWeight: 0.31, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -2.34, raise: 2.83} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.64, evRange: -3.70, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 0.99}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.60, raise: -1.61} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.64, evRange: -3.70, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 0.99}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.60, raise: -1.61} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.21, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.57} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.88, evRange: -5.51, rangeWeight: 0.33, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.20} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.88, evRange: -5.51, rangeWeight: 0.33, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.83, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.83, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.74} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 4.33, rangeWeight: 0.21, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.00}, evA: {fold: -3.00, call: 4.82, raise: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.52, evRange: -1.36, rangeWeight: 0.33, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.95, raise: 1.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.52, evRange: -1.36, rangeWeight: 0.33, freq: {fold: 0.69, call: 0.31, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 4.88}, evA: {fold: -3.00, call: -3.95, raise: 1.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.15, evRange: -3.87, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.83, raise: -1.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.15, evRange: -3.87, rangeWeight: 0.07, freq: {fold: 0.64, call: 0.00, raise: 0.36}, ev: {fold: -3.00, call: -5.25, raise: -0.63}, evA: {fold: -3.00, call: -6.83, raise: -1.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -5.02, evRange: -4.17, rangeWeight: 0.31, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.68} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -5.02, evRange: -4.17, rangeWeight: 0.31, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.68} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -8.61, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -8.61, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.37} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.00, evRange: -1.50, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.61, rangeWeight: 0.24, freq: {check: 0.92, bet: 0.08}, ev: {check: 1.19, bet: 1.46}, evA: {check: 2.46, bet: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.61, rangeWeight: 0.24, freq: {check: 0.92, bet: 0.08}, ev: {check: 1.19, bet: 1.46}, evA: {check: 2.46, bet: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.90, evRange: -3.88, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.97, bet: -3.79} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.90, evRange: -3.88, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.90, bet: -3.71}, evA: {check: -3.97, bet: -3.79} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.02, freq: {check: 0.01, bet: 0.99}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.31, evRange: 3.21, rangeWeight: 0.30, freq: {check: 0.72, bet: 0.28}, ev: {check: 1.25, bet: 1.46}, evA: {check: 2.83, bet: 3.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.31, evRange: 3.21, rangeWeight: 0.30, freq: {check: 0.72, bet: 0.28}, ev: {check: 1.25, bet: 1.46}, evA: {check: 2.83, bet: 3.35} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -3.35, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -3.43, bet: -3.33} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -3.35, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -3.43, bet: -3.33} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 4.88, bet: 5.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.26, evRange: 2.42, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 4.00, raise: 7.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.26, evRange: 2.42, rangeWeight: 0.24, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 4.00, raise: 7.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -4.12, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.96, raise: -0.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -4.12, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.96, raise: -0.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.75, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.08, evRange: -0.50, rangeWeight: 0.30, freq: {fold: 0.01, call: 0.99}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.08, evRange: -0.50, rangeWeight: 0.30, freq: {fold: 0.01, call: 0.99}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.36} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.04, evRange: -8.89, rangeWeight: 0.19, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -8.92} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.04, evRange: -8.89, rangeWeight: 0.19, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -8.92} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.69} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.89, evRange: 3.01, rangeWeight: 0.30, freq: {fold: 0.07, call: 0.89, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 5.09, raise: 8.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.89, evRange: 3.01, rangeWeight: 0.30, freq: {fold: 0.07, call: 0.89, raise: 0.04}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: 5.09, raise: 8.50} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -3.66, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.17, raise: 0.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -3.66, rangeWeight: 0.19, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -6.17, raise: 0.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 8.79, raise: 11.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.10, evRange: -1.25, rangeWeight: 0.24, freq: {fold: 0.52, call: 0.48}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.10, evRange: -1.25, rangeWeight: 0.24, freq: {fold: 0.52, call: 0.48}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.77} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.47, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.05} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.47, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.05} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.02, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.64} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.38, evRange: -1.23, rangeWeight: 0.31, freq: {check: 0.29, bet: 0.71}, ev: {check: 1.19, bet: 1.46}, evA: {check: -1.35, bet: -1.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.38, evRange: -1.23, rangeWeight: 0.31, freq: {check: 0.29, bet: 0.71}, ev: {check: 1.19, bet: 1.46}, evA: {check: -1.35, bet: -1.12} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.32, evRange: 5.17, rangeWeight: 0.31, freq: {check: 0.04, bet: 0.96}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.87, evRange: -4.91, rangeWeight: 0.03, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.99, bet: -4.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.87, evRange: -4.91, rangeWeight: 0.03, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.99, bet: -4.82} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.36, evRange: -1.79, rangeWeight: 0.35, freq: {check: 0.48, bet: 0.52}, ev: {check: 1.25, bet: 1.46}, evA: {check: -2.83, bet: -1.73} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.36, evRange: -1.79, rangeWeight: 0.35, freq: {check: 0.48, bet: 0.52}, ev: {check: 1.25, bet: 1.46}, evA: {check: -2.83, bet: -1.73} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.23, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 3.43, bet: 5.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.75, evRange: -4.84, rangeWeight: 0.03, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.88, bet: -4.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.75, evRange: -4.84, rangeWeight: 0.03, freq: {check: 0.97, bet: 0.03}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.88, bet: -4.84} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.89, evRange: -1.45, rangeWeight: 0.31, freq: {fold: 0.23, call: 0.70, raise: 0.07}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -4.00, raise: 2.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.89, evRange: -1.45, rangeWeight: 0.31, freq: {fold: 0.23, call: 0.70, raise: 0.07}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -4.00, raise: 2.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.96, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.16, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.75, raise: -1.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.16, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.75, raise: -1.78} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.43, evRange: -6.89, rangeWeight: 0.35, freq: {fold: 0.55, call: 0.45}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.43, evRange: -6.89, rangeWeight: 0.35, freq: {fold: 0.55, call: 0.45}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.36} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 8.92} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -10.80, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -10.80, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.69} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.19, evRange: -2.07, rangeWeight: 0.35, freq: {fold: 0.37, call: 0.57, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.09, raise: 2.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.19, evRange: -2.07, rangeWeight: 0.35, freq: {fold: 0.37, call: 0.57, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.09, raise: 2.11} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.17, raise: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.76, evRange: -5.17, rangeWeight: 0.03, freq: {fold: 0.51, call: 0.00, raise: 0.49}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.79, raise: -1.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.76, evRange: -5.17, rangeWeight: 0.03, freq: {fold: 0.51, call: 0.00, raise: 0.49}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.79, raise: -1.80} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.15, evRange: -6.12, rangeWeight: 0.31, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.15, evRange: -6.12, rangeWeight: 0.31, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.77} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.78, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.78, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.17, evRange: 5.17, rangeWeight: 0.31, freq: {check: 0.50, bet: 0.50}, ev: {check: 5.00, bet: 5.33}, evA: {check: 5.00, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.22, evRange: -2.24, rangeWeight: 0.31, freq: {check: 0.89, bet: 0.11}, ev: {check: 1.19, bet: 1.46}, evA: {check: -2.34, bet: -2.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.22, evRange: -2.24, rangeWeight: 0.31, freq: {check: 0.89, bet: 0.11}, ev: {check: 1.19, bet: 1.46}, evA: {check: -2.34, bet: -2.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.80, evRange: -4.88, rangeWeight: 0.03, freq: {check: 0.47, bet: 0.53}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.97, bet: -4.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.80, evRange: -4.88, rangeWeight: 0.03, freq: {check: 0.47, bet: 0.53}, ev: {check: -3.90, bet: -3.71}, evA: {check: -4.97, bet: -4.80} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 5.33, evRange: 5.17, rangeWeight: 0.40, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 5.33}, evA: {check: 3.44, bet: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.34, evRange: -1.78, rangeWeight: 0.26, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: -2.82, bet: -1.72} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.34, evRange: -1.78, rangeWeight: 0.26, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: 1.46}, evA: {check: -2.82, bet: -1.72} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.71, evRange: -4.84, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.88, bet: -4.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.71, evRange: -4.84, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -3.71}, evA: {check: -4.88, bet: -4.84} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 5.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 5.36, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.82, evRange: -2.46, rangeWeight: 0.31, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.77, raise: 1.61} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.82, evRange: -2.46, rangeWeight: 0.31, freq: {fold: 0.70, call: 0.30, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.77, raise: 1.61} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.06, evRange: -5.13, rangeWeight: 0.03, freq: {fold: 0.15, call: 0.00, raise: 0.85}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.75, raise: -1.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.06, evRange: -5.13, rangeWeight: 0.03, freq: {fold: 0.15, call: 0.00, raise: 0.85}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.75, raise: -1.74} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.40, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 8.94} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.19, evRange: -6.88, rangeWeight: 0.26, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.19, evRange: -6.88, rangeWeight: 0.26, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.80, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.80, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.69} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 10.99, evRange: 5.00, rangeWeight: 0.40, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.00}, evA: {fold: -5.00, call: 6.19, raise: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.42, evRange: -2.06, rangeWeight: 0.26, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.08, raise: 2.12} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.42, evRange: -2.06, rangeWeight: 0.26, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 6.13}, evA: {fold: -5.00, call: -5.08, raise: 2.12} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.42, evRange: -5.17, rangeWeight: 0.04, freq: {fold: 0.66, call: 0.00, raise: 0.34}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.79, raise: -1.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.42, evRange: -5.17, rangeWeight: 0.04, freq: {fold: 0.66, call: 0.00, raise: 0.34}, ev: {fold: -5.00, call: -6.75, raise: -0.38}, evA: {fold: -5.00, call: -8.79, raise: -1.80} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 2.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 7.74} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -9.00, evRange: -7.39, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -9.00, evRange: -7.39, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -10.74, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -10.74, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
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
