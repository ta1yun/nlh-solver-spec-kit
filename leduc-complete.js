// ============================================================
// COMPLETE Leduc Hold'em Strategy Tree
// Auto-generated from game tree exploration
// Covers ALL strategic spots - no premature terminals!
// ============================================================

(function() {
  const ACT = {
    fold:  { id:'fold',  label:'Fold',  color:'#e5484d', kind:'fold' },
    check: { id:'check', label:'Check', color:'#8b8d98', kind:'passive' },
    call:  { id:'call',  label:'Call',  color:'#3b82f6', kind:'passive' },
    bet:   { id:'bet',   label:'Bet',   color:'#f59e0b', kind:'aggressive' },
    raise: { id:'raise', label:'Raise', color:'#22c55e', kind:'aggressive' },
  };

  function makeScenario_r1_j_() {
    // 
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.50, bet:0.50} },
      Kb: { freq:{check:0.50, bet:0.50} },
      Qa: { freq:{check:0.50, bet:0.50} },
      Qb: { freq:{check:0.50, bet:0.50} },
      Jb: { freq:{check:0.50, bet:0.50} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:2, toCall:0, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_j_b() {
    // bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Kb: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Qa: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Qb: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Jb: { freq:{fold:0.33, call:0.33, raise:0.33} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:4, toCall:2, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_j_br() {
    // bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.50, call:0.50} },
      Kb: { freq:{fold:0.50, call:0.50} },
      Qa: { freq:{fold:0.50, call:0.50} },
      Qb: { freq:{fold:0.50, call:0.50} },
      Jb: { freq:{fold:0.50, call:0.50} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:8, toCall:2, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_j_x() {
    // call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.50, bet:0.50} },
      Kb: { freq:{check:0.50, bet:0.50} },
      Qa: { freq:{check:0.50, bet:0.50} },
      Qb: { freq:{check:0.50, bet:0.50} },
      Jb: { freq:{check:0.50, bet:0.50} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:2, toCall:0, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_j_xb() {
    // call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Kb: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Qa: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Qb: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Jb: { freq:{fold:0.33, call:0.33, raise:0.33} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:4, toCall:2, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_j_xbr() {
    // call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.50, call:0.50} },
      Kb: { freq:{fold:0.50, call:0.50} },
      Qa: { freq:{fold:0.50, call:0.50} },
      Qb: { freq:{fold:0.50, call:0.50} },
      Jb: { freq:{fold:0.50, call:0.50} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:8, toCall:2, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_k_() {
    // 
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{check:0.50, bet:0.50} },
      Qa: { freq:{check:0.50, bet:0.50} },
      Qb: { freq:{check:0.50, bet:0.50} },
      Ja: { freq:{check:0.50, bet:0.50} },
      Jb: { freq:{check:0.50, bet:0.50} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:2, toCall:0, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_k_b() {
    // bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Qa: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Qb: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Ja: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Jb: { freq:{fold:0.33, call:0.33, raise:0.33} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:4, toCall:2, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_k_br() {
    // bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.50, call:0.50} },
      Qa: { freq:{fold:0.50, call:0.50} },
      Qb: { freq:{fold:0.50, call:0.50} },
      Ja: { freq:{fold:0.50, call:0.50} },
      Jb: { freq:{fold:0.50, call:0.50} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:8, toCall:2, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_k_x() {
    // call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{check:0.50, bet:0.50} },
      Qa: { freq:{check:0.50, bet:0.50} },
      Qb: { freq:{check:0.50, bet:0.50} },
      Ja: { freq:{check:0.50, bet:0.50} },
      Jb: { freq:{check:0.50, bet:0.50} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:2, toCall:0, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_k_xb() {
    // call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Qa: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Qb: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Ja: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Jb: { freq:{fold:0.33, call:0.33, raise:0.33} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:4, toCall:2, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_k_xbr() {
    // call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.50, call:0.50} },
      Qa: { freq:{fold:0.50, call:0.50} },
      Qb: { freq:{fold:0.50, call:0.50} },
      Ja: { freq:{fold:0.50, call:0.50} },
      Jb: { freq:{fold:0.50, call:0.50} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:8, toCall:2, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_q_() {
    // 
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.50, bet:0.50} },
      Kb: { freq:{check:0.50, bet:0.50} },
      Qb: { freq:{check:0.50, bet:0.50} },
      Ja: { freq:{check:0.50, bet:0.50} },
      Jb: { freq:{check:0.50, bet:0.50} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:2, toCall:0, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_q_b() {
    // bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Kb: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Qb: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Ja: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Jb: { freq:{fold:0.33, call:0.33, raise:0.33} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:4, toCall:2, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_q_br() {
    // bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.50, call:0.50} },
      Kb: { freq:{fold:0.50, call:0.50} },
      Qb: { freq:{fold:0.50, call:0.50} },
      Ja: { freq:{fold:0.50, call:0.50} },
      Jb: { freq:{fold:0.50, call:0.50} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:8, toCall:2, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_q_x() {
    // call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.50, bet:0.50} },
      Kb: { freq:{check:0.50, bet:0.50} },
      Qb: { freq:{check:0.50, bet:0.50} },
      Ja: { freq:{check:0.50, bet:0.50} },
      Jb: { freq:{check:0.50, bet:0.50} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:2, toCall:0, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_q_xb() {
    // call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Kb: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Qb: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Ja: { freq:{fold:0.33, call:0.33, raise:0.33} },
      Jb: { freq:{fold:0.33, call:0.33, raise:0.33} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:4, toCall:2, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r1_q_xbr() {
    // call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.50, call:0.50} },
      Kb: { freq:{fold:0.50, call:0.50} },
      Qb: { freq:{fold:0.50, call:0.50} },
      Ja: { freq:{fold:0.50, call:0.50} },
      Jb: { freq:{fold:0.50, call:0.50} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:8, toCall:2, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_bc_() {
    // bet call |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.98, bet:0.02} },
      Kb: { freq:{check:0.98, bet:0.02} },
      Qa: { freq:{check:0.99, bet:0.01} },
      Qb: { freq:{check:0.99, bet:0.01} },
      Jb: { freq:{check:0.07, bet:0.93} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:0, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_bc_b() {
    // bet call | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.20, call:0.79, raise:0.01} },
      Kb: { freq:{fold:0.20, call:0.79, raise:0.01} },
      Qa: { freq:{fold:0.99, call:0.00, raise:0.01} },
      Qb: { freq:{fold:0.99, call:0.00, raise:0.01} },
      Jb: { freq:{fold:0.00, call:0.00, raise:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_bc_br() {
    // bet call | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.95, call:0.05} },
      Kb: { freq:{fold:0.95, call:0.05} },
      Qa: { freq:{fold:0.99, call:0.01} },
      Qb: { freq:{fold:0.99, call:0.01} },
      Jb: { freq:{fold:0.00, call:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:18, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_bc_x() {
    // bet call | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.58, bet:0.42} },
      Kb: { freq:{check:0.58, bet:0.42} },
      Qa: { freq:{check:0.99, bet:0.01} },
      Qb: { freq:{check:0.99, bet:0.01} },
      Jb: { freq:{check:0.00, bet:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:0, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_bc_xb() {
    // bet call | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.01, call:0.99, raise:0.00} },
      Kb: { freq:{fold:0.01, call:0.99, raise:0.00} },
      Qa: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Qb: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Jb: { freq:{fold:0.00, call:0.00, raise:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_bc_xbr() {
    // bet call | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.01, call:0.99} },
      Kb: { freq:{fold:0.01, call:0.99} },
      Qa: { freq:{fold:0.99, call:0.01} },
      Qb: { freq:{fold:0.99, call:0.01} },
      Jb: { freq:{fold:0.00, call:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:18, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_brc_() {
    // bet raise call |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.96, bet:0.04} },
      Kb: { freq:{check:0.96, bet:0.04} },
      Qa: { freq:{check:0.99, bet:0.01} },
      Qb: { freq:{check:0.99, bet:0.01} },
      Jb: { freq:{check:0.03, bet:0.97} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:0, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_brc_b() {
    // bet raise call | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.07, call:0.93, raise:0.00} },
      Kb: { freq:{fold:0.07, call:0.93, raise:0.00} },
      Qa: { freq:{fold:0.99, call:0.00, raise:0.01} },
      Qb: { freq:{fold:0.99, call:0.00, raise:0.01} },
      Jb: { freq:{fold:0.00, call:0.00, raise:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_brc_br() {
    // bet raise call | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.47, call:0.53} },
      Kb: { freq:{fold:0.47, call:0.53} },
      Qa: { freq:{fold:1.00, call:0.00} },
      Qb: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:0.00, call:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:22, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_brc_x() {
    // bet raise call | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.52, bet:0.48} },
      Kb: { freq:{check:0.52, bet:0.48} },
      Qa: { freq:{check:0.99, bet:0.01} },
      Qb: { freq:{check:0.99, bet:0.01} },
      Jb: { freq:{check:0.00, bet:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:0, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_brc_xb() {
    // bet raise call | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.00, call:0.99, raise:0.00} },
      Kb: { freq:{fold:0.00, call:0.99, raise:0.00} },
      Qa: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Qb: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Jb: { freq:{fold:0.00, call:0.00, raise:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_brc_xbr() {
    // bet raise call | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.00, call:1.00} },
      Kb: { freq:{fold:0.00, call:1.00} },
      Qa: { freq:{fold:0.99, call:0.01} },
      Qb: { freq:{fold:0.99, call:0.01} },
      Jb: { freq:{fold:0.00, call:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:22, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xbc_() {
    // call hecall k bet call |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.99, bet:0.01} },
      Kb: { freq:{check:0.99, bet:0.01} },
      Qa: { freq:{check:0.98, bet:0.02} },
      Qb: { freq:{check:0.98, bet:0.02} },
      Jb: { freq:{check:0.30, bet:0.70} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:0, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xbc_b() {
    // call hecall k bet call | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.22, call:0.78, raise:0.00} },
      Kb: { freq:{fold:0.22, call:0.78, raise:0.00} },
      Qa: { freq:{fold:0.99, call:0.00, raise:0.01} },
      Qb: { freq:{fold:0.99, call:0.00, raise:0.01} },
      Jb: { freq:{fold:0.00, call:0.00, raise:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xbc_br() {
    // call hecall k bet call | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.94, call:0.06} },
      Kb: { freq:{fold:0.94, call:0.06} },
      Qa: { freq:{fold:1.00, call:0.00} },
      Qb: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:0.00, call:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:18, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xbc_x() {
    // call hecall k bet call | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.83, bet:0.17} },
      Kb: { freq:{check:0.83, bet:0.17} },
      Qa: { freq:{check:0.47, bet:0.53} },
      Qb: { freq:{check:0.47, bet:0.53} },
      Jb: { freq:{check:0.00, bet:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:0, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xbc_xb() {
    // call hecall k bet call | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.00, call:1.00, raise:0.00} },
      Kb: { freq:{fold:0.00, call:1.00, raise:0.00} },
      Qa: { freq:{fold:0.98, call:0.00, raise:0.01} },
      Qb: { freq:{fold:0.98, call:0.00, raise:0.01} },
      Jb: { freq:{fold:0.00, call:0.00, raise:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xbc_xbr() {
    // call hecall k bet call | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.00, call:1.00} },
      Kb: { freq:{fold:0.00, call:1.00} },
      Qa: { freq:{fold:0.99, call:0.01} },
      Qb: { freq:{fold:0.99, call:0.01} },
      Jb: { freq:{fold:0.00, call:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:18, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xbrc_() {
    // call hecall k bet raise call |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.95, bet:0.05} },
      Kb: { freq:{check:0.95, bet:0.05} },
      Qa: { freq:{check:0.98, bet:0.02} },
      Qb: { freq:{check:0.98, bet:0.02} },
      Jb: { freq:{check:0.05, bet:0.95} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:0, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xbrc_b() {
    // call hecall k bet raise call | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.15, call:0.83, raise:0.02} },
      Kb: { freq:{fold:0.15, call:0.83, raise:0.02} },
      Qa: { freq:{fold:0.97, call:0.00, raise:0.03} },
      Qb: { freq:{fold:0.97, call:0.00, raise:0.03} },
      Jb: { freq:{fold:0.00, call:0.00, raise:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xbrc_br() {
    // call hecall k bet raise call | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.63, call:0.37} },
      Kb: { freq:{fold:0.63, call:0.37} },
      Qa: { freq:{fold:0.96, call:0.04} },
      Qb: { freq:{fold:0.96, call:0.04} },
      Jb: { freq:{fold:0.00, call:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:22, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xbrc_x() {
    // call hecall k bet raise call | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.52, bet:0.48} },
      Kb: { freq:{check:0.52, bet:0.48} },
      Qa: { freq:{check:0.99, bet:0.01} },
      Qb: { freq:{check:0.99, bet:0.01} },
      Jb: { freq:{check:0.00, bet:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:0, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xbrc_xb() {
    // call hecall k bet raise call | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.01, call:0.99, raise:0.00} },
      Kb: { freq:{fold:0.01, call:0.99, raise:0.00} },
      Qa: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Qb: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Jb: { freq:{fold:0.00, call:0.00, raise:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xbrc_xbr() {
    // call hecall k bet raise call | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.09, call:0.91} },
      Kb: { freq:{fold:0.09, call:0.91} },
      Qa: { freq:{fold:0.97, call:0.03} },
      Qb: { freq:{fold:0.97, call:0.03} },
      Jb: { freq:{fold:0.00, call:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:22, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xx_() {
    // call hecall k call hecall k |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:1.00, bet:0.00} },
      Kb: { freq:{check:1.00, bet:0.00} },
      Qa: { freq:{check:1.00, bet:0.00} },
      Qb: { freq:{check:1.00, bet:0.00} },
      Jb: { freq:{check:0.99, bet:0.01} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:2, toCall:0, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xx_b() {
    // call hecall k call hecall k | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.86, call:0.13, raise:0.01} },
      Kb: { freq:{fold:0.86, call:0.13, raise:0.01} },
      Qa: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Qb: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Jb: { freq:{fold:0.00, call:0.00, raise:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xx_br() {
    // call hecall k call hecall k | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.84, call:0.16} },
      Kb: { freq:{fold:0.84, call:0.16} },
      Qa: { freq:{fold:1.00, call:0.00} },
      Qb: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:0.00, call:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xx_x() {
    // call hecall k call hecall k | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.99, bet:0.01} },
      Kb: { freq:{check:0.99, bet:0.01} },
      Qa: { freq:{check:0.99, bet:0.01} },
      Qb: { freq:{check:0.99, bet:0.01} },
      Jb: { freq:{check:0.00, bet:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:2, toCall:0, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xx_xb() {
    // call hecall k call hecall k | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Kb: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Qa: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Qb: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Jb: { freq:{fold:0.00, call:0.00, raise:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_j_xx_xbr() {
    // call hecall k call hecall k | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.25, call:0.75} },
      Kb: { freq:{fold:0.25, call:0.75} },
      Qa: { freq:{fold:0.99, call:0.01} },
      Qb: { freq:{fold:0.99, call:0.01} },
      Jb: { freq:{fold:0.00, call:1.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['J♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_bc_() {
    // bet call |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{check:0.13, bet:0.87} },
      Qa: { freq:{check:0.48, bet:0.52} },
      Qb: { freq:{check:0.48, bet:0.52} },
      Ja: { freq:{check:0.02, bet:0.98} },
      Jb: { freq:{check:0.02, bet:0.98} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:0, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_bc_b() {
    // bet call | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Qa: { freq:{fold:0.70, call:0.29, raise:0.01} },
      Qb: { freq:{fold:0.70, call:0.29, raise:0.01} },
      Ja: { freq:{fold:0.67, call:0.00, raise:0.33} },
      Jb: { freq:{fold:0.67, call:0.00, raise:0.33} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_bc_br() {
    // bet call | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:1.00} },
      Qa: { freq:{fold:0.77, call:0.23} },
      Qb: { freq:{fold:0.77, call:0.23} },
      Ja: { freq:{fold:0.99, call:0.01} },
      Jb: { freq:{fold:0.99, call:0.01} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:18, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_bc_x() {
    // bet call | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{check:0.00, bet:1.00} },
      Qa: { freq:{check:0.63, bet:0.37} },
      Qb: { freq:{check:0.63, bet:0.37} },
      Ja: { freq:{check:0.64, bet:0.36} },
      Jb: { freq:{check:0.64, bet:0.36} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:0, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_bc_xb() {
    // bet call | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Qa: { freq:{fold:0.46, call:0.52, raise:0.02} },
      Qb: { freq:{fold:0.46, call:0.52, raise:0.02} },
      Ja: { freq:{fold:0.20, call:0.01, raise:0.79} },
      Jb: { freq:{fold:0.20, call:0.01, raise:0.79} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_bc_xbr() {
    // bet call | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:1.00} },
      Qa: { freq:{fold:0.99, call:0.01} },
      Qb: { freq:{fold:0.99, call:0.01} },
      Ja: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:1.00, call:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:18, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_brc_() {
    // bet raise call |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{check:0.44, bet:0.56} },
      Qa: { freq:{check:0.85, bet:0.15} },
      Qb: { freq:{check:0.85, bet:0.15} },
      Ja: { freq:{check:0.47, bet:0.53} },
      Jb: { freq:{check:0.47, bet:0.53} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:0, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_brc_b() {
    // bet raise call | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Qa: { freq:{fold:0.48, call:0.51, raise:0.01} },
      Qb: { freq:{fold:0.48, call:0.51, raise:0.01} },
      Ja: { freq:{fold:0.73, call:0.00, raise:0.27} },
      Jb: { freq:{fold:0.73, call:0.00, raise:0.27} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_brc_br() {
    // bet raise call | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:1.00} },
      Qa: { freq:{fold:0.99, call:0.01} },
      Qb: { freq:{fold:0.99, call:0.01} },
      Ja: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:1.00, call:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:22, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_brc_x() {
    // bet raise call | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{check:0.00, bet:1.00} },
      Qa: { freq:{check:0.57, bet:0.43} },
      Qb: { freq:{check:0.57, bet:0.43} },
      Ja: { freq:{check:0.01, bet:0.99} },
      Jb: { freq:{check:0.01, bet:0.99} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:0, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_brc_xb() {
    // bet raise call | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Qa: { freq:{fold:0.72, call:0.27, raise:0.01} },
      Qb: { freq:{fold:0.72, call:0.27, raise:0.01} },
      Ja: { freq:{fold:0.25, call:0.00, raise:0.75} },
      Jb: { freq:{fold:0.25, call:0.00, raise:0.75} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_brc_xbr() {
    // bet raise call | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:1.00} },
      Qa: { freq:{fold:0.93, call:0.07} },
      Qb: { freq:{fold:0.93, call:0.07} },
      Ja: { freq:{fold:0.99, call:0.01} },
      Jb: { freq:{fold:0.99, call:0.01} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:22, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xbc_() {
    // call hecall k bet call |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{check:0.85, bet:0.15} },
      Qa: { freq:{check:0.99, bet:0.01} },
      Qb: { freq:{check:0.99, bet:0.01} },
      Ja: { freq:{check:0.95, bet:0.05} },
      Jb: { freq:{check:0.95, bet:0.05} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:0, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xbc_b() {
    // call hecall k bet call | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Qa: { freq:{fold:0.53, call:0.46, raise:0.01} },
      Qb: { freq:{fold:0.53, call:0.46, raise:0.01} },
      Ja: { freq:{fold:0.98, call:0.00, raise:0.01} },
      Jb: { freq:{fold:0.98, call:0.00, raise:0.01} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xbc_br() {
    // call hecall k bet call | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:1.00} },
      Qa: { freq:{fold:0.99, call:0.01} },
      Qb: { freq:{fold:0.99, call:0.01} },
      Ja: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:1.00, call:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:18, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xbc_x() {
    // call hecall k bet call | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{check:0.00, bet:1.00} },
      Qa: { freq:{check:0.71, bet:0.29} },
      Qb: { freq:{check:0.71, bet:0.29} },
      Ja: { freq:{check:0.48, bet:0.52} },
      Jb: { freq:{check:0.48, bet:0.52} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:0, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xbc_xb() {
    // call hecall k bet call | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Qa: { freq:{fold:0.43, call:0.56, raise:0.00} },
      Qb: { freq:{fold:0.43, call:0.56, raise:0.00} },
      Ja: { freq:{fold:0.99, call:0.00, raise:0.01} },
      Jb: { freq:{fold:0.99, call:0.00, raise:0.01} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xbc_xbr() {
    // call hecall k bet call | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:1.00} },
      Qa: { freq:{fold:0.98, call:0.02} },
      Qb: { freq:{fold:0.98, call:0.02} },
      Ja: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:1.00, call:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:18, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xbrc_() {
    // call hecall k bet raise call |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{check:0.00, bet:1.00} },
      Qa: { freq:{check:0.05, bet:0.95} },
      Qb: { freq:{check:0.05, bet:0.95} },
      Ja: { freq:{check:0.01, bet:0.99} },
      Jb: { freq:{check:0.01, bet:0.99} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:0, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xbrc_b() {
    // call hecall k bet raise call | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Qa: { freq:{fold:0.70, call:0.29, raise:0.01} },
      Qb: { freq:{fold:0.70, call:0.29, raise:0.01} },
      Ja: { freq:{fold:0.83, call:0.00, raise:0.17} },
      Jb: { freq:{fold:0.83, call:0.00, raise:0.17} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xbrc_br() {
    // call hecall k bet raise call | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:1.00} },
      Qa: { freq:{fold:0.99, call:0.01} },
      Qb: { freq:{fold:0.99, call:0.01} },
      Ja: { freq:{fold:0.99, call:0.01} },
      Jb: { freq:{fold:0.99, call:0.01} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:22, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xbrc_x() {
    // call hecall k bet raise call | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{check:0.00, bet:1.00} },
      Qa: { freq:{check:0.95, bet:0.05} },
      Qb: { freq:{check:0.95, bet:0.05} },
      Ja: { freq:{check:0.56, bet:0.44} },
      Jb: { freq:{check:0.56, bet:0.44} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:0, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xbrc_xb() {
    // call hecall k bet raise call | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:0.01, raise:0.99} },
      Qa: { freq:{fold:0.26, call:0.69, raise:0.05} },
      Qb: { freq:{fold:0.26, call:0.69, raise:0.05} },
      Ja: { freq:{fold:0.78, call:0.02, raise:0.20} },
      Jb: { freq:{fold:0.78, call:0.02, raise:0.20} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xbrc_xbr() {
    // call hecall k bet raise call | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:1.00} },
      Qa: { freq:{fold:0.74, call:0.26} },
      Qb: { freq:{fold:0.74, call:0.26} },
      Ja: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:1.00, call:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:22, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xx_() {
    // call hecall k call hecall k |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{check:0.01, bet:0.99} },
      Qa: { freq:{check:0.63, bet:0.37} },
      Qb: { freq:{check:0.63, bet:0.37} },
      Ja: { freq:{check:0.93, bet:0.07} },
      Jb: { freq:{check:0.93, bet:0.07} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:2, toCall:0, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xx_b() {
    // call hecall k call hecall k | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Qa: { freq:{fold:0.30, call:0.69, raise:0.01} },
      Qb: { freq:{fold:0.30, call:0.69, raise:0.01} },
      Ja: { freq:{fold:0.99, call:0.00, raise:0.01} },
      Jb: { freq:{fold:0.99, call:0.00, raise:0.01} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xx_br() {
    // call hecall k call hecall k | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:1.00} },
      Qa: { freq:{fold:0.00, call:1.00} },
      Qb: { freq:{fold:0.00, call:1.00} },
      Ja: { freq:{fold:0.88, call:0.12} },
      Jb: { freq:{fold:0.88, call:0.12} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xx_x() {
    // call hecall k call hecall k | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{check:0.00, bet:1.00} },
      Qa: { freq:{check:0.66, bet:0.34} },
      Qb: { freq:{check:0.66, bet:0.34} },
      Ja: { freq:{check:0.99, bet:0.01} },
      Jb: { freq:{check:0.99, bet:0.01} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:2, toCall:0, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xx_xb() {
    // call hecall k call hecall k | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:0.01, raise:0.99} },
      Qa: { freq:{fold:0.00, call:1.00, raise:0.00} },
      Qb: { freq:{fold:0.00, call:1.00, raise:0.00} },
      Ja: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Jb: { freq:{fold:1.00, call:0.00, raise:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_k_xx_xbr() {
    // call hecall k call hecall k | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Kb: { freq:{fold:0.00, call:1.00} },
      Qa: { freq:{fold:0.00, call:1.00} },
      Qb: { freq:{fold:0.00, call:1.00} },
      Ja: { freq:{fold:0.97, call:0.03} },
      Jb: { freq:{fold:0.97, call:0.03} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['K♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_bc_() {
    // bet call |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.98, bet:0.02} },
      Kb: { freq:{check:0.98, bet:0.02} },
      Qb: { freq:{check:0.44, bet:0.56} },
      Ja: { freq:{check:0.06, bet:0.94} },
      Jb: { freq:{check:0.06, bet:0.94} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:0, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_bc_b() {
    // bet call | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.68, call:0.31, raise:0.01} },
      Kb: { freq:{fold:0.68, call:0.31, raise:0.01} },
      Qb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Ja: { freq:{fold:0.99, call:0.00, raise:0.01} },
      Jb: { freq:{fold:0.99, call:0.00, raise:0.01} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_bc_br() {
    // bet call | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.97, call:0.03} },
      Kb: { freq:{fold:0.97, call:0.03} },
      Qb: { freq:{fold:0.00, call:1.00} },
      Ja: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:1.00, call:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:18, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_bc_x() {
    // bet call | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.96, bet:0.04} },
      Kb: { freq:{check:0.96, bet:0.04} },
      Qb: { freq:{check:0.00, bet:1.00} },
      Ja: { freq:{check:0.05, bet:0.95} },
      Jb: { freq:{check:0.05, bet:0.95} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:0, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_bc_xb() {
    // bet call | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.49, call:0.50, raise:0.00} },
      Kb: { freq:{fold:0.49, call:0.50, raise:0.00} },
      Qb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Ja: { freq:{fold:0.96, call:0.00, raise:0.04} },
      Jb: { freq:{fold:0.96, call:0.00, raise:0.04} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_bc_xbr() {
    // bet call | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.99, call:0.01} },
      Kb: { freq:{fold:0.99, call:0.01} },
      Qb: { freq:{fold:0.00, call:1.00} },
      Ja: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:1.00, call:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:18, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_brc_() {
    // bet raise call |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.34, bet:0.66} },
      Kb: { freq:{check:0.34, bet:0.66} },
      Qb: { freq:{check:0.01, bet:0.99} },
      Ja: { freq:{check:0.88, bet:0.12} },
      Jb: { freq:{check:0.88, bet:0.12} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:0, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_brc_b() {
    // bet raise call | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.38, call:0.51, raise:0.12} },
      Kb: { freq:{fold:0.38, call:0.51, raise:0.12} },
      Qb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Ja: { freq:{fold:0.65, call:0.00, raise:0.35} },
      Jb: { freq:{fold:0.65, call:0.00, raise:0.35} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_brc_br() {
    // bet raise call | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.60, call:0.40} },
      Kb: { freq:{fold:0.60, call:0.40} },
      Qb: { freq:{fold:0.00, call:1.00} },
      Ja: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:1.00, call:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:22, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_brc_x() {
    // bet raise call | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.49, bet:0.51} },
      Kb: { freq:{check:0.49, bet:0.51} },
      Qb: { freq:{check:0.00, bet:1.00} },
      Ja: { freq:{check:0.99, bet:0.01} },
      Jb: { freq:{check:0.99, bet:0.01} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:0, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_brc_xb() {
    // bet raise call | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.03, call:0.96, raise:0.01} },
      Kb: { freq:{fold:0.03, call:0.96, raise:0.01} },
      Qb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Ja: { freq:{fold:0.99, call:0.00, raise:0.01} },
      Jb: { freq:{fold:0.99, call:0.00, raise:0.01} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_brc_xbr() {
    // bet raise call | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.45, call:0.55} },
      Kb: { freq:{fold:0.45, call:0.55} },
      Qb: { freq:{fold:0.00, call:1.00} },
      Ja: { freq:{fold:0.92, call:0.08} },
      Jb: { freq:{fold:0.92, call:0.08} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:22, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xbc_() {
    // call hecall k bet call |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.07, bet:0.93} },
      Kb: { freq:{check:0.07, bet:0.93} },
      Qb: { freq:{check:0.01, bet:0.99} },
      Ja: { freq:{check:0.04, bet:0.96} },
      Jb: { freq:{check:0.04, bet:0.96} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:0, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xbc_b() {
    // call hecall k bet call | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.58, call:0.41, raise:0.01} },
      Kb: { freq:{fold:0.58, call:0.41, raise:0.01} },
      Qb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Ja: { freq:{fold:0.89, call:0.00, raise:0.11} },
      Jb: { freq:{fold:0.89, call:0.00, raise:0.11} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xbc_br() {
    // call hecall k bet call | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:1.00, call:0.00} },
      Kb: { freq:{fold:1.00, call:0.00} },
      Qb: { freq:{fold:0.00, call:1.00} },
      Ja: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:1.00, call:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:18, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xbc_x() {
    // call hecall k bet call | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.75, bet:0.25} },
      Kb: { freq:{check:0.75, bet:0.25} },
      Qb: { freq:{check:0.00, bet:1.00} },
      Ja: { freq:{check:0.55, bet:0.45} },
      Jb: { freq:{check:0.55, bet:0.45} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:0, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xbc_xb() {
    // call hecall k bet call | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.44, call:0.56, raise:0.01} },
      Kb: { freq:{fold:0.44, call:0.56, raise:0.01} },
      Qb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Ja: { freq:{fold:0.88, call:0.00, raise:0.12} },
      Jb: { freq:{fold:0.88, call:0.00, raise:0.12} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xbc_xbr() {
    // call hecall k bet call | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.97, call:0.03} },
      Kb: { freq:{fold:0.97, call:0.03} },
      Qb: { freq:{fold:0.00, call:1.00} },
      Ja: { freq:{fold:0.96, call:0.04} },
      Jb: { freq:{fold:0.96, call:0.04} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:18, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xbrc_() {
    // call hecall k bet raise call |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.99, bet:0.01} },
      Kb: { freq:{check:0.99, bet:0.01} },
      Qb: { freq:{check:0.93, bet:0.07} },
      Ja: { freq:{check:0.98, bet:0.02} },
      Jb: { freq:{check:0.98, bet:0.02} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:0, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xbrc_b() {
    // call hecall k bet raise call | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.37, call:0.62, raise:0.01} },
      Kb: { freq:{fold:0.37, call:0.62, raise:0.01} },
      Qb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Ja: { freq:{fold:0.75, call:0.00, raise:0.25} },
      Jb: { freq:{fold:0.75, call:0.00, raise:0.25} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xbrc_br() {
    // call hecall k bet raise call | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.48, call:0.52} },
      Kb: { freq:{fold:0.48, call:0.52} },
      Qb: { freq:{fold:0.00, call:1.00} },
      Ja: { freq:{fold:0.94, call:0.06} },
      Jb: { freq:{fold:0.94, call:0.06} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:22, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xbrc_x() {
    // call hecall k bet raise call | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.44, bet:0.56} },
      Kb: { freq:{check:0.44, bet:0.56} },
      Qb: { freq:{check:0.00, bet:1.00} },
      Ja: { freq:{check:0.92, bet:0.08} },
      Jb: { freq:{check:0.92, bet:0.08} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:10, toCall:0, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xbrc_xb() {
    // call hecall k bet raise call | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.31, call:0.67, raise:0.02} },
      Kb: { freq:{fold:0.31, call:0.67, raise:0.02} },
      Qb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Ja: { freq:{fold:0.85, call:0.00, raise:0.15} },
      Jb: { freq:{fold:0.85, call:0.00, raise:0.15} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xbrc_xbr() {
    // call hecall k bet raise call | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.62, call:0.38} },
      Kb: { freq:{fold:0.62, call:0.38} },
      Qb: { freq:{fold:0.00, call:1.00} },
      Ja: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:1.00, call:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:22, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xx_() {
    // call hecall k call hecall k |
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:1.00, bet:0.00} },
      Kb: { freq:{check:1.00, bet:0.00} },
      Qb: { freq:{check:0.46, bet:0.54} },
      Ja: { freq:{check:0.78, bet:0.22} },
      Jb: { freq:{check:0.78, bet:0.22} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:2, toCall:0, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xx_b() {
    // call hecall k call hecall k | bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.04, call:0.96, raise:0.00} },
      Kb: { freq:{fold:0.04, call:0.96, raise:0.00} },
      Qb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Ja: { freq:{fold:0.97, call:0.00, raise:0.03} },
      Jb: { freq:{fold:0.97, call:0.00, raise:0.03} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xx_br() {
    // call hecall k call hecall k | bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.19, call:0.81} },
      Kb: { freq:{fold:0.19, call:0.81} },
      Qb: { freq:{fold:0.00, call:1.00} },
      Ja: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:1.00, call:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xx_x() {
    // call hecall k call hecall k | call hecall k
    const actions = [ACT.check, ACT.bet];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{check:0.96, bet:0.04} },
      Kb: { freq:{check:0.96, bet:0.04} },
      Qb: { freq:{check:0.00, bet:1.00} },
      Ja: { freq:{check:0.92, bet:0.08} },
      Jb: { freq:{check:0.92, bet:0.08} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:2, toCall:0, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xx_xb() {
    // call hecall k call hecall k | call hecall k bet
    const actions = [ACT.fold, ACT.call, ACT.raise];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.61, call:0.39, raise:0.00} },
      Kb: { freq:{fold:0.61, call:0.39, raise:0.00} },
      Qb: { freq:{fold:0.00, call:0.00, raise:1.00} },
      Ja: { freq:{fold:1.00, call:0.00, raise:0.00} },
      Jb: { freq:{fold:1.00, call:0.00, raise:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:6, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  function makeScenario_r2_q_xx_xbr() {
    // call hecall k call hecall k | call hecall k bet raise
    const actions = [ACT.fold, ACT.call];
    const cards = [
      {id:'Ka', rank:'K', suit:'♠'},
      {id:'Kb', rank:'K', suit:'♥'},
      {id:'Qa', rank:'Q', suit:'♠'},
      {id:'Qb', rank:'Q', suit:'♥'},
      {id:'Ja', rank:'J', suit:'♠'},
      {id:'Jb', rank:'J', suit:'♥'},
    ];

    const strat = {
      Ka: { freq:{fold:0.80, call:0.20} },
      Kb: { freq:{fold:0.80, call:0.20} },
      Qb: { freq:{fold:0.00, call:1.00} },
      Ja: { freq:{fold:1.00, call:0.00} },
      Jb: { freq:{fold:1.00, call:0.00} },
    };
    const hands = cards.map(c => {
      const s = strat[c.id];
      if (!s) return null;
      return { id:c.id, label:c.rank+c.suit, rank:c.rank, suit:c.suit, combos:1, ...s };
    }).filter(h => h !== null);

    return {
      game:'leduc', handShape:'tile',
      meta:{ street:'round2', pot:14, toCall:4, board:['Q♠'] },
      actions, hands
    };
  }

  window.LEDUC_COMPLETE = {
    r1_j_: makeScenario_r1_j_(),
    r1_j_b: makeScenario_r1_j_b(),
    r1_j_br: makeScenario_r1_j_br(),
    r1_j_x: makeScenario_r1_j_x(),
    r1_j_xb: makeScenario_r1_j_xb(),
    r1_j_xbr: makeScenario_r1_j_xbr(),
    r1_k_: makeScenario_r1_k_(),
    r1_k_b: makeScenario_r1_k_b(),
    r1_k_br: makeScenario_r1_k_br(),
    r1_k_x: makeScenario_r1_k_x(),
    r1_k_xb: makeScenario_r1_k_xb(),
    r1_k_xbr: makeScenario_r1_k_xbr(),
    r1_q_: makeScenario_r1_q_(),
    r1_q_b: makeScenario_r1_q_b(),
    r1_q_br: makeScenario_r1_q_br(),
    r1_q_x: makeScenario_r1_q_x(),
    r1_q_xb: makeScenario_r1_q_xb(),
    r1_q_xbr: makeScenario_r1_q_xbr(),
    r2_j_bc_: makeScenario_r2_j_bc_(),
    r2_j_bc_b: makeScenario_r2_j_bc_b(),
    r2_j_bc_br: makeScenario_r2_j_bc_br(),
    r2_j_bc_x: makeScenario_r2_j_bc_x(),
    r2_j_bc_xb: makeScenario_r2_j_bc_xb(),
    r2_j_bc_xbr: makeScenario_r2_j_bc_xbr(),
    r2_j_brc_: makeScenario_r2_j_brc_(),
    r2_j_brc_b: makeScenario_r2_j_brc_b(),
    r2_j_brc_br: makeScenario_r2_j_brc_br(),
    r2_j_brc_x: makeScenario_r2_j_brc_x(),
    r2_j_brc_xb: makeScenario_r2_j_brc_xb(),
    r2_j_brc_xbr: makeScenario_r2_j_brc_xbr(),
    r2_j_xbc_: makeScenario_r2_j_xbc_(),
    r2_j_xbc_b: makeScenario_r2_j_xbc_b(),
    r2_j_xbc_br: makeScenario_r2_j_xbc_br(),
    r2_j_xbc_x: makeScenario_r2_j_xbc_x(),
    r2_j_xbc_xb: makeScenario_r2_j_xbc_xb(),
    r2_j_xbc_xbr: makeScenario_r2_j_xbc_xbr(),
    r2_j_xbrc_: makeScenario_r2_j_xbrc_(),
    r2_j_xbrc_b: makeScenario_r2_j_xbrc_b(),
    r2_j_xbrc_br: makeScenario_r2_j_xbrc_br(),
    r2_j_xbrc_x: makeScenario_r2_j_xbrc_x(),
    r2_j_xbrc_xb: makeScenario_r2_j_xbrc_xb(),
    r2_j_xbrc_xbr: makeScenario_r2_j_xbrc_xbr(),
    r2_j_xx_: makeScenario_r2_j_xx_(),
    r2_j_xx_b: makeScenario_r2_j_xx_b(),
    r2_j_xx_br: makeScenario_r2_j_xx_br(),
    r2_j_xx_x: makeScenario_r2_j_xx_x(),
    r2_j_xx_xb: makeScenario_r2_j_xx_xb(),
    r2_j_xx_xbr: makeScenario_r2_j_xx_xbr(),
    r2_k_bc_: makeScenario_r2_k_bc_(),
    r2_k_bc_b: makeScenario_r2_k_bc_b(),
    r2_k_bc_br: makeScenario_r2_k_bc_br(),
    r2_k_bc_x: makeScenario_r2_k_bc_x(),
    r2_k_bc_xb: makeScenario_r2_k_bc_xb(),
    r2_k_bc_xbr: makeScenario_r2_k_bc_xbr(),
    r2_k_brc_: makeScenario_r2_k_brc_(),
    r2_k_brc_b: makeScenario_r2_k_brc_b(),
    r2_k_brc_br: makeScenario_r2_k_brc_br(),
    r2_k_brc_x: makeScenario_r2_k_brc_x(),
    r2_k_brc_xb: makeScenario_r2_k_brc_xb(),
    r2_k_brc_xbr: makeScenario_r2_k_brc_xbr(),
    r2_k_xbc_: makeScenario_r2_k_xbc_(),
    r2_k_xbc_b: makeScenario_r2_k_xbc_b(),
    r2_k_xbc_br: makeScenario_r2_k_xbc_br(),
    r2_k_xbc_x: makeScenario_r2_k_xbc_x(),
    r2_k_xbc_xb: makeScenario_r2_k_xbc_xb(),
    r2_k_xbc_xbr: makeScenario_r2_k_xbc_xbr(),
    r2_k_xbrc_: makeScenario_r2_k_xbrc_(),
    r2_k_xbrc_b: makeScenario_r2_k_xbrc_b(),
    r2_k_xbrc_br: makeScenario_r2_k_xbrc_br(),
    r2_k_xbrc_x: makeScenario_r2_k_xbrc_x(),
    r2_k_xbrc_xb: makeScenario_r2_k_xbrc_xb(),
    r2_k_xbrc_xbr: makeScenario_r2_k_xbrc_xbr(),
    r2_k_xx_: makeScenario_r2_k_xx_(),
    r2_k_xx_b: makeScenario_r2_k_xx_b(),
    r2_k_xx_br: makeScenario_r2_k_xx_br(),
    r2_k_xx_x: makeScenario_r2_k_xx_x(),
    r2_k_xx_xb: makeScenario_r2_k_xx_xb(),
    r2_k_xx_xbr: makeScenario_r2_k_xx_xbr(),
    r2_q_bc_: makeScenario_r2_q_bc_(),
    r2_q_bc_b: makeScenario_r2_q_bc_b(),
    r2_q_bc_br: makeScenario_r2_q_bc_br(),
    r2_q_bc_x: makeScenario_r2_q_bc_x(),
    r2_q_bc_xb: makeScenario_r2_q_bc_xb(),
    r2_q_bc_xbr: makeScenario_r2_q_bc_xbr(),
    r2_q_brc_: makeScenario_r2_q_brc_(),
    r2_q_brc_b: makeScenario_r2_q_brc_b(),
    r2_q_brc_br: makeScenario_r2_q_brc_br(),
    r2_q_brc_x: makeScenario_r2_q_brc_x(),
    r2_q_brc_xb: makeScenario_r2_q_brc_xb(),
    r2_q_brc_xbr: makeScenario_r2_q_brc_xbr(),
    r2_q_xbc_: makeScenario_r2_q_xbc_(),
    r2_q_xbc_b: makeScenario_r2_q_xbc_b(),
    r2_q_xbc_br: makeScenario_r2_q_xbc_br(),
    r2_q_xbc_x: makeScenario_r2_q_xbc_x(),
    r2_q_xbc_xb: makeScenario_r2_q_xbc_xb(),
    r2_q_xbc_xbr: makeScenario_r2_q_xbc_xbr(),
    r2_q_xbrc_: makeScenario_r2_q_xbrc_(),
    r2_q_xbrc_b: makeScenario_r2_q_xbrc_b(),
    r2_q_xbrc_br: makeScenario_r2_q_xbrc_br(),
    r2_q_xbrc_x: makeScenario_r2_q_xbrc_x(),
    r2_q_xbrc_xb: makeScenario_r2_q_xbrc_xb(),
    r2_q_xbrc_xbr: makeScenario_r2_q_xbrc_xbr(),
    r2_q_xx_: makeScenario_r2_q_xx_(),
    r2_q_xx_b: makeScenario_r2_q_xx_b(),
    r2_q_xx_br: makeScenario_r2_q_xx_br(),
    r2_q_xx_x: makeScenario_r2_q_xx_x(),
    r2_q_xx_xb: makeScenario_r2_q_xx_xb(),
    r2_q_xx_xbr: makeScenario_r2_q_xx_xbr()
  };
})();
