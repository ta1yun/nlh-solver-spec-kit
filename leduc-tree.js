// Recursive Leduc Tree Structure
// Each node contains its children, making navigation simple

(function() {
  window.LEDUC_TREE = {
  j: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.04, evRange: 1.04, freq: {check: 0.25, bet: 0.75}, ev: {check: 1.04, bet: 1.04}, evA: {check: 1.04, bet: 1.04} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.04, evRange: 1.04, freq: {check: 0.25, bet: 0.75}, ev: {check: 1.04, bet: 1.04}, evA: {check: 1.04, bet: 1.04} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.46, evRange: -0.46, freq: {check: 0.28, bet: 0.72}, ev: {check: -0.46, bet: -0.46}, evA: {check: -0.46, bet: -0.46} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.46, evRange: -0.46, freq: {check: 0.28, bet: 0.72}, ev: {check: -0.46, bet: -0.46}, evA: {check: -0.46, bet: -0.46} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.84, evRange: -0.84, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.84, bet: -0.85}, evA: {check: -0.84, bet: -0.85} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.84, evRange: -0.84, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.84, bet: -0.85}, evA: {check: -0.84, bet: -0.85} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.11, evRange: 1.07, freq: {check: 0.00, bet: 1.00}, ev: {check: -0.01, bet: 1.12}, evA: {check: -0.50, bet: 1.10} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.11, evRange: 1.07, freq: {check: 0.00, bet: 1.00}, ev: {check: -0.01, bet: 1.12}, evA: {check: -0.50, bet: 1.10} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.37, evRange: 0.37, freq: {check: 0.15, bet: 0.85}, ev: {check: -0.80, bet: -0.29}, evA: {check: -0.91, bet: 0.27} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.37, evRange: 0.37, freq: {check: 0.15, bet: 0.85}, ev: {check: -0.80, bet: -0.29}, evA: {check: -0.91, bet: 0.27} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.27, evRange: -0.38, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.81, bet: -0.98}, evA: {check: 0.54, bet: 0.12} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.27, evRange: -0.38, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.81, bet: -0.98}, evA: {check: 0.54, bet: 0.12} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.65}, evA: {check: -0.41, bet: -3.51} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.65}, evA: {check: -0.41, bet: -3.51} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88}, evA: {check: -0.83, bet: -3.92} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88}, evA: {check: -0.83, bet: -3.92} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.03, evRange: 1.03, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.03, bet: 1.27}, evA: {check: 1.03, bet: 1.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.22, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.19}, evA: {check: -0.21, bet: -3.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.22, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.19}, evA: {check: -0.21, bet: -3.66} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51}, evA: {check: -0.83, bet: -2.28} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51}, evA: {check: -0.83, bet: -2.28} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00}, evA: {check: 1.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.65}, evA: {fold: -1.00, call: -4.97, raise: -8.96} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.65}, evA: {fold: -1.00, call: -4.97, raise: -8.96} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.33}, evA: {fold: -1.00, call: -4.99, raise: -8.98} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.33}, evA: {fold: -1.00, call: -4.99, raise: -8.98} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.39, evRange: 5.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.39}, evA: {fold: -1.00, call: 5.00, raise: 5.07} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -7.75, freq: {fold: 0.31, call: 0.69}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -7.75, freq: {fold: 0.31, call: 0.69}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.71, evRange: -1.16, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.37}, evA: {fold: -1.00, call: -2.10, raise: -4.83} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.71, evRange: -1.16, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.37}, evA: {fold: -1.00, call: -2.10, raise: -4.83} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.74}, evA: {fold: -1.00, call: -4.19, raise: -6.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.74}, evA: {fold: -1.00, call: -4.19, raise: -6.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.22, evRange: 5.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.22}, evA: {fold: -1.00, call: 5.00, raise: 5.05} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.21, evRange: -5.44, freq: {fold: 0.89, call: 0.11}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.21, evRange: -5.44, freq: {fold: 0.89, call: 0.11}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.14, evRange: 0.68, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.14, bet: -1.48}, evA: {check: 0.68, bet: 0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.14, evRange: 0.68, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.14, bet: -1.48}, evA: {check: 0.68, bet: 0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.23, evRange: 1.30, freq: {check: 0.47, bet: 0.53}, ev: {check: 1.22, bet: 3.10}, evA: {check: 1.30, bet: 1.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.35, evRange: -0.25, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.49}, evA: {check: -0.24, bet: -0.26} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.35, evRange: -0.25, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.49}, evA: {check: -0.24, bet: -0.26} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.22, evRange: 0.71, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -0.71}, evA: {check: 0.72, bet: 0.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.22, evRange: 0.71, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -0.71}, evA: {check: 0.72, bet: 0.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.81, evRange: 1.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.81}, evA: {check: 1.00, bet: 1.41} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.46, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.71}, evA: {check: -0.46, bet: -0.47} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.46, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.71}, evA: {check: -0.46, bet: -0.47} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.09, evRange: -0.93, freq: {fold: 0.60, call: 0.40, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.37}, evA: {fold: -1.00, call: -0.83, raise: -3.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.09, evRange: -0.93, freq: {fold: 0.60, call: 0.40, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.37}, evA: {fold: -1.00, call: -0.83, raise: -3.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.21, evRange: 5.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.21}, evA: {fold: -1.00, call: 5.00, raise: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.77}, evA: {fold: -1.00, call: -3.68, raise: -5.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.77}, evA: {fold: -1.00, call: -3.68, raise: -5.30} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.24, evRange: -5.39, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -8.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.24, evRange: -5.39, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -8.76} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.95} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.17, freq: {fold: 0.02, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.47}, evA: {fold: -1.00, call: 2.23, raise: 1.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.17, freq: {fold: 0.02, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.47}, evA: {fold: -1.00, call: 2.23, raise: 1.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.66, evRange: 5.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.66}, evA: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.11, evRange: -1.00, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.30}, evA: {fold: -1.00, call: -2.17, raise: -1.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.11, evRange: -1.00, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.30}, evA: {fold: -1.00, call: -2.17, raise: -1.07} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.00, evRange: -4.70, freq: {fold: 0.17, call: 0.83}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.00, evRange: -4.70, freq: {fold: 0.17, call: 0.83}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.76} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.43, evRange: 1.51, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.36, bet: 2.43}, evA: {check: 1.49, bet: 1.51} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.20, evRange: 0.92, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.73, bet: -1.66}, evA: {check: 0.92, bet: 0.93} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.20, evRange: 0.92, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.73, bet: -1.66}, evA: {check: 0.92, bet: 0.93} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.72}, evA: {check: -0.31, bet: -0.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.72}, evA: {check: -0.31, bet: -0.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.56, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00}, evA: {check: 1.00, bet: 1.56} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.42, evRange: 0.92, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74}, evA: {check: 0.92, bet: 0.92} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.42, evRange: 0.92, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74}, evA: {check: 0.92, bet: 0.92} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -0.25, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53}, evA: {check: -0.25, bet: -0.48} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -0.25, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53}, evA: {check: -0.25, bet: -0.48} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 8.62, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.07}, evA: {fold: -1.00, call: 5.00, raise: 8.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 0.50, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.33}, evA: {fold: -1.00, call: 0.50, raise: 0.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 0.50, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.33}, evA: {fold: -1.00, call: 0.50, raise: 0.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53}, evA: {fold: -1.00, call: -4.77, raise: -8.32} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53}, evA: {fold: -1.00, call: -4.77, raise: -8.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: -1.88, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -1.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: -1.88, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -1.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.06, evRange: -5.07, freq: {fold: 0.96, call: 0.04}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -6.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.06, evRange: -5.07, freq: {fold: 0.96, call: 0.04}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -6.95} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.18, evRange: 7.82, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.18}, evA: {fold: -1.00, call: 5.00, raise: 7.82} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.59, evRange: -1.04, freq: {fold: 0.29, call: 0.70, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.45}, evA: {fold: -1.00, call: -1.04, raise: -2.80} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.59, evRange: -1.04, freq: {fold: 0.29, call: 0.70, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.45}, evA: {fold: -1.00, call: -1.04, raise: -2.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -1.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.58}, evA: {fold: -1.00, call: -4.43, raise: -7.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -1.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.58}, evA: {fold: -1.00, call: -4.43, raise: -7.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.21, evRange: -0.34, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -0.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.21, evRange: -0.34, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -0.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.17, evRange: -5.16, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -6.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.17, evRange: -5.16, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -6.63} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.72, evRange: 1.27, freq: {fold: 0.00, call: 0.34, raise: 0.66}, ev: {fold: -1.00, call: -0.75, raise: 1.48}, evA: {fold: -1.00, call: 1.37, raise: 1.29} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.72, evRange: 1.27, freq: {fold: 0.00, call: 0.34, raise: 0.66}, ev: {fold: -1.00, call: -0.75, raise: 1.48}, evA: {fold: -1.00, call: 1.37, raise: 1.29} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -2.40, evRange: -0.76, freq: {fold: 0.00, call: 0.85, raise: 0.14}, ev: {fold: -1.00, call: -2.78, raise: -0.19}, evA: {fold: -1.00, call: -2.67, raise: -0.69} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -2.40, evRange: -0.76, freq: {fold: 0.00, call: 0.85, raise: 0.14}, ev: {fold: -1.00, call: -2.78, raise: -0.19}, evA: {fold: -1.00, call: -2.67, raise: -0.69} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.81, evRange: -1.01, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 3.64, raise: -0.65}, evA: {fold: -1.00, call: 4.29, raise: -1.33} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.81, evRange: -1.01, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 3.64, raise: -0.65}, evA: {fold: -1.00, call: 4.29, raise: -1.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 2.21, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.82, bet: -0.12}, evA: {check: 2.21, bet: 1.21} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 2.21, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.82, bet: -0.12}, evA: {check: 2.21, bet: 1.21} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.68, evRange: -2.63, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.26}, evA: {check: -2.62, bet: -2.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.68, evRange: -2.63, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.26}, evA: {check: -2.62, bet: -2.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.56, evRange: 4.64, freq: {check: 0.20, bet: 0.80}, ev: {check: 4.67, bet: 4.53}, evA: {check: 4.63, bet: 4.64} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.46, evRange: 2.47, freq: {check: 0.85, bet: 0.15}, ev: {check: 0.75, bet: -1.20}, evA: {check: 2.48, bet: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.46, evRange: 2.47, freq: {check: 0.85, bet: 0.15}, ev: {check: 0.75, bet: -1.20}, evA: {check: 2.48, bet: 2.45} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.47, evRange: -1.29, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -4.53}, evA: {check: -1.27, bet: -1.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.47, evRange: -1.29, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -4.53}, evA: {check: -1.27, bet: -1.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.04, evRange: 4.11, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.04}, evA: {check: 3.00, bet: 4.11} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: 3.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.77}, evA: {fold: -3.00, call: 3.13, raise: 2.26} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: 3.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.77}, evA: {fold: -3.00, call: 3.13, raise: 2.26} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.04, evRange: -3.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.49}, evA: {fold: -3.00, call: -3.97, raise: -3.22} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.04, evRange: -3.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.49}, evA: {fold: -3.00, call: -3.97, raise: -3.22} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.01, evRange: 8.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01}, evA: {fold: -3.00, call: 7.00, raise: 8.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.73, evRange: -2.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.73, evRange: -2.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.07} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.23} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.23} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.56, evRange: -3.33, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45}, evA: {fold: -3.00, call: -3.44, raise: -6.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.56, evRange: -3.33, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45}, evA: {fold: -3.00, call: -3.44, raise: -6.36} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.97, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.23}, evA: {fold: -3.00, call: -6.00, raise: -8.16} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.97, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.23}, evA: {fold: -3.00, call: -6.00, raise: -8.16} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.06, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.06}, evA: {fold: -3.00, call: 7.00, raise: 7.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.71, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.26} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.71, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.26} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.83} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.83} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: -0.01, bet: -0.45}, evA: {check: -1.29, bet: -1.32} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: -0.01, bet: -0.45}, evA: {check: -1.29, bet: -1.32} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.36, evRange: 4.55, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.50, bet: 4.36}, evA: {check: 4.41, bet: 4.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.93, evRange: -2.50, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.41, bet: -1.92}, evA: {check: -2.83, bet: -2.50} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.93, evRange: -2.50, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.41, bet: -1.92}, evA: {check: -2.83, bet: -2.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.03, evRange: -0.18, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: -1.54}, evA: {check: -0.12, bet: -0.30} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.03, evRange: -0.18, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: -1.54}, evA: {check: -0.12, bet: -0.30} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.52, evRange: 5.27, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.52}, evA: {check: 3.00, bet: 5.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.62, evRange: -2.89, freq: {check: 0.59, bet: 0.41}, ev: {check: -2.25, bet: -3.15}, evA: {check: -2.88, bet: -2.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.62, evRange: -2.89, freq: {check: 0.59, bet: 0.41}, ev: {check: -2.25, bet: -3.15}, evA: {check: -2.88, bet: -2.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.37, evRange: -3.00, freq: {fold: 0.45, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.43}, evA: {fold: -3.00, call: -3.00, raise: -3.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.37, evRange: -3.00, freq: {fold: 0.45, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.43}, evA: {fold: -3.00, call: -3.00, raise: -3.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.14, evRange: 7.18, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.14}, evA: {fold: -3.00, call: 7.00, raise: 7.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.27, evRange: -3.00, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 1.97}, evA: {fold: -3.00, call: -6.46, raise: -2.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.27, evRange: -3.00, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 1.97}, evA: {fold: -3.00, call: -6.46, raise: -2.97} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.45, evRange: -6.96, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.45, evRange: -6.96, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.02, evRange: -7.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -9.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.02, evRange: -7.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -9.74} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.99, evRange: -3.01, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -3.01, raise: -4.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.99, evRange: -3.01, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -3.01, raise: -4.07} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.32, evRange: -3.00, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.41, raise: -3.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.32, evRange: -3.00, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.41, raise: -3.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.97, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -9.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.97, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -9.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.54} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.54} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.56, evRange: 4.40, freq: {check: 0.89, bet: 0.11}, ev: {check: 4.64, bet: 3.98}, evA: {check: 4.40, bet: 4.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.01, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.01, bet: 0.08}, evA: {check: -1.57, bet: -1.59} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.01, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.01, bet: 0.08}, evA: {check: -1.57, bet: -1.59} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.61, evRange: -2.87, freq: {check: 0.96, bet: 0.04}, ev: {check: -2.65, bet: -1.83}, evA: {check: -2.86, bet: -2.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.61, evRange: -2.87, freq: {check: 0.96, bet: 0.04}, ev: {check: -2.65, bet: -1.83}, evA: {check: -2.86, bet: -2.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.15, evRange: 4.97, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.15}, evA: {check: 3.00, bet: 4.97} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.55, evRange: -0.03, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.04}, evA: {check: -0.03, bet: -0.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.55, evRange: -0.03, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.04}, evA: {check: -0.03, bet: -0.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.29, evRange: -2.83, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -2.33}, evA: {check: -2.82, bet: -2.85} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.29, evRange: -2.83, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -2.33}, evA: {check: -2.82, bet: -2.85} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.33, evRange: -3.02, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.02, raise: -4.51} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.33, evRange: -3.02, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.02, raise: -4.51} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.97, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.44}, evA: {fold: -3.00, call: -6.31, raise: -3.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.97, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.44}, evA: {fold: -3.00, call: -6.31, raise: -3.98} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.80} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.97} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.81, evRange: -3.04, freq: {fold: 0.54, call: 0.45, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.06, raise: -4.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.81, evRange: -3.04, freq: {fold: 0.54, call: 0.45, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.06, raise: -4.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.34, raise: -3.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.34, raise: -3.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.79} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.79} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.96} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -1.37, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.37}, evA: {fold: -3.00, call: 0.42} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -1.37, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.37}, evA: {fold: -3.00, call: 0.42} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -4.09, evRange: -2.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.09}, evA: {fold: -3.00, call: -4.52} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -4.09, evRange: -2.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.09}, evA: {fold: -3.00, call: -4.52} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 5.63, evRange: -2.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.65}, evA: {fold: -3.00, call: 7.96} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 5.63, evRange: -2.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.65}, evA: {fold: -3.00, call: 7.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 1.94, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.03}, evA: {check: 1.94, bet: 1.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 1.94, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.03}, evA: {check: 1.94, bet: 1.93} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.65, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.76, bet: -4.50}, evA: {check: -3.65, bet: -3.90} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.65, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.76, bet: -4.50}, evA: {check: -3.65, bet: -3.90} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.82, evRange: 6.94, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.82, bet: 6.82}, evA: {check: 6.96, bet: 6.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.35, evRange: 1.71, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.63}, evA: {check: 1.71, bet: 1.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.35, evRange: 1.71, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.63}, evA: {check: 1.71, bet: 1.71} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.43, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.48}, evA: {check: -4.42, bet: -7.32} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.43, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.48}, evA: {check: -4.42, bet: -7.32} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.99, evRange: 8.16, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.99}, evA: {check: 5.00, bet: 8.16} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.21, evRange: -3.41, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.54}, evA: {fold: -5.00, call: -3.40, raise: -4.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.21, evRange: -3.41, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.54}, evA: {fold: -5.00, call: -3.40, raise: -4.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.25}, evA: {fold: -5.00, call: -8.98, raise: -11.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.25}, evA: {fold: -5.00, call: -8.98, raise: -11.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.79, evRange: 12.52, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.79}, evA: {fold: -5.00, call: 9.00, raise: 12.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.82, evRange: -7.92, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.82, evRange: -7.92, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.10, evRange: -5.03, freq: {fold: 0.16, call: 0.83, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.66}, evA: {fold: -5.00, call: -5.04, raise: -5.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.10, evRange: -5.03, freq: {fold: 0.16, call: 0.83, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.66}, evA: {fold: -5.00, call: -5.04, raise: -5.22} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.89, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.86}, evA: {fold: -5.00, call: -8.92, raise: -5.21} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.89, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.86}, evA: {fold: -5.00, call: -8.92, raise: -5.21} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.83, evRange: 10.53, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83}, evA: {fold: -5.00, call: 9.00, raise: 10.53} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.19, evRange: -9.05, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.19, evRange: -9.05, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.02, evRange: -9.07, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.13} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.02, evRange: -9.07, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.13} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14}, evA: {check: -1.83, bet: -2.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14}, evA: {check: -1.83, bet: -2.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.74, evRange: 7.47, freq: {check: 0.96, bet: 0.04}, ev: {check: 6.71, bet: 7.29}, evA: {check: 7.48, bet: 7.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.86, evRange: -4.56, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.82}, evA: {check: -4.56, bet: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.86, evRange: -4.56, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.82}, evA: {check: -4.56, bet: -4.76} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.40, evRange: -0.13, freq: {check: 0.43, bet: 0.57}, ev: {check: 1.25, bet: -0.24}, evA: {check: -0.12, bet: -0.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.40, evRange: -0.13, freq: {check: 0.43, bet: 0.57}, ev: {check: 1.25, bet: -0.24}, evA: {check: -0.12, bet: -0.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.08, evRange: 7.66, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.08}, evA: {check: 5.00, bet: 7.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.78, freq: {check: 0.93, bet: 0.07}, ev: {check: -3.75, bet: -3.91}, evA: {check: -4.78, bet: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.78, freq: {check: 0.93, bet: 0.07}, ev: {check: -3.75, bet: -3.91}, evA: {check: -4.78, bet: -4.76} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -4.98, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.65}, evA: {fold: -5.00, call: -4.97, raise: -5.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -4.98, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.65}, evA: {fold: -5.00, call: -4.97, raise: -5.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.76, evRange: 10.46, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.76}, evA: {fold: -5.00, call: 9.00, raise: 10.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.26, evRange: -5.01, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: -0.67}, evA: {fold: -5.00, call: -8.90, raise: -5.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.26, evRange: -5.01, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: -0.67}, evA: {fold: -5.00, call: -8.90, raise: -5.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.37, evRange: -9.11, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.37, evRange: -9.11, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.19} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -4.16, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.39}, evA: {fold: -5.00, call: -3.67, raise: -4.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -4.16, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.39}, evA: {fold: -5.00, call: -3.67, raise: -4.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.09, evRange: 10.84, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.09}, evA: {fold: -5.00, call: 9.00, raise: 10.84} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.31, evRange: -5.26, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.26}, evA: {fold: -5.00, call: -8.65, raise: -6.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.31, evRange: -5.26, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.26}, evA: {fold: -5.00, call: -8.65, raise: -6.04} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.66, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.66, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.95} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.30, evRange: 6.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.96, bet: 6.30}, evA: {check: 5.55, bet: 6.25} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.09, evRange: -1.83, freq: {check: 0.02, bet: 0.98}, ev: {check: 0.54, bet: -0.10}, evA: {check: -2.02, bet: -1.83} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.09, evRange: -1.83, freq: {check: 0.02, bet: 0.98}, ev: {check: 0.54, bet: -0.10}, evA: {check: -2.02, bet: -1.83} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.18, evRange: -2.24, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.37, bet: -1.17}, evA: {check: -4.98, bet: -2.23} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.18, evRange: -2.24, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.37, bet: -1.17}, evA: {check: -4.98, bet: -2.23} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 7.87, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.06}, evA: {check: 5.00, bet: 7.87} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.22, evRange: -0.47, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.25}, evA: {check: -0.45, bet: -1.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.22, evRange: -0.47, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.25}, evA: {check: -0.45, bet: -1.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.91, evRange: -5.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -4.10}, evA: {check: -4.77, bet: -5.47} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.91, evRange: -5.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -4.10}, evA: {check: -4.77, bet: -5.47} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.34, evRange: 9.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.35}, evA: {fold: -5.00, call: 9.00, raise: 9.08} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.36, evRange: -5.11, freq: {fold: 0.26, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.10}, evA: {fold: -5.00, call: -5.02, raise: -8.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.36, evRange: -5.11, freq: {fold: 0.26, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.10}, evA: {fold: -5.00, call: -5.02, raise: -8.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.21, evRange: -5.65, freq: {fold: 0.86, call: 0.01, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: 1.56}, evA: {fold: -5.00, call: -7.93, raise: -9.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.21, evRange: -5.65, freq: {fold: 0.86, call: 0.01, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: 1.56}, evA: {fold: -5.00, call: -7.93, raise: -9.87} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.84, evRange: -9.23, freq: {fold: 0.82, call: 0.18}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.84, evRange: -9.23, freq: {fold: 0.82, call: 0.18}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.59} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.02, evRange: 9.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02}, evA: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.87, evRange: -4.99, freq: {fold: 0.71, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -4.94, raise: -6.21} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.87, evRange: -4.99, freq: {fold: 0.71, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -4.94, raise: -6.21} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.52, evRange: -4.98, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: 3.43}, evA: {fold: -5.00, call: -8.42, raise: -4.90} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.52, evRange: -4.98, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: 3.43}, evA: {fold: -5.00, call: -8.42, raise: -4.90} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.93, evRange: -9.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.93, evRange: -9.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.35} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.35} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.60, evRange: 1.23, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: -1.24, raise: 1.90}, evA: {fold: -1.00, call: 1.45, raise: 1.15} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.60, evRange: 1.23, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: -1.24, raise: 1.90}, evA: {fold: -1.00, call: 1.45, raise: 1.15} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.64, evRange: -0.65, freq: {fold: 0.00, call: 0.62, raise: 0.37}, ev: {fold: -1.00, call: -2.46, raise: -0.26}, evA: {fold: -1.00, call: -2.12, raise: -0.52} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.64, evRange: -0.65, freq: {fold: 0.00, call: 0.62, raise: 0.37}, ev: {fold: -1.00, call: -2.46, raise: -0.26}, evA: {fold: -1.00, call: -2.12, raise: -0.52} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.38, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 4.02, raise: -1.15}, evA: {fold: -1.00, call: 4.95, raise: -1.47} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.38, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 4.02, raise: -1.15}, evA: {fold: -1.00, call: 4.95, raise: -1.47} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: 1.61, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.24, bet: -0.30}, evA: {check: 1.61, bet: 1.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: 1.61, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.24, bet: -0.30}, evA: {check: 1.61, bet: 1.62} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.27, evRange: -1.82, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.40}, evA: {check: -1.82, bet: -1.91} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.27, evRange: -1.82, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.40}, evA: {check: -1.82, bet: -1.91} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.62, evRange: 4.32, freq: {check: 0.03, bet: 0.97}, ev: {check: 4.68, bet: 4.62}, evA: {check: 4.34, bet: 4.32} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.08, evRange: 1.98, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -1.20}, evA: {check: 1.98, bet: 1.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.08, evRange: 1.98, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -1.20}, evA: {check: 1.98, bet: 1.98} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.26, evRange: -2.02, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.47}, evA: {check: -2.01, bet: -3.67} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.26, evRange: -2.02, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.47}, evA: {check: -2.01, bet: -3.67} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.99, evRange: 5.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.99}, evA: {check: 3.00, bet: 5.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.72, evRange: -2.74, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.83}, evA: {fold: -3.00, call: -2.74, raise: -4.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.72, evRange: -2.74, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.83}, evA: {fold: -3.00, call: -2.74, raise: -4.23} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.17}, evA: {fold: -3.00, call: -6.96, raise: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.17}, evA: {fold: -3.00, call: -6.96, raise: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.93, evRange: 10.78, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.94}, evA: {fold: -3.00, call: 7.00, raise: 10.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.38, evRange: -7.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.38, evRange: -7.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.36} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.66, evRange: -3.21, freq: {fold: 0.23, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.24}, evA: {fold: -3.00, call: -3.26, raise: -4.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.66, evRange: -3.21, freq: {fold: 0.23, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.24}, evA: {fold: -3.00, call: -3.26, raise: -4.16} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 1.13}, evA: {fold: -3.00, call: -6.59, raise: -3.36} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 1.13}, evA: {fold: -3.00, call: -6.59, raise: -3.36} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.31, evRange: 7.48, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.31}, evA: {fold: -3.00, call: 7.00, raise: 7.48} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -5.52, evRange: -7.09, freq: {fold: 0.85, call: 0.15}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.57} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -5.52, evRange: -7.09, freq: {fold: 0.85, call: 0.15}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.57} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.12} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.12} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -2.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.26, bet: 0.23}, evA: {check: -2.04, bet: -2.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -2.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.26, bet: 0.23}, evA: {check: -2.04, bet: -2.18} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.27, evRange: 3.97, freq: {check: 0.46, bet: 0.54}, ev: {check: 5.00, bet: 3.64}, evA: {check: 3.97, bet: 3.96} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.08, evRange: -2.58, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.97, bet: -1.05}, evA: {check: -3.08, bet: -2.57} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.08, evRange: -2.58, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.97, bet: -1.05}, evA: {check: -3.08, bet: -2.57} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.74, evRange: -0.91, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.75, bet: -0.05}, evA: {check: -0.91, bet: -1.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.74, evRange: -0.91, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.75, bet: -0.05}, evA: {check: -0.91, bet: -1.11} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.14, evRange: 5.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.14}, evA: {check: 3.00, bet: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.08, evRange: -2.89, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -2.08}, evA: {check: -3.00, bet: -2.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.08, evRange: -2.89, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -2.08}, evA: {check: -3.00, bet: -2.89} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.63, evRange: -3.00, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.00, raise: -5.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.63, evRange: -3.00, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.00, raise: -5.78} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.82, evRange: -3.17, freq: {fold: 0.96, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -5.86, raise: -7.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.82, evRange: -3.17, freq: {fold: 0.96, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -5.86, raise: -7.72} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.96} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.96} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.54, evRange: -3.03, freq: {fold: 0.69, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48}, evA: {fold: -3.00, call: -3.08, raise: -5.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.54, evRange: -3.03, freq: {fold: 0.69, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48}, evA: {fold: -3.00, call: -3.08, raise: -5.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.03, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.03}, evA: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.98, evRange: -3.02, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.38}, evA: {fold: -3.00, call: -5.90, raise: -7.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.98, evRange: -3.02, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.38}, evA: {fold: -3.00, call: -5.90, raise: -7.74} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.87, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.87, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.99} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.95, evRange: 4.49, freq: {check: 0.16, bet: 0.84}, ev: {check: 4.50, bet: 5.03}, evA: {check: 4.50, bet: 4.49} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.53, evRange: -1.36, freq: {check: 0.51, bet: 0.49}, ev: {check: -0.04, bet: -1.03}, evA: {check: -1.36, bet: -1.36} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.53, evRange: -1.36, freq: {check: 0.51, bet: 0.49}, ev: {check: -0.04, bet: -1.03}, evA: {check: -1.36, bet: -1.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.89, evRange: -1.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.82, bet: -1.89}, evA: {check: -1.97, bet: -1.66} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.89, evRange: -1.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.82, bet: -1.89}, evA: {check: -1.97, bet: -1.66} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.74, evRange: 5.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.74}, evA: {check: 3.00, bet: 5.21} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.18, evRange: -0.72, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.43}, evA: {check: -0.72, bet: -0.73} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.18, evRange: -0.72, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.43}, evA: {check: -0.72, bet: -0.73} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.08, evRange: -3.00, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.46}, evA: {check: -3.00, bet: -3.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.08, evRange: -3.00, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.46}, evA: {check: -3.00, bet: -3.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.44, evRange: -3.00, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.01, raise: -3.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.44, evRange: -3.00, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.01, raise: -3.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.95, evRange: -1.26, freq: {fold: 0.09, call: 0.00, raise: 0.91}, ev: {fold: -3.00, call: -5.25, raise: 2.46}, evA: {fold: -3.00, call: -6.64, raise: -1.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.95, evRange: -1.26, freq: {fold: 0.09, call: 0.00, raise: 0.91}, ev: {fold: -3.00, call: -5.25, raise: 2.46}, evA: {fold: -3.00, call: -6.64, raise: -1.07} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.96, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.37} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.96, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.37} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.95} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.44, evRange: 7.71, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.44}, evA: {fold: -3.00, call: 7.00, raise: 7.71} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.57, evRange: -3.00, freq: {fold: 0.70, call: 0.30, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: -3.00, raise: -3.54} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.57, evRange: -3.00, freq: {fold: 0.70, call: 0.30, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: -3.00, raise: -3.54} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.74, evRange: -3.01, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 0.56}, evA: {fold: -3.00, call: -6.63, raise: -3.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.74, evRange: -3.01, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 0.56}, evA: {fold: -3.00, call: -6.63, raise: -3.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.91, evRange: -7.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.91, evRange: -7.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -9.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -9.94} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -1.63, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.62}, evA: {fold: -3.00, call: 1.89} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -1.63, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.62}, evA: {fold: -3.00, call: 1.89} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -4.01, evRange: -1.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.01}, evA: {fold: -3.00, call: -3.89} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -4.01, evRange: -1.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.01}, evA: {fold: -3.00, call: -3.89} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 5.52, evRange: -2.46, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.54}, evA: {fold: -3.00, call: 7.13} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 5.52, evRange: -2.46, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.54}, evA: {fold: -3.00, call: 7.13} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 2.34, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.26, bet: -0.12}, evA: {check: 2.33, bet: 2.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 2.34, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.26, bet: -0.12}, evA: {check: 2.33, bet: 2.35} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.11}, evA: {check: -3.85, bet: -5.16} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.11}, evA: {check: -3.85, bet: -5.16} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.93, evRange: 7.34, freq: {check: 0.02, bet: 0.98}, ev: {check: 6.94, bet: 6.93}, evA: {check: 7.36, bet: 7.34} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.29, evRange: 3.34, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74}, evA: {check: 3.34, bet: 3.34} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.29, evRange: 3.34, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74}, evA: {check: 3.34, bet: 3.34} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.33, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48}, evA: {check: -3.33, bet: -4.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.33, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48}, evA: {check: -3.33, bet: -4.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 6.99, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 5.00, bet: 6.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.23, evRange: -1.34, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26}, evA: {fold: -5.00, call: -1.33, raise: -1.97} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.23, evRange: -1.34, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26}, evA: {fold: -5.00, call: -1.33, raise: -1.97} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.50}, evA: {fold: -5.00, call: -8.96, raise: -12.89} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.50}, evA: {fold: -5.00, call: -8.96, raise: -12.89} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.99, evRange: 12.94, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.01}, evA: {fold: -5.00, call: 9.00, raise: 12.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.23, evRange: -6.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -6.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.23, evRange: -6.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -6.93} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.81, evRange: -5.16, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.57}, evA: {fold: -5.00, call: -5.17, raise: -5.68} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.81, evRange: -5.16, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.57}, evA: {fold: -5.00, call: -5.17, raise: -5.68} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.96, evRange: -5.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -1.07}, evA: {fold: -5.00, call: -8.89, raise: -5.81} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.96, evRange: -5.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -1.07}, evA: {fold: -5.00, call: -8.89, raise: -5.81} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.83, evRange: 10.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83}, evA: {fold: -5.00, call: 9.00, raise: 10.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.91, evRange: -9.26, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.91, evRange: -9.26, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.62} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.23} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.23} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.49, evRange: -2.63, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.26, bet: -0.83}, evA: {check: -2.61, bet: -2.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.49, evRange: -2.63, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.26, bet: -0.83}, evA: {check: -2.61, bet: -2.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.97, evRange: 7.90, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.59, bet: 7.98}, evA: {check: 7.88, bet: 7.90} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.82, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.19}, evA: {check: -4.83, bet: -4.81} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.82, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.19}, evA: {check: -4.83, bet: -4.81} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: 1.68, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28}, evA: {check: 1.71, bet: 1.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: 1.68, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28}, evA: {check: 1.71, bet: 1.66} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 8.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 5.00, bet: 8.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.45}, evA: {check: -4.39, bet: -7.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.45}, evA: {check: -4.39, bet: -7.11} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.14, evRange: -4.97, freq: {fold: 0.02, call: 0.98, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.36}, evA: {fold: -5.00, call: -4.97, raise: -5.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.14, evRange: -4.97, freq: {fold: 0.02, call: 0.98, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.36}, evA: {fold: -5.00, call: -4.97, raise: -5.33} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.15, evRange: 11.15, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.16}, evA: {fold: -5.00, call: 9.00, raise: 11.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.52}, evA: {fold: -5.00, call: -9.00, raise: -6.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.52}, evA: {fold: -5.00, call: -9.00, raise: -6.74} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.39, evRange: -8.61, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.39, evRange: -8.61, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.03, evRange: -9.13, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.03, evRange: -9.13, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.46, evRange: -5.00, freq: {fold: 0.38, call: 0.52, raise: 0.10}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: -4.99, raise: -5.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.46, evRange: -5.00, freq: {fold: 0.38, call: 0.52, raise: 0.10}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: -4.99, raise: -5.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.79, evRange: 10.55, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.79}, evA: {fold: -5.00, call: 9.00, raise: 10.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.40, evRange: -5.01, freq: {fold: 0.62, call: 0.00, raise: 0.38}, ev: {fold: -5.00, call: -6.75, raise: -0.85}, evA: {fold: -5.00, call: -8.95, raise: -5.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.40, evRange: -5.01, freq: {fold: 0.62, call: 0.00, raise: 0.38}, ev: {fold: -5.00, call: -6.75, raise: -0.85}, evA: {fold: -5.00, call: -8.95, raise: -5.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.16, evRange: -9.01, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.16, evRange: -9.01, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.03} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.46} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.51, evRange: 7.12, freq: {check: 0.45, bet: 0.55}, ev: {check: 7.92, bet: 7.17}, evA: {check: 7.12, bet: 7.12} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.22, evRange: -4.00, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.40, bet: -1.11}, evA: {check: -4.00, bet: -4.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.22, evRange: -4.00, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.40, bet: -1.11}, evA: {check: -4.00, bet: -4.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.35, evRange: -4.99, freq: {check: 0.46, bet: 0.54}, ev: {check: -1.43, bet: -3.13}, evA: {check: -4.97, bet: -5.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.35, evRange: -4.99, freq: {check: 0.46, bet: 0.54}, ev: {check: -1.43, bet: -3.13}, evA: {check: -4.97, bet: -5.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.03, evRange: 6.46, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 9.03}, evA: {check: 5.00, bet: 6.46} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.13, evRange: -1.33, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.31}, evA: {check: -1.32, bet: -1.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.13, evRange: -1.33, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.31}, evA: {check: -1.32, bet: -1.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.52, evRange: -1.32, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.52}, evA: {check: -4.89, bet: -1.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.52, evRange: -1.32, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.52}, evA: {check: -4.89, bet: -1.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.16, evRange: 9.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.16}, evA: {fold: -5.00, call: 9.00, raise: 9.22} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.93, evRange: -5.00, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.36}, evA: {fold: -5.00, call: -5.00, raise: -6.17} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.93, evRange: -5.00, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.36}, evA: {fold: -5.00, call: -5.00, raise: -6.17} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.66, evRange: -4.96, freq: {fold: 0.13, call: 0.00, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: 2.71}, evA: {fold: -5.00, call: -8.48, raise: -4.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.66, evRange: -4.96, freq: {fold: 0.13, call: 0.00, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: 2.71}, evA: {fold: -5.00, call: -8.48, raise: -4.94} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.14, evRange: -9.01, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.10} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.14, evRange: -9.01, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.97} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01}, evA: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.21, evRange: -5.01, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -5.01, raise: -6.28} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.21, evRange: -5.01, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -5.01, raise: -6.28} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -4.98, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 3.45}, evA: {fold: -5.00, call: -8.44, raise: -4.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -4.98, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 3.45}, evA: {fold: -5.00, call: -8.44, raise: -4.92} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.95, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.66} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.95, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.04, evRange: 1.04, freq: {check: 0.25, bet: 0.75}, ev: {check: 1.04, bet: 1.04}, evA: {check: 1.04, bet: 1.04} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.04, evRange: 1.04, freq: {check: 0.25, bet: 0.75}, ev: {check: 1.04, bet: 1.04}, evA: {check: 1.04, bet: 1.04} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.46, evRange: -0.46, freq: {check: 0.28, bet: 0.72}, ev: {check: -0.46, bet: -0.46}, evA: {check: -0.46, bet: -0.46} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.46, evRange: -0.46, freq: {check: 0.28, bet: 0.72}, ev: {check: -0.46, bet: -0.46}, evA: {check: -0.46, bet: -0.46} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.84, evRange: -0.84, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.84, bet: -0.85}, evA: {check: -0.84, bet: -0.85} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.84, evRange: -0.84, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.84, bet: -0.85}, evA: {check: -0.84, bet: -0.85} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.12, evRange: 1.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.49, bet: 1.12}, evA: {check: -0.60, bet: 1.10} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.12, evRange: 1.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.49, bet: 1.12}, evA: {check: -0.60, bet: 1.10} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.22, evRange: 0.37, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.16, bet: -0.29}, evA: {check: 1.03, bet: 0.27} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.22, evRange: 0.37, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.16, bet: -0.29}, evA: {check: 1.03, bet: 0.27} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.02, evRange: -0.38, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.39, bet: -0.98}, evA: {check: 0.20, bet: 0.12} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.02, evRange: -0.38, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.39, bet: -0.98}, evA: {check: 0.20, bet: 0.12} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.65}, evA: {check: -0.41, bet: -3.51} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.65}, evA: {check: -0.41, bet: -3.51} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88}, evA: {check: -0.83, bet: -3.92} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88}, evA: {check: -0.83, bet: -3.92} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.03, evRange: 1.03, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.03, bet: 1.27}, evA: {check: 1.03, bet: 1.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.22, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.19}, evA: {check: -0.21, bet: -3.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.22, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.19}, evA: {check: -0.21, bet: -3.66} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51}, evA: {check: -0.83, bet: -2.28} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51}, evA: {check: -0.83, bet: -2.28} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00}, evA: {check: 1.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.65}, evA: {fold: -1.00, call: -4.97, raise: -8.96} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.65}, evA: {fold: -1.00, call: -4.97, raise: -8.96} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.33}, evA: {fold: -1.00, call: -4.99, raise: -8.98} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.33}, evA: {fold: -1.00, call: -4.99, raise: -8.98} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.39, evRange: 5.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.39}, evA: {fold: -1.00, call: 5.00, raise: 5.07} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -7.75, freq: {fold: 0.31, call: 0.69}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -7.75, freq: {fold: 0.31, call: 0.69}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.71, evRange: -1.16, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.37}, evA: {fold: -1.00, call: -2.10, raise: -4.83} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.71, evRange: -1.16, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.37}, evA: {fold: -1.00, call: -2.10, raise: -4.83} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.74}, evA: {fold: -1.00, call: -4.19, raise: -6.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.74}, evA: {fold: -1.00, call: -4.19, raise: -6.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.22, evRange: 5.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.22}, evA: {fold: -1.00, call: 5.00, raise: 5.05} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.21, evRange: -5.44, freq: {fold: 0.89, call: 0.11}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.21, evRange: -5.44, freq: {fold: 0.89, call: 0.11}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.14, evRange: 0.68, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.14, bet: -1.48}, evA: {check: 0.68, bet: 0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.14, evRange: 0.68, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.14, bet: -1.48}, evA: {check: 0.68, bet: 0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.23, evRange: 1.30, freq: {check: 0.47, bet: 0.53}, ev: {check: 1.22, bet: 3.10}, evA: {check: 1.30, bet: 1.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.35, evRange: -0.25, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.49}, evA: {check: -0.24, bet: -0.26} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.35, evRange: -0.25, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.49}, evA: {check: -0.24, bet: -0.26} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.22, evRange: 0.71, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -0.71}, evA: {check: 0.72, bet: 0.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.22, evRange: 0.71, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -0.71}, evA: {check: 0.72, bet: 0.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.81, evRange: 1.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.81}, evA: {check: 1.00, bet: 1.41} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.46, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.71}, evA: {check: -0.46, bet: -0.47} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.46, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.71}, evA: {check: -0.46, bet: -0.47} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.09, evRange: -0.93, freq: {fold: 0.60, call: 0.40, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.37}, evA: {fold: -1.00, call: -0.83, raise: -3.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.09, evRange: -0.93, freq: {fold: 0.60, call: 0.40, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.37}, evA: {fold: -1.00, call: -0.83, raise: -3.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.21, evRange: 5.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.21}, evA: {fold: -1.00, call: 5.00, raise: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.77}, evA: {fold: -1.00, call: -3.68, raise: -5.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.77}, evA: {fold: -1.00, call: -3.68, raise: -5.30} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.24, evRange: -5.39, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -8.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.24, evRange: -5.39, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -8.76} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.95} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.17, freq: {fold: 0.02, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.47}, evA: {fold: -1.00, call: 2.23, raise: 1.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.17, freq: {fold: 0.02, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.47}, evA: {fold: -1.00, call: 2.23, raise: 1.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.66, evRange: 5.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.66}, evA: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.11, evRange: -1.00, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.30}, evA: {fold: -1.00, call: -2.17, raise: -1.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.11, evRange: -1.00, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.30}, evA: {fold: -1.00, call: -2.17, raise: -1.07} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.00, evRange: -4.70, freq: {fold: 0.17, call: 0.83}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.00, evRange: -4.70, freq: {fold: 0.17, call: 0.83}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.76} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.43, evRange: 1.51, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.36, bet: 2.43}, evA: {check: 1.49, bet: 1.51} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.20, evRange: 0.92, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.73, bet: -1.66}, evA: {check: 0.92, bet: 0.93} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.20, evRange: 0.92, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.73, bet: -1.66}, evA: {check: 0.92, bet: 0.93} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.72}, evA: {check: -0.31, bet: -0.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.72}, evA: {check: -0.31, bet: -0.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.56, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00}, evA: {check: 1.00, bet: 1.56} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.42, evRange: 0.92, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74}, evA: {check: 0.92, bet: 0.92} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.42, evRange: 0.92, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74}, evA: {check: 0.92, bet: 0.92} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -0.25, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53}, evA: {check: -0.25, bet: -0.48} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -0.25, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53}, evA: {check: -0.25, bet: -0.48} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 8.62, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.07}, evA: {fold: -1.00, call: 5.00, raise: 8.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 0.50, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.33}, evA: {fold: -1.00, call: 0.50, raise: 0.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 0.50, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.33}, evA: {fold: -1.00, call: 0.50, raise: 0.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53}, evA: {fold: -1.00, call: -4.77, raise: -8.32} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53}, evA: {fold: -1.00, call: -4.77, raise: -8.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: -1.88, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -1.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: -1.88, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -1.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.06, evRange: -5.07, freq: {fold: 0.96, call: 0.04}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -6.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.06, evRange: -5.07, freq: {fold: 0.96, call: 0.04}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -6.95} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.18, evRange: 7.82, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.18}, evA: {fold: -1.00, call: 5.00, raise: 7.82} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.59, evRange: -1.04, freq: {fold: 0.29, call: 0.70, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.45}, evA: {fold: -1.00, call: -1.04, raise: -2.80} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.59, evRange: -1.04, freq: {fold: 0.29, call: 0.70, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.45}, evA: {fold: -1.00, call: -1.04, raise: -2.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -1.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.58}, evA: {fold: -1.00, call: -4.43, raise: -7.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -1.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.58}, evA: {fold: -1.00, call: -4.43, raise: -7.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.21, evRange: -0.34, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -0.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.21, evRange: -0.34, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -0.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.17, evRange: -5.16, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -6.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.17, evRange: -5.16, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -6.63} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.41, evRange: 1.27, freq: {fold: 0.00, call: 0.34, raise: 0.66}, ev: {fold: -1.00, call: -1.67, raise: 1.48}, evA: {fold: -1.00, call: -2.53, raise: 1.29} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.41, evRange: 1.27, freq: {fold: 0.00, call: 0.34, raise: 0.66}, ev: {fold: -1.00, call: -1.67, raise: 1.48}, evA: {fold: -1.00, call: -2.53, raise: 1.29} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.03, evRange: -0.76, freq: {fold: 0.00, call: 0.85, raise: 0.14}, ev: {fold: -1.00, call: 0.00, raise: -0.19}, evA: {fold: -1.00, call: -0.50, raise: -0.69} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.03, evRange: -0.76, freq: {fold: 0.00, call: 0.85, raise: 0.14}, ev: {fold: -1.00, call: 0.00, raise: -0.19}, evA: {fold: -1.00, call: -0.50, raise: -0.69} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.98, evRange: -1.01, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.58, raise: -0.65}, evA: {fold: -1.00, call: -0.53, raise: -1.33} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.98, evRange: -1.01, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.58, raise: -0.65}, evA: {fold: -1.00, call: -0.53, raise: -1.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 2.21, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.82, bet: -0.12}, evA: {check: 2.21, bet: 1.21} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 2.21, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.82, bet: -0.12}, evA: {check: 2.21, bet: 1.21} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.68, evRange: -2.63, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.26}, evA: {check: -2.62, bet: -2.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.68, evRange: -2.63, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.26}, evA: {check: -2.62, bet: -2.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.56, evRange: 4.64, freq: {check: 0.20, bet: 0.80}, ev: {check: 4.67, bet: 4.53}, evA: {check: 4.63, bet: 4.64} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.46, evRange: 2.47, freq: {check: 0.85, bet: 0.15}, ev: {check: 0.75, bet: -1.20}, evA: {check: 2.48, bet: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.46, evRange: 2.47, freq: {check: 0.85, bet: 0.15}, ev: {check: 0.75, bet: -1.20}, evA: {check: 2.48, bet: 2.45} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.47, evRange: -1.29, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -4.53}, evA: {check: -1.27, bet: -1.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.47, evRange: -1.29, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -4.53}, evA: {check: -1.27, bet: -1.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.04, evRange: 4.11, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.04}, evA: {check: 3.00, bet: 4.11} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: 3.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.77}, evA: {fold: -3.00, call: 3.13, raise: 2.26} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: 3.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.77}, evA: {fold: -3.00, call: 3.13, raise: 2.26} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.04, evRange: -3.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.49}, evA: {fold: -3.00, call: -3.97, raise: -3.22} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.04, evRange: -3.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.49}, evA: {fold: -3.00, call: -3.97, raise: -3.22} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.01, evRange: 8.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01}, evA: {fold: -3.00, call: 7.00, raise: 8.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.73, evRange: -2.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.73, evRange: -2.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.07} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.23} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.23} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.56, evRange: -3.33, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45}, evA: {fold: -3.00, call: -3.44, raise: -6.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.56, evRange: -3.33, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45}, evA: {fold: -3.00, call: -3.44, raise: -6.36} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.97, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.23}, evA: {fold: -3.00, call: -6.00, raise: -8.16} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.97, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.23}, evA: {fold: -3.00, call: -6.00, raise: -8.16} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.06, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.06}, evA: {fold: -3.00, call: 7.00, raise: 7.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.71, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.26} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.71, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.26} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.83} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.83} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: -0.01, bet: -0.45}, evA: {check: -1.29, bet: -1.32} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: -0.01, bet: -0.45}, evA: {check: -1.29, bet: -1.32} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.36, evRange: 4.55, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.50, bet: 4.36}, evA: {check: 4.41, bet: 4.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.93, evRange: -2.50, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.41, bet: -1.92}, evA: {check: -2.83, bet: -2.50} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.93, evRange: -2.50, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.41, bet: -1.92}, evA: {check: -2.83, bet: -2.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.03, evRange: -0.18, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: -1.54}, evA: {check: -0.12, bet: -0.30} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.03, evRange: -0.18, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: -1.54}, evA: {check: -0.12, bet: -0.30} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.52, evRange: 5.27, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.52}, evA: {check: 3.00, bet: 5.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.62, evRange: -2.89, freq: {check: 0.59, bet: 0.41}, ev: {check: -2.25, bet: -3.15}, evA: {check: -2.88, bet: -2.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.62, evRange: -2.89, freq: {check: 0.59, bet: 0.41}, ev: {check: -2.25, bet: -3.15}, evA: {check: -2.88, bet: -2.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.37, evRange: -3.00, freq: {fold: 0.45, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.43}, evA: {fold: -3.00, call: -3.00, raise: -3.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.37, evRange: -3.00, freq: {fold: 0.45, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.43}, evA: {fold: -3.00, call: -3.00, raise: -3.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.14, evRange: 7.18, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.14}, evA: {fold: -3.00, call: 7.00, raise: 7.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.27, evRange: -3.00, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 1.97}, evA: {fold: -3.00, call: -6.46, raise: -2.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.27, evRange: -3.00, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 1.97}, evA: {fold: -3.00, call: -6.46, raise: -2.97} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.45, evRange: -6.96, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.45, evRange: -6.96, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.02, evRange: -7.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -9.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.02, evRange: -7.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -9.74} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.99, evRange: -3.01, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -3.01, raise: -4.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.99, evRange: -3.01, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -3.01, raise: -4.07} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.32, evRange: -3.00, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.41, raise: -3.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.32, evRange: -3.00, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.41, raise: -3.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.97, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -9.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.97, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -9.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.54} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.54} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.56, evRange: 4.40, freq: {check: 0.89, bet: 0.11}, ev: {check: 4.64, bet: 3.98}, evA: {check: 4.40, bet: 4.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.01, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.01, bet: 0.08}, evA: {check: -1.57, bet: -1.59} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.01, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.01, bet: 0.08}, evA: {check: -1.57, bet: -1.59} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.61, evRange: -2.87, freq: {check: 0.96, bet: 0.04}, ev: {check: -2.65, bet: -1.83}, evA: {check: -2.86, bet: -2.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.61, evRange: -2.87, freq: {check: 0.96, bet: 0.04}, ev: {check: -2.65, bet: -1.83}, evA: {check: -2.86, bet: -2.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.15, evRange: 4.97, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.15}, evA: {check: 3.00, bet: 4.97} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.55, evRange: -0.03, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.04}, evA: {check: -0.03, bet: -0.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.55, evRange: -0.03, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.04}, evA: {check: -0.03, bet: -0.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.29, evRange: -2.83, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -2.33}, evA: {check: -2.82, bet: -2.85} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.29, evRange: -2.83, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -2.33}, evA: {check: -2.82, bet: -2.85} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.33, evRange: -3.02, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.02, raise: -4.51} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.33, evRange: -3.02, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.02, raise: -4.51} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.97, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.44}, evA: {fold: -3.00, call: -6.31, raise: -3.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.97, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.44}, evA: {fold: -3.00, call: -6.31, raise: -3.98} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.80} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.97} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.81, evRange: -3.04, freq: {fold: 0.54, call: 0.45, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.06, raise: -4.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.81, evRange: -3.04, freq: {fold: 0.54, call: 0.45, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.06, raise: -4.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.34, raise: -3.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.34, raise: -3.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.79} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.79} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.96} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.55, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.56}, evA: {fold: -3.00, call: 0.92} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.55, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.56}, evA: {fold: -3.00, call: 0.92} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.07, evRange: -2.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.07}, evA: {fold: -3.00, call: -3.63} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.07, evRange: -2.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.07}, evA: {fold: -3.00, call: -3.63} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 3.60, evRange: -2.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 3.62}, evA: {fold: -3.00, call: 4.69} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 3.60, evRange: -2.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 3.62}, evA: {fold: -3.00, call: 4.69} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 1.94, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.03}, evA: {check: 1.94, bet: 1.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 1.94, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.03}, evA: {check: 1.94, bet: 1.93} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.65, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.76, bet: -4.50}, evA: {check: -3.65, bet: -3.90} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.65, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.76, bet: -4.50}, evA: {check: -3.65, bet: -3.90} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.82, evRange: 6.94, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.82, bet: 6.82}, evA: {check: 6.96, bet: 6.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.35, evRange: 1.71, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.63}, evA: {check: 1.71, bet: 1.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.35, evRange: 1.71, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.63}, evA: {check: 1.71, bet: 1.71} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.43, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.48}, evA: {check: -4.42, bet: -7.32} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.43, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.48}, evA: {check: -4.42, bet: -7.32} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.99, evRange: 8.16, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.99}, evA: {check: 5.00, bet: 8.16} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.21, evRange: -3.41, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.54}, evA: {fold: -5.00, call: -3.40, raise: -4.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.21, evRange: -3.41, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.54}, evA: {fold: -5.00, call: -3.40, raise: -4.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.25}, evA: {fold: -5.00, call: -8.98, raise: -11.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.25}, evA: {fold: -5.00, call: -8.98, raise: -11.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.79, evRange: 12.52, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.79}, evA: {fold: -5.00, call: 9.00, raise: 12.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.82, evRange: -7.92, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.82, evRange: -7.92, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.10, evRange: -5.03, freq: {fold: 0.16, call: 0.83, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.66}, evA: {fold: -5.00, call: -5.04, raise: -5.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.10, evRange: -5.03, freq: {fold: 0.16, call: 0.83, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.66}, evA: {fold: -5.00, call: -5.04, raise: -5.22} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.89, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.86}, evA: {fold: -5.00, call: -8.92, raise: -5.21} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.89, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.86}, evA: {fold: -5.00, call: -8.92, raise: -5.21} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.83, evRange: 10.53, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83}, evA: {fold: -5.00, call: 9.00, raise: 10.53} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.19, evRange: -9.05, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.19, evRange: -9.05, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.02, evRange: -9.07, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.13} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.02, evRange: -9.07, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.13} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14}, evA: {check: -1.83, bet: -2.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14}, evA: {check: -1.83, bet: -2.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.74, evRange: 7.47, freq: {check: 0.96, bet: 0.04}, ev: {check: 6.71, bet: 7.29}, evA: {check: 7.48, bet: 7.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.86, evRange: -4.56, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.82}, evA: {check: -4.56, bet: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.86, evRange: -4.56, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.82}, evA: {check: -4.56, bet: -4.76} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.40, evRange: -0.13, freq: {check: 0.43, bet: 0.57}, ev: {check: 1.25, bet: -0.24}, evA: {check: -0.12, bet: -0.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.40, evRange: -0.13, freq: {check: 0.43, bet: 0.57}, ev: {check: 1.25, bet: -0.24}, evA: {check: -0.12, bet: -0.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.08, evRange: 7.66, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.08}, evA: {check: 5.00, bet: 7.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.78, freq: {check: 0.93, bet: 0.07}, ev: {check: -3.75, bet: -3.91}, evA: {check: -4.78, bet: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.78, freq: {check: 0.93, bet: 0.07}, ev: {check: -3.75, bet: -3.91}, evA: {check: -4.78, bet: -4.76} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -4.98, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.65}, evA: {fold: -5.00, call: -4.97, raise: -5.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -4.98, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.65}, evA: {fold: -5.00, call: -4.97, raise: -5.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.76, evRange: 10.46, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.76}, evA: {fold: -5.00, call: 9.00, raise: 10.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.26, evRange: -5.01, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: -0.67}, evA: {fold: -5.00, call: -8.90, raise: -5.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.26, evRange: -5.01, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: -0.67}, evA: {fold: -5.00, call: -8.90, raise: -5.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.37, evRange: -9.11, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.37, evRange: -9.11, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.19} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -4.16, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.39}, evA: {fold: -5.00, call: -3.67, raise: -4.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -4.16, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.39}, evA: {fold: -5.00, call: -3.67, raise: -4.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.09, evRange: 10.84, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.09}, evA: {fold: -5.00, call: 9.00, raise: 10.84} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.31, evRange: -5.26, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.26}, evA: {fold: -5.00, call: -8.65, raise: -6.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.31, evRange: -5.26, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.26}, evA: {fold: -5.00, call: -8.65, raise: -6.04} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.66, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.66, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.95} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.30, evRange: 6.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.96, bet: 6.30}, evA: {check: 5.55, bet: 6.25} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.09, evRange: -1.83, freq: {check: 0.02, bet: 0.98}, ev: {check: 0.54, bet: -0.10}, evA: {check: -2.02, bet: -1.83} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.09, evRange: -1.83, freq: {check: 0.02, bet: 0.98}, ev: {check: 0.54, bet: -0.10}, evA: {check: -2.02, bet: -1.83} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.18, evRange: -2.24, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.37, bet: -1.17}, evA: {check: -4.98, bet: -2.23} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.18, evRange: -2.24, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.37, bet: -1.17}, evA: {check: -4.98, bet: -2.23} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 7.87, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.06}, evA: {check: 5.00, bet: 7.87} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.22, evRange: -0.47, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.25}, evA: {check: -0.45, bet: -1.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.22, evRange: -0.47, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.25}, evA: {check: -0.45, bet: -1.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.91, evRange: -5.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -4.10}, evA: {check: -4.77, bet: -5.47} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.91, evRange: -5.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -4.10}, evA: {check: -4.77, bet: -5.47} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.34, evRange: 9.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.35}, evA: {fold: -5.00, call: 9.00, raise: 9.08} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.36, evRange: -5.11, freq: {fold: 0.26, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.10}, evA: {fold: -5.00, call: -5.02, raise: -8.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.36, evRange: -5.11, freq: {fold: 0.26, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.10}, evA: {fold: -5.00, call: -5.02, raise: -8.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.21, evRange: -5.65, freq: {fold: 0.86, call: 0.01, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: 1.56}, evA: {fold: -5.00, call: -7.93, raise: -9.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.21, evRange: -5.65, freq: {fold: 0.86, call: 0.01, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: 1.56}, evA: {fold: -5.00, call: -7.93, raise: -9.87} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.84, evRange: -9.23, freq: {fold: 0.82, call: 0.18}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.84, evRange: -9.23, freq: {fold: 0.82, call: 0.18}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.59} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.02, evRange: 9.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02}, evA: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.87, evRange: -4.99, freq: {fold: 0.71, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -4.94, raise: -6.21} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.87, evRange: -4.99, freq: {fold: 0.71, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -4.94, raise: -6.21} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.52, evRange: -4.98, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: 3.43}, evA: {fold: -5.00, call: -8.42, raise: -4.90} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.52, evRange: -4.98, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: 3.43}, evA: {fold: -5.00, call: -8.42, raise: -4.90} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.93, evRange: -9.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.93, evRange: -9.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.35} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.35} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.65, evRange: 1.23, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: -1.12, raise: 1.90}, evA: {fold: -1.00, call: 0.56, raise: 1.15} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.65, evRange: 1.23, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: -1.12, raise: 1.90}, evA: {fold: -1.00, call: 0.56, raise: 1.15} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 1.14, evRange: -0.65, freq: {fold: 0.00, call: 0.62, raise: 0.37}, ev: {fold: -1.00, call: 1.99, raise: -0.26}, evA: {fold: -1.00, call: -0.78, raise: -0.52} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 1.14, evRange: -0.65, freq: {fold: 0.00, call: 0.62, raise: 0.37}, ev: {fold: -1.00, call: 1.99, raise: -0.26}, evA: {fold: -1.00, call: -0.78, raise: -0.52} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.95, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: -0.51, raise: -1.15}, evA: {fold: -1.00, call: 0.12, raise: -1.47} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.95, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: -0.51, raise: -1.15}, evA: {fold: -1.00, call: 0.12, raise: -1.47} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: 1.61, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.24, bet: -0.30}, evA: {check: 1.61, bet: 1.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: 1.61, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.24, bet: -0.30}, evA: {check: 1.61, bet: 1.62} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.27, evRange: -1.82, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.40}, evA: {check: -1.82, bet: -1.91} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.27, evRange: -1.82, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.40}, evA: {check: -1.82, bet: -1.91} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.62, evRange: 4.32, freq: {check: 0.03, bet: 0.97}, ev: {check: 4.68, bet: 4.62}, evA: {check: 4.34, bet: 4.32} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.08, evRange: 1.98, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -1.20}, evA: {check: 1.98, bet: 1.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.08, evRange: 1.98, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -1.20}, evA: {check: 1.98, bet: 1.98} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.26, evRange: -2.02, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.47}, evA: {check: -2.01, bet: -3.67} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.26, evRange: -2.02, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.47}, evA: {check: -2.01, bet: -3.67} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.99, evRange: 5.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.99}, evA: {check: 3.00, bet: 5.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.72, evRange: -2.74, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.83}, evA: {fold: -3.00, call: -2.74, raise: -4.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.72, evRange: -2.74, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.83}, evA: {fold: -3.00, call: -2.74, raise: -4.23} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.17}, evA: {fold: -3.00, call: -6.96, raise: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.17}, evA: {fold: -3.00, call: -6.96, raise: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.93, evRange: 10.78, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.94}, evA: {fold: -3.00, call: 7.00, raise: 10.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.38, evRange: -7.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.38, evRange: -7.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.36} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.66, evRange: -3.21, freq: {fold: 0.23, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.24}, evA: {fold: -3.00, call: -3.26, raise: -4.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.66, evRange: -3.21, freq: {fold: 0.23, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.24}, evA: {fold: -3.00, call: -3.26, raise: -4.16} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 1.13}, evA: {fold: -3.00, call: -6.59, raise: -3.36} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 1.13}, evA: {fold: -3.00, call: -6.59, raise: -3.36} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.31, evRange: 7.48, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.31}, evA: {fold: -3.00, call: 7.00, raise: 7.48} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -5.52, evRange: -7.09, freq: {fold: 0.85, call: 0.15}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.57} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -5.52, evRange: -7.09, freq: {fold: 0.85, call: 0.15}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.57} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.12} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.12} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -2.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.26, bet: 0.23}, evA: {check: -2.04, bet: -2.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -2.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.26, bet: 0.23}, evA: {check: -2.04, bet: -2.18} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.27, evRange: 3.97, freq: {check: 0.46, bet: 0.54}, ev: {check: 5.00, bet: 3.64}, evA: {check: 3.97, bet: 3.96} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.08, evRange: -2.58, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.97, bet: -1.05}, evA: {check: -3.08, bet: -2.57} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.08, evRange: -2.58, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.97, bet: -1.05}, evA: {check: -3.08, bet: -2.57} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.74, evRange: -0.91, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.75, bet: -0.05}, evA: {check: -0.91, bet: -1.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.74, evRange: -0.91, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.75, bet: -0.05}, evA: {check: -0.91, bet: -1.11} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.14, evRange: 5.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.14}, evA: {check: 3.00, bet: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.08, evRange: -2.89, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -2.08}, evA: {check: -3.00, bet: -2.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.08, evRange: -2.89, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -2.08}, evA: {check: -3.00, bet: -2.89} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.63, evRange: -3.00, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.00, raise: -5.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.63, evRange: -3.00, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.00, raise: -5.78} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.82, evRange: -3.17, freq: {fold: 0.96, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -5.86, raise: -7.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.82, evRange: -3.17, freq: {fold: 0.96, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -5.86, raise: -7.72} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.96} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.96} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.54, evRange: -3.03, freq: {fold: 0.69, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48}, evA: {fold: -3.00, call: -3.08, raise: -5.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.54, evRange: -3.03, freq: {fold: 0.69, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48}, evA: {fold: -3.00, call: -3.08, raise: -5.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.03, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.03}, evA: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.98, evRange: -3.02, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.38}, evA: {fold: -3.00, call: -5.90, raise: -7.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.98, evRange: -3.02, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.38}, evA: {fold: -3.00, call: -5.90, raise: -7.74} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.87, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.87, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.99} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.95, evRange: 4.49, freq: {check: 0.16, bet: 0.84}, ev: {check: 4.50, bet: 5.03}, evA: {check: 4.50, bet: 4.49} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.53, evRange: -1.36, freq: {check: 0.51, bet: 0.49}, ev: {check: -0.04, bet: -1.03}, evA: {check: -1.36, bet: -1.36} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.53, evRange: -1.36, freq: {check: 0.51, bet: 0.49}, ev: {check: -0.04, bet: -1.03}, evA: {check: -1.36, bet: -1.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.89, evRange: -1.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.82, bet: -1.89}, evA: {check: -1.97, bet: -1.66} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.89, evRange: -1.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.82, bet: -1.89}, evA: {check: -1.97, bet: -1.66} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.74, evRange: 5.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.74}, evA: {check: 3.00, bet: 5.21} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.18, evRange: -0.72, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.43}, evA: {check: -0.72, bet: -0.73} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.18, evRange: -0.72, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.43}, evA: {check: -0.72, bet: -0.73} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.08, evRange: -3.00, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.46}, evA: {check: -3.00, bet: -3.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.08, evRange: -3.00, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.46}, evA: {check: -3.00, bet: -3.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.44, evRange: -3.00, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.01, raise: -3.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.44, evRange: -3.00, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.01, raise: -3.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.95, evRange: -1.26, freq: {fold: 0.09, call: 0.00, raise: 0.91}, ev: {fold: -3.00, call: -5.25, raise: 2.46}, evA: {fold: -3.00, call: -6.64, raise: -1.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.95, evRange: -1.26, freq: {fold: 0.09, call: 0.00, raise: 0.91}, ev: {fold: -3.00, call: -5.25, raise: 2.46}, evA: {fold: -3.00, call: -6.64, raise: -1.07} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.96, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.37} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.96, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.37} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.95} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.44, evRange: 7.71, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.44}, evA: {fold: -3.00, call: 7.00, raise: 7.71} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.57, evRange: -3.00, freq: {fold: 0.70, call: 0.30, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: -3.00, raise: -3.54} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.57, evRange: -3.00, freq: {fold: 0.70, call: 0.30, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: -3.00, raise: -3.54} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.74, evRange: -3.01, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 0.56}, evA: {fold: -3.00, call: -6.63, raise: -3.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.74, evRange: -3.01, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 0.56}, evA: {fold: -3.00, call: -6.63, raise: -3.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.91, evRange: -7.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.91, evRange: -7.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -9.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -9.94} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.30, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.30}, evA: {fold: -3.00, call: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.30, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.30}, evA: {fold: -3.00, call: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -2.41, evRange: -1.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.41}, evA: {fold: -3.00, call: -3.03} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -2.41, evRange: -1.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.41}, evA: {fold: -3.00, call: -3.03} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.93, evRange: -2.46, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.93}, evA: {fold: -3.00, call: -1.67} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.93, evRange: -2.46, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.93}, evA: {fold: -3.00, call: -1.67} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 2.34, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.26, bet: -0.12}, evA: {check: 2.33, bet: 2.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 2.34, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.26, bet: -0.12}, evA: {check: 2.33, bet: 2.35} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.11}, evA: {check: -3.85, bet: -5.16} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.11}, evA: {check: -3.85, bet: -5.16} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.93, evRange: 7.34, freq: {check: 0.02, bet: 0.98}, ev: {check: 6.94, bet: 6.93}, evA: {check: 7.36, bet: 7.34} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.29, evRange: 3.34, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74}, evA: {check: 3.34, bet: 3.34} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.29, evRange: 3.34, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74}, evA: {check: 3.34, bet: 3.34} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.33, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48}, evA: {check: -3.33, bet: -4.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.33, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48}, evA: {check: -3.33, bet: -4.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 6.99, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 5.00, bet: 6.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.23, evRange: -1.34, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26}, evA: {fold: -5.00, call: -1.33, raise: -1.97} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.23, evRange: -1.34, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26}, evA: {fold: -5.00, call: -1.33, raise: -1.97} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.50}, evA: {fold: -5.00, call: -8.96, raise: -12.89} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.50}, evA: {fold: -5.00, call: -8.96, raise: -12.89} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.99, evRange: 12.94, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.01}, evA: {fold: -5.00, call: 9.00, raise: 12.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.23, evRange: -6.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -6.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.23, evRange: -6.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -6.93} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.81, evRange: -5.16, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.57}, evA: {fold: -5.00, call: -5.17, raise: -5.68} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.81, evRange: -5.16, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.57}, evA: {fold: -5.00, call: -5.17, raise: -5.68} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.96, evRange: -5.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -1.07}, evA: {fold: -5.00, call: -8.89, raise: -5.81} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.96, evRange: -5.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -1.07}, evA: {fold: -5.00, call: -8.89, raise: -5.81} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.83, evRange: 10.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83}, evA: {fold: -5.00, call: 9.00, raise: 10.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.91, evRange: -9.26, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.91, evRange: -9.26, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.62} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.23} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.23} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.49, evRange: -2.63, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.26, bet: -0.83}, evA: {check: -2.61, bet: -2.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.49, evRange: -2.63, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.26, bet: -0.83}, evA: {check: -2.61, bet: -2.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.97, evRange: 7.90, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.59, bet: 7.98}, evA: {check: 7.88, bet: 7.90} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.82, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.19}, evA: {check: -4.83, bet: -4.81} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.82, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.19}, evA: {check: -4.83, bet: -4.81} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: 1.68, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28}, evA: {check: 1.71, bet: 1.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: 1.68, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28}, evA: {check: 1.71, bet: 1.66} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 8.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 5.00, bet: 8.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.45}, evA: {check: -4.39, bet: -7.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.45}, evA: {check: -4.39, bet: -7.11} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.14, evRange: -4.97, freq: {fold: 0.02, call: 0.98, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.36}, evA: {fold: -5.00, call: -4.97, raise: -5.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.14, evRange: -4.97, freq: {fold: 0.02, call: 0.98, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.36}, evA: {fold: -5.00, call: -4.97, raise: -5.33} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.15, evRange: 11.15, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.16}, evA: {fold: -5.00, call: 9.00, raise: 11.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.52}, evA: {fold: -5.00, call: -9.00, raise: -6.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.52}, evA: {fold: -5.00, call: -9.00, raise: -6.74} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.39, evRange: -8.61, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.39, evRange: -8.61, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.03, evRange: -9.13, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.03, evRange: -9.13, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.46, evRange: -5.00, freq: {fold: 0.38, call: 0.52, raise: 0.10}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: -4.99, raise: -5.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.46, evRange: -5.00, freq: {fold: 0.38, call: 0.52, raise: 0.10}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: -4.99, raise: -5.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.79, evRange: 10.55, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.79}, evA: {fold: -5.00, call: 9.00, raise: 10.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.40, evRange: -5.01, freq: {fold: 0.62, call: 0.00, raise: 0.38}, ev: {fold: -5.00, call: -6.75, raise: -0.85}, evA: {fold: -5.00, call: -8.95, raise: -5.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.40, evRange: -5.01, freq: {fold: 0.62, call: 0.00, raise: 0.38}, ev: {fold: -5.00, call: -6.75, raise: -0.85}, evA: {fold: -5.00, call: -8.95, raise: -5.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.16, evRange: -9.01, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.16, evRange: -9.01, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.03} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.46} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.51, evRange: 7.12, freq: {check: 0.45, bet: 0.55}, ev: {check: 7.92, bet: 7.17}, evA: {check: 7.12, bet: 7.12} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.22, evRange: -4.00, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.40, bet: -1.11}, evA: {check: -4.00, bet: -4.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.22, evRange: -4.00, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.40, bet: -1.11}, evA: {check: -4.00, bet: -4.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.35, evRange: -4.99, freq: {check: 0.46, bet: 0.54}, ev: {check: -1.43, bet: -3.13}, evA: {check: -4.97, bet: -5.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.35, evRange: -4.99, freq: {check: 0.46, bet: 0.54}, ev: {check: -1.43, bet: -3.13}, evA: {check: -4.97, bet: -5.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.03, evRange: 6.46, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 9.03}, evA: {check: 5.00, bet: 6.46} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.13, evRange: -1.33, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.31}, evA: {check: -1.32, bet: -1.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.13, evRange: -1.33, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.31}, evA: {check: -1.32, bet: -1.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.52, evRange: -1.32, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.52}, evA: {check: -4.89, bet: -1.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.52, evRange: -1.32, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.52}, evA: {check: -4.89, bet: -1.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.16, evRange: 9.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.16}, evA: {fold: -5.00, call: 9.00, raise: 9.22} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.93, evRange: -5.00, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.36}, evA: {fold: -5.00, call: -5.00, raise: -6.17} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.93, evRange: -5.00, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.36}, evA: {fold: -5.00, call: -5.00, raise: -6.17} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.66, evRange: -4.96, freq: {fold: 0.13, call: 0.00, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: 2.71}, evA: {fold: -5.00, call: -8.48, raise: -4.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.66, evRange: -4.96, freq: {fold: 0.13, call: 0.00, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: 2.71}, evA: {fold: -5.00, call: -8.48, raise: -4.94} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.14, evRange: -9.01, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.10} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.14, evRange: -9.01, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.97} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01}, evA: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.21, evRange: -5.01, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -5.01, raise: -6.28} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.21, evRange: -5.01, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -5.01, raise: -6.28} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -4.98, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 3.45}, evA: {fold: -5.00, call: -8.44, raise: -4.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -4.98, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 3.45}, evA: {fold: -5.00, call: -8.44, raise: -4.92} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.95, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.66} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.95, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.04, evRange: 1.04, freq: {check: 0.25, bet: 0.75}, ev: {check: 1.04, bet: 1.04}, evA: {check: 1.04, bet: 1.04} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.04, evRange: 1.04, freq: {check: 0.25, bet: 0.75}, ev: {check: 1.04, bet: 1.04}, evA: {check: 1.04, bet: 1.04} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.46, evRange: -0.46, freq: {check: 0.28, bet: 0.72}, ev: {check: -0.46, bet: -0.46}, evA: {check: -0.46, bet: -0.46} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.46, evRange: -0.46, freq: {check: 0.28, bet: 0.72}, ev: {check: -0.46, bet: -0.46}, evA: {check: -0.46, bet: -0.46} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.84, evRange: -0.84, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.84, bet: -0.85}, evA: {check: -0.84, bet: -0.85} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.84, evRange: -0.84, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.84, bet: -0.85}, evA: {check: -0.84, bet: -0.85} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.13, evRange: 1.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.28, bet: 1.12}, evA: {check: 2.31, bet: 1.10} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.13, evRange: 1.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.28, bet: 1.12}, evA: {check: 2.31, bet: 1.10} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.51, evRange: 0.37, freq: {check: 0.15, bet: 0.85}, ev: {check: -1.80, bet: -0.29}, evA: {check: -1.15, bet: 0.27} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.51, evRange: 0.37, freq: {check: 0.15, bet: 0.85}, ev: {check: -1.80, bet: -0.29}, evA: {check: -1.15, bet: 0.27} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.57, evRange: -0.38, freq: {check: 0.70, bet: 0.30}, ev: {check: -0.39, bet: -0.98}, evA: {check: -0.26, bet: 0.12} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.57, evRange: -0.38, freq: {check: 0.70, bet: 0.30}, ev: {check: -0.39, bet: -0.98}, evA: {check: -0.26, bet: 0.12} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.65}, evA: {check: -0.41, bet: -3.51} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.65}, evA: {check: -0.41, bet: -3.51} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88}, evA: {check: -0.83, bet: -3.92} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88}, evA: {check: -0.83, bet: -3.92} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.03, evRange: 1.03, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.03, bet: 1.27}, evA: {check: 1.03, bet: 1.02} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.22, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.19}, evA: {check: -0.21, bet: -3.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.22, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.19}, evA: {check: -0.21, bet: -3.66} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51}, evA: {check: -0.83, bet: -2.28} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51}, evA: {check: -0.83, bet: -2.28} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00}, evA: {check: 1.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.65}, evA: {fold: -1.00, call: -4.97, raise: -8.96} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.65}, evA: {fold: -1.00, call: -4.97, raise: -8.96} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.33}, evA: {fold: -1.00, call: -4.99, raise: -8.98} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.33}, evA: {fold: -1.00, call: -4.99, raise: -8.98} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.39, evRange: 5.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.39}, evA: {fold: -1.00, call: 5.00, raise: 5.07} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -7.75, freq: {fold: 0.31, call: 0.69}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -7.75, freq: {fold: 0.31, call: 0.69}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.71, evRange: -1.16, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.37}, evA: {fold: -1.00, call: -2.10, raise: -4.83} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.71, evRange: -1.16, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.37}, evA: {fold: -1.00, call: -2.10, raise: -4.83} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.74}, evA: {fold: -1.00, call: -4.19, raise: -6.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.74}, evA: {fold: -1.00, call: -4.19, raise: -6.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.22, evRange: 5.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.22}, evA: {fold: -1.00, call: 5.00, raise: 5.05} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.21, evRange: -5.44, freq: {fold: 0.89, call: 0.11}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.21, evRange: -5.44, freq: {fold: 0.89, call: 0.11}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.14, evRange: 0.68, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.14, bet: -1.48}, evA: {check: 0.68, bet: 0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.14, evRange: 0.68, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.14, bet: -1.48}, evA: {check: 0.68, bet: 0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.23, evRange: 1.30, freq: {check: 0.47, bet: 0.53}, ev: {check: 1.22, bet: 3.10}, evA: {check: 1.30, bet: 1.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.35, evRange: -0.25, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.49}, evA: {check: -0.24, bet: -0.26} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.35, evRange: -0.25, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.49}, evA: {check: -0.24, bet: -0.26} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.22, evRange: 0.71, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -0.71}, evA: {check: 0.72, bet: 0.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.22, evRange: 0.71, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -0.71}, evA: {check: 0.72, bet: 0.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.81, evRange: 1.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.81}, evA: {check: 1.00, bet: 1.41} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.46, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.71}, evA: {check: -0.46, bet: -0.47} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.46, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.71}, evA: {check: -0.46, bet: -0.47} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.09, evRange: -0.93, freq: {fold: 0.60, call: 0.40, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.37}, evA: {fold: -1.00, call: -0.83, raise: -3.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.09, evRange: -0.93, freq: {fold: 0.60, call: 0.40, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.37}, evA: {fold: -1.00, call: -0.83, raise: -3.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.21, evRange: 5.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.21}, evA: {fold: -1.00, call: 5.00, raise: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.77}, evA: {fold: -1.00, call: -3.68, raise: -5.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.77}, evA: {fold: -1.00, call: -3.68, raise: -5.30} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.24, evRange: -5.39, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -8.76} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.24, evRange: -5.39, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -8.76} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -8.95} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.17, freq: {fold: 0.02, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.47}, evA: {fold: -1.00, call: 2.23, raise: 1.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.17, freq: {fold: 0.02, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.47}, evA: {fold: -1.00, call: 2.23, raise: 1.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.66, evRange: 5.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.66}, evA: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.11, evRange: -1.00, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.30}, evA: {fold: -1.00, call: -2.17, raise: -1.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.11, evRange: -1.00, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.30}, evA: {fold: -1.00, call: -2.17, raise: -1.07} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.00, evRange: -4.70, freq: {fold: 0.17, call: 0.83}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.00, evRange: -4.70, freq: {fold: 0.17, call: 0.83}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -4.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -7.76} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.43, evRange: 1.51, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.36, bet: 2.43}, evA: {check: 1.49, bet: 1.51} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.20, evRange: 0.92, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.73, bet: -1.66}, evA: {check: 0.92, bet: 0.93} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.20, evRange: 0.92, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.73, bet: -1.66}, evA: {check: 0.92, bet: 0.93} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.72}, evA: {check: -0.31, bet: -0.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.72}, evA: {check: -0.31, bet: -0.29} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.56, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00}, evA: {check: 1.00, bet: 1.56} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.42, evRange: 0.92, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74}, evA: {check: 0.92, bet: 0.92} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.42, evRange: 0.92, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74}, evA: {check: 0.92, bet: 0.92} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -0.25, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53}, evA: {check: -0.25, bet: -0.48} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -0.25, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53}, evA: {check: -0.25, bet: -0.48} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 8.62, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.07}, evA: {fold: -1.00, call: 5.00, raise: 8.64} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 0.50, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.33}, evA: {fold: -1.00, call: 0.50, raise: 0.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 0.50, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.33}, evA: {fold: -1.00, call: 0.50, raise: 0.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53}, evA: {fold: -1.00, call: -4.77, raise: -8.32} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53}, evA: {fold: -1.00, call: -4.77, raise: -8.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: -1.88, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -1.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: -1.88, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -1.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.06, evRange: -5.07, freq: {fold: 0.96, call: 0.04}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -6.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.06, evRange: -5.07, freq: {fold: 0.96, call: 0.04}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -6.95} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.18, evRange: 7.82, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.18}, evA: {fold: -1.00, call: 5.00, raise: 7.82} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.59, evRange: -1.04, freq: {fold: 0.29, call: 0.70, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.45}, evA: {fold: -1.00, call: -1.04, raise: -2.80} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.59, evRange: -1.04, freq: {fold: 0.29, call: 0.70, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.45}, evA: {fold: -1.00, call: -1.04, raise: -2.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -1.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.58}, evA: {fold: -1.00, call: -4.43, raise: -7.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -1.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.58}, evA: {fold: -1.00, call: -4.43, raise: -7.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00}, evA: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.21, evRange: -0.34, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -0.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.21, evRange: -0.34, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 2.25}, evA: {fold: -5.00, call: -0.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.17, evRange: -5.16, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -6.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.17, evRange: -5.16, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: -6.75}, evA: {fold: -5.00, call: -6.63} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.88, evRange: 1.27, freq: {fold: 0.00, call: 0.34, raise: 0.66}, ev: {fold: -1.00, call: 2.64, raise: 1.48}, evA: {fold: -1.00, call: 2.61, raise: 1.29} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.88, evRange: 1.27, freq: {fold: 0.00, call: 0.34, raise: 0.66}, ev: {fold: -1.00, call: 2.64, raise: 1.48}, evA: {fold: -1.00, call: 2.61, raise: 1.29} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -3.30, evRange: -0.76, freq: {fold: 0.00, call: 0.85, raise: 0.14}, ev: {fold: -1.00, call: -3.83, raise: -0.19}, evA: {fold: -1.00, call: -3.85, raise: -0.69} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -3.30, evRange: -0.76, freq: {fold: 0.00, call: 0.85, raise: 0.14}, ev: {fold: -1.00, call: -3.83, raise: -0.19}, evA: {fold: -1.00, call: -3.85, raise: -0.69} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.99, evRange: -1.01, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.93, raise: -0.65}, evA: {fold: -1.00, call: -1.02, raise: -1.33} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.99, evRange: -1.01, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.93, raise: -0.65}, evA: {fold: -1.00, call: -1.02, raise: -1.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 2.21, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.82, bet: -0.12}, evA: {check: 2.21, bet: 1.21} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 2.21, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.82, bet: -0.12}, evA: {check: 2.21, bet: 1.21} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.68, evRange: -2.63, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.26}, evA: {check: -2.62, bet: -2.71} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.68, evRange: -2.63, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.26}, evA: {check: -2.62, bet: -2.71} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.56, evRange: 4.64, freq: {check: 0.20, bet: 0.80}, ev: {check: 4.67, bet: 4.53}, evA: {check: 4.63, bet: 4.64} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.46, evRange: 2.47, freq: {check: 0.85, bet: 0.15}, ev: {check: 0.75, bet: -1.20}, evA: {check: 2.48, bet: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.46, evRange: 2.47, freq: {check: 0.85, bet: 0.15}, ev: {check: 0.75, bet: -1.20}, evA: {check: 2.48, bet: 2.45} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.47, evRange: -1.29, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -4.53}, evA: {check: -1.27, bet: -1.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.47, evRange: -1.29, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -4.53}, evA: {check: -1.27, bet: -1.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.04, evRange: 4.11, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.04}, evA: {check: 3.00, bet: 4.11} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: 3.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.77}, evA: {fold: -3.00, call: 3.13, raise: 2.26} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: 3.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.77}, evA: {fold: -3.00, call: 3.13, raise: 2.26} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.04, evRange: -3.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.49}, evA: {fold: -3.00, call: -3.97, raise: -3.22} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.04, evRange: -3.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.49}, evA: {fold: -3.00, call: -3.97, raise: -3.22} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.01, evRange: 8.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01}, evA: {fold: -3.00, call: 7.00, raise: 8.00} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.73, evRange: -2.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.73, evRange: -2.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -2.07} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.23} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -8.23} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.56, evRange: -3.33, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45}, evA: {fold: -3.00, call: -3.44, raise: -6.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.56, evRange: -3.33, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45}, evA: {fold: -3.00, call: -3.44, raise: -6.36} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.97, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.23}, evA: {fold: -3.00, call: -6.00, raise: -8.16} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.97, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.23}, evA: {fold: -3.00, call: -6.00, raise: -8.16} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.06, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.06}, evA: {fold: -3.00, call: 7.00, raise: 7.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.71, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.26} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.71, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.26} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.83} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.83} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: -0.01, bet: -0.45}, evA: {check: -1.29, bet: -1.32} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: -0.01, bet: -0.45}, evA: {check: -1.29, bet: -1.32} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.36, evRange: 4.55, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.50, bet: 4.36}, evA: {check: 4.41, bet: 4.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.93, evRange: -2.50, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.41, bet: -1.92}, evA: {check: -2.83, bet: -2.50} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.93, evRange: -2.50, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.41, bet: -1.92}, evA: {check: -2.83, bet: -2.50} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.03, evRange: -0.18, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: -1.54}, evA: {check: -0.12, bet: -0.30} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.03, evRange: -0.18, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: -1.54}, evA: {check: -0.12, bet: -0.30} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.52, evRange: 5.27, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.52}, evA: {check: 3.00, bet: 5.27} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.62, evRange: -2.89, freq: {check: 0.59, bet: 0.41}, ev: {check: -2.25, bet: -3.15}, evA: {check: -2.88, bet: -2.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.62, evRange: -2.89, freq: {check: 0.59, bet: 0.41}, ev: {check: -2.25, bet: -3.15}, evA: {check: -2.88, bet: -2.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.37, evRange: -3.00, freq: {fold: 0.45, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.43}, evA: {fold: -3.00, call: -3.00, raise: -3.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.37, evRange: -3.00, freq: {fold: 0.45, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.43}, evA: {fold: -3.00, call: -3.00, raise: -3.93} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.14, evRange: 7.18, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.14}, evA: {fold: -3.00, call: 7.00, raise: 7.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.27, evRange: -3.00, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 1.97}, evA: {fold: -3.00, call: -6.46, raise: -2.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.27, evRange: -3.00, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 1.97}, evA: {fold: -3.00, call: -6.46, raise: -2.97} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.45, evRange: -6.96, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.45, evRange: -6.96, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -6.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.02, evRange: -7.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -9.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.02, evRange: -7.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -9.74} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.99, evRange: -3.01, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -3.01, raise: -4.07} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.99, evRange: -3.01, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50}, evA: {fold: -3.00, call: -3.01, raise: -4.07} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.32, evRange: -3.00, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.41, raise: -3.02} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.32, evRange: -3.00, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.48}, evA: {fold: -3.00, call: -6.41, raise: -3.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.97, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -9.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.97, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -9.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.54} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.54} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.56, evRange: 4.40, freq: {check: 0.89, bet: 0.11}, ev: {check: 4.64, bet: 3.98}, evA: {check: 4.40, bet: 4.40} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.01, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.01, bet: 0.08}, evA: {check: -1.57, bet: -1.59} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.01, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.01, bet: 0.08}, evA: {check: -1.57, bet: -1.59} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.61, evRange: -2.87, freq: {check: 0.96, bet: 0.04}, ev: {check: -2.65, bet: -1.83}, evA: {check: -2.86, bet: -2.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.61, evRange: -2.87, freq: {check: 0.96, bet: 0.04}, ev: {check: -2.65, bet: -1.83}, evA: {check: -2.86, bet: -2.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.15, evRange: 4.97, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.15}, evA: {check: 3.00, bet: 4.97} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.55, evRange: -0.03, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.04}, evA: {check: -0.03, bet: -0.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.55, evRange: -0.03, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.04}, evA: {check: -0.03, bet: -0.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.29, evRange: -2.83, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -2.33}, evA: {check: -2.82, bet: -2.85} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.29, evRange: -2.83, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -2.33}, evA: {check: -2.82, bet: -2.85} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.33, evRange: -3.02, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.02, raise: -4.51} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.33, evRange: -3.02, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.02, raise: -4.51} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.97, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.44}, evA: {fold: -3.00, call: -6.31, raise: -3.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.97, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.44}, evA: {fold: -3.00, call: -6.31, raise: -3.98} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.80} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.97} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.81, evRange: -3.04, freq: {fold: 0.54, call: 0.45, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.06, raise: -4.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.81, evRange: -3.04, freq: {fold: 0.54, call: 0.45, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.06, raise: -4.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.34, raise: -3.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -6.34, raise: -3.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.79} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.79} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.96} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 7.16, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 7.17}, evA: {fold: -3.00, call: 3.69} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 7.16, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 7.17}, evA: {fold: -3.00, call: 3.69} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -5.58, evRange: -2.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -5.59}, evA: {fold: -3.00, call: -5.90} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -5.58, evRange: -2.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -5.59}, evA: {fold: -3.00, call: -5.90} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -2.19, evRange: -2.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.19}, evA: {fold: -3.00, call: -1.97} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -2.19, evRange: -2.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.19}, evA: {fold: -3.00, call: -1.97} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 1.94, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.03}, evA: {check: 1.94, bet: 1.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 1.94, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.03}, evA: {check: 1.94, bet: 1.93} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.65, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.76, bet: -4.50}, evA: {check: -3.65, bet: -3.90} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.65, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.76, bet: -4.50}, evA: {check: -3.65, bet: -3.90} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.82, evRange: 6.94, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.82, bet: 6.82}, evA: {check: 6.96, bet: 6.94} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.35, evRange: 1.71, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.63}, evA: {check: 1.71, bet: 1.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.35, evRange: 1.71, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.63}, evA: {check: 1.71, bet: 1.71} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.43, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.48}, evA: {check: -4.42, bet: -7.32} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.43, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.48}, evA: {check: -4.42, bet: -7.32} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.99, evRange: 8.16, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.99}, evA: {check: 5.00, bet: 8.16} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.21, evRange: -3.41, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.54}, evA: {fold: -5.00, call: -3.40, raise: -4.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.21, evRange: -3.41, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.54}, evA: {fold: -5.00, call: -3.40, raise: -4.29} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.25}, evA: {fold: -5.00, call: -8.98, raise: -11.01} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.25}, evA: {fold: -5.00, call: -8.98, raise: -11.01} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.79, evRange: 12.52, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.79}, evA: {fold: -5.00, call: 9.00, raise: 12.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.82, evRange: -7.92, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.82, evRange: -7.92, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -7.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.10, evRange: -5.03, freq: {fold: 0.16, call: 0.83, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.66}, evA: {fold: -5.00, call: -5.04, raise: -5.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.10, evRange: -5.03, freq: {fold: 0.16, call: 0.83, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.66}, evA: {fold: -5.00, call: -5.04, raise: -5.22} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.89, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.86}, evA: {fold: -5.00, call: -8.92, raise: -5.21} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.89, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.86}, evA: {fold: -5.00, call: -8.92, raise: -5.21} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.83, evRange: 10.53, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83}, evA: {fold: -5.00, call: 9.00, raise: 10.53} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.19, evRange: -9.05, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.19, evRange: -9.05, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.13} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.02, evRange: -9.07, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.13} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.02, evRange: -9.07, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.13} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14}, evA: {check: -1.83, bet: -2.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14}, evA: {check: -1.83, bet: -2.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.74, evRange: 7.47, freq: {check: 0.96, bet: 0.04}, ev: {check: 6.71, bet: 7.29}, evA: {check: 7.48, bet: 7.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.86, evRange: -4.56, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.82}, evA: {check: -4.56, bet: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.86, evRange: -4.56, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.82}, evA: {check: -4.56, bet: -4.76} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.40, evRange: -0.13, freq: {check: 0.43, bet: 0.57}, ev: {check: 1.25, bet: -0.24}, evA: {check: -0.12, bet: -0.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.40, evRange: -0.13, freq: {check: 0.43, bet: 0.57}, ev: {check: 1.25, bet: -0.24}, evA: {check: -0.12, bet: -0.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.08, evRange: 7.66, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.08}, evA: {check: 5.00, bet: 7.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.78, freq: {check: 0.93, bet: 0.07}, ev: {check: -3.75, bet: -3.91}, evA: {check: -4.78, bet: -4.76} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.78, freq: {check: 0.93, bet: 0.07}, ev: {check: -3.75, bet: -3.91}, evA: {check: -4.78, bet: -4.76} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -4.98, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.65}, evA: {fold: -5.00, call: -4.97, raise: -5.13} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -4.98, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.65}, evA: {fold: -5.00, call: -4.97, raise: -5.13} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.76, evRange: 10.46, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.76}, evA: {fold: -5.00, call: 9.00, raise: 10.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.26, evRange: -5.01, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: -0.67}, evA: {fold: -5.00, call: -8.90, raise: -5.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.26, evRange: -5.01, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: -0.67}, evA: {fold: -5.00, call: -8.90, raise: -5.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.37, evRange: -9.11, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.37, evRange: -9.11, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.19} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -4.16, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.39}, evA: {fold: -5.00, call: -3.67, raise: -4.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -4.16, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.39}, evA: {fold: -5.00, call: -3.67, raise: -4.04} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.09, evRange: 10.84, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.09}, evA: {fold: -5.00, call: 9.00, raise: 10.84} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.31, evRange: -5.26, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.26}, evA: {fold: -5.00, call: -8.65, raise: -6.04} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.31, evRange: -5.26, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.26}, evA: {fold: -5.00, call: -8.65, raise: -6.04} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.66, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.66, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.95} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.30, evRange: 6.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.96, bet: 6.30}, evA: {check: 5.55, bet: 6.25} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.09, evRange: -1.83, freq: {check: 0.02, bet: 0.98}, ev: {check: 0.54, bet: -0.10}, evA: {check: -2.02, bet: -1.83} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.09, evRange: -1.83, freq: {check: 0.02, bet: 0.98}, ev: {check: 0.54, bet: -0.10}, evA: {check: -2.02, bet: -1.83} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.18, evRange: -2.24, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.37, bet: -1.17}, evA: {check: -4.98, bet: -2.23} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.18, evRange: -2.24, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.37, bet: -1.17}, evA: {check: -4.98, bet: -2.23} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 7.87, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.06}, evA: {check: 5.00, bet: 7.87} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.22, evRange: -0.47, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.25}, evA: {check: -0.45, bet: -1.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.22, evRange: -0.47, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.25}, evA: {check: -0.45, bet: -1.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.91, evRange: -5.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -4.10}, evA: {check: -4.77, bet: -5.47} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.91, evRange: -5.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -4.10}, evA: {check: -4.77, bet: -5.47} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.34, evRange: 9.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.35}, evA: {fold: -5.00, call: 9.00, raise: 9.08} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.36, evRange: -5.11, freq: {fold: 0.26, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.10}, evA: {fold: -5.00, call: -5.02, raise: -8.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.36, evRange: -5.11, freq: {fold: 0.26, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.10}, evA: {fold: -5.00, call: -5.02, raise: -8.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.21, evRange: -5.65, freq: {fold: 0.86, call: 0.01, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: 1.56}, evA: {fold: -5.00, call: -7.93, raise: -9.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.21, evRange: -5.65, freq: {fold: 0.86, call: 0.01, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: 1.56}, evA: {fold: -5.00, call: -7.93, raise: -9.87} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.84, evRange: -9.23, freq: {fold: 0.82, call: 0.18}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.84, evRange: -9.23, freq: {fold: 0.82, call: 0.18}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.59} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.02, evRange: 9.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02}, evA: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.87, evRange: -4.99, freq: {fold: 0.71, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -4.94, raise: -6.21} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.87, evRange: -4.99, freq: {fold: 0.71, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49}, evA: {fold: -5.00, call: -4.94, raise: -6.21} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.52, evRange: -4.98, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: 3.43}, evA: {fold: -5.00, call: -8.42, raise: -4.90} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.52, evRange: -4.98, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: 3.43}, evA: {fold: -5.00, call: -8.42, raise: -4.90} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.93, evRange: -9.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.93, evRange: -9.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -10.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.35} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.35} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 3.31, evRange: 1.23, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 5.31, raise: 1.90}, evA: {fold: -1.00, call: 4.42, raise: 1.15} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 3.31, evRange: 1.23, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 5.31, raise: 1.90}, evA: {fold: -1.00, call: 4.42, raise: 1.15} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -2.29, evRange: -0.65, freq: {fold: 0.00, call: 0.62, raise: 0.37}, ev: {fold: -1.00, call: -3.51, raise: -0.26}, evA: {fold: -1.00, call: -3.20, raise: -0.52} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -2.29, evRange: -0.65, freq: {fold: 0.00, call: 0.62, raise: 0.37}, ev: {fold: -1.00, call: -3.51, raise: -0.26}, evA: {fold: -1.00, call: -3.20, raise: -0.52} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.67, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 1.65, raise: -1.15}, evA: {fold: -1.00, call: 1.89, raise: -1.47} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.67, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 1.65, raise: -1.15}, evA: {fold: -1.00, call: 1.89, raise: -1.47} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: 1.61, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.24, bet: -0.30}, evA: {check: 1.61, bet: 1.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: 1.61, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.24, bet: -0.30}, evA: {check: 1.61, bet: 1.62} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.27, evRange: -1.82, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.40}, evA: {check: -1.82, bet: -1.91} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.27, evRange: -1.82, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.40}, evA: {check: -1.82, bet: -1.91} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.62, evRange: 4.32, freq: {check: 0.03, bet: 0.97}, ev: {check: 4.68, bet: 4.62}, evA: {check: 4.34, bet: 4.32} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.08, evRange: 1.98, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -1.20}, evA: {check: 1.98, bet: 1.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.08, evRange: 1.98, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -1.20}, evA: {check: 1.98, bet: 1.98} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.26, evRange: -2.02, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.47}, evA: {check: -2.01, bet: -3.67} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.26, evRange: -2.02, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.47}, evA: {check: -2.01, bet: -3.67} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.99, evRange: 5.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.99}, evA: {check: 3.00, bet: 5.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.72, evRange: -2.74, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.83}, evA: {fold: -3.00, call: -2.74, raise: -4.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.72, evRange: -2.74, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.83}, evA: {fold: -3.00, call: -2.74, raise: -4.23} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.17}, evA: {fold: -3.00, call: -6.96, raise: -10.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.17}, evA: {fold: -3.00, call: -6.96, raise: -10.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.93, evRange: 10.78, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.94}, evA: {fold: -3.00, call: 7.00, raise: 10.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.38, evRange: -7.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.38, evRange: -7.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.36} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.21} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.66, evRange: -3.21, freq: {fold: 0.23, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.24}, evA: {fold: -3.00, call: -3.26, raise: -4.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.66, evRange: -3.21, freq: {fold: 0.23, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.24}, evA: {fold: -3.00, call: -3.26, raise: -4.16} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 1.13}, evA: {fold: -3.00, call: -6.59, raise: -3.36} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 1.13}, evA: {fold: -3.00, call: -6.59, raise: -3.36} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.31, evRange: 7.48, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.31}, evA: {fold: -3.00, call: 7.00, raise: 7.48} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -5.52, evRange: -7.09, freq: {fold: 0.85, call: 0.15}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.57} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -5.52, evRange: -7.09, freq: {fold: 0.85, call: 0.15}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.57} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.12} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.12} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -2.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.26, bet: 0.23}, evA: {check: -2.04, bet: -2.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -2.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.26, bet: 0.23}, evA: {check: -2.04, bet: -2.18} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.27, evRange: 3.97, freq: {check: 0.46, bet: 0.54}, ev: {check: 5.00, bet: 3.64}, evA: {check: 3.97, bet: 3.96} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.08, evRange: -2.58, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.97, bet: -1.05}, evA: {check: -3.08, bet: -2.57} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.08, evRange: -2.58, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.97, bet: -1.05}, evA: {check: -3.08, bet: -2.57} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.74, evRange: -0.91, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.75, bet: -0.05}, evA: {check: -0.91, bet: -1.11} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.74, evRange: -0.91, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.75, bet: -0.05}, evA: {check: -0.91, bet: -1.11} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.14, evRange: 5.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.14}, evA: {check: 3.00, bet: 5.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.08, evRange: -2.89, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -2.08}, evA: {check: -3.00, bet: -2.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.08, evRange: -2.89, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -2.08}, evA: {check: -3.00, bet: -2.89} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.63, evRange: -3.00, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.00, raise: -5.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.63, evRange: -3.00, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.00, raise: -5.78} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.82, evRange: -3.17, freq: {fold: 0.96, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -5.86, raise: -7.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.82, evRange: -3.17, freq: {fold: 0.96, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.45}, evA: {fold: -3.00, call: -5.86, raise: -7.72} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.96} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.96} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.54, evRange: -3.03, freq: {fold: 0.69, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48}, evA: {fold: -3.00, call: -3.08, raise: -5.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.54, evRange: -3.03, freq: {fold: 0.69, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48}, evA: {fold: -3.00, call: -3.08, raise: -5.87} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.03, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.03}, evA: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.98, evRange: -3.02, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.38}, evA: {fold: -3.00, call: -5.90, raise: -7.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.98, evRange: -3.02, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.38}, evA: {fold: -3.00, call: -5.90, raise: -7.74} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.87, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.87, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.94} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.99} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.99} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.95, evRange: 4.49, freq: {check: 0.16, bet: 0.84}, ev: {check: 4.50, bet: 5.03}, evA: {check: 4.50, bet: 4.49} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.53, evRange: -1.36, freq: {check: 0.51, bet: 0.49}, ev: {check: -0.04, bet: -1.03}, evA: {check: -1.36, bet: -1.36} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.53, evRange: -1.36, freq: {check: 0.51, bet: 0.49}, ev: {check: -0.04, bet: -1.03}, evA: {check: -1.36, bet: -1.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.89, evRange: -1.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.82, bet: -1.89}, evA: {check: -1.97, bet: -1.66} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.89, evRange: -1.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.82, bet: -1.89}, evA: {check: -1.97, bet: -1.66} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.74, evRange: 5.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.74}, evA: {check: 3.00, bet: 5.21} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.18, evRange: -0.72, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.43}, evA: {check: -0.72, bet: -0.73} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.18, evRange: -0.72, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.43}, evA: {check: -0.72, bet: -0.73} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.08, evRange: -3.00, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.46}, evA: {check: -3.00, bet: -3.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.08, evRange: -3.00, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.46}, evA: {check: -3.00, bet: -3.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01}, evA: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.44, evRange: -3.00, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.01, raise: -3.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.44, evRange: -3.00, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49}, evA: {fold: -3.00, call: -3.01, raise: -3.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.95, evRange: -1.26, freq: {fold: 0.09, call: 0.00, raise: 0.91}, ev: {fold: -3.00, call: -5.25, raise: 2.46}, evA: {fold: -3.00, call: -6.64, raise: -1.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.95, evRange: -1.26, freq: {fold: 0.09, call: 0.00, raise: 0.91}, ev: {fold: -3.00, call: -5.25, raise: 2.46}, evA: {fold: -3.00, call: -6.64, raise: -1.07} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.96, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.37} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.96, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -10.37} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.95} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -10.95} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.44, evRange: 7.71, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.44}, evA: {fold: -3.00, call: 7.00, raise: 7.71} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.57, evRange: -3.00, freq: {fold: 0.70, call: 0.30, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: -3.00, raise: -3.54} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.57, evRange: -3.00, freq: {fold: 0.70, call: 0.30, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13}, evA: {fold: -3.00, call: -3.00, raise: -3.54} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.74, evRange: -3.01, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 0.56}, evA: {fold: -3.00, call: -6.63, raise: -3.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.74, evRange: -3.01, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 0.56}, evA: {fold: -3.00, call: -6.63, raise: -3.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00}, evA: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.91, evRange: -7.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.05} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.91, evRange: -7.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75}, evA: {fold: -7.00, call: -7.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -9.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25}, evA: {fold: -7.00, call: -9.94} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 4.36, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 4.36}, evA: {fold: -3.00, call: 3.91} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 4.36, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 4.36}, evA: {fold: -3.00, call: 3.91} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -4.85, evRange: -1.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.85}, evA: {fold: -3.00, call: -5.20} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -4.85, evRange: -1.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.85}, evA: {fold: -3.00, call: -5.20} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 3.34, evRange: -2.46, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 3.36}, evA: {fold: -3.00, call: 2.55} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 3.34, evRange: -2.46, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 3.36}, evA: {fold: -3.00, call: 2.55} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 2.34, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.26, bet: -0.12}, evA: {check: 2.33, bet: 2.35} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 2.34, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.26, bet: -0.12}, evA: {check: 2.33, bet: 2.35} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.11}, evA: {check: -3.85, bet: -5.16} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.11}, evA: {check: -3.85, bet: -5.16} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.93, evRange: 7.34, freq: {check: 0.02, bet: 0.98}, ev: {check: 6.94, bet: 6.93}, evA: {check: 7.36, bet: 7.34} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.29, evRange: 3.34, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74}, evA: {check: 3.34, bet: 3.34} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.29, evRange: 3.34, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74}, evA: {check: 3.34, bet: 3.34} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.33, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48}, evA: {check: -3.33, bet: -4.29} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.33, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48}, evA: {check: -3.33, bet: -4.29} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 6.99, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 5.00, bet: 6.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.23, evRange: -1.34, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26}, evA: {fold: -5.00, call: -1.33, raise: -1.97} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.23, evRange: -1.34, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26}, evA: {fold: -5.00, call: -1.33, raise: -1.97} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.50}, evA: {fold: -5.00, call: -8.96, raise: -12.89} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.50}, evA: {fold: -5.00, call: -8.96, raise: -12.89} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.99, evRange: 12.94, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.01}, evA: {fold: -5.00, call: 9.00, raise: 12.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.23, evRange: -6.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -6.93} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.23, evRange: -6.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -6.93} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.03} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.03} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.81, evRange: -5.16, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.57}, evA: {fold: -5.00, call: -5.17, raise: -5.68} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.81, evRange: -5.16, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.57}, evA: {fold: -5.00, call: -5.17, raise: -5.68} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.96, evRange: -5.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -1.07}, evA: {fold: -5.00, call: -8.89, raise: -5.81} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.96, evRange: -5.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -1.07}, evA: {fold: -5.00, call: -8.89, raise: -5.81} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.83, evRange: 10.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83}, evA: {fold: -5.00, call: 9.00, raise: 10.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.91, evRange: -9.26, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.91, evRange: -9.26, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.62} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.23} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.23} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.49, evRange: -2.63, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.26, bet: -0.83}, evA: {check: -2.61, bet: -2.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.49, evRange: -2.63, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.26, bet: -0.83}, evA: {check: -2.61, bet: -2.63} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.97, evRange: 7.90, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.59, bet: 7.98}, evA: {check: 7.88, bet: 7.90} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.82, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.19}, evA: {check: -4.83, bet: -4.81} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.82, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.19}, evA: {check: -4.83, bet: -4.81} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: 1.68, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28}, evA: {check: 1.71, bet: 1.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: 1.68, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28}, evA: {check: 1.71, bet: 1.66} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 8.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00}, evA: {check: 5.00, bet: 8.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.45}, evA: {check: -4.39, bet: -7.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.45}, evA: {check: -4.39, bet: -7.11} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.14, evRange: -4.97, freq: {fold: 0.02, call: 0.98, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.36}, evA: {fold: -5.00, call: -4.97, raise: -5.33} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.14, evRange: -4.97, freq: {fold: 0.02, call: 0.98, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.36}, evA: {fold: -5.00, call: -4.97, raise: -5.33} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.15, evRange: 11.15, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.16}, evA: {fold: -5.00, call: 9.00, raise: 11.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.52}, evA: {fold: -5.00, call: -9.00, raise: -6.74} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.52}, evA: {fold: -5.00, call: -9.00, raise: -6.74} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.39, evRange: -8.61, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.29} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.39, evRange: -8.61, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -8.29} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.03, evRange: -9.13, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.03, evRange: -9.13, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.49} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.46, evRange: -5.00, freq: {fold: 0.38, call: 0.52, raise: 0.10}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: -4.99, raise: -5.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.46, evRange: -5.00, freq: {fold: 0.38, call: 0.52, raise: 0.10}, ev: {fold: -5.00, call: 2.25, raise: 2.61}, evA: {fold: -5.00, call: -4.99, raise: -5.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.79, evRange: 10.55, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.79}, evA: {fold: -5.00, call: 9.00, raise: 10.55} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.40, evRange: -5.01, freq: {fold: 0.62, call: 0.00, raise: 0.38}, ev: {fold: -5.00, call: -6.75, raise: -0.85}, evA: {fold: -5.00, call: -8.95, raise: -5.03} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.40, evRange: -5.01, freq: {fold: 0.62, call: 0.00, raise: 0.38}, ev: {fold: -5.00, call: -6.75, raise: -0.85}, evA: {fold: -5.00, call: -8.95, raise: -5.03} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.16, evRange: -9.01, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.16, evRange: -9.01, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.03} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.46} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.51, evRange: 7.12, freq: {check: 0.45, bet: 0.55}, ev: {check: 7.92, bet: 7.17}, evA: {check: 7.12, bet: 7.12} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.22, evRange: -4.00, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.40, bet: -1.11}, evA: {check: -4.00, bet: -4.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.22, evRange: -4.00, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.40, bet: -1.11}, evA: {check: -4.00, bet: -4.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.35, evRange: -4.99, freq: {check: 0.46, bet: 0.54}, ev: {check: -1.43, bet: -3.13}, evA: {check: -4.97, bet: -5.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.35, evRange: -4.99, freq: {check: 0.46, bet: 0.54}, ev: {check: -1.43, bet: -3.13}, evA: {check: -4.97, bet: -5.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.03, evRange: 6.46, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 9.03}, evA: {check: 5.00, bet: 6.46} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.13, evRange: -1.33, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.31}, evA: {check: -1.32, bet: -1.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.13, evRange: -1.33, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.31}, evA: {check: -1.32, bet: -1.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.52, evRange: -1.32, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.52}, evA: {check: -4.89, bet: -1.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.52, evRange: -1.32, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.52}, evA: {check: -4.89, bet: -1.29} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.16, evRange: 9.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.16}, evA: {fold: -5.00, call: 9.00, raise: 9.22} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.93, evRange: -5.00, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.36}, evA: {fold: -5.00, call: -5.00, raise: -6.17} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.93, evRange: -5.00, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.36}, evA: {fold: -5.00, call: -5.00, raise: -6.17} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.66, evRange: -4.96, freq: {fold: 0.13, call: 0.00, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: 2.71}, evA: {fold: -5.00, call: -8.48, raise: -4.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.66, evRange: -4.96, freq: {fold: 0.13, call: 0.00, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: 2.71}, evA: {fold: -5.00, call: -8.48, raise: -4.94} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.14, evRange: -9.01, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.10} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.14, evRange: -9.01, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -9.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -11.97} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01}, evA: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.21, evRange: -5.01, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -5.01, raise: -6.28} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.21, evRange: -5.01, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50}, evA: {fold: -5.00, call: -5.01, raise: -6.28} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -4.98, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 3.45}, evA: {fold: -5.00, call: -8.44, raise: -4.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -4.98, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 3.45}, evA: {fold: -5.00, call: -8.44, raise: -4.92} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00}, evA: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.95, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.66} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.95, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25}, evA: {fold: -9.00, call: -11.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75}, evA: {fold: -9.00, call: -12.67} },
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
