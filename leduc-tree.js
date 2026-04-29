// Recursive Leduc Tree Structure
// Each node contains its children, making navigation simple

(function() {
  window.LEDUC_TREE = {
  j: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 2.69, freq: {check: 0.24, bet: 0.76}, ev: {check: 3.16, bet: 2.53} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.69, freq: {check: 0.24, bet: 0.76}, ev: {check: 3.16, bet: 2.53} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.37, freq: {check: 0.30, bet: 0.70}, ev: {check: -0.85, bet: -1.59} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -1.37, freq: {check: 0.30, bet: 0.70}, ev: {check: -0.85, bet: -1.59} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.13, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.07, bet: -1.81} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -1.13, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.07, bet: -1.81} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 2.18, freq: {check: 0.01, bet: 0.99}, ev: {check: 1.00, bet: 2.18} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.18, freq: {check: 0.01, bet: 0.99}, ev: {check: 1.00, bet: 2.18} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.69, freq: {check: 0.14, bet: 0.86}, ev: {check: -0.97, bet: -1.99} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -1.69, freq: {check: 0.14, bet: 0.86}, ev: {check: -0.97, bet: -1.99} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.73, freq: {check: 0.70, bet: 0.30}, ev: {check: 1.02, bet: -3.33} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -1.73, freq: {check: 0.70, bet: 0.30}, ev: {check: 1.02, bet: -3.33} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.97, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.97, bet: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.97, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.97, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -1.00, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.00, bet: 0.16} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -1.00, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.00, bet: 0.16} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.06, freq: {check: 0.99, bet: 0.01}, ev: {check: 1.06, bet: 1.31} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.00, freq: {check: 0.99, bet: 0.01}, ev: {check: 1.00, bet: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.00, freq: {check: 0.99, bet: 0.01}, ev: {check: 1.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -0.97, freq: {check: 0.99, bet: 0.01}, ev: {check: -1.00, bet: 0.99} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -0.97, freq: {check: 0.99, bet: 0.01}, ev: {check: -1.00, bet: 0.99} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.99, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.99, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: -5.46} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: -5.46} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.51, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.51} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.46, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.46, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.16, freq: {fold: 0.86, call: 0.13, raise: 0.01}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.16, freq: {fold: 0.86, call: 0.13, raise: 0.01}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: 2.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: 2.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 5.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -2.80, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: 9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -2.80, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.03, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.03, bet: 1.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.03, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.03, bet: 1.18} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 2.23, freq: {check: 0.46, bet: 0.54}, ev: {check: 1.25, bet: 3.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.84, freq: {check: 0.78, bet: 0.22}, ev: {check: -1.00, bet: -4.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.84, freq: {check: 0.78, bet: 0.22}, ev: {check: -1.00, bet: -4.78} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.00, freq: {check: 0.96, bet: 0.04}, ev: {check: 1.00, bet: 0.99} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.00, freq: {check: 0.96, bet: 0.04}, ev: {check: 1.00, bet: 0.99} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 1.80, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.03, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.00, bet: -1.34} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.03, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.00, bet: -1.34} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.34, freq: {fold: 0.61, call: 0.39, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.34, freq: {fold: 0.61, call: 0.39, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 5.40, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.99, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: 2.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.99, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: 2.21} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -2.21, freq: {fold: 0.80, call: 0.20}, ev: {fold: -5.00, call: 9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -2.21, freq: {fold: 0.80, call: 0.20}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.78, freq: {fold: 0.04, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.78, freq: {fold: 0.04, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.63, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.18, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -5.00, raise: -6.39} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.18, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -5.00, raise: -6.39} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 6.39, freq: {fold: 0.19, call: 0.81}, ev: {fold: -5.00, call: 9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 6.39, freq: {fold: 0.19, call: 0.81}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 2.43, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.40, bet: 2.43} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.04, freq: {check: 0.63, bet: 0.37}, ev: {check: 1.04, bet: 1.04} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.04, freq: {check: 0.63, bet: 0.37}, ev: {check: 1.04, bet: 1.04} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.16, freq: {check: 0.93, bet: 0.07}, ev: {check: -1.00, bet: -3.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.16, freq: {check: 0.93, bet: 0.07}, ev: {check: -1.00, bet: -3.19} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 3.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.00, freq: {check: 0.66, bet: 0.34}, ev: {check: 1.00, bet: 1.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.00, freq: {check: 0.66, bet: 0.34}, ev: {check: 1.00, bet: 1.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -1.00, bet: -4.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -1.00, bet: -4.98} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.04, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -1.00, call: 5.00, raise: 7.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 4.98, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 4.98, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: -8.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: -8.97} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 8.99, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 8.97, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 8.97, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.11, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.11, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -9.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.24, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.24} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 3.19, freq: {fold: 0.30, call: 0.69, raise: 0.01}, ev: {fold: -1.00, call: 5.00, raise: 5.50} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 3.19, freq: {fold: 0.30, call: 0.69, raise: 0.01}, ev: {fold: -1.00, call: 5.00, raise: 5.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.04, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -1.00, call: -5.00, raise: -8.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.04, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -1.00, call: -5.00, raise: -8.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 8.96, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 8.96, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.50, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.50, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: -9.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 4.44, freq: {fold: 0.00, call: 0.37, raise: 0.63}, ev: {fold: -1.00, call: 5.09, raise: 4.98} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 4.44, freq: {fold: 0.00, call: 0.37, raise: 0.63}, ev: {fold: -1.00, call: 5.09, raise: 4.98} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -0.25, freq: {fold: 0.01, call: 0.86, raise: 0.13}, ev: {fold: -1.00, call: -3.05, raise: -1.10} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -0.25, freq: {fold: 0.01, call: 0.86, raise: 0.13}, ev: {fold: -1.00, call: -3.05, raise: -1.10} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.06, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 4.64, raise: -1.92} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -1.06, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: 4.64, raise: -1.92} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.09, freq: {check: 0.99, bet: 0.01}, ev: {check: 5.11, bet: 2.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.09, freq: {check: 0.99, bet: 0.01}, ev: {check: 5.11, bet: 2.94} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.05, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.02, bet: -4.79} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.05, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.02, bet: -4.79} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.64, freq: {check: 0.30, bet: 0.70}, ev: {check: 4.74, bet: 4.60} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.02, freq: {check: 0.83, bet: 0.17}, ev: {check: 3.00, bet: 3.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.02, freq: {check: 0.83, bet: 0.17}, ev: {check: 3.00, bet: 3.12} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.11, freq: {check: 0.47, bet: 0.53}, ev: {check: -3.00, bet: -6.98} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.11, freq: {check: 0.47, bet: 0.53}, ev: {check: -3.00, bet: -6.98} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 5.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.06} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 6.98, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 6.98, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.12, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: -10.93} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.12, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: -10.93} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 10.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 10.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.79, freq: {fold: 0.22, call: 0.78, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.79, freq: {fold: 0.22, call: 0.78, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.94, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 5.92} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.94, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 5.92} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 7.13, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.13} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -5.92, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -5.92, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.02, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.02, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.96, freq: {check: 0.07, bet: 0.93}, ev: {check: 2.84, bet: 1.90} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.96, freq: {check: 0.07, bet: 0.93}, ev: {check: 2.84, bet: 1.90} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.33, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.44, bet: 4.32} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.31, freq: {check: 0.04, bet: 0.96}, ev: {check: -2.72, bet: -1.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.31, freq: {check: 0.04, bet: 0.96}, ev: {check: -2.72, bet: -1.25} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.72, freq: {check: 0.75, bet: 0.25}, ev: {check: 3.00, bet: 1.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.72, freq: {check: 0.75, bet: 0.25}, ev: {check: 3.00, bet: 1.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.63, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.84, freq: {check: 0.55, bet: 0.45}, ev: {check: -3.00, bet: -2.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.84, freq: {check: 0.55, bet: 0.45}, ev: {check: -3.00, bet: -2.64} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.64, freq: {fold: 0.44, call: 0.56, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.64, freq: {fold: 0.44, call: 0.56, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.12, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.12} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.88, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -7.00, raise: 6.55} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.88, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -7.00, raise: 6.55} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.55, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.55, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.14, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.14, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -11.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.25, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.25, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.90, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -7.00, raise: 6.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.90, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -7.00, raise: 6.91} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.91, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.91, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.54, freq: {check: 0.85, bet: 0.15}, ev: {check: 4.64, bet: 4.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.84, freq: {check: 0.99, bet: 0.01}, ev: {check: 2.84, bet: 2.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.84, freq: {check: 0.99, bet: 0.01}, ev: {check: 2.84, bet: 2.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.90, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.97, bet: -1.66} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.90, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.97, bet: -1.66} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.19, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.19} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.97, freq: {check: 0.71, bet: 0.29}, ev: {check: 3.00, bet: 2.89} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.97, freq: {check: 0.71, bet: 0.29}, ev: {check: 3.00, bet: 2.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.84, freq: {check: 0.48, bet: 0.52}, ev: {check: -3.00, bet: -2.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.84, freq: {check: 0.48, bet: 0.52}, ev: {check: -3.00, bet: -2.69} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.69, freq: {fold: 0.43, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.69, freq: {fold: 0.43, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.89, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.89, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -6.59, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -6.59, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.66, freq: {fold: 0.53, call: 0.46, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.66, freq: {fold: 0.53, call: 0.46, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.87, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.87, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -6.75, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -6.75, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 4.77, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.04} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 4.77, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.04} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -2.83, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -5.01} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -2.83, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -5.01} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -3.89, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 7.07} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -3.89, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 7.07} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.01, freq: {check: 0.95, bet: 0.05}, ev: {check: 5.02, bet: 4.84} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.01, freq: {check: 0.95, bet: 0.05}, ev: {check: 5.02, bet: 4.84} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.04, freq: {check: 0.98, bet: 0.02}, ev: {check: -5.01, bet: -6.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.04, freq: {check: 0.98, bet: 0.02}, ev: {check: -5.01, bet: -6.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.85, freq: {check: 0.05, bet: 0.95}, ev: {check: 6.86, bet: 6.85} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.01, freq: {check: 0.52, bet: 0.48}, ev: {check: 5.00, bet: 5.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.01, freq: {check: 0.52, bet: 0.48}, ev: {check: 5.00, bet: 5.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.02, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.02, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 7.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 8.87, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.10} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 8.87, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.10} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -9.00, raise: -11.02} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -9.00, raise: -11.02} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.87, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.87} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 11.02, freq: {fold: 0.09, call: 0.91}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 11.02, freq: {fold: 0.09, call: 0.91}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 6.88, freq: {fold: 0.15, call: 0.83, raise: 0.02}, ev: {fold: -5.00, call: 9.00, raise: 9.15} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 6.88, freq: {fold: 0.15, call: 0.83, raise: 0.02}, ev: {fold: -5.00, call: 9.00, raise: 9.15} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -4.84, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -9.00, raise: 0.83} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -4.84, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -9.00, raise: 0.83} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.82, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.83, freq: {fold: 0.63, call: 0.37}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.83, freq: {fold: 0.63, call: 0.37}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.15, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.15, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.96, freq: {check: 0.99, bet: 0.01}, ev: {check: 4.97, bet: 4.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.96, freq: {check: 0.99, bet: 0.01}, ev: {check: 4.97, bet: 4.37} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.76, freq: {check: 0.93, bet: 0.07}, ev: {check: 6.72, bet: 7.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.51, freq: {check: 0.98, bet: 0.02}, ev: {check: -4.52, bet: -3.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.51, freq: {check: 0.98, bet: 0.02}, ev: {check: -4.52, bet: -3.84} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.52, freq: {check: 0.44, bet: 0.56}, ev: {check: 5.00, bet: 4.15} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.52, freq: {check: 0.44, bet: 0.56}, ev: {check: 5.00, bet: 4.15} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.97, freq: {check: 0.92, bet: 0.08}, ev: {check: -5.00, bet: -4.61} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.97, freq: {check: 0.92, bet: 0.08}, ev: {check: -5.00, bet: -4.61} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.61, freq: {fold: 0.31, call: 0.67, raise: 0.02}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.61, freq: {fold: 0.31, call: 0.67, raise: 0.02}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.77, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.77} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.15, freq: {fold: 0.85, call: 0.00, raise: 0.15}, ev: {fold: -5.00, call: -9.00, raise: 0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.15, freq: {fold: 0.85, call: 0.00, raise: 0.15}, ev: {fold: -5.00, call: -9.00, raise: 0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.63, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.63, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.02, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.02, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.84, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.24} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.84, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.24} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 10.16, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.37, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -9.00, raise: -2.48} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.37, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -9.00, raise: -2.48} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.48, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.48, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.24, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.24, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -13.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 6.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 6.00, bet: 6.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.83, freq: {check: 0.05, bet: 0.95}, ev: {check: 5.15, bet: 2.70} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.83, freq: {check: 0.05, bet: 0.95}, ev: {check: 5.15, bet: 2.70} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.92, bet: 0.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.92, bet: 0.73} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.41} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 4.92, freq: {check: 0.95, bet: 0.05}, ev: {check: 5.00, bet: 3.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 4.92, freq: {check: 0.95, bet: 0.05}, ev: {check: 5.00, bet: 3.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.15, freq: {check: 0.56, bet: 0.44}, ev: {check: -5.00, bet: -5.34} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.15, freq: {check: 0.56, bet: 0.44}, ev: {check: -5.00, bet: -5.34} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.50, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -5.00, call: 9.00, raise: 9.52} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 5.34, freq: {fold: 0.26, call: 0.69, raise: 0.05}, ev: {fold: -5.00, call: 9.00, raise: 9.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 5.34, freq: {fold: 0.26, call: 0.69, raise: 0.05}, ev: {fold: -5.00, call: 9.00, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.46, freq: {fold: 0.78, call: 0.02, raise: 0.20}, ev: {fold: -5.00, call: -9.00, raise: 3.27} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.46, freq: {fold: 0.78, call: 0.02, raise: 0.20}, ev: {fold: -5.00, call: -9.00, raise: 3.27} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -3.27, freq: {fold: 0.74, call: 0.26}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -3.27, freq: {fold: 0.74, call: 0.26}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.73, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.73, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.70, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -9.00, raise: 8.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.70, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -9.00, raise: 8.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -8.73, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -8.73, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 3.61, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 3.03, raise: 4.92} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 3.61, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 3.03, raise: 4.92} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.58, freq: {fold: 0.01, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: -3.03, raise: -1.68} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -1.58, freq: {fold: 0.01, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: -3.03, raise: -1.68} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.16, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 5.01, raise: -1.57} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -1.16, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 5.01, raise: -1.57} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.03, freq: {check: 0.98, bet: 0.02}, ev: {check: 3.03, bet: 2.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.03, freq: {check: 0.98, bet: 0.02}, ev: {check: 3.03, bet: 2.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.00, bet: -4.96} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.00, bet: -4.96} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.67, freq: {check: 0.07, bet: 0.93}, ev: {check: 4.70, bet: 4.66} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.00, freq: {check: 0.58, bet: 0.42}, ev: {check: 3.00, bet: 3.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.00, freq: {check: 0.58, bet: 0.42}, ev: {check: 3.00, bet: 3.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.00, bet: -6.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.00, bet: -6.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.98, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.98} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 6.88, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 6.88, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -7.00, raise: -10.89} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -7.00, raise: -10.89} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 8.99, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 10.89, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 10.89, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.96, freq: {fold: 0.20, call: 0.79, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.96, freq: {fold: 0.20, call: 0.79, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.87, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.14} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.87, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.14} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 7.11, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.14, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.14, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.12, freq: {check: 0.98, bet: 0.02}, ev: {check: 2.11, bet: 2.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.12, freq: {check: 0.98, bet: 0.02}, ev: {check: 2.11, bet: 2.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.26, freq: {check: 0.44, bet: 0.56}, ev: {check: 4.98, bet: 3.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.37, freq: {check: 0.06, bet: 0.94}, ev: {check: -2.98, bet: -0.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.37, freq: {check: 0.06, bet: 0.94}, ev: {check: -2.98, bet: -0.19} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.98, freq: {check: 0.96, bet: 0.04}, ev: {check: 3.00, bet: 2.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.98, freq: {check: 0.96, bet: 0.04}, ev: {check: 3.00, bet: 2.62} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.18, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.11, freq: {check: 0.05, bet: 0.95}, ev: {check: -3.00, bet: -2.06} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.11, freq: {check: 0.05, bet: 0.95}, ev: {check: -3.00, bet: -2.06} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.06, freq: {fold: 0.49, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.06, freq: {fold: 0.49, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.62, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -7.00, raise: 6.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.62, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -7.00, raise: 6.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.83, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.83, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.19, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.19, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.88, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.88, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.52, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.52, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.89, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.48, bet: 4.95} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.87, freq: {check: 0.48, bet: 0.52}, ev: {check: 2.79, bet: 1.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.87, freq: {check: 0.48, bet: 0.52}, ev: {check: 2.79, bet: 1.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.01, freq: {check: 0.02, bet: 0.98}, ev: {check: -0.15, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.01, freq: {check: 0.02, bet: 0.98}, ev: {check: -0.15, bet: 0.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.31} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.15, freq: {check: 0.63, bet: 0.37}, ev: {check: 3.00, bet: -4.73} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.15, freq: {check: 0.63, bet: 0.37}, ev: {check: 3.00, bet: -4.73} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.79, freq: {check: 0.64, bet: 0.36}, ev: {check: -3.00, bet: -2.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.79, freq: {check: 0.64, bet: 0.36}, ev: {check: -3.00, bet: -2.43} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.43, freq: {fold: 0.46, call: 0.52, raise: 0.02}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.43, freq: {fold: 0.46, call: 0.52, raise: 0.02}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 4.73, freq: {fold: 0.20, call: 0.01, raise: 0.79}, ev: {fold: -3.00, call: -7.00, raise: 6.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 4.73, freq: {fold: 0.20, call: 0.01, raise: 0.79}, ev: {fold: -3.00, call: -7.00, raise: 6.80} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -6.80, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -6.80, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.47, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.47} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.01, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.01, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.02, freq: {fold: 0.67, call: 0.00, raise: 0.33}, ev: {fold: -3.00, call: -7.00, raise: 2.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.02, freq: {fold: 0.67, call: 0.00, raise: 0.33}, ev: {fold: -3.00, call: -7.00, raise: 2.94} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -2.94, freq: {fold: 0.77, call: 0.23}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -2.94, freq: {fold: 0.77, call: 0.23}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 4.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.05} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 4.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 5.05} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -2.84, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -5.02} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -2.84, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -5.02} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -3.25, freq: {fold: 0.01, call: 0.99}, ev: {fold: -3.00, call: 6.91} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -3.25, freq: {fold: 0.01, call: 0.99}, ev: {fold: -3.00, call: 6.91} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.05, freq: {check: 0.96, bet: 0.04}, ev: {check: 5.05, bet: 4.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.05, freq: {check: 0.96, bet: 0.04}, ev: {check: 5.05, bet: 4.98} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.02, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.06} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.02, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.06} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.91, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.91, bet: 6.91} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.00, freq: {check: 0.52, bet: 0.48}, ev: {check: 5.00, bet: 5.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.00, freq: {check: 0.52, bet: 0.48}, ev: {check: 5.00, bet: 5.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.05, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.94} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.05, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.94} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 7.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 8.94, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 8.94, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.05} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -9.00, raise: -12.97} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -9.00, raise: -12.97} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.98, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 12.97, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 12.97, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 8.06, freq: {fold: 0.07, call: 0.93, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 8.06, freq: {fold: 0.07, call: 0.93, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -9.00, raise: -2.59} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -9.00, raise: -2.59} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.59, freq: {fold: 0.47, call: 0.53}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.59, freq: {fold: 0.47, call: 0.53}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.81, freq: {check: 0.34, bet: 0.66}, ev: {check: 5.04, bet: 3.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.81, freq: {check: 0.34, bet: 0.66}, ev: {check: 5.04, bet: 3.18} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.84, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.61, bet: 7.86} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -4.99, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -4.99, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.99, freq: {check: 0.49, bet: 0.51}, ev: {check: 5.00, bet: 4.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.99, freq: {check: 0.49, bet: 0.51}, ev: {check: 5.00, bet: 4.98} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.60} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.60} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 8.60, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.31} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 8.60, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.31} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 10.26, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.26} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -9.00, raise: -3.10} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -9.00, raise: -3.10} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.10, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.10, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.31, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.31, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -13.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.71, freq: {fold: 0.38, call: 0.51, raise: 0.12}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.71, freq: {fold: 0.38, call: 0.51, raise: 0.12}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.80, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.18, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -5.00, call: -9.00, raise: 0.27} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.18, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -5.00, call: -9.00, raise: 0.27} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.27, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.27, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.49, freq: {check: 0.44, bet: 0.56}, ev: {check: 7.92, bet: 7.14} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.66, freq: {check: 0.85, bet: 0.15}, ev: {check: -1.00, bet: 1.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.66, freq: {check: 0.85, bet: 0.15}, ev: {check: -1.00, bet: 1.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.67, freq: {check: 0.47, bet: 0.53}, ev: {check: -0.92, bet: -2.33} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.67, freq: {check: 0.47, bet: 0.53}, ev: {check: -0.92, bet: -2.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 8.58, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 8.58} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.92, freq: {check: 0.57, bet: 0.43}, ev: {check: 5.00, bet: -4.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.92, freq: {check: 0.57, bet: 0.43}, ev: {check: 5.00, bet: -4.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 1.00, freq: {check: 0.01, bet: 0.99}, ev: {check: -5.00, bet: 1.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 1.00, freq: {check: 0.01, bet: 0.99}, ev: {check: -5.00, bet: 1.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.16, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -1.08, freq: {fold: 0.72, call: 0.27, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.06} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -1.08, freq: {fold: 0.72, call: 0.27, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 4.43, freq: {fold: 0.25, call: 0.00, raise: 0.75}, ev: {fold: -5.00, call: -9.00, raise: 7.57} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 4.43, freq: {fold: 0.25, call: 0.00, raise: 0.75}, ev: {fold: -5.00, call: -9.00, raise: 7.57} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -7.57, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -7.57, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.06, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.06, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.33, freq: {fold: 0.48, call: 0.51, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.33, freq: {fold: 0.48, call: 0.51, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.29, freq: {fold: 0.73, call: 0.00, raise: 0.27}, ev: {fold: -5.00, call: -9.00, raise: 8.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.29, freq: {fold: 0.73, call: 0.00, raise: 0.27}, ev: {fold: -5.00, call: -9.00, raise: 8.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -8.84, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -8.84, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 2.69, freq: {check: 0.24, bet: 0.76}, ev: {check: 3.16, bet: 2.53} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.69, freq: {check: 0.24, bet: 0.76}, ev: {check: 3.16, bet: 2.53} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.37, freq: {check: 0.30, bet: 0.70}, ev: {check: -0.85, bet: -1.59} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -1.37, freq: {check: 0.30, bet: 0.70}, ev: {check: -0.85, bet: -1.59} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.13, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.07, bet: -1.81} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -1.13, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.07, bet: -1.81} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 2.18, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.99, bet: 2.18} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.18, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.99, bet: 2.18} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.69, freq: {check: 0.14, bet: 0.86}, ev: {check: -1.36, bet: -1.99} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -1.69, freq: {check: 0.14, bet: 0.86}, ev: {check: -1.36, bet: -1.99} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.73, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.50, bet: -3.33} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -1.73, freq: {check: 0.70, bet: 0.30}, ev: {check: 0.50, bet: -3.33} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.97, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.97, bet: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.97, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.97, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -1.00, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.00, bet: 0.16} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -1.00, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.00, bet: 0.16} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.06, freq: {check: 0.99, bet: 0.01}, ev: {check: 1.06, bet: 1.31} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.00, freq: {check: 0.99, bet: 0.01}, ev: {check: 1.00, bet: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.00, freq: {check: 0.99, bet: 0.01}, ev: {check: 1.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -0.97, freq: {check: 0.99, bet: 0.01}, ev: {check: -1.00, bet: 0.99} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -0.97, freq: {check: 0.99, bet: 0.01}, ev: {check: -1.00, bet: 0.99} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.99, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.99, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: -5.46} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: -5.46} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.51, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.51} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.46, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.46, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.16, freq: {fold: 0.86, call: 0.13, raise: 0.01}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.16, freq: {fold: 0.86, call: 0.13, raise: 0.01}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: 2.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: 2.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 5.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -2.80, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: 9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -2.80, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.03, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.03, bet: 1.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.03, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.03, bet: 1.18} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 2.23, freq: {check: 0.46, bet: 0.54}, ev: {check: 1.25, bet: 3.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.84, freq: {check: 0.78, bet: 0.22}, ev: {check: -1.00, bet: -4.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.84, freq: {check: 0.78, bet: 0.22}, ev: {check: -1.00, bet: -4.78} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.00, freq: {check: 0.96, bet: 0.04}, ev: {check: 1.00, bet: 0.99} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.00, freq: {check: 0.96, bet: 0.04}, ev: {check: 1.00, bet: 0.99} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 1.80, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.03, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.00, bet: -1.34} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.03, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.00, bet: -1.34} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.34, freq: {fold: 0.61, call: 0.39, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.34, freq: {fold: 0.61, call: 0.39, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 5.40, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.99, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: 2.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.99, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: 2.21} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -2.21, freq: {fold: 0.80, call: 0.20}, ev: {fold: -5.00, call: 9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -2.21, freq: {fold: 0.80, call: 0.20}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.78, freq: {fold: 0.04, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.78, freq: {fold: 0.04, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.63, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.18, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -5.00, raise: -6.39} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.18, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -5.00, raise: -6.39} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 6.39, freq: {fold: 0.19, call: 0.81}, ev: {fold: -5.00, call: 9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 6.39, freq: {fold: 0.19, call: 0.81}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 2.43, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.40, bet: 2.43} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.04, freq: {check: 0.63, bet: 0.37}, ev: {check: 1.04, bet: 1.04} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.04, freq: {check: 0.63, bet: 0.37}, ev: {check: 1.04, bet: 1.04} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.16, freq: {check: 0.93, bet: 0.07}, ev: {check: -1.00, bet: -3.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.16, freq: {check: 0.93, bet: 0.07}, ev: {check: -1.00, bet: -3.19} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 3.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.00, freq: {check: 0.66, bet: 0.34}, ev: {check: 1.00, bet: 1.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.00, freq: {check: 0.66, bet: 0.34}, ev: {check: 1.00, bet: 1.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -1.00, bet: -4.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -1.00, bet: -4.98} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.04, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -1.00, call: 5.00, raise: 7.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 4.98, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 4.98, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: -8.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: -8.97} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 8.99, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 8.97, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 8.97, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.11, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.11, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -9.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.24, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.24} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 3.19, freq: {fold: 0.30, call: 0.69, raise: 0.01}, ev: {fold: -1.00, call: 5.00, raise: 5.50} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 3.19, freq: {fold: 0.30, call: 0.69, raise: 0.01}, ev: {fold: -1.00, call: 5.00, raise: 5.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.04, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -1.00, call: -5.00, raise: -8.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.04, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -1.00, call: -5.00, raise: -8.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 8.96, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 8.96, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.50, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.50, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: -9.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 4.44, freq: {fold: 0.00, call: 0.37, raise: 0.63}, ev: {fold: -1.00, call: -6.28, raise: 4.98} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 4.44, freq: {fold: 0.00, call: 0.37, raise: 0.63}, ev: {fold: -1.00, call: -6.28, raise: 4.98} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -0.25, freq: {fold: 0.01, call: 0.86, raise: 0.13}, ev: {fold: -1.00, call: -1.31, raise: -1.10} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -0.25, freq: {fold: 0.01, call: 0.86, raise: 0.13}, ev: {fold: -1.00, call: -1.31, raise: -1.10} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.06, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -1.19, raise: -1.92} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -1.06, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -1.19, raise: -1.92} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.09, freq: {check: 0.99, bet: 0.01}, ev: {check: 5.11, bet: 2.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.09, freq: {check: 0.99, bet: 0.01}, ev: {check: 5.11, bet: 2.94} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.05, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.02, bet: -4.79} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.05, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.02, bet: -4.79} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.64, freq: {check: 0.30, bet: 0.70}, ev: {check: 4.74, bet: 4.60} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.02, freq: {check: 0.83, bet: 0.17}, ev: {check: 3.00, bet: 3.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.02, freq: {check: 0.83, bet: 0.17}, ev: {check: 3.00, bet: 3.12} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.11, freq: {check: 0.47, bet: 0.53}, ev: {check: -3.00, bet: -6.98} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.11, freq: {check: 0.47, bet: 0.53}, ev: {check: -3.00, bet: -6.98} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 5.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.06} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 6.98, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 6.98, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.12, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: -10.93} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.12, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: -10.93} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 10.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 10.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.79, freq: {fold: 0.22, call: 0.78, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.79, freq: {fold: 0.22, call: 0.78, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.94, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 5.92} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.94, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 5.92} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 7.13, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.13} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -5.92, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -5.92, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.02, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.02, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.96, freq: {check: 0.07, bet: 0.93}, ev: {check: 2.84, bet: 1.90} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.96, freq: {check: 0.07, bet: 0.93}, ev: {check: 2.84, bet: 1.90} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.33, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.44, bet: 4.32} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.31, freq: {check: 0.04, bet: 0.96}, ev: {check: -2.72, bet: -1.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.31, freq: {check: 0.04, bet: 0.96}, ev: {check: -2.72, bet: -1.25} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.72, freq: {check: 0.75, bet: 0.25}, ev: {check: 3.00, bet: 1.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.72, freq: {check: 0.75, bet: 0.25}, ev: {check: 3.00, bet: 1.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.63, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.84, freq: {check: 0.55, bet: 0.45}, ev: {check: -3.00, bet: -2.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.84, freq: {check: 0.55, bet: 0.45}, ev: {check: -3.00, bet: -2.64} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.64, freq: {fold: 0.44, call: 0.56, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.64, freq: {fold: 0.44, call: 0.56, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.12, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.12} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.88, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -7.00, raise: 6.55} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.88, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -7.00, raise: 6.55} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.55, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.55, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.14, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.14, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -11.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.25, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.25, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.90, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -7.00, raise: 6.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.90, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -7.00, raise: 6.91} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.91, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.91, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.54, freq: {check: 0.85, bet: 0.15}, ev: {check: 4.64, bet: 4.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.84, freq: {check: 0.99, bet: 0.01}, ev: {check: 2.84, bet: 2.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.84, freq: {check: 0.99, bet: 0.01}, ev: {check: 2.84, bet: 2.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.90, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.97, bet: -1.66} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.90, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.97, bet: -1.66} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.19, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.19} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.97, freq: {check: 0.71, bet: 0.29}, ev: {check: 3.00, bet: 2.89} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.97, freq: {check: 0.71, bet: 0.29}, ev: {check: 3.00, bet: 2.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.84, freq: {check: 0.48, bet: 0.52}, ev: {check: -3.00, bet: -2.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.84, freq: {check: 0.48, bet: 0.52}, ev: {check: -3.00, bet: -2.69} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.69, freq: {fold: 0.43, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.69, freq: {fold: 0.43, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.89, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.89, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -6.59, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -6.59, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.66, freq: {fold: 0.53, call: 0.46, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.66, freq: {fold: 0.53, call: 0.46, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.87, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.87, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -6.75, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -6.75, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 4.77, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 1.98} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 4.77, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 1.98} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -2.83, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.64} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -2.83, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.64} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -3.89, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 4.33} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -3.89, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 4.33} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.01, freq: {check: 0.95, bet: 0.05}, ev: {check: 5.02, bet: 4.84} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.01, freq: {check: 0.95, bet: 0.05}, ev: {check: 5.02, bet: 4.84} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.04, freq: {check: 0.98, bet: 0.02}, ev: {check: -5.01, bet: -6.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.04, freq: {check: 0.98, bet: 0.02}, ev: {check: -5.01, bet: -6.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.85, freq: {check: 0.05, bet: 0.95}, ev: {check: 6.86, bet: 6.85} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.01, freq: {check: 0.52, bet: 0.48}, ev: {check: 5.00, bet: 5.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.01, freq: {check: 0.52, bet: 0.48}, ev: {check: 5.00, bet: 5.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.02, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.02, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 7.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 8.87, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.10} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 8.87, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.10} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -9.00, raise: -11.02} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -9.00, raise: -11.02} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.87, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.87} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 11.02, freq: {fold: 0.09, call: 0.91}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 11.02, freq: {fold: 0.09, call: 0.91}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 6.88, freq: {fold: 0.15, call: 0.83, raise: 0.02}, ev: {fold: -5.00, call: 9.00, raise: 9.15} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 6.88, freq: {fold: 0.15, call: 0.83, raise: 0.02}, ev: {fold: -5.00, call: 9.00, raise: 9.15} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -4.84, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -9.00, raise: 0.83} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -4.84, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -9.00, raise: 0.83} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.82, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.83, freq: {fold: 0.63, call: 0.37}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.83, freq: {fold: 0.63, call: 0.37}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.15, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.15, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.96, freq: {check: 0.99, bet: 0.01}, ev: {check: 4.97, bet: 4.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.96, freq: {check: 0.99, bet: 0.01}, ev: {check: 4.97, bet: 4.37} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.76, freq: {check: 0.93, bet: 0.07}, ev: {check: 6.72, bet: 7.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.51, freq: {check: 0.98, bet: 0.02}, ev: {check: -4.52, bet: -3.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.51, freq: {check: 0.98, bet: 0.02}, ev: {check: -4.52, bet: -3.84} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.52, freq: {check: 0.44, bet: 0.56}, ev: {check: 5.00, bet: 4.15} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.52, freq: {check: 0.44, bet: 0.56}, ev: {check: 5.00, bet: 4.15} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.97, freq: {check: 0.92, bet: 0.08}, ev: {check: -5.00, bet: -4.61} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.97, freq: {check: 0.92, bet: 0.08}, ev: {check: -5.00, bet: -4.61} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.61, freq: {fold: 0.31, call: 0.67, raise: 0.02}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.61, freq: {fold: 0.31, call: 0.67, raise: 0.02}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.77, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.77} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.15, freq: {fold: 0.85, call: 0.00, raise: 0.15}, ev: {fold: -5.00, call: -9.00, raise: 0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.15, freq: {fold: 0.85, call: 0.00, raise: 0.15}, ev: {fold: -5.00, call: -9.00, raise: 0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.63, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.63, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.02, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.02, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.84, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.24} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.84, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.24} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 10.16, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.37, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -9.00, raise: -2.48} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.37, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -9.00, raise: -2.48} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.48, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.48, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.24, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.24, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -13.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 6.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 6.00, bet: 6.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.83, freq: {check: 0.05, bet: 0.95}, ev: {check: 5.15, bet: 2.70} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.83, freq: {check: 0.05, bet: 0.95}, ev: {check: 5.15, bet: 2.70} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.92, bet: 0.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.92, bet: 0.73} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.41} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 4.92, freq: {check: 0.95, bet: 0.05}, ev: {check: 5.00, bet: 3.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 4.92, freq: {check: 0.95, bet: 0.05}, ev: {check: 5.00, bet: 3.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.15, freq: {check: 0.56, bet: 0.44}, ev: {check: -5.00, bet: -5.34} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.15, freq: {check: 0.56, bet: 0.44}, ev: {check: -5.00, bet: -5.34} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.50, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -5.00, call: 9.00, raise: 9.52} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 5.34, freq: {fold: 0.26, call: 0.69, raise: 0.05}, ev: {fold: -5.00, call: 9.00, raise: 9.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 5.34, freq: {fold: 0.26, call: 0.69, raise: 0.05}, ev: {fold: -5.00, call: 9.00, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.46, freq: {fold: 0.78, call: 0.02, raise: 0.20}, ev: {fold: -5.00, call: -9.00, raise: 3.27} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.46, freq: {fold: 0.78, call: 0.02, raise: 0.20}, ev: {fold: -5.00, call: -9.00, raise: 3.27} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -3.27, freq: {fold: 0.74, call: 0.26}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -3.27, freq: {fold: 0.74, call: 0.26}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.73, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.73, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.70, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -9.00, raise: 8.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.70, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -9.00, raise: 8.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -8.73, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -8.73, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 3.61, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 1.25, raise: 4.92} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 3.61, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 1.25, raise: 4.92} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.58, freq: {fold: 0.01, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: -1.94, raise: -1.68} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -1.58, freq: {fold: 0.01, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: -1.94, raise: -1.68} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.16, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.18, raise: -1.57} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -1.16, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 0.18, raise: -1.57} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.03, freq: {check: 0.98, bet: 0.02}, ev: {check: 3.03, bet: 2.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.03, freq: {check: 0.98, bet: 0.02}, ev: {check: 3.03, bet: 2.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.00, bet: -4.96} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.00, bet: -4.96} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.67, freq: {check: 0.07, bet: 0.93}, ev: {check: 4.70, bet: 4.66} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.00, freq: {check: 0.58, bet: 0.42}, ev: {check: 3.00, bet: 3.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.00, freq: {check: 0.58, bet: 0.42}, ev: {check: 3.00, bet: 3.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.00, bet: -6.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.00, bet: -6.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.98, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.98} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 6.88, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 6.88, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -7.00, raise: -10.89} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -7.00, raise: -10.89} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 8.99, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 10.89, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 10.89, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.96, freq: {fold: 0.20, call: 0.79, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.96, freq: {fold: 0.20, call: 0.79, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.87, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.14} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.87, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.14} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 7.11, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.14, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.14, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.12, freq: {check: 0.98, bet: 0.02}, ev: {check: 2.11, bet: 2.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.12, freq: {check: 0.98, bet: 0.02}, ev: {check: 2.11, bet: 2.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.26, freq: {check: 0.44, bet: 0.56}, ev: {check: 4.98, bet: 3.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.37, freq: {check: 0.06, bet: 0.94}, ev: {check: -2.98, bet: -0.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.37, freq: {check: 0.06, bet: 0.94}, ev: {check: -2.98, bet: -0.19} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.98, freq: {check: 0.96, bet: 0.04}, ev: {check: 3.00, bet: 2.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.98, freq: {check: 0.96, bet: 0.04}, ev: {check: 3.00, bet: 2.62} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.18, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.11, freq: {check: 0.05, bet: 0.95}, ev: {check: -3.00, bet: -2.06} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.11, freq: {check: 0.05, bet: 0.95}, ev: {check: -3.00, bet: -2.06} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.06, freq: {fold: 0.49, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.06, freq: {fold: 0.49, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.62, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -7.00, raise: 6.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.62, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -7.00, raise: 6.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.83, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.83, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.19, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.19, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.88, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.88, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.52, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.52, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.89, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.48, bet: 4.95} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.87, freq: {check: 0.48, bet: 0.52}, ev: {check: 2.79, bet: 1.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.87, freq: {check: 0.48, bet: 0.52}, ev: {check: 2.79, bet: 1.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.01, freq: {check: 0.02, bet: 0.98}, ev: {check: -0.15, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.01, freq: {check: 0.02, bet: 0.98}, ev: {check: -0.15, bet: 0.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.31} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.15, freq: {check: 0.63, bet: 0.37}, ev: {check: 3.00, bet: -4.73} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.15, freq: {check: 0.63, bet: 0.37}, ev: {check: 3.00, bet: -4.73} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.79, freq: {check: 0.64, bet: 0.36}, ev: {check: -3.00, bet: -2.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.79, freq: {check: 0.64, bet: 0.36}, ev: {check: -3.00, bet: -2.43} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.43, freq: {fold: 0.46, call: 0.52, raise: 0.02}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.43, freq: {fold: 0.46, call: 0.52, raise: 0.02}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 4.73, freq: {fold: 0.20, call: 0.01, raise: 0.79}, ev: {fold: -3.00, call: -7.00, raise: 6.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 4.73, freq: {fold: 0.20, call: 0.01, raise: 0.79}, ev: {fold: -3.00, call: -7.00, raise: 6.80} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -6.80, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -6.80, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.47, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.47} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.01, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.01, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.02, freq: {fold: 0.67, call: 0.00, raise: 0.33}, ev: {fold: -3.00, call: -7.00, raise: 2.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.02, freq: {fold: 0.67, call: 0.00, raise: 0.33}, ev: {fold: -3.00, call: -7.00, raise: 2.94} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -2.94, freq: {fold: 0.77, call: 0.23}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -2.94, freq: {fold: 0.77, call: 0.23}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 4.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 2.76} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 4.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 2.76} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -2.84, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.17} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -2.84, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -4.17} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -3.25, freq: {fold: 0.01, call: 0.99}, ev: {fold: -3.00, call: -2.36} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -3.25, freq: {fold: 0.01, call: 0.99}, ev: {fold: -3.00, call: -2.36} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.05, freq: {check: 0.96, bet: 0.04}, ev: {check: 5.05, bet: 4.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.05, freq: {check: 0.96, bet: 0.04}, ev: {check: 5.05, bet: 4.98} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.02, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.06} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.02, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.06} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.91, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.91, bet: 6.91} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.00, freq: {check: 0.52, bet: 0.48}, ev: {check: 5.00, bet: 5.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.00, freq: {check: 0.52, bet: 0.48}, ev: {check: 5.00, bet: 5.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.05, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.94} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.05, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.94} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 7.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 8.94, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 8.94, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.05} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -9.00, raise: -12.97} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -9.00, raise: -12.97} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.98, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 12.97, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 12.97, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 8.06, freq: {fold: 0.07, call: 0.93, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 8.06, freq: {fold: 0.07, call: 0.93, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -9.00, raise: -2.59} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -9.00, raise: -2.59} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.59, freq: {fold: 0.47, call: 0.53}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.59, freq: {fold: 0.47, call: 0.53}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.81, freq: {check: 0.34, bet: 0.66}, ev: {check: 5.04, bet: 3.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.81, freq: {check: 0.34, bet: 0.66}, ev: {check: 5.04, bet: 3.18} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.84, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.61, bet: 7.86} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -4.99, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -4.99, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.99, freq: {check: 0.49, bet: 0.51}, ev: {check: 5.00, bet: 4.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.99, freq: {check: 0.49, bet: 0.51}, ev: {check: 5.00, bet: 4.98} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.60} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.60} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 8.60, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.31} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 8.60, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.31} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 10.26, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.26} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -9.00, raise: -3.10} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -9.00, raise: -3.10} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.10, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.10, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.31, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.31, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -13.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.71, freq: {fold: 0.38, call: 0.51, raise: 0.12}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.71, freq: {fold: 0.38, call: 0.51, raise: 0.12}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.80, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.18, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -5.00, call: -9.00, raise: 0.27} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.18, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -5.00, call: -9.00, raise: 0.27} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.27, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.27, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.49, freq: {check: 0.44, bet: 0.56}, ev: {check: 7.92, bet: 7.14} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.66, freq: {check: 0.85, bet: 0.15}, ev: {check: -1.00, bet: 1.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.66, freq: {check: 0.85, bet: 0.15}, ev: {check: -1.00, bet: 1.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.67, freq: {check: 0.47, bet: 0.53}, ev: {check: -0.92, bet: -2.33} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.67, freq: {check: 0.47, bet: 0.53}, ev: {check: -0.92, bet: -2.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 8.58, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 8.58} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.92, freq: {check: 0.57, bet: 0.43}, ev: {check: 5.00, bet: -4.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.92, freq: {check: 0.57, bet: 0.43}, ev: {check: 5.00, bet: -4.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 1.00, freq: {check: 0.01, bet: 0.99}, ev: {check: -5.00, bet: 1.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 1.00, freq: {check: 0.01, bet: 0.99}, ev: {check: -5.00, bet: 1.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.16, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -1.08, freq: {fold: 0.72, call: 0.27, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.06} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -1.08, freq: {fold: 0.72, call: 0.27, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 4.43, freq: {fold: 0.25, call: 0.00, raise: 0.75}, ev: {fold: -5.00, call: -9.00, raise: 7.57} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 4.43, freq: {fold: 0.25, call: 0.00, raise: 0.75}, ev: {fold: -5.00, call: -9.00, raise: 7.57} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -7.57, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -7.57, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.06, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.06, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.33, freq: {fold: 0.48, call: 0.51, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.33, freq: {fold: 0.48, call: 0.51, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.29, freq: {fold: 0.73, call: 0.00, raise: 0.27}, ev: {fold: -5.00, call: -9.00, raise: 8.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.29, freq: {fold: 0.73, call: 0.00, raise: 0.27}, ev: {fold: -5.00, call: -9.00, raise: 8.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -8.84, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -8.84, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 2.69, freq: {check: 0.24, bet: 0.76}, ev: {check: 3.16, bet: 2.53} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.69, freq: {check: 0.24, bet: 0.76}, ev: {check: 3.16, bet: 2.53} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.37, freq: {check: 0.30, bet: 0.70}, ev: {check: -0.85, bet: -1.59} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -1.37, freq: {check: 0.30, bet: 0.70}, ev: {check: -0.85, bet: -1.59} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.13, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.07, bet: -1.81} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -1.13, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.07, bet: -1.81} },
      ],
      children: {
        check: {
      meta: { round: 1, pot: 2, toCall: 0, board: [] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 2.18, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.47, bet: 2.18} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 2.18, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.47, bet: 2.18} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.69, freq: {check: 0.14, bet: 0.86}, ev: {check: -3.82, bet: -1.99} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -1.69, freq: {check: 0.14, bet: 0.86}, ev: {check: -3.82, bet: -1.99} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.73, freq: {check: 0.70, bet: 0.30}, ev: {check: -0.31, bet: -3.33} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -1.73, freq: {check: 0.70, bet: 0.30}, ev: {check: -0.31, bet: -3.33} },
      ],
      children: {
        check: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.97, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.97, bet: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.97, freq: {check: 1.00, bet: 0.00}, ev: {check: 0.97, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -1.00, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.00, bet: 0.16} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -1.00, freq: {check: 1.00, bet: 0.00}, ev: {check: -1.00, bet: 0.16} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.06, freq: {check: 0.99, bet: 0.01}, ev: {check: 1.06, bet: 1.31} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.00, freq: {check: 0.99, bet: 0.01}, ev: {check: 1.00, bet: 1.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.00, freq: {check: 0.99, bet: 0.01}, ev: {check: 1.00, bet: 1.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -0.97, freq: {check: 0.99, bet: 0.01}, ev: {check: -1.00, bet: 0.99} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -0.97, freq: {check: 0.99, bet: 0.01}, ev: {check: -1.00, bet: 0.99} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 1.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.01} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.99, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.99, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: -5.46} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: -5.46} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.51, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.51} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.46, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.46, freq: {fold: 0.25, call: 0.75}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.16, freq: {fold: 0.86, call: 0.13, raise: 0.01}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.16, freq: {fold: 0.86, call: 0.13, raise: 0.01}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: 2.80} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -1.00, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: 2.80} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 5.32, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.32} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -2.80, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: 9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -2.80, freq: {fold: 0.84, call: 0.16}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.03, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.03, bet: 1.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.03, freq: {check: 1.00, bet: 0.00}, ev: {check: 1.03, bet: 1.18} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 2.23, freq: {check: 0.46, bet: 0.54}, ev: {check: 1.25, bet: 3.07} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.84, freq: {check: 0.78, bet: 0.22}, ev: {check: -1.00, bet: -4.78} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.84, freq: {check: 0.78, bet: 0.22}, ev: {check: -1.00, bet: -4.78} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.00, freq: {check: 0.96, bet: 0.04}, ev: {check: 1.00, bet: 0.99} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.00, freq: {check: 0.96, bet: 0.04}, ev: {check: 1.00, bet: 0.99} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 1.80, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 1.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.03, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.00, bet: -1.34} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.03, freq: {check: 0.92, bet: 0.08}, ev: {check: -1.00, bet: -1.34} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.34, freq: {fold: 0.61, call: 0.39, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.34, freq: {fold: 0.61, call: 0.39, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 5.40, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 5.40} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.99, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: 2.21} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.99, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: 2.21} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -2.21, freq: {fold: 0.80, call: 0.20}, ev: {fold: -5.00, call: 9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -2.21, freq: {fold: 0.80, call: 0.20}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.78, freq: {fold: 0.04, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.78, freq: {fold: 0.04, call: 0.96, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.63, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 6.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.18, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -5.00, raise: -6.39} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.18, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -1.00, call: -5.00, raise: -6.39} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 6.39, freq: {fold: 0.19, call: 0.81}, ev: {fold: -5.00, call: 9.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 6.39, freq: {fold: 0.19, call: 0.81}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -5.00, call: -9.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 2.43, freq: {check: 0.01, bet: 0.99}, ev: {check: 2.40, bet: 2.43} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.04, freq: {check: 0.63, bet: 0.37}, ev: {check: 1.04, bet: 1.04} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.04, freq: {check: 0.63, bet: 0.37}, ev: {check: 1.04, bet: 1.04} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.16, freq: {check: 0.93, bet: 0.07}, ev: {check: -1.00, bet: -3.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.16, freq: {check: 0.93, bet: 0.07}, ev: {check: -1.00, bet: -3.19} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 2, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 3.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 1.00, bet: 3.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.00, freq: {check: 0.66, bet: 0.34}, ev: {check: 1.00, bet: 1.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.00, freq: {check: 0.66, bet: 0.34}, ev: {check: 1.00, bet: 1.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -1.00, bet: -4.98} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -1.00, bet: -4.98} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 6, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.04, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -1.00, call: 5.00, raise: 7.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 4.98, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.11} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 4.98, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -1.00, call: 5.00, raise: 5.11} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: -8.97} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -1.00, call: -5.00, raise: -8.97} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 8.99, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 8.97, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 8.97, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.11, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.11, freq: {fold: 0.97, call: 0.03}, ev: {fold: -5.00, call: -9.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.24, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -1.00, call: 5.00, raise: 7.24} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 3.19, freq: {fold: 0.30, call: 0.69, raise: 0.01}, ev: {fold: -1.00, call: 5.00, raise: 5.50} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 3.19, freq: {fold: 0.30, call: 0.69, raise: 0.01}, ev: {fold: -1.00, call: 5.00, raise: 5.50} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.04, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -1.00, call: -5.00, raise: -8.96} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.04, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -1.00, call: -5.00, raise: -8.96} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 8.96, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 8.96, freq: {fold: 0.00, call: 1.00}, ev: {fold: -5.00, call: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.50, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: -9.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.50, freq: {fold: 0.88, call: 0.12}, ev: {fold: -5.00, call: -9.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 4.44, freq: {fold: 0.00, call: 0.37, raise: 0.63}, ev: {fold: -1.00, call: 4.29, raise: 4.98} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 4.44, freq: {fold: 0.00, call: 0.37, raise: 0.63}, ev: {fold: -1.00, call: 4.29, raise: 4.98} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -0.25, freq: {fold: 0.01, call: 0.86, raise: 0.13}, ev: {fold: -1.00, call: -5.31, raise: -1.10} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -0.25, freq: {fold: 0.01, call: 0.86, raise: 0.13}, ev: {fold: -1.00, call: -5.31, raise: -1.10} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.06, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.78, raise: -1.92} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -1.06, freq: {fold: 0.94, call: 0.04, raise: 0.02}, ev: {fold: -1.00, call: -0.78, raise: -1.92} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.09, freq: {check: 0.99, bet: 0.01}, ev: {check: 5.11, bet: 2.94} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.09, freq: {check: 0.99, bet: 0.01}, ev: {check: 5.11, bet: 2.94} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.05, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.02, bet: -4.79} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.05, freq: {check: 0.98, bet: 0.02}, ev: {check: -3.02, bet: -4.79} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.64, freq: {check: 0.30, bet: 0.70}, ev: {check: 4.74, bet: 4.60} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.02, freq: {check: 0.83, bet: 0.17}, ev: {check: 3.00, bet: 3.12} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.02, freq: {check: 0.83, bet: 0.17}, ev: {check: 3.00, bet: 3.12} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.11, freq: {check: 0.47, bet: 0.53}, ev: {check: -3.00, bet: -6.98} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.11, freq: {check: 0.47, bet: 0.53}, ev: {check: -3.00, bet: -6.98} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 5.06, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 5.06} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 6.98, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 6.98, freq: {fold: 0.00, call: 1.00, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.12, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: -10.93} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.12, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: -10.93} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 10.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 10.93, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.79, freq: {fold: 0.22, call: 0.78, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.79, freq: {fold: 0.22, call: 0.78, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.94, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 5.92} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.94, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 5.92} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 7.13, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.13} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -5.92, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -5.92, freq: {fold: 0.94, call: 0.06}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.02, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.02, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.96, freq: {check: 0.07, bet: 0.93}, ev: {check: 2.84, bet: 1.90} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.96, freq: {check: 0.07, bet: 0.93}, ev: {check: 2.84, bet: 1.90} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.33, freq: {check: 0.01, bet: 0.99}, ev: {check: 4.44, bet: 4.32} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.31, freq: {check: 0.04, bet: 0.96}, ev: {check: -2.72, bet: -1.25} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.31, freq: {check: 0.04, bet: 0.96}, ev: {check: -2.72, bet: -1.25} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.72, freq: {check: 0.75, bet: 0.25}, ev: {check: 3.00, bet: 1.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.72, freq: {check: 0.75, bet: 0.25}, ev: {check: 3.00, bet: 1.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.63, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.63} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.84, freq: {check: 0.55, bet: 0.45}, ev: {check: -3.00, bet: -2.64} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.84, freq: {check: 0.55, bet: 0.45}, ev: {check: -3.00, bet: -2.64} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.64, freq: {fold: 0.44, call: 0.56, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.14} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.64, freq: {fold: 0.44, call: 0.56, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.14} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.12, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.12} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.88, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -7.00, raise: 6.55} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.88, freq: {fold: 0.88, call: 0.00, raise: 0.12}, ev: {fold: -3.00, call: -7.00, raise: 6.55} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.55, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.55, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.14, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.14, freq: {fold: 0.96, call: 0.04}, ev: {fold: -7.00, call: -11.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 1.25, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 1.25, freq: {fold: 0.58, call: 0.41, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.01, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.90, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -7.00, raise: 6.91} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.90, freq: {fold: 0.89, call: 0.00, raise: 0.11}, ev: {fold: -3.00, call: -7.00, raise: 6.91} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.91, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.91, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.54, freq: {check: 0.85, bet: 0.15}, ev: {check: 4.64, bet: 4.01} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.84, freq: {check: 0.99, bet: 0.01}, ev: {check: 2.84, bet: 2.87} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.84, freq: {check: 0.99, bet: 0.01}, ev: {check: 2.84, bet: 2.87} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.90, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.97, bet: -1.66} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.90, freq: {check: 0.95, bet: 0.05}, ev: {check: -2.97, bet: -1.66} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.19, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.19} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.97, freq: {check: 0.71, bet: 0.29}, ev: {check: 3.00, bet: 2.89} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.97, freq: {check: 0.71, bet: 0.29}, ev: {check: 3.00, bet: 2.89} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.84, freq: {check: 0.48, bet: 0.52}, ev: {check: -3.00, bet: -2.69} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.84, freq: {check: 0.48, bet: 0.52}, ev: {check: -3.00, bet: -2.69} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.05} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.69, freq: {fold: 0.43, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.69, freq: {fold: 0.43, call: 0.56, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.89, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.59} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.89, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.59} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -6.59, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -6.59, freq: {fold: 0.98, call: 0.02}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.66, freq: {fold: 0.53, call: 0.46, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.66, freq: {fold: 0.53, call: 0.46, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.87, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.75} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.87, freq: {fold: 0.98, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.75} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -6.75, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -6.75, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 4.77, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 9.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 4.77, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 9.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -2.83, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -6.26} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -2.83, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -6.26} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -3.89, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.10} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -3.89, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -2.10} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.01, freq: {check: 0.95, bet: 0.05}, ev: {check: 5.02, bet: 4.84} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.01, freq: {check: 0.95, bet: 0.05}, ev: {check: 5.02, bet: 4.84} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.04, freq: {check: 0.98, bet: 0.02}, ev: {check: -5.01, bet: -6.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.04, freq: {check: 0.98, bet: 0.02}, ev: {check: -5.01, bet: -6.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.85, freq: {check: 0.05, bet: 0.95}, ev: {check: 6.86, bet: 6.85} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.01, freq: {check: 0.52, bet: 0.48}, ev: {check: 5.00, bet: 5.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.01, freq: {check: 0.52, bet: 0.48}, ev: {check: 5.00, bet: 5.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.02, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.87} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.02, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.87} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 7.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 8.87, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.10} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 8.87, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.10} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -9.00, raise: -11.02} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.02, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -9.00, raise: -11.02} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.87, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.87} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 11.02, freq: {fold: 0.09, call: 0.91}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 11.02, freq: {fold: 0.09, call: 0.91}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.10, freq: {fold: 0.97, call: 0.03}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 6.88, freq: {fold: 0.15, call: 0.83, raise: 0.02}, ev: {fold: -5.00, call: 9.00, raise: 9.15} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 6.88, freq: {fold: 0.15, call: 0.83, raise: 0.02}, ev: {fold: -5.00, call: 9.00, raise: 9.15} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -4.84, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -9.00, raise: 0.83} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -4.84, freq: {fold: 0.97, call: 0.00, raise: 0.03}, ev: {fold: -5.00, call: -9.00, raise: 0.83} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 9.82, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.82} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.83, freq: {fold: 0.63, call: 0.37}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.83, freq: {fold: 0.63, call: 0.37}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.15, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.15, freq: {fold: 0.96, call: 0.04}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.96, freq: {check: 0.99, bet: 0.01}, ev: {check: 4.97, bet: 4.37} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.96, freq: {check: 0.99, bet: 0.01}, ev: {check: 4.97, bet: 4.37} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 6.76, freq: {check: 0.93, bet: 0.07}, ev: {check: 6.72, bet: 7.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.51, freq: {check: 0.98, bet: 0.02}, ev: {check: -4.52, bet: -3.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.51, freq: {check: 0.98, bet: 0.02}, ev: {check: -4.52, bet: -3.84} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.52, freq: {check: 0.44, bet: 0.56}, ev: {check: 5.00, bet: 4.15} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.52, freq: {check: 0.44, bet: 0.56}, ev: {check: 5.00, bet: 4.15} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.01, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.97, freq: {check: 0.92, bet: 0.08}, ev: {check: -5.00, bet: -4.61} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.97, freq: {check: 0.92, bet: 0.08}, ev: {check: -5.00, bet: -4.61} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.61, freq: {fold: 0.31, call: 0.67, raise: 0.02}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.61, freq: {fold: 0.31, call: 0.67, raise: 0.02}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.77, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.77} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.15, freq: {fold: 0.85, call: 0.00, raise: 0.15}, ev: {fold: -5.00, call: -9.00, raise: 0.63} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.15, freq: {fold: 0.85, call: 0.00, raise: 0.15}, ev: {fold: -5.00, call: -9.00, raise: 0.63} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.63, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.63, freq: {fold: 0.62, call: 0.38}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.02, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.02, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.84, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.24} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.84, freq: {fold: 0.37, call: 0.62, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.24} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 10.16, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.16} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.37, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -9.00, raise: -2.48} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.37, freq: {fold: 0.75, call: 0.00, raise: 0.25}, ev: {fold: -5.00, call: -9.00, raise: -2.48} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.48, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.48, freq: {fold: 0.48, call: 0.52}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.24, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.24, freq: {fold: 0.94, call: 0.06}, ev: {fold: -9.00, call: -13.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 6.30, freq: {check: 0.00, bet: 1.00}, ev: {check: 6.00, bet: 6.30} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.83, freq: {check: 0.05, bet: 0.95}, ev: {check: 5.15, bet: 2.70} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.83, freq: {check: 0.05, bet: 0.95}, ev: {check: 5.15, bet: 2.70} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.92, bet: 0.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.66, freq: {check: 0.01, bet: 0.99}, ev: {check: -4.92, bet: 0.73} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.41, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.41} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 4.92, freq: {check: 0.95, bet: 0.05}, ev: {check: 5.00, bet: 3.46} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 4.92, freq: {check: 0.95, bet: 0.05}, ev: {check: 5.00, bet: 3.46} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.15, freq: {check: 0.56, bet: 0.44}, ev: {check: -5.00, bet: -5.34} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.15, freq: {check: 0.56, bet: 0.44}, ev: {check: -5.00, bet: -5.34} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.50, freq: {fold: 0.00, call: 0.01, raise: 0.99}, ev: {fold: -5.00, call: 9.00, raise: 9.52} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 5.34, freq: {fold: 0.26, call: 0.69, raise: 0.05}, ev: {fold: -5.00, call: 9.00, raise: 9.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 5.34, freq: {fold: 0.26, call: 0.69, raise: 0.05}, ev: {fold: -5.00, call: 9.00, raise: 9.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.46, freq: {fold: 0.78, call: 0.02, raise: 0.20}, ev: {fold: -5.00, call: -9.00, raise: 3.27} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.46, freq: {fold: 0.78, call: 0.02, raise: 0.20}, ev: {fold: -5.00, call: -9.00, raise: 3.27} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -3.27, freq: {fold: 0.74, call: 0.26}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -3.27, freq: {fold: 0.74, call: 0.26}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.03, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.03} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.73, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.73, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.70, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -9.00, raise: 8.73} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.70, freq: {fold: 0.83, call: 0.00, raise: 0.17}, ev: {fold: -5.00, call: -9.00, raise: 8.73} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -8.73, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -8.73, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 3.61, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 6.64, raise: 4.92} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 3.61, freq: {fold: 0.00, call: 0.41, raise: 0.59}, ev: {fold: -1.00, call: 6.64, raise: 4.92} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -1.58, freq: {fold: 0.01, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: -4.27, raise: -1.68} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -1.58, freq: {fold: 0.01, call: 0.62, raise: 0.38}, ev: {fold: -1.00, call: -4.27, raise: -1.68} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -1.16, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 1.73, raise: -1.57} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -1.16, freq: {fold: 0.82, call: 0.13, raise: 0.06}, ev: {fold: -1.00, call: 1.73, raise: -1.57} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.03, freq: {check: 0.98, bet: 0.02}, ev: {check: 3.03, bet: 2.87} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.03, freq: {check: 0.98, bet: 0.02}, ev: {check: 3.03, bet: 2.87} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.00, bet: -4.96} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.00, bet: -4.96} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.67, freq: {check: 0.07, bet: 0.93}, ev: {check: 4.70, bet: 4.66} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.00, freq: {check: 0.58, bet: 0.42}, ev: {check: 3.00, bet: 3.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.00, freq: {check: 0.58, bet: 0.42}, ev: {check: 3.00, bet: 3.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.00, bet: -6.88} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.03, freq: {check: 0.99, bet: 0.01}, ev: {check: -3.00, bet: -6.88} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 4.98, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.98} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 6.88, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 6.88, freq: {fold: 0.01, call: 0.99, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.04} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -3.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -7.00, raise: -10.89} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -3.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -3.00, call: -7.00, raise: -10.89} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 8.99, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 9.01} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 10.89, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 10.89, freq: {fold: 0.01, call: 0.99}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.04, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.96, freq: {fold: 0.20, call: 0.79, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.96, freq: {fold: 0.20, call: 0.79, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -2.87, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.14} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -2.87, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.14} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 7.11, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.11} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.14, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.14, freq: {fold: 0.95, call: 0.05}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -7.02, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.12, freq: {check: 0.98, bet: 0.02}, ev: {check: 2.11, bet: 2.88} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.12, freq: {check: 0.98, bet: 0.02}, ev: {check: 2.11, bet: 2.88} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.26, freq: {check: 0.44, bet: 0.56}, ev: {check: 4.98, bet: 3.71} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -0.37, freq: {check: 0.06, bet: 0.94}, ev: {check: -2.98, bet: -0.19} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -0.37, freq: {check: 0.06, bet: 0.94}, ev: {check: -2.98, bet: -0.19} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.98, freq: {check: 0.96, bet: 0.04}, ev: {check: 3.00, bet: 2.62} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.98, freq: {check: 0.96, bet: 0.04}, ev: {check: 3.00, bet: 2.62} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 4.18, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 4.18} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.11, freq: {check: 0.05, bet: 0.95}, ev: {check: -3.00, bet: -2.06} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.11, freq: {check: 0.05, bet: 0.95}, ev: {check: -3.00, bet: -2.06} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.06, freq: {fold: 0.49, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.06, freq: {fold: 0.49, call: 0.50, raise: 0.00}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.62, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -7.00, raise: 6.83} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.62, freq: {fold: 0.96, call: 0.00, raise: 0.04}, ev: {fold: -3.00, call: -7.00, raise: 6.83} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.83, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.83, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 0.19, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 0.19, freq: {fold: 0.68, call: 0.31, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.05, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.05} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.88, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.52} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.88, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -3.00, call: -7.00, raise: 6.52} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -6.52, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 11.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -6.52, freq: {fold: 0.97, call: 0.03}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 4.89, freq: {check: 0.13, bet: 0.87}, ev: {check: 4.48, bet: 4.95} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 1.87, freq: {check: 0.48, bet: 0.52}, ev: {check: 2.79, bet: 1.02} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 1.87, freq: {check: 0.48, bet: 0.52}, ev: {check: 2.79, bet: 1.02} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 0.01, freq: {check: 0.02, bet: 0.98}, ev: {check: -0.15, bet: 0.01} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 0.01, freq: {check: 0.02, bet: 0.98}, ev: {check: -0.15, bet: 0.01} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 6, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.31, freq: {check: 0.00, bet: 1.00}, ev: {check: 3.00, bet: 7.31} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.15, freq: {check: 0.63, bet: 0.37}, ev: {check: 3.00, bet: -4.73} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.15, freq: {check: 0.63, bet: 0.37}, ev: {check: 3.00, bet: -4.73} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -2.79, freq: {check: 0.64, bet: 0.36}, ev: {check: -3.00, bet: -2.43} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -2.79, freq: {check: 0.64, bet: 0.36}, ev: {check: -3.00, bet: -2.43} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 10, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.43, freq: {fold: 0.46, call: 0.52, raise: 0.02}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.43, freq: {fold: 0.46, call: 0.52, raise: 0.02}, ev: {fold: -3.00, call: 7.00, raise: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 4.73, freq: {fold: 0.20, call: 0.01, raise: 0.79}, ev: {fold: -3.00, call: -7.00, raise: 6.80} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 4.73, freq: {fold: 0.20, call: 0.01, raise: 0.79}, ev: {fold: -3.00, call: -7.00, raise: 6.80} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -6.80, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -6.80, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.00, freq: {fold: 1.00, call: 0.00}, ev: {fold: -7.00, call: -11.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.47, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -3.00, call: 7.00, raise: 7.47} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.01, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.01, freq: {fold: 0.70, call: 0.29, raise: 0.01}, ev: {fold: -3.00, call: 7.00, raise: 7.03} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.02, freq: {fold: 0.67, call: 0.00, raise: 0.33}, ev: {fold: -3.00, call: -7.00, raise: 2.94} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.02, freq: {fold: 0.67, call: 0.00, raise: 0.33}, ev: {fold: -3.00, call: -7.00, raise: 2.94} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 18, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 11.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -2.94, freq: {fold: 0.77, call: 0.23}, ev: {fold: -7.00, call: 11.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -2.94, freq: {fold: 0.77, call: 0.23}, ev: {fold: -7.00, call: 11.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -7.03, freq: {fold: 0.99, call: 0.01}, ev: {fold: -7.00, call: -11.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.50, evTotal: 4.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 7.00} },
        { id: "Kb", label: "K♥", equity: 0.50, evTotal: 4.42, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: 7.00} },
        { id: "Qa", label: "Q♠", equity: 0.50, evTotal: -2.84, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -6.57} },
        { id: "Qb", label: "Q♥", equity: 0.50, evTotal: -2.84, freq: {fold: 0.00, call: 1.00}, ev: {fold: -3.00, call: -6.57} },
        { id: "Ja", label: "J♠", equity: 0.50, evTotal: -3.25, freq: {fold: 0.01, call: 0.99}, ev: {fold: -3.00, call: 2.74} },
        { id: "Jb", label: "J♥", equity: 0.50, evTotal: -3.25, freq: {fold: 0.01, call: 0.99}, ev: {fold: -3.00, call: 2.74} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { chance: true, outcomes: [
          { board: "J♠", node: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.05, freq: {check: 0.96, bet: 0.04}, ev: {check: 5.05, bet: 4.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.05, freq: {check: 0.96, bet: 0.04}, ev: {check: 5.05, bet: 4.98} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.02, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.06} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.02, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.06} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 6.91, freq: {check: 0.03, bet: 0.97}, ev: {check: 6.91, bet: 6.91} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["J♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 5.00, freq: {check: 0.52, bet: 0.48}, ev: {check: 5.00, bet: 5.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 5.00, freq: {check: 0.52, bet: 0.48}, ev: {check: 5.00, bet: 5.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.05, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.94} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.05, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.94} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 7.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 8.94, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.05} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 8.94, freq: {fold: 0.00, call: 0.99, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.05} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -9.00, raise: -12.97} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -5.01, freq: {fold: 1.00, call: 0.00, raise: 0.00}, ev: {fold: -5.00, call: -9.00, raise: -12.97} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.98, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 11.02} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 12.97, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 12.97, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.05, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 8.06, freq: {fold: 0.07, call: 0.93, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 8.06, freq: {fold: 0.07, call: 0.93, raise: 0.00}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -9.00, raise: -2.59} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -9.00, raise: -2.59} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 10.06, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.06} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["J♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 2.59, freq: {fold: 0.47, call: 0.53}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 2.59, freq: {fold: 0.47, call: 0.53}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Qb", label: "Q♥", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
      ],
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.81, freq: {check: 0.34, bet: 0.66}, ev: {check: 5.04, bet: 3.18} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.81, freq: {check: 0.34, bet: 0.66}, ev: {check: 5.04, bet: 3.18} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.84, freq: {check: 0.01, bet: 0.99}, ev: {check: 6.61, bet: 7.86} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -4.99, bet: -3.71} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.83, freq: {check: 0.88, bet: 0.12}, ev: {check: -4.99, bet: -3.71} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["Q♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 4.99, freq: {check: 0.49, bet: 0.51}, ev: {check: 5.00, bet: 4.98} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 4.99, freq: {check: 0.49, bet: 0.51}, ev: {check: 5.00, bet: 4.98} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 7.00, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 7.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -5.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.60} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -5.04, freq: {check: 0.99, bet: 0.01}, ev: {check: -5.00, bet: -8.60} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 8.60, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.31} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 8.60, freq: {fold: 0.03, call: 0.96, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.31} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 10.26, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 10.26} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -9.00, raise: -3.10} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -4.98, freq: {fold: 0.99, call: 0.00, raise: 0.01}, ev: {fold: -5.00, call: -9.00, raise: -3.10} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.10, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.10, freq: {fold: 0.45, call: 0.55}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.31, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.31, freq: {fold: 0.92, call: 0.08}, ev: {fold: -9.00, call: -13.00} },
      ],
      children: {
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
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: 3.71, freq: {fold: 0.38, call: 0.51, raise: 0.12}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: 3.71, freq: {fold: 0.38, call: 0.51, raise: 0.12}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 9.80, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.80} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -3.18, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -5.00, call: -9.00, raise: 0.27} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -3.18, freq: {fold: 0.65, call: 0.00, raise: 0.35}, ev: {fold: -5.00, call: -9.00, raise: 0.27} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["Q♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Ka", label: "K♠", equity: 0.63, evTotal: -0.27, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 13.00} },
        { id: "Kb", label: "K♥", equity: 0.63, evTotal: -0.27, freq: {fold: 0.60, call: 0.40}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
      ],
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 7.49, freq: {check: 0.44, bet: 0.56}, ev: {check: 7.92, bet: 7.14} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -0.66, freq: {check: 0.85, bet: 0.15}, ev: {check: -1.00, bet: 1.29} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -0.66, freq: {check: 0.85, bet: 0.15}, ev: {check: -1.00, bet: 1.29} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.67, freq: {check: 0.47, bet: 0.53}, ev: {check: -0.92, bet: -2.33} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.67, freq: {check: 0.47, bet: 0.53}, ev: {check: -0.92, bet: -2.33} },
      ],
      children: {
        check: {
      meta: { round: 2, pot: 10, toCall: 0, board: ["K♠"] },
      actions: ["check", "bet"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 8.58, freq: {check: 0.00, bet: 1.00}, ev: {check: 5.00, bet: 8.58} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 0.92, freq: {check: 0.57, bet: 0.43}, ev: {check: 5.00, bet: -4.43} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 0.92, freq: {check: 0.57, bet: 0.43}, ev: {check: 5.00, bet: -4.43} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 1.00, freq: {check: 0.01, bet: 0.99}, ev: {check: -5.00, bet: 1.08} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 1.00, freq: {check: 0.01, bet: 0.99}, ev: {check: -5.00, bet: 1.08} },
      ],
      children: {
        check: { terminal: true, outcome: 'showdown' },
        bet: {
      meta: { round: 2, pot: 14, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call", "raise"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.16, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.16} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -1.08, freq: {fold: 0.72, call: 0.27, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.06} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -1.08, freq: {fold: 0.72, call: 0.27, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.06} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: 4.43, freq: {fold: 0.25, call: 0.00, raise: 0.75}, ev: {fold: -5.00, call: -9.00, raise: 7.57} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: 4.43, freq: {fold: 0.25, call: 0.00, raise: 0.75}, ev: {fold: -5.00, call: -9.00, raise: 7.57} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -7.57, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -7.57, freq: {fold: 0.93, call: 0.07}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.06, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.06, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: -13.00} },
      ],
      children: {
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
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 9.02, freq: {fold: 0.00, call: 0.00, raise: 1.00}, ev: {fold: -5.00, call: 9.00, raise: 9.02} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: 2.33, freq: {fold: 0.48, call: 0.51, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: 2.33, freq: {fold: 0.48, call: 0.51, raise: 0.01}, ev: {fold: -5.00, call: 9.00, raise: 9.01} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -1.29, freq: {fold: 0.73, call: 0.00, raise: 0.27}, ev: {fold: -5.00, call: -9.00, raise: 8.84} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -1.29, freq: {fold: 0.73, call: 0.00, raise: 0.27}, ev: {fold: -5.00, call: -9.00, raise: 8.84} },
      ],
      children: {
        fold: { terminal: true, outcome: 'showdown' },
        call: { terminal: true, outcome: 'showdown' },
        raise: {
      meta: { round: 2, pot: 22, toCall: 4, board: ["K♠"] },
      actions: ["fold", "call"],
      hands: [
        { id: "Kb", label: "K♥", equity: 1.00, evTotal: 13.00, freq: {fold: 0.00, call: 1.00}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qa", label: "Q♠", equity: 0.63, evTotal: -8.84, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 13.00} },
        { id: "Qb", label: "Q♥", equity: 0.63, evTotal: -8.84, freq: {fold: 0.99, call: 0.01}, ev: {fold: -9.00, call: 13.00} },
        { id: "Ja", label: "J♠", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
        { id: "Jb", label: "J♥", equity: 0.13, evTotal: -9.01, freq: {fold: 1.00, call: 0.00}, ev: {fold: -9.00, call: -13.00} },
      ],
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
