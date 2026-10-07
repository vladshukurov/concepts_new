#!/usr/bin/env node
/**
 * Полный цикл одного концепта с коротким выводом: строка на шаг, подробности только у упавшего.
 * Заменяет цепочку из CLAUDE.md, вывод которой съедал контекст агента целиком.
 *
 *   npm run cycle -- <slug>          sync → build → shots → build → test → lint → audit → grid → access → обходчик
 *   npm run cycle -- <slug> --fast   без скриншотов и второй сборки: для правок текста и переходов
 *
 * Зелёный цикл — одна последняя строка «✓ <slug>: цикл зелёный». Отчёт обходчика —
 * concepts/<slug>/artifacts/crawl/report.json.
 */
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './paths.mjs';

const [slug, ...flags] = process.argv.slice(2);
if (!slug) { console.error('нужен slug: npm run cycle -- breath'); process.exit(1); }
const fast = flags.includes('--fast');

/* Находки обходчика, которые всегда ошибка. Остальные типы эвристические и смотрятся глазами */
const CRAWL_FATAL = new Set(['missing-target', 'unreachable', 'path-broken', 'no-exit', 'no-back', 'back-does-nothing',
  'ask-without-alert', 'ask-grant-wrong-screen', 'dead-taps']);

/* [имя, скрипт, признак успеха в выводе (если скрипт не падает кодом)] */
const steps = [
  ['sync', 'sync-spec.mjs'],
  ['build', 'build.mjs'],
  ...(fast ? [] : [['shots', 'capture.mjs'], ['build', 'build.mjs']]),
  ['test', 'test-flows.mjs', /всё зелёное/],
  ['lint', 'lint-concept.mjs', /расхождений нет/],
  ['audit', 'audit-visual.mjs', /чисто/],
  ['grid', 'audit-grid.mjs', /на одном столбце|ровно|чисто/],
  ['access', 'access-strength.mjs', /все доступы заслужены/],
  ['crawl', 'crawl-flows.mjs'],
];

let failed = false;
for (const [name, script, okPattern] of steps) {
  const run = spawnSync(process.execPath, [join(ROOT, 'scripts', script), slug], { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 << 20 });
  const out = `${run.stdout || ''}${run.stderr || ''}`;
  let ok = run.status === 0 && (!okPattern || okPattern.test(out));
  let detail = '';
  if (ok && name === 'crawl') {
    const report = JSON.parse(readFileSync(join(ROOT, 'concepts', slug, 'artifacts', 'crawl', 'report.json'), 'utf8'));
    const fatal = report.issues.filter((i) => CRAWL_FATAL.has(i.type));
    if (fatal.length || report.errors.length) {
      ok = false;
      detail = [...fatal.map((i) => JSON.stringify(i)), ...report.errors].slice(0, 15).join('\n');
    }
  }
  if (ok) { console.log(`  ✓ ${name}`); continue; }
  failed = true;
  console.log(`  ✗ ${name}`);
  /* Только строки с находками, без стектрейсов и зелёных пунктов */
  const lines = (detail || out).split('\n').filter((l) => l.trim() && !/^\s+at\s|✓|^\s*ok\b|^Node\.js/.test(l));
  console.log(lines.slice(-25).map((l) => '      ' + l.slice(0, 220)).join('\n'));
  if (name === 'sync' || name === 'build') break;
}
console.log(failed ? `✗ ${slug}: цикл красный` : `✓ ${slug}: цикл зелёный`);
process.exitCode = failed ? 1 : 0;
