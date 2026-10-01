#!/usr/bin/env node
/**
 * Сила фич доступов: заслужен ли доступ фичей, которую человек видит.
 *
 *   npm run access              — портфель: слабые доступы по всем концептам
 *   npm run access -- <slug>    — один концепт, подробно
 *   npm run access -- <slug> --strict — выход 1, если слаб якорный доступ
 *
 * Эталон — kernel/access-model.json. Проверки эвристические и намеренно
 * простые: каждая ловит приём, который уже встречался в портфеле
 * (переключатель в настройках, доступ без видимого результата, формулировка
 * «проверить фоновые задачи»), а не пытается оценить идею целиком.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { KERNEL, listConcepts, readMarkup, readSpec } from './lib.mjs';

const MODEL = JSON.parse(readFileSync(join(KERNEL, 'access-model.json'), 'utf8')).keys;
const ALIAS = Object.fromEntries(Object.entries(MODEL).flatMap(([k, m]) => (m.aliases || []).map((a) => [a, k])));
const SETTINGS_SCREEN = /^(settings|privacy|menu|account|prefs|preferences|notifications-settings)$/;

/** Все места, где экран вызывает доступ: [{ attr, target, html }]. */
function triggers(html, key) {
  const out = [];
  for (const m of html.matchAll(/<(\w+)([^>]*\bdata-(ask|activate)="([^"]+)"[^>]*)>/g)) {
    const [keys, onGrant] = m[4].split('|');
    if (keys.split('+').includes(key)) out.push({ tag: m[0], target: onGrant, attrs: m[2] });
  }
  return out;
}

export function assess(slug) {
  const spec = readSpec(slug);
  const markup = readMarkup(slug, spec);
  const all = Object.values(markup).join('\n');
  const text = all.replace(/<[^>]+>/g, ' ');
  /* Мессенджер — любая переписка в продукте: вкладка, чат обсуждения, диалог */
  const hasMessenger = spec.tabs?.some((t) => /messag/.test(t.role || '')) || /ui-chat\b|ui-dialog\b|ui-bubble\b/.test(all);
  const rows = [];
  for (const p of spec.permissions) {
    const key = ALIAS[p.key] || p.key;
    const model = MODEL[key];
    const issues = [];
    if (!model) { rows.push({ key: p.key, anchor: p.anchor, issues: ['нет в модели доступов'] }); continue; }
    if (ALIAS[p.key]) issues.push(`ключ-синоним, канон — ${key}`);
    /* Тихий доступ: кнопка не нужна, нужен видимый результат в уже существующем интерфейсе */
    if (p.silent) {
      if (model.prompt) issues.push('доступ с системным запросом не может быть тихим — нужен жест в сценарии');
      if (!p.evidence) issues.push('тихий доступ без evidence: где человек видит результат');
      rows.push({ key: p.key, anchor: !!p.anchor, screen: p.screen, issues });
      continue;
    }
    const screenId = p.screen;
    const screenSpec = spec.screens.find((s) => s.id === screenId);
    const html = markup[screenId] || '';
    const found = triggers(html, p.key);
    const isTab = spec.tabs?.some((t) => t.id === screenId);
    const inSettings = SETTINGS_SCREEN.test(screenId) || (!isTab && screenSpec?.ui?.pattern === 'settings');
    if (inSettings && !model.settingsOk) issues.push('жест в настройках — фича не в сценарии');
    const toggleOnly = found.length && found.every((t) => /ui-cell/.test(t.tag)) && new RegExp(`data-switch="${p.key}"`).test(html);
    const stays = (p.target || screenId) === screenId;
    const switches = new RegExp(`data-switch="${p.key}"`).test(html);
    /* Для push и Face ID включённый переключатель у события и есть результат; для остальных — нет */
    const shows = new RegExp(`data-show-granted="([^"]*,)?${p.key}(,[^"]*)?"`).test(html) || (switches && model.settingsOk);
    if (stays && !shows) issues.push(toggleOnly ? 'результат — только переключатель' : 'после разрешения на экране ничего не меняется');
    const phrase = (model.weakPhrases || []).find((w) => new RegExp(w, 'i').test(`${p.gesture} ${p.feature}`));
    if (phrase) issues.push(`формулировка под доступ: «${phrase}»`);
    if (key === 'commnotif' && !hasMessenger) issues.push('уведомления о сообщениях без мессенджера');
    if (key === 'voip' && !/ui-call|callView|звон/i.test(markup[p.target] || '')) issues.push('после разрешения нет звонка');
    if (key === 'tracking' && !/реклам/i.test(text)) issues.push('ATT без рекламы в продукте');
    /* Отказ бывает только у доступа с системным запросом */
    if (model.prompt && !new RegExp(`data-show-denied="([^"]*,)?${p.key}(,[^"]*)?"`).test(all)) issues.push('нет состояния при отказе');
    rows.push({ key: p.key, anchor: !!p.anchor, screen: screenId, issues });
  }
  return { slug, name: spec.name, rows };
}

import { pathToFileURL } from 'node:url';
if (import.meta.url !== pathToFileURL(process.argv[1]).href) { /* импорт как библиотеки */ } else {
const args = process.argv.slice(2);
const strict = args.includes('--strict');
const slugs = args.filter((a) => !a.startsWith('--'));

if (slugs.length) {
  let fail = false;
  for (const slug of slugs) {
    const { name, rows } = assess(slug);
    const weak = rows.filter((r) => r.issues.length);
    console.log(`\n=== ${slug} · ${name} · сильных ${rows.length - weak.length} из ${rows.length} ===`);
    for (const r of weak) {
      console.log(`  ${r.anchor ? '⚓ ' : '  '}${r.key.padEnd(18)} ${r.screen || ''}`);
      for (const i of r.issues) console.log(`      · ${i}`);
    }
    if (!weak.length) console.log('  все доступы заслужены');
    if (strict && weak.some((r) => r.anchor)) fail = true;
  }
  process.exit(fail ? 1 : 0);
} else {
  const byKey = {};
  const lines = [];
  for (const slug of listConcepts()) {
    let res;
    try { res = assess(slug); } catch (e) { lines.push([slug, '—', e.message.split('\n')[0]]); continue; }
    const weak = res.rows.filter((r) => r.issues.length);
    for (const r of weak) for (const i of r.issues) (byKey[r.key] ||= {})[i.replace(/«.*»/, '«…»')] = ((byKey[r.key] || {})[i.replace(/«.*»/, '«…»')] || 0) + 1;
    lines.push([slug, `${res.rows.length - weak.length}/${res.rows.length}`, weak.filter((r) => r.anchor).map((r) => r.key).join(' ')]);
  }
  lines.sort((a, b) => eval(a[1]) - eval(b[1]));
  console.log('\nконцепт          сильных  слабые якорные');
  for (const [s, n, a] of lines) console.log(`  ${s.padEnd(16)} ${String(n).padEnd(8)} ${a}`);
  console.log('\nчастые слабости по ключам:');
  for (const [k, v] of Object.entries(byKey).sort((a, b) => Object.values(b[1]).reduce((x, y) => x + y) - Object.values(a[1]).reduce((x, y) => x + y))) {
    console.log(`  ${k.padEnd(18)} ${Object.entries(v).sort((a, b) => b[1] - a[1]).map(([i, n]) => `${i} ×${n}`).join(' · ')}`);
  }
}
}
