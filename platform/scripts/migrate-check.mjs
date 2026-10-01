#!/usr/bin/env node
/**
 * Что осталось от старого стека: npm run migrate:check -- <slug>
 * Без аргумента — прогресс миграции по портфелю.
 *
 * Концепт перенесён, когда закрыты все пункты: экраны — модули на оболочке
 * `.ui` нужной темы, есть модель домена, доступы заслужены, ключи канонические,
 * доки без противоречий и с генерируемыми блоками, линтер чистый. Пункты —
 * ровно те правки, из которых состояла миграция первых концептов.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { conceptDir, listConcepts, readSpec, KERNEL, SCRIPTS } from './lib.mjs';
import { assess } from './access-strength.mjs';

const ALIASES = new Set(Object.values(JSON.parse(readFileSync(join(KERNEL, 'access-model.json'), 'utf8')).keys).flatMap((m) => m.aliases || []));
const AUTH = new Set(['phone', 'password', 'register', 'registerpassword', 'account', 'deleteaccount', 'code', 'codefail']);

/** Тема по набору и стратегии: тёмная — только мимикрия Музыки и Видео. */
export const expectedTheme = (spec) => spec.targetSet === 'ok' ? 'ok-light'
  : ['vk-music', 'vk-video'].includes(spec.targetSet) && spec.positioning?.mode === 'mimicry' ? 'vk-dark' : 'vk-light';

export function check(slug, { lint = true } = {}) {
  const spec = readSpec(slug);
  const dir = conceptDir(slug);
  const screensDir = join(dir, 'screens');
  const files = existsSync(screensDir) ? readdirSync(screensDir) : [];
  const ids = spec.screens.map((s) => s.id).filter((id) => !AUTH.has(id));
  const html = (id) => (files.includes(`${id}.html`) ? readFileSync(join(screensDir, `${id}.html`), 'utf8') : '');
  const items = [];
  const item = (ok, title, detail = '') => items.push({ ok, title, detail });

  const theme = expectedTheme(spec);
  item(spec.brand?.theme === theme, `тема ${theme}`, spec.brand?.theme === theme ? '' : spec.brand?.theme ? `сейчас ${spec.brand.theme}` : 'brand.theme не задана');
  const notModules = ids.filter((id) => !files.includes(`${id}.mjs`));
  item(!notModules.length, 'экраны — модули на компонентах', notModules.length ? `на HTML: ${notModules.length} из ${ids.length}` : '');
  const offShell = ids.filter((id) => !/class="screen ui /.test(html(id)));
  item(!offShell.length, 'экраны на оболочке .ui', offShell.length ? offShell.slice(0, 6).join(', ') + (offShell.length > 6 ? ` и ещё ${offShell.length - 6}` : '') : '');
  const legacyAuth = ['code', 'codefail', 'phone'].filter((id) => files.includes(`${id}.html`));
  item(!legacyAuth.length, 'нет старых экранов входа', legacyAuth.join(', '));
  item(existsSync(join(dir, 'model.mjs')), 'модель домена model.mjs');
  const vkMimicry = spec.targetSet === 'vkontakte' && spec.positioning?.mode === 'mimicry';
  if (vkMimicry) item(spec.tabs?.some((t) => /messag/.test(t.role || '')), 'мессенджер — вкладка (мимикрия ВКонтакте)');
  if (spec.targetSet === 'vk-video' && spec.positioning?.mode === 'mimicry') item(ids.some((id) => /class="ui-player\b/.test(html(id))), 'плеер ВК Видео (ui.player)');
  const aliases = spec.permissions.filter((p) => ALIASES.has(p.key)).map((p) => p.key);
  item(!aliases.length, 'ключи доступов канонические', aliases.length ? `${aliases.join(', ')} — node scripts/rename-access-key.mjs ${slug}` : '');
  const domains = spec.permissions.some((p) => /associated-?domains|^domains$/.test(p.key));
  item(!domains, 'без associated-domains');
  let weak = [];
  try { weak = assess(slug).rows.filter((r) => r.issues.length).map((r) => r.key); } catch (e) { weak = [`ошибка: ${e.message.split('\n')[0]}`]; }
  item(!weak.length, 'доступы заслужены', weak.length ? `слабые: ${weak.join(', ')}` : '');
  const docsDir = join(dir, 'docs');
  const docs = existsSync(docsDir) ? readdirSync(docsDir).filter((f) => f.endsWith('.md')).map((f) => readFileSync(join(docsDir, f), 'utf8')).join('\n') : '';
  const blocks = ['theme-tokens', 'domain-components', 'access-strength'].filter((b) => !docs.includes(`@generated:${b}`));
  item(!blocks.length, 'доки с генерируемыми блоками', blocks.length ? `нет: ${blocks.join(', ')}` : '');
  if (lint) {
    let out = '';
    try { out = execFileSync(process.execPath, [join(SCRIPTS, 'lint-concept.mjs'), slug], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); }
    catch (e) { out = e.stdout || ''; }
    const problems = out.split('\n').filter((l) => l.startsWith('  · '));
    item(!problems.length, 'линтер чистый', problems.length ? `${problems.length}: ${problems[0].slice(4, 90)}` : '');
  }
  return { slug, name: spec.name, items, done: items.filter((i) => i.ok).length };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const slugs = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  if (slugs.length) {
    let fail = false;
    for (const slug of slugs) {
      const r = check(slug);
      console.log(`\n=== ${slug} · ${r.name} · ${r.done} из ${r.items.length} ===`);
      for (const i of r.items) console.log(`  ${i.ok ? '✓' : '✗'} ${i.title}${i.detail ? ` — ${i.detail}` : ''}`);
      if (r.done < r.items.length) fail = true;
    }
    process.exit(fail ? 1 : 0);
  } else {
    /* Портфель — без линтера: он требует сборки и идёт по концепту отдельно */
    const rows = listConcepts().map((slug) => { try { return check(slug, { lint: false }); } catch (e) { return { slug, name: '—', items: [], done: 0, error: e.message.split('\n')[0] }; } });
    rows.sort((a, b) => b.done / (b.items.length || 1) - a.done / (a.items.length || 1) || a.slug.localeCompare(b.slug));
    const ready = rows.filter((r) => r.items.length && r.done === r.items.length);
    console.log(`\nперенесено полностью: ${ready.length} из ${rows.length} (без проверки линтером)\n`);
    for (const r of rows) {
      const left = r.items.filter((i) => !i.ok).map((i) => i.title);
      console.log(`  ${r.slug.padEnd(14)} ${`${r.done}/${r.items.length}`.padEnd(6)} ${r.error || left.join(' · ')}`);
    }
  }
}
