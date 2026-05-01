// Recursive Leduc Tree Structure
// Each node contains its children, making navigation simple

(function() {
  window.LEDUC_TREE = {
  j: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.04, evRange: 1.04, freq: {check: 0.25, bet: 0.75}, ev: {check: 1.04, bet: 1.04} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.04, evRange: 1.04, freq: {check: 0.25, bet: 0.75}, ev: {check: 1.04, bet: 1.04} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.46, evRange: -0.46, freq: {check: 0.28, bet: 0.72}, ev: {check: -0.46, bet: -0.46} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.46, evRange: -0.46, freq: {check: 0.28, bet: 0.72}, ev: {check: -0.46, bet: -0.46} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.84, evRange: -0.84, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.84, bet: -0.85} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.84, evRange: -0.84, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.84, bet: -0.85} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.11, evRange: 1.07, freq: {check: 0.00, bet: 1.00}, ev: {check: -0.01, bet: 1.12} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.11, evRange: 1.07, freq: {check: 0.00, bet: 1.00}, ev: {check: -0.01, bet: 1.12} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.37, evRange: 0.37, freq: {check: 0.15, bet: 0.85}, ev: {check: -0.80, bet: -0.29} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.37, evRange: 0.37, freq: {check: 0.15, bet: 0.85}, ev: {check: -0.80, bet: -0.29} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 0.27, evRange: -0.38, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.81, bet: -0.98} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 0.27, evRange: -0.38, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.81, bet: -0.98} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.65} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.03, evRange: 1.03, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.03, bet: 1.27} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.22, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.22, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.19} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.65} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.33} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.33} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.39, evRange: 5.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.39} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -7.75, freq: {fold: 0.31, call: 0.69}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -7.75, freq: {fold: 0.31, call: 0.69}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.71, evRange: -1.16, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.71, evRange: -1.16, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.37} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.74} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.74} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.22, evRange: 5.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.22} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.21, evRange: -5.44, freq: {fold: 0.89, call: 0.11}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.21, evRange: -5.44, freq: {fold: 0.89, call: 0.11}, ev: {fold: -5.00, call: 2.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.14, evRange: 0.68, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.14, bet: -1.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.14, evRange: 0.68, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.14, bet: -1.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.23, evRange: 1.30, freq: {check: 0.47, bet: 0.53}, ev: {check: 1.22, bet: 3.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.35, evRange: -0.25, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.35, evRange: -0.25, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.49} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.22, evRange: 0.71, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -0.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.22, evRange: 0.71, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -0.71} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.81, evRange: 1.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.81} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.46, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.46, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.09, evRange: -0.93, freq: {fold: 0.60, call: 0.40, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.09, evRange: -0.93, freq: {fold: 0.60, call: 0.40, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.37} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.21, evRange: 5.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.21} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.77} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.77} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.24, evRange: -5.39, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.24, evRange: -5.39, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.17, freq: {fold: 0.02, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.47} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.17, freq: {fold: 0.02, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.47} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.66, evRange: 5.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.11, evRange: -1.00, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.11, evRange: -1.00, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.30} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.00, evRange: -4.70, freq: {fold: 0.17, call: 0.83}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.00, evRange: -4.70, freq: {fold: 0.17, call: 0.83}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.43, evRange: 1.51, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.36, bet: 2.43} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.20, evRange: 0.92, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.73, bet: -1.66} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.20, evRange: 0.92, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.73, bet: -1.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.72} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.56, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.42, evRange: 0.92, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.42, evRange: 0.92, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -0.25, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -0.25, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 8.62, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.07} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 0.50, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 0.50, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: -1.88, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: -1.88, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.06, evRange: -5.07, freq: {fold: 0.96, call: 0.04}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.06, evRange: -5.07, freq: {fold: 0.96, call: 0.04}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.18, evRange: 7.82, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.18} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.59, evRange: -1.04, freq: {fold: 0.29, call: 0.70, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.45} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.59, evRange: -1.04, freq: {fold: 0.29, call: 0.70, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.45} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -1.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.58} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -1.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.58} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.21, evRange: -0.34, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.21, evRange: -0.34, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 2.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.17, evRange: -5.16, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.17, evRange: -5.16, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.72, evRange: 1.27, freq: {fold: 0.00, call: 0.34, raise: 0.66}, ev: {fold: -1.00, call: -0.75, raise: 1.48} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.72, evRange: 1.27, freq: {fold: 0.00, call: 0.34, raise: 0.66}, ev: {fold: -1.00, call: -0.75, raise: 1.48} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -2.40, evRange: -0.76, freq: {fold: 0.00, call: 0.85, raise: 0.14}, ev: {fold: -1.00, call: -2.78, raise: -0.19} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -2.40, evRange: -0.76, freq: {fold: 0.00, call: 0.85, raise: 0.14}, ev: {fold: -1.00, call: -2.78, raise: -0.19} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.81, evRange: -1.01, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 3.64, raise: -0.65} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.81, evRange: -1.01, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 3.64, raise: -0.65} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 2.21, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.82, bet: -0.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 2.21, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.82, bet: -0.12} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.68, evRange: -2.63, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.26} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.68, evRange: -2.63, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.26} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.56, evRange: 4.64, freq: {check: 0.20, bet: 0.80}, ev: {check: 4.67, bet: 4.53} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.46, evRange: 2.47, freq: {check: 0.85, bet: 0.15}, ev: {check: 0.75, bet: -1.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.46, evRange: 2.47, freq: {check: 0.85, bet: 0.15}, ev: {check: 0.75, bet: -1.20} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.47, evRange: -1.29, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -4.53} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.47, evRange: -1.29, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -4.53} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.04, evRange: 4.11, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.04} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: 3.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: 3.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.77} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.04, evRange: -3.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.49} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.04, evRange: -3.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.49} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.01, evRange: 8.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.73, evRange: -2.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.73, evRange: -2.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.56, evRange: -3.33, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.56, evRange: -3.33, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.97, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.23} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.97, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.23} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.06, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.71, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.71, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: -0.01, bet: -0.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: -0.01, bet: -0.45} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.36, evRange: 4.55, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.50, bet: 4.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.93, evRange: -2.50, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.41, bet: -1.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.93, evRange: -2.50, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.41, bet: -1.92} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.03, evRange: -0.18, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: -1.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.03, evRange: -0.18, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: -1.54} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.52, evRange: 5.27, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.52} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.62, evRange: -2.89, freq: {check: 0.59, bet: 0.41}, ev: {check: -2.25, bet: -3.15} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.62, evRange: -2.89, freq: {check: 0.59, bet: 0.41}, ev: {check: -2.25, bet: -3.15} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.37, evRange: -3.00, freq: {fold: 0.45, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.43} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.37, evRange: -3.00, freq: {fold: 0.45, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.43} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.14, evRange: 7.18, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.27, evRange: -3.00, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 1.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.27, evRange: -3.00, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 1.97} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.45, evRange: -6.96, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.45, evRange: -6.96, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.02, evRange: -7.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.02, evRange: -7.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.99, evRange: -3.01, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.99, evRange: -3.01, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.32, evRange: -3.00, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.48} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.32, evRange: -3.00, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.48} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.97, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.97, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.56, evRange: 4.40, freq: {check: 0.89, bet: 0.11}, ev: {check: 4.64, bet: 3.98} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.01, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.01, bet: 0.08} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.01, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.01, bet: 0.08} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.61, evRange: -2.87, freq: {check: 0.96, bet: 0.04}, ev: {check: -2.65, bet: -1.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.61, evRange: -2.87, freq: {check: 0.96, bet: 0.04}, ev: {check: -2.65, bet: -1.83} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.15, evRange: 4.97, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.15} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.55, evRange: -0.03, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.04} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.55, evRange: -0.03, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.04} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.29, evRange: -2.83, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -2.33} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.29, evRange: -2.83, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -2.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.33, evRange: -3.02, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.33, evRange: -3.02, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.97, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.44} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.97, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.44} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.81, evRange: -3.04, freq: {fold: 0.54, call: 0.45, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.81, evRange: -3.04, freq: {fold: 0.54, call: 0.45, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
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
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -1.37, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.37} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -1.37, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.37} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -4.09, evRange: -2.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.09} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -4.09, evRange: -2.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.09} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 5.63, evRange: -2.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.65} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 5.63, evRange: -2.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.65} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 1.94, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 1.94, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.03} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.65, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.76, bet: -4.50} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.65, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.76, bet: -4.50} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.82, evRange: 6.94, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.82, bet: 6.82} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.35, evRange: 1.71, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.35, evRange: 1.71, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.43, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.48} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.43, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.48} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.99, evRange: 8.16, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.21, evRange: -3.41, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.21, evRange: -3.41, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.54} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.79, evRange: 12.52, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.82, evRange: -7.92, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.82, evRange: -7.92, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.10, evRange: -5.03, freq: {fold: 0.16, call: 0.83, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.10, evRange: -5.03, freq: {fold: 0.16, call: 0.83, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.66} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.89, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.86} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.89, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.86} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.83, evRange: 10.53, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.19, evRange: -9.05, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.19, evRange: -9.05, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.02, evRange: -9.07, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.02, evRange: -9.07, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.74, evRange: 7.47, freq: {check: 0.96, bet: 0.04}, ev: {check: 6.71, bet: 7.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.86, evRange: -4.56, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.86, evRange: -4.56, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.82} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.40, evRange: -0.13, freq: {check: 0.43, bet: 0.57}, ev: {check: 1.25, bet: -0.24} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.40, evRange: -0.13, freq: {check: 0.43, bet: 0.57}, ev: {check: 1.25, bet: -0.24} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.08, evRange: 7.66, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.08} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.78, freq: {check: 0.93, bet: 0.07}, ev: {check: -3.75, bet: -3.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.78, freq: {check: 0.93, bet: 0.07}, ev: {check: -3.75, bet: -3.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -4.98, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -4.98, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.65} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.76, evRange: 10.46, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.76} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.26, evRange: -5.01, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: -0.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.26, evRange: -5.01, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: -0.67} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.37, evRange: -9.11, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.37, evRange: -9.11, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -4.16, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.39} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -4.16, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.39} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.09, evRange: 10.84, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.09} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.31, evRange: -5.26, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.26} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.31, evRange: -5.26, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.26} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.66, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.66, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.30, evRange: 6.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.96, bet: 6.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.09, evRange: -1.83, freq: {check: 0.02, bet: 0.98}, ev: {check: 0.54, bet: -0.10} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.09, evRange: -1.83, freq: {check: 0.02, bet: 0.98}, ev: {check: 0.54, bet: -0.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.18, evRange: -2.24, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.37, bet: -1.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.18, evRange: -2.24, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.37, bet: -1.17} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 7.87, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.06} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.22, evRange: -0.47, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.22, evRange: -0.47, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.91, evRange: -5.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -4.10} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.91, evRange: -5.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -4.10} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.34, evRange: 9.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.35} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.36, evRange: -5.11, freq: {fold: 0.26, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.10} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.36, evRange: -5.11, freq: {fold: 0.26, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.21, evRange: -5.65, freq: {fold: 0.86, call: 0.01, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: 1.56} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.21, evRange: -5.65, freq: {fold: 0.86, call: 0.01, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: 1.56} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.84, evRange: -9.23, freq: {fold: 0.82, call: 0.18}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.84, evRange: -9.23, freq: {fold: 0.82, call: 0.18}, ev: {fold: -9.00, call: 3.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.02, evRange: 9.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.87, evRange: -4.99, freq: {fold: 0.71, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.87, evRange: -4.99, freq: {fold: 0.71, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.52, evRange: -4.98, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: 3.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.52, evRange: -4.98, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: 3.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.93, evRange: -9.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.93, evRange: -9.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
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
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.60, evRange: 1.23, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: -1.24, raise: 1.90} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.60, evRange: 1.23, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: -1.24, raise: 1.90} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.64, evRange: -0.65, freq: {fold: 0.00, call: 0.62, raise: 0.37}, ev: {fold: -1.00, call: -2.46, raise: -0.26} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.64, evRange: -0.65, freq: {fold: 0.00, call: 0.62, raise: 0.37}, ev: {fold: -1.00, call: -2.46, raise: -0.26} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.38, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 4.02, raise: -1.15} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.38, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 4.02, raise: -1.15} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: 1.61, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.24, bet: -0.30} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: 1.61, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.24, bet: -0.30} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.27, evRange: -1.82, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.27, evRange: -1.82, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.62, evRange: 4.32, freq: {check: 0.03, bet: 0.97}, ev: {check: 4.68, bet: 4.62} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.08, evRange: 1.98, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -1.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.08, evRange: 1.98, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -1.20} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.26, evRange: -2.02, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.26, evRange: -2.02, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.99, evRange: 5.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.72, evRange: -2.74, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.83} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.72, evRange: -2.74, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.83} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.17} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.17} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.93, evRange: 10.78, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.94} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.38, evRange: -7.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.38, evRange: -7.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.66, evRange: -3.21, freq: {fold: 0.23, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.24} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.66, evRange: -3.21, freq: {fold: 0.23, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.24} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 1.13} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 1.13} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.31, evRange: 7.48, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.31} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -5.52, evRange: -7.09, freq: {fold: 0.85, call: 0.15}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -5.52, evRange: -7.09, freq: {fold: 0.85, call: 0.15}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -2.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.26, bet: 0.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -2.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.26, bet: 0.23} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.27, evRange: 3.97, freq: {check: 0.46, bet: 0.54}, ev: {check: 5.00, bet: 3.64} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.08, evRange: -2.58, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.97, bet: -1.05} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.08, evRange: -2.58, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.97, bet: -1.05} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.74, evRange: -0.91, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.75, bet: -0.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.74, evRange: -0.91, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.75, bet: -0.05} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.14, evRange: 5.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.08, evRange: -2.89, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -2.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.08, evRange: -2.89, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -2.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.63, evRange: -3.00, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.63, evRange: -3.00, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.82, evRange: -3.17, freq: {fold: 0.96, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.82, evRange: -3.17, freq: {fold: 0.96, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.54, evRange: -3.03, freq: {fold: 0.69, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.54, evRange: -3.03, freq: {fold: 0.69, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.03, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.98, evRange: -3.02, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.98, evRange: -3.02, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.87, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.87, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.95, evRange: 4.49, freq: {check: 0.16, bet: 0.84}, ev: {check: 4.50, bet: 5.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.53, evRange: -1.36, freq: {check: 0.51, bet: 0.49}, ev: {check: -0.04, bet: -1.03} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.53, evRange: -1.36, freq: {check: 0.51, bet: 0.49}, ev: {check: -0.04, bet: -1.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.89, evRange: -1.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.82, bet: -1.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.89, evRange: -1.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.82, bet: -1.89} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.74, evRange: 5.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.74} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.18, evRange: -0.72, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.18, evRange: -0.72, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.08, evRange: -3.00, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.08, evRange: -3.00, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.46} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.44, evRange: -3.00, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.44, evRange: -3.00, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.95, evRange: -1.26, freq: {fold: 0.09, call: 0.00, raise: 0.91}, ev: {fold: -3.00, call: -5.25, raise: 2.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.95, evRange: -1.26, freq: {fold: 0.09, call: 0.00, raise: 0.91}, ev: {fold: -3.00, call: -5.25, raise: 2.46} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.96, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.96, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.44, evRange: 7.71, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.44} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.57, evRange: -3.00, freq: {fold: 0.70, call: 0.30, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.57, evRange: -3.00, freq: {fold: 0.70, call: 0.30, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.74, evRange: -3.01, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 0.56} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.74, evRange: -3.01, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 0.56} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.91, evRange: -7.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.91, evRange: -7.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: -1.63, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.62} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: -1.63, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.62} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -4.01, evRange: -1.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.01} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -4.01, evRange: -1.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.01} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 5.52, evRange: -2.46, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.54} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 5.52, evRange: -2.46, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.54} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 2.34, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.26, bet: -0.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 2.34, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.26, bet: -0.12} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.93, evRange: 7.34, freq: {check: 0.02, bet: 0.98}, ev: {check: 6.94, bet: 6.93} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.29, evRange: 3.34, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.29, evRange: 3.34, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.33, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.33, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 6.99, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.23, evRange: -1.34, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.23, evRange: -1.34, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.50} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.50} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.99, evRange: 12.94, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.23, evRange: -6.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.23, evRange: -6.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.81, evRange: -5.16, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.57} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.81, evRange: -5.16, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.57} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.96, evRange: -5.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -1.07} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.96, evRange: -5.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -1.07} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.83, evRange: 10.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.91, evRange: -9.26, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.91, evRange: -9.26, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.49, evRange: -2.63, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.26, bet: -0.83} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.49, evRange: -2.63, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.26, bet: -0.83} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.97, evRange: 7.90, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.59, bet: 7.98} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.82, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.82, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.19} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: 1.68, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: 1.68, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 8.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.45} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.14, evRange: -4.97, freq: {fold: 0.02, call: 0.98, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.14, evRange: -4.97, freq: {fold: 0.02, call: 0.98, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.36} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.15, evRange: 11.15, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.39, evRange: -8.61, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.39, evRange: -8.61, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.03, evRange: -9.13, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.03, evRange: -9.13, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.46, evRange: -5.00, freq: {fold: 0.38, call: 0.52, raise: 0.10}, ev: {fold: -5.00, call: 2.25, raise: 2.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.46, evRange: -5.00, freq: {fold: 0.38, call: 0.52, raise: 0.10}, ev: {fold: -5.00, call: 2.25, raise: 2.61} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.79, evRange: 10.55, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.79} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.40, evRange: -5.01, freq: {fold: 0.62, call: 0.00, raise: 0.38}, ev: {fold: -5.00, call: -6.75, raise: -0.85} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.40, evRange: -5.01, freq: {fold: 0.62, call: 0.00, raise: 0.38}, ev: {fold: -5.00, call: -6.75, raise: -0.85} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.16, evRange: -9.01, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.16, evRange: -9.01, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.51, evRange: 7.12, freq: {check: 0.45, bet: 0.55}, ev: {check: 7.92, bet: 7.17} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.22, evRange: -4.00, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.40, bet: -1.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.22, evRange: -4.00, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.40, bet: -1.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.35, evRange: -4.99, freq: {check: 0.46, bet: 0.54}, ev: {check: -1.43, bet: -3.13} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.35, evRange: -4.99, freq: {check: 0.46, bet: 0.54}, ev: {check: -1.43, bet: -3.13} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.03, evRange: 6.46, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.13, evRange: -1.33, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.13, evRange: -1.33, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.52, evRange: -1.32, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.52, evRange: -1.32, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.52} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.16, evRange: 9.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.93, evRange: -5.00, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.36} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.93, evRange: -5.00, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.66, evRange: -4.96, freq: {fold: 0.13, call: 0.00, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: 2.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.66, evRange: -4.96, freq: {fold: 0.13, call: 0.00, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: 2.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.14, evRange: -9.01, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.14, evRange: -9.01, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.21, evRange: -5.01, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.21, evRange: -5.01, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -4.98, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 3.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -4.98, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 3.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.95, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.95, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.04, evRange: 1.04, freq: {check: 0.25, bet: 0.75}, ev: {check: 1.04, bet: 1.04} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.04, evRange: 1.04, freq: {check: 0.25, bet: 0.75}, ev: {check: 1.04, bet: 1.04} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.46, evRange: -0.46, freq: {check: 0.28, bet: 0.72}, ev: {check: -0.46, bet: -0.46} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.46, evRange: -0.46, freq: {check: 0.28, bet: 0.72}, ev: {check: -0.46, bet: -0.46} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.84, evRange: -0.84, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.84, bet: -0.85} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.84, evRange: -0.84, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.84, bet: -0.85} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.12, evRange: 1.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.49, bet: 1.12} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.12, evRange: 1.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 0.49, bet: 1.12} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.22, evRange: 0.37, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.16, bet: -0.29} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.22, evRange: 0.37, freq: {check: 0.15, bet: 0.85}, ev: {check: 0.16, bet: -0.29} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.02, evRange: -0.38, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.39, bet: -0.98} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.02, evRange: -0.38, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.39, bet: -0.98} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.65} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.03, evRange: 1.03, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.03, bet: 1.27} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.22, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.22, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.19} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.65} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.33} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.33} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.39, evRange: 5.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.39} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -7.75, freq: {fold: 0.31, call: 0.69}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -7.75, freq: {fold: 0.31, call: 0.69}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.71, evRange: -1.16, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.71, evRange: -1.16, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.37} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.74} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.74} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.22, evRange: 5.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.22} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.21, evRange: -5.44, freq: {fold: 0.89, call: 0.11}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.21, evRange: -5.44, freq: {fold: 0.89, call: 0.11}, ev: {fold: -5.00, call: 2.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.14, evRange: 0.68, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.14, bet: -1.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.14, evRange: 0.68, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.14, bet: -1.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.23, evRange: 1.30, freq: {check: 0.47, bet: 0.53}, ev: {check: 1.22, bet: 3.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.35, evRange: -0.25, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.35, evRange: -0.25, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.49} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.22, evRange: 0.71, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -0.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.22, evRange: 0.71, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -0.71} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.81, evRange: 1.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.81} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.46, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.46, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.09, evRange: -0.93, freq: {fold: 0.60, call: 0.40, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.09, evRange: -0.93, freq: {fold: 0.60, call: 0.40, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.37} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.21, evRange: 5.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.21} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.77} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.77} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.24, evRange: -5.39, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.24, evRange: -5.39, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.17, freq: {fold: 0.02, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.47} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.17, freq: {fold: 0.02, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.47} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.66, evRange: 5.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.11, evRange: -1.00, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.11, evRange: -1.00, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.30} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.00, evRange: -4.70, freq: {fold: 0.17, call: 0.83}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.00, evRange: -4.70, freq: {fold: 0.17, call: 0.83}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.43, evRange: 1.51, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.36, bet: 2.43} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.20, evRange: 0.92, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.73, bet: -1.66} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.20, evRange: 0.92, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.73, bet: -1.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.72} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.56, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.42, evRange: 0.92, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.42, evRange: 0.92, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -0.25, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -0.25, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 8.62, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.07} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 0.50, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 0.50, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: -1.88, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: -1.88, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.06, evRange: -5.07, freq: {fold: 0.96, call: 0.04}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.06, evRange: -5.07, freq: {fold: 0.96, call: 0.04}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.18, evRange: 7.82, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.18} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.59, evRange: -1.04, freq: {fold: 0.29, call: 0.70, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.45} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.59, evRange: -1.04, freq: {fold: 0.29, call: 0.70, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.45} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -1.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.58} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -1.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.58} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.21, evRange: -0.34, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.21, evRange: -0.34, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 2.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.17, evRange: -5.16, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.17, evRange: -5.16, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.41, evRange: 1.27, freq: {fold: 0.00, call: 0.34, raise: 0.66}, ev: {fold: -1.00, call: -1.67, raise: 1.48} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.41, evRange: 1.27, freq: {fold: 0.00, call: 0.34, raise: 0.66}, ev: {fold: -1.00, call: -1.67, raise: 1.48} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.03, evRange: -0.76, freq: {fold: 0.00, call: 0.85, raise: 0.14}, ev: {fold: -1.00, call: 0.00, raise: -0.19} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.03, evRange: -0.76, freq: {fold: 0.00, call: 0.85, raise: 0.14}, ev: {fold: -1.00, call: 0.00, raise: -0.19} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.98, evRange: -1.01, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.58, raise: -0.65} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.98, evRange: -1.01, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.58, raise: -0.65} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 2.21, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.82, bet: -0.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 2.21, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.82, bet: -0.12} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.68, evRange: -2.63, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.26} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.68, evRange: -2.63, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.26} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.56, evRange: 4.64, freq: {check: 0.20, bet: 0.80}, ev: {check: 4.67, bet: 4.53} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.46, evRange: 2.47, freq: {check: 0.85, bet: 0.15}, ev: {check: 0.75, bet: -1.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.46, evRange: 2.47, freq: {check: 0.85, bet: 0.15}, ev: {check: 0.75, bet: -1.20} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.47, evRange: -1.29, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -4.53} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.47, evRange: -1.29, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -4.53} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.04, evRange: 4.11, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.04} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: 3.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: 3.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.77} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.04, evRange: -3.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.49} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.04, evRange: -3.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.49} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.01, evRange: 8.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.73, evRange: -2.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.73, evRange: -2.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.56, evRange: -3.33, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.56, evRange: -3.33, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.97, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.23} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.97, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.23} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.06, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.71, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.71, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: -0.01, bet: -0.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: -0.01, bet: -0.45} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.36, evRange: 4.55, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.50, bet: 4.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.93, evRange: -2.50, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.41, bet: -1.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.93, evRange: -2.50, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.41, bet: -1.92} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.03, evRange: -0.18, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: -1.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.03, evRange: -0.18, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: -1.54} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.52, evRange: 5.27, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.52} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.62, evRange: -2.89, freq: {check: 0.59, bet: 0.41}, ev: {check: -2.25, bet: -3.15} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.62, evRange: -2.89, freq: {check: 0.59, bet: 0.41}, ev: {check: -2.25, bet: -3.15} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.37, evRange: -3.00, freq: {fold: 0.45, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.43} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.37, evRange: -3.00, freq: {fold: 0.45, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.43} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.14, evRange: 7.18, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.27, evRange: -3.00, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 1.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.27, evRange: -3.00, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 1.97} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.45, evRange: -6.96, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.45, evRange: -6.96, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.02, evRange: -7.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.02, evRange: -7.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.99, evRange: -3.01, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.99, evRange: -3.01, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.32, evRange: -3.00, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.48} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.32, evRange: -3.00, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.48} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.97, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.97, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.56, evRange: 4.40, freq: {check: 0.89, bet: 0.11}, ev: {check: 4.64, bet: 3.98} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.01, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.01, bet: 0.08} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.01, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.01, bet: 0.08} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.61, evRange: -2.87, freq: {check: 0.96, bet: 0.04}, ev: {check: -2.65, bet: -1.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.61, evRange: -2.87, freq: {check: 0.96, bet: 0.04}, ev: {check: -2.65, bet: -1.83} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.15, evRange: 4.97, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.15} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.55, evRange: -0.03, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.04} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.55, evRange: -0.03, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.04} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.29, evRange: -2.83, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -2.33} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.29, evRange: -2.83, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -2.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.33, evRange: -3.02, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.33, evRange: -3.02, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.97, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.44} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.97, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.44} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.81, evRange: -3.04, freq: {fold: 0.54, call: 0.45, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.81, evRange: -3.04, freq: {fold: 0.54, call: 0.45, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
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
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.55, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.56} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.55, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.56} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -1.07, evRange: -2.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.07} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -1.07, evRange: -2.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.07} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 3.60, evRange: -2.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 3.62} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 3.60, evRange: -2.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 3.62} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 1.94, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 1.94, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.03} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.65, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.76, bet: -4.50} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.65, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.76, bet: -4.50} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.82, evRange: 6.94, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.82, bet: 6.82} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.35, evRange: 1.71, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.35, evRange: 1.71, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.43, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.48} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.43, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.48} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.99, evRange: 8.16, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.21, evRange: -3.41, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.21, evRange: -3.41, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.54} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.79, evRange: 12.52, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.82, evRange: -7.92, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.82, evRange: -7.92, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.10, evRange: -5.03, freq: {fold: 0.16, call: 0.83, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.10, evRange: -5.03, freq: {fold: 0.16, call: 0.83, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.66} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.89, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.86} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.89, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.86} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.83, evRange: 10.53, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.19, evRange: -9.05, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.19, evRange: -9.05, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.02, evRange: -9.07, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.02, evRange: -9.07, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.74, evRange: 7.47, freq: {check: 0.96, bet: 0.04}, ev: {check: 6.71, bet: 7.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.86, evRange: -4.56, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.86, evRange: -4.56, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.82} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.40, evRange: -0.13, freq: {check: 0.43, bet: 0.57}, ev: {check: 1.25, bet: -0.24} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.40, evRange: -0.13, freq: {check: 0.43, bet: 0.57}, ev: {check: 1.25, bet: -0.24} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.08, evRange: 7.66, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.08} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.78, freq: {check: 0.93, bet: 0.07}, ev: {check: -3.75, bet: -3.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.78, freq: {check: 0.93, bet: 0.07}, ev: {check: -3.75, bet: -3.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -4.98, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -4.98, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.65} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.76, evRange: 10.46, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.76} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.26, evRange: -5.01, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: -0.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.26, evRange: -5.01, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: -0.67} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.37, evRange: -9.11, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.37, evRange: -9.11, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -4.16, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.39} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -4.16, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.39} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.09, evRange: 10.84, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.09} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.31, evRange: -5.26, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.26} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.31, evRange: -5.26, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.26} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.66, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.66, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.30, evRange: 6.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.96, bet: 6.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.09, evRange: -1.83, freq: {check: 0.02, bet: 0.98}, ev: {check: 0.54, bet: -0.10} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.09, evRange: -1.83, freq: {check: 0.02, bet: 0.98}, ev: {check: 0.54, bet: -0.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.18, evRange: -2.24, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.37, bet: -1.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.18, evRange: -2.24, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.37, bet: -1.17} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 7.87, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.06} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.22, evRange: -0.47, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.22, evRange: -0.47, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.91, evRange: -5.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -4.10} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.91, evRange: -5.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -4.10} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.34, evRange: 9.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.35} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.36, evRange: -5.11, freq: {fold: 0.26, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.10} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.36, evRange: -5.11, freq: {fold: 0.26, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.21, evRange: -5.65, freq: {fold: 0.86, call: 0.01, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: 1.56} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.21, evRange: -5.65, freq: {fold: 0.86, call: 0.01, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: 1.56} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.84, evRange: -9.23, freq: {fold: 0.82, call: 0.18}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.84, evRange: -9.23, freq: {fold: 0.82, call: 0.18}, ev: {fold: -9.00, call: 3.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.02, evRange: 9.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.87, evRange: -4.99, freq: {fold: 0.71, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.87, evRange: -4.99, freq: {fold: 0.71, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.52, evRange: -4.98, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: 3.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.52, evRange: -4.98, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: 3.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.93, evRange: -9.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.93, evRange: -9.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
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
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.65, evRange: 1.23, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: -1.12, raise: 1.90} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.65, evRange: 1.23, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: -1.12, raise: 1.90} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: 1.14, evRange: -0.65, freq: {fold: 0.00, call: 0.62, raise: 0.37}, ev: {fold: -1.00, call: 1.99, raise: -0.26} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: 1.14, evRange: -0.65, freq: {fold: 0.00, call: 0.62, raise: 0.37}, ev: {fold: -1.00, call: 1.99, raise: -0.26} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.95, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: -0.51, raise: -1.15} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.95, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: -0.51, raise: -1.15} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: 1.61, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.24, bet: -0.30} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: 1.61, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.24, bet: -0.30} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.27, evRange: -1.82, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.27, evRange: -1.82, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.62, evRange: 4.32, freq: {check: 0.03, bet: 0.97}, ev: {check: 4.68, bet: 4.62} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.08, evRange: 1.98, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -1.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.08, evRange: 1.98, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -1.20} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.26, evRange: -2.02, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.26, evRange: -2.02, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.99, evRange: 5.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.72, evRange: -2.74, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.83} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.72, evRange: -2.74, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.83} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.17} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.17} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.93, evRange: 10.78, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.94} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.38, evRange: -7.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.38, evRange: -7.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.66, evRange: -3.21, freq: {fold: 0.23, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.24} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.66, evRange: -3.21, freq: {fold: 0.23, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.24} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 1.13} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 1.13} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.31, evRange: 7.48, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.31} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -5.52, evRange: -7.09, freq: {fold: 0.85, call: 0.15}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -5.52, evRange: -7.09, freq: {fold: 0.85, call: 0.15}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -2.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.26, bet: 0.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -2.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.26, bet: 0.23} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.27, evRange: 3.97, freq: {check: 0.46, bet: 0.54}, ev: {check: 5.00, bet: 3.64} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.08, evRange: -2.58, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.97, bet: -1.05} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.08, evRange: -2.58, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.97, bet: -1.05} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.74, evRange: -0.91, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.75, bet: -0.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.74, evRange: -0.91, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.75, bet: -0.05} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.14, evRange: 5.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.08, evRange: -2.89, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -2.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.08, evRange: -2.89, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -2.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.63, evRange: -3.00, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.63, evRange: -3.00, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.82, evRange: -3.17, freq: {fold: 0.96, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.82, evRange: -3.17, freq: {fold: 0.96, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.54, evRange: -3.03, freq: {fold: 0.69, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.54, evRange: -3.03, freq: {fold: 0.69, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.03, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.98, evRange: -3.02, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.98, evRange: -3.02, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.87, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.87, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.95, evRange: 4.49, freq: {check: 0.16, bet: 0.84}, ev: {check: 4.50, bet: 5.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.53, evRange: -1.36, freq: {check: 0.51, bet: 0.49}, ev: {check: -0.04, bet: -1.03} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.53, evRange: -1.36, freq: {check: 0.51, bet: 0.49}, ev: {check: -0.04, bet: -1.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.89, evRange: -1.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.82, bet: -1.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.89, evRange: -1.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.82, bet: -1.89} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.74, evRange: 5.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.74} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.18, evRange: -0.72, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.18, evRange: -0.72, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.08, evRange: -3.00, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.08, evRange: -3.00, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.46} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.44, evRange: -3.00, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.44, evRange: -3.00, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.95, evRange: -1.26, freq: {fold: 0.09, call: 0.00, raise: 0.91}, ev: {fold: -3.00, call: -5.25, raise: 2.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.95, evRange: -1.26, freq: {fold: 0.09, call: 0.00, raise: 0.91}, ev: {fold: -3.00, call: -5.25, raise: 2.46} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.96, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.96, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.44, evRange: 7.71, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.44} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.57, evRange: -3.00, freq: {fold: 0.70, call: 0.30, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.57, evRange: -3.00, freq: {fold: 0.70, call: 0.30, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.74, evRange: -3.01, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 0.56} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.74, evRange: -3.01, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 0.56} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.91, evRange: -7.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.91, evRange: -7.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 0.30, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.30} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 0.30, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 0.30} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -2.41, evRange: -1.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.41} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -2.41, evRange: -1.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.41} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -1.93, evRange: -2.46, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.93} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -1.93, evRange: -2.46, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -1.93} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 2.34, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.26, bet: -0.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 2.34, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.26, bet: -0.12} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.93, evRange: 7.34, freq: {check: 0.02, bet: 0.98}, ev: {check: 6.94, bet: 6.93} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.29, evRange: 3.34, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.29, evRange: 3.34, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.33, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.33, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 6.99, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.23, evRange: -1.34, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.23, evRange: -1.34, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.50} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.50} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.99, evRange: 12.94, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.23, evRange: -6.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.23, evRange: -6.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.81, evRange: -5.16, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.57} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.81, evRange: -5.16, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.57} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.96, evRange: -5.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -1.07} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.96, evRange: -5.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -1.07} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.83, evRange: 10.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.91, evRange: -9.26, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.91, evRange: -9.26, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.49, evRange: -2.63, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.26, bet: -0.83} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.49, evRange: -2.63, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.26, bet: -0.83} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.97, evRange: 7.90, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.59, bet: 7.98} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.82, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.82, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.19} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: 1.68, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: 1.68, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 8.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.45} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.14, evRange: -4.97, freq: {fold: 0.02, call: 0.98, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.14, evRange: -4.97, freq: {fold: 0.02, call: 0.98, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.36} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.15, evRange: 11.15, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.39, evRange: -8.61, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.39, evRange: -8.61, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.03, evRange: -9.13, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.03, evRange: -9.13, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.46, evRange: -5.00, freq: {fold: 0.38, call: 0.52, raise: 0.10}, ev: {fold: -5.00, call: 2.25, raise: 2.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.46, evRange: -5.00, freq: {fold: 0.38, call: 0.52, raise: 0.10}, ev: {fold: -5.00, call: 2.25, raise: 2.61} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.79, evRange: 10.55, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.79} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.40, evRange: -5.01, freq: {fold: 0.62, call: 0.00, raise: 0.38}, ev: {fold: -5.00, call: -6.75, raise: -0.85} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.40, evRange: -5.01, freq: {fold: 0.62, call: 0.00, raise: 0.38}, ev: {fold: -5.00, call: -6.75, raise: -0.85} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.16, evRange: -9.01, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.16, evRange: -9.01, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.51, evRange: 7.12, freq: {check: 0.45, bet: 0.55}, ev: {check: 7.92, bet: 7.17} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.22, evRange: -4.00, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.40, bet: -1.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.22, evRange: -4.00, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.40, bet: -1.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.35, evRange: -4.99, freq: {check: 0.46, bet: 0.54}, ev: {check: -1.43, bet: -3.13} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.35, evRange: -4.99, freq: {check: 0.46, bet: 0.54}, ev: {check: -1.43, bet: -3.13} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.03, evRange: 6.46, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.13, evRange: -1.33, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.13, evRange: -1.33, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.52, evRange: -1.32, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.52, evRange: -1.32, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.52} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.16, evRange: 9.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.93, evRange: -5.00, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.36} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.93, evRange: -5.00, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.66, evRange: -4.96, freq: {fold: 0.13, call: 0.00, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: 2.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.66, evRange: -4.96, freq: {fold: 0.13, call: 0.00, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: 2.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.14, evRange: -9.01, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.14, evRange: -9.01, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.21, evRange: -5.01, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.21, evRange: -5.01, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -4.98, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 3.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -4.98, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 3.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.95, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.95, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.04, evRange: 1.04, freq: {check: 0.25, bet: 0.75}, ev: {check: 1.04, bet: 1.04} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.04, evRange: 1.04, freq: {check: 0.25, bet: 0.75}, ev: {check: 1.04, bet: 1.04} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.46, evRange: -0.46, freq: {check: 0.28, bet: 0.72}, ev: {check: -0.46, bet: -0.46} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.46, evRange: -0.46, freq: {check: 0.28, bet: 0.72}, ev: {check: -0.46, bet: -0.46} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.84, evRange: -0.84, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.84, bet: -0.85} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.84, evRange: -0.84, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.84, bet: -0.85} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.13, evRange: 1.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.28, bet: 1.12} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.13, evRange: 1.07, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.28, bet: 1.12} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -0.51, evRange: 0.37, freq: {check: 0.15, bet: 0.85}, ev: {check: -1.80, bet: -0.29} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -0.51, evRange: 0.37, freq: {check: 0.15, bet: 0.85}, ev: {check: -1.80, bet: -0.29} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.57, evRange: -0.38, freq: {check: 0.70, bet: 0.30}, ev: {check: -0.39, bet: -0.98} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.57, evRange: -0.38, freq: {check: 0.70, bet: 0.30}, ev: {check: -0.39, bet: -0.98} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.41, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.24, bet: -0.65} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.75, bet: -0.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.03, evRange: 1.03, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.03, bet: 1.27} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: -0.22, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.19} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: -0.22, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.25, bet: -1.19} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -0.75, evRange: -0.84, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -0.51} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 1.00, evRange: 1.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.65} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.33} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -3.33} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.39, evRange: 5.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.39} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -7.75, freq: {fold: 0.31, call: 0.69}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -7.75, freq: {fold: 0.31, call: 0.69}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.01, evRange: -5.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.01, evRange: -5.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.71, evRange: -1.16, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.71, evRange: -1.16, freq: {fold: 0.87, call: 0.12, raise: 0.01}, ev: {fold: -1.00, call: 1.25, raise: 1.37} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.74} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.74} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.22, evRange: 5.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.22} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.21, evRange: -5.44, freq: {fold: 0.89, call: 0.11}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.21, evRange: -5.44, freq: {fold: 0.89, call: 0.11}, ev: {fold: -5.00, call: 2.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.14, evRange: 0.68, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.14, bet: -1.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.14, evRange: 0.68, freq: {check: 1.00, bet: 0.00}, ev: {check: -0.14, bet: -1.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 2.23, evRange: 1.30, freq: {check: 0.47, bet: 0.53}, ev: {check: 1.22, bet: 3.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.35, evRange: -0.25, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.49} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.35, evRange: -0.25, freq: {check: 0.79, bet: 0.21}, ev: {check: -0.77, bet: -3.49} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.22, evRange: 0.71, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -0.71} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.22, evRange: 0.71, freq: {check: 0.97, bet: 0.03}, ev: {check: 0.25, bet: -0.71} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 1.81, evRange: 1.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.81} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.82, evRange: -0.46, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.82, evRange: -0.46, freq: {check: 0.92, bet: 0.08}, ev: {check: -0.75, bet: -1.71} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.09, evRange: -0.93, freq: {fold: 0.60, call: 0.40, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.09, evRange: -0.93, freq: {fold: 0.60, call: 0.40, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 1.37} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.21, evRange: 5.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.21} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.77} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: 0.77} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.24, evRange: -5.39, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.24, evRange: -5.39, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.21, evRange: 2.17, freq: {fold: 0.02, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.47} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.21, evRange: 2.17, freq: {fold: 0.02, call: 0.98, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.47} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.66, evRange: 5.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.11, evRange: -1.00, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.30} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.11, evRange: -1.00, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -3.75, raise: -4.30} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.00, evRange: -4.70, freq: {fold: 0.17, call: 0.83}, ev: {fold: -5.00, call: 2.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.00, evRange: -4.70, freq: {fold: 0.17, call: 0.83}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 2.43, evRange: 1.51, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.36, bet: 2.43} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.20, evRange: 0.92, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.73, bet: -1.66} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.20, evRange: 0.92, freq: {check: 0.50, bet: 0.50}, ev: {check: -0.73, bet: -1.66} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.72} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.90, evRange: -0.30, freq: {check: 0.93, bet: 0.07}, ev: {check: -0.75, bet: -2.72} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 3.00, evRange: 1.56, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.42, evRange: 0.92, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.42, evRange: 0.92, freq: {check: 0.66, bet: 0.34}, ev: {check: 0.25, bet: -1.74} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -0.77, evRange: -0.25, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -0.77, evRange: -0.25, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.75, bet: -3.53} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 8.62, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.07} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.25, evRange: 0.50, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.33} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.25, evRange: 0.50, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.33} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.00, evRange: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.53} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.23, evRange: -1.88, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.23, evRange: -1.88, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 2.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.06, evRange: -5.07, freq: {fold: 0.96, call: 0.04}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.06, evRange: -5.07, freq: {fold: 0.96, call: 0.04}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.18, evRange: 7.82, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.18} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.59, evRange: -1.04, freq: {fold: 0.29, call: 0.70, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.45} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.59, evRange: -1.04, freq: {fold: 0.29, call: 0.70, raise: 0.00}, ev: {fold: -1.00, call: 1.25, raise: 0.45} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.01, evRange: -1.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.58} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.01, evRange: -1.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -3.75, raise: -5.58} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.00, evRange: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 2.21, evRange: -0.34, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 2.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 2.21, evRange: -0.34, freq: {fold: 0.01, call: 0.99}, ev: {fold: -5.00, call: 2.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -5.17, evRange: -5.16, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: -6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -5.17, evRange: -5.16, freq: {fold: 0.90, call: 0.10}, ev: {fold: -5.00, call: -6.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 1.88, evRange: 1.27, freq: {fold: 0.00, call: 0.34, raise: 0.66}, ev: {fold: -1.00, call: 2.64, raise: 1.48} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 1.88, evRange: 1.27, freq: {fold: 0.00, call: 0.34, raise: 0.66}, ev: {fold: -1.00, call: 2.64, raise: 1.48} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -3.30, evRange: -0.76, freq: {fold: 0.00, call: 0.85, raise: 0.14}, ev: {fold: -1.00, call: -3.83, raise: -0.19} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -3.30, evRange: -0.76, freq: {fold: 0.00, call: 0.85, raise: 0.14}, ev: {fold: -1.00, call: -3.83, raise: -0.19} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.99, evRange: -1.01, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.93, raise: -0.65} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.99, evRange: -1.01, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.93, raise: -0.65} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.81, evRange: 2.21, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.82, bet: -0.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.81, evRange: 2.21, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.82, bet: -0.12} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.68, evRange: -2.63, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.26} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.68, evRange: -2.63, freq: {check: 0.98, bet: 0.02}, ev: {check: -2.67, bet: -3.26} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.56, evRange: 4.64, freq: {check: 0.20, bet: 0.80}, ev: {check: 4.67, bet: 4.53} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.46, evRange: 2.47, freq: {check: 0.85, bet: 0.15}, ev: {check: 0.75, bet: -1.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.46, evRange: 2.47, freq: {check: 0.85, bet: 0.15}, ev: {check: 0.75, bet: -1.20} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.47, evRange: -1.29, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -4.53} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.47, evRange: -1.29, freq: {check: 0.46, bet: 0.54}, ev: {check: -2.25, bet: -4.53} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 5.04, evRange: 4.11, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.04} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.74, evRange: 3.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.77} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.74, evRange: 3.13, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.77} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.04, evRange: -3.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.49} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.04, evRange: -3.00, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: -6.49} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.01, evRange: 8.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.73, evRange: -2.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.73, evRange: -2.08, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -7.01, evRange: -7.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -7.01, evRange: -7.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.56, evRange: -3.33, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.56, evRange: -3.33, freq: {fold: 0.25, call: 0.75, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.45} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.97, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.23} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.97, evRange: -3.03, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.23} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.06, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.71, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.71, evRange: -7.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: -0.01, bet: -0.45} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -1.32, freq: {check: 0.07, bet: 0.93}, ev: {check: -0.01, bet: -0.45} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.36, evRange: 4.55, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.50, bet: 4.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.93, evRange: -2.50, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.41, bet: -1.92} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.93, evRange: -2.50, freq: {check: 0.01, bet: 0.99}, ev: {check: -2.41, bet: -1.92} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.03, evRange: -0.18, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: -1.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.03, evRange: -0.18, freq: {check: 0.68, bet: 0.32}, ev: {check: 0.75, bet: -1.54} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 5.52, evRange: 5.27, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.52} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.62, evRange: -2.89, freq: {check: 0.59, bet: 0.41}, ev: {check: -2.25, bet: -3.15} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.62, evRange: -2.89, freq: {check: 0.59, bet: 0.41}, ev: {check: -2.25, bet: -3.15} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.37, evRange: -3.00, freq: {fold: 0.45, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.43} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.37, evRange: -3.00, freq: {fold: 0.45, call: 0.55, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.43} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.14, evRange: 7.18, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.27, evRange: -3.00, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 1.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.27, evRange: -3.00, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 1.97} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.45, evRange: -6.96, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.45, evRange: -6.96, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -7.02, evRange: -7.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -7.02, evRange: -7.04, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: -8.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.99, evRange: -3.01, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.99, evRange: -3.01, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.50} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.32, evRange: -3.00, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.48} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.32, evRange: -3.00, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -5.25, raise: 2.48} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.97, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.97, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.56, evRange: 4.40, freq: {check: 0.89, bet: 0.11}, ev: {check: 4.64, bet: 3.98} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.01, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.01, bet: 0.08} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.01, evRange: -1.57, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.01, bet: 0.08} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.61, evRange: -2.87, freq: {check: 0.96, bet: 0.04}, ev: {check: -2.65, bet: -1.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.61, evRange: -2.87, freq: {check: 0.96, bet: 0.04}, ev: {check: -2.65, bet: -1.83} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.15, evRange: 4.97, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.15} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.55, evRange: -0.03, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.04} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.55, evRange: -0.03, freq: {check: 0.72, bet: 0.28}, ev: {check: 0.75, bet: 0.04} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.29, evRange: -2.83, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -2.33} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.29, evRange: -2.83, freq: {check: 0.47, bet: 0.53}, ev: {check: -2.25, bet: -2.33} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.33, evRange: -3.02, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.33, evRange: -3.02, freq: {fold: 0.44, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.97, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.44} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.97, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.44} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.94, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.94, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.81, evRange: -3.04, freq: {fold: 0.54, call: 0.45, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.81, evRange: -3.04, freq: {fold: 0.54, call: 0.45, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
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
        ] },
        raise: {
      meta: { round: 1, pot: 8, toCall: 2, board: [] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 7.16, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 7.17} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 7.16, evRange: 2.12, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 7.17} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -5.58, evRange: -2.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -5.59} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -5.58, evRange: -2.24, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -5.59} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -2.19, evRange: -2.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.19} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -2.19, evRange: -2.25, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.19} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 1.94, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.03} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 1.94, freq: {check: 0.93, bet: 0.07}, ev: {check: 0.26, bet: -0.03} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.65, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.76, bet: -4.50} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.65, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.76, bet: -4.50} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.82, evRange: 6.94, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.82, bet: 6.82} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.35, evRange: 1.71, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.63} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.35, evRange: 1.71, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.63} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.75, evRange: -4.43, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.48} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.75, evRange: -4.43, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.75, bet: -5.48} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.99, evRange: 8.16, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 6.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.21, evRange: -3.41, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.54} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.21, evRange: -3.41, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.54} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.25} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -6.25} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.79, evRange: 12.52, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.79} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.82, evRange: -7.92, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.82, evRange: -7.92, freq: {fold: 0.12, call: 0.88}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.01, evRange: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.01, evRange: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.10, evRange: -5.03, freq: {fold: 0.16, call: 0.83, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.66} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.10, evRange: -5.03, freq: {fold: 0.16, call: 0.83, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.66} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.89, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.86} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.89, evRange: -5.01, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -6.75, raise: -0.86} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.83, evRange: 10.53, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.19, evRange: -9.05, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.19, evRange: -9.05, freq: {fold: 0.61, call: 0.39}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.02, evRange: -9.07, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.02, evRange: -9.07, freq: {fold: 0.98, call: 0.02}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.32, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.32, evRange: -1.83, freq: {check: 0.99, bet: 0.01}, ev: {check: 0.32, bet: -0.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 6.74, evRange: 7.47, freq: {check: 0.96, bet: 0.04}, ev: {check: 6.71, bet: 7.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.86, evRange: -4.56, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.82} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.86, evRange: -4.56, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.86, bet: -3.82} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.40, evRange: -0.13, freq: {check: 0.43, bet: 0.57}, ev: {check: 1.25, bet: -0.24} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.40, evRange: -0.13, freq: {check: 0.43, bet: 0.57}, ev: {check: 1.25, bet: -0.24} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.08, evRange: 7.66, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.08} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.78, freq: {check: 0.93, bet: 0.07}, ev: {check: -3.75, bet: -3.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.78, freq: {check: 0.93, bet: 0.07}, ev: {check: -3.75, bet: -3.91} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.01, evRange: -4.98, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.65} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.01, evRange: -4.98, freq: {fold: 0.31, call: 0.68, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.65} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.76, evRange: 10.46, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.76} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.26, evRange: -5.01, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: -0.67} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.26, evRange: -5.01, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -6.75, raise: -0.67} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.37, evRange: -9.11, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.37, evRange: -9.11, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 3.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.42, evRange: -4.16, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.39} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.42, evRange: -4.16, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.39} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.09, evRange: 10.84, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.09} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.31, evRange: -5.26, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.26} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.31, evRange: -5.26, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -6.75, raise: -2.26} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.66, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.66, evRange: -9.00, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.02, evRange: -9.08, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 6.30, evRange: 6.25, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.96, bet: 6.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.09, evRange: -1.83, freq: {check: 0.02, bet: 0.98}, ev: {check: 0.54, bet: -0.10} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.09, evRange: -1.83, freq: {check: 0.02, bet: 0.98}, ev: {check: 0.54, bet: -0.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.18, evRange: -2.24, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.37, bet: -1.17} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.18, evRange: -2.24, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.37, bet: -1.17} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.06, evRange: 7.87, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.06} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 1.22, evRange: -0.47, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 1.22, evRange: -0.47, freq: {check: 0.98, bet: 0.02}, ev: {check: 1.25, bet: -0.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.91, evRange: -5.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -4.10} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.91, evRange: -5.09, freq: {check: 0.54, bet: 0.46}, ev: {check: -3.75, bet: -4.10} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.34, evRange: 9.07, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.35} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: 0.36, evRange: -5.11, freq: {fold: 0.26, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.10} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: 0.36, evRange: -5.11, freq: {fold: 0.26, call: 0.70, raise: 0.03}, ev: {fold: -5.00, call: 2.25, raise: 3.10} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.21, evRange: -5.65, freq: {fold: 0.86, call: 0.01, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: 1.56} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.21, evRange: -5.65, freq: {fold: 0.86, call: 0.01, raise: 0.12}, ev: {fold: -5.00, call: -6.75, raise: 1.56} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.84, evRange: -9.23, freq: {fold: 0.82, call: 0.18}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.84, evRange: -9.23, freq: {fold: 0.82, call: 0.18}, ev: {fold: -9.00, call: 3.25} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.02, evRange: 9.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.87, evRange: -4.99, freq: {fold: 0.71, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.87, evRange: -4.99, freq: {fold: 0.71, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 3.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.52, evRange: -4.98, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: 3.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.52, evRange: -4.98, freq: {fold: 0.82, call: 0.00, raise: 0.18}, ev: {fold: -5.00, call: -6.75, raise: 3.43} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.93, evRange: -9.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.93, evRange: -9.01, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 3.25} },
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
        bet: {
      meta: { round: 1, pot: 4, toCall: 2, board: [] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 3.31, evRange: 1.23, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 5.31, raise: 1.90} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 3.31, evRange: 1.23, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 5.31, raise: 1.90} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -2.29, evRange: -0.65, freq: {fold: 0.00, call: 0.62, raise: 0.37}, ev: {fold: -1.00, call: -3.51, raise: -0.26} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -2.29, evRange: -0.65, freq: {fold: 0.00, call: 0.62, raise: 0.37}, ev: {fold: -1.00, call: -3.51, raise: -0.26} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: -0.67, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 1.65, raise: -1.15} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: -0.67, evRange: -1.07, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 1.65, raise: -1.15} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.24, evRange: 1.61, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.24, bet: -0.30} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.24, evRange: 1.61, freq: {check: 0.96, bet: 0.04}, ev: {check: -0.24, bet: -0.30} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.27, evRange: -1.82, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.40} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.27, evRange: -1.82, freq: {check: 0.99, bet: 0.01}, ev: {check: -2.25, bet: -3.40} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.62, evRange: 4.32, freq: {check: 0.03, bet: 0.97}, ev: {check: 4.68, bet: 4.62} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.08, evRange: 1.98, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -1.20} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.08, evRange: 1.98, freq: {check: 0.57, bet: 0.43}, ev: {check: 0.75, bet: -1.20} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.26, evRange: -2.02, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.47} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.26, evRange: -2.02, freq: {check: 1.00, bet: 0.00}, ev: {check: -2.25, bet: -4.47} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 4.99, evRange: 5.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.99} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.72, evRange: -2.74, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.83} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.72, evRange: -2.74, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 0.83} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.00, evRange: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.17} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.00, evRange: -3.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: -6.17} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 8.93, evRange: 10.78, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 8.94} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.38, evRange: -7.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.38, evRange: -7.34, freq: {fold: 0.04, call: 0.96}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.66, evRange: -3.21, freq: {fold: 0.23, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.24} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.66, evRange: -3.21, freq: {fold: 0.23, call: 0.76, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.24} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 1.13} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -2.93, evRange: -3.01, freq: {fold: 0.98, call: 0.00, raise: 0.02}, ev: {fold: -3.00, call: -5.25, raise: 1.13} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.31, evRange: 7.48, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.31} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -5.52, evRange: -7.09, freq: {fold: 0.85, call: 0.15}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -5.52, evRange: -7.09, freq: {fold: 0.85, call: 0.15}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.25, evRange: -2.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.26, bet: 0.23} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.25, evRange: -2.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -0.26, bet: 0.23} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.27, evRange: 3.97, freq: {check: 0.46, bet: 0.54}, ev: {check: 5.00, bet: 3.64} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.08, evRange: -2.58, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.97, bet: -1.05} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.08, evRange: -2.58, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.97, bet: -1.05} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.74, evRange: -0.91, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.75, bet: -0.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.74, evRange: -0.91, freq: {check: 0.98, bet: 0.02}, ev: {check: 0.75, bet: -0.05} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 4.14, evRange: 5.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.14} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.08, evRange: -2.89, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -2.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.08, evRange: -2.89, freq: {check: 0.02, bet: 0.98}, ev: {check: -2.25, bet: -2.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.63, evRange: -3.00, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.63, evRange: -3.00, freq: {fold: 0.50, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.01, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.82, evRange: -3.17, freq: {fold: 0.96, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.82, evRange: -3.17, freq: {fold: 0.96, call: 0.00, raise: 0.03}, ev: {fold: -3.00, call: -5.25, raise: 2.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.95, evRange: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -1.54, evRange: -3.03, freq: {fold: 0.69, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -1.54, evRange: -3.03, freq: {fold: 0.69, call: 0.30, raise: 0.00}, ev: {fold: -3.00, call: 1.75, raise: 2.48} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.03, evRange: 7.00, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.98, evRange: -3.02, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.38} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.98, evRange: -3.02, freq: {fold: 0.99, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -5.25, raise: 2.38} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -6.87, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -6.87, evRange: -7.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 4.95, evRange: 4.49, freq: {check: 0.16, bet: 0.84}, ev: {check: 4.50, bet: 5.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.53, evRange: -1.36, freq: {check: 0.51, bet: 0.49}, ev: {check: -0.04, bet: -1.03} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.53, evRange: -1.36, freq: {check: 0.51, bet: 0.49}, ev: {check: -0.04, bet: -1.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.89, evRange: -1.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.82, bet: -1.89} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.89, evRange: -1.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -1.82, bet: -1.89} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.74, evRange: 5.21, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.74} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.18, evRange: -0.72, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.18, evRange: -0.72, freq: {check: 0.63, bet: 0.37}, ev: {check: 0.75, bet: -4.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.08, evRange: -3.00, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.08, evRange: -3.00, freq: {check: 0.62, bet: 0.38}, ev: {check: -2.25, bet: -4.46} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.01, evRange: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -0.44, evRange: -3.00, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -0.44, evRange: -3.00, freq: {fold: 0.46, call: 0.52, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.49} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.95, evRange: -1.26, freq: {fold: 0.09, call: 0.00, raise: 0.91}, ev: {fold: -3.00, call: -5.25, raise: 2.46} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.95, evRange: -1.26, freq: {fold: 0.09, call: 0.00, raise: 0.91}, ev: {fold: -3.00, call: -5.25, raise: 2.46} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -6.96, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -6.96, evRange: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.44, evRange: 7.71, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.44} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.57, evRange: -3.00, freq: {fold: 0.70, call: 0.30, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.57, evRange: -3.00, freq: {fold: 0.70, call: 0.30, raise: 0.01}, ev: {fold: -3.00, call: 1.75, raise: 2.13} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -1.74, evRange: -3.01, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 0.56} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -1.74, evRange: -3.01, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -3.00, call: -5.25, raise: 0.56} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 11.00, evRange: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -4.91, evRange: -7.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -4.91, evRange: -7.01, freq: {fold: 0.79, call: 0.21}, ev: {fold: -7.00, call: 2.75} },
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
        { id: "Ka", label: "K♠", equity: 0.50, evUniform: 4.36, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 4.36} },
        { id: "Kb", label: "K♥", equity: 0.50, evUniform: 4.36, evRange: 1.31, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 4.36} },
        { id: "Qa", label: "Q♠", equity: 0.50, evUniform: -4.85, evRange: -1.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.85} },
        { id: "Qb", label: "Q♥", equity: 0.50, evUniform: -4.85, evRange: -1.56, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.85} },
        { id: "Ja", label: "J♠", equity: 0.50, evUniform: 3.34, evRange: -2.46, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 3.36} },
        { id: "Jb", label: "J♥", equity: 0.50, evUniform: 3.34, evRange: -2.46, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 3.36} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.24, evRange: 2.34, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.26, bet: -0.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.24, evRange: 2.34, freq: {check: 0.94, bet: 0.06}, ev: {check: 0.26, bet: -0.12} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.11} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.85, freq: {check: 1.00, bet: 0.00}, ev: {check: -3.76, bet: -5.11} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 6.93, evRange: 7.34, freq: {check: 0.02, bet: 0.98}, ev: {check: 6.94, bet: 6.93} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.29, evRange: 3.34, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.29, evRange: 3.34, freq: {check: 0.52, bet: 0.48}, ev: {check: 1.25, bet: -0.74} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -3.76, evRange: -3.33, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -3.76, evRange: -3.33, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.48} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 7.00, evRange: 6.99, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.23, evRange: -1.34, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.23, evRange: -1.34, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 1.26} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.50} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -5.00, evRange: -5.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -7.50} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 10.99, evRange: 12.94, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 3.23, evRange: -6.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 3.23, evRange: -6.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -9.00, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 1.81, evRange: -5.16, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.57} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 1.81, evRange: -5.16, freq: {fold: 0.06, call: 0.94, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 2.57} },
        { id: "Qa", label: "Q♠", equity: 0.13, evUniform: -4.96, evRange: -5.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -1.07} },
        { id: "Qb", label: "Q♥", equity: 0.13, evUniform: -4.96, evRange: -5.01, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -6.75, raise: -1.07} },
        { id: "Jb", label: "J♥", equity: 1.00, evUniform: 9.83, evRange: 10.59, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -3.91, evRange: -9.26, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -3.91, evRange: -9.26, freq: {fold: 0.58, call: 0.42}, ev: {fold: -9.00, call: 3.25} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.49, evRange: -2.63, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.26, bet: -0.83} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.49, evRange: -2.63, freq: {check: 0.31, bet: 0.69}, ev: {check: 0.26, bet: -0.83} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.97, evRange: 7.90, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.59, bet: 7.98} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.82, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.82, evRange: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -3.76, bet: -4.19} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 0.47, evRange: 1.68, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 0.47, evRange: 1.68, freq: {check: 0.49, bet: 0.51}, ev: {check: 1.25, bet: -0.28} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 7.00, evRange: 8.10, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.76, evRange: -4.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.76, evRange: -4.40, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.75, bet: -5.45} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: 2.14, evRange: -4.97, freq: {fold: 0.02, call: 0.98, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.36} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: 2.14, evRange: -4.97, freq: {fold: 0.02, call: 0.98, raise: 0.01}, ev: {fold: -5.00, call: 2.25, raise: 2.36} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 10.15, evRange: 11.15, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -4.99, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -4.99, evRange: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -6.75, raise: -2.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -2.39, evRange: -8.61, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -2.39, evRange: -8.61, freq: {fold: 0.46, call: 0.54}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.03, evRange: -9.13, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.03, evRange: -9.13, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -0.46, evRange: -5.00, freq: {fold: 0.38, call: 0.52, raise: 0.10}, ev: {fold: -5.00, call: 2.25, raise: 2.61} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -0.46, evRange: -5.00, freq: {fold: 0.38, call: 0.52, raise: 0.10}, ev: {fold: -5.00, call: 2.25, raise: 2.61} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 9.79, evRange: 10.55, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.79} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.40, evRange: -5.01, freq: {fold: 0.62, call: 0.00, raise: 0.38}, ev: {fold: -5.00, call: -6.75, raise: -0.85} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.40, evRange: -5.01, freq: {fold: 0.62, call: 0.00, raise: 0.38}, ev: {fold: -5.00, call: -6.75, raise: -0.85} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evUniform: -4.16, evRange: -9.01, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25} },
        { id: "Kb", label: "K♥", equity: 0.63, evUniform: -4.16, evRange: -9.01, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
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
    } },
          { board: "K♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 7.51, evRange: 7.12, freq: {check: 0.45, bet: 0.55}, ev: {check: 7.92, bet: 7.17} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.22, evRange: -4.00, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.40, bet: -1.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.22, evRange: -4.00, freq: {check: 0.86, bet: 0.14}, ev: {check: -2.40, bet: -1.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.35, evRange: -4.99, freq: {check: 0.46, bet: 0.54}, ev: {check: -1.43, bet: -3.13} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.35, evRange: -4.99, freq: {check: 0.46, bet: 0.54}, ev: {check: -1.43, bet: -3.13} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.03, evRange: 6.46, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.13, evRange: -1.33, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.31} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.13, evRange: -1.33, freq: {check: 0.57, bet: 0.43}, ev: {check: 1.25, bet: -4.31} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -3.52, evRange: -1.32, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -3.52, evRange: -1.32, freq: {check: 0.01, bet: 0.99}, ev: {check: -3.75, bet: -3.52} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.16, evRange: 9.22, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -2.93, evRange: -5.00, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.36} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -2.93, evRange: -5.00, freq: {fold: 0.71, call: 0.28, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.36} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: 1.66, evRange: -4.96, freq: {fold: 0.13, call: 0.00, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: 2.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: 1.66, evRange: -4.96, freq: {fold: 0.13, call: 0.00, raise: 0.86}, ev: {fold: -5.00, call: -6.75, raise: 2.71} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.14, evRange: -9.01, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.14, evRange: -9.01, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 3.25} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -9.01, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -9.01, evRange: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -9.75} },
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
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 9.01, evRange: 9.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -1.21, evRange: -5.01, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -1.21, evRange: -5.01, freq: {fold: 0.48, call: 0.52, raise: 0.00}, ev: {fold: -5.00, call: 2.25, raise: 3.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evUniform: -2.64, evRange: -4.98, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 3.45} },
        { id: "Jb", label: "J♥", equity: 0.13, evUniform: -2.64, evRange: -4.98, freq: {fold: 0.72, call: 0.00, raise: 0.28}, ev: {fold: -5.00, call: -6.75, raise: 3.45} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evUniform: 13.00, evRange: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evUniform: -8.95, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25} },
        { id: "Qb", label: "Q♥", equity: 0.63, evUniform: -8.95, evRange: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: 3.25} },
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
