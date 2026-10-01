#!/usr/bin/env node
/**
 * Переименование ключа доступа в канонический из kernel/access-model.json:
 *   node scripts/rename-access-key.mjs <slug>        — все синонимы концепта
 * Меняет ключ в concept.json и во всех data-ask / data-activate / data-show-* /
 * data-switch экранов (.mjs и .html). Синонимы (photo, photoadd, localnet,
 * domains) копились в портфеле, пока ключи писались руками.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { CONCEPTS, KERNEL } from './paths.mjs';

const model = JSON.parse(readFileSync(join(KERNEL, 'access-model.json'), 'utf8')).keys;
const alias = Object.fromEntries(Object.entries(model).flatMap(([k, m]) => (m.aliases || []).map((a) => [a, k])));
const slug = process.argv[2];
const dir = join(CONCEPTS, slug);
const specPath = join(dir, 'concept.json');
const spec = JSON.parse(readFileSync(specPath, 'utf8'));
const pairs = spec.permissions.filter((p) => alias[p.key]).map((p) => [p.key, alias[p.key]]);
if (!pairs.length) { console.log(`${slug}: синонимов нет`); process.exit(0); }
for (const p of spec.permissions) if (alias[p.key]) p.key = alias[p.key];
writeFileSync(specPath, JSON.stringify(spec, null, 2) + '\n');
/* Ключ стоит в атрибутах как «key|…», «a+key|…», «a,key» — меняем только целое слово внутри атрибута доступа */
const attr = /(data-(?:ask|activate|show-denied|show-granted|switch)="|(?:ask|activate): '|(?:ui\.)?(?:denied|granted)\(')([^"']*)/g;
for (const f of readdirSync(join(dir, 'screens')).filter((x) => /\.(mjs|html)$/.test(x))) {
  const path = join(dir, 'screens', f);
  const src = readFileSync(path, 'utf8');
  const out = src.replace(attr, (m, head, val) => head + val.replace(/[a-z]+/g, (w, i) => {
    const before = val.slice(0, i); /* после первого «|» идут экраны, а не ключи */
    return before.includes('|') ? w : (pairs.find(([a]) => a === w)?.[1] ?? w);
  }));
  if (out !== src) writeFileSync(path, out);
}
console.log(`${slug}: ${pairs.map(([a, b]) => `${a} → ${b}`).join(', ')}`);
