#!/usr/bin/env node
/**
 * Экраны из компонентов: screens/<id>.mjs → screens/<id>.html.
 *
 * Экран-модуль экспортирует функцию `(ui) => html`, где `ui` — kernel/components.mjs.
 * HTML рядом с модулем — сгенерированный файл: его читают сборка, линтер,
 * тесты и карта экранов, как любую рукописную разметку. Руками его не правят —
 * `--check` находит разъехавшиеся пары.
 *
 *   node scripts/render-screens.mjs [slug ...] [--check]
 */
import { readdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { conceptDir, listConcepts, KERNEL } from './lib.mjs';

const ui = await import(pathToFileURL(join(KERNEL, 'components.mjs')).href);

/** Рендерит модули экранов концепта. Возвращает список расхождений в режиме check. */
export async function renderScreens(slug, { check = false } = {}) {
  const dir = join(conceptDir(slug), 'screens');
  if (!existsSync(dir)) return [];
  const stale = [];
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.mjs') && !f.startsWith('_')).sort()) {
    const mod = await import(pathToFileURL(join(dir, file)).href + `?t=${Date.now()}`);
    const html = String(mod.default(ui)).replace(/\n\s*/g, '').trim() + '\n';
    const target = join(dir, file.replace(/\.mjs$/, '.html'));
    const current = existsSync(target) ? readFileSync(target, 'utf8') : '';
    if (check) { if (current !== html) stale.push(file.replace(/\.mjs$/, '.html')); continue; }
    if (current !== html) writeFileSync(target, html);
  }
  return stale;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  const check = args.includes('--check');
  const slugs = args.filter((a) => !a.startsWith('--'));
  let bad = 0;
  for (const slug of slugs.length ? slugs : listConcepts()) {
    const stale = await renderScreens(slug, { check });
    if (stale.length) { bad += stale.length; console.log(`${slug}: HTML не совпадает с модулем — ${stale.join(', ')}`); }
  }
  if (check && bad) process.exitCode = 1;
}
