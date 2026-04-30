// Recursive Leduc Tree Structure
// Each node contains its children, making navigation simple

(function() {
  window.LEDUC_TREE = {
  j: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.40, evRange: 1.40, freq: {check: 0.24, bet: 0.76}, ev: {check: 2.54, bet: 1.04} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.40, evRange: 1.40, freq: {check: 0.24, bet: 0.76}, ev: {check: 2.54, bet: 1.04} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.55, evRange: -0.55, freq: {check: 0.30, bet: 0.70}, ev: {check: -0.78, bet: -0.45} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.55, evRange: -0.55, freq: {check: 0.30, bet: 0.70}, ev: {check: -0.78, bet: -0.45} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.90, evRange: -0.90, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.90, bet: -0.87} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.90, evRange: -0.90, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.90, bet: -0.87} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.74, evRange: 1.49, freq: {check: 0.01, bet: 0.99}, ev: {check: -0.03, bet: 1.11} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.74, evRange: 1.49, freq: {check: 0.01, bet: 0.99}, ev: {check: -0.03, bet: 1.11} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.26, evRange: -0.08, freq: {check: 0.14, bet: 0.86}, ev: {check: -0.81, bet: -0.29} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.26, evRange: -0.08, freq: {check: 0.14, bet: 0.86}, ev: {check: -0.81, bet: -0.29} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.34, evRange: -0.90, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.81, bet: -0.96} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.34, evRange: -0.90, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.81, bet: -0.96} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: -0.43, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.23, bet: -0.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: -0.43, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.23, bet: -0.71} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.76, evRange: -0.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.93} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.76, evRange: -0.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.93} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.06, evRange: 1.06, freq: {check: 0.99, bet: 0.01}, ev: {check: 1.06, bet: 1.31} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.21, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: -1.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.21, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: -1.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.01, evRange: 1.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.59} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.59} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.74} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.74} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.51, evRange: 5.13, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.51} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.41, evRange: -7.98, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.41, evRange: -7.98, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.02, evRange: -5.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.02, evRange: -5.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.68, evRange: -1.19, freq: {fold: 0.86, call: 0.13, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.31} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.68, evRange: -1.19, freq: {fold: 0.86, call: 0.13, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.31} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.39} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.39} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.32, evRange: 5.08, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.86, evRange: -5.63, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.86, evRange: -5.63, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.14, evRange: 0.69, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.13, bet: -1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.14, evRange: 0.69, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.13, bet: -1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.23, evRange: 1.31, freq: {check: 0.46, bet: 0.54}, ev: {check: 1.25, bet: 3.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.37, evRange: -0.26, freq: {check: 0.78, bet: 0.22}, ev: {check: -0.77, bet: -3.44} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.37, evRange: -0.26, freq: {check: 0.78, bet: 0.22}, ev: {check: -0.77, bet: -3.44} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.21, evRange: 0.70, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.25, bet: -0.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.21, evRange: 0.70, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.25, bet: -0.80} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.80, evRange: 1.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.47, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.68} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.47, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.68} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.12, evRange: -0.87, freq: {fold: 0.61, call: 0.39, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.12, evRange: -0.87, freq: {fold: 0.61, call: 0.39, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.40, evRange: 5.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.56, evRange: -5.71, freq: {fold: 0.80, call: 0.20}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.56, evRange: -5.71, freq: {fold: 0.80, call: 0.20}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.16, evRange: 2.04, freq: {fold: 0.04, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.16, evRange: 2.04, freq: {fold: 0.04, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.49} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.63, evRange: 5.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.11, evRange: -1.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.11, evRange: -1.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.20} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.90, evRange: -4.71, freq: {fold: 0.19, call: 0.81}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.90, evRange: -4.71, freq: {fold: 0.19, call: 0.81}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.43, evRange: 1.52, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.40, bet: 2.43} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.07, evRange: 0.92, freq: {check: 0.63, bet: 0.37}, ev: {check: -0.72, bet: -1.65} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.07, evRange: 0.92, freq: {check: 0.63, bet: 0.37}, ev: {check: -0.72, bet: -1.65} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.76, bet: -2.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.76, bet: -2.73} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.73, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.43, evRange: 0.90, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.43, evRange: 0.90, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.78, evRange: -0.32, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.78, evRange: -0.32, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.52} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.04, evRange: 8.47, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -1.00, call: 5.00, raise: 7.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.24, evRange: 0.56, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.24, evRange: 0.56, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.99, evRange: 8.99, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: -1.90, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: -1.90, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.05, evRange: -5.05, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.05, evRange: -5.05, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.24, evRange: 7.68, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.24} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.56, evRange: -1.07, freq: {fold: 0.30, call: 0.69, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 0.50} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.56, evRange: -1.07, freq: {fold: 0.30, call: 0.69, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 0.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.03, evRange: -1.04, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -1.00, call: -3.75, raise: -5.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.03, evRange: -1.04, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -1.00, call: -3.75, raise: -5.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: 0.28, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: 0.28, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.22, evRange: -5.18, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.22, evRange: -5.18, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.34, evRange: 1.27, freq: {fold: 0.00, call: 0.37, raise: 0.63}, ev: {fold: -1.00, call: -0.76, raise: 1.49} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.34, evRange: 1.27, freq: {fold: 0.00, call: 0.37, raise: 0.63}, ev: {fold: -1.00, call: -0.76, raise: 1.49} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.21, evRange: -0.76, freq: {fold: 0.01, call: 0.86, raise: 0.13}, ev: {fold: -1.00, call: -2.78, raise: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.21, evRange: -0.76, freq: {fold: 0.01, call: 0.86, raise: 0.13}, ev: {fold: -1.00, call: -2.78, raise: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.99, evRange: -1.02, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 3.71, raise: -0.68} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.99, evRange: -1.02, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 3.71, raise: -0.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.80, evRange: 2.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.80, bet: -0.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.80, evRange: 2.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.80, bet: -0.18} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.68, evRange: -2.62, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.42} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.68, evRange: -2.62, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.42} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.64, evRange: 4.71, freq: {check: 0.30, bet: 0.70}, ev: {check: 4.74, bet: 4.60} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.43, evRange: 2.44, freq: {check: 0.83, bet: 0.17}, ev: {check: 0.75, bet: -1.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.43, evRange: 2.44, freq: {check: 0.83, bet: 0.17}, ev: {check: 0.75, bet: -1.18} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.46, evRange: -1.30, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -4.54} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.46, evRange: -1.30, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -4.54} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.06, evRange: 4.12, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.06} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: 3.06, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: 3.06, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.06, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.48} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.06, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.48} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.01, evRange: 8.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.71, evRange: -2.79, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.71, evRange: -2.79, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.70, evRange: -3.59, freq: {fold: 0.22, call: 0.78, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.70, evRange: -3.59, freq: {fold: 0.22, call: 0.78, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.40} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.97, evRange: -3.05, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 1.95} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.97, evRange: -3.05, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 1.95} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.13, evRange: 7.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.13} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.41, evRange: -7.18, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.41, evRange: -7.18, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.37, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: 0.02, bet: -0.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.37, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: 0.02, bet: -0.40} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.55, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.44, bet: 4.32} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.93, evRange: -2.53, freq: {check: 0.04, bet: 0.96}, ev: {check: -2.56, bet: -1.90} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.93, evRange: -2.53, freq: {check: 0.04, bet: 0.96}, ev: {check: -2.56, bet: -1.90} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.43, evRange: 0.37, freq: {check: 0.75, bet: 0.25}, ev: {check: 0.75, bet: -0.52} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.43, evRange: 0.37, freq: {check: 0.75, bet: 0.25}, ev: {check: 0.75, bet: -0.52} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.63, evRange: 5.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.43, evRange: -2.67, freq: {check: 0.55, bet: 0.45}, ev: {check: -2.25, bet: -2.65} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.43, evRange: -2.67, freq: {check: 0.55, bet: 0.45}, ev: {check: -2.25, bet: -2.65} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.32, evRange: -3.00, freq: {fold: 0.44, call: 0.56, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.53} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.32, evRange: -3.00, freq: {fold: 0.44, call: 0.56, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.53} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.12, evRange: 7.11, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.12} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.39, evRange: -3.08, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.39, evRange: -3.08, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.21} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.75, evRange: -6.99, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.75, evRange: -6.99, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.04, evRange: -7.10, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.04, evRange: -7.10, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.97, evRange: -3.02, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.97, evRange: -3.02, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.39, evRange: -3.01, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.39, evRange: -3.01, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.95, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.95, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.54, evRange: 4.42, freq: {check: 0.85, bet: 0.15}, ev: {check: 4.64, bet: 4.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.00, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.00, bet: 0.06} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.00, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.00, bet: 0.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.59, evRange: -2.87, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.64, bet: -1.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.59, evRange: -2.87, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.64, bet: -1.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.19, evRange: 5.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.19} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.53, evRange: 0.02, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.75, bet: -0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.53, evRange: 0.02, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.75, bet: -0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.31, evRange: -2.84, freq: {check: 0.48, bet: 0.52}, ev: {check: -2.25, bet: -2.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.31, evRange: -2.84, freq: {check: 0.48, bet: 0.52}, ev: {check: -2.25, bet: -2.37} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.05, evRange: 7.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.30, evRange: -3.03, freq: {fold: 0.43, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.30, evRange: -3.03, freq: {fold: 0.43, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.29} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.78, evRange: -7.08, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.78, evRange: -7.08, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.03, evRange: 7.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.78, evRange: -3.05, freq: {fold: 0.53, call: 0.46, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.78, evRange: -3.05, freq: {fold: 0.53, call: 0.46, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.93, evRange: -3.02, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.93, evRange: -3.02, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.86, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.86, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 2.13, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.38} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 2.13, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.38} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.20, evRange: -2.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.10} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.20, evRange: -2.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.10} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.57, evRange: -2.26, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.66} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.57, evRange: -2.26, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.66} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: 1.95, freq: {check: 0.95, bet: 0.05}, ev: {check: 0.26, bet: -0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: 1.95, freq: {check: 0.95, bet: 0.05}, ev: {check: 0.26, bet: -0.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.78, evRange: -3.66, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.77, bet: -4.57} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.78, evRange: -3.66, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.77, bet: -4.57} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.85, evRange: 6.97, freq: {check: 0.05, bet: 0.95}, ev: {check: 6.86, bet: 6.85} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.33, evRange: 1.74, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.64} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.33, evRange: 1.74, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.64} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -4.42, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -4.42, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 8.13, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.18, evRange: -3.34, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.18, evRange: -3.34, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.57} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.57} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.87, evRange: 12.61, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.87} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.15, evRange: -6.27, freq: {fold: 0.09, call: 0.91}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.15, evRange: -6.27, freq: {fold: 0.09, call: 0.91}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.16, evRange: -5.03, freq: {fold: 0.15, call: 0.83, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.16, evRange: -5.03, freq: {fold: 0.15, call: 0.83, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.88, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.67} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.88, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.67} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.82, evRange: 10.39, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.45, evRange: -9.01, freq: {fold: 0.63, call: 0.37}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.45, evRange: -9.01, freq: {fold: 0.63, call: 0.37}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.03, evRange: -9.12, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.03, evRange: -9.12, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: -1.85, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: -1.85, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.76, evRange: 7.47, freq: {check: 0.93, bet: 0.07}, ev: {check: 6.72, bet: 7.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.87, evRange: -4.57, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.87, bet: -3.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.87, evRange: -4.57, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.87, bet: -3.83} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.44, evRange: -0.15, freq: {check: 0.44, bet: 0.56}, ev: {check: 1.25, bet: -0.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.44, evRange: -0.15, freq: {check: 0.44, bet: 0.56}, ev: {check: 1.25, bet: -0.19} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.66, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.77, freq: {check: 0.92, bet: 0.08}, ev: {check: -3.75, bet: -3.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.77, freq: {check: 0.92, bet: 0.08}, ev: {check: -3.75, bet: -3.84} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.02, evRange: -4.97, freq: {fold: 0.31, call: 0.67, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.02, evRange: -4.97, freq: {fold: 0.31, call: 0.67, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.65} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.77, evRange: 10.46, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.77} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.35, evRange: -5.01, freq: {fold: 0.85, call: 0.00, raise: 0.15}, ev: {fold: -5.00, call: -6.75, raise: -0.70} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.35, evRange: -5.01, freq: {fold: 0.85, call: 0.00, raise: 0.15}, ev: {fold: -5.00, call: -6.75, raise: -0.70} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.34, evRange: -9.18, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.34, evRange: -9.18, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -4.26, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -4.26, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.45} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.16, evRange: 10.89, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.34, evRange: -5.29, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.34, evRange: -5.29, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.61, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.61, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.05, evRange: -9.18, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.05, evRange: -9.18, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.30, evRange: 6.28, freq: {check: 0.00, bet: 1.00}, ev: {check: 6.00, bet: 6.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.04, evRange: -1.84, freq: {check: 0.05, bet: 0.95}, ev: {check: 0.52, bet: -0.07} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.04, evRange: -1.84, freq: {check: 0.05, bet: 0.95}, ev: {check: 0.52, bet: -0.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.27, evRange: -2.34, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.36, bet: -1.22} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.27, evRange: -2.34, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.36, bet: -1.22} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.41, evRange: 8.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.41} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.15, evRange: -0.32, freq: {check: 0.95, bet: 0.05}, ev: {check: 1.25, bet: -0.53} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.15, evRange: -0.32, freq: {check: 0.95, bet: 0.05}, ev: {check: 1.25, bet: -0.53} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.03, evRange: -5.07, freq: {check: 0.56, bet: 0.44}, ev: {check: -3.75, bet: -4.39} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.03, evRange: -5.07, freq: {check: 0.56, bet: 0.44}, ev: {check: -3.75, bet: -4.39} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.50, evRange: 9.25, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -5.00, call: 9.00, raise: 9.52} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.39, evRange: -5.18, freq: {fold: 0.26, call: 0.69, raise: 0.05}, ev: {fold: -5.00, call: 2.25, raise: 2.91} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.39, evRange: -5.18, freq: {fold: 0.26, call: 0.69, raise: 0.05}, ev: {fold: -5.00, call: 2.25, raise: 2.91} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.93, evRange: -5.94, freq: {fold: 0.78, call: 0.02, raise: 0.20}, ev: {fold: -5.00, call: -6.75, raise: 0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.93, evRange: -5.94, freq: {fold: 0.78, call: 0.02, raise: 0.20}, ev: {fold: -5.00, call: -6.75, raise: 0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -5.81, evRange: -8.89, freq: {fold: 0.74, call: 0.26}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -5.81, evRange: -8.89, freq: {fold: 0.74, call: 0.26}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.03, evRange: 9.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.78, evRange: -4.98, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.78, evRange: -4.98, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.60, evRange: -4.97, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: 3.36} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.60, evRange: -4.97, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: 3.36} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.85, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.85, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.54, evRange: 1.25, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: -1.28, raise: 1.87} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.54, evRange: 1.25, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: -1.28, raise: 1.87} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.24, evRange: -0.68, freq: {fold: 0.01, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: -2.46, raise: -0.22} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.24, evRange: -0.68, freq: {fold: 0.01, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: -2.46, raise: -0.22} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.01, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 4.01, raise: -1.10} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.01, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 4.01, raise: -1.10} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.23, evRange: 1.61, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.23, bet: -0.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.23, evRange: 1.61, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.23, bet: -0.22} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.28, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.26, bet: -3.52} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.28, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.26, bet: -3.52} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.67, evRange: 4.34, freq: {check: 0.07, bet: 0.93}, ev: {check: 4.70, bet: 4.66} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.08, evRange: 1.94, freq: {check: 0.58, bet: 0.42}, ev: {check: 0.75, bet: -1.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.08, evRange: 1.94, freq: {check: 0.58, bet: 0.42}, ev: {check: 0.75, bet: -1.23} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.27, evRange: -2.07, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -4.45} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.27, evRange: -2.07, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -4.45} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.98, evRange: 5.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.98} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.69, evRange: -2.65, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.69, evRange: -2.65, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.46} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.46} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.99, evRange: 10.84, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.69, evRange: -6.52, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.69, evRange: -6.52, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.79, evRange: -3.37, freq: {fold: 0.20, call: 0.79, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.43} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.79, evRange: -3.37, freq: {fold: 0.20, call: 0.79, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.43} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.93, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.06} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.93, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.06} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.11, evRange: 7.12, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.53, evRange: -7.06, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.53, evRange: -7.06, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.21, evRange: -2.03, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.22, bet: 0.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.21, evRange: -2.03, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.22, bet: 0.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.26, evRange: 4.03, freq: {check: 0.44, bet: 0.56}, ev: {check: 4.98, bet: 3.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.25, evRange: -2.67, freq: {check: 0.06, bet: 0.94}, ev: {check: -2.94, bet: -1.13} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.25, evRange: -2.67, freq: {check: 0.06, bet: 0.94}, ev: {check: -2.94, bet: -1.13} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.71, evRange: -0.84, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.75, bet: -0.08} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.71, evRange: -0.84, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.75, bet: -0.08} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.18, evRange: 5.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.14, evRange: -2.89, freq: {check: 0.05, bet: 0.95}, ev: {check: -2.25, bet: -2.13} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.14, evRange: -2.89, freq: {check: 0.05, bet: 0.95}, ev: {check: -2.25, bet: -2.13} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.59, evRange: -3.01, freq: {fold: 0.49, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.59, evRange: -3.01, freq: {fold: 0.49, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.02, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.79, evRange: -3.18, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -5.25, raise: 2.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.79, evRange: -3.18, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -5.25, raise: 2.41} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.91, evRange: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.91, evRange: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.48, evRange: -3.07, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.48, evRange: -3.07, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.05, evRange: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.93, evRange: -3.06, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.26} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.93, evRange: -3.06, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.26} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.74, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.74, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.89, evRange: 4.48, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.48, bet: 4.95} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.51, evRange: -1.32, freq: {check: 0.48, bet: 0.52}, ev: {check: -0.03, bet: -0.95} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.51, evRange: -1.32, freq: {check: 0.48, bet: 0.52}, ev: {check: -0.03, bet: -0.95} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.83, evRange: -1.64, freq: {check: 0.02, bet: 0.98}, ev: {check: -1.96, bet: -1.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.83, evRange: -1.64, freq: {check: 0.02, bet: 0.98}, ev: {check: -1.96, bet: -1.83} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.31, evRange: 5.27, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.31} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.94, evRange: -0.68, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -3.82} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.94, evRange: -0.68, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -3.82} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -3.01, freq: {check: 0.64, bet: 0.36}, ev: {check: -2.25, bet: -4.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -3.01, freq: {check: 0.64, bet: 0.36}, ev: {check: -2.25, bet: -4.20} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.02, evRange: 7.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.41, evRange: -3.01, freq: {fold: 0.46, call: 0.52, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.41, evRange: -3.01, freq: {fold: 0.46, call: 0.52, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.26, evRange: -1.56, freq: {fold: 0.20, call: 0.01, raise: 0.79}, ev: {fold: -3.00, call: -5.25, raise: 2.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.26, evRange: -1.56, freq: {fold: 0.20, call: 0.01, raise: 0.79}, ev: {fold: -3.00, call: -5.25, raise: 2.40} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.89, evRange: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.89, evRange: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.47, evRange: 7.75, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.47} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.58, evRange: -3.01, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.12} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.58, evRange: -3.01, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.12} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.85, evRange: -3.04, freq: {fold: 0.67, call: 0.00, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: 0.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.85, evRange: -3.04, freq: {fold: 0.67, call: 0.00, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: 0.46} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.80, evRange: -7.02, freq: {fold: 0.77, call: 0.23}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.80, evRange: -7.02, freq: {fold: 0.77, call: 0.23}, ev: {fold: -7.00, call: 2.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.44, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.61} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.44, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.61} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.83, evRange: -1.57, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.03} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.83, evRange: -1.57, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.03} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.16, evRange: -2.47, freq: {fold: 0.01, call: 0.99}, ev: {fold: -3.00, call: 5.53} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.16, evRange: -2.47, freq: {fold: 0.01, call: 0.99}, ev: {fold: -3.00, call: 5.53} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.26, evRange: 2.34, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.28, bet: -0.21} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.26, evRange: 2.34, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.28, bet: -0.21} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.78, evRange: -3.87, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.77, bet: -5.07} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.78, evRange: -3.87, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.77, bet: -5.07} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.91, evRange: 7.33, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.91, bet: 6.91} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.31, evRange: 3.27, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.73} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.31, evRange: 3.27, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.73} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.77, evRange: -3.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.77, evRange: -3.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 7.04, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.22, evRange: -1.23, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.22, evRange: -1.23, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.28} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.98, evRange: 12.88, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.23, evRange: -5.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.23, evRange: -5.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.77, evRange: -5.30, freq: {fold: 0.07, call: 0.93, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.32} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.77, evRange: -5.30, freq: {fold: 0.07, call: 0.93, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.32} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.98, evRange: -5.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.98, evRange: -5.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.06, evRange: 10.88, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.54, evRange: -9.47, freq: {fold: 0.47, call: 0.53}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.54, evRange: -9.47, freq: {fold: 0.47, call: 0.53}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.40, evRange: -2.63, freq: {check: 0.34, bet: 0.66}, ev: {check: 0.28, bet: -0.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.40, evRange: -2.63, freq: {check: 0.34, bet: 0.66}, ev: {check: 0.28, bet: -0.74} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.84, evRange: 7.94, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.61, bet: 7.86} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.81, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.78, bet: -4.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.81, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.78, bet: -4.07} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: 1.52, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: 1.52, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 8.12, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.77, evRange: -4.45, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.77, evRange: -4.45, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.41} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.04, evRange: -4.95, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.42} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.04, evRange: -4.95, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.42} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.26, evRange: 11.19, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.26} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.98, evRange: -5.02, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.98, evRange: -5.02, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.26, evRange: -8.47, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.26, evRange: -8.47, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.06, evRange: -9.27, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.06, evRange: -9.27, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.45, evRange: -4.99, freq: {fold: 0.38, call: 0.51, raise: 0.12}, ev: {fold: -5.00, call: 2.25, raise: 2.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.45, evRange: -4.99, freq: {fold: 0.38, call: 0.51, raise: 0.12}, ev: {fold: -5.00, call: 2.25, raise: 2.61} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.80, evRange: 10.56, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.57, evRange: -5.02, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -5.00, call: -6.75, raise: -0.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.57, evRange: -5.02, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -5.00, call: -6.75, raise: -0.87} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.14, evRange: -9.02, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.14, evRange: -9.02, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.49, evRange: 7.13, freq: {check: 0.44, bet: 0.56}, ev: {check: 7.92, bet: 7.14} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.21, evRange: -4.01, freq: {check: 0.85, bet: 0.15}, ev: {check: -2.42, bet: -1.04} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.21, evRange: -4.01, freq: {check: 0.85, bet: 0.15}, ev: {check: -2.42, bet: -1.04} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.53, evRange: -4.99, freq: {check: 0.47, bet: 0.53}, ev: {check: -1.88, bet: -3.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.53, evRange: -4.99, freq: {check: 0.47, bet: 0.53}, ev: {check: -1.88, bet: -3.11} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.58, evRange: 6.42, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 8.58} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.86, evRange: -1.32, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -3.64} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.86, evRange: -1.32, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -3.64} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.09, evRange: -1.31, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.09, evRange: -1.31, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.16, evRange: 9.21, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.96, evRange: -5.01, freq: {fold: 0.72, call: 0.27, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.38} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.96, evRange: -5.01, freq: {fold: 0.72, call: 0.27, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.38} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 0.82, evRange: -4.93, freq: {fold: 0.25, call: 0.00, raise: 0.75}, ev: {fold: -5.00, call: -6.75, raise: 2.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 0.82, evRange: -4.93, freq: {fold: 0.25, call: 0.00, raise: 0.75}, ev: {fold: -5.00, call: -6.75, raise: 2.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.20, evRange: -9.02, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.20, evRange: -9.02, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -9.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -9.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.02, evRange: 9.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.19, evRange: -5.02, freq: {fold: 0.48, call: 0.51, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.19, evRange: -5.02, freq: {fold: 0.48, call: 0.51, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.75, evRange: -4.97, freq: {fold: 0.73, call: 0.00, raise: 0.27}, ev: {fold: -5.00, call: -6.75, raise: 3.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.75, evRange: -4.97, freq: {fold: 0.73, call: 0.00, raise: 0.27}, ev: {fold: -5.00, call: -6.75, raise: 3.41} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.91, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.91, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.40, evRange: 1.40, freq: {check: 0.24, bet: 0.76}, ev: {check: 2.54, bet: 1.04} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.40, evRange: 1.40, freq: {check: 0.24, bet: 0.76}, ev: {check: 2.54, bet: 1.04} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.55, evRange: -0.55, freq: {check: 0.30, bet: 0.70}, ev: {check: -0.78, bet: -0.45} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.55, evRange: -0.55, freq: {check: 0.30, bet: 0.70}, ev: {check: -0.78, bet: -0.45} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.90, evRange: -0.90, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.90, bet: -0.87} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.90, evRange: -0.90, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.90, bet: -0.87} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.74, evRange: 1.49, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.48, bet: 1.11} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.74, evRange: 1.49, freq: {check: 0.01, bet: 0.99}, ev: {check: 0.48, bet: 1.11} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.26, evRange: -0.08, freq: {check: 0.14, bet: 0.86}, ev: {check: 0.20, bet: -0.29} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.26, evRange: -0.08, freq: {check: 0.14, bet: 0.86}, ev: {check: 0.20, bet: -0.29} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.34, evRange: -0.90, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.38, bet: -0.96} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.34, evRange: -0.90, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.38, bet: -0.96} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: -0.43, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.23, bet: -0.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: -0.43, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.23, bet: -0.71} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.76, evRange: -0.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.93} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.76, evRange: -0.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.93} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.06, evRange: 1.06, freq: {check: 0.99, bet: 0.01}, ev: {check: 1.06, bet: 1.31} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.21, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: -1.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.21, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: -1.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.01, evRange: 1.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.59} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.59} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.74} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.74} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.51, evRange: 5.13, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.51} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.41, evRange: -7.98, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.41, evRange: -7.98, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.02, evRange: -5.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.02, evRange: -5.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.68, evRange: -1.19, freq: {fold: 0.86, call: 0.13, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.31} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.68, evRange: -1.19, freq: {fold: 0.86, call: 0.13, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.31} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.39} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.39} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.32, evRange: 5.08, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.86, evRange: -5.63, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.86, evRange: -5.63, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.14, evRange: 0.69, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.13, bet: -1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.14, evRange: 0.69, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.13, bet: -1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.23, evRange: 1.31, freq: {check: 0.46, bet: 0.54}, ev: {check: 1.25, bet: 3.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.37, evRange: -0.26, freq: {check: 0.78, bet: 0.22}, ev: {check: -0.77, bet: -3.44} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.37, evRange: -0.26, freq: {check: 0.78, bet: 0.22}, ev: {check: -0.77, bet: -3.44} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.21, evRange: 0.70, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.25, bet: -0.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.21, evRange: 0.70, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.25, bet: -0.80} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.80, evRange: 1.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.47, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.68} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.47, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.68} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.12, evRange: -0.87, freq: {fold: 0.61, call: 0.39, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.12, evRange: -0.87, freq: {fold: 0.61, call: 0.39, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.40, evRange: 5.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.56, evRange: -5.71, freq: {fold: 0.80, call: 0.20}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.56, evRange: -5.71, freq: {fold: 0.80, call: 0.20}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.16, evRange: 2.04, freq: {fold: 0.04, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.16, evRange: 2.04, freq: {fold: 0.04, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.49} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.63, evRange: 5.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.11, evRange: -1.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.11, evRange: -1.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.20} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.90, evRange: -4.71, freq: {fold: 0.19, call: 0.81}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.90, evRange: -4.71, freq: {fold: 0.19, call: 0.81}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.43, evRange: 1.52, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.40, bet: 2.43} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.07, evRange: 0.92, freq: {check: 0.63, bet: 0.37}, ev: {check: -0.72, bet: -1.65} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.07, evRange: 0.92, freq: {check: 0.63, bet: 0.37}, ev: {check: -0.72, bet: -1.65} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.76, bet: -2.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.76, bet: -2.73} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.73, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.43, evRange: 0.90, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.43, evRange: 0.90, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.78, evRange: -0.32, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.78, evRange: -0.32, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.52} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.04, evRange: 8.47, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -1.00, call: 5.00, raise: 7.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.24, evRange: 0.56, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.24, evRange: 0.56, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.99, evRange: 8.99, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: -1.90, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: -1.90, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.05, evRange: -5.05, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.05, evRange: -5.05, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.24, evRange: 7.68, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.24} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.56, evRange: -1.07, freq: {fold: 0.30, call: 0.69, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 0.50} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.56, evRange: -1.07, freq: {fold: 0.30, call: 0.69, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 0.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.03, evRange: -1.04, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -1.00, call: -3.75, raise: -5.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.03, evRange: -1.04, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -1.00, call: -3.75, raise: -5.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: 0.28, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: 0.28, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.22, evRange: -5.18, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.22, evRange: -5.18, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.34, evRange: 1.27, freq: {fold: 0.00, call: 0.37, raise: 0.63}, ev: {fold: -1.00, call: -1.61, raise: 1.49} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.34, evRange: 1.27, freq: {fold: 0.00, call: 0.37, raise: 0.63}, ev: {fold: -1.00, call: -1.61, raise: 1.49} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.21, evRange: -0.76, freq: {fold: 0.01, call: 0.86, raise: 0.13}, ev: {fold: -1.00, call: 0.05, raise: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.21, evRange: -0.76, freq: {fold: 0.01, call: 0.86, raise: 0.13}, ev: {fold: -1.00, call: 0.05, raise: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.99, evRange: -1.02, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.59, raise: -0.68} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.99, evRange: -1.02, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.59, raise: -0.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.80, evRange: 2.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.80, bet: -0.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.80, evRange: 2.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.80, bet: -0.18} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.68, evRange: -2.62, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.42} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.68, evRange: -2.62, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.42} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.64, evRange: 4.71, freq: {check: 0.30, bet: 0.70}, ev: {check: 4.74, bet: 4.60} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.43, evRange: 2.44, freq: {check: 0.83, bet: 0.17}, ev: {check: 0.75, bet: -1.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.43, evRange: 2.44, freq: {check: 0.83, bet: 0.17}, ev: {check: 0.75, bet: -1.18} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.46, evRange: -1.30, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -4.54} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.46, evRange: -1.30, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -4.54} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.06, evRange: 4.12, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.06} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: 3.06, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: 3.06, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.06, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.48} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.06, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.48} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.01, evRange: 8.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.71, evRange: -2.79, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.71, evRange: -2.79, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.70, evRange: -3.59, freq: {fold: 0.22, call: 0.78, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.70, evRange: -3.59, freq: {fold: 0.22, call: 0.78, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.40} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.97, evRange: -3.05, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 1.95} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.97, evRange: -3.05, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 1.95} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.13, evRange: 7.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.13} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.41, evRange: -7.18, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.41, evRange: -7.18, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.37, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: 0.02, bet: -0.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.37, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: 0.02, bet: -0.40} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.55, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.44, bet: 4.32} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.93, evRange: -2.53, freq: {check: 0.04, bet: 0.96}, ev: {check: -2.56, bet: -1.90} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.93, evRange: -2.53, freq: {check: 0.04, bet: 0.96}, ev: {check: -2.56, bet: -1.90} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.43, evRange: 0.37, freq: {check: 0.75, bet: 0.25}, ev: {check: 0.75, bet: -0.52} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.43, evRange: 0.37, freq: {check: 0.75, bet: 0.25}, ev: {check: 0.75, bet: -0.52} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.63, evRange: 5.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.43, evRange: -2.67, freq: {check: 0.55, bet: 0.45}, ev: {check: -2.25, bet: -2.65} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.43, evRange: -2.67, freq: {check: 0.55, bet: 0.45}, ev: {check: -2.25, bet: -2.65} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.32, evRange: -3.00, freq: {fold: 0.44, call: 0.56, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.53} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.32, evRange: -3.00, freq: {fold: 0.44, call: 0.56, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.53} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.12, evRange: 7.11, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.12} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.39, evRange: -3.08, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.39, evRange: -3.08, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.21} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.75, evRange: -6.99, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.75, evRange: -6.99, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.04, evRange: -7.10, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.04, evRange: -7.10, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.97, evRange: -3.02, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.97, evRange: -3.02, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.39, evRange: -3.01, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.39, evRange: -3.01, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.95, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.95, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.54, evRange: 4.42, freq: {check: 0.85, bet: 0.15}, ev: {check: 4.64, bet: 4.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.00, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.00, bet: 0.06} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.00, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.00, bet: 0.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.59, evRange: -2.87, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.64, bet: -1.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.59, evRange: -2.87, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.64, bet: -1.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.19, evRange: 5.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.19} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.53, evRange: 0.02, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.75, bet: -0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.53, evRange: 0.02, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.75, bet: -0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.31, evRange: -2.84, freq: {check: 0.48, bet: 0.52}, ev: {check: -2.25, bet: -2.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.31, evRange: -2.84, freq: {check: 0.48, bet: 0.52}, ev: {check: -2.25, bet: -2.37} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.05, evRange: 7.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.30, evRange: -3.03, freq: {fold: 0.43, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.30, evRange: -3.03, freq: {fold: 0.43, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.29} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.78, evRange: -7.08, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.78, evRange: -7.08, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.03, evRange: 7.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.78, evRange: -3.05, freq: {fold: 0.53, call: 0.46, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.78, evRange: -3.05, freq: {fold: 0.53, call: 0.46, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.93, evRange: -3.02, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.93, evRange: -3.02, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.86, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.86, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 2.13, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.63} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 2.13, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.63} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.20, evRange: -2.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -0.91} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.20, evRange: -2.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -0.91} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.57, evRange: -2.26, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 3.50} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.57, evRange: -2.26, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 3.50} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: 1.95, freq: {check: 0.95, bet: 0.05}, ev: {check: 0.26, bet: -0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: 1.95, freq: {check: 0.95, bet: 0.05}, ev: {check: 0.26, bet: -0.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.78, evRange: -3.66, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.77, bet: -4.57} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.78, evRange: -3.66, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.77, bet: -4.57} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.85, evRange: 6.97, freq: {check: 0.05, bet: 0.95}, ev: {check: 6.86, bet: 6.85} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.33, evRange: 1.74, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.64} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.33, evRange: 1.74, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.64} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -4.42, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -4.42, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 8.13, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.18, evRange: -3.34, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.18, evRange: -3.34, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.57} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.57} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.87, evRange: 12.61, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.87} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.15, evRange: -6.27, freq: {fold: 0.09, call: 0.91}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.15, evRange: -6.27, freq: {fold: 0.09, call: 0.91}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.16, evRange: -5.03, freq: {fold: 0.15, call: 0.83, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.16, evRange: -5.03, freq: {fold: 0.15, call: 0.83, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.88, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.67} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.88, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.67} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.82, evRange: 10.39, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.45, evRange: -9.01, freq: {fold: 0.63, call: 0.37}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.45, evRange: -9.01, freq: {fold: 0.63, call: 0.37}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.03, evRange: -9.12, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.03, evRange: -9.12, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: -1.85, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: -1.85, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.76, evRange: 7.47, freq: {check: 0.93, bet: 0.07}, ev: {check: 6.72, bet: 7.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.87, evRange: -4.57, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.87, bet: -3.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.87, evRange: -4.57, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.87, bet: -3.83} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.44, evRange: -0.15, freq: {check: 0.44, bet: 0.56}, ev: {check: 1.25, bet: -0.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.44, evRange: -0.15, freq: {check: 0.44, bet: 0.56}, ev: {check: 1.25, bet: -0.19} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.66, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.77, freq: {check: 0.92, bet: 0.08}, ev: {check: -3.75, bet: -3.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.77, freq: {check: 0.92, bet: 0.08}, ev: {check: -3.75, bet: -3.84} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.02, evRange: -4.97, freq: {fold: 0.31, call: 0.67, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.02, evRange: -4.97, freq: {fold: 0.31, call: 0.67, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.65} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.77, evRange: 10.46, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.77} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.35, evRange: -5.01, freq: {fold: 0.85, call: 0.00, raise: 0.15}, ev: {fold: -5.00, call: -6.75, raise: -0.70} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.35, evRange: -5.01, freq: {fold: 0.85, call: 0.00, raise: 0.15}, ev: {fold: -5.00, call: -6.75, raise: -0.70} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.34, evRange: -9.18, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.34, evRange: -9.18, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -4.26, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -4.26, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.45} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.16, evRange: 10.89, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.34, evRange: -5.29, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.34, evRange: -5.29, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.61, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.61, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.05, evRange: -9.18, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.05, evRange: -9.18, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.30, evRange: 6.28, freq: {check: 0.00, bet: 1.00}, ev: {check: 6.00, bet: 6.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.04, evRange: -1.84, freq: {check: 0.05, bet: 0.95}, ev: {check: 0.52, bet: -0.07} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.04, evRange: -1.84, freq: {check: 0.05, bet: 0.95}, ev: {check: 0.52, bet: -0.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.27, evRange: -2.34, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.36, bet: -1.22} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.27, evRange: -2.34, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.36, bet: -1.22} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.41, evRange: 8.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.41} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.15, evRange: -0.32, freq: {check: 0.95, bet: 0.05}, ev: {check: 1.25, bet: -0.53} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.15, evRange: -0.32, freq: {check: 0.95, bet: 0.05}, ev: {check: 1.25, bet: -0.53} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.03, evRange: -5.07, freq: {check: 0.56, bet: 0.44}, ev: {check: -3.75, bet: -4.39} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.03, evRange: -5.07, freq: {check: 0.56, bet: 0.44}, ev: {check: -3.75, bet: -4.39} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.50, evRange: 9.25, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -5.00, call: 9.00, raise: 9.52} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.39, evRange: -5.18, freq: {fold: 0.26, call: 0.69, raise: 0.05}, ev: {fold: -5.00, call: 2.25, raise: 2.91} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.39, evRange: -5.18, freq: {fold: 0.26, call: 0.69, raise: 0.05}, ev: {fold: -5.00, call: 2.25, raise: 2.91} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.93, evRange: -5.94, freq: {fold: 0.78, call: 0.02, raise: 0.20}, ev: {fold: -5.00, call: -6.75, raise: 0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.93, evRange: -5.94, freq: {fold: 0.78, call: 0.02, raise: 0.20}, ev: {fold: -5.00, call: -6.75, raise: 0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -5.81, evRange: -8.89, freq: {fold: 0.74, call: 0.26}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -5.81, evRange: -8.89, freq: {fold: 0.74, call: 0.26}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.03, evRange: 9.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.78, evRange: -4.98, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.78, evRange: -4.98, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.60, evRange: -4.97, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: 3.36} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.60, evRange: -4.97, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: 3.36} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.85, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.85, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.54, evRange: 1.25, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: -1.13, raise: 1.87} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.54, evRange: 1.25, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: -1.13, raise: 1.87} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.24, evRange: -0.68, freq: {fold: 0.01, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 1.90, raise: -0.22} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.24, evRange: -0.68, freq: {fold: 0.01, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: 1.90, raise: -0.22} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.01, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: -0.36, raise: -1.10} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.01, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: -0.36, raise: -1.10} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.23, evRange: 1.61, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.23, bet: -0.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.23, evRange: 1.61, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.23, bet: -0.22} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.28, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.26, bet: -3.52} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.28, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.26, bet: -3.52} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.67, evRange: 4.34, freq: {check: 0.07, bet: 0.93}, ev: {check: 4.70, bet: 4.66} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.08, evRange: 1.94, freq: {check: 0.58, bet: 0.42}, ev: {check: 0.75, bet: -1.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.08, evRange: 1.94, freq: {check: 0.58, bet: 0.42}, ev: {check: 0.75, bet: -1.23} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.27, evRange: -2.07, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -4.45} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.27, evRange: -2.07, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -4.45} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.98, evRange: 5.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.98} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.69, evRange: -2.65, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.69, evRange: -2.65, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.46} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.46} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.99, evRange: 10.84, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.69, evRange: -6.52, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.69, evRange: -6.52, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.79, evRange: -3.37, freq: {fold: 0.20, call: 0.79, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.43} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.79, evRange: -3.37, freq: {fold: 0.20, call: 0.79, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.43} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.93, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.06} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.93, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.06} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.11, evRange: 7.12, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.53, evRange: -7.06, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.53, evRange: -7.06, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.21, evRange: -2.03, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.22, bet: 0.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.21, evRange: -2.03, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.22, bet: 0.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.26, evRange: 4.03, freq: {check: 0.44, bet: 0.56}, ev: {check: 4.98, bet: 3.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.25, evRange: -2.67, freq: {check: 0.06, bet: 0.94}, ev: {check: -2.94, bet: -1.13} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.25, evRange: -2.67, freq: {check: 0.06, bet: 0.94}, ev: {check: -2.94, bet: -1.13} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.71, evRange: -0.84, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.75, bet: -0.08} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.71, evRange: -0.84, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.75, bet: -0.08} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.18, evRange: 5.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.14, evRange: -2.89, freq: {check: 0.05, bet: 0.95}, ev: {check: -2.25, bet: -2.13} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.14, evRange: -2.89, freq: {check: 0.05, bet: 0.95}, ev: {check: -2.25, bet: -2.13} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.59, evRange: -3.01, freq: {fold: 0.49, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.59, evRange: -3.01, freq: {fold: 0.49, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.02, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.79, evRange: -3.18, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -5.25, raise: 2.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.79, evRange: -3.18, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -5.25, raise: 2.41} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.91, evRange: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.91, evRange: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.48, evRange: -3.07, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.48, evRange: -3.07, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.05, evRange: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.93, evRange: -3.06, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.26} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.93, evRange: -3.06, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.26} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.74, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.74, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.89, evRange: 4.48, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.48, bet: 4.95} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.51, evRange: -1.32, freq: {check: 0.48, bet: 0.52}, ev: {check: -0.03, bet: -0.95} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.51, evRange: -1.32, freq: {check: 0.48, bet: 0.52}, ev: {check: -0.03, bet: -0.95} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.83, evRange: -1.64, freq: {check: 0.02, bet: 0.98}, ev: {check: -1.96, bet: -1.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.83, evRange: -1.64, freq: {check: 0.02, bet: 0.98}, ev: {check: -1.96, bet: -1.83} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.31, evRange: 5.27, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.31} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.94, evRange: -0.68, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -3.82} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.94, evRange: -0.68, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -3.82} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -3.01, freq: {check: 0.64, bet: 0.36}, ev: {check: -2.25, bet: -4.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -3.01, freq: {check: 0.64, bet: 0.36}, ev: {check: -2.25, bet: -4.20} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.02, evRange: 7.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.41, evRange: -3.01, freq: {fold: 0.46, call: 0.52, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.41, evRange: -3.01, freq: {fold: 0.46, call: 0.52, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.26, evRange: -1.56, freq: {fold: 0.20, call: 0.01, raise: 0.79}, ev: {fold: -3.00, call: -5.25, raise: 2.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.26, evRange: -1.56, freq: {fold: 0.20, call: 0.01, raise: 0.79}, ev: {fold: -3.00, call: -5.25, raise: 2.40} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.89, evRange: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.89, evRange: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.47, evRange: 7.75, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.47} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.58, evRange: -3.01, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.12} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.58, evRange: -3.01, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.12} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.85, evRange: -3.04, freq: {fold: 0.67, call: 0.00, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: 0.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.85, evRange: -3.04, freq: {fold: 0.67, call: 0.00, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: 0.46} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.80, evRange: -7.02, freq: {fold: 0.77, call: 0.23}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.80, evRange: -7.02, freq: {fold: 0.77, call: 0.23}, ev: {fold: -7.00, call: 2.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.44, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.48} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.44, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.48} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.83, evRange: -1.57, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.18} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.83, evRange: -1.57, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.18} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.16, evRange: -2.47, freq: {fold: 0.01, call: 0.99}, ev: {fold: -3.00, call: -1.89} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.16, evRange: -2.47, freq: {fold: 0.01, call: 0.99}, ev: {fold: -3.00, call: -1.89} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.26, evRange: 2.34, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.28, bet: -0.21} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.26, evRange: 2.34, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.28, bet: -0.21} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.78, evRange: -3.87, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.77, bet: -5.07} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.78, evRange: -3.87, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.77, bet: -5.07} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.91, evRange: 7.33, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.91, bet: 6.91} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.31, evRange: 3.27, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.73} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.31, evRange: 3.27, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.73} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.77, evRange: -3.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.77, evRange: -3.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 7.04, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.22, evRange: -1.23, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.22, evRange: -1.23, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.28} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.98, evRange: 12.88, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.23, evRange: -5.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.23, evRange: -5.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.77, evRange: -5.30, freq: {fold: 0.07, call: 0.93, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.32} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.77, evRange: -5.30, freq: {fold: 0.07, call: 0.93, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.32} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.98, evRange: -5.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.98, evRange: -5.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.06, evRange: 10.88, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.54, evRange: -9.47, freq: {fold: 0.47, call: 0.53}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.54, evRange: -9.47, freq: {fold: 0.47, call: 0.53}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.40, evRange: -2.63, freq: {check: 0.34, bet: 0.66}, ev: {check: 0.28, bet: -0.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.40, evRange: -2.63, freq: {check: 0.34, bet: 0.66}, ev: {check: 0.28, bet: -0.74} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.84, evRange: 7.94, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.61, bet: 7.86} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.81, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.78, bet: -4.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.81, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.78, bet: -4.07} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: 1.52, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: 1.52, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 8.12, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.77, evRange: -4.45, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.77, evRange: -4.45, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.41} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.04, evRange: -4.95, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.42} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.04, evRange: -4.95, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.42} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.26, evRange: 11.19, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.26} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.98, evRange: -5.02, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.98, evRange: -5.02, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.26, evRange: -8.47, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.26, evRange: -8.47, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.06, evRange: -9.27, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.06, evRange: -9.27, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.45, evRange: -4.99, freq: {fold: 0.38, call: 0.51, raise: 0.12}, ev: {fold: -5.00, call: 2.25, raise: 2.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.45, evRange: -4.99, freq: {fold: 0.38, call: 0.51, raise: 0.12}, ev: {fold: -5.00, call: 2.25, raise: 2.61} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.80, evRange: 10.56, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.57, evRange: -5.02, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -5.00, call: -6.75, raise: -0.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.57, evRange: -5.02, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -5.00, call: -6.75, raise: -0.87} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.14, evRange: -9.02, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.14, evRange: -9.02, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.49, evRange: 7.13, freq: {check: 0.44, bet: 0.56}, ev: {check: 7.92, bet: 7.14} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.21, evRange: -4.01, freq: {check: 0.85, bet: 0.15}, ev: {check: -2.42, bet: -1.04} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.21, evRange: -4.01, freq: {check: 0.85, bet: 0.15}, ev: {check: -2.42, bet: -1.04} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.53, evRange: -4.99, freq: {check: 0.47, bet: 0.53}, ev: {check: -1.88, bet: -3.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.53, evRange: -4.99, freq: {check: 0.47, bet: 0.53}, ev: {check: -1.88, bet: -3.11} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.58, evRange: 6.42, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 8.58} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.86, evRange: -1.32, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -3.64} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.86, evRange: -1.32, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -3.64} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.09, evRange: -1.31, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.09, evRange: -1.31, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.16, evRange: 9.21, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.96, evRange: -5.01, freq: {fold: 0.72, call: 0.27, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.38} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.96, evRange: -5.01, freq: {fold: 0.72, call: 0.27, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.38} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 0.82, evRange: -4.93, freq: {fold: 0.25, call: 0.00, raise: 0.75}, ev: {fold: -5.00, call: -6.75, raise: 2.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 0.82, evRange: -4.93, freq: {fold: 0.25, call: 0.00, raise: 0.75}, ev: {fold: -5.00, call: -6.75, raise: 2.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.20, evRange: -9.02, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.20, evRange: -9.02, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -9.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -9.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.02, evRange: 9.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.19, evRange: -5.02, freq: {fold: 0.48, call: 0.51, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.19, evRange: -5.02, freq: {fold: 0.48, call: 0.51, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.75, evRange: -4.97, freq: {fold: 0.73, call: 0.00, raise: 0.27}, ev: {fold: -5.00, call: -6.75, raise: 3.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.75, evRange: -4.97, freq: {fold: 0.73, call: 0.00, raise: 0.27}, ev: {fold: -5.00, call: -6.75, raise: 3.41} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.91, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.91, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.40, evRange: 1.40, freq: {check: 0.24, bet: 0.76}, ev: {check: 2.54, bet: 1.04} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.40, evRange: 1.40, freq: {check: 0.24, bet: 0.76}, ev: {check: 2.54, bet: 1.04} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.55, evRange: -0.55, freq: {check: 0.30, bet: 0.70}, ev: {check: -0.78, bet: -0.45} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.55, evRange: -0.55, freq: {check: 0.30, bet: 0.70}, ev: {check: -0.78, bet: -0.45} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.90, evRange: -0.90, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.90, bet: -0.87} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.90, evRange: -0.90, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.90, bet: -0.87} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.74, evRange: 1.49, freq: {check: 0.01, bet: 0.99}, ev: {check: 3.05, bet: 1.11} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.74, evRange: 1.49, freq: {check: 0.01, bet: 0.99}, ev: {check: 3.05, bet: 1.11} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.26, evRange: -0.08, freq: {check: 0.14, bet: 0.86}, ev: {check: -1.78, bet: -0.29} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.26, evRange: -0.08, freq: {check: 0.14, bet: 0.86}, ev: {check: -1.78, bet: -0.29} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.34, evRange: -0.90, freq: {check: 0.70, bet: 0.30}, ev: {check: -0.26, bet: -0.96} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.34, evRange: -0.90, freq: {check: 0.70, bet: 0.30}, ev: {check: -0.26, bet: -0.96} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.23, evRange: -0.43, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.23, bet: -0.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.23, evRange: -0.43, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.23, bet: -0.71} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.76, evRange: -0.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.93} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.76, evRange: -0.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.93} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.06, evRange: 1.06, freq: {check: 0.99, bet: 0.01}, ev: {check: 1.06, bet: 1.31} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.21, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: -1.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.21, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.25, bet: -1.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.01, evRange: 1.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.59} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.59} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.74} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.74} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.51, evRange: 5.13, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.51} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.41, evRange: -7.98, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.41, evRange: -7.98, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.02, evRange: -5.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.02, evRange: -5.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.68, evRange: -1.19, freq: {fold: 0.86, call: 0.13, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.31} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.68, evRange: -1.19, freq: {fold: 0.86, call: 0.13, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.31} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.39} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.39} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.32, evRange: 5.08, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.86, evRange: -5.63, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.86, evRange: -5.63, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.14, evRange: 0.69, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.13, bet: -1.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.14, evRange: 0.69, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.13, bet: -1.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.23, evRange: 1.31, freq: {check: 0.46, bet: 0.54}, ev: {check: 1.25, bet: 3.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.37, evRange: -0.26, freq: {check: 0.78, bet: 0.22}, ev: {check: -0.77, bet: -3.44} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.37, evRange: -0.26, freq: {check: 0.78, bet: 0.22}, ev: {check: -0.77, bet: -3.44} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.21, evRange: 0.70, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.25, bet: -0.80} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.21, evRange: 0.70, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.25, bet: -0.80} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.80, evRange: 1.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.47, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.68} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.47, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.68} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.12, evRange: -0.87, freq: {fold: 0.61, call: 0.39, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.12, evRange: -0.87, freq: {fold: 0.61, call: 0.39, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.40, evRange: 5.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.56, evRange: -5.71, freq: {fold: 0.80, call: 0.20}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.56, evRange: -5.71, freq: {fold: 0.80, call: 0.20}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.16, evRange: 2.04, freq: {fold: 0.04, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.16, evRange: 2.04, freq: {fold: 0.04, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.49} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.63, evRange: 5.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.11, evRange: -1.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.11, evRange: -1.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.20} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.90, evRange: -4.71, freq: {fold: 0.19, call: 0.81}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.90, evRange: -4.71, freq: {fold: 0.19, call: 0.81}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.43, evRange: 1.52, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.40, bet: 2.43} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.07, evRange: 0.92, freq: {check: 0.63, bet: 0.37}, ev: {check: -0.72, bet: -1.65} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.07, evRange: 0.92, freq: {check: 0.63, bet: 0.37}, ev: {check: -0.72, bet: -1.65} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.76, bet: -2.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.76, bet: -2.73} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.73, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.43, evRange: 0.90, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.43, evRange: 0.90, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.78, evRange: -0.32, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.78, evRange: -0.32, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.52} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.04, evRange: 8.47, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -1.00, call: 5.00, raise: 7.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.24, evRange: 0.56, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.24, evRange: 0.56, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.99, evRange: 8.99, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: -1.90, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: -1.90, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.05, evRange: -5.05, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.05, evRange: -5.05, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.24, evRange: 7.68, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.24} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.56, evRange: -1.07, freq: {fold: 0.30, call: 0.69, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 0.50} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.56, evRange: -1.07, freq: {fold: 0.30, call: 0.69, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 0.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.03, evRange: -1.04, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -1.00, call: -3.75, raise: -5.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.03, evRange: -1.04, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -1.00, call: -3.75, raise: -5.64} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: 0.28, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: 0.28, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.22, evRange: -5.18, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.22, evRange: -5.18, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.34, evRange: 1.27, freq: {fold: 0.00, call: 0.37, raise: 0.63}, ev: {fold: -1.00, call: 2.64, raise: 1.49} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.34, evRange: 1.27, freq: {fold: 0.00, call: 0.37, raise: 0.63}, ev: {fold: -1.00, call: 2.64, raise: 1.49} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.21, evRange: -0.76, freq: {fold: 0.01, call: 0.86, raise: 0.13}, ev: {fold: -1.00, call: -3.82, raise: -0.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.21, evRange: -0.76, freq: {fold: 0.01, call: 0.86, raise: 0.13}, ev: {fold: -1.00, call: -3.82, raise: -0.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.99, evRange: -1.02, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.88, raise: -0.68} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.99, evRange: -1.02, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.88, raise: -0.68} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.80, evRange: 2.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.80, bet: -0.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.80, evRange: 2.20, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.80, bet: -0.18} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.68, evRange: -2.62, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.42} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.68, evRange: -2.62, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.42} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.64, evRange: 4.71, freq: {check: 0.30, bet: 0.70}, ev: {check: 4.74, bet: 4.60} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.43, evRange: 2.44, freq: {check: 0.83, bet: 0.17}, ev: {check: 0.75, bet: -1.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.43, evRange: 2.44, freq: {check: 0.83, bet: 0.17}, ev: {check: 0.75, bet: -1.18} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.46, evRange: -1.30, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -4.54} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.46, evRange: -1.30, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -4.54} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.06, evRange: 4.12, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.06} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: 3.06, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: 3.06, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.06, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.48} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.06, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.48} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.01, evRange: 8.10, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.71, evRange: -2.79, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.71, evRange: -2.79, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.70, evRange: -3.59, freq: {fold: 0.22, call: 0.78, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.70, evRange: -3.59, freq: {fold: 0.22, call: 0.78, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.40} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.97, evRange: -3.05, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 1.95} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.97, evRange: -3.05, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 1.95} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.13, evRange: 7.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.13} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.41, evRange: -7.18, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.41, evRange: -7.18, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.37, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: 0.02, bet: -0.40} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.37, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: 0.02, bet: -0.40} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.33, evRange: 4.55, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.44, bet: 4.32} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.93, evRange: -2.53, freq: {check: 0.04, bet: 0.96}, ev: {check: -2.56, bet: -1.90} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.93, evRange: -2.53, freq: {check: 0.04, bet: 0.96}, ev: {check: -2.56, bet: -1.90} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.43, evRange: 0.37, freq: {check: 0.75, bet: 0.25}, ev: {check: 0.75, bet: -0.52} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.43, evRange: 0.37, freq: {check: 0.75, bet: 0.25}, ev: {check: 0.75, bet: -0.52} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.63, evRange: 5.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.43, evRange: -2.67, freq: {check: 0.55, bet: 0.45}, ev: {check: -2.25, bet: -2.65} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.43, evRange: -2.67, freq: {check: 0.55, bet: 0.45}, ev: {check: -2.25, bet: -2.65} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.32, evRange: -3.00, freq: {fold: 0.44, call: 0.56, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.53} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.32, evRange: -3.00, freq: {fold: 0.44, call: 0.56, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.53} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.12, evRange: 7.11, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.12} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.39, evRange: -3.08, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.39, evRange: -3.08, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.21} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.75, evRange: -6.99, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.75, evRange: -6.99, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.04, evRange: -7.10, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.04, evRange: -7.10, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.97, evRange: -3.02, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.97, evRange: -3.02, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.39, evRange: -3.01, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.39, evRange: -3.01, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.95, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.95, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.54, evRange: 4.42, freq: {check: 0.85, bet: 0.15}, ev: {check: 4.64, bet: 4.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.00, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.00, bet: 0.06} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.00, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.00, bet: 0.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.59, evRange: -2.87, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.64, bet: -1.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.59, evRange: -2.87, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.64, bet: -1.87} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.19, evRange: 5.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.19} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.53, evRange: 0.02, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.75, bet: -0.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.53, evRange: 0.02, freq: {check: 0.71, bet: 0.29}, ev: {check: 0.75, bet: -0.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.31, evRange: -2.84, freq: {check: 0.48, bet: 0.52}, ev: {check: -2.25, bet: -2.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.31, evRange: -2.84, freq: {check: 0.48, bet: 0.52}, ev: {check: -2.25, bet: -2.37} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.05, evRange: 7.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.30, evRange: -3.03, freq: {fold: 0.43, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.30, evRange: -3.03, freq: {fold: 0.43, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.94, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.29} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.94, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.29} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.78, evRange: -7.08, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.78, evRange: -7.08, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 2.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.03, evRange: 7.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.78, evRange: -3.05, freq: {fold: 0.53, call: 0.46, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.78, evRange: -3.05, freq: {fold: 0.53, call: 0.46, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.93, evRange: -3.02, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.93, evRange: -3.02, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.86, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.86, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 2.13, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 7.11} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 2.13, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 7.11} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.20, evRange: -2.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -5.54} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.20, evRange: -2.22, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -5.54} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.57, evRange: -2.26, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.20} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.57, evRange: -2.26, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.20} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.25, evRange: 1.95, freq: {check: 0.95, bet: 0.05}, ev: {check: 0.26, bet: -0.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.25, evRange: 1.95, freq: {check: 0.95, bet: 0.05}, ev: {check: 0.26, bet: -0.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.78, evRange: -3.66, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.77, bet: -4.57} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.78, evRange: -3.66, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.77, bet: -4.57} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.85, evRange: 6.97, freq: {check: 0.05, bet: 0.95}, ev: {check: 6.86, bet: 6.85} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.33, evRange: 1.74, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.64} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.33, evRange: 1.74, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.64} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -4.42, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -4.42, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 8.13, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.18, evRange: -3.34, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.18, evRange: -3.34, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.50} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.57} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.57} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.87, evRange: 12.61, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.87} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.15, evRange: -6.27, freq: {fold: 0.09, call: 0.91}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.15, evRange: -6.27, freq: {fold: 0.09, call: 0.91}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.16, evRange: -5.03, freq: {fold: 0.15, call: 0.83, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.16, evRange: -5.03, freq: {fold: 0.15, call: 0.83, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.88, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.67} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.88, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.67} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.82, evRange: 10.39, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.45, evRange: -9.01, freq: {fold: 0.63, call: 0.37}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.45, evRange: -9.01, freq: {fold: 0.63, call: 0.37}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.03, evRange: -9.12, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.03, evRange: -9.12, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: -1.85, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: -1.85, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.76, evRange: 7.47, freq: {check: 0.93, bet: 0.07}, ev: {check: 6.72, bet: 7.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.87, evRange: -4.57, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.87, bet: -3.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.87, evRange: -4.57, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.87, bet: -3.83} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.44, evRange: -0.15, freq: {check: 0.44, bet: 0.56}, ev: {check: 1.25, bet: -0.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.44, evRange: -0.15, freq: {check: 0.44, bet: 0.56}, ev: {check: 1.25, bet: -0.19} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.66, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.77, freq: {check: 0.92, bet: 0.08}, ev: {check: -3.75, bet: -3.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.77, freq: {check: 0.92, bet: 0.08}, ev: {check: -3.75, bet: -3.84} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.02, evRange: -4.97, freq: {fold: 0.31, call: 0.67, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.02, evRange: -4.97, freq: {fold: 0.31, call: 0.67, raise: 0.02}, ev: {fold: -5.00, call: 2.25, raise: 2.65} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.77, evRange: 10.46, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.77} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.35, evRange: -5.01, freq: {fold: 0.85, call: 0.00, raise: 0.15}, ev: {fold: -5.00, call: -6.75, raise: -0.70} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.35, evRange: -5.01, freq: {fold: 0.85, call: 0.00, raise: 0.15}, ev: {fold: -5.00, call: -6.75, raise: -0.70} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.34, evRange: -9.18, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.34, evRange: -9.18, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -4.26, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -4.26, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.45} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.16, evRange: 10.89, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.34, evRange: -5.29, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.37} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.34, evRange: -5.29, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.37} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.61, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.61, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.05, evRange: -9.18, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.05, evRange: -9.18, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.30, evRange: 6.28, freq: {check: 0.00, bet: 1.00}, ev: {check: 6.00, bet: 6.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.04, evRange: -1.84, freq: {check: 0.05, bet: 0.95}, ev: {check: 0.52, bet: -0.07} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.04, evRange: -1.84, freq: {check: 0.05, bet: 0.95}, ev: {check: 0.52, bet: -0.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.27, evRange: -2.34, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.36, bet: -1.22} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.27, evRange: -2.34, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.36, bet: -1.22} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.41, evRange: 8.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.41} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.15, evRange: -0.32, freq: {check: 0.95, bet: 0.05}, ev: {check: 1.25, bet: -0.53} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.15, evRange: -0.32, freq: {check: 0.95, bet: 0.05}, ev: {check: 1.25, bet: -0.53} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.03, evRange: -5.07, freq: {check: 0.56, bet: 0.44}, ev: {check: -3.75, bet: -4.39} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.03, evRange: -5.07, freq: {check: 0.56, bet: 0.44}, ev: {check: -3.75, bet: -4.39} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.50, evRange: 9.25, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -5.00, call: 9.00, raise: 9.52} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.39, evRange: -5.18, freq: {fold: 0.26, call: 0.69, raise: 0.05}, ev: {fold: -5.00, call: 2.25, raise: 2.91} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.39, evRange: -5.18, freq: {fold: 0.26, call: 0.69, raise: 0.05}, ev: {fold: -5.00, call: 2.25, raise: 2.91} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.93, evRange: -5.94, freq: {fold: 0.78, call: 0.02, raise: 0.20}, ev: {fold: -5.00, call: -6.75, raise: 0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.93, evRange: -5.94, freq: {fold: 0.78, call: 0.02, raise: 0.20}, ev: {fold: -5.00, call: -6.75, raise: 0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -5.81, evRange: -8.89, freq: {fold: 0.74, call: 0.26}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -5.81, evRange: -8.89, freq: {fold: 0.74, call: 0.26}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.03, evRange: 9.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.78, evRange: -4.98, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.78, evRange: -4.98, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.60, evRange: -4.97, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: 3.36} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.60, evRange: -4.97, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: 3.36} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.85, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.85, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.54, evRange: 1.25, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 5.31, raise: 1.87} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.54, evRange: 1.25, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 5.31, raise: 1.87} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.24, evRange: -0.68, freq: {fold: 0.01, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: -3.50, raise: -0.22} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.24, evRange: -0.68, freq: {fold: 0.01, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: -3.50, raise: -0.22} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.01, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 1.44, raise: -1.10} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.01, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 1.44, raise: -1.10} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.23, evRange: 1.61, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.23, bet: -0.22} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.23, evRange: 1.61, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.23, bet: -0.22} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.28, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.26, bet: -3.52} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.28, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.26, bet: -3.52} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.67, evRange: 4.34, freq: {check: 0.07, bet: 0.93}, ev: {check: 4.70, bet: 4.66} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.08, evRange: 1.94, freq: {check: 0.58, bet: 0.42}, ev: {check: 0.75, bet: -1.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.08, evRange: 1.94, freq: {check: 0.58, bet: 0.42}, ev: {check: 0.75, bet: -1.23} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.27, evRange: -2.07, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -4.45} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.27, evRange: -2.07, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -4.45} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.98, evRange: 5.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.98} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.69, evRange: -2.65, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.78} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.69, evRange: -2.65, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.78} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.46} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.46} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.99, evRange: 10.84, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.69, evRange: -6.52, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.69, evRange: -6.52, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.79, evRange: -3.37, freq: {fold: 0.20, call: 0.79, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.43} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.79, evRange: -3.37, freq: {fold: 0.20, call: 0.79, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.43} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.93, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.06} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.93, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.06} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.11, evRange: 7.12, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.53, evRange: -7.06, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.53, evRange: -7.06, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.21, evRange: -2.03, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.22, bet: 0.16} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.21, evRange: -2.03, freq: {check: 0.98, bet: 0.02}, ev: {check: -0.22, bet: 0.16} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.26, evRange: 4.03, freq: {check: 0.44, bet: 0.56}, ev: {check: 4.98, bet: 3.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.25, evRange: -2.67, freq: {check: 0.06, bet: 0.94}, ev: {check: -2.94, bet: -1.13} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.25, evRange: -2.67, freq: {check: 0.06, bet: 0.94}, ev: {check: -2.94, bet: -1.13} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.71, evRange: -0.84, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.75, bet: -0.08} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.71, evRange: -0.84, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.75, bet: -0.08} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.18, evRange: 5.03, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.14, evRange: -2.89, freq: {check: 0.05, bet: 0.95}, ev: {check: -2.25, bet: -2.13} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.14, evRange: -2.89, freq: {check: 0.05, bet: 0.95}, ev: {check: -2.25, bet: -2.13} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.59, evRange: -3.01, freq: {fold: 0.49, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.59, evRange: -3.01, freq: {fold: 0.49, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.02, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.79, evRange: -3.18, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -5.25, raise: 2.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.79, evRange: -3.18, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -5.25, raise: 2.41} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.91, evRange: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.91, evRange: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.48, evRange: -3.07, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.46} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.48, evRange: -3.07, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.46} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.05, evRange: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.93, evRange: -3.06, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.26} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.93, evRange: -3.06, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.26} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.74, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.74, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.89, evRange: 4.48, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.48, bet: 4.95} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.51, evRange: -1.32, freq: {check: 0.48, bet: 0.52}, ev: {check: -0.03, bet: -0.95} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.51, evRange: -1.32, freq: {check: 0.48, bet: 0.52}, ev: {check: -0.03, bet: -0.95} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.83, evRange: -1.64, freq: {check: 0.02, bet: 0.98}, ev: {check: -1.96, bet: -1.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.83, evRange: -1.64, freq: {check: 0.02, bet: 0.98}, ev: {check: -1.96, bet: -1.83} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.31, evRange: 5.27, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.31} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.94, evRange: -0.68, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -3.82} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.94, evRange: -0.68, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -3.82} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.96, evRange: -3.01, freq: {check: 0.64, bet: 0.36}, ev: {check: -2.25, bet: -4.20} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.96, evRange: -3.01, freq: {check: 0.64, bet: 0.36}, ev: {check: -2.25, bet: -4.20} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.02, evRange: 7.04, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.41, evRange: -3.01, freq: {fold: 0.46, call: 0.52, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.41, evRange: -3.01, freq: {fold: 0.46, call: 0.52, raise: 0.02}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.26, evRange: -1.56, freq: {fold: 0.20, call: 0.01, raise: 0.79}, ev: {fold: -3.00, call: -5.25, raise: 2.40} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.26, evRange: -1.56, freq: {fold: 0.20, call: 0.01, raise: 0.79}, ev: {fold: -3.00, call: -5.25, raise: 2.40} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.89, evRange: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.89, evRange: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.00, evRange: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.47, evRange: 7.75, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.47} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.58, evRange: -3.01, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.12} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.58, evRange: -3.01, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.12} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.85, evRange: -3.04, freq: {fold: 0.67, call: 0.00, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: 0.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.85, evRange: -3.04, freq: {fold: 0.67, call: 0.00, raise: 0.33}, ev: {fold: -3.00, call: -5.25, raise: 0.46} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.80, evRange: -7.02, freq: {fold: 0.77, call: 0.23}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.80, evRange: -7.02, freq: {fold: 0.77, call: 0.23}, ev: {fold: -7.00, call: 2.75} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.01, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.44, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 4.35} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.44, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 4.35} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.83, evRange: -1.57, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.79} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.83, evRange: -1.57, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.79} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.16, evRange: -2.47, freq: {fold: 0.01, call: 0.99}, ev: {fold: -3.00, call: 2.83} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.16, evRange: -2.47, freq: {fold: 0.01, call: 0.99}, ev: {fold: -3.00, call: 2.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.26, evRange: 2.34, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.28, bet: -0.21} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.26, evRange: 2.34, freq: {check: 0.96, bet: 0.04}, ev: {check: 0.28, bet: -0.21} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.78, evRange: -3.87, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.77, bet: -5.07} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.78, evRange: -3.87, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.77, bet: -5.07} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.91, evRange: 7.33, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.91, bet: 6.91} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.31, evRange: 3.27, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.73} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.31, evRange: 3.27, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.73} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.77, evRange: -3.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.77, evRange: -3.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 7.04, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.22, evRange: -1.23, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.22, evRange: -1.23, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.28} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.98, evRange: 12.88, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.23, evRange: -5.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.23, evRange: -5.04, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.77, evRange: -5.30, freq: {fold: 0.07, call: 0.93, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.32} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.77, evRange: -5.30, freq: {fold: 0.07, call: 0.93, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.32} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.98, evRange: -5.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.30} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.98, evRange: -5.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.30} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.06, evRange: 10.88, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.54, evRange: -9.47, freq: {fold: 0.47, call: 0.53}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.54, evRange: -9.47, freq: {fold: 0.47, call: 0.53}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.40, evRange: -2.63, freq: {check: 0.34, bet: 0.66}, ev: {check: 0.28, bet: -0.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.40, evRange: -2.63, freq: {check: 0.34, bet: 0.66}, ev: {check: 0.28, bet: -0.74} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.84, evRange: 7.94, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.61, bet: 7.86} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.81, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.78, bet: -4.07} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.81, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.78, bet: -4.07} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: 1.52, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: 1.52, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 8.12, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.77, evRange: -4.45, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.77, evRange: -4.45, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.41} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.04, evRange: -4.95, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.42} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.04, evRange: -4.95, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.42} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.26, evRange: 11.19, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.26} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.98, evRange: -5.02, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.98, evRange: -5.02, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -2.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.26, evRange: -8.47, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.26, evRange: -8.47, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.06, evRange: -9.27, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.06, evRange: -9.27, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.45, evRange: -4.99, freq: {fold: 0.38, call: 0.51, raise: 0.12}, ev: {fold: -5.00, call: 2.25, raise: 2.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.45, evRange: -4.99, freq: {fold: 0.38, call: 0.51, raise: 0.12}, ev: {fold: -5.00, call: 2.25, raise: 2.61} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.80, evRange: 10.56, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.57, evRange: -5.02, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -5.00, call: -6.75, raise: -0.87} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.57, evRange: -5.02, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -5.00, call: -6.75, raise: -0.87} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.14, evRange: -9.02, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.14, evRange: -9.02, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.49, evRange: 7.13, freq: {check: 0.44, bet: 0.56}, ev: {check: 7.92, bet: 7.14} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.21, evRange: -4.01, freq: {check: 0.85, bet: 0.15}, ev: {check: -2.42, bet: -1.04} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.21, evRange: -4.01, freq: {check: 0.85, bet: 0.15}, ev: {check: -2.42, bet: -1.04} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.53, evRange: -4.99, freq: {check: 0.47, bet: 0.53}, ev: {check: -1.88, bet: -3.11} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.53, evRange: -4.99, freq: {check: 0.47, bet: 0.53}, ev: {check: -1.88, bet: -3.11} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 8.58, evRange: 6.42, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 8.58} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.86, evRange: -1.32, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -3.64} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.86, evRange: -1.32, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -3.64} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.09, evRange: -1.31, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.09, evRange: -1.31, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.16, evRange: 9.21, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.96, evRange: -5.01, freq: {fold: 0.72, call: 0.27, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.38} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.96, evRange: -5.01, freq: {fold: 0.72, call: 0.27, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.38} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 0.82, evRange: -4.93, freq: {fold: 0.25, call: 0.00, raise: 0.75}, ev: {fold: -5.00, call: -6.75, raise: 2.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 0.82, evRange: -4.93, freq: {fold: 0.25, call: 0.00, raise: 0.75}, ev: {fold: -5.00, call: -6.75, raise: 2.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.20, evRange: -9.02, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.20, evRange: -9.02, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -9.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -9.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.02, evRange: 9.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.19, evRange: -5.02, freq: {fold: 0.48, call: 0.51, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.19, evRange: -5.02, freq: {fold: 0.48, call: 0.51, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.75, evRange: -4.97, freq: {fold: 0.73, call: 0.00, raise: 0.27}, ev: {fold: -5.00, call: -6.75, raise: 3.41} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.75, evRange: -4.97, freq: {fold: 0.73, call: 0.00, raise: 0.27}, ev: {fold: -5.00, call: -6.75, raise: 3.41} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.91, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.91, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.00, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -9.75} },
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
