#!/usr/bin/env node
/**
 * Сторибук ядра: npm run storybook → dist/storybook.html
 *
 * Каждый компонент kernel/components.mjs с примером из
 * kernel/storybook-samples.mjs — в трёх темах рядом и с кодом вызова.
 * Собирается из тех же файлов, что и экраны, поэтому не устаревает.
 * Компоненты без примера перечислены внизу страницы.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { DIST, KERNEL } from './paths.mjs';

const THEMES = [['vk-light', 'ВКонтакте'], ['ok-light', 'Одноклассники'], ['vk-dark', 'Музыка и Видео']];
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function buildStorybook() {
  const ui = await import(pathToFileURL(join(KERNEL, 'components.mjs')).href);
  const { groups } = await import(pathToFileURL(join(KERNEL, 'storybook-samples.mjs')).href + `?t=${Date.now()}`);
  const exported = Object.keys(ui).filter((k) => typeof ui[k] === 'function');
  const shown = new Set(groups.flatMap((g) => g.items.flatMap((i) => i.render.toString().match(/ui\.(\w+)\(/g) || [])).map((m) => m.slice(3, -1)));
  const missing = exported.filter((k) => !shown.has(k) && !['act', 'icon', 'screen', 'scroll', 'sr', 'avatar', 'badge', 'duration', 'toggle', 'progress', 'times', 'leadIcon', 'sheet', 'card', 'day'].includes(k));
  const source = (fn) => fn.toString().replace(/^\(ui\)\s*=>\s*/, '');

  const sections = groups.map((g) => `
  <section id="${g.title}"><h2>${g.title}</h2>
${g.items.map((i) => `    <article class="sb-item" id="${i.name.split(' ')[0]}">
      <header><h3>${esc(i.name)}</h3><p>${esc(i.note)}</p></header>
      <div class="sb-themes">${THEMES.map(([t, label]) => `<figure><figcaption>${label}</figcaption><div class="ui ${t} sb-panel">${i.render(ui)}</div></figure>`).join('')}</div>
      <details><summary>Код</summary><pre>${esc(source(i.render))}</pre></details>
    </article>`).join('\n')}
  </section>`).join('\n');

  const html = `<!doctype html>
<html lang="ru"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Компоненты ядра</title>
<style>
${readFileSync(join(KERNEL, 'base.css'), 'utf8')}
body { margin:0; background:#f6f6f7; color:#111; font:14px/1.45 -apple-system, BlinkMacSystemFont, "SF Pro Text", Inter, system-ui, sans-serif; }
.sb-top { position:sticky; top:0; z-index:100; display:flex; align-items:center; gap:20px; padding:14px 24px; background:rgba(246,246,247,.9); backdrop-filter:blur(12px); border-bottom:1px solid #e3e3e6; }
.sb-top a { color:#555; text-decoration:none; font-size:13px; } .sb-top a:hover { color:#000; } .sb-top strong { margin-right:8px; }
.sb-wrap { max-width:1280px; margin:0 auto; padding:24px; }
.sb-wrap > p { color:#555; max-width:720px; }
section > h2 { margin:40px 0 12px; font:600 22px/1.2 inherit; }
.sb-item { margin-bottom:28px; padding:16px; border:1px solid #e3e3e6; border-radius:16px; background:#fff; }
.sb-item > header { display:flex; gap:12px; align-items:baseline; margin-bottom:12px; } .sb-item h3 { margin:0; font:600 15px/1.3 ui-monospace, "SF Mono", monospace; } .sb-item > header p { margin:0; color:#666; }
.sb-themes { display:grid; grid-template-columns:repeat(3, 375px); gap:16px; overflow-x:auto; }
figure { margin:0; } figcaption { margin-bottom:6px; color:#888; font-size:12px; }
.sb-panel { --safe-top:0px; --safe-bottom:0px; position:relative; display:flex; flex-direction:column; border-radius:12px; overflow:hidden; }
.sb-panel .ui-scroll { overflow:visible; }
.sb-row { display:flex; align-items:center; gap:8px; padding:0 16px; flex-wrap:wrap; }
.sb-gap { height:12px; } .sb-pad { padding:0 16px; } .sb-w-40 { width:40%; }
details { margin-top:10px; } summary { cursor:pointer; color:#666; font-size:12px; }
pre { overflow-x:auto; padding:12px; border-radius:10px; background:#f3f3f5; font:12px/1.5 ui-monospace, "SF Mono", monospace; white-space:pre-wrap; }
.sb-missing { padding:12px 16px; border-radius:12px; background:#fff4e5; color:#7a4b00; }
</style>
<svg width="0" height="0" style="position:absolute">${readFileSync(join(KERNEL, 'icons.svg'), 'utf8').replace(/^<svg[^>]*>|<\/svg>\s*$/g, '')}</svg>
<nav class="sb-top"><strong>Компоненты ядра</strong>${groups.map((g) => `<a href="#${g.title}">${g.title}</a>`).join('')}<a href="./index.html">← Концепты</a></nav>
<main class="sb-wrap">
<p>Каждый экран концептов собирается из этих функций <code>kernel/components.mjs</code>. Одна разметка — три темы оболочки <code>.ui</code>. Свои доменные блоки концепт добавляет в <code>styles.css</code>, а компоненты ядра не перекрашивает.</p>
${sections}
${missing.length ? `<p class="sb-missing">Без примера в сторибуке: ${missing.map((m) => `<code>${m}</code>`).join(', ')} — добавьте в kernel/storybook-samples.mjs</p>` : ''}
</main>
</html>`;
  mkdirSync(DIST, { recursive: true });
  const out = join(DIST, 'storybook.html');
  writeFileSync(out, html);
  return { out, components: exported.length, missing };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { out, components, missing } = await buildStorybook();
  console.log(`сторибук: ${out} · компонентов ${components}${missing.length ? ` · без примера: ${missing.join(', ')}` : ''}`);
}
