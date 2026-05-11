// Recursive Leduc Tree Structure
// Each node contains its children, making navigation simple

(function() {
  window.LEDUC_TREE = {
  j: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.25, evRange: 0.25, rangeWeight: 0.17, freq: {check: 0.25, bet: 0.75}, ev: {check: 0.00, bet: 0.33}, evA: {check: 0.00, bet: 0.33} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.23, evRange: 0.23, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: -0.03, bet: 0.33}, evA: {check: -0.03, bet: 0.33} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.23, evRange: 0.23, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: -0.03, bet: 0.33}, evA: {check: -0.03, bet: 0.33} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.68, evRange: -0.68, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: 0.16}, evA: {check: -0.75, bet: 0.16} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.68, evRange: -0.68, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: 0.16}, evA: {check: -0.75, bet: 0.16} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.39, evRange: 0.64, rangeWeight: 0.17, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.00, bet: 0.39}, evA: {check: 0.00, bet: 0.65} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.39, evRange: 0.64, rangeWeight: 0.17, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.00, bet: 0.39}, evA: {check: 0.00, bet: 0.65} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.32, evRange: 0.55, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.32, evRange: 0.55, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.00, bet: 0.20}, evA: {check: 0.00, bet: 0.42} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.00, bet: 0.20}, evA: {check: 0.00, bet: 0.42} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.40, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -0.63}, evA: {check: -0.40, bet: -3.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.40, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -0.63}, evA: {check: -0.40, bet: -3.50} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.83, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.57}, evA: {check: -0.83, bet: -3.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.83, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.57}, evA: {check: -0.83, bet: -3.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.01, evRange: 1.01, rangeWeight: 0.47, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.01, bet: 1.05}, evA: {check: 1.01, bet: 1.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.23, rangeWeight: 0.01, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.02}, evA: {check: -0.50, bet: -3.34} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.23, rangeWeight: 0.01, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.02}, evA: {check: -0.50, bet: -3.34} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.85, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.50}, evA: {check: -0.90, bet: -2.27} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.85, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.50}, evA: {check: -0.90, bet: -2.27} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, rangeWeight: 0.69, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00}, evA: {check: 0.53, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.86}, evA: {fold: -1.00, call: -3.22, raise: -4.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.86}, evA: {fold: -1.00, call: -3.22, raise: -4.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.12}, evA: {fold: -1.00, call: -4.52, raise: -6.46} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.12}, evA: {fold: -1.00, call: -4.52, raise: -6.46} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.04, evRange: 5.12, rangeWeight: 0.47, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.04}, evA: {fold: -1.00, call: 1.55, raise: 5.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.25, evRange: -3.46, rangeWeight: 0.01, freq: {fold: 0.48, call: 0.52}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.25, evRange: -3.46, rangeWeight: 0.01, freq: {fold: 0.48, call: 0.52}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.07} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.07} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.69, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 4.78} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.95, evRange: -1.01, rangeWeight: 0.01, freq: {fold: 0.98, call: 0.02, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.36}, evA: {fold: -1.00, call: -2.48, raise: -2.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.95, evRange: -1.01, rangeWeight: 0.01, freq: {fold: 0.98, call: 0.02, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.36}, evA: {fold: -1.00, call: -2.48, raise: -2.61} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.67}, evA: {fold: -1.00, call: -4.49, raise: -3.10} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.67}, evA: {fold: -1.00, call: -4.49, raise: -3.10} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.24, evRange: 5.24, rangeWeight: 0.69, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.24}, evA: {fold: -1.00, call: 2.65, raise: 5.24} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.15, evRange: -4.83, rangeWeight: 0.13, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.15, evRange: -4.83, rangeWeight: 0.13, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.80} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.14} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.14} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.99, evRange: 8.99, rangeWeight: 0.47, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 2.79} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.15, evRange: 0.67, rangeWeight: 0.10, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.55}, evA: {check: 0.67, bet: 0.24} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.15, evRange: 0.67, rangeWeight: 0.10, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.55}, evA: {check: 0.67, bet: 0.24} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.09, evRange: 1.28, rangeWeight: 0.10, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.17, bet: 3.06}, evA: {check: 1.28, bet: 1.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.20, evRange: -0.26, rangeWeight: 0.35, freq: {check: 0.84, bet: 0.16}, ev: {check: -0.77, bet: -3.46}, evA: {check: -0.25, bet: -0.28} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.20, evRange: -0.26, rangeWeight: 0.35, freq: {check: 0.84, bet: 0.16}, ev: {check: -0.77, bet: -3.46}, evA: {check: -0.25, bet: -0.28} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 0.66, rangeWeight: 0.01, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: -0.82}, evA: {check: 0.50, bet: 0.17} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 0.66, rangeWeight: 0.01, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: -0.82}, evA: {check: 0.50, bet: 0.17} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.84, evRange: 1.37, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.84}, evA: {check: 0.90, bet: 1.37} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.47, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.74}, evA: {check: -0.53, bet: -0.70} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.47, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.74}, evA: {check: -0.53, bet: -0.70} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.07, evRange: 1.06, rangeWeight: 0.10, freq: {fold: 0.59, call: 0.41, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.24}, evA: {fold: -1.00, call: 3.22, raise: 3.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.07, evRange: 1.06, rangeWeight: 0.10, freq: {fold: 0.59, call: 0.41, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.24}, evA: {fold: -1.00, call: 3.22, raise: 3.65} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.43, evRange: 5.01, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.43}, evA: {fold: -1.00, call: 4.52, raise: 5.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.99, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.01}, evA: {fold: -1.00, call: -1.55, raise: 2.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.99, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.01}, evA: {fold: -1.00, call: -1.55, raise: 2.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.46, evRange: -2.66, rangeWeight: 0.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.46, evRange: -2.66, rangeWeight: 0.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.78} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.19, evRange: 3.21, rangeWeight: 0.01, freq: {fold: 0.03, call: 0.97, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.38}, evA: {fold: -1.00, call: 2.48, raise: 2.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.19, evRange: 3.21, rangeWeight: 0.01, freq: {fold: 0.03, call: 0.97, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.38}, evA: {fold: -1.00, call: 2.48, raise: 2.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.81, evRange: 5.78, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.81}, evA: {fold: -1.00, call: 4.49, raise: 5.78} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.11, evRange: -1.00, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.80}, evA: {fold: -1.00, call: -2.65, raise: -0.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.11, evRange: -1.00, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.80}, evA: {fold: -1.00, call: -2.65, raise: -0.98} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.53, evRange: 6.00, rangeWeight: 0.10, freq: {fold: 0.10, call: 0.90}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.53, evRange: 6.00, rangeWeight: 0.10, freq: {fold: 0.10, call: 0.90}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.80} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.01, evRange: -4.99, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.01, evRange: -4.99, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.79} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.45, evRange: 1.52, rangeWeight: 0.10, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.20, bet: 2.45}, evA: {check: 1.43, bet: 1.52} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.96, evRange: 0.89, rangeWeight: 0.10, freq: {check: 0.63, bet: 0.37}, ev: {check: -0.71, bet: -1.38}, evA: {check: 0.89, bet: 0.89} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.96, evRange: 0.89, rangeWeight: 0.10, freq: {check: 0.63, bet: 0.37}, ev: {check: -0.71, bet: -1.38}, evA: {check: 0.89, bet: 0.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.92, evRange: -0.31, rangeWeight: 0.35, freq: {check: 0.91, bet: 0.09}, ev: {check: -0.75, bet: -2.67}, evA: {check: -0.31, bet: -0.34} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.92, evRange: -0.31, rangeWeight: 0.35, freq: {check: 0.91, bet: 0.09}, ev: {check: -0.75, bet: -2.67}, evA: {check: -0.31, bet: -0.34} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.95, evRange: 1.88, rangeWeight: 0.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.95}, evA: {check: 0.90, bet: 1.88} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.34, evRange: 0.42, rangeWeight: 0.09, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.25, bet: -1.72}, evA: {check: 0.51, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.34, evRange: 0.42, rangeWeight: 0.09, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.25, bet: -1.72}, evA: {check: 0.51, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.76, evRange: -0.47, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.41}, evA: {check: -0.53, bet: -1.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.76, evRange: -0.47, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.41}, evA: {check: -0.53, bet: -1.72} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.97, evRange: 5.71, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.98}, evA: {fold: -1.00, call: 4.98, raise: 5.71} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.18, evRange: 4.30, rangeWeight: 0.10, freq: {fold: 0.03, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.28}, evA: {fold: -1.00, call: 4.42, raise: 4.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.18, evRange: 4.30, rangeWeight: 0.10, freq: {fold: 0.03, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.28}, evA: {fold: -1.00, call: 4.42, raise: 4.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.39}, evA: {fold: -1.00, call: -1.55, raise: 0.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.39}, evA: {fold: -1.00, call: -1.55, raise: 0.78} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.14} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.13, evRange: 5.87, rangeWeight: 0.09, freq: {fold: 0.02, call: 0.98}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.61} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.13, evRange: 5.87, rangeWeight: 0.09, freq: {fold: 0.02, call: 0.98}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.61} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.01, evRange: -5.00, rangeWeight: 0.41, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.01, evRange: -5.00, rangeWeight: 0.41, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.78} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.41, evRange: 5.64, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.42}, evA: {fold: -1.00, call: 4.52, raise: 5.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.62, evRange: 2.15, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.62}, evA: {fold: -1.00, call: 2.56, raise: 3.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.62, evRange: 2.15, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.62}, evA: {fold: -1.00, call: 2.56, raise: 3.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.44}, evA: {fold: -1.00, call: -2.65, raise: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.44}, evA: {fold: -1.00, call: -2.65, raise: -0.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.96} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.12, evRange: 4.20, rangeWeight: 0.10, freq: {fold: 0.29, call: 0.71}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 7.96} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.12, evRange: 4.20, rangeWeight: 0.10, freq: {fold: 0.29, call: 0.71}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 7.96} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.79} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.01, evRange: 0.01, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.28, raise: 0.72}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.01, evRange: 0.01, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.28, raise: 0.72}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.09, freq: {fold: 0.04, call: 0.80, raise: 0.16}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.09, freq: {fold: 0.04, call: 0.80, raise: 0.16}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.94, evRange: -0.94, rangeWeight: 0.32, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.94, evRange: -0.94, rangeWeight: 0.32, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.69, evRange: 2.11, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.69, bet: -0.28}, evA: {check: 2.11, bet: 1.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.69, evRange: 2.11, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.69, bet: -0.28}, evA: {check: 2.11, bet: 1.20} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.64, evRange: -2.58, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.63, bet: -3.29}, evA: {check: -2.57, bet: -2.74} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.64, evRange: -2.58, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.63, bet: -3.29}, evA: {check: -2.57, bet: -2.74} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.55, evRange: 4.64, rangeWeight: 0.06, freq: {check: 0.19, bet: 0.81}, ev: {check: 4.63, bet: 4.53}, evA: {check: 4.60, bet: 4.65} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.44, evRange: 2.13, rangeWeight: 0.25, freq: {check: 0.84, bet: 0.16}, ev: {check: 0.75, bet: -1.18}, evA: {check: 1.87, bet: 1.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.44, evRange: 2.13, rangeWeight: 0.25, freq: {check: 0.84, bet: 0.16}, ev: {check: 0.75, bet: -1.18}, evA: {check: 1.87, bet: 1.77} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.35, evRange: -1.49, rangeWeight: 0.21, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -4.58}, evA: {check: -1.50, bet: -1.64} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.35, evRange: -1.49, rangeWeight: 0.21, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -4.58}, evA: {check: -1.50, bet: -1.64} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.06, evRange: 4.09, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.06}, evA: {check: 2.82, bet: 4.09} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.75, evRange: 3.32, rangeWeight: 0.12, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.85}, evA: {fold: -3.00, call: 2.42, raise: 3.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.75, evRange: 3.32, rangeWeight: 0.12, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.85}, evA: {fold: -3.00, call: 2.42, raise: 3.05} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.06, evRange: -3.05, rangeWeight: 0.35, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -6.56}, evA: {fold: -3.00, call: -5.26, raise: -6.16} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.06, evRange: -3.05, rangeWeight: 0.35, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -6.56}, evA: {fold: -3.00, call: -5.26, raise: -6.16} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.09, evRange: 9.24, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.09}, evA: {fold: -3.00, call: 6.50, raise: 9.24} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.72, evRange: 8.02, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.72, evRange: 8.02, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.06, evRange: -6.91, rangeWeight: 0.21, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.50} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.06, evRange: -6.91, rangeWeight: 0.21, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.50} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.35} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.59, evRange: 3.15, rangeWeight: 0.25, freq: {fold: 0.24, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.15}, evA: {fold: -3.00, call: 4.37, raise: 5.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.59, evRange: 3.15, rangeWeight: 0.25, freq: {fold: 0.24, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.15}, evA: {fold: -3.00, call: 4.37, raise: 5.61} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.99, evRange: -2.98, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 0.67}, evA: {fold: -3.00, call: -3.50, raise: 4.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.99, evRange: -2.98, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 0.67}, evA: {fold: -3.00, call: -3.50, raise: 4.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.41, evRange: 7.21, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.41}, evA: {fold: -3.00, call: 6.59, raise: 7.21} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -5.02, evRange: -4.52, rangeWeight: 0.12, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.81} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -5.02, evRange: -4.52, rangeWeight: 0.12, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.81} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.26} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.26} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.21} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: -1.30, rangeWeight: 0.17, freq: {check: 0.11, bet: 0.89}, ev: {check: 0.04, bet: -0.28}, evA: {check: -1.32, bet: -1.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: -1.30, rangeWeight: 0.17, freq: {check: 0.11, bet: 0.89}, ev: {check: 0.04, bet: -0.28}, evA: {check: -1.32, bet: -1.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.24, evRange: 4.55, rangeWeight: 0.50, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.47, bet: 4.24}, evA: {check: 4.25, bet: 4.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.96, evRange: -2.62, rangeWeight: 0.08, freq: {check: 0.07, bet: 0.93}, ev: {check: -2.59, bet: -1.92}, evA: {check: -2.87, bet: -2.60} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.96, evRange: -2.62, rangeWeight: 0.08, freq: {check: 0.07, bet: 0.93}, ev: {check: -2.59, bet: -1.92}, evA: {check: -2.87, bet: -2.60} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.52, evRange: -1.80, rangeWeight: 0.29, freq: {check: 0.75, bet: 0.25}, ev: {check: 0.75, bet: -0.18}, evA: {check: -1.87, bet: -3.57} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.52, evRange: -1.80, rangeWeight: 0.29, freq: {check: 0.75, bet: 0.25}, ev: {check: 0.75, bet: -0.18}, evA: {check: -1.87, bet: -3.57} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.34, evRange: 4.67, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.34}, evA: {check: 1.50, bet: 4.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.37, evRange: -3.60, rangeWeight: 0.08, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -2.51}, evA: {check: -2.82, bet: -4.61} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.37, evRange: -3.60, rangeWeight: 0.08, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -2.51}, evA: {check: -2.82, bet: -4.61} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: -1.72, rangeWeight: 0.17, freq: {fold: 0.42, call: 0.57, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.40}, evA: {fold: -3.00, call: -2.42, raise: 0.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: -1.72, rangeWeight: 0.17, freq: {fold: 0.42, call: 0.57, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.40}, evA: {fold: -3.00, call: -2.42, raise: 0.50} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.12, evRange: 7.19, rangeWeight: 0.50, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.12}, evA: {fold: -3.00, call: 5.26, raise: 7.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.80, evRange: -2.83, rangeWeight: 0.08, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -5.25, raise: 1.96}, evA: {fold: -3.00, call: -6.50, raise: 1.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.80, evRange: -2.83, rangeWeight: 0.08, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -5.25, raise: 1.96}, evA: {fold: -3.00, call: -6.50, raise: 1.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.42, evRange: -6.85, rangeWeight: 0.29, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.42, evRange: -6.85, rangeWeight: 0.29, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 5.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.35} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.35} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.90, evRange: -2.92, rangeWeight: 0.29, freq: {fold: 0.56, call: 0.43, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.37, raise: -3.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.90, evRange: -2.92, rangeWeight: 0.29, freq: {fold: 0.56, call: 0.43, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.37, raise: -3.80} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 3.50, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.53, evRange: -2.99, rangeWeight: 0.08, freq: {fold: 0.91, call: 0.00, raise: 0.09}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.59, raise: -2.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.53, evRange: -2.99, rangeWeight: 0.08, freq: {fold: 0.91, call: 0.00, raise: 0.09}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.59, raise: -2.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.97, evRange: -6.98, rangeWeight: 0.17, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.81} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.97, evRange: -6.98, rangeWeight: 0.17, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.81} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.50, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.26} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.71, evRange: 4.61, rangeWeight: 0.12, freq: {check: 0.83, bet: 0.17}, ev: {check: 4.80, bet: 4.27}, evA: {check: 4.62, bet: 4.59} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.04, evRange: -1.67, rangeWeight: 0.37, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.04, bet: -0.28}, evA: {check: -1.67, bet: -1.85} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.04, evRange: -1.67, rangeWeight: 0.37, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.04, bet: -0.28}, evA: {check: -1.67, bet: -1.85} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.57, evRange: -2.89, rangeWeight: 0.06, freq: {check: 0.94, bet: 0.06}, ev: {check: -2.60, bet: -1.98}, evA: {check: -2.88, bet: -3.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.57, evRange: -2.89, rangeWeight: 0.06, freq: {check: 0.94, bet: 0.06}, ev: {check: -2.60, bet: -1.98}, evA: {check: -2.88, bet: -3.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.34, evRange: 4.99, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.34}, evA: {check: 2.63, bet: 4.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.42, evRange: -0.05, rangeWeight: 0.26, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: -0.21}, evA: {check: -0.50, bet: -0.15} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.42, evRange: -0.05, rangeWeight: 0.26, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: -0.21}, evA: {check: -0.50, bet: -0.15} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.34, evRange: -2.82, rangeWeight: 0.09, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -2.43}, evA: {check: -2.82, bet: -2.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.34, evRange: -2.82, rangeWeight: 0.09, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -2.43}, evA: {check: -2.82, bet: -2.83} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 7.09, rangeWeight: 0.12, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.06}, evA: {fold: -3.00, call: 4.87, raise: 7.09} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.35, evRange: -2.01, rangeWeight: 0.37, freq: {fold: 0.44, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45}, evA: {fold: -3.00, call: -2.92, raise: -0.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.35, evRange: -2.01, rangeWeight: 0.37, freq: {fold: 0.44, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45}, evA: {fold: -3.00, call: -2.92, raise: -0.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.72, evRange: -2.80, rangeWeight: 0.06, freq: {fold: 0.95, call: 0.00, raise: 0.05}, ev: {fold: -3.00, call: -5.25, raise: 2.24}, evA: {fold: -3.00, call: -6.50, raise: 0.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.72, evRange: -2.80, rangeWeight: 0.06, freq: {fold: 0.95, call: 0.00, raise: 0.05}, ev: {fold: -3.00, call: -5.25, raise: 2.24}, evA: {fold: -3.00, call: -6.50, raise: 0.69} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.30, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 9.63} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.72, evRange: -6.80, rangeWeight: 0.26, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -1.83} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.72, evRange: -6.80, rangeWeight: 0.26, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -1.83} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.35} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.35} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.02, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 6.13, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.82, evRange: -1.56, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.43, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -1.16, raise: 3.38} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.82, evRange: -1.56, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.43, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -1.16, raise: 3.38} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.56, evRange: -2.40, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.59, raise: 4.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.56, evRange: -2.40, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.59, raise: 4.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.65} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -6.97, rangeWeight: 0.37, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.58} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -6.97, rangeWeight: 0.37, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.58} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
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
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 1.99, rangeWeight: 0.39, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.25, bet: -0.14}, evA: {check: 1.99, bet: 1.96} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 1.99, rangeWeight: 0.39, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.25, bet: -0.14}, evA: {check: 1.99, bet: 1.96} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.77, evRange: -3.65, rangeWeight: 0.09, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.75, bet: -4.58}, evA: {check: -3.64, bet: -4.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.77, evRange: -3.65, rangeWeight: 0.09, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.75, bet: -4.58}, evA: {check: -3.64, bet: -4.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.86, evRange: 6.99, rangeWeight: 0.04, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.64, bet: 6.86}, evA: {check: 6.77, bet: 7.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.43, evRange: 1.02, rangeWeight: 0.25, freq: {check: 0.56, bet: 0.44}, ev: {check: 1.25, bet: -0.63}, evA: {check: 0.85, bet: 0.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.43, evRange: 1.02, rangeWeight: 0.25, freq: {check: 0.56, bet: 0.44}, ev: {check: 1.25, bet: -0.63}, evA: {check: 0.85, bet: 0.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.48, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.47}, evA: {check: -4.50, bet: -7.49} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.48, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.47}, evA: {check: -4.50, bet: -7.49} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.99, evRange: 8.20, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.99}, evA: {check: 4.80, bet: 8.20} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.22, evRange: 4.23, rangeWeight: 0.39, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.52}, evA: {fold: -5.00, call: 3.11, raise: 4.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.22, evRange: 4.23, rangeWeight: 0.39, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.52}, evA: {fold: -5.00, call: 3.11, raise: 4.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.21}, evA: {fold: -5.00, call: -6.76, raise: -5.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.21}, evA: {fold: -5.00, call: -6.76, raise: -5.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.77, evRange: 10.91, rangeWeight: 0.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.77}, evA: {fold: -5.00, call: 8.36, raise: 10.91} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.81, evRange: 1.75, rangeWeight: 0.25, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.81, evRange: 1.75, rangeWeight: 0.25, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.22} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.70} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.70} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.24, rangeWeight: 0.25, freq: {fold: 0.14, call: 0.83, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.36}, evA: {fold: -5.00, call: 1.53, raise: 4.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.24, rangeWeight: 0.25, freq: {fold: 0.14, call: 0.83, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.36}, evA: {fold: -5.00, call: 1.53, raise: 4.72} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.93, evRange: -4.92, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -2.13}, evA: {fold: -5.00, call: -8.10, raise: -1.53} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.93, evRange: -4.92, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -2.13}, evA: {fold: -5.00, call: -8.10, raise: -1.53} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.03, evRange: 10.64, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.03}, evA: {fold: -5.00, call: 8.65, raise: 10.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.74, evRange: -1.25, rangeWeight: 0.39, freq: {fold: 0.49, call: 0.51}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.74, evRange: -1.25, rangeWeight: 0.39, freq: {fold: 0.49, call: 0.51}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.49} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.77} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.77} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.07} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.30, evRange: -1.93, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.32, bet: -0.68}, evA: {check: -1.93, bet: -2.17} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.30, evRange: -1.93, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.32, bet: -0.68}, evA: {check: -1.93, bet: -2.17} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.89, evRange: 7.61, rangeWeight: 0.10, freq: {check: 0.79, bet: 0.21}, ev: {check: 6.78, bet: 7.31}, evA: {check: 7.62, bet: 7.54} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.87, evRange: -4.62, rangeWeight: 0.04, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.87, bet: -3.92}, evA: {check: -4.60, bet: -4.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.87, evRange: -4.62, rangeWeight: 0.04, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.87, bet: -3.92}, evA: {check: -4.60, bet: -4.96} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.42, evRange: -0.26, rangeWeight: 0.29, freq: {check: 0.42, bet: 0.58}, ev: {check: 1.25, bet: -0.16}, evA: {check: -0.85, bet: -0.34} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.42, evRange: -0.26, rangeWeight: 0.29, freq: {check: 0.42, bet: 0.58}, ev: {check: 1.25, bet: -0.16}, evA: {check: -0.85, bet: -0.34} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.82, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.01}, evA: {check: 4.50, bet: 7.82} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.77, evRange: -4.81, rangeWeight: 0.08, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -4.01}, evA: {check: -4.80, bet: -5.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.77, evRange: -4.81, rangeWeight: 0.08, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -4.01}, evA: {check: -4.80, bet: -5.19} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.26, evRange: -2.11, rangeWeight: 0.41, freq: {fold: 0.28, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.58}, evA: {fold: -5.00, call: -3.11, raise: -0.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.26, evRange: -2.11, rangeWeight: 0.41, freq: {fold: 0.28, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.58}, evA: {fold: -5.00, call: -3.11, raise: -0.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.83, evRange: 10.28, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83}, evA: {fold: -5.00, call: 6.76, raise: 10.28} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.50, evRange: -4.72, rangeWeight: 0.04, freq: {fold: 0.87, call: 0.00, raise: 0.13}, ev: {fold: -5.00, call: -6.75, raise: -1.02}, evA: {fold: -5.00, call: -8.36, raise: -2.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.50, evRange: -4.72, rangeWeight: 0.04, freq: {fold: 0.87, call: 0.00, raise: 0.13}, ev: {fold: -5.00, call: -6.75, raise: -1.02}, evA: {fold: -5.00, call: -8.36, raise: -2.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.98, evRange: -5.47, rangeWeight: 0.29, freq: {fold: 0.59, call: 0.41}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.98, evRange: -5.47, rangeWeight: 0.29, freq: {fold: 0.59, call: 0.41}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.22} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 11.70} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.23, evRange: -1.79, rangeWeight: 0.29, freq: {fold: 0.34, call: 0.63, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.01}, evA: {fold: -5.00, call: -1.53, raise: 3.92} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.23, evRange: -1.79, rangeWeight: 0.29, freq: {fold: 0.34, call: 0.63, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.01}, evA: {fold: -5.00, call: -1.53, raise: 3.92} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.44, evRange: 9.79, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.44}, evA: {fold: -5.00, call: 8.10, raise: 9.79} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.54, evRange: -3.18, rangeWeight: 0.08, freq: {fold: 0.76, call: 0.00, raise: 0.24}, ev: {fold: -5.00, call: -6.75, raise: 1.11}, evA: {fold: -5.00, call: -8.65, raise: 2.62} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.54, evRange: -3.18, rangeWeight: 0.08, freq: {fold: 0.76, call: 0.00, raise: 0.24}, ev: {fold: -5.00, call: -6.75, raise: 1.11}, evA: {fold: -5.00, call: -8.65, raise: 2.62} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.34, evRange: -7.37, rangeWeight: 0.41, freq: {fold: 0.78, call: 0.22}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.34, evRange: -7.37, rangeWeight: 0.41, freq: {fold: 0.78, call: 0.22}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.49} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.77} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.07} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.32, evRange: 6.35, rangeWeight: 0.59, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.16, bet: 6.32}, evA: {check: 5.92, bet: 6.36} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.01, evRange: -1.95, rangeWeight: 0.15, freq: {check: 0.06, bet: 0.94}, ev: {check: 0.38, bet: -0.03}, evA: {check: -2.16, bet: -1.94} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.01, evRange: -1.95, rangeWeight: 0.15, freq: {check: 0.06, bet: 0.94}, ev: {check: 0.38, bet: -0.03}, evA: {check: -2.16, bet: -1.94} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.43, evRange: -2.60, rangeWeight: 0.06, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.23, bet: -1.40}, evA: {check: -4.79, bet: -2.58} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.43, evRange: -2.60, rangeWeight: 0.06, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.23, bet: -1.40}, evA: {check: -4.79, bet: -2.58} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.66, evRange: 7.10, rangeWeight: 0.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.66}, evA: {check: 2.05, bet: 7.10} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.07, evRange: -3.20, rangeWeight: 0.26, freq: {check: 0.83, bet: 0.17}, ev: {check: 1.25, bet: 0.17}, evA: {check: -3.67, bet: -5.40} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.07, evRange: -3.20, rangeWeight: 0.26, freq: {check: 0.83, bet: 0.17}, ev: {check: 1.25, bet: 0.17}, evA: {check: -3.67, bet: -5.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.63, evRange: -5.54, rangeWeight: 0.09, freq: {check: 0.59, bet: 0.41}, ev: {check: -3.75, bet: -3.46}, evA: {check: -4.80, bet: -6.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.63, evRange: -5.54, rangeWeight: 0.09, freq: {check: 0.59, bet: 0.41}, ev: {check: -3.75, bet: -3.46}, evA: {check: -4.80, bet: -6.76} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.02, rangeWeight: 0.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02}, evA: {fold: -5.00, call: 6.25, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.11, evRange: -2.69, rangeWeight: 0.15, freq: {fold: 0.33, call: 0.66, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.48}, evA: {fold: -5.00, call: -3.76, raise: -0.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.11, evRange: -2.69, rangeWeight: 0.15, freq: {fold: 0.33, call: 0.66, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.48}, evA: {fold: -5.00, call: -3.76, raise: -0.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.44, evRange: -4.58, rangeWeight: 0.06, freq: {fold: 0.92, call: 0.01, raise: 0.07}, ev: {fold: -5.00, call: -6.75, raise: 3.41}, evA: {fold: -5.00, call: -8.36, raise: 1.54} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.44, evRange: -4.58, rangeWeight: 0.06, freq: {fold: 0.92, call: 0.01, raise: 0.07}, ev: {fold: -5.00, call: -6.75, raise: 3.41}, evA: {fold: -5.00, call: -8.36, raise: 1.54} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.90, evRange: -8.99, rangeWeight: 0.26, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.54} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.90, evRange: -8.99, rangeWeight: 0.26, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.54} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.04, evRange: 9.05, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.04}, evA: {fold: -5.00, call: 3.69, raise: 9.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.55, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 0.66, call: 0.32, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.46}, evA: {fold: -5.00, call: -6.61, raise: -6.22} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.55, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 0.66, call: 0.32, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.46}, evA: {fold: -5.00, call: -6.61, raise: -6.22} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.70, evRange: -4.99, rangeWeight: 0.09, freq: {fold: 0.84, call: 0.00, raise: 0.16}, ev: {fold: -5.00, call: -6.75, raise: 3.31}, evA: {fold: -5.00, call: -8.65, raise: -4.93} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.70, evRange: -4.99, rangeWeight: 0.09, freq: {fold: 0.84, call: 0.00, raise: 0.16}, ev: {fold: -5.00, call: -6.75, raise: 3.31}, evA: {fold: -5.00, call: -8.65, raise: -4.93} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.79, evRange: -8.89, rangeWeight: 0.15, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.79, evRange: -8.89, rangeWeight: 0.15, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.07} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.40, raise: 0.60}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.40, raise: 0.60}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.17, freq: {fold: 0.02, call: 0.60, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.17, freq: {fold: 0.02, call: 0.60, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.81, evRange: -0.81, rangeWeight: 0.17, freq: {fold: 0.81, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.81, evRange: -0.81, rangeWeight: 0.17, freq: {fold: 0.81, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: 1.56, rangeWeight: 0.25, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.23, bet: -0.38}, evA: {check: 1.56, bet: 1.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: 1.56, rangeWeight: 0.25, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.23, bet: -0.38}, evA: {check: 1.56, bet: 1.54} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.27, evRange: -1.82, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.47}, evA: {check: -1.82, bet: -2.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.27, evRange: -1.82, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.47}, evA: {check: -1.82, bet: -2.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.66, evRange: 4.35, rangeWeight: 0.03, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.63, bet: 4.67}, evA: {check: 4.29, bet: 4.36} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.05, evRange: 1.72, rangeWeight: 0.19, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.75, bet: -0.96}, evA: {check: 1.66, bet: 1.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.05, evRange: 1.72, rangeWeight: 0.19, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.75, bet: -0.96}, evA: {check: 1.66, bet: 1.61} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.25, evRange: -2.05, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.33}, evA: {check: -2.08, bet: -3.60} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.25, evRange: -2.05, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.33}, evA: {check: -2.08, bet: -3.60} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.94, evRange: 4.97, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.94}, evA: {check: 2.92, bet: 4.97} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.58, evRange: 4.07, rangeWeight: 0.25, freq: {fold: 0.04, call: 0.96, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 1.22}, evA: {fold: -3.00, call: 3.53, raise: 4.47} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.58, evRange: 4.07, rangeWeight: 0.25, freq: {fold: 0.04, call: 0.96, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 1.22}, evA: {fold: -3.00, call: 3.53, raise: 4.47} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -4.15}, evA: {fold: -3.00, call: -4.46, raise: -1.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -4.15}, evA: {fold: -3.00, call: -4.46, raise: -1.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.49, evRange: 8.19, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.49}, evA: {fold: -3.00, call: 6.57, raise: 8.19} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.19, evRange: 3.07, rangeWeight: 0.19, freq: {fold: 0.26, call: 0.74}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.08} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.19, evRange: 3.07, rangeWeight: 0.19, freq: {fold: 0.26, call: 0.74}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.08} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.00, rangeWeight: 0.28, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.62} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.00, rangeWeight: 0.28, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.62} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.72} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.72, evRange: 2.68, rangeWeight: 0.19, freq: {fold: 0.22, call: 0.77, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: 3.87, raise: 5.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.72, evRange: 2.68, rangeWeight: 0.19, freq: {fold: 0.22, call: 0.77, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: 3.87, raise: 5.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.92, evRange: -2.85, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 0.58}, evA: {fold: -3.00, call: -4.85, raise: 3.90} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.92, evRange: -2.85, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 0.58}, evA: {fold: -3.00, call: -4.85, raise: 3.90} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.43, evRange: 7.44, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.43}, evA: {fold: -3.00, call: 6.82, raise: 7.44} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.92, evRange: -4.06, rangeWeight: 0.25, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.55} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.92, evRange: -4.06, rangeWeight: 0.25, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.55} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.32} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -1.97, rangeWeight: 0.31, freq: {check: 0.97, bet: 0.03}, ev: {check: -0.26, bet: 0.21}, evA: {check: -1.97, bet: -2.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -1.97, rangeWeight: 0.31, freq: {check: 0.97, bet: 0.03}, ev: {check: -0.26, bet: 0.21}, evA: {check: -1.97, bet: -2.11} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.25, evRange: 4.01, rangeWeight: 0.31, freq: {check: 0.48, bet: 0.52}, ev: {check: 4.87, bet: 3.69}, evA: {check: 4.01, bet: 4.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.23, evRange: -2.65, rangeWeight: 0.03, freq: {check: 0.05, bet: 0.95}, ev: {check: -2.92, bet: -1.14}, evA: {check: -2.99, bet: -2.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.23, evRange: -2.65, rangeWeight: 0.03, freq: {check: 0.05, bet: 0.95}, ev: {check: -2.92, bet: -1.14}, evA: {check: -2.99, bet: -2.64} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.72, evRange: -1.10, rangeWeight: 0.24, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.75, bet: 0.10}, evA: {check: -1.66, bet: -2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.72, evRange: -1.10, rangeWeight: 0.24, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.75, bet: 0.10}, evA: {check: -1.66, bet: -2.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.01, evRange: 4.78, rangeWeight: 0.36, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.01}, evA: {check: 2.08, bet: 4.78} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.98, evRange: -3.29, rangeWeight: 0.08, freq: {check: 0.10, bet: 0.90}, ev: {check: -2.25, bet: -1.95}, evA: {check: -2.92, bet: -3.34} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.98, evRange: -3.29, rangeWeight: 0.08, freq: {check: 0.10, bet: 0.90}, ev: {check: -2.25, bet: -1.95}, evA: {check: -2.92, bet: -3.34} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.69, evRange: -2.45, rangeWeight: 0.31, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.53, raise: -1.59} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.69, evRange: -2.45, rangeWeight: 0.31, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.53, raise: -1.59} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 4.46, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.98, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.57, raise: -0.13} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.98, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.57, raise: -0.13} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.96, evRange: -6.99, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.08} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.96, evRange: -6.99, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.08} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.36, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.72} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.45, evRange: -2.82, rangeWeight: 0.24, freq: {fold: 0.67, call: 0.32, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -3.87, raise: -1.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.45, evRange: -2.82, rangeWeight: 0.24, freq: {fold: 0.67, call: 0.32, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -3.87, raise: -1.06} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.36, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 4.85, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.97, rangeWeight: 0.08, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.82, raise: 1.26} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.97, rangeWeight: 0.08, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.82, raise: 1.26} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.97, evRange: -6.99, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.55} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.97, evRange: -6.99, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.55} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.32} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.32} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.81, evRange: 4.47, rangeWeight: 0.32, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.46, bet: 4.86}, evA: {check: 4.46, bet: 4.47} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.46, evRange: -1.28, rangeWeight: 0.31, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.02, bet: -0.90}, evA: {check: -1.28, bet: -1.28} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.46, evRange: -1.28, rangeWeight: 0.31, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.02, bet: -0.90}, evA: {check: -1.28, bet: -1.28} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.76, evRange: -1.61, rangeWeight: 0.03, freq: {check: 0.03, bet: 0.97}, ev: {check: -2.08, bet: -1.76}, evA: {check: -2.28, bet: -1.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.76, evRange: -1.61, rangeWeight: 0.03, freq: {check: 0.03, bet: 0.97}, ev: {check: -2.08, bet: -1.76}, evA: {check: -2.28, bet: -1.59} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.67, evRange: 5.76, rangeWeight: 0.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.67}, evA: {check: 2.05, bet: 5.76} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.92, evRange: -1.84, rangeWeight: 0.32, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: -4.03}, evA: {check: -1.69, bet: -3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.92, evRange: -1.84, rangeWeight: 0.32, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: -4.03}, evA: {check: -1.69, bet: -3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.05, evRange: -3.33, rangeWeight: 0.07, freq: {check: 0.64, bet: 0.36}, ev: {check: -2.25, bet: -4.44}, evA: {check: -2.92, bet: -4.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.05, evRange: -3.33, rangeWeight: 0.07, freq: {check: 0.64, bet: 0.36}, ev: {check: -2.25, bet: -4.44}, evA: {check: -2.92, bet: -4.07} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.09, evRange: 7.15, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.09}, evA: {fold: -3.00, call: 5.51, raise: 7.15} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.38, evRange: -1.70, rangeWeight: 0.31, freq: {fold: 0.45, call: 0.52, raise: 0.03}, ev: {fold: -3.00, call: 1.75, raise: 2.42}, evA: {fold: -3.00, call: -2.24, raise: 1.19} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.38, evRange: -1.70, rangeWeight: 0.31, freq: {fold: 0.45, call: 0.52, raise: 0.03}, ev: {fold: -3.00, call: 1.75, raise: 2.42}, evA: {fold: -3.00, call: -2.24, raise: 1.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.46, evRange: 1.65, rangeWeight: 0.03, freq: {fold: 0.12, call: 0.00, raise: 0.88}, ev: {fold: -3.00, call: -5.25, raise: 2.09}, evA: {fold: -3.00, call: -6.57, raise: 2.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.46, evRange: 1.65, rangeWeight: 0.03, freq: {fold: 0.12, call: 0.00, raise: 0.88}, ev: {fold: -3.00, call: -5.25, raise: 2.09}, evA: {fold: -3.00, call: -6.57, raise: 2.30} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.21, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.52} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.55, evRange: -6.86, rangeWeight: 0.32, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.20} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.55, evRange: -6.86, rangeWeight: 0.32, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.72} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.44, evRange: 7.80, rangeWeight: 0.21, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.44}, evA: {fold: -3.00, call: 4.78, raise: 7.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.58, evRange: -2.85, rangeWeight: 0.32, freq: {fold: 0.70, call: 0.28, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.12}, evA: {fold: -3.00, call: -3.95, raise: -1.94} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.58, evRange: -2.85, rangeWeight: 0.32, freq: {fold: 0.70, call: 0.28, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.12}, evA: {fold: -3.00, call: -3.95, raise: -1.94} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.92, evRange: -2.52, rangeWeight: 0.07, freq: {fold: 0.69, call: 0.00, raise: 0.31}, ev: {fold: -3.00, call: -5.25, raise: 0.51}, evA: {fold: -3.00, call: -6.82, raise: -1.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.92, evRange: -2.52, rangeWeight: 0.07, freq: {fold: 0.69, call: 0.00, raise: 0.31}, ev: {fold: -3.00, call: -5.25, raise: 0.51}, evA: {fold: -3.00, call: -6.82, raise: -1.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.32, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.66} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.85, evRange: -5.71, rangeWeight: 0.31, freq: {fold: 0.78, call: 0.22}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.52} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.85, evRange: -5.71, rangeWeight: 0.31, freq: {fold: 0.78, call: 0.22}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.52} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.32} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.32} },
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
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.22, evRange: 2.34, rangeWeight: 0.25, freq: {check: 0.92, bet: 0.08}, ev: {check: 0.26, bet: -0.25}, evA: {check: 2.34, bet: 2.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.22, evRange: 2.34, rangeWeight: 0.25, freq: {check: 0.92, bet: 0.08}, ev: {check: 0.26, bet: -0.25}, evA: {check: 2.34, bet: 2.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.84, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.13}, evA: {check: -3.84, bet: -5.18} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.84, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.13}, evA: {check: -3.84, bet: -5.18} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.95, evRange: 7.37, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.85, bet: 6.95}, evA: {check: 7.26, bet: 7.37} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.33, evRange: 2.90, rangeWeight: 0.30, freq: {check: 0.54, bet: 0.46}, ev: {check: 1.25, bet: -0.73}, evA: {check: 2.76, bet: 2.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.33, evRange: 2.90, rangeWeight: 0.30, freq: {check: 0.54, bet: 0.46}, ev: {check: 1.25, bet: -0.73}, evA: {check: 2.76, bet: 2.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.42, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.50}, evA: {check: -3.47, bet: -4.56} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.42, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.50}, evA: {check: -3.47, bet: -4.56} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 7.02, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 4.87, bet: 7.02} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.24, evRange: 4.47, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.29}, evA: {fold: -5.00, call: 3.97, raise: 4.39} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.24, evRange: 4.47, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.29}, evA: {fold: -5.00, call: 3.97, raise: 4.39} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.37}, evA: {fold: -5.00, call: -6.97, raise: -7.68} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.37}, evA: {fold: -5.00, call: -6.97, raise: -7.68} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.98, evRange: 11.42, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.99}, evA: {fold: -5.00, call: 8.75, raise: 11.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.09, evRange: 7.65, rangeWeight: 0.30, freq: {fold: 0.01, call: 0.99}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.09, evRange: 7.65, rangeWeight: 0.30, freq: {fold: 0.01, call: 0.99}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.19} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.67} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.83, evRange: 4.87, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.92, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.28}, evA: {fold: -5.00, call: 4.98, raise: 6.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.83, evRange: 4.87, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.92, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.28}, evA: {fold: -5.00, call: 4.98, raise: 6.66} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.98, evRange: -4.96, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.55}, evA: {fold: -5.00, call: -6.24, raise: 0.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.98, evRange: -4.96, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.55}, evA: {fold: -5.00, call: -6.24, raise: 0.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.11, evRange: 10.12, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.11}, evA: {fold: -5.00, call: 8.77, raise: 10.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.28, evRange: -0.51, rangeWeight: 0.25, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.28, evRange: -0.51, rangeWeight: 0.25, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.07} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.07} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.64} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.58, evRange: -2.62, rangeWeight: 0.31, freq: {check: 0.37, bet: 0.63}, ev: {check: 0.33, bet: -1.10}, evA: {check: -2.62, bet: -2.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.58, evRange: -2.62, rangeWeight: 0.31, freq: {check: 0.37, bet: 0.63}, ev: {check: 0.33, bet: -1.10}, evA: {check: -2.62, bet: -2.62} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.23, evRange: 7.87, rangeWeight: 0.31, freq: {check: 0.05, bet: 0.95}, ev: {check: 6.56, bet: 8.31}, evA: {check: 7.74, bet: 7.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.97, evRange: -4.88, rangeWeight: 0.03, freq: {check: 0.81, bet: 0.19}, ev: {check: -3.82, bet: -4.60}, evA: {check: -4.85, bet: -4.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.97, evRange: -4.88, rangeWeight: 0.03, freq: {check: 0.81, bet: 0.19}, ev: {check: -3.82, bet: -4.60}, evA: {check: -4.85, bet: -4.98} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.58, evRange: -2.93, rangeWeight: 0.35, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: -0.09}, evA: {check: -2.76, bet: -4.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.58, evRange: -2.93, rangeWeight: 0.35, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: -0.09}, evA: {check: -2.76, bet: -4.11} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.79, evRange: 8.11, rangeWeight: 0.23, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.79}, evA: {check: 3.47, bet: 8.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.77, evRange: -4.91, rangeWeight: 0.03, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.75, bet: -4.34}, evA: {check: -4.87, bet: -6.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.77, evRange: -4.91, rangeWeight: 0.03, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.75, bet: -4.34}, evA: {check: -4.87, bet: -6.94} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.96, evRange: -2.68, rangeWeight: 0.31, freq: {fold: 0.18, call: 0.79, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.40}, evA: {fold: -5.00, call: -3.97, raise: -1.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.96, evRange: -2.68, rangeWeight: 0.31, freq: {fold: 0.18, call: 0.79, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.40}, evA: {fold: -5.00, call: -3.97, raise: -1.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.02, evRange: 10.83, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.02}, evA: {fold: -5.00, call: 6.97, raise: 10.83} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.93, evRange: -4.98, rangeWeight: 0.03, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -2.02}, evA: {fold: -5.00, call: -8.75, raise: -4.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.93, evRange: -4.98, rangeWeight: 0.03, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -2.02}, evA: {fold: -5.00, call: -8.75, raise: -4.19} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -6.80, rangeWeight: 0.35, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -6.80, rangeWeight: 0.35, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.19} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -9.04, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -9.04, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.39, evRange: -3.80, rangeWeight: 0.35, freq: {fold: 0.37, call: 0.57, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 2.64}, evA: {fold: -5.00, call: -4.98, raise: -2.41} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.39, evRange: -3.80, rangeWeight: 0.35, freq: {fold: 0.37, call: 0.57, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 2.64}, evA: {fold: -5.00, call: -4.98, raise: -2.41} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.77, evRange: 10.39, rangeWeight: 0.23, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.77}, evA: {fold: -5.00, call: 6.24, raise: 10.39} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -4.25, rangeWeight: 0.03, freq: {fold: 0.52, call: 0.00, raise: 0.48}, ev: {fold: -5.00, call: -6.75, raise: -0.70}, evA: {fold: -5.00, call: -8.77, raise: -3.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -4.25, rangeWeight: 0.03, freq: {fold: 0.52, call: 0.00, raise: 0.48}, ev: {fold: -5.00, call: -6.75, raise: -0.70}, evA: {fold: -5.00, call: -8.77, raise: -3.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.32, evRange: -6.79, rangeWeight: 0.31, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.32, evRange: -6.79, rangeWeight: 0.31, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.74} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.59, evRange: 7.16, rangeWeight: 0.32, freq: {check: 0.50, bet: 0.50}, ev: {check: 7.94, bet: 7.24}, evA: {check: 7.16, bet: 7.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.10, evRange: -4.03, rangeWeight: 0.31, freq: {check: 0.88, bet: 0.12}, ev: {check: -2.21, bet: -1.22}, evA: {check: -4.02, bet: -4.06} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.10, evRange: -4.03, rangeWeight: 0.31, freq: {check: 0.88, bet: 0.12}, ev: {check: -2.21, bet: -1.22}, evA: {check: -4.02, bet: -4.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.83, evRange: -4.99, rangeWeight: 0.03, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.51, bet: -3.15}, evA: {check: -5.00, bet: -4.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.83, evRange: -4.99, rangeWeight: 0.03, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.51, bet: -3.15}, evA: {check: -5.00, bet: -4.98} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.07, evRange: 6.64, rangeWeight: 0.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 8.07}, evA: {check: 3.42, bet: 6.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.45, evRange: -2.34, rangeWeight: 0.26, freq: {check: 0.56, bet: 0.44}, ev: {check: 1.25, bet: -2.65}, evA: {check: -2.82, bet: -3.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.45, evRange: -2.34, rangeWeight: 0.26, freq: {check: 0.56, bet: 0.44}, ev: {check: 1.25, bet: -2.65}, evA: {check: -2.82, bet: -3.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.83, evRange: -2.71, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -2.83}, evA: {check: -4.87, bet: -2.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.83, evRange: -2.71, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -2.83}, evA: {check: -4.87, bet: -2.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.18, evRange: 9.30, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.18}, evA: {fold: -5.00, call: 5.34, raise: 9.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.69, evRange: -4.68, rangeWeight: 0.31, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.31}, evA: {fold: -5.00, call: -5.78, raise: -3.34} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.69, evRange: -4.68, rangeWeight: 0.31, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.31}, evA: {fold: -5.00, call: -5.78, raise: -3.34} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.44, evRange: -2.78, rangeWeight: 0.03, freq: {fold: 0.40, call: 0.00, raise: 0.60}, ev: {fold: -5.00, call: -6.75, raise: 2.55}, evA: {fold: -5.00, call: -8.75, raise: -1.32} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.44, evRange: -2.78, rangeWeight: 0.03, freq: {fold: 0.40, call: 0.00, raise: 0.60}, ev: {fold: -5.00, call: -6.75, raise: 2.55}, evA: {fold: -5.00, call: -8.75, raise: -1.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 8.88} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -7.95, evRange: -8.63, rangeWeight: 0.26, freq: {fold: 0.91, call: 0.09}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.34} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -7.95, evRange: -8.63, rangeWeight: 0.26, freq: {fold: 0.91, call: 0.09}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.34} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.02, rangeWeight: 0.41, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01}, evA: {fold: -5.00, call: 6.15, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.23, evRange: -4.08, rangeWeight: 0.26, freq: {fold: 0.48, call: 0.50, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -5.08, raise: -1.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.23, evRange: -4.08, rangeWeight: 0.26, freq: {fold: 0.48, call: 0.50, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -5.08, raise: -1.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.53, evRange: -3.03, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.44}, evA: {fold: -5.00, call: -8.77, raise: 1.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.53, evRange: -3.03, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.44}, evA: {fold: -5.00, call: -8.77, raise: 1.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.32, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 7.71} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.93, evRange: -8.98, rangeWeight: 0.31, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.35} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.93, evRange: -8.98, rangeWeight: 0.31, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.35} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
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
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.23, evRange: 0.23, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: -0.03, bet: 0.33}, evA: {check: -0.03, bet: 0.33} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.23, evRange: 0.23, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: -0.03, bet: 0.33}, evA: {check: -0.03, bet: 0.33} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.68, evRange: -0.68, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: 0.16}, evA: {check: -0.75, bet: 0.16} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.68, evRange: -0.68, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: 0.16}, evA: {check: -0.75, bet: 0.16} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.39, evRange: 0.64, rangeWeight: 0.17, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.00, bet: 0.39}, evA: {check: 0.00, bet: 0.65} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.39, evRange: 0.64, rangeWeight: 0.17, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.00, bet: 0.39}, evA: {check: 0.00, bet: 0.65} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.32, evRange: 0.55, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.32, evRange: 0.55, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.00, bet: 0.20}, evA: {check: 0.00, bet: 0.42} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.00, bet: 0.20}, evA: {check: 0.00, bet: 0.42} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.40, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -0.63}, evA: {check: -0.40, bet: -3.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.40, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -0.63}, evA: {check: -0.40, bet: -3.50} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.83, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.57}, evA: {check: -0.83, bet: -3.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.83, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.57}, evA: {check: -0.83, bet: -3.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.01, evRange: 1.01, rangeWeight: 0.47, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.01, bet: 1.05}, evA: {check: 1.01, bet: 1.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.23, rangeWeight: 0.01, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.02}, evA: {check: -0.50, bet: -3.34} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.23, rangeWeight: 0.01, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.02}, evA: {check: -0.50, bet: -3.34} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.85, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.50}, evA: {check: -0.90, bet: -2.27} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.85, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.50}, evA: {check: -0.90, bet: -2.27} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, rangeWeight: 0.69, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00}, evA: {check: 0.53, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.86}, evA: {fold: -1.00, call: -3.22, raise: -4.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.86}, evA: {fold: -1.00, call: -3.22, raise: -4.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.12}, evA: {fold: -1.00, call: -4.52, raise: -6.46} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.12}, evA: {fold: -1.00, call: -4.52, raise: -6.46} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.04, evRange: 5.12, rangeWeight: 0.47, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.04}, evA: {fold: -1.00, call: 1.55, raise: 5.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.25, evRange: -3.46, rangeWeight: 0.01, freq: {fold: 0.48, call: 0.52}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.25, evRange: -3.46, rangeWeight: 0.01, freq: {fold: 0.48, call: 0.52}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.07} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.07} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.69, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 4.78} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.95, evRange: -1.01, rangeWeight: 0.01, freq: {fold: 0.98, call: 0.02, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.36}, evA: {fold: -1.00, call: -2.48, raise: -2.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.95, evRange: -1.01, rangeWeight: 0.01, freq: {fold: 0.98, call: 0.02, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.36}, evA: {fold: -1.00, call: -2.48, raise: -2.61} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.67}, evA: {fold: -1.00, call: -4.49, raise: -3.10} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.67}, evA: {fold: -1.00, call: -4.49, raise: -3.10} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.24, evRange: 5.24, rangeWeight: 0.69, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.24}, evA: {fold: -1.00, call: 2.65, raise: 5.24} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.15, evRange: -4.83, rangeWeight: 0.13, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.15, evRange: -4.83, rangeWeight: 0.13, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.80} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.14} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.14} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.99, evRange: 8.99, rangeWeight: 0.47, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 2.79} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.15, evRange: 0.67, rangeWeight: 0.10, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.55}, evA: {check: 0.67, bet: 0.24} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.15, evRange: 0.67, rangeWeight: 0.10, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.55}, evA: {check: 0.67, bet: 0.24} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.09, evRange: 1.28, rangeWeight: 0.10, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.17, bet: 3.06}, evA: {check: 1.28, bet: 1.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.20, evRange: -0.26, rangeWeight: 0.35, freq: {check: 0.84, bet: 0.16}, ev: {check: -0.77, bet: -3.46}, evA: {check: -0.25, bet: -0.28} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.20, evRange: -0.26, rangeWeight: 0.35, freq: {check: 0.84, bet: 0.16}, ev: {check: -0.77, bet: -3.46}, evA: {check: -0.25, bet: -0.28} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 0.66, rangeWeight: 0.01, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: -0.82}, evA: {check: 0.50, bet: 0.17} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 0.66, rangeWeight: 0.01, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: -0.82}, evA: {check: 0.50, bet: 0.17} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.84, evRange: 1.37, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.84}, evA: {check: 0.90, bet: 1.37} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.47, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.74}, evA: {check: -0.53, bet: -0.70} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.47, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.74}, evA: {check: -0.53, bet: -0.70} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.07, evRange: 1.06, rangeWeight: 0.10, freq: {fold: 0.59, call: 0.41, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.24}, evA: {fold: -1.00, call: 3.22, raise: 3.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.07, evRange: 1.06, rangeWeight: 0.10, freq: {fold: 0.59, call: 0.41, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.24}, evA: {fold: -1.00, call: 3.22, raise: 3.65} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.43, evRange: 5.01, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.43}, evA: {fold: -1.00, call: 4.52, raise: 5.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.99, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.01}, evA: {fold: -1.00, call: -1.55, raise: 2.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.99, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.01}, evA: {fold: -1.00, call: -1.55, raise: 2.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.46, evRange: -2.66, rangeWeight: 0.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.46, evRange: -2.66, rangeWeight: 0.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.78} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.19, evRange: 3.21, rangeWeight: 0.01, freq: {fold: 0.03, call: 0.97, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.38}, evA: {fold: -1.00, call: 2.48, raise: 2.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.19, evRange: 3.21, rangeWeight: 0.01, freq: {fold: 0.03, call: 0.97, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.38}, evA: {fold: -1.00, call: 2.48, raise: 2.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.81, evRange: 5.78, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.81}, evA: {fold: -1.00, call: 4.49, raise: 5.78} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.11, evRange: -1.00, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.80}, evA: {fold: -1.00, call: -2.65, raise: -0.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.11, evRange: -1.00, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.80}, evA: {fold: -1.00, call: -2.65, raise: -0.98} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.53, evRange: 6.00, rangeWeight: 0.10, freq: {fold: 0.10, call: 0.90}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.53, evRange: 6.00, rangeWeight: 0.10, freq: {fold: 0.10, call: 0.90}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.80} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.01, evRange: -4.99, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.01, evRange: -4.99, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.79} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.45, evRange: 1.52, rangeWeight: 0.10, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.20, bet: 2.45}, evA: {check: 1.43, bet: 1.52} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.96, evRange: 0.89, rangeWeight: 0.10, freq: {check: 0.63, bet: 0.37}, ev: {check: -0.71, bet: -1.38}, evA: {check: 0.89, bet: 0.89} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.96, evRange: 0.89, rangeWeight: 0.10, freq: {check: 0.63, bet: 0.37}, ev: {check: -0.71, bet: -1.38}, evA: {check: 0.89, bet: 0.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.92, evRange: -0.31, rangeWeight: 0.35, freq: {check: 0.91, bet: 0.09}, ev: {check: -0.75, bet: -2.67}, evA: {check: -0.31, bet: -0.34} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.92, evRange: -0.31, rangeWeight: 0.35, freq: {check: 0.91, bet: 0.09}, ev: {check: -0.75, bet: -2.67}, evA: {check: -0.31, bet: -0.34} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.95, evRange: 1.88, rangeWeight: 0.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.95}, evA: {check: 0.90, bet: 1.88} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.34, evRange: 0.42, rangeWeight: 0.09, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.25, bet: -1.72}, evA: {check: 0.51, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.34, evRange: 0.42, rangeWeight: 0.09, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.25, bet: -1.72}, evA: {check: 0.51, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.76, evRange: -0.47, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.41}, evA: {check: -0.53, bet: -1.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.76, evRange: -0.47, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.41}, evA: {check: -0.53, bet: -1.72} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.97, evRange: 5.71, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.98}, evA: {fold: -1.00, call: 4.98, raise: 5.71} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.18, evRange: 4.30, rangeWeight: 0.10, freq: {fold: 0.03, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.28}, evA: {fold: -1.00, call: 4.42, raise: 4.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.18, evRange: 4.30, rangeWeight: 0.10, freq: {fold: 0.03, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.28}, evA: {fold: -1.00, call: 4.42, raise: 4.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.39}, evA: {fold: -1.00, call: -1.55, raise: 0.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.39}, evA: {fold: -1.00, call: -1.55, raise: 0.78} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.14} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.13, evRange: 5.87, rangeWeight: 0.09, freq: {fold: 0.02, call: 0.98}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.61} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.13, evRange: 5.87, rangeWeight: 0.09, freq: {fold: 0.02, call: 0.98}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.61} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.01, evRange: -5.00, rangeWeight: 0.41, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.01, evRange: -5.00, rangeWeight: 0.41, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.78} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.41, evRange: 5.64, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.42}, evA: {fold: -1.00, call: 4.52, raise: 5.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.62, evRange: 2.15, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.62}, evA: {fold: -1.00, call: 2.56, raise: 3.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.62, evRange: 2.15, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.62}, evA: {fold: -1.00, call: 2.56, raise: 3.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.44}, evA: {fold: -1.00, call: -2.65, raise: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.44}, evA: {fold: -1.00, call: -2.65, raise: -0.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.96} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.12, evRange: 4.20, rangeWeight: 0.10, freq: {fold: 0.29, call: 0.71}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 7.96} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.12, evRange: 4.20, rangeWeight: 0.10, freq: {fold: 0.29, call: 0.71}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 7.96} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.79} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.01, evRange: 0.01, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.28, raise: 0.72}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.01, evRange: 0.01, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.28, raise: 0.72}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.09, freq: {fold: 0.04, call: 0.80, raise: 0.16}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.09, freq: {fold: 0.04, call: 0.80, raise: 0.16}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.94, evRange: -0.94, rangeWeight: 0.32, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.94, evRange: -0.94, rangeWeight: 0.32, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.69, evRange: 2.11, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.69, bet: -0.28}, evA: {check: 2.11, bet: 1.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.69, evRange: 2.11, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.69, bet: -0.28}, evA: {check: 2.11, bet: 1.20} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.64, evRange: -2.58, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.63, bet: -3.29}, evA: {check: -2.57, bet: -2.74} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.64, evRange: -2.58, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.63, bet: -3.29}, evA: {check: -2.57, bet: -2.74} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.55, evRange: 4.64, rangeWeight: 0.06, freq: {check: 0.19, bet: 0.81}, ev: {check: 4.63, bet: 4.53}, evA: {check: 4.60, bet: 4.65} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.44, evRange: 2.13, rangeWeight: 0.25, freq: {check: 0.84, bet: 0.16}, ev: {check: 0.75, bet: -1.18}, evA: {check: 1.87, bet: 1.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.44, evRange: 2.13, rangeWeight: 0.25, freq: {check: 0.84, bet: 0.16}, ev: {check: 0.75, bet: -1.18}, evA: {check: 1.87, bet: 1.77} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.35, evRange: -1.49, rangeWeight: 0.21, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -4.58}, evA: {check: -1.50, bet: -1.64} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.35, evRange: -1.49, rangeWeight: 0.21, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -4.58}, evA: {check: -1.50, bet: -1.64} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.06, evRange: 4.09, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.06}, evA: {check: 2.82, bet: 4.09} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.75, evRange: 3.32, rangeWeight: 0.12, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.85}, evA: {fold: -3.00, call: 2.42, raise: 3.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.75, evRange: 3.32, rangeWeight: 0.12, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.85}, evA: {fold: -3.00, call: 2.42, raise: 3.05} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.06, evRange: -3.05, rangeWeight: 0.35, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -6.56}, evA: {fold: -3.00, call: -5.26, raise: -6.16} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.06, evRange: -3.05, rangeWeight: 0.35, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -6.56}, evA: {fold: -3.00, call: -5.26, raise: -6.16} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.09, evRange: 9.24, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.09}, evA: {fold: -3.00, call: 6.50, raise: 9.24} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.72, evRange: 8.02, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.72, evRange: 8.02, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.06, evRange: -6.91, rangeWeight: 0.21, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.50} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.06, evRange: -6.91, rangeWeight: 0.21, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.50} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.35} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.59, evRange: 3.15, rangeWeight: 0.25, freq: {fold: 0.24, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.15}, evA: {fold: -3.00, call: 4.37, raise: 5.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.59, evRange: 3.15, rangeWeight: 0.25, freq: {fold: 0.24, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.15}, evA: {fold: -3.00, call: 4.37, raise: 5.61} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.99, evRange: -2.98, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 0.67}, evA: {fold: -3.00, call: -3.50, raise: 4.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.99, evRange: -2.98, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 0.67}, evA: {fold: -3.00, call: -3.50, raise: 4.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.41, evRange: 7.21, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.41}, evA: {fold: -3.00, call: 6.59, raise: 7.21} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -5.02, evRange: -4.52, rangeWeight: 0.12, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.81} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -5.02, evRange: -4.52, rangeWeight: 0.12, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.81} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.26} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.26} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.21} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: -1.30, rangeWeight: 0.17, freq: {check: 0.11, bet: 0.89}, ev: {check: 0.04, bet: -0.28}, evA: {check: -1.32, bet: -1.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: -1.30, rangeWeight: 0.17, freq: {check: 0.11, bet: 0.89}, ev: {check: 0.04, bet: -0.28}, evA: {check: -1.32, bet: -1.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.24, evRange: 4.55, rangeWeight: 0.50, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.47, bet: 4.24}, evA: {check: 4.25, bet: 4.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.96, evRange: -2.62, rangeWeight: 0.08, freq: {check: 0.07, bet: 0.93}, ev: {check: -2.59, bet: -1.92}, evA: {check: -2.87, bet: -2.60} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.96, evRange: -2.62, rangeWeight: 0.08, freq: {check: 0.07, bet: 0.93}, ev: {check: -2.59, bet: -1.92}, evA: {check: -2.87, bet: -2.60} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.52, evRange: -1.80, rangeWeight: 0.29, freq: {check: 0.75, bet: 0.25}, ev: {check: 0.75, bet: -0.18}, evA: {check: -1.87, bet: -3.57} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.52, evRange: -1.80, rangeWeight: 0.29, freq: {check: 0.75, bet: 0.25}, ev: {check: 0.75, bet: -0.18}, evA: {check: -1.87, bet: -3.57} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.34, evRange: 4.67, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.34}, evA: {check: 1.50, bet: 4.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.37, evRange: -3.60, rangeWeight: 0.08, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -2.51}, evA: {check: -2.82, bet: -4.61} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.37, evRange: -3.60, rangeWeight: 0.08, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -2.51}, evA: {check: -2.82, bet: -4.61} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: -1.72, rangeWeight: 0.17, freq: {fold: 0.42, call: 0.57, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.40}, evA: {fold: -3.00, call: -2.42, raise: 0.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: -1.72, rangeWeight: 0.17, freq: {fold: 0.42, call: 0.57, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.40}, evA: {fold: -3.00, call: -2.42, raise: 0.50} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.12, evRange: 7.19, rangeWeight: 0.50, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.12}, evA: {fold: -3.00, call: 5.26, raise: 7.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.80, evRange: -2.83, rangeWeight: 0.08, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -5.25, raise: 1.96}, evA: {fold: -3.00, call: -6.50, raise: 1.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.80, evRange: -2.83, rangeWeight: 0.08, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -5.25, raise: 1.96}, evA: {fold: -3.00, call: -6.50, raise: 1.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.42, evRange: -6.85, rangeWeight: 0.29, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.42, evRange: -6.85, rangeWeight: 0.29, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 5.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.35} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.35} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.90, evRange: -2.92, rangeWeight: 0.29, freq: {fold: 0.56, call: 0.43, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.37, raise: -3.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.90, evRange: -2.92, rangeWeight: 0.29, freq: {fold: 0.56, call: 0.43, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.37, raise: -3.80} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 3.50, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.53, evRange: -2.99, rangeWeight: 0.08, freq: {fold: 0.91, call: 0.00, raise: 0.09}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.59, raise: -2.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.53, evRange: -2.99, rangeWeight: 0.08, freq: {fold: 0.91, call: 0.00, raise: 0.09}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.59, raise: -2.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.97, evRange: -6.98, rangeWeight: 0.17, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.81} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.97, evRange: -6.98, rangeWeight: 0.17, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.81} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.50, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.26} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.71, evRange: 4.61, rangeWeight: 0.12, freq: {check: 0.83, bet: 0.17}, ev: {check: 4.80, bet: 4.27}, evA: {check: 4.62, bet: 4.59} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.04, evRange: -1.67, rangeWeight: 0.37, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.04, bet: -0.28}, evA: {check: -1.67, bet: -1.85} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.04, evRange: -1.67, rangeWeight: 0.37, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.04, bet: -0.28}, evA: {check: -1.67, bet: -1.85} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.57, evRange: -2.89, rangeWeight: 0.06, freq: {check: 0.94, bet: 0.06}, ev: {check: -2.60, bet: -1.98}, evA: {check: -2.88, bet: -3.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.57, evRange: -2.89, rangeWeight: 0.06, freq: {check: 0.94, bet: 0.06}, ev: {check: -2.60, bet: -1.98}, evA: {check: -2.88, bet: -3.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.34, evRange: 4.99, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.34}, evA: {check: 2.63, bet: 4.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.42, evRange: -0.05, rangeWeight: 0.26, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: -0.21}, evA: {check: -0.50, bet: -0.15} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.42, evRange: -0.05, rangeWeight: 0.26, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: -0.21}, evA: {check: -0.50, bet: -0.15} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.34, evRange: -2.82, rangeWeight: 0.09, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -2.43}, evA: {check: -2.82, bet: -2.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.34, evRange: -2.82, rangeWeight: 0.09, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -2.43}, evA: {check: -2.82, bet: -2.83} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 7.09, rangeWeight: 0.12, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.06}, evA: {fold: -3.00, call: 4.87, raise: 7.09} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.35, evRange: -2.01, rangeWeight: 0.37, freq: {fold: 0.44, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45}, evA: {fold: -3.00, call: -2.92, raise: -0.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.35, evRange: -2.01, rangeWeight: 0.37, freq: {fold: 0.44, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45}, evA: {fold: -3.00, call: -2.92, raise: -0.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.72, evRange: -2.80, rangeWeight: 0.06, freq: {fold: 0.95, call: 0.00, raise: 0.05}, ev: {fold: -3.00, call: -5.25, raise: 2.24}, evA: {fold: -3.00, call: -6.50, raise: 0.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.72, evRange: -2.80, rangeWeight: 0.06, freq: {fold: 0.95, call: 0.00, raise: 0.05}, ev: {fold: -3.00, call: -5.25, raise: 2.24}, evA: {fold: -3.00, call: -6.50, raise: 0.69} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.30, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 9.63} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.72, evRange: -6.80, rangeWeight: 0.26, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -1.83} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.72, evRange: -6.80, rangeWeight: 0.26, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -1.83} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.35} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.35} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.02, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 6.13, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.82, evRange: -1.56, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.43, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -1.16, raise: 3.38} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.82, evRange: -1.56, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.43, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -1.16, raise: 3.38} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.56, evRange: -2.40, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.59, raise: 4.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.56, evRange: -2.40, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.59, raise: 4.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.65} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -6.97, rangeWeight: 0.37, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.58} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -6.97, rangeWeight: 0.37, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.58} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
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
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 1.99, rangeWeight: 0.39, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.25, bet: -0.14}, evA: {check: 1.99, bet: 1.96} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 1.99, rangeWeight: 0.39, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.25, bet: -0.14}, evA: {check: 1.99, bet: 1.96} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.77, evRange: -3.65, rangeWeight: 0.09, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.75, bet: -4.58}, evA: {check: -3.64, bet: -4.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.77, evRange: -3.65, rangeWeight: 0.09, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.75, bet: -4.58}, evA: {check: -3.64, bet: -4.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.86, evRange: 6.99, rangeWeight: 0.04, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.64, bet: 6.86}, evA: {check: 6.77, bet: 7.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.43, evRange: 1.02, rangeWeight: 0.25, freq: {check: 0.56, bet: 0.44}, ev: {check: 1.25, bet: -0.63}, evA: {check: 0.85, bet: 0.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.43, evRange: 1.02, rangeWeight: 0.25, freq: {check: 0.56, bet: 0.44}, ev: {check: 1.25, bet: -0.63}, evA: {check: 0.85, bet: 0.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.48, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.47}, evA: {check: -4.50, bet: -7.49} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.48, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.47}, evA: {check: -4.50, bet: -7.49} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.99, evRange: 8.20, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.99}, evA: {check: 4.80, bet: 8.20} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.22, evRange: 4.23, rangeWeight: 0.39, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.52}, evA: {fold: -5.00, call: 3.11, raise: 4.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.22, evRange: 4.23, rangeWeight: 0.39, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.52}, evA: {fold: -5.00, call: 3.11, raise: 4.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.21}, evA: {fold: -5.00, call: -6.76, raise: -5.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.21}, evA: {fold: -5.00, call: -6.76, raise: -5.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.77, evRange: 10.91, rangeWeight: 0.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.77}, evA: {fold: -5.00, call: 8.36, raise: 10.91} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.81, evRange: 1.75, rangeWeight: 0.25, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.81, evRange: 1.75, rangeWeight: 0.25, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.22} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.70} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.70} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.24, rangeWeight: 0.25, freq: {fold: 0.14, call: 0.83, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.36}, evA: {fold: -5.00, call: 1.53, raise: 4.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.24, rangeWeight: 0.25, freq: {fold: 0.14, call: 0.83, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.36}, evA: {fold: -5.00, call: 1.53, raise: 4.72} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.93, evRange: -4.92, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -2.13}, evA: {fold: -5.00, call: -8.10, raise: -1.53} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.93, evRange: -4.92, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -2.13}, evA: {fold: -5.00, call: -8.10, raise: -1.53} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.03, evRange: 10.64, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.03}, evA: {fold: -5.00, call: 8.65, raise: 10.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.74, evRange: -1.25, rangeWeight: 0.39, freq: {fold: 0.49, call: 0.51}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.74, evRange: -1.25, rangeWeight: 0.39, freq: {fold: 0.49, call: 0.51}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.49} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.77} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.77} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.07} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.30, evRange: -1.93, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.32, bet: -0.68}, evA: {check: -1.93, bet: -2.17} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.30, evRange: -1.93, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.32, bet: -0.68}, evA: {check: -1.93, bet: -2.17} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.89, evRange: 7.61, rangeWeight: 0.10, freq: {check: 0.79, bet: 0.21}, ev: {check: 6.78, bet: 7.31}, evA: {check: 7.62, bet: 7.54} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.87, evRange: -4.62, rangeWeight: 0.04, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.87, bet: -3.92}, evA: {check: -4.60, bet: -4.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.87, evRange: -4.62, rangeWeight: 0.04, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.87, bet: -3.92}, evA: {check: -4.60, bet: -4.96} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.42, evRange: -0.26, rangeWeight: 0.29, freq: {check: 0.42, bet: 0.58}, ev: {check: 1.25, bet: -0.16}, evA: {check: -0.85, bet: -0.34} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.42, evRange: -0.26, rangeWeight: 0.29, freq: {check: 0.42, bet: 0.58}, ev: {check: 1.25, bet: -0.16}, evA: {check: -0.85, bet: -0.34} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.82, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.01}, evA: {check: 4.50, bet: 7.82} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.77, evRange: -4.81, rangeWeight: 0.08, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -4.01}, evA: {check: -4.80, bet: -5.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.77, evRange: -4.81, rangeWeight: 0.08, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -4.01}, evA: {check: -4.80, bet: -5.19} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.26, evRange: -2.11, rangeWeight: 0.41, freq: {fold: 0.28, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.58}, evA: {fold: -5.00, call: -3.11, raise: -0.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.26, evRange: -2.11, rangeWeight: 0.41, freq: {fold: 0.28, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.58}, evA: {fold: -5.00, call: -3.11, raise: -0.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.83, evRange: 10.28, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83}, evA: {fold: -5.00, call: 6.76, raise: 10.28} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.50, evRange: -4.72, rangeWeight: 0.04, freq: {fold: 0.87, call: 0.00, raise: 0.13}, ev: {fold: -5.00, call: -6.75, raise: -1.02}, evA: {fold: -5.00, call: -8.36, raise: -2.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.50, evRange: -4.72, rangeWeight: 0.04, freq: {fold: 0.87, call: 0.00, raise: 0.13}, ev: {fold: -5.00, call: -6.75, raise: -1.02}, evA: {fold: -5.00, call: -8.36, raise: -2.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.98, evRange: -5.47, rangeWeight: 0.29, freq: {fold: 0.59, call: 0.41}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.98, evRange: -5.47, rangeWeight: 0.29, freq: {fold: 0.59, call: 0.41}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.22} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 11.70} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.23, evRange: -1.79, rangeWeight: 0.29, freq: {fold: 0.34, call: 0.63, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.01}, evA: {fold: -5.00, call: -1.53, raise: 3.92} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.23, evRange: -1.79, rangeWeight: 0.29, freq: {fold: 0.34, call: 0.63, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.01}, evA: {fold: -5.00, call: -1.53, raise: 3.92} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.44, evRange: 9.79, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.44}, evA: {fold: -5.00, call: 8.10, raise: 9.79} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.54, evRange: -3.18, rangeWeight: 0.08, freq: {fold: 0.76, call: 0.00, raise: 0.24}, ev: {fold: -5.00, call: -6.75, raise: 1.11}, evA: {fold: -5.00, call: -8.65, raise: 2.62} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.54, evRange: -3.18, rangeWeight: 0.08, freq: {fold: 0.76, call: 0.00, raise: 0.24}, ev: {fold: -5.00, call: -6.75, raise: 1.11}, evA: {fold: -5.00, call: -8.65, raise: 2.62} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.34, evRange: -7.37, rangeWeight: 0.41, freq: {fold: 0.78, call: 0.22}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.34, evRange: -7.37, rangeWeight: 0.41, freq: {fold: 0.78, call: 0.22}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.49} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.77} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.07} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.32, evRange: 6.35, rangeWeight: 0.59, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.16, bet: 6.32}, evA: {check: 5.92, bet: 6.36} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.01, evRange: -1.95, rangeWeight: 0.15, freq: {check: 0.06, bet: 0.94}, ev: {check: 0.38, bet: -0.03}, evA: {check: -2.16, bet: -1.94} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.01, evRange: -1.95, rangeWeight: 0.15, freq: {check: 0.06, bet: 0.94}, ev: {check: 0.38, bet: -0.03}, evA: {check: -2.16, bet: -1.94} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.43, evRange: -2.60, rangeWeight: 0.06, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.23, bet: -1.40}, evA: {check: -4.79, bet: -2.58} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.43, evRange: -2.60, rangeWeight: 0.06, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.23, bet: -1.40}, evA: {check: -4.79, bet: -2.58} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.66, evRange: 7.10, rangeWeight: 0.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.66}, evA: {check: 2.05, bet: 7.10} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.07, evRange: -3.20, rangeWeight: 0.26, freq: {check: 0.83, bet: 0.17}, ev: {check: 1.25, bet: 0.17}, evA: {check: -3.67, bet: -5.40} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.07, evRange: -3.20, rangeWeight: 0.26, freq: {check: 0.83, bet: 0.17}, ev: {check: 1.25, bet: 0.17}, evA: {check: -3.67, bet: -5.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.63, evRange: -5.54, rangeWeight: 0.09, freq: {check: 0.59, bet: 0.41}, ev: {check: -3.75, bet: -3.46}, evA: {check: -4.80, bet: -6.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.63, evRange: -5.54, rangeWeight: 0.09, freq: {check: 0.59, bet: 0.41}, ev: {check: -3.75, bet: -3.46}, evA: {check: -4.80, bet: -6.76} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.02, rangeWeight: 0.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02}, evA: {fold: -5.00, call: 6.25, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.11, evRange: -2.69, rangeWeight: 0.15, freq: {fold: 0.33, call: 0.66, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.48}, evA: {fold: -5.00, call: -3.76, raise: -0.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.11, evRange: -2.69, rangeWeight: 0.15, freq: {fold: 0.33, call: 0.66, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.48}, evA: {fold: -5.00, call: -3.76, raise: -0.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.44, evRange: -4.58, rangeWeight: 0.06, freq: {fold: 0.92, call: 0.01, raise: 0.07}, ev: {fold: -5.00, call: -6.75, raise: 3.41}, evA: {fold: -5.00, call: -8.36, raise: 1.54} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.44, evRange: -4.58, rangeWeight: 0.06, freq: {fold: 0.92, call: 0.01, raise: 0.07}, ev: {fold: -5.00, call: -6.75, raise: 3.41}, evA: {fold: -5.00, call: -8.36, raise: 1.54} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.90, evRange: -8.99, rangeWeight: 0.26, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.54} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.90, evRange: -8.99, rangeWeight: 0.26, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.54} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.04, evRange: 9.05, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.04}, evA: {fold: -5.00, call: 3.69, raise: 9.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.55, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 0.66, call: 0.32, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.46}, evA: {fold: -5.00, call: -6.61, raise: -6.22} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.55, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 0.66, call: 0.32, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.46}, evA: {fold: -5.00, call: -6.61, raise: -6.22} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.70, evRange: -4.99, rangeWeight: 0.09, freq: {fold: 0.84, call: 0.00, raise: 0.16}, ev: {fold: -5.00, call: -6.75, raise: 3.31}, evA: {fold: -5.00, call: -8.65, raise: -4.93} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.70, evRange: -4.99, rangeWeight: 0.09, freq: {fold: 0.84, call: 0.00, raise: 0.16}, ev: {fold: -5.00, call: -6.75, raise: 3.31}, evA: {fold: -5.00, call: -8.65, raise: -4.93} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.79, evRange: -8.89, rangeWeight: 0.15, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.79, evRange: -8.89, rangeWeight: 0.15, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.07} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.40, raise: 0.60}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.40, raise: 0.60}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.17, freq: {fold: 0.02, call: 0.60, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.17, freq: {fold: 0.02, call: 0.60, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.81, evRange: -0.81, rangeWeight: 0.17, freq: {fold: 0.81, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.81, evRange: -0.81, rangeWeight: 0.17, freq: {fold: 0.81, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: 1.56, rangeWeight: 0.25, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.23, bet: -0.38}, evA: {check: 1.56, bet: 1.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: 1.56, rangeWeight: 0.25, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.23, bet: -0.38}, evA: {check: 1.56, bet: 1.54} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.27, evRange: -1.82, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.47}, evA: {check: -1.82, bet: -2.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.27, evRange: -1.82, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.47}, evA: {check: -1.82, bet: -2.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.66, evRange: 4.35, rangeWeight: 0.03, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.63, bet: 4.67}, evA: {check: 4.29, bet: 4.36} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.05, evRange: 1.72, rangeWeight: 0.19, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.75, bet: -0.96}, evA: {check: 1.66, bet: 1.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.05, evRange: 1.72, rangeWeight: 0.19, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.75, bet: -0.96}, evA: {check: 1.66, bet: 1.61} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.25, evRange: -2.05, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.33}, evA: {check: -2.08, bet: -3.60} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.25, evRange: -2.05, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.33}, evA: {check: -2.08, bet: -3.60} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.94, evRange: 4.97, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.94}, evA: {check: 2.92, bet: 4.97} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.58, evRange: 4.07, rangeWeight: 0.25, freq: {fold: 0.04, call: 0.96, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 1.22}, evA: {fold: -3.00, call: 3.53, raise: 4.47} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.58, evRange: 4.07, rangeWeight: 0.25, freq: {fold: 0.04, call: 0.96, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 1.22}, evA: {fold: -3.00, call: 3.53, raise: 4.47} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -4.15}, evA: {fold: -3.00, call: -4.46, raise: -1.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -4.15}, evA: {fold: -3.00, call: -4.46, raise: -1.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.49, evRange: 8.19, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.49}, evA: {fold: -3.00, call: 6.57, raise: 8.19} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.19, evRange: 3.07, rangeWeight: 0.19, freq: {fold: 0.26, call: 0.74}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.08} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.19, evRange: 3.07, rangeWeight: 0.19, freq: {fold: 0.26, call: 0.74}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.08} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.00, rangeWeight: 0.28, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.62} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.00, rangeWeight: 0.28, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.62} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.72} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.72, evRange: 2.68, rangeWeight: 0.19, freq: {fold: 0.22, call: 0.77, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: 3.87, raise: 5.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.72, evRange: 2.68, rangeWeight: 0.19, freq: {fold: 0.22, call: 0.77, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: 3.87, raise: 5.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.92, evRange: -2.85, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 0.58}, evA: {fold: -3.00, call: -4.85, raise: 3.90} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.92, evRange: -2.85, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 0.58}, evA: {fold: -3.00, call: -4.85, raise: 3.90} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.43, evRange: 7.44, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.43}, evA: {fold: -3.00, call: 6.82, raise: 7.44} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.92, evRange: -4.06, rangeWeight: 0.25, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.55} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.92, evRange: -4.06, rangeWeight: 0.25, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.55} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.32} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -1.97, rangeWeight: 0.31, freq: {check: 0.97, bet: 0.03}, ev: {check: -0.26, bet: 0.21}, evA: {check: -1.97, bet: -2.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -1.97, rangeWeight: 0.31, freq: {check: 0.97, bet: 0.03}, ev: {check: -0.26, bet: 0.21}, evA: {check: -1.97, bet: -2.11} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.25, evRange: 4.01, rangeWeight: 0.31, freq: {check: 0.48, bet: 0.52}, ev: {check: 4.87, bet: 3.69}, evA: {check: 4.01, bet: 4.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.23, evRange: -2.65, rangeWeight: 0.03, freq: {check: 0.05, bet: 0.95}, ev: {check: -2.92, bet: -1.14}, evA: {check: -2.99, bet: -2.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.23, evRange: -2.65, rangeWeight: 0.03, freq: {check: 0.05, bet: 0.95}, ev: {check: -2.92, bet: -1.14}, evA: {check: -2.99, bet: -2.64} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.72, evRange: -1.10, rangeWeight: 0.24, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.75, bet: 0.10}, evA: {check: -1.66, bet: -2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.72, evRange: -1.10, rangeWeight: 0.24, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.75, bet: 0.10}, evA: {check: -1.66, bet: -2.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.01, evRange: 4.78, rangeWeight: 0.36, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.01}, evA: {check: 2.08, bet: 4.78} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.98, evRange: -3.29, rangeWeight: 0.08, freq: {check: 0.10, bet: 0.90}, ev: {check: -2.25, bet: -1.95}, evA: {check: -2.92, bet: -3.34} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.98, evRange: -3.29, rangeWeight: 0.08, freq: {check: 0.10, bet: 0.90}, ev: {check: -2.25, bet: -1.95}, evA: {check: -2.92, bet: -3.34} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.69, evRange: -2.45, rangeWeight: 0.31, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.53, raise: -1.59} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.69, evRange: -2.45, rangeWeight: 0.31, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.53, raise: -1.59} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 4.46, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.98, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.57, raise: -0.13} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.98, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.57, raise: -0.13} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.96, evRange: -6.99, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.08} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.96, evRange: -6.99, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.08} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.36, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.72} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.45, evRange: -2.82, rangeWeight: 0.24, freq: {fold: 0.67, call: 0.32, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -3.87, raise: -1.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.45, evRange: -2.82, rangeWeight: 0.24, freq: {fold: 0.67, call: 0.32, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -3.87, raise: -1.06} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.36, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 4.85, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.97, rangeWeight: 0.08, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.82, raise: 1.26} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.97, rangeWeight: 0.08, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.82, raise: 1.26} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.97, evRange: -6.99, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.55} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.97, evRange: -6.99, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.55} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.32} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.32} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.81, evRange: 4.47, rangeWeight: 0.32, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.46, bet: 4.86}, evA: {check: 4.46, bet: 4.47} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.46, evRange: -1.28, rangeWeight: 0.31, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.02, bet: -0.90}, evA: {check: -1.28, bet: -1.28} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.46, evRange: -1.28, rangeWeight: 0.31, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.02, bet: -0.90}, evA: {check: -1.28, bet: -1.28} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.76, evRange: -1.61, rangeWeight: 0.03, freq: {check: 0.03, bet: 0.97}, ev: {check: -2.08, bet: -1.76}, evA: {check: -2.28, bet: -1.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.76, evRange: -1.61, rangeWeight: 0.03, freq: {check: 0.03, bet: 0.97}, ev: {check: -2.08, bet: -1.76}, evA: {check: -2.28, bet: -1.59} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.67, evRange: 5.76, rangeWeight: 0.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.67}, evA: {check: 2.05, bet: 5.76} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.92, evRange: -1.84, rangeWeight: 0.32, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: -4.03}, evA: {check: -1.69, bet: -3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.92, evRange: -1.84, rangeWeight: 0.32, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: -4.03}, evA: {check: -1.69, bet: -3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.05, evRange: -3.33, rangeWeight: 0.07, freq: {check: 0.64, bet: 0.36}, ev: {check: -2.25, bet: -4.44}, evA: {check: -2.92, bet: -4.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.05, evRange: -3.33, rangeWeight: 0.07, freq: {check: 0.64, bet: 0.36}, ev: {check: -2.25, bet: -4.44}, evA: {check: -2.92, bet: -4.07} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.09, evRange: 7.15, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.09}, evA: {fold: -3.00, call: 5.51, raise: 7.15} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.38, evRange: -1.70, rangeWeight: 0.31, freq: {fold: 0.45, call: 0.52, raise: 0.03}, ev: {fold: -3.00, call: 1.75, raise: 2.42}, evA: {fold: -3.00, call: -2.24, raise: 1.19} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.38, evRange: -1.70, rangeWeight: 0.31, freq: {fold: 0.45, call: 0.52, raise: 0.03}, ev: {fold: -3.00, call: 1.75, raise: 2.42}, evA: {fold: -3.00, call: -2.24, raise: 1.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.46, evRange: 1.65, rangeWeight: 0.03, freq: {fold: 0.12, call: 0.00, raise: 0.88}, ev: {fold: -3.00, call: -5.25, raise: 2.09}, evA: {fold: -3.00, call: -6.57, raise: 2.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.46, evRange: 1.65, rangeWeight: 0.03, freq: {fold: 0.12, call: 0.00, raise: 0.88}, ev: {fold: -3.00, call: -5.25, raise: 2.09}, evA: {fold: -3.00, call: -6.57, raise: 2.30} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.21, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.52} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.55, evRange: -6.86, rangeWeight: 0.32, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.20} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.55, evRange: -6.86, rangeWeight: 0.32, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.72} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.44, evRange: 7.80, rangeWeight: 0.21, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.44}, evA: {fold: -3.00, call: 4.78, raise: 7.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.58, evRange: -2.85, rangeWeight: 0.32, freq: {fold: 0.70, call: 0.28, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.12}, evA: {fold: -3.00, call: -3.95, raise: -1.94} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.58, evRange: -2.85, rangeWeight: 0.32, freq: {fold: 0.70, call: 0.28, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.12}, evA: {fold: -3.00, call: -3.95, raise: -1.94} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.92, evRange: -2.52, rangeWeight: 0.07, freq: {fold: 0.69, call: 0.00, raise: 0.31}, ev: {fold: -3.00, call: -5.25, raise: 0.51}, evA: {fold: -3.00, call: -6.82, raise: -1.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.92, evRange: -2.52, rangeWeight: 0.07, freq: {fold: 0.69, call: 0.00, raise: 0.31}, ev: {fold: -3.00, call: -5.25, raise: 0.51}, evA: {fold: -3.00, call: -6.82, raise: -1.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.32, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.66} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.85, evRange: -5.71, rangeWeight: 0.31, freq: {fold: 0.78, call: 0.22}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.52} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.85, evRange: -5.71, rangeWeight: 0.31, freq: {fold: 0.78, call: 0.22}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.52} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.32} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.32} },
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
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.22, evRange: 2.34, rangeWeight: 0.25, freq: {check: 0.92, bet: 0.08}, ev: {check: 0.26, bet: -0.25}, evA: {check: 2.34, bet: 2.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.22, evRange: 2.34, rangeWeight: 0.25, freq: {check: 0.92, bet: 0.08}, ev: {check: 0.26, bet: -0.25}, evA: {check: 2.34, bet: 2.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.84, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.13}, evA: {check: -3.84, bet: -5.18} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.84, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.13}, evA: {check: -3.84, bet: -5.18} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.95, evRange: 7.37, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.85, bet: 6.95}, evA: {check: 7.26, bet: 7.37} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.33, evRange: 2.90, rangeWeight: 0.30, freq: {check: 0.54, bet: 0.46}, ev: {check: 1.25, bet: -0.73}, evA: {check: 2.76, bet: 2.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.33, evRange: 2.90, rangeWeight: 0.30, freq: {check: 0.54, bet: 0.46}, ev: {check: 1.25, bet: -0.73}, evA: {check: 2.76, bet: 2.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.42, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.50}, evA: {check: -3.47, bet: -4.56} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.42, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.50}, evA: {check: -3.47, bet: -4.56} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 7.02, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 4.87, bet: 7.02} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.24, evRange: 4.47, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.29}, evA: {fold: -5.00, call: 3.97, raise: 4.39} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.24, evRange: 4.47, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.29}, evA: {fold: -5.00, call: 3.97, raise: 4.39} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.37}, evA: {fold: -5.00, call: -6.97, raise: -7.68} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.37}, evA: {fold: -5.00, call: -6.97, raise: -7.68} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.98, evRange: 11.42, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.99}, evA: {fold: -5.00, call: 8.75, raise: 11.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.09, evRange: 7.65, rangeWeight: 0.30, freq: {fold: 0.01, call: 0.99}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.09, evRange: 7.65, rangeWeight: 0.30, freq: {fold: 0.01, call: 0.99}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.19} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.67} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.83, evRange: 4.87, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.92, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.28}, evA: {fold: -5.00, call: 4.98, raise: 6.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.83, evRange: 4.87, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.92, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.28}, evA: {fold: -5.00, call: 4.98, raise: 6.66} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.98, evRange: -4.96, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.55}, evA: {fold: -5.00, call: -6.24, raise: 0.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.98, evRange: -4.96, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.55}, evA: {fold: -5.00, call: -6.24, raise: 0.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.11, evRange: 10.12, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.11}, evA: {fold: -5.00, call: 8.77, raise: 10.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.28, evRange: -0.51, rangeWeight: 0.25, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.28, evRange: -0.51, rangeWeight: 0.25, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.07} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.07} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.64} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.58, evRange: -2.62, rangeWeight: 0.31, freq: {check: 0.37, bet: 0.63}, ev: {check: 0.33, bet: -1.10}, evA: {check: -2.62, bet: -2.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.58, evRange: -2.62, rangeWeight: 0.31, freq: {check: 0.37, bet: 0.63}, ev: {check: 0.33, bet: -1.10}, evA: {check: -2.62, bet: -2.62} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.23, evRange: 7.87, rangeWeight: 0.31, freq: {check: 0.05, bet: 0.95}, ev: {check: 6.56, bet: 8.31}, evA: {check: 7.74, bet: 7.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.97, evRange: -4.88, rangeWeight: 0.03, freq: {check: 0.81, bet: 0.19}, ev: {check: -3.82, bet: -4.60}, evA: {check: -4.85, bet: -4.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.97, evRange: -4.88, rangeWeight: 0.03, freq: {check: 0.81, bet: 0.19}, ev: {check: -3.82, bet: -4.60}, evA: {check: -4.85, bet: -4.98} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.58, evRange: -2.93, rangeWeight: 0.35, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: -0.09}, evA: {check: -2.76, bet: -4.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.58, evRange: -2.93, rangeWeight: 0.35, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: -0.09}, evA: {check: -2.76, bet: -4.11} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.79, evRange: 8.11, rangeWeight: 0.23, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.79}, evA: {check: 3.47, bet: 8.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.77, evRange: -4.91, rangeWeight: 0.03, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.75, bet: -4.34}, evA: {check: -4.87, bet: -6.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.77, evRange: -4.91, rangeWeight: 0.03, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.75, bet: -4.34}, evA: {check: -4.87, bet: -6.94} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.96, evRange: -2.68, rangeWeight: 0.31, freq: {fold: 0.18, call: 0.79, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.40}, evA: {fold: -5.00, call: -3.97, raise: -1.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.96, evRange: -2.68, rangeWeight: 0.31, freq: {fold: 0.18, call: 0.79, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.40}, evA: {fold: -5.00, call: -3.97, raise: -1.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.02, evRange: 10.83, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.02}, evA: {fold: -5.00, call: 6.97, raise: 10.83} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.93, evRange: -4.98, rangeWeight: 0.03, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -2.02}, evA: {fold: -5.00, call: -8.75, raise: -4.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.93, evRange: -4.98, rangeWeight: 0.03, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -2.02}, evA: {fold: -5.00, call: -8.75, raise: -4.19} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -6.80, rangeWeight: 0.35, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -6.80, rangeWeight: 0.35, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.19} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -9.04, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -9.04, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.39, evRange: -3.80, rangeWeight: 0.35, freq: {fold: 0.37, call: 0.57, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 2.64}, evA: {fold: -5.00, call: -4.98, raise: -2.41} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.39, evRange: -3.80, rangeWeight: 0.35, freq: {fold: 0.37, call: 0.57, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 2.64}, evA: {fold: -5.00, call: -4.98, raise: -2.41} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.77, evRange: 10.39, rangeWeight: 0.23, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.77}, evA: {fold: -5.00, call: 6.24, raise: 10.39} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -4.25, rangeWeight: 0.03, freq: {fold: 0.52, call: 0.00, raise: 0.48}, ev: {fold: -5.00, call: -6.75, raise: -0.70}, evA: {fold: -5.00, call: -8.77, raise: -3.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -4.25, rangeWeight: 0.03, freq: {fold: 0.52, call: 0.00, raise: 0.48}, ev: {fold: -5.00, call: -6.75, raise: -0.70}, evA: {fold: -5.00, call: -8.77, raise: -3.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.32, evRange: -6.79, rangeWeight: 0.31, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.32, evRange: -6.79, rangeWeight: 0.31, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.74} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.59, evRange: 7.16, rangeWeight: 0.32, freq: {check: 0.50, bet: 0.50}, ev: {check: 7.94, bet: 7.24}, evA: {check: 7.16, bet: 7.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.10, evRange: -4.03, rangeWeight: 0.31, freq: {check: 0.88, bet: 0.12}, ev: {check: -2.21, bet: -1.22}, evA: {check: -4.02, bet: -4.06} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.10, evRange: -4.03, rangeWeight: 0.31, freq: {check: 0.88, bet: 0.12}, ev: {check: -2.21, bet: -1.22}, evA: {check: -4.02, bet: -4.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.83, evRange: -4.99, rangeWeight: 0.03, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.51, bet: -3.15}, evA: {check: -5.00, bet: -4.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.83, evRange: -4.99, rangeWeight: 0.03, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.51, bet: -3.15}, evA: {check: -5.00, bet: -4.98} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.07, evRange: 6.64, rangeWeight: 0.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 8.07}, evA: {check: 3.42, bet: 6.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.45, evRange: -2.34, rangeWeight: 0.26, freq: {check: 0.56, bet: 0.44}, ev: {check: 1.25, bet: -2.65}, evA: {check: -2.82, bet: -3.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.45, evRange: -2.34, rangeWeight: 0.26, freq: {check: 0.56, bet: 0.44}, ev: {check: 1.25, bet: -2.65}, evA: {check: -2.82, bet: -3.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.83, evRange: -2.71, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -2.83}, evA: {check: -4.87, bet: -2.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.83, evRange: -2.71, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -2.83}, evA: {check: -4.87, bet: -2.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.18, evRange: 9.30, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.18}, evA: {fold: -5.00, call: 5.34, raise: 9.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.69, evRange: -4.68, rangeWeight: 0.31, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.31}, evA: {fold: -5.00, call: -5.78, raise: -3.34} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.69, evRange: -4.68, rangeWeight: 0.31, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.31}, evA: {fold: -5.00, call: -5.78, raise: -3.34} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.44, evRange: -2.78, rangeWeight: 0.03, freq: {fold: 0.40, call: 0.00, raise: 0.60}, ev: {fold: -5.00, call: -6.75, raise: 2.55}, evA: {fold: -5.00, call: -8.75, raise: -1.32} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.44, evRange: -2.78, rangeWeight: 0.03, freq: {fold: 0.40, call: 0.00, raise: 0.60}, ev: {fold: -5.00, call: -6.75, raise: 2.55}, evA: {fold: -5.00, call: -8.75, raise: -1.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 8.88} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -7.95, evRange: -8.63, rangeWeight: 0.26, freq: {fold: 0.91, call: 0.09}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.34} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -7.95, evRange: -8.63, rangeWeight: 0.26, freq: {fold: 0.91, call: 0.09}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.34} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.02, rangeWeight: 0.41, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01}, evA: {fold: -5.00, call: 6.15, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.23, evRange: -4.08, rangeWeight: 0.26, freq: {fold: 0.48, call: 0.50, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -5.08, raise: -1.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.23, evRange: -4.08, rangeWeight: 0.26, freq: {fold: 0.48, call: 0.50, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -5.08, raise: -1.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.53, evRange: -3.03, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.44}, evA: {fold: -5.00, call: -8.77, raise: 1.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.53, evRange: -3.03, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.44}, evA: {fold: -5.00, call: -8.77, raise: 1.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.32, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 7.71} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.93, evRange: -8.98, rangeWeight: 0.31, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.35} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.93, evRange: -8.98, rangeWeight: 0.31, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.35} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
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
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.23, evRange: 0.23, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: -0.03, bet: 0.33}, evA: {check: -0.03, bet: 0.33} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.23, evRange: 0.23, rangeWeight: 0.17, freq: {check: 0.27, bet: 0.73}, ev: {check: -0.03, bet: 0.33}, evA: {check: -0.03, bet: 0.33} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.68, evRange: -0.68, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: 0.16}, evA: {check: -0.75, bet: 0.16} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.68, evRange: -0.68, rangeWeight: 0.17, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: 0.16}, evA: {check: -0.75, bet: 0.16} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.39, evRange: 0.64, rangeWeight: 0.17, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.00, bet: 0.39}, evA: {check: 0.00, bet: 0.65} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.39, evRange: 0.64, rangeWeight: 0.17, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.00, bet: 0.39}, evA: {check: 0.00, bet: 0.65} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 0.32, evRange: 0.55, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 0.32, evRange: 0.55, rangeWeight: 0.17, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.00, bet: 0.38}, evA: {check: 0.00, bet: 0.65} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.00, bet: 0.20}, evA: {check: 0.00, bet: 0.42} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.06, evRange: 0.12, rangeWeight: 0.17, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.00, bet: 0.20}, evA: {check: 0.00, bet: 0.42} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.40, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -0.63}, evA: {check: -0.40, bet: -3.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.40, rangeWeight: 0.13, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -0.63}, evA: {check: -0.40, bet: -3.50} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.83, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.57}, evA: {check: -0.83, bet: -3.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.83, rangeWeight: 0.14, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.57}, evA: {check: -0.83, bet: -3.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.01, evRange: 1.01, rangeWeight: 0.47, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.01, bet: 1.05}, evA: {check: 1.01, bet: 1.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: -0.23, rangeWeight: 0.01, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.02}, evA: {check: -0.50, bet: -3.34} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: -0.23, rangeWeight: 0.01, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.02}, evA: {check: -0.50, bet: -3.34} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.85, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.50}, evA: {check: -0.90, bet: -2.27} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.85, rangeWeight: 0.15, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.50}, evA: {check: -0.90, bet: -2.27} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, rangeWeight: 0.69, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00}, evA: {check: 0.53, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.86}, evA: {fold: -1.00, call: -3.22, raise: -4.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.13, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.86}, evA: {fold: -1.00, call: -3.22, raise: -4.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.12}, evA: {fold: -1.00, call: -4.52, raise: -6.46} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -2.12}, evA: {fold: -1.00, call: -4.52, raise: -6.46} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.04, evRange: 5.12, rangeWeight: 0.47, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.04}, evA: {fold: -1.00, call: 1.55, raise: 5.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.25, evRange: -3.46, rangeWeight: 0.01, freq: {fold: 0.48, call: 0.52}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.25, evRange: -3.46, rangeWeight: 0.01, freq: {fold: 0.48, call: 0.52}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.46} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.07} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.07} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.69, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 4.78} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.95, evRange: -1.01, rangeWeight: 0.01, freq: {fold: 0.98, call: 0.02, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.36}, evA: {fold: -1.00, call: -2.48, raise: -2.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.95, evRange: -1.01, rangeWeight: 0.01, freq: {fold: 0.98, call: 0.02, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.36}, evA: {fold: -1.00, call: -2.48, raise: -2.61} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.67}, evA: {fold: -1.00, call: -4.49, raise: -3.10} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.15, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.67}, evA: {fold: -1.00, call: -4.49, raise: -3.10} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.24, evRange: 5.24, rangeWeight: 0.69, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.24}, evA: {fold: -1.00, call: 2.65, raise: 5.24} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.15, evRange: -4.83, rangeWeight: 0.13, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.15, evRange: -4.83, rangeWeight: 0.13, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -5.80} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.14} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.01, rangeWeight: 0.14, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.14} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.99, evRange: 8.99, rangeWeight: 0.47, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 2.79} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.15, evRange: 0.67, rangeWeight: 0.10, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.55}, evA: {check: 0.67, bet: 0.24} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.15, evRange: 0.67, rangeWeight: 0.10, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.15, bet: -1.55}, evA: {check: 0.67, bet: 0.24} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.09, evRange: 1.28, rangeWeight: 0.10, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.17, bet: 3.06}, evA: {check: 1.28, bet: 1.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.20, evRange: -0.26, rangeWeight: 0.35, freq: {check: 0.84, bet: 0.16}, ev: {check: -0.77, bet: -3.46}, evA: {check: -0.25, bet: -0.28} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.20, evRange: -0.26, rangeWeight: 0.35, freq: {check: 0.84, bet: 0.16}, ev: {check: -0.77, bet: -3.46}, evA: {check: -0.25, bet: -0.28} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 0.66, rangeWeight: 0.01, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: -0.82}, evA: {check: 0.50, bet: 0.17} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 0.66, rangeWeight: 0.01, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: -0.82}, evA: {check: 0.50, bet: 0.17} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.84, evRange: 1.37, rangeWeight: 0.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.84}, evA: {check: 0.90, bet: 1.37} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.47, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.74}, evA: {check: -0.53, bet: -0.70} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.47, rangeWeight: 0.45, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -1.74}, evA: {check: -0.53, bet: -0.70} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.07, evRange: 1.06, rangeWeight: 0.10, freq: {fold: 0.59, call: 0.41, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.24}, evA: {fold: -1.00, call: 3.22, raise: 3.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.07, evRange: 1.06, rangeWeight: 0.10, freq: {fold: 0.59, call: 0.41, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.24}, evA: {fold: -1.00, call: 3.22, raise: 3.65} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.43, evRange: 5.01, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.43}, evA: {fold: -1.00, call: 4.52, raise: 5.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -0.99, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.01}, evA: {fold: -1.00, call: -1.55, raise: 2.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -0.99, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.01}, evA: {fold: -1.00, call: -1.55, raise: 2.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.46, evRange: -2.66, rangeWeight: 0.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.46, evRange: -2.66, rangeWeight: 0.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.45, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.78} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.19, evRange: 3.21, rangeWeight: 0.01, freq: {fold: 0.03, call: 0.97, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.38}, evA: {fold: -1.00, call: 2.48, raise: 2.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.19, evRange: 3.21, rangeWeight: 0.01, freq: {fold: 0.03, call: 0.97, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.38}, evA: {fold: -1.00, call: 2.48, raise: 2.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.81, evRange: 5.78, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.81}, evA: {fold: -1.00, call: 4.49, raise: 5.78} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.11, evRange: -1.00, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.80}, evA: {fold: -1.00, call: -2.65, raise: -0.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.11, evRange: -1.00, rangeWeight: 0.45, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.80}, evA: {fold: -1.00, call: -2.65, raise: -0.98} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.53, evRange: 6.00, rangeWeight: 0.10, freq: {fold: 0.10, call: 0.90}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.53, evRange: 6.00, rangeWeight: 0.10, freq: {fold: 0.10, call: 0.90}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 5.80} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.01, evRange: -4.99, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.01, evRange: -4.99, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.79} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.45, evRange: 1.52, rangeWeight: 0.10, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.20, bet: 2.45}, evA: {check: 1.43, bet: 1.52} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.96, evRange: 0.89, rangeWeight: 0.10, freq: {check: 0.63, bet: 0.37}, ev: {check: -0.71, bet: -1.38}, evA: {check: 0.89, bet: 0.89} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.96, evRange: 0.89, rangeWeight: 0.10, freq: {check: 0.63, bet: 0.37}, ev: {check: -0.71, bet: -1.38}, evA: {check: 0.89, bet: 0.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.92, evRange: -0.31, rangeWeight: 0.35, freq: {check: 0.91, bet: 0.09}, ev: {check: -0.75, bet: -2.67}, evA: {check: -0.31, bet: -0.34} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.92, evRange: -0.31, rangeWeight: 0.35, freq: {check: 0.91, bet: 0.09}, ev: {check: -0.75, bet: -2.67}, evA: {check: -0.31, bet: -0.34} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.95, evRange: 1.88, rangeWeight: 0.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 2.95}, evA: {check: 0.90, bet: 1.88} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.34, evRange: 0.42, rangeWeight: 0.09, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.25, bet: -1.72}, evA: {check: 0.51, bet: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.34, evRange: 0.42, rangeWeight: 0.09, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.25, bet: -1.72}, evA: {check: 0.51, bet: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.76, evRange: -0.47, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.41}, evA: {check: -0.53, bet: -1.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.76, evRange: -0.47, rangeWeight: 0.41, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.41}, evA: {check: -0.53, bet: -1.72} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.97, evRange: 5.71, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.98}, evA: {fold: -1.00, call: 4.98, raise: 5.71} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.18, evRange: 4.30, rangeWeight: 0.10, freq: {fold: 0.03, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.28}, evA: {fold: -1.00, call: 4.42, raise: 4.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.18, evRange: 4.30, rangeWeight: 0.10, freq: {fold: 0.03, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.28}, evA: {fold: -1.00, call: 4.42, raise: 4.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.39}, evA: {fold: -1.00, call: -1.55, raise: 0.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.39}, evA: {fold: -1.00, call: -1.55, raise: 0.78} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.14} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.13, evRange: 5.87, rangeWeight: 0.09, freq: {fold: 0.02, call: 0.98}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.61} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.13, evRange: 5.87, rangeWeight: 0.09, freq: {fold: 0.02, call: 0.98}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 4.61} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.01, evRange: -5.00, rangeWeight: 0.41, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.01, evRange: -5.00, rangeWeight: 0.41, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -4.78} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.41, evRange: 5.64, rangeWeight: 0.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.42}, evA: {fold: -1.00, call: 4.52, raise: 5.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.62, evRange: 2.15, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.62}, evA: {fold: -1.00, call: 2.56, raise: 3.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.62, evRange: 2.15, rangeWeight: 0.09, freq: {fold: 0.28, call: 0.72, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.62}, evA: {fold: -1.00, call: 2.56, raise: 3.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.44}, evA: {fold: -1.00, call: -2.65, raise: -0.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, rangeWeight: 0.41, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.44}, evA: {fold: -1.00, call: -2.65, raise: -0.17} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 8.96} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.12, evRange: 4.20, rangeWeight: 0.10, freq: {fold: 0.29, call: 0.71}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 7.96} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.12, evRange: 4.20, rangeWeight: 0.10, freq: {fold: 0.29, call: 0.71}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: 7.96} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.79} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -2.79} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.01, evRange: 0.01, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.28, raise: 0.72}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.01, evRange: 0.01, rangeWeight: 0.09, freq: {fold: 0.00, call: 0.28, raise: 0.72}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.09, freq: {fold: 0.04, call: 0.80, raise: 0.16}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.04, evRange: -0.04, rangeWeight: 0.09, freq: {fold: 0.04, call: 0.80, raise: 0.16}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.94, evRange: -0.94, rangeWeight: 0.32, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.94, evRange: -0.94, rangeWeight: 0.32, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.69, evRange: 2.11, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.69, bet: -0.28}, evA: {check: 2.11, bet: 1.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.69, evRange: 2.11, rangeWeight: 0.12, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.69, bet: -0.28}, evA: {check: 2.11, bet: 1.20} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.64, evRange: -2.58, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.63, bet: -3.29}, evA: {check: -2.57, bet: -2.74} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.64, evRange: -2.58, rangeWeight: 0.35, freq: {check: 0.97, bet: 0.03}, ev: {check: -2.63, bet: -3.29}, evA: {check: -2.57, bet: -2.74} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.55, evRange: 4.64, rangeWeight: 0.06, freq: {check: 0.19, bet: 0.81}, ev: {check: 4.63, bet: 4.53}, evA: {check: 4.60, bet: 4.65} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.44, evRange: 2.13, rangeWeight: 0.25, freq: {check: 0.84, bet: 0.16}, ev: {check: 0.75, bet: -1.18}, evA: {check: 1.87, bet: 1.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.44, evRange: 2.13, rangeWeight: 0.25, freq: {check: 0.84, bet: 0.16}, ev: {check: 0.75, bet: -1.18}, evA: {check: 1.87, bet: 1.77} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.35, evRange: -1.49, rangeWeight: 0.21, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -4.58}, evA: {check: -1.50, bet: -1.64} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.35, evRange: -1.49, rangeWeight: 0.21, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -4.58}, evA: {check: -1.50, bet: -1.64} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.06, evRange: 4.09, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.06}, evA: {check: 2.82, bet: 4.09} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.75, evRange: 3.32, rangeWeight: 0.12, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.85}, evA: {fold: -3.00, call: 2.42, raise: 3.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.75, evRange: 3.32, rangeWeight: 0.12, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.85}, evA: {fold: -3.00, call: 2.42, raise: 3.05} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.06, evRange: -3.05, rangeWeight: 0.35, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -6.56}, evA: {fold: -3.00, call: -5.26, raise: -6.16} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.06, evRange: -3.05, rangeWeight: 0.35, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: -6.56}, evA: {fold: -3.00, call: -5.26, raise: -6.16} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.09, evRange: 9.24, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.09}, evA: {fold: -3.00, call: 6.50, raise: 9.24} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.72, evRange: 8.02, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.72, evRange: 8.02, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.06, evRange: -6.91, rangeWeight: 0.21, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.50} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.06, evRange: -6.91, rangeWeight: 0.21, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -5.50} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.35} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.59, evRange: 3.15, rangeWeight: 0.25, freq: {fold: 0.24, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.15}, evA: {fold: -3.00, call: 4.37, raise: 5.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.59, evRange: 3.15, rangeWeight: 0.25, freq: {fold: 0.24, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.15}, evA: {fold: -3.00, call: 4.37, raise: 5.61} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.99, evRange: -2.98, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 0.67}, evA: {fold: -3.00, call: -3.50, raise: 4.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.99, evRange: -2.98, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 0.67}, evA: {fold: -3.00, call: -3.50, raise: 4.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.41, evRange: 7.21, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.41}, evA: {fold: -3.00, call: 6.59, raise: 7.21} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -5.02, evRange: -4.52, rangeWeight: 0.12, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.81} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -5.02, evRange: -4.52, rangeWeight: 0.12, freq: {fold: 0.80, call: 0.20}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 3.81} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.26} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.35, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.26} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.21} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: -1.30, rangeWeight: 0.17, freq: {check: 0.11, bet: 0.89}, ev: {check: 0.04, bet: -0.28}, evA: {check: -1.32, bet: -1.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: -1.30, rangeWeight: 0.17, freq: {check: 0.11, bet: 0.89}, ev: {check: 0.04, bet: -0.28}, evA: {check: -1.32, bet: -1.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.24, evRange: 4.55, rangeWeight: 0.50, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.47, bet: 4.24}, evA: {check: 4.25, bet: 4.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.96, evRange: -2.62, rangeWeight: 0.08, freq: {check: 0.07, bet: 0.93}, ev: {check: -2.59, bet: -1.92}, evA: {check: -2.87, bet: -2.60} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.96, evRange: -2.62, rangeWeight: 0.08, freq: {check: 0.07, bet: 0.93}, ev: {check: -2.59, bet: -1.92}, evA: {check: -2.87, bet: -2.60} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.52, evRange: -1.80, rangeWeight: 0.29, freq: {check: 0.75, bet: 0.25}, ev: {check: 0.75, bet: -0.18}, evA: {check: -1.87, bet: -3.57} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.52, evRange: -1.80, rangeWeight: 0.29, freq: {check: 0.75, bet: 0.25}, ev: {check: 0.75, bet: -0.18}, evA: {check: -1.87, bet: -3.57} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.34, evRange: 4.67, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.34}, evA: {check: 1.50, bet: 4.67} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.37, evRange: -3.60, rangeWeight: 0.08, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -2.51}, evA: {check: -2.82, bet: -4.61} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.37, evRange: -3.60, rangeWeight: 0.08, freq: {check: 0.53, bet: 0.47}, ev: {check: -2.25, bet: -2.51}, evA: {check: -2.82, bet: -4.61} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: -1.72, rangeWeight: 0.17, freq: {fold: 0.42, call: 0.57, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.40}, evA: {fold: -3.00, call: -2.42, raise: 0.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: -1.72, rangeWeight: 0.17, freq: {fold: 0.42, call: 0.57, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.40}, evA: {fold: -3.00, call: -2.42, raise: 0.50} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.12, evRange: 7.19, rangeWeight: 0.50, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.12}, evA: {fold: -3.00, call: 5.26, raise: 7.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.80, evRange: -2.83, rangeWeight: 0.08, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -5.25, raise: 1.96}, evA: {fold: -3.00, call: -6.50, raise: 1.42} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.80, evRange: -2.83, rangeWeight: 0.08, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -5.25, raise: 1.96}, evA: {fold: -3.00, call: -6.50, raise: 1.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.42, evRange: -6.85, rangeWeight: 0.29, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.42, evRange: -6.85, rangeWeight: 0.29, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 5.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.35} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.35} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.90, evRange: -2.92, rangeWeight: 0.29, freq: {fold: 0.56, call: 0.43, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.37, raise: -3.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.90, evRange: -2.92, rangeWeight: 0.29, freq: {fold: 0.56, call: 0.43, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -4.37, raise: -3.80} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 3.50, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.53, evRange: -2.99, rangeWeight: 0.08, freq: {fold: 0.91, call: 0.00, raise: 0.09}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.59, raise: -2.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.53, evRange: -2.99, rangeWeight: 0.08, freq: {fold: 0.91, call: 0.00, raise: 0.09}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.59, raise: -2.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.97, evRange: -6.98, rangeWeight: 0.17, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.81} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.97, evRange: -6.98, rangeWeight: 0.17, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.81} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.50, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.26} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.71, evRange: 4.61, rangeWeight: 0.12, freq: {check: 0.83, bet: 0.17}, ev: {check: 4.80, bet: 4.27}, evA: {check: 4.62, bet: 4.59} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.04, evRange: -1.67, rangeWeight: 0.37, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.04, bet: -0.28}, evA: {check: -1.67, bet: -1.85} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.04, evRange: -1.67, rangeWeight: 0.37, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.04, bet: -0.28}, evA: {check: -1.67, bet: -1.85} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.57, evRange: -2.89, rangeWeight: 0.06, freq: {check: 0.94, bet: 0.06}, ev: {check: -2.60, bet: -1.98}, evA: {check: -2.88, bet: -3.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.57, evRange: -2.89, rangeWeight: 0.06, freq: {check: 0.94, bet: 0.06}, ev: {check: -2.60, bet: -1.98}, evA: {check: -2.88, bet: -3.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.34, evRange: 4.99, rangeWeight: 0.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.34}, evA: {check: 2.63, bet: 4.99} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.42, evRange: -0.05, rangeWeight: 0.26, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: -0.21}, evA: {check: -0.50, bet: -0.15} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.42, evRange: -0.05, rangeWeight: 0.26, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: -0.21}, evA: {check: -0.50, bet: -0.15} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.34, evRange: -2.82, rangeWeight: 0.09, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -2.43}, evA: {check: -2.82, bet: -2.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.34, evRange: -2.82, rangeWeight: 0.09, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -2.43}, evA: {check: -2.82, bet: -2.83} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 7.09, rangeWeight: 0.12, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.06}, evA: {fold: -3.00, call: 4.87, raise: 7.09} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.35, evRange: -2.01, rangeWeight: 0.37, freq: {fold: 0.44, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45}, evA: {fold: -3.00, call: -2.92, raise: -0.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.35, evRange: -2.01, rangeWeight: 0.37, freq: {fold: 0.44, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45}, evA: {fold: -3.00, call: -2.92, raise: -0.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.72, evRange: -2.80, rangeWeight: 0.06, freq: {fold: 0.95, call: 0.00, raise: 0.05}, ev: {fold: -3.00, call: -5.25, raise: 2.24}, evA: {fold: -3.00, call: -6.50, raise: 0.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.72, evRange: -2.80, rangeWeight: 0.06, freq: {fold: 0.95, call: 0.00, raise: 0.05}, ev: {fold: -3.00, call: -5.25, raise: 2.24}, evA: {fold: -3.00, call: -6.50, raise: 0.69} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.30, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 9.63} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.72, evRange: -6.80, rangeWeight: 0.26, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -1.83} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.72, evRange: -6.80, rangeWeight: 0.26, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -1.83} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.35} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.35} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.02, rangeWeight: 0.30, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 6.13, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.82, evRange: -1.56, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.43, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -1.16, raise: 3.38} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.82, evRange: -1.56, rangeWeight: 0.26, freq: {fold: 0.54, call: 0.43, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -1.16, raise: 3.38} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.56, evRange: -2.40, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.59, raise: 4.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.56, evRange: -2.40, rangeWeight: 0.09, freq: {fold: 0.92, call: 0.00, raise: 0.08}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.59, raise: 4.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.65} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -6.97, rangeWeight: 0.37, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.58} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -6.97, rangeWeight: 0.37, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -4.58} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
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
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.20, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: 1.99, rangeWeight: 0.39, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.25, bet: -0.14}, evA: {check: 1.99, bet: 1.96} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: 1.99, rangeWeight: 0.39, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.25, bet: -0.14}, evA: {check: 1.99, bet: 1.96} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.77, evRange: -3.65, rangeWeight: 0.09, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.75, bet: -4.58}, evA: {check: -3.64, bet: -4.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.77, evRange: -3.65, rangeWeight: 0.09, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.75, bet: -4.58}, evA: {check: -3.64, bet: -4.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.86, evRange: 6.99, rangeWeight: 0.04, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.64, bet: 6.86}, evA: {check: 6.77, bet: 7.00} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.43, evRange: 1.02, rangeWeight: 0.25, freq: {check: 0.56, bet: 0.44}, ev: {check: 1.25, bet: -0.63}, evA: {check: 0.85, bet: 0.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.43, evRange: 1.02, rangeWeight: 0.25, freq: {check: 0.56, bet: 0.44}, ev: {check: 1.25, bet: -0.63}, evA: {check: 0.85, bet: 0.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.48, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.47}, evA: {check: -4.50, bet: -7.49} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.48, rangeWeight: 0.21, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.47}, evA: {check: -4.50, bet: -7.49} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.99, evRange: 8.20, rangeWeight: 0.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.99}, evA: {check: 4.80, bet: 8.20} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.22, evRange: 4.23, rangeWeight: 0.39, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.52}, evA: {fold: -5.00, call: 3.11, raise: 4.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.22, evRange: 4.23, rangeWeight: 0.39, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.52}, evA: {fold: -5.00, call: 3.11, raise: 4.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.21}, evA: {fold: -5.00, call: -6.76, raise: -5.38} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.21}, evA: {fold: -5.00, call: -6.76, raise: -5.38} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.77, evRange: 10.91, rangeWeight: 0.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.77}, evA: {fold: -5.00, call: 8.36, raise: 10.91} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.81, evRange: 1.75, rangeWeight: 0.25, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.81, evRange: 1.75, rangeWeight: 0.25, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 2.22} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.70} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.21, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.70} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.07, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 1.24, rangeWeight: 0.25, freq: {fold: 0.14, call: 0.83, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.36}, evA: {fold: -5.00, call: 1.53, raise: 4.72} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 1.24, rangeWeight: 0.25, freq: {fold: 0.14, call: 0.83, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.36}, evA: {fold: -5.00, call: 1.53, raise: 4.72} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.93, evRange: -4.92, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -2.13}, evA: {fold: -5.00, call: -8.10, raise: -1.53} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.93, evRange: -4.92, rangeWeight: 0.21, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -2.13}, evA: {fold: -5.00, call: -8.10, raise: -1.53} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.03, evRange: 10.64, rangeWeight: 0.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.03}, evA: {fold: -5.00, call: 8.65, raise: 10.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.74, evRange: -1.25, rangeWeight: 0.39, freq: {fold: 0.49, call: 0.51}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.74, evRange: -1.25, rangeWeight: 0.39, freq: {fold: 0.49, call: 0.51}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 4.49} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.77} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.09, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.77} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.07} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.30, evRange: -1.93, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.32, bet: -0.68}, evA: {check: -1.93, bet: -2.17} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.30, evRange: -1.93, rangeWeight: 0.41, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.32, bet: -0.68}, evA: {check: -1.93, bet: -2.17} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.89, evRange: 7.61, rangeWeight: 0.10, freq: {check: 0.79, bet: 0.21}, ev: {check: 6.78, bet: 7.31}, evA: {check: 7.62, bet: 7.54} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.87, evRange: -4.62, rangeWeight: 0.04, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.87, bet: -3.92}, evA: {check: -4.60, bet: -4.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.87, evRange: -4.62, rangeWeight: 0.04, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.87, bet: -3.92}, evA: {check: -4.60, bet: -4.96} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.42, evRange: -0.26, rangeWeight: 0.29, freq: {check: 0.42, bet: 0.58}, ev: {check: 1.25, bet: -0.16}, evA: {check: -0.85, bet: -0.34} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.42, evRange: -0.26, rangeWeight: 0.29, freq: {check: 0.42, bet: 0.58}, ev: {check: 1.25, bet: -0.16}, evA: {check: -0.85, bet: -0.34} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.82, rangeWeight: 0.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.01}, evA: {check: 4.50, bet: 7.82} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.77, evRange: -4.81, rangeWeight: 0.08, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -4.01}, evA: {check: -4.80, bet: -5.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.77, evRange: -4.81, rangeWeight: 0.08, freq: {check: 0.94, bet: 0.06}, ev: {check: -3.75, bet: -4.01}, evA: {check: -4.80, bet: -5.19} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.26, evRange: -2.11, rangeWeight: 0.41, freq: {fold: 0.28, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.58}, evA: {fold: -5.00, call: -3.11, raise: -0.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.26, evRange: -2.11, rangeWeight: 0.41, freq: {fold: 0.28, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.58}, evA: {fold: -5.00, call: -3.11, raise: -0.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.83, evRange: 10.28, rangeWeight: 0.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83}, evA: {fold: -5.00, call: 6.76, raise: 10.28} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.50, evRange: -4.72, rangeWeight: 0.04, freq: {fold: 0.87, call: 0.00, raise: 0.13}, ev: {fold: -5.00, call: -6.75, raise: -1.02}, evA: {fold: -5.00, call: -8.36, raise: -2.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.50, evRange: -4.72, rangeWeight: 0.04, freq: {fold: 0.87, call: 0.00, raise: 0.13}, ev: {fold: -5.00, call: -6.75, raise: -1.02}, evA: {fold: -5.00, call: -8.36, raise: -2.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.98, evRange: -5.47, rangeWeight: 0.29, freq: {fold: 0.59, call: 0.41}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.98, evRange: -5.47, rangeWeight: 0.29, freq: {fold: 0.59, call: 0.41}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -2.22} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 11.70} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.23, evRange: -1.79, rangeWeight: 0.29, freq: {fold: 0.34, call: 0.63, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.01}, evA: {fold: -5.00, call: -1.53, raise: 3.92} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.23, evRange: -1.79, rangeWeight: 0.29, freq: {fold: 0.34, call: 0.63, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.01}, evA: {fold: -5.00, call: -1.53, raise: 3.92} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.44, evRange: 9.79, rangeWeight: 0.25, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.44}, evA: {fold: -5.00, call: 8.10, raise: 9.79} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.54, evRange: -3.18, rangeWeight: 0.08, freq: {fold: 0.76, call: 0.00, raise: 0.24}, ev: {fold: -5.00, call: -6.75, raise: 1.11}, evA: {fold: -5.00, call: -8.65, raise: 2.62} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.54, evRange: -3.18, rangeWeight: 0.08, freq: {fold: 0.76, call: 0.00, raise: 0.24}, ev: {fold: -5.00, call: -6.75, raise: 1.11}, evA: {fold: -5.00, call: -8.65, raise: 2.62} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.34, evRange: -7.37, rangeWeight: 0.41, freq: {fold: 0.78, call: 0.22}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.34, evRange: -7.37, rangeWeight: 0.41, freq: {fold: 0.78, call: 0.22}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -4.49} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.10, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.77} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.07} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.32, evRange: 6.35, rangeWeight: 0.59, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.16, bet: 6.32}, evA: {check: 5.92, bet: 6.36} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.01, evRange: -1.95, rangeWeight: 0.15, freq: {check: 0.06, bet: 0.94}, ev: {check: 0.38, bet: -0.03}, evA: {check: -2.16, bet: -1.94} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.01, evRange: -1.95, rangeWeight: 0.15, freq: {check: 0.06, bet: 0.94}, ev: {check: 0.38, bet: -0.03}, evA: {check: -2.16, bet: -1.94} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.43, evRange: -2.60, rangeWeight: 0.06, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.23, bet: -1.40}, evA: {check: -4.79, bet: -2.58} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.43, evRange: -2.60, rangeWeight: 0.06, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.23, bet: -1.40}, evA: {check: -4.79, bet: -2.58} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.66, evRange: 7.10, rangeWeight: 0.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.66}, evA: {check: 2.05, bet: 7.10} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.07, evRange: -3.20, rangeWeight: 0.26, freq: {check: 0.83, bet: 0.17}, ev: {check: 1.25, bet: 0.17}, evA: {check: -3.67, bet: -5.40} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.07, evRange: -3.20, rangeWeight: 0.26, freq: {check: 0.83, bet: 0.17}, ev: {check: 1.25, bet: 0.17}, evA: {check: -3.67, bet: -5.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.63, evRange: -5.54, rangeWeight: 0.09, freq: {check: 0.59, bet: 0.41}, ev: {check: -3.75, bet: -3.46}, evA: {check: -4.80, bet: -6.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.63, evRange: -5.54, rangeWeight: 0.09, freq: {check: 0.59, bet: 0.41}, ev: {check: -3.75, bet: -3.46}, evA: {check: -4.80, bet: -6.76} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.02, rangeWeight: 0.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02}, evA: {fold: -5.00, call: 6.25, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.11, evRange: -2.69, rangeWeight: 0.15, freq: {fold: 0.33, call: 0.66, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.48}, evA: {fold: -5.00, call: -3.76, raise: -0.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.11, evRange: -2.69, rangeWeight: 0.15, freq: {fold: 0.33, call: 0.66, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.48}, evA: {fold: -5.00, call: -3.76, raise: -0.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.44, evRange: -4.58, rangeWeight: 0.06, freq: {fold: 0.92, call: 0.01, raise: 0.07}, ev: {fold: -5.00, call: -6.75, raise: 3.41}, evA: {fold: -5.00, call: -8.36, raise: 1.54} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.44, evRange: -4.58, rangeWeight: 0.06, freq: {fold: 0.92, call: 0.01, raise: 0.07}, ev: {fold: -5.00, call: -6.75, raise: 3.41}, evA: {fold: -5.00, call: -8.36, raise: 1.54} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 5.33} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.90, evRange: -8.99, rangeWeight: 0.26, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.54} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.90, evRange: -8.99, rangeWeight: 0.26, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.54} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.04, evRange: 9.05, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.04}, evA: {fold: -5.00, call: 3.69, raise: 9.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.55, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 0.66, call: 0.32, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.46}, evA: {fold: -5.00, call: -6.61, raise: -6.22} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.55, evRange: -5.00, rangeWeight: 0.26, freq: {fold: 0.66, call: 0.32, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.46}, evA: {fold: -5.00, call: -6.61, raise: -6.22} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.70, evRange: -4.99, rangeWeight: 0.09, freq: {fold: 0.84, call: 0.00, raise: 0.16}, ev: {fold: -5.00, call: -6.75, raise: 3.31}, evA: {fold: -5.00, call: -8.65, raise: -4.93} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.70, evRange: -4.99, rangeWeight: 0.09, freq: {fold: 0.84, call: 0.00, raise: 0.16}, ev: {fold: -5.00, call: -6.75, raise: 3.31}, evA: {fold: -5.00, call: -8.65, raise: -4.93} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.59, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.79, evRange: -8.89, rangeWeight: 0.15, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.79, evRange: -8.89, rangeWeight: 0.15, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.06, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.07} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.40, raise: 0.60}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.00, evRange: 0.00, rangeWeight: 0.17, freq: {fold: 0.00, call: 0.40, raise: 0.60}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.17, freq: {fold: 0.02, call: 0.60, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.17, freq: {fold: 0.02, call: 0.60, raise: 0.38}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.00} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.81, evRange: -0.81, rangeWeight: 0.17, freq: {fold: 0.81, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.81, evRange: -0.81, rangeWeight: 0.17, freq: {fold: 0.81, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.00, raise: 0.01}, evA: {fold: -1.00, call: 0.00, raise: 0.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: 1.56, rangeWeight: 0.25, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.23, bet: -0.38}, evA: {check: 1.56, bet: 1.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: 1.56, rangeWeight: 0.25, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.23, bet: -0.38}, evA: {check: 1.56, bet: 1.54} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.27, evRange: -1.82, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.47}, evA: {check: -1.82, bet: -2.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.27, evRange: -1.82, rangeWeight: 0.24, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.47}, evA: {check: -1.82, bet: -2.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.66, evRange: 4.35, rangeWeight: 0.03, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.63, bet: 4.67}, evA: {check: 4.29, bet: 4.36} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.05, evRange: 1.72, rangeWeight: 0.19, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.75, bet: -0.96}, evA: {check: 1.66, bet: 1.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.05, evRange: 1.72, rangeWeight: 0.19, freq: {check: 0.53, bet: 0.47}, ev: {check: 0.75, bet: -0.96}, evA: {check: 1.66, bet: 1.61} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.25, evRange: -2.05, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.33}, evA: {check: -2.08, bet: -3.60} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.25, evRange: -2.05, rangeWeight: 0.28, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.33}, evA: {check: -2.08, bet: -3.60} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.94, evRange: 4.97, rangeWeight: 0.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.94}, evA: {check: 2.92, bet: 4.97} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.58, evRange: 4.07, rangeWeight: 0.25, freq: {fold: 0.04, call: 0.96, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 1.22}, evA: {fold: -3.00, call: 3.53, raise: 4.47} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.58, evRange: 4.07, rangeWeight: 0.25, freq: {fold: 0.04, call: 0.96, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 1.22}, evA: {fold: -3.00, call: 3.53, raise: 4.47} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -4.15}, evA: {fold: -3.00, call: -4.46, raise: -1.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -4.15}, evA: {fold: -3.00, call: -4.46, raise: -1.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.49, evRange: 8.19, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.49}, evA: {fold: -3.00, call: 6.57, raise: 8.19} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.19, evRange: 3.07, rangeWeight: 0.19, freq: {fold: 0.26, call: 0.74}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.08} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.19, evRange: 3.07, rangeWeight: 0.19, freq: {fold: 0.26, call: 0.74}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 6.08} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.00, rangeWeight: 0.28, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.62} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.00, rangeWeight: 0.28, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.62} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.06, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.72} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.72, evRange: 2.68, rangeWeight: 0.19, freq: {fold: 0.22, call: 0.77, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: 3.87, raise: 5.91} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.72, evRange: 2.68, rangeWeight: 0.19, freq: {fold: 0.22, call: 0.77, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: 3.87, raise: 5.91} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.92, evRange: -2.85, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 0.58}, evA: {fold: -3.00, call: -4.85, raise: 3.90} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.92, evRange: -2.85, rangeWeight: 0.28, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 0.58}, evA: {fold: -3.00, call: -4.85, raise: 3.90} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.43, evRange: 7.44, rangeWeight: 0.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.43}, evA: {fold: -3.00, call: 6.82, raise: 7.44} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.92, evRange: -4.06, rangeWeight: 0.25, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.55} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.92, evRange: -4.06, rangeWeight: 0.25, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: 5.55} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -7.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 10.32} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -1.97, rangeWeight: 0.31, freq: {check: 0.97, bet: 0.03}, ev: {check: -0.26, bet: 0.21}, evA: {check: -1.97, bet: -2.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -1.97, rangeWeight: 0.31, freq: {check: 0.97, bet: 0.03}, ev: {check: -0.26, bet: 0.21}, evA: {check: -1.97, bet: -2.11} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.25, evRange: 4.01, rangeWeight: 0.31, freq: {check: 0.48, bet: 0.52}, ev: {check: 4.87, bet: 3.69}, evA: {check: 4.01, bet: 4.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.23, evRange: -2.65, rangeWeight: 0.03, freq: {check: 0.05, bet: 0.95}, ev: {check: -2.92, bet: -1.14}, evA: {check: -2.99, bet: -2.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.23, evRange: -2.65, rangeWeight: 0.03, freq: {check: 0.05, bet: 0.95}, ev: {check: -2.92, bet: -1.14}, evA: {check: -2.99, bet: -2.64} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.72, evRange: -1.10, rangeWeight: 0.24, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.75, bet: 0.10}, evA: {check: -1.66, bet: -2.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.72, evRange: -1.10, rangeWeight: 0.24, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.75, bet: 0.10}, evA: {check: -1.66, bet: -2.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.01, evRange: 4.78, rangeWeight: 0.36, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.01}, evA: {check: 2.08, bet: 4.78} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.98, evRange: -3.29, rangeWeight: 0.08, freq: {check: 0.10, bet: 0.90}, ev: {check: -2.25, bet: -1.95}, evA: {check: -2.92, bet: -3.34} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.98, evRange: -3.29, rangeWeight: 0.08, freq: {check: 0.10, bet: 0.90}, ev: {check: -2.25, bet: -1.95}, evA: {check: -2.92, bet: -3.34} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.69, evRange: -2.45, rangeWeight: 0.31, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.53, raise: -1.59} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.69, evRange: -2.45, rangeWeight: 0.31, freq: {fold: 0.51, call: 0.49, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.53, raise: -1.59} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 4.46, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.98, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.57, raise: -0.13} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.98, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.47}, evA: {fold: -3.00, call: -6.57, raise: -0.13} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.96, evRange: -6.99, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.08} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.96, evRange: -6.99, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.08} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.36, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.62} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.08, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.72} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.45, evRange: -2.82, rangeWeight: 0.24, freq: {fold: 0.67, call: 0.32, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -3.87, raise: -1.06} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.45, evRange: -2.82, rangeWeight: 0.24, freq: {fold: 0.67, call: 0.32, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -3.87, raise: -1.06} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, rangeWeight: 0.36, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 4.85, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -2.97, rangeWeight: 0.08, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.82, raise: 1.26} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -2.97, rangeWeight: 0.08, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.82, raise: 1.26} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.97, evRange: -6.99, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.55} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.97, evRange: -6.99, rangeWeight: 0.31, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -5.55} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.32} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.32} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.81, evRange: 4.47, rangeWeight: 0.32, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.46, bet: 4.86}, evA: {check: 4.46, bet: 4.47} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.46, evRange: -1.28, rangeWeight: 0.31, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.02, bet: -0.90}, evA: {check: -1.28, bet: -1.28} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.46, evRange: -1.28, rangeWeight: 0.31, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.02, bet: -0.90}, evA: {check: -1.28, bet: -1.28} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.76, evRange: -1.61, rangeWeight: 0.03, freq: {check: 0.03, bet: 0.97}, ev: {check: -2.08, bet: -1.76}, evA: {check: -2.28, bet: -1.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.76, evRange: -1.61, rangeWeight: 0.03, freq: {check: 0.03, bet: 0.97}, ev: {check: -2.08, bet: -1.76}, evA: {check: -2.28, bet: -1.59} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.67, evRange: 5.76, rangeWeight: 0.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.67}, evA: {check: 2.05, bet: 5.76} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.92, evRange: -1.84, rangeWeight: 0.32, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: -4.03}, evA: {check: -1.69, bet: -3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.92, evRange: -1.84, rangeWeight: 0.32, freq: {check: 0.65, bet: 0.35}, ev: {check: 0.75, bet: -4.03}, evA: {check: -1.69, bet: -3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.05, evRange: -3.33, rangeWeight: 0.07, freq: {check: 0.64, bet: 0.36}, ev: {check: -2.25, bet: -4.44}, evA: {check: -2.92, bet: -4.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.05, evRange: -3.33, rangeWeight: 0.07, freq: {check: 0.64, bet: 0.36}, ev: {check: -2.25, bet: -4.44}, evA: {check: -2.92, bet: -4.07} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.09, evRange: 7.15, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.09}, evA: {fold: -3.00, call: 5.51, raise: 7.15} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.38, evRange: -1.70, rangeWeight: 0.31, freq: {fold: 0.45, call: 0.52, raise: 0.03}, ev: {fold: -3.00, call: 1.75, raise: 2.42}, evA: {fold: -3.00, call: -2.24, raise: 1.19} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.38, evRange: -1.70, rangeWeight: 0.31, freq: {fold: 0.45, call: 0.52, raise: 0.03}, ev: {fold: -3.00, call: 1.75, raise: 2.42}, evA: {fold: -3.00, call: -2.24, raise: 1.19} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.46, evRange: 1.65, rangeWeight: 0.03, freq: {fold: 0.12, call: 0.00, raise: 0.88}, ev: {fold: -3.00, call: -5.25, raise: 2.09}, evA: {fold: -3.00, call: -6.57, raise: 2.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.46, evRange: 1.65, rangeWeight: 0.03, freq: {fold: 0.12, call: 0.00, raise: 0.88}, ev: {fold: -3.00, call: -5.25, raise: 2.09}, evA: {fold: -3.00, call: -6.57, raise: 2.30} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.21, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 7.52} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.55, evRange: -6.86, rangeWeight: 0.32, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.20} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.55, evRange: -6.86, rangeWeight: 0.32, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.20} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.07, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.72} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.44, evRange: 7.80, rangeWeight: 0.21, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.44}, evA: {fold: -3.00, call: 4.78, raise: 7.80} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.58, evRange: -2.85, rangeWeight: 0.32, freq: {fold: 0.70, call: 0.28, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.12}, evA: {fold: -3.00, call: -3.95, raise: -1.94} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.58, evRange: -2.85, rangeWeight: 0.32, freq: {fold: 0.70, call: 0.28, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.12}, evA: {fold: -3.00, call: -3.95, raise: -1.94} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.92, evRange: -2.52, rangeWeight: 0.07, freq: {fold: 0.69, call: 0.00, raise: 0.31}, ev: {fold: -3.00, call: -5.25, raise: 0.51}, evA: {fold: -3.00, call: -6.82, raise: -1.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.92, evRange: -2.52, rangeWeight: 0.07, freq: {fold: 0.69, call: 0.00, raise: 0.31}, ev: {fold: -3.00, call: -5.25, raise: 0.51}, evA: {fold: -3.00, call: -6.82, raise: -1.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, rangeWeight: 0.32, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 8.66} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.85, evRange: -5.71, rangeWeight: 0.31, freq: {fold: 0.78, call: 0.22}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.52} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.85, evRange: -5.71, rangeWeight: 0.31, freq: {fold: 0.78, call: 0.22}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -3.52} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.32} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.32} },
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
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.01, evRange: -0.01, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.00}, evA: {fold: -3.00, call: 0.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.22, evRange: 2.34, rangeWeight: 0.25, freq: {check: 0.92, bet: 0.08}, ev: {check: 0.26, bet: -0.25}, evA: {check: 2.34, bet: 2.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.22, evRange: 2.34, rangeWeight: 0.25, freq: {check: 0.92, bet: 0.08}, ev: {check: 0.26, bet: -0.25}, evA: {check: 2.34, bet: 2.33} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.84, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.13}, evA: {check: -3.84, bet: -5.18} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.84, rangeWeight: 0.24, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.13}, evA: {check: -3.84, bet: -5.18} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.95, evRange: 7.37, rangeWeight: 0.03, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.85, bet: 6.95}, evA: {check: 7.26, bet: 7.37} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.33, evRange: 2.90, rangeWeight: 0.30, freq: {check: 0.54, bet: 0.46}, ev: {check: 1.25, bet: -0.73}, evA: {check: 2.76, bet: 2.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.33, evRange: 2.90, rangeWeight: 0.30, freq: {check: 0.54, bet: 0.46}, ev: {check: 1.25, bet: -0.73}, evA: {check: 2.76, bet: 2.76} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.42, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.50}, evA: {check: -3.47, bet: -4.56} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.42, rangeWeight: 0.19, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.50}, evA: {check: -3.47, bet: -4.56} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 7.02, rangeWeight: 0.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 4.87, bet: 7.02} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.24, evRange: 4.47, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.29}, evA: {fold: -5.00, call: 3.97, raise: 4.39} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.24, evRange: 4.47, rangeWeight: 0.25, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.29}, evA: {fold: -5.00, call: 3.97, raise: 4.39} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.37}, evA: {fold: -5.00, call: -6.97, raise: -7.68} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, rangeWeight: 0.24, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.37}, evA: {fold: -5.00, call: -6.97, raise: -7.68} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.98, evRange: 11.42, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.99}, evA: {fold: -5.00, call: 8.75, raise: 11.42} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.09, evRange: 7.65, rangeWeight: 0.30, freq: {fold: 0.01, call: 0.99}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.09, evRange: 7.65, rangeWeight: 0.30, freq: {fold: 0.01, call: 0.99}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 7.19} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -9.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.67} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.83, evRange: 4.87, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.92, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.28}, evA: {fold: -5.00, call: 4.98, raise: 6.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.83, evRange: 4.87, rangeWeight: 0.30, freq: {fold: 0.06, call: 0.92, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.28}, evA: {fold: -5.00, call: 4.98, raise: 6.66} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.98, evRange: -4.96, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.55}, evA: {fold: -5.00, call: -6.24, raise: 0.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.98, evRange: -4.96, rangeWeight: 0.19, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.55}, evA: {fold: -5.00, call: -6.24, raise: 0.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.11, evRange: 10.12, rangeWeight: 0.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.11}, evA: {fold: -5.00, call: 8.77, raise: 10.12} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.28, evRange: -0.51, rangeWeight: 0.25, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.28, evRange: -0.51, rangeWeight: 0.25, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: 5.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.07} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.24, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -10.07} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.03, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 12.64} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.58, evRange: -2.62, rangeWeight: 0.31, freq: {check: 0.37, bet: 0.63}, ev: {check: 0.33, bet: -1.10}, evA: {check: -2.62, bet: -2.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.58, evRange: -2.62, rangeWeight: 0.31, freq: {check: 0.37, bet: 0.63}, ev: {check: 0.33, bet: -1.10}, evA: {check: -2.62, bet: -2.62} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 8.23, evRange: 7.87, rangeWeight: 0.31, freq: {check: 0.05, bet: 0.95}, ev: {check: 6.56, bet: 8.31}, evA: {check: 7.74, bet: 7.88} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.97, evRange: -4.88, rangeWeight: 0.03, freq: {check: 0.81, bet: 0.19}, ev: {check: -3.82, bet: -4.60}, evA: {check: -4.85, bet: -4.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.97, evRange: -4.88, rangeWeight: 0.03, freq: {check: 0.81, bet: 0.19}, ev: {check: -3.82, bet: -4.60}, evA: {check: -4.85, bet: -4.98} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.58, evRange: -2.93, rangeWeight: 0.35, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: -0.09}, evA: {check: -2.76, bet: -4.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.58, evRange: -2.93, rangeWeight: 0.35, freq: {check: 0.50, bet: 0.50}, ev: {check: 1.25, bet: -0.09}, evA: {check: -2.76, bet: -4.11} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.79, evRange: 8.11, rangeWeight: 0.23, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.79}, evA: {check: 3.47, bet: 8.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.77, evRange: -4.91, rangeWeight: 0.03, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.75, bet: -4.34}, evA: {check: -4.87, bet: -6.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.77, evRange: -4.91, rangeWeight: 0.03, freq: {check: 0.96, bet: 0.04}, ev: {check: -3.75, bet: -4.34}, evA: {check: -4.87, bet: -6.94} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.96, evRange: -2.68, rangeWeight: 0.31, freq: {fold: 0.18, call: 0.79, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.40}, evA: {fold: -5.00, call: -3.97, raise: -1.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.96, evRange: -2.68, rangeWeight: 0.31, freq: {fold: 0.18, call: 0.79, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 2.40}, evA: {fold: -5.00, call: -3.97, raise: -1.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.02, evRange: 10.83, rangeWeight: 0.31, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.02}, evA: {fold: -5.00, call: 6.97, raise: 10.83} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.93, evRange: -4.98, rangeWeight: 0.03, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -2.02}, evA: {fold: -5.00, call: -8.75, raise: -4.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.93, evRange: -4.98, rangeWeight: 0.03, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -5.00, call: -6.75, raise: -2.02}, evA: {fold: -5.00, call: -8.75, raise: -4.19} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.88, evRange: -6.80, rangeWeight: 0.35, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.88, evRange: -6.80, rangeWeight: 0.35, freq: {fold: 0.50, call: 0.50}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.19} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.23, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 9.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -9.04, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -9.04, rangeWeight: 0.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.39, evRange: -3.80, rangeWeight: 0.35, freq: {fold: 0.37, call: 0.57, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 2.64}, evA: {fold: -5.00, call: -4.98, raise: -2.41} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.39, evRange: -3.80, rangeWeight: 0.35, freq: {fold: 0.37, call: 0.57, raise: 0.06}, ev: {fold: -5.00, call: 2.25, raise: 2.64}, evA: {fold: -5.00, call: -4.98, raise: -2.41} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.77, evRange: 10.39, rangeWeight: 0.23, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.77}, evA: {fold: -5.00, call: 6.24, raise: 10.39} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -4.25, rangeWeight: 0.03, freq: {fold: 0.52, call: 0.00, raise: 0.48}, ev: {fold: -5.00, call: -6.75, raise: -0.70}, evA: {fold: -5.00, call: -8.77, raise: -3.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -4.25, rangeWeight: 0.03, freq: {fold: 0.52, call: 0.00, raise: 0.48}, ev: {fold: -5.00, call: -6.75, raise: -0.70}, evA: {fold: -5.00, call: -8.77, raise: -3.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.32, evRange: -6.79, rangeWeight: 0.31, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.32, evRange: -6.79, rangeWeight: 0.31, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -5.74} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 10.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.59, evRange: 7.16, rangeWeight: 0.32, freq: {check: 0.50, bet: 0.50}, ev: {check: 7.94, bet: 7.24}, evA: {check: 7.16, bet: 7.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.10, evRange: -4.03, rangeWeight: 0.31, freq: {check: 0.88, bet: 0.12}, ev: {check: -2.21, bet: -1.22}, evA: {check: -4.02, bet: -4.06} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.10, evRange: -4.03, rangeWeight: 0.31, freq: {check: 0.88, bet: 0.12}, ev: {check: -2.21, bet: -1.22}, evA: {check: -4.02, bet: -4.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.83, evRange: -4.99, rangeWeight: 0.03, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.51, bet: -3.15}, evA: {check: -5.00, bet: -4.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.83, evRange: -4.99, rangeWeight: 0.03, freq: {check: 0.50, bet: 0.50}, ev: {check: -2.51, bet: -3.15}, evA: {check: -5.00, bet: -4.98} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.07, evRange: 6.64, rangeWeight: 0.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 8.07}, evA: {check: 3.42, bet: 6.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.45, evRange: -2.34, rangeWeight: 0.26, freq: {check: 0.56, bet: 0.44}, ev: {check: 1.25, bet: -2.65}, evA: {check: -2.82, bet: -3.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.45, evRange: -2.34, rangeWeight: 0.26, freq: {check: 0.56, bet: 0.44}, ev: {check: 1.25, bet: -2.65}, evA: {check: -2.82, bet: -3.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.83, evRange: -2.71, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -2.83}, evA: {check: -4.87, bet: -2.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.83, evRange: -2.71, rangeWeight: 0.04, freq: {check: 0.00, bet: 1.00}, ev: {check: -3.75, bet: -2.83}, evA: {check: -4.87, bet: -2.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.18, evRange: 9.30, rangeWeight: 0.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.18}, evA: {fold: -5.00, call: 5.34, raise: 9.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.69, evRange: -4.68, rangeWeight: 0.31, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.31}, evA: {fold: -5.00, call: -5.78, raise: -3.34} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.69, evRange: -4.68, rangeWeight: 0.31, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.31}, evA: {fold: -5.00, call: -5.78, raise: -3.34} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.44, evRange: -2.78, rangeWeight: 0.03, freq: {fold: 0.40, call: 0.00, raise: 0.60}, ev: {fold: -5.00, call: -6.75, raise: 2.55}, evA: {fold: -5.00, call: -8.75, raise: -1.32} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.44, evRange: -2.78, rangeWeight: 0.03, freq: {fold: 0.40, call: 0.00, raise: 0.60}, ev: {fold: -5.00, call: -6.75, raise: 2.55}, evA: {fold: -5.00, call: -8.75, raise: -1.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.41, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 8.88} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -7.95, evRange: -8.63, rangeWeight: 0.26, freq: {fold: 0.91, call: 0.09}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.34} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -7.95, evRange: -8.63, rangeWeight: 0.26, freq: {fold: 0.91, call: 0.09}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.34} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, rangeWeight: 0.04, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.02, rangeWeight: 0.41, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01}, evA: {fold: -5.00, call: 6.15, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.23, evRange: -4.08, rangeWeight: 0.26, freq: {fold: 0.48, call: 0.50, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -5.08, raise: -1.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.23, evRange: -4.08, rangeWeight: 0.26, freq: {fold: 0.48, call: 0.50, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -5.08, raise: -1.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.53, evRange: -3.03, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.44}, evA: {fold: -5.00, call: -8.77, raise: 1.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.53, evRange: -3.03, rangeWeight: 0.04, freq: {fold: 0.71, call: 0.00, raise: 0.29}, ev: {fold: -5.00, call: -6.75, raise: 3.44}, evA: {fold: -5.00, call: -8.77, raise: 1.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, rangeWeight: 0.32, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 7.71} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.93, evRange: -8.98, rangeWeight: 0.31, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.35} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.93, evRange: -8.98, rangeWeight: 0.31, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.35} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, rangeWeight: 0.03, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.64} },
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
