#!/usr/bin/env node
/**
 * Обходчик прототипа: граф переходов, «назад», каждый запрос доступа (разрешить и отказать).
 * Ловит то, что тесты из спеки не видят: подпись ведёт не туда, тупик, мёртвый тап,
 * запрос без алерта, недостижимый экран.
 *
 *   node scripts/crawl-flows.mjs <slug>   → concepts/<slug>/artifacts/crawl/{report.json, shots/}
 *
 * Сначала соберите концепт. Находки эвристические: «текст обрезан» у иконки с aria-label
 * и фоновые ключи без запроса (silent) — не ошибки.
 */
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { DIST, ROOT } from './paths.mjs';

const slug = process.argv[2];
if (!slug) { console.error('нужен slug: node scripts/crawl-flows.mjs breath'); process.exit(1); }
const OUT = join(ROOT, 'concepts', slug, 'artifacts', 'crawl');
mkdirSync(join(OUT, 'shots'), { recursive: true });
const html = join(DIST, slug, 'index.html');
if (!existsSync(html)) { console.error(`${slug}: сначала соберите — npm run build -- ${slug}`); process.exit(1); }
const FILE = 'file://' + html;
const SEL = '[data-ask], [data-go], [data-back], [data-activate], [data-jump], [data-toast], [data-menu]';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1100 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', e => errors.push('PAGEERROR ' + e.message));
  page.on('console', m => { if (m.type() === 'error' || /нет экрана|нет доступа/.test(m.text())) errors.push(m.text()); });
  await page.goto(FILE, { waitUntil: 'load' });
  const H = await page.evaluate(() => (document.querySelector('.device[data-ledger]') || document.querySelector('.device')).id);

  const graph = await page.evaluate(({ H, SEL }) => {
    const root = document.getElementById(H);
    const C = window.__CONCEPT__;
    const out = { start: root.dataset.start, tabs: Object.keys(C.tabs || {}), parent: C.parent || {}, titles: C.titles || {}, screens: {} };
    root.querySelectorAll('.screen[data-screen]').forEach(s => {
      const id = s.dataset.screen;
      const acts = [...s.querySelectorAll(SEL)].map((e, i) => {
        const label = (e.getAttribute('aria-label') || e.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60);
        const a = { i, label };
        if (e.hasAttribute('data-ask')) { const p = e.dataset.ask.split('|'); Object.assign(a, { kind: 'ask', keys: p[0], to: p[1], deny: p[2] || p[1] }); }
        else if (e.hasAttribute('data-activate')) { const p = e.dataset.activate.split('|'); Object.assign(a, { kind: 'activate', keys: p[0], to: p[1] }); }
        else if (e.hasAttribute('data-back')) a.kind = 'back';
        else if (e.hasAttribute('data-menu')) { a.kind = 'menu'; a.items = e.dataset.menu.split('|'); }
        else if (e.hasAttribute('data-jump')) { a.kind = 'jump'; a.to = e.dataset.jump; }
        else if (e.hasAttribute('data-toast')) { const p = e.dataset.toast.split('|'); a.kind = 'toast'; a.toast = p[0]; if (p[1]) a.to = p[1]; }
        else { a.kind = 'go'; a.to = e.dataset.go; }
        a.inTabbar = !!e.closest('.tabbar');
        return a;
      });
      // Похоже на кнопку, но ничего не делает
      const dead = [...s.querySelectorAll('button, [role=button], a[href], .ui-cell, .ui-row')].filter(e => {
        if (e.closest(SEL) || e.querySelector(SEL) || e.closest('[data-filter]') || e.closest('.ui-switch, [data-switch], .switch, input, textarea, label, .ui-composer')) return false;
        if (e.matches('.ui-cell, .ui-row') && !e.matches('button') && !e.querySelector('use[href*="chevron"]')) return false;
        if (e.disabled || e.getAttribute('aria-disabled') === 'true') return false;
        return true;
      }).map(e => (e.getAttribute('aria-label') || e.textContent || e.className).replace(/\s+/g, ' ').trim().slice(0, 60));
      out.screens[id] = { title: C.titles?.[id] || id, isTab: !!(C.tabs || {})[id], acts, dead, hasDenied: !!s.querySelector('.ui-denied') };
    });
    return out;
  }, { H, SEL });

  const ids = Object.keys(graph.screens);
  const issues = [];
  // статические проверки целей
  for (const [id, s] of Object.entries(graph.screens)) {
    for (const a of s.acts) {
      for (const t of [a.to, a.kind === 'ask' ? a.deny : null].filter(Boolean)) if (!graph.screens[t]) issues.push({ type: 'missing-target', screen: id, label: a.label, target: t });
      if (a.kind === 'menu') a.items.forEach(it => { const g = it.split('>'); if (g[1] && !graph.screens[g[1]]) issues.push({ type: 'missing-target', screen: id, label: 'menu ' + it, target: g[1] }); });
      if (a.kind === 'go' && a.to === id && !a.inTabbar) issues.push({ type: 'self-link', screen: id, label: a.label });
    }
    if (s.dead.length) issues.push({ type: 'dead-taps', screen: id, items: s.dead });
    const exits = s.acts.filter(a => a.kind !== 'toast' && a.kind !== 'menu');
    if (!s.isTab && !exits.length) issues.push({ type: 'no-exit', screen: id });
  }
  // BFS: путь до каждого экрана
  const prev = { [graph.start]: null }; const q = [graph.start];
  while (q.length) {
    const id = q.shift(); const s = graph.screens[id]; if (!s) continue;
    const edges = [];
    s.acts.forEach(a => {
      if (a.kind === 'menu') a.items.forEach(it => { const g = it.split('>'); if (g[1]) edges.push({ to: g[1], a, menu: g[0] }); });
      else if (a.to) edges.push({ to: a.to, a });
    });
    for (const e of edges) if (graph.screens[e.to] && !(e.to in prev)) { prev[e.to] = { from: id, i: e.a.i, menu: e.menu, kind: e.a.kind }; q.push(e.to); }
  }
  ids.filter(id => !(id in prev)).forEach(id => issues.push({ type: 'unreachable', screen: id }));
  const pathTo = id => { const p = []; while (prev[id]) { p.unshift({ ...prev[id], to: id }); id = prev[id].from; } return p; };

  const cur = () => page.evaluate(H => document.querySelector('#' + H + ' .screen.is-on')?.dataset.screen, H);
  const alertOn = () => page.evaluate(H => { const a = document.querySelector('#' + H + ' .sysask'); return a && a.classList.contains('is-on') ? a.querySelector('.sysask-title').textContent : null; }, H);
  const answer = (v) => page.evaluate(({ H, v }) => document.querySelector('#' + H + ' .sysask [data-answer="' + v + '"]').click(), { H, v });
  const clickAct = (screen, i) => page.evaluate(({ H, SEL, screen, i }) => { const s = document.getElementById(H + '-' + screen); s.querySelectorAll(SEL)[i].click(); }, { H, SEL, screen, i });
  const clickMenu = (label) => page.evaluate(({ H, label }) => { const b = [...document.querySelectorAll('#' + H + ' .action-sheet-item')].find(b => b.textContent === label); b && b.click(); }, { H, label });
  const snack = () => page.evaluate(() => { const s = document.querySelector('.snackbar.is-on, .ui-snackbar.is-on, [class*=snack].is-on'); return s ? s.textContent.replace(/\s+/g, ' ').trim() : null; });
  const fresh = async () => { await page.goto(FILE, { waitUntil: 'load' }); };
  const shot = async (name) => { try { await page.locator('#' + H).screenshot({ path: join(OUT, 'shots', name + '.png') }); } catch (e) { } };
  const grantAll = async () => { for (let k = 0; k < 6; k++) { if (await alertOn()) await answer('grant'); else break; } };
  async function reach(id) {
    await fresh();
    for (const st of pathTo(id)) {
      if (await cur() !== st.from) return { ok: false, at: await cur(), expected: st.from };
      await clickAct(st.from, st.i);
      if (st.menu) await clickMenu(st.menu);
      await grantAll();
    }
    const c = await cur();
    return { ok: c === id, at: c };
  }

  const visits = {};
  for (const id of ids.filter(id => id in prev)) {
    const r = await reach(id);
    if (!r.ok) { issues.push({ type: 'path-broken', screen: id, landed: r.at, path: pathTo(id).map(p => p.from + '→' + p.to) }); continue; }
    await shot('screen-' + id);
    const geom = await page.evaluate(H => {
      const s = document.querySelector('#' + H + ' .screen.is-on'); const sr = s.getBoundingClientRect();
      const bad = [];
      s.querySelectorAll('*').forEach(e => {
        const r = e.getBoundingClientRect(); if (!r.width || e.closest('.perm-hidden,.is-filtered-out')) return;
        const cs = getComputedStyle(e); if (cs.visibility === 'hidden' || cs.display === 'none') return;
        const clipped = (() => { for (let x = e.parentElement; x && x !== s; x = x.parentElement) { const o = getComputedStyle(x).overflowX; if (o !== 'visible') return true; } return false; })();
        if (r.right > sr.right + 1 && !clipped && cs.position !== 'fixed') bad.push('выходит за правый край: ' + (e.className || e.tagName) + ' «' + (e.textContent || '').trim().slice(0, 30) + '»');
        if (e.children.length === 0 && e.textContent.trim() && e.scrollWidth > e.clientWidth + 1 && cs.textOverflow !== 'ellipsis' && cs.overflow !== 'visible') bad.push('текст обрезан: «' + e.textContent.trim().slice(0, 40) + '»');
      });
      return [...new Set(bad)].slice(0, 12);
    }, H);
    if (geom.length) issues.push({ type: 'layout', screen: id, items: geom });
    // назад
    const s = graph.screens[id]; const backAct = s.acts.find(a => a.kind === 'back');
    const came = pathTo(id).slice(-1)[0]?.from;
    if (backAct) {
      await clickAct(id, backAct.i);
      const landed = await cur();
      visits[id] = { cameFrom: came, backTo: landed };
      if (landed === id) issues.push({ type: 'back-does-nothing', screen: id });
      else if (came && landed !== came) issues.push({ type: 'back-elsewhere', screen: id, cameFrom: came, backTo: landed });
    } else if (!s.isTab) {
      visits[id] = { cameFrom: came, backTo: null };
      const hasClose = s.acts.some(a => a.kind !== 'toast' && a.kind !== 'menu' && a.to);
      if (!hasClose) issues.push({ type: 'no-back', screen: id, cameFrom: came });
    }
  }

  // каждый запрос доступа: разрешить и отказать
  const asks = [];
  for (const [id, s] of Object.entries(graph.screens)) {
    if (!(id in prev)) continue;
    const list = s.acts.filter(a => a.kind === 'ask').map(a => ({ ...a, menu: null }));
    s.acts.filter(a => a.kind === 'menu').forEach(a => a.items.forEach(it => { const n = it.split('?'); if (n.length > 1) list.push({ i: a.i, label: 'меню: ' + n[0], kind: 'ask', keys: n[1], to: id, deny: id, menu: n[0] }); }));
    for (const a of list) {
      const rec = { screen: id, label: a.label, keys: a.keys, to: a.to, deny: a.deny };
      for (const v of ['grant', 'deny']) {
        const r = await reach(id); if (!r.ok) { rec.error = 'не дошёл до экрана'; break; }
        await clickAct(id, a.i); if (a.menu) await clickMenu(a.menu);
        const alerts = [];
        for (let k = 0; k < 6; k++) { const t = await alertOn(); if (!t) break; alerts.push(t); if (k === 0) await shot(`ask-${id}-${a.i}-alert`); await answer(v === 'grant' ? 'grant' : (k === 0 ? 'deny' : 'deny')); if (v === 'deny') break; }
        await page.waitForTimeout(60);
        const landed = await cur();
        const sn = await snack();
        await shot(`ask-${id}-${a.i}-${v}`);
        const deniedVisible = await page.evaluate(H => { const s = document.querySelector('#' + H + ' .screen.is-on'); const d = s && s.querySelector('.ui-denied'); return !!(d && d.getBoundingClientRect().height && !d.closest('.perm-hidden')); }, H);
        rec[v] = { alerts, landed, snack: sn, deniedState: deniedVisible };
      }
      if (rec.grant && !rec.grant.alerts.length) issues.push({ type: 'ask-without-alert', screen: id, label: a.label, keys: a.keys });
      if (rec.grant && rec.grant.landed !== a.to) issues.push({ type: 'ask-grant-wrong-screen', screen: id, label: a.label, expected: a.to, landed: rec.grant.landed });
      asks.push(rec);
    }
  }
  // ключи из спеки без единого запроса в интерфейсе
  const permKeys = await page.evaluate(() => (window.__CONCEPT__.perms || []).map(p => p[0]));
  const asked = new Set(asks.flatMap(a => a.keys.split('+')));
  const activated = new Set(Object.values(graph.screens).flatMap(s => s.acts.filter(a => a.kind === 'activate').flatMap(a => a.keys.split('+'))));
  permKeys.filter(k => !asked.has(k) && !activated.has(k)).forEach(k => issues.push({ type: 'key-never-asked', key: k }));

  writeFileSync(join(OUT, 'report.json'), JSON.stringify({ slug, hero: H, start: graph.start, screens: ids.length, reachable: Object.keys(prev).length, permKeys, issues, asks, visits, errors: [...new Set(errors)], graph }, null, 1));
  const counts = issues.reduce((m, x) => (m[x.type] = (m[x.type] || 0) + 1, m), {});
  console.log(slug, 'screens', ids.length, 'asks', asks.length, JSON.stringify(counts), 'errors', new Set(errors).size);
  await browser.close();
})().catch(e => { console.error(slug, e); process.exit(1); });
