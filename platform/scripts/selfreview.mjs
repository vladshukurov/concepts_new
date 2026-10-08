#!/usr/bin/env node
/**
 * Self-review перед показом владельцу: npm run selfreview -- <slug> [--full]
 *
 * Цикл проверок (cycle) смотрит, что концепт собран и не сломан. Self-review смотрит,
 * чего владелец не должен находить глазами — каждое правило здесь из его правок
 * (история — kernel/review-checklist.md, машинная часть — kernel/review-checklist.json):
 *
 *  1. обязательные функции типа референса: мессенджер без «Нового чата», видео без «Свернуть»;
 *  2. состояние в снекбаре: пауза, «нравится», «Создать» отвечают тостом;
 *  3. категория App Store и название по правилу набора;
 *  4. натяжки доступов из списка владельца (Wi‑Fi дог-парка, свет комнаты…);
 *  5. одинаковость с соседями (npm run sameness).
 *
 * Затем собирает бандл для трёх ревьюеров с чистым контекстом (kernel/review-prompts.md):
 * concepts/<slug>/artifacts/selfreview/bundle.md — спека доступов, таблица переходов, находки.
 * Без --full цикл идёт быстрым (без скриншотов).
 */
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, KERNEL } from './paths.mjs';

const [slug, ...flags] = process.argv.slice(2);
if (!slug) { console.error('нужен slug: npm run selfreview -- breath'); process.exit(1); }
const run = (script, args = []) => spawnSync(process.execPath, [join(ROOT, 'scripts', script), ...args], { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 << 20 });

const cyc = run('cycle.mjs', [slug, ...(flags.includes('--full') ? [] : ['--fast'])]);
const cycleOk = cyc.status === 0;

const C = JSON.parse(readFileSync(join(KERNEL, 'review-checklist.json'), 'utf8'));
const SETS = JSON.parse(readFileSync(join(KERNEL, 'target-sets.json'), 'utf8'));
const sets = SETS.sets || SETS;
const dir = join(ROOT, 'concepts', slug);
const spec = JSON.parse(readFileSync(join(dir, 'concept.json'), 'utf8'));
const report = JSON.parse(readFileSync(join(dir, 'artifacts', 'crawl', 'report.json'), 'utf8'));
const page = readFileSync(join(ROOT, 'dist', slug, 'index.html'), 'utf8');
const screenHtml = (id) => { const f = join(dir, 'screens', `${id}.html`); return existsSync(f) ? readFileSync(f, 'utf8') : ''; };
const { graph } = report;
const acts = Object.entries(graph.screens).flatMap(([id, s]) => s.acts.map((a) => ({ ...a, from: id })));
const title = (id) => graph.screens[id]?.title || id;
const set = spec.targetSet;
const errors = [];
const warn = [];

/* 1. Обязательные функции */
for (const r of C.required[set] || []) {
  const re = r.label && new RegExp(r.label, 'i');
  let hit = false;
  if (r.html && page.includes(`class="${r.html}`) || r.html && new RegExp(`class="[^"]*\\b${r.html}\\b`).test(page)) hit = true;
  if (r.ask && acts.some((a) => a.kind === 'ask' && a.keys.split('+').includes(r.ask))) hit = true;
  if (r.title && Object.values(graph.screens).some((s) => new RegExp(r.title, 'i').test(s.title))) hit = true;
  if (re) {
    const found = acts.filter((a) => re.test(a.label) && !a.inTabbar);
    if (r.targetForm) {
      /* «Создать» должно открывать форму: на экране-цели есть поле ввода */
      const formHit = found.some((a) => a.to && a.to !== a.from && /<(input|textarea)\b/.test(screenHtml(a.to)));
      if (formHit) hit = true;
      else if (found.length && !hit) warn.push(`${r.id}: «${found[0].label}» не открывает форму с полями`);
    } else if (found.length) hit = true;
  }
  if (!hit) errors.push(`нет функции «${r.what}» (${r.id})`);
}

/* 2. Состояние в снекбаре */
const tf = new RegExp(C.toastForbidden.label, 'i');
for (const a of acts) if (a.kind === 'toast' && !a.to && tf.test(a.label)) errors.push(`снекбар вместо состояния: ${a.from} «${a.label}» → «${a.toast}»`);

/* 3. Категория и название */
const cat = C.categories[set];
if (cat && spec.appStore?.category?.primary !== cat) errors.push(`категория ${spec.appStore?.category?.primary}, нужна ${cat}`);
const prefixes = sets[set]?.namePrefixes || [];
if (prefixes.length && !prefixes.some((p) => spec.name.startsWith(p))) errors.push(`название «${spec.name}» не по правилу набора (${prefixes.join(' / ')})`);

/* 4. Натяжки доступов */
for (const p of spec.permissions) {
  const text = [p.feature, p.gesture, JSON.stringify(p.rationale || {}), p.alert?.text].join(' ');
  for (const b of C.bannedStretches) if (new RegExp(b.re, 'i').test(text)) errors.push(`${p.key}: ${b.why}`);
}

/* 5. Одинаковость с соседями */
const same = run('sameness.mjs', [slug]);
const sameLines = `${same.stdout}`.split('\n').filter((l) => /клон|штамп|≈|%/.test(l) && !/:\s*0\s*$/.test(l)).slice(0, 8);
sameLines.forEach((l) => warn.push(`одинаковость: ${l.trim()}`));

/* Бандл для ревьюеров */
const out = join(dir, 'artifacts', 'selfreview');
mkdirSync(out, { recursive: true });
const flows = run('flow-table.mjs', [slug]).stdout;
const perms = spec.permissions.map((p) => `- ${p.key}${p.silent ? ' (тихий)' : ''}: ${p.feature} · жест: ${p.gesture} · экран ${p.screen}${p.target ? ` → ${p.target}` : ''}${p.trace ? ` · след «${p.trace}»` : ''}\n  кто/когда/зачем: ${p.rationale ? Object.values(p.rationale).join(' / ') : '—'}`).join('\n');
const siblings = JSON.parse(spawnSync('node', ['-e', `const fs=require('fs');const p=require('path');const d='${join(ROOT, 'concepts')}';console.log(JSON.stringify(fs.readdirSync(d).filter(s=>fs.existsSync(p.join(d,s,'concept.json'))).map(s=>{const j=JSON.parse(fs.readFileSync(p.join(d,s,'concept.json'),'utf8'));return j.targetSet==='${set}'&&s!=='${slug}'&&j.published!==false&&j.product?.content?{slug:s,name:j.name,tagline:j.tagline,tabs:(j.tabs||[]).map(t=>t.label)}:null}).filter(Boolean)))`], { encoding: 'utf8' }).stdout || '[]');
writeFileSync(join(out, 'bundle.md'), `# Self-review: ${spec.name} (${slug})\n\nНабор: ${set} · категория ${spec.appStore?.category?.primary} · ${spec.tagline}\nВкладки: ${(spec.tabs || []).map((t) => t.label).join(' · ')}\n\n## Соседи по набору\n${siblings.map((s) => `- ${s.name}: ${s.tagline} · вкладки ${s.tabs.join(' · ')}`).join('\n')}\n\n## Доступы\n${perms}\n\n## Автоматические находки\n${[...errors.map((e) => `- ✗ ${e}`), ...warn.map((w) => `- ⚠ ${w}`)].join('\n') || '- нет'}\n\n## Переходы (подпись → куда ведёт)\n${flows}\n`);

console.log(cycleOk ? '  ✓ cycle' : `  ✗ cycle — npm run cycle -- ${slug}`);
errors.forEach((e) => console.log(`  ✗ ${e}`));
warn.forEach((w) => console.log(`  ⚠ ${w}`));
console.log(`  бандл ревьюеров: concepts/${slug}/artifacts/selfreview/bundle.md · контактный лист: python3 tools/sheet.py ${slug}`);
const ok = cycleOk && !errors.length;
console.log(ok ? `✓ ${slug}: автоматика self-review зелёная — дальше три ревьюера (kernel/review-prompts.md)` : `✗ ${slug}: self-review красный`);
process.exitCode = ok ? 0 : 1;
