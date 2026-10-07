#!/usr/bin/env node
/**
 * Таблица «подпись → куда ведёт» для сверки по смыслу: обходчик проверяет, что экран-цель
 * существует, но не видит, что «Новая поездка» открывает «Контакты». Таблицу читает глазами
 * автор или агент — текстом, без скриншотов.
 *
 *   npm run flows -- <slug>     (сначала npm run crawl -- <slug>)
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './paths.mjs';

const slug = process.argv[2];
const file = join(ROOT, 'concepts', slug || '', 'artifacts', 'crawl', 'report.json');
if (!slug || !existsSync(file)) { console.error('нужен отчёт обходчика: npm run crawl -- <slug>'); process.exit(1); }
const { graph } = JSON.parse(readFileSync(file, 'utf8'));
const title = (id) => `«${graph.screens[id]?.title || id}»`;
for (const [id, s] of Object.entries(graph.screens)) {
  for (const a of s.acts) {
    if (a.inTabbar || a.kind === 'back') continue;
    const to = a.kind === 'ask' ? `[${a.keys}] → ${title(a.to)} · отказ → ${title(a.deny)}`
      : a.kind === 'activate' ? `[${a.keys}] → ${title(a.to)}`
      : a.kind === 'toast' ? `тост «${a.toast}»${a.to ? ` → ${title(a.to)}` : ''}`
      : a.kind === 'menu' ? `меню: ${a.items.join(' | ')}`
      : title(a.to);
    console.log(`${id} ${title(id)} :: ${a.label.slice(0, 60)} → ${to}`);
  }
}
