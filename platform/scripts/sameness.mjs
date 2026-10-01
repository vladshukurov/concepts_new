#!/usr/bin/env node
/**
 * Одинаковость между концептами: npm run sameness [-- <slug>]
 *
 * Аудит и тесты смотрят концепт изнутри и пропускают главное — что
 * экраны разных продуктов собраны под копирку. Ловим два признака:
 *
 * 1. Фраза-штамп: одна и та же формулировка (без имён и цифр) в заголовке
 *    строки, ячейки или кнопки встречается в трёх и больше концептах.
 *    «Новые этапы к утру», «Сообщения стола с именами», «Войти на телевизоре».
 * 2. Скелет-клон: корень вкладки собран из той же последовательности
 *    блоков, что и корень другого концепта (лента = приглашение + истории +
 *    посты; профиль = аватар + счётчики + две кнопки).
 *
 * С аргументом — только находки, где участвует этот концепт.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { CONCEPTS } from './paths.mjs';

const only = process.argv[2];
const concepts = readdirSync(CONCEPTS).filter((d) => !d.startsWith('_') && existsSync(join(CONCEPTS, d, 'screens', '_shared.mjs')));

/* Нормализация: без цифр, имён собственных в кавычках и падежных хвостов коротких слов */
const norm = (t) => t.toLowerCase().replace(/<[^>]+>/g, ' ').replace(/«[^»]*»/g, '«»').replace(/[0-9][0-9:.,‑–-]*/g, '#')
  .replace(/[^а-яёa-z#«» ]/g, ' ').replace(/\s+/g, ' ').trim();
/* Ключ штампа: первые 3 значимых слова — «новые этапы к утру» и «новые образы к утру» дают «новые … к утру» */
const stamp = (t) => { const w = norm(t).split(' ').filter((x) => x.length > 1); return w.length < 2 ? null : [w[0], '…', ...w.slice(-2)].join(' '); };

const phrases = new Map();
const skeletons = new Map();
for (const slug of concepts) {
  const spec = JSON.parse(readFileSync(join(CONCEPTS, slug, 'concept.json'), 'utf8'));
  const tabs = new Set((spec.tabs || []).map((t) => t.id));
  for (const f of readdirSync(join(CONCEPTS, slug, 'screens')).filter((x) => x.endsWith('.html'))) {
    const id = f.slice(0, -5);
    const html = readFileSync(join(CONCEPTS, slug, 'screens', f), 'utf8');
    for (const m of html.matchAll(/<(?:button|div)[^>]*class="(?:ui-row|ui-cell|ui-btn)[^"]*"[^>]*>[\s\S]*?<strong>([^<]{6,80})<\/strong>|<button[^>]*class="ui-btn[^"]*"[^>]*>(?:<svg>[\s\S]*?<\/svg>)?(?:<span>)?([^<]{6,60})</g)) {
      const key = stamp(m[1] || m[2]);
      if (!key) continue;
      if (!phrases.has(key)) phrases.set(key, new Map());
      phrases.get(key).set(slug, (m[1] || m[2]).trim());
    }
    if (tabs.has(id)) {
      const scroll = html.match(/<div class="ui-scroll[^"]*">([\s\S]*)<\/div><nav class="ui-tabs/)?.[1] || '';
      const blocks = [...scroll.matchAll(/^<(?:header|div|section|article)[^>]*class="([a-z-]+)/gm)].map((m) => m[1]);
      const sig = [...scroll.matchAll(/<(header|section|article|div) class="(ui-top|ui-large|ui-prompt|ui-stories|ui-post|ui-sec|[a-z]{2}-me)\b/g)].map((m) => m[2]).join(' > ');
      const role = spec.tabs.find((t) => t.id === id)?.role || id;
      const key = `${role} :: ${sig}`;
      if (!skeletons.has(key)) skeletons.set(key, []);
      skeletons.get(key).push(`${slug}/${id}`);
      void blocks;
    }
  }
}

const hits = [...phrases.entries()].filter(([, m]) => m.size >= 3 && (!only || m.has(only))).sort((a, b) => b[1].size - a[1].size);
const clones = [...skeletons.entries()].filter(([, l]) => l.length >= 2 && (!only || l.some((x) => x.startsWith(only + '/'))));

console.log(`\nфразы-штампы (в 3+ концептах): ${hits.length}`);
for (const [key, m] of hits.slice(0, 40)) console.log(`  ${key}  ×${m.size}\n      ${[...m.entries()].map(([s, t]) => `${s}: «${t}»`).join('\n      ')}`);
console.log(`\nскелеты-клоны корней вкладок: ${clones.length}`);
for (const [key, l] of clones) console.log(`  ${key}\n      ${l.join(', ')}`);
process.exit(hits.length || clones.length ? 1 : 0);
