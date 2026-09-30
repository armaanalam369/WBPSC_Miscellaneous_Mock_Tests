/* =====================================================================
   app.js — the quiz engine. You normally never need to edit this file.
   All questions come from data.js.
   Sections:  1 Storage · 2 Question bank & indexes · 3 Validation
              4 Helpers · 5 Screens · 6 Test engine · 7 Actions
   ===================================================================== */
(function () {
  'use strict';

  const D = window.QUIZ_DATA;
  const LETTERS = 'ABCDEFGH';
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = (n, l) => String(n).padStart(l || 3, '0');
  const pct = (a, b) => (b ? (a / b) * 100 : 0);
  const r1 = (n) => Math.round(n * 10) / 10;
  const r2 = (n) => Math.round(n * 100) / 100;

  /* ---------------- 1. STORAGE (localStorage, no backend) ---------------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('wcmt_' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('wcmt_' + k, JSON.stringify(v)); } catch (e) { toast('Could not save — browser storage is full or blocked.'); } }
  };
  let HISTORY = store.get('history', []);
  const prefs = Object.assign({ debug: false, neg: 0 }, store.get('prefs', {}));
  const savePrefs = () => store.set('prefs', prefs);

  /* ---------------- 2. QUESTION BANK + INDEXES (built automatically) ---------------- */
  const Bank = { all: [], byId: {}, bySet: {}, bySection: {}, bySetSection: {}, setNames: [], sections: D.sections.slice() };

  function buildBank() {
    D.sections.forEach((s) => { Bank.bySection[s] = []; });
    // Always show SET-01 … SET-N cards, plus any extra names found in data.js
    const names = [];
    for (let i = 1; i <= (D.expectedSets || 0); i++) names.push('SET-' + pad(i, 2));
    D.sets.forEach((s) => { if (names.indexOf(s.set) < 0) names.push(s.set); });
    names.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    Bank.setNames = names;
    names.forEach((n) => { Bank.bySet[n] = []; Bank.bySetSection[n] = {}; });

    D.sets.forEach((set) => {
      const code = String(set.set).replace(/[^A-Za-z0-9]/g, '');
      (set.questions || []).forEach((r) => {
        const opts = Array.isArray(r.o) ? r.o : [];
        const q = {
          id: code + '-Q' + pad(r.n),
          set: set.set,
          originalNumber: r.n,
          section: r.sec,
          question: r.q,
          options: opts,
          correctAnswer: typeof r.a === 'number' ? r.a : LETTERS.indexOf(String(r.a || '').trim().toUpperCase()),
          explanation: r.e || '',
          difficulty: r.d || 'Medium',
          flag: r.flag || ''
        };
        Bank.all.push(q);
        Bank.byId[q.id] = q;
        Bank.bySet[set.set].push(q);
        (Bank.bySection[q.section] = Bank.bySection[q.section] || []).push(q);
        const ss = Bank.bySetSection[set.set];
        (ss[q.section] = ss[q.section] || []).push(q);
      });
    });
  }
  const setsWithData = () => Bank.setNames.filter((n) => Bank.bySet[n].length);

  /* ---------------- 3. VALIDATION (shown in Settings → Developer mode) ---------------- */
  function validate() {
    const out = [];
    const add = (level, label, detail) => out.push({ level, label, detail: detail || '' });
    const bad = (fn) => Bank.all.filter((q) => !fn(q)).slice(0, 5).map((q) => q.id).join(', ');
    const chk = (label, fn, warn) => {
      const b = bad(fn);
      add(b ? (warn ? 'warn' : 'fail') : 'pass', label, b ? 'Check: ' + b : '');
    };
    chk('Every question has a valid ID', (q) => /^[A-Za-z0-9]+-Q\d+$/.test(q.id));
    chk('Every question has a valid Set', (q) => Bank.setNames.indexOf(q.set) >= 0);
    chk('Every question has an original number', (q) => Number.isInteger(q.originalNumber) && q.originalNumber > 0);
    chk('Every question belongs to exactly one valid section', (q) => D.sections.indexOf(q.section) >= 0);
    chk('Every question has 4 non-empty options', (q) => q.options.length === 4 && q.options.every((o) => String(o).trim()));
    chk('Every question has a valid correct answer', (q) => q.correctAnswer >= 0 && q.correctAnswer < q.options.length);
    const seen = {}; const dup = [];
    Bank.all.forEach((q) => { if (seen[q.id]) dup.push(q.id); seen[q.id] = 1; });
    add(dup.length ? 'fail' : 'pass', 'No duplicate IDs', dup.length ? 'Duplicates: ' + dup.slice(0, 5).join(', ') : '');
    const short = Bank.setNames.filter((n) => Bank.bySet[n].length !== D.expectedPerSet && Bank.bySet[n].length > 0)
      .map((n) => n + ' has ' + Bank.bySet[n].length);
    const empty = Bank.setNames.filter((n) => !Bank.bySet[n].length).length;
    add(short.length ? 'warn' : 'pass', 'Each loaded set has exactly ' + D.expectedPerSet + ' questions', short.join('; '));
    const expTotal = D.expectedSets * D.expectedPerSet;
    add(Bank.all.length === expTotal ? 'pass' : 'warn', 'Total = ' + expTotal + ' questions',
      'Loaded ' + Bank.all.length + ' from ' + setsWithData().length + ' set(s); ' + empty + ' set(s) still empty');
    const secSum = D.sections.reduce((a, s) => a + Bank.bySection[s].length, 0);
    add(secSum === Bank.all.length ? 'pass' : 'fail', 'Section totals add up to the total', secSum + ' vs ' + Bank.all.length);
    return out;
  }

  /* ---------------- 4. HELPERS ---------------- */
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  const uniq = (a) => a.filter((v, i) => a.indexOf(v) === i);
  function fmtTime(s) {
    s = Math.max(0, Math.round(s));
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60;
    return (h ? h + ':' + pad(m, 2) : m) + ':' + pad(x, 2);
  }
  const fmtDate = (t) => new Date(t).toLocaleString(undefined, { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit' });
  const bar = (p, cls) => '<div class="bar ' + (cls || '') + '"><i style="width:' + Math.max(0, Math.min(100, p)) + '%"></i></div>';

  let toastTimer;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }
  function dialog(title, msg, ok, cancel) {
    return new Promise((res) => {
      const m = $('#modal');
      m.innerHTML = '<div class="overlay"><div class="dialog" role="dialog" aria-modal="true"><h3>' + esc(title) + '</h3><p class="muted">' + msg + '</p><div class="row">' +
        (cancel === null ? '' : '<button class="btn" data-m="0">' + esc(cancel || 'Cancel') + '</button>') +
        '<button class="btn primary" data-m="1">' + esc(ok || 'OK') + '</button></div></div></div>';
      m.onclick = (e) => { const b = e.target.closest('[data-m]'); if (!b) return; m.innerHTML = ''; m.onclick = null; res(b.dataset.m === '1'); };
    });
  }

  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('wcmt_theme', t); } catch (e) {}
    const b = $('#themeBtn'); if (b) b.textContent = t === 'dark' ? '☀️' : '🌙';
  }

  /* ---- stats from history ---- */
  function setStats(name) {
    const h = HISTORY.filter((e) => e.type === 'set' && e.sets[0] === name);
    let best = null; h.forEach((e) => { if (!best || e.pct > best.pct) best = e; });
    return { attempts: h.length, best };
  }
  function sectionStats(sec) {
    let att = 0, c = 0, best = null;
    HISTORY.forEach((e) => {
      const b = e.bySection && e.bySection[sec];
      if (b) { att += b.att; c += b.c; }
      if (e.type === 'section' && e.sections[0] === sec && (!best || e.pct > best.pct)) best = e;
    });
    return { att, c, acc: att ? pct(c, att) : null, best };
  }
  function aggregate(key, list) {
    const rows = {};
    HISTORY.forEach((e) => { const m = e[key] || {}; Object.keys(m).forEach((k) => {
      const r = rows[k] = rows[k] || { t: 0, att: 0, c: 0 }; r.t += m[k].t; r.att += m[k].att; r.c += m[k].c; }); });
    return list.filter((k) => rows[k]).map((k) => Object.assign({ name: k }, rows[k]));
  }

  /* ---------------- 5. SCREENS ---------------- */
  const S = { view: 'home', run: null, cfg: null, resultId: null, filter: 'all', navOpen: false,
    custom: { sets: [], secs: [], count: '25', num: 30 } };

  const TABS = [['home', 'Dashboard'], ['sets', 'Mock Tests'], ['sections', 'Sections'], ['custom', 'Custom Test'], ['perf', 'Performance'], ['settings', 'Settings']];

  function setCards() {
    return '<div class="grid">' + Bank.setNames.map((n) => {
      const cnt = Bank.bySet[n].length, st = setStats(n);
      const partial = cnt > 0 && cnt < D.expectedPerSet;
      const pill = !cnt ? '<span class="pill">No questions yet</span>'
        : st.attempts ? '<span class="pill ok">Attempted ×' + st.attempts + '</span>'
        : '<span class="pill">Not started</span>';
      return '<div class="card"><div class="card-h"><h3>' + esc(n) + '</h3>' + pill + '</div>' +
        '<div class="kv"><span><b>' + cnt + '</b> questions</span>' + (partial ? '<span class="pill warn">Partial</span>' : '') + '</div>' +
        '<div class="kv"><span>Best score: <b>' + (st.best ? r2(st.best.score) + '/' + st.best.maxScore + ' (' + Math.round(st.best.pct) + '%)' : '—') + '</b></span></div>' +
        '<button class="btn primary" data-act="startSet" data-v="' + esc(n) + '"' + (cnt ? '' : ' disabled') + '>Attempt</button></div>';
    }).join('') + '</div>';
  }
  function sectionCards() {
    return '<div class="grid">' + Bank.sections.map((s) => {
      const cnt = Bank.bySection[s].length, st = sectionStats(s);
      return '<div class="card"><div class="card-h"><h3>' + esc(s) + '</h3></div>' +
        '<div class="kv"><span><b>' + cnt + '</b> questions</span><span>Attempted: <b>' + st.att + '</b></span></div>' +
        '<div class="kv"><span>Accuracy: <b>' + (st.acc === null ? '—' : Math.round(st.acc) + '%') + '</b></span>' +
        '<span>Best: <b>' + (st.best ? Math.round(st.best.pct) + '%' : '—') + '</b></span></div>' +
        '<button class="btn primary" data-act="startSec" data-v="' + esc(s) + '"' + (cnt ? '' : ' disabled') + '>Start Test</button></div>';
    }).join('') + '</div>';
  }

  function vHome() {
    const att = HISTORY.reduce((a, e) => a + e.attempted, 0), cor = HISTORY.reduce((a, e) => a + e.correct, 0);
    return '<div class="intro"><h1>' + esc(D.appTitle || 'Mock Tests') + '</h1><p class="muted">Practice full sets or any section. Progress is saved on this device.</p></div>' +
      '<div class="stats">' +
      '<div class="stat"><b>' + Bank.all.length + '</b><span>Questions loaded</span></div>' +
      '<div class="stat"><b>' + setsWithData().length + '/' + Bank.setNames.length + '</b><span>Sets with questions</span></div>' +
      '<div class="stat"><b>' + HISTORY.length + '</b><span>Tests taken</span></div>' +
      '<div class="stat"><b>' + (att ? Math.round(pct(cor, att)) + '%' : '—') + '</b><span>Overall accuracy</span></div></div>' +
      '<h2>Full Mock Tests</h2>' + setCards() + '<h2>Section-Wise Practice</h2>' + sectionCards();
  }
  const vSets = () => '<h2>Full Mock Tests</h2><p class="muted small" style="margin:-6px 0 12px">Each set keeps its original questions and order.</p>' + setCards();
  const vSections = () => '<h2>Section-Wise Practice</h2><p class="muted small" style="margin:-6px 0 12px">Every question from every set, grouped by topic.</p>' + sectionCards();

  /* ---- custom test builder ---- */
  function customPool() {
    const c = S.custom;
    const sets = c.sets.length ? c.sets : setsWithData();
    const secs = c.secs.length ? c.secs : Bank.sections;
    return Bank.all.filter((q) => sets.indexOf(q.set) >= 0 && secs.indexOf(q.section) >= 0);
  }
  function customCount(avail) {
    const c = S.custom;
    if (c.count === 'all') return avail;
    const n = c.count === 'custom' ? parseInt(c.num, 10) || 0 : parseInt(c.count, 10);
    return Math.max(0, Math.min(n, avail));   // never more than available
  }
  function vCustom() {
    const c = S.custom, avail = customPool().length;
    const counts = ['10', '20', '25', '50', '100', 'all', 'custom'];
    return '<h2>Build a Custom Test</h2><div class="card plain">' +
      '<label class="f" style="margin-top:0">Source sets <span class="muted small">(none selected = all sets)</span></label><div class="chips">' +
      '<button class="chip" aria-pressed="' + (!c.sets.length) + '" data-act="cSet" data-v="">All sets</button>' +
      Bank.setNames.map((n) => '<button class="chip" aria-pressed="' + (c.sets.indexOf(n) >= 0) + '" data-act="cSet" data-v="' + esc(n) + '"' + (Bank.bySet[n].length ? '' : ' disabled') + '>' + esc(n) + '</button>').join('') + '</div>' +
      '<label class="f">Sections <span class="muted small">(none selected = all sections)</span></label><div class="chips">' +
      '<button class="chip" aria-pressed="' + (!c.secs.length) + '" data-act="cSec" data-v="">All sections</button>' +
      Bank.sections.map((s) => '<button class="chip" aria-pressed="' + (c.secs.indexOf(s) >= 0) + '" data-act="cSec" data-v="' + esc(s) + '">' + esc(s) + '</button>').join('') + '</div>' +
      '<label class="f">Number of questions</label><div class="chips">' +
      counts.map((k) => '<button class="chip" aria-pressed="' + (c.count === k) + '" data-act="cCount" data-v="' + k + '">' + (k === 'all' ? 'All available' : k === 'custom' ? 'Custom' : k) + '</button>').join('') + '</div>' +
      (c.count === 'custom' ? '<input type="number" id="cNum" min="1" max="' + avail + '" value="' + esc(c.num) + '" style="margin-top:10px" aria-label="Custom number of questions">' : '') +
      '<p class="notice ' + (avail ? 'ok' : '') + '" id="cAvail" style="margin-top:16px">' + availText(avail) + '</p>' +
      '<button class="btn primary block" style="margin-top:14px" data-act="cBuild"' + (avail ? '' : ' disabled') + '>Continue</button></div>';
  }
  const availText = (avail) => avail ? '<b>' + avail + '</b> questions match. This test will use <b>' + customCount(avail) + '</b>.' : 'No questions match this selection.';

  /* ---- test configuration screen ---- */
  function vConfig() {
    const c = S.cfg, t = c.timer, n = c.pool.length;
    const chips = t.mode === 'q' ? [15, 30, 45, 60, 90, 120] : [10, 20, 30, 45, 60];
    return '<h2>' + esc(c.title) + '</h2>' +
      '<div class="card plain"><p class="muted">' + (c.count < n ? '<b>' + c.count + '</b> of ' + n + ' matching questions' : '<b>' + n + '</b> questions') + '</p>' +
      '<label class="f">Timer</label><div class="seg">' +
      [['none', 'No timer'], ['q', 'Per question'], ['test', 'Per test']].map((m) => '<button aria-pressed="' + (t.mode === m[0]) + '" data-act="cfgMode" data-v="' + m[0] + '">' + m[1] + '</button>').join('') + '</div>' +
      (t.mode === 'none' ? '<p class="muted small" style="margin-top:8px">Unlimited practice. A stopwatch shows your time.</p>' :
        '<label class="f" for="tVal">' + (t.mode === 'q' ? 'Seconds per question' : 'Minutes for the whole test') + '</label>' +
        '<div class="chips" style="margin-bottom:8px">' + chips.map((v) => '<button class="chip" data-act="cfgChip" data-v="' + v + '">' + v + (t.mode === 'q' ? 's' : ' min') + '</button>').join('') + '</div>' +
        '<input type="number" id="tVal" min="1" value="' + (t.mode === 'q' ? t.perQ : t.perTest) + '">' +
        '<p class="muted small" style="margin-top:8px">' + (t.mode === 'q' ? 'When time runs out the question locks and moves on. You cannot go back.' : 'The test submits automatically when time is up.') + '</p>') +
      '<label class="f" for="oQ">Question order</label><select id="oQ"><option value="original"' + (c.qOrder === 'original' ? ' selected' : '') + '>Original order</option><option value="random"' + (c.qOrder === 'random' ? ' selected' : '') + '>Random</option></select>' +
      '<label class="f" for="oO">Option order</label><select id="oO"><option value="original"' + (c.oOrder === 'original' ? ' selected' : '') + '>Original order</option><option value="shuffle"' + (c.oOrder === 'shuffle' ? ' selected' : '') + '>Shuffle options</option></select>' +
      '<label class="f" for="oN">Negative marking</label><select id="oN">' + [[0, 'None'], [0.25, '¼ mark per wrong answer'], [0.33, '⅓ mark per wrong answer'], [0.5, '½ mark per wrong answer']].map((o) => '<option value="' + o[0] + '"' + (Number(c.neg) === o[0] ? ' selected' : '') + '>' + o[1] + '</option>').join('') + '</select>' +
      '<div class="row" style="margin-top:20px"><button class="btn" data-act="tab" data-v="home">Cancel</button><button class="btn primary grow" data-act="cfgStart">Start Test</button></div></div>';
  }

  /* ---- quiz screen ---- */
  function vQuiz() {
    const r = S.run, i = r.cur, it = r.items[i], q = it.q, n = r.items.length, locked = !!r.locked[i];
    const answered = r.ans.filter((a) => a !== null).length;
    const perQ = r.mode === 'q';
    const last = i === n - 1;
    const opts = it.perm.map((oi, di) => '<button class="opt' + (r.ans[i] === di ? ' sel' : '') + '" data-act="pick" data-v="' + di + '"' + (locked ? ' disabled' : '') + '><span class="ol">' + LETTERS[di] + '</span><span>' + esc(q.options[oi]) + '</span></button>').join('');
    const navBtns = r.items.map((_, k) => '<button class="nq' + (r.ans[k] !== null ? ' ans' : '') + (r.marked[k] ? ' mk' : '') + (k === i ? ' cur' : '') + '" data-act="jump" data-v="' + k + '"' + (perQ ? ' disabled' : '') + ' aria-label="Question ' + (k + 1) + '">' + (k + 1) + '</button>').join('');
    return '<div class="qhead"><div class="qhead-row"><span class="qtitle">' + esc(r.title) + '</span><span class="timer" id="timer">--:--</span>' +
      '<button class="btn small danger" data-act="submit">Submit</button><button class="btn small" data-act="exit" aria-label="Exit test">✕</button></div>' +
      '<div class="row spread small muted" style="padding-bottom:6px"><span>Question <b style="color:var(--text)">' + (i + 1) + '</b> of ' + n + '</span><span>' + answered + ' answered' + (r.marked.some(Boolean) ? ' · ' + r.marked.filter(Boolean).length + ' marked' : '') + '</span></div>' +
      bar(pct(answered, n)) + '</div>' +
      '<div class="quiz"><div class="qcard"><div class="qmeta"><span class="pill">' + esc(q.section) + '</span><span class="pill">' + esc(q.set) + ' · Q' + q.originalNumber + '</span>' + (r.marked[i] ? '<span class="pill warn">Marked for review</span>' : '') + (locked ? '<span class="pill bad">Locked</span>' : '') + '</div>' +
      '<div class="qtext">' + esc(q.question) + '</div><div class="opts">' + opts + '</div></div>' +
      '<aside class="navp' + (S.navOpen ? ' open' : '') + '" id="navp"><div class="row spread"><h3>Question navigator</h3><button class="btn small close" data-act="toggleNav">Close</button></div>' +
      '<div class="navgrid">' + navBtns + '</div>' +
      '<div class="nlegend"><span><i style="background:var(--primary)"></i>Answered</span><span><i style="background:var(--surface2);border:1px solid var(--border)"></i>Not answered</span><span><i style="background:var(--warn-bg);border:1px solid var(--warn)"></i>Marked</span><span><i style="outline:2px solid var(--text)"></i>Current</span></div></aside></div>' +
      '<div class="actionbar"><button class="btn" data-act="prev"' + (i === 0 || perQ ? ' disabled' : '') + '>Previous</button>' +
      '<button class="btn" data-act="mark"' + (locked ? ' disabled' : '') + '>' + (r.marked[i] ? 'Unmark' : 'Mark') + '</button>' +
      '<button class="btn" data-act="clear"' + (locked || r.ans[i] === null ? ' disabled' : '') + '>Clear</button>' +
      '<button class="btn only-mobile" data-act="toggleNav">Grid</button>' +
      (last ? '<button class="btn primary" data-act="submit">Finish</button>' : '<button class="btn primary" data-act="next">Next</button>') + '</div>';
  }

  /* ---- result / analytics ---- */
  const getEntry = (id) => HISTORY.find((e) => e.id === id);
  function statRows(map, keys) {
    return keys.filter((k) => map[k]).map((k) => {
      const b = map[k], acc = pct(b.c, b.att);
      return '<tr><td>' + esc(k) + '</td><td class="n">' + b.t + '</td><td class="n">' + b.att + '</td><td class="n">' + b.c + '</td><td class="n">' + (b.att ? Math.round(acc) + '%' : '—') + '</td><td style="width:22%">' + bar(acc, acc >= 60 ? 'ok' : acc < 35 ? 'bad' : '') + '</td></tr>';
    }).join('');
  }
  const tblHead = (first) => '<thead><tr><th>' + first + '</th><th class="n">Qs</th><th class="n">Tried</th><th class="n">Right</th><th class="n">Acc.</th><th></th></tr></thead>';

  function vResult() {
    const e = getEntry(S.resultId);
    if (!e) return '<div class="empty">Result not found.<br><br><button class="btn primary" data-act="tab" data-v="home">Dashboard</button></div>';
    const cP = pct(e.correct, e.total), wP = pct(e.wrong, e.total);
    const donut = 'conic-gradient(var(--ok) 0 ' + cP + '%, var(--bad) ' + cP + '% ' + (cP + wP) + '%, var(--surface2) ' + (cP + wP) + '% 100%)';
    return '<h2>' + esc(e.title) + '</h2><p class="muted small">' + fmtDate(e.ts) + (e.auto ? ' · auto-submitted when time ran out' : '') + '</p>' +
      '<div class="card plain" style="margin-top:12px"><div class="result-top"><div class="donut" style="background:' + donut + '"><div><span>' + r2(e.score) + '/' + e.maxScore + '<small>score</small></span></div></div>' +
      '<div class="grow"><div class="legend"><span><i style="background:var(--ok)"></i>Correct ' + e.correct + '</span><span><i style="background:var(--bad)"></i>Incorrect ' + e.wrong + '</span><span><i style="background:var(--surface2);border:1px solid var(--border)"></i>Unanswered ' + e.unanswered + '</span></div>' +
      '<div class="kv" style="margin-top:10px"><span>Accuracy: <b>' + Math.round(e.accuracy) + '%</b></span><span>Time: <b>' + fmtTime(e.timeTaken) + '</b></span><span>Avg / question: <b>' + fmtTime(e.timeTaken / e.total) + '</b></span></div>' +
      (e.neg ? '<p class="muted small" style="margin-top:6px">Negative marking: −' + e.neg + ' per wrong answer</p>' : '') + '</div></div></div>' +
      '<div class="stats"><div class="stat"><b>' + e.total + '</b><span>Total questions</span></div><div class="stat"><b>' + e.attempted + '</b><span>Attempted</span></div><div class="stat"><b>' + e.correct + '</b><span>Correct</span></div><div class="stat"><b>' + e.wrong + '</b><span>Incorrect</span></div><div class="stat"><b>' + e.unanswered + '</b><span>Unanswered</span></div></div>' +
      '<h2>Section-wise breakdown</h2><div class="card plain scroll"><table class="tbl">' + tblHead('Section') + '<tbody>' + statRows(e.bySection, Bank.sections) + '</tbody></table></div>' +
      (e.sets.length > 1 ? '<h2>Set-wise breakdown</h2><div class="card plain scroll"><table class="tbl">' + tblHead('Set') + '<tbody>' + statRows(e.bySet, Bank.setNames) + '</tbody></table></div>' : '') +
      '<div class="row" style="margin-top:20px"><button class="btn primary" data-act="review">Review answers</button><button class="btn" data-act="retry">Try again</button><button class="btn" data-act="tab" data-v="home">Dashboard</button></div>';
  }

  function vReview() {
    const e = getEntry(S.resultId);
    if (!e) return vResult();
    const items = e.items.map((it, idx) => ({ it, idx, q: Bank.byId[it.id] })).filter((x) => x.q);
    const state = (x) => x.it.ans === null ? 'un' : (x.it.perm[x.it.ans] === x.q.correctAnswer ? 'ok' : 'bad');
    const f = S.filter, list = items.filter((x) => f === 'all' || state(x) === f);
    const cnt = (k) => items.filter((x) => state(x) === k).length;
    const chips = [['all', 'All ' + items.length], ['bad', 'Incorrect ' + cnt('bad')], ['ok', 'Correct ' + cnt('ok')], ['un', 'Unanswered ' + cnt('un')]];
    return '<div class="row spread"><h2>Review · ' + esc(e.title) + '</h2><button class="btn small" data-act="openResult" data-v="' + esc(e.id) + '">Back to result</button></div>' +
      '<div class="chips" style="margin:8px 0 14px">' + chips.map((c) => '<button class="chip" aria-pressed="' + (f === c[0]) + '" data-act="filter" data-v="' + c[0] + '">' + c[1] + '</button>').join('') + '</div>' +
      (list.length ? list.map((x) => {
        const s = state(x), q = x.q, correctDi = x.it.perm.indexOf(q.correctAnswer);
        const opts = x.it.perm.map((oi, di) => '<div class="opt' + (di === correctDi ? ' right' : (di === x.it.ans ? ' wrong' : '')) + '"><span class="ol">' + LETTERS[di] + '</span><span>' + esc(q.options[oi]) + '</span></div>').join('');
        return '<div class="rv"><div class="qmeta"><span class="pill ' + (s === 'ok' ? 'ok' : s === 'bad' ? 'bad' : '') + '">' + (s === 'ok' ? '✅ Correct' : s === 'bad' ? '❌ Incorrect' : '⚪ Unanswered') + '</span>' +
          '<span class="pill">' + esc(q.set) + ' · Q' + q.originalNumber + '</span><span class="pill">' + esc(q.section) + '</span>' + (x.it.m ? '<span class="pill warn">Marked</span>' : '') + '</div>' +
          '<div class="qtext" style="font-size:1.02rem"><span class="muted">' + (x.idx + 1) + '.</span> ' + esc(q.question) + '</div><div class="opts">' + opts + '</div>' +
          '<p class="small muted" style="margin-top:10px">Your answer: <b style="color:var(--text)">' + (x.it.ans === null ? 'Not answered' : LETTERS[x.it.ans] + '. ' + esc(q.options[x.it.perm[x.it.ans]])) + '</b> · Correct: <b style="color:var(--text)">' + LETTERS[correctDi] + '. ' + esc(q.options[q.correctAnswer]) + '</b></p>' +
          (q.explanation ? '<div class="expl"><b>Explanation:</b> ' + esc(q.explanation) + '</div>' : '') +
          (q.flag ? '<div class="notice" style="margin-top:10px">⚠ ' + esc(q.flag) + '</div>' : '') + '</div>';
      }).join('') : '<div class="empty">Nothing in this filter.</div>');
  }

  /* ---- performance / history ---- */
  function vPerf() {
    if (!HISTORY.length) return '<h2>My Performance</h2><div class="empty">No tests yet.<br><br><button class="btn primary" data-act="tab" data-v="sets">Start a mock test</button></div>';
    const att = HISTORY.reduce((a, e) => a + e.attempted, 0), cor = HISTORY.reduce((a, e) => a + e.correct, 0);
    const avgPct = HISTORY.reduce((a, e) => a + e.pct, 0) / HISTORY.length;
    const secs = aggregate('bySection', Bank.sections), sets = aggregate('bySet', Bank.setNames);
    const tbl = (rows, first) => '<div class="card plain scroll"><table class="tbl"><thead><tr><th>' + first + '</th><th class="n">Asked</th><th class="n">Tried</th><th class="n">Right</th><th class="n">Acc.</th><th></th></tr></thead><tbody>' +
      rows.map((b) => { const a = pct(b.c, b.att); return '<tr><td>' + esc(b.name) + '</td><td class="n">' + b.t + '</td><td class="n">' + b.att + '</td><td class="n">' + b.c + '</td><td class="n">' + (b.att ? Math.round(a) + '%' : '—') + '</td><td style="width:22%">' + bar(a, a >= 60 ? 'ok' : a < 35 ? 'bad' : '') + '</td></tr>'; }).join('') + '</tbody></table></div>';
    return '<h2>My Performance</h2><div class="stats"><div class="stat"><b>' + HISTORY.length + '</b><span>Tests taken</span></div><div class="stat"><b>' + Math.round(avgPct) + '%</b><span>Average score</span></div><div class="stat"><b>' + att + '</b><span>Questions attempted</span></div><div class="stat"><b>' + Math.round(pct(cor, att)) + '%</b><span>Overall accuracy</span></div></div>' +
      '<h2>Section-wise performance</h2>' + tbl(secs, 'Section') + '<h2>Set-wise performance</h2>' + tbl(sets, 'Set') + '<h2>Test history</h2>' +
      HISTORY.slice().reverse().map((e) => '<div class="card plain hist" style="margin-bottom:10px"><div><h3>' + esc(e.title) + '</h3><p class="muted small">' + fmtDate(e.ts) + '</p>' +
        '<p class="muted small">' + esc(e.sets.join(', ')) + ' · ' + (e.sections.length > 3 ? e.sections.length + ' sections' : esc(e.sections.join(', '))) + '</p>' +
        '<div class="kv" style="margin-top:4px"><span>Score <b>' + r2(e.score) + '/' + e.maxScore + '</b></span><span>Accuracy <b>' + Math.round(e.accuracy) + '%</b></span><span>Time <b>' + fmtTime(e.timeTaken) + '</b></span></div></div>' +
        '<button class="btn small primary" data-act="openResult" data-v="' + esc(e.id) + '">Full analysis</button></div>').join('');
  }

  /* ---- settings (+ developer/validation panel) ---- */
  function vSettings() {
    let html = '<h2>Settings</h2><div class="card plain"><label class="f" style="margin-top:0">Appearance</label><div class="seg">' +
      ['light', 'dark'].map((t) => '<button aria-pressed="' + (document.documentElement.getAttribute('data-theme') === t) + '" data-act="theme" data-v="' + t + '">' + (t === 'light' ? 'Light' : 'Dark') + '</button>').join('') + '</div>' +
      '<label class="f">Developer mode</label><div class="seg"><button aria-pressed="' + (!prefs.debug) + '" data-act="debug" data-v="0">Off</button><button aria-pressed="' + prefs.debug + '" data-act="debug" data-v="1">On</button></div>' +
      '<p class="muted small" style="margin-top:8px">Shows data checks and question counts so you can confirm data.js is correct.</p>' +
      '<label class="f">Your data</label><button class="btn danger" data-act="clearHistory">Delete all test history</button></div>';
    if (prefs.debug) {
      const v = validate();
      html += '<h2>Data validation</h2><div class="card plain">' + v.map((x) => '<div class="row" style="padding:6px 0;border-bottom:1px solid var(--border);align-items:flex-start"><span class="pill ' + (x.level === 'pass' ? 'ok' : x.level === 'warn' ? 'warn' : 'bad') + '">' + x.level.toUpperCase() + '</span><div class="grow"><div>' + esc(x.label) + '</div>' + (x.detail ? '<div class="small muted">' + esc(x.detail) + '</div>' : '') + '</div></div>').join('') + '</div>' +
        '<h2>Questions per set × section</h2><div class="card plain scroll"><table class="tbl" style="min-width:900px"><thead><tr><th>Set</th>' + Bank.sections.map((s, i) => '<th class="n" title="' + esc(s) + '">' + (i + 1) + '</th>').join('') + '<th class="n">Total</th></tr></thead><tbody>' +
        Bank.setNames.map((n) => '<tr><td>' + esc(n) + '</td>' + Bank.sections.map((s) => '<td class="n">' + ((Bank.bySetSection[n][s] || []).length || '·') + '</td>').join('') + '<td class="n"><b>' + Bank.bySet[n].length + '</b></td></tr>').join('') +
        '<tr><td><b>All</b></td>' + Bank.sections.map((s) => '<td class="n"><b>' + Bank.bySection[s].length + '</b></td>').join('') + '<td class="n"><b>' + Bank.all.length + '</b></td></tr></tbody></table></div>' +
        '<p class="muted small" style="margin-top:8px">' + Bank.sections.map((s, i) => (i + 1) + ' = ' + esc(s)).join(' · ') + '</p>';
    }
    return html;
  }

  const VIEWS = { home: vHome, sets: vSets, sections: vSections, custom: vCustom, config: vConfig, quiz: vQuiz, result: vResult, review: vReview, perf: vPerf, settings: vSettings };

  function render() {
    document.body.classList.toggle('in-quiz', S.view === 'quiz');
    $('#tabs').innerHTML = TABS.map((t) => '<button class="tab" data-act="tab" data-v="' + t[0] + '"' + (S.view === t[0] ? ' aria-current="page"' : '') + '>' + t[1] + '</button>').join('');
    $('#app').innerHTML = VIEWS[S.view]();
    if (S.view === 'quiz') updateTimer();
  }

  /* ---------------- 6. TEST ENGINE ---------------- */
  let tick = null;
  const stopTick = () => { clearInterval(tick); tick = null; };

  function openConfig(title, type, pool, opts) {
    opts = opts || {};
    S.cfg = { title, type, pool, count: opts.count || pool.length,
      timer: Object.assign({ mode: 'none', perQ: 60, perTest: Math.max(10, Math.ceil(pool.length / 2)) }, store.get('timer', {})),
      qOrder: type === 'set' ? 'original' : 'random', oOrder: 'original', neg: prefs.neg };
    S.view = 'config'; render(); window.scrollTo(0, 0);
  }

  function startRun() {
    const c = S.cfg;
    c.qOrder = $('#oQ').value; c.oOrder = $('#oO').value; c.neg = Number($('#oN').value);
    const t = c.timer;
    if (t.mode !== 'none') {
      const v = parseInt($('#tVal').value, 10);
      if (!v || v < 1) { toast('Enter a time greater than 0.'); return; }
      if (t.mode === 'q') t.perQ = v; else t.perTest = v;
    }
    store.set('timer', t); prefs.neg = c.neg; savePrefs();

    let qs = c.pool.slice();
    if (c.qOrder === 'random') qs = shuffle(qs);
    qs = qs.slice(0, Math.min(c.count, qs.length));       // never more than available
    const items = qs.map((q) => {
      const idx = q.options.map((_, i) => i);
      return { q, perm: c.oOrder === 'shuffle' ? shuffle(idx) : idx };   // perm = display position → original option index
    });
    const n = items.length, now = Date.now();
    S.run = { title: c.title, type: c.type, neg: c.neg, items, mode: t.mode, perQ: t.perQ, perTest: t.perTest,
      ans: Array(n).fill(null), marked: Array(n).fill(false), locked: Array(n).fill(false), spent: Array(n).fill(0),
      cur: 0, startedAt: now, qStart: now, endAt: now + t.perTest * 60000, qEndAt: now + t.perQ * 1000, left: 0 };
    S.navOpen = false; S.view = 'quiz'; render(); window.scrollTo(0, 0);
    stopTick(); tick = setInterval(onTick, 1000);
  }

  function updateTimer() {
    const r = S.run, el = $('#timer'); if (!r || !el) return;
    const now = Date.now();
    let secs, low = false;
    if (r.mode === 'test') { secs = Math.max(0, Math.ceil((r.endAt - now) / 1000)); low = secs <= 60; }
    else if (r.mode === 'q') { secs = Math.max(0, Math.ceil((r.qEndAt - now) / 1000)); low = secs <= 10; }
    else secs = Math.floor((now - r.startedAt) / 1000);
    el.textContent = '⏱ ' + fmtTime(secs); el.classList.toggle('low', low);
  }
  function onTick() {
    const r = S.run; if (!r) return stopTick();
    const now = Date.now();
    if (r.mode === 'test' && now >= r.endAt) { toast('Time is up — test submitted.'); submitRun(true); return; }
    if (r.mode === 'q' && now >= r.qEndAt) {
      r.locked[r.cur] = true;
      if (r.cur < r.items.length - 1) { toast('Time is up for this question.'); enter(r.cur + 1); } else { toast('Time is up — test submitted.'); submitRun(true); }
      return;
    }
    updateTimer();
  }
  function leave() { const r = S.run; r.spent[r.cur] += (Date.now() - r.qStart) / 1000; r.qStart = Date.now(); }
  function enter(i) {
    const r = S.run; leave();
    r.cur = i; r.qEndAt = Date.now() + r.perQ * 1000; r.qStart = Date.now();
    S.navOpen = false; render(); window.scrollTo(0, 0);
  }

  function submitRun(auto) {
    const r = S.run; if (!r) return;
    leave(); stopTick();
    const items = r.items.map((it, i) => ({ id: it.q.id, perm: it.perm, ans: r.ans[i], t: Math.round(r.spent[i]), m: r.marked[i] }));
    const bySection = {}, bySet = {}; let correct = 0, wrong = 0;
    r.items.forEach((it, i) => {
      const q = it.q, a = r.ans[i], ok = a !== null && it.perm[a] === q.correctAnswer;
      [[bySection, q.section], [bySet, q.set]].forEach((p) => { const b = p[0][p[1]] = p[0][p[1]] || { t: 0, att: 0, c: 0 }; b.t++; if (a !== null) b.att++; if (ok) b.c++; });
      if (a !== null) { if (ok) correct++; else wrong++; }
    });
    const total = r.items.length, attempted = correct + wrong;
    const score = r2(correct - wrong * r.neg);
    const entry = { id: 'T' + Date.now(), ts: Date.now(), title: r.title, type: r.type, auto: !!auto,
      sets: uniq(r.items.map((x) => x.q.set)), sections: uniq(r.items.map((x) => x.q.section)),
      total, attempted, correct, wrong, unanswered: total - attempted, neg: r.neg, score, maxScore: total,
      pct: Math.max(0, pct(score, total)), accuracy: pct(correct, attempted),
      timeTaken: Math.round((Date.now() - r.startedAt) / 1000), bySection, bySet, items };
    HISTORY.push(entry);
    if (HISTORY.length > 100) HISTORY = HISTORY.slice(-100);
    store.set('history', HISTORY);
    S.run = null; S.resultId = entry.id; S.view = 'result'; render(); window.scrollTo(0, 0);
  }

  /* ---------------- 7. ACTIONS (all clicks go through here) ---------------- */
  async function nav(view) {
    if (S.run) {
      const ok = await dialog('Leave this test?', 'Your answers so far will be lost.', 'Leave test', 'Keep going');
      if (!ok) return;
      stopTick(); S.run = null;
    }
    S.view = view; S.navOpen = false; render(); window.scrollTo(0, 0);
  }
  function toggle(list, v) { const i = list.indexOf(v); if (i >= 0) list.splice(i, 1); else list.push(v); }

  const A = {
    tab: (v) => nav(v),
    toggleTheme: () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'),
    theme: (v) => { setTheme(v); render(); },
    debug: (v) => { prefs.debug = v === '1'; savePrefs(); render(); },
    clearHistory: async () => {
      if (await dialog('Delete all history?', 'This removes every saved test, score and analysis from this device.', 'Delete', 'Cancel')) { HISTORY = []; store.set('history', HISTORY); toast('History deleted.'); render(); }
    },
    startSet: (v) => openConfig(v + ' – Full Mock Test', 'set', Bank.bySet[v]),
    startSec: (v) => openConfig(v + ' – Section Test', 'section', Bank.bySection[v]),
    cSet: (v) => { if (!v) S.custom.sets = []; else toggle(S.custom.sets, v); render(); },
    cSec: (v) => { if (!v) S.custom.secs = []; else toggle(S.custom.secs, v); render(); },
    cCount: (v) => { S.custom.count = v; render(); },
    cBuild: () => {
      const pool = customPool(), n = customCount(pool.length);
      if (!pool.length || !n) return toast('Pick at least one question.');
      const c = S.custom, one = c.sets.length === 1 && c.secs.length === 1;
      openConfig(one ? c.secs[0] + ' – ' + c.sets[0] : 'Custom Test', one ? 'setsection' : 'custom', pool, { count: n });
    },
    cfgMode: (v) => { S.cfg.timer.mode = v; render(); },
    cfgChip: (v) => { const i = $('#tVal'); if (i) i.value = v; },
    cfgStart: startRun,
    pick: (v) => { const r = S.run; if (r.locked[r.cur]) return; r.ans[r.cur] = Number(v); render(); },
    clear: () => { const r = S.run; r.ans[r.cur] = null; render(); },
    mark: () => { const r = S.run; r.marked[r.cur] = !r.marked[r.cur]; render(); },
    prev: () => { const r = S.run; if (r.cur > 0) enter(r.cur - 1); },
    next: () => {
      const r = S.run; if (r.cur >= r.items.length - 1) return;
      if (r.mode === 'q') r.locked[r.cur] = true;   // per-question mode: no going back
      enter(r.cur + 1);
    },
    jump: (v) => enter(Number(v)),
    toggleNav: () => { S.navOpen = !S.navOpen; const p = $('#navp'); if (p) p.classList.toggle('open', S.navOpen); },
    exit: () => nav('home'),
    submit: async () => {
      const r = S.run, un = r.ans.filter((a) => a === null).length, mk = r.marked.filter(Boolean).length;
      const ok = await dialog('Submit test?', 'You answered <b>' + (r.items.length - un) + '</b> of ' + r.items.length + '.' + (un ? ' <b>' + un + '</b> unanswered.' : '') + (mk ? ' <b>' + mk + '</b> marked for review.' : ''), 'Submit', 'Keep working');
      if (ok && S.run) submitRun(false);
    },
    openResult: (v) => { S.resultId = v; S.view = 'result'; render(); window.scrollTo(0, 0); },
    review: () => { S.filter = 'all'; S.view = 'review'; render(); window.scrollTo(0, 0); },
    filter: (v) => { S.filter = v; render(); },
    retry: () => {
      const e = getEntry(S.resultId); if (!e) return;
      const pool = e.items.map((x) => Bank.byId[x.id]).filter(Boolean);
      openConfig(e.title, e.type, pool);
    }
  };

  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]'); if (!el || el.disabled) return;
    const fn = A[el.dataset.act]; if (fn) fn(el.dataset.v, el);
  });
  // Custom question-count box: update the "available" text without re-rendering (keeps keyboard focus)
  document.addEventListener('input', (e) => {
    if (e.target.id === 'cNum') { S.custom.num = e.target.value; const a = customPool().length; $('#cAvail').innerHTML = availText(a); }
  });
  window.addEventListener('beforeunload', (e) => { if (S.run) { e.preventDefault(); e.returnValue = ''; } });

  /* ---------------- start ---------------- */
  buildBank();
  setTheme(document.documentElement.getAttribute('data-theme') || 'light');
  render();
})();
