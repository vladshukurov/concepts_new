#!/usr/bin/env node
/**
 * Подтягивает спеку к экранам после правки модулей: npm run sync -- <slug>
 *
 * 1. Рендерит screens/*.mjs в .html.
 * 2. Главное действие экрана (ui.primaryAction) — видимый текст элемента
 *    с data-primary; у строки — её заголовок.
 * 3. Сценарные срезы замыкаются: цель перехода, которой нет в срезе,
 *    добавляется в него тупиком (stops). Таб-бар не учитывается.
 *
 * Руками в спеке остаются только смысловые поля: продукт, доступы, прототипы.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { CONCEPTS } from './paths.mjs';
import { renderScreens } from './render-screens.mjs';

const slug = process.argv[2];
if (!slug) { console.error('использование: npm run sync -- <slug>'); process.exit(1); }
const dir = join(CONCEPTS, slug);
await renderScreens(slug);
const specPath = join(dir, 'concept.json');
const spec = JSON.parse(readFileSync(specPath, 'utf8'));
const html = (id) => { const f = join(dir, 'screens', `${id}.html`); return existsSync(f) ? readFileSync(f, 'utf8') : null; };

for (const s of spec.screens) {
  const h = html(s.id);
  if (h === null) continue;
  const m = h.match(/<(\w+)[^>]*\bdata-primary\b[^>]*>([\s\S]*?)<\/\1>/);
  const strong = m?.[2].match(/<strong>([\s\S]*?)<\/strong>/);
  let text = strong ? strong[1].replace(/<[^>]+>/g, '').trim()
    : m ? m[2].replace(/<span class="ui-sr">[\s\S]*?<\/span>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
  if (text.length > 60) text = text.slice(0, 40).replace(/\s\S*$/, '');
  s.ui = s.ui || {};
  s.ui.primaryAction = text || null;
}

const ids = new Set(spec.screens.map((s) => s.id).concat(['account', 'deleteaccount', 'password', 'register', 'registerpassword']));
const targets = (id) => {
  const h = (html(id) || '').replace(/<nav class="[^"]*\btabbar\b[\s\S]*?<\/nav>/, '');
  const out = new Set();
  for (const m of h.matchAll(/data-go="([a-z0-9-]+)"/g)) out.add(m[1]);
  for (const m of h.matchAll(/data-ask="[^"|]+\|([a-z0-9-]*)\|?([a-z0-9-]*)"/g)) { m[1] && out.add(m[1]); m[2] && out.add(m[2]); }
  for (const m of h.matchAll(/data-activate="[^"|]+\|([a-z0-9-]+)"/g)) out.add(m[1]);
  for (const m of h.matchAll(/data-toast="[^"|]*\|([a-z0-9-]+)"/g)) out.add(m[1]);
  return [...out].filter((t) => ids.has(t));
};
for (const p of spec.prototypes) {
  if (p.id === 'all') { p.screens = spec.screens.map((s) => s.id); continue; }
  p.stops = p.stops || [];
  for (const id of [...p.screens]) {
    if (p.stops.includes(id)) continue;
    for (const t of targets(id)) if (!p.screens.includes(t)) { p.screens.push(t); p.stops.push(t); }
  }
}
writeFileSync(specPath, JSON.stringify(spec, null, 2) + '\n');
console.log(`${slug}: экраны отрисованы · главные действия сверены · срезы ${spec.prototypes.map((p) => `${p.id} ${p.screens.length}`).join(', ')}`);
