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
<html lang="ru">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Компоненты ядра</title>
<meta name="color-scheme" content="light dark">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@500;600&display=swap" rel="stylesheet">
<style>
${readFileSync(join(KERNEL, 'base.css'), 'utf8')}
/* Каркас страницы — как у лаунчера: те же токены, шапка 56 и обёртка 1180 */
:root {
  --accent:#0d8a7a; --page-bg:#fff; --page-card:#fff; --page-ink:#0a0a0a;
  --page-ink-dim:#666; --page-ink-mute:#999; --page-line:#eaeaea; --page-chip:#fafafa;
  --face:'Geist',system-ui,sans-serif; --mono:'Geist Mono',ui-monospace,monospace;
}
@media (prefers-color-scheme:dark) { :root {
  --accent:#3dd6c0; --page-bg:#000; --page-card:#0a0a0a; --page-ink:#ededed;
  --page-ink-dim:#a1a1a1; --page-ink-mute:#707070; --page-line:#2e2e2e; --page-chip:#0d0d0d;
} }
body { margin:0; background:var(--page-bg); color:var(--page-ink); font:400 15px/1.6 var(--face); -webkit-font-smoothing:antialiased; letter-spacing:-.005em; }
:focus-visible { outline:2px solid var(--accent); outline-offset:3px; }
.topbar { position:sticky; top:0; z-index:100; height:56px; padding:0 24px; display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:16px; border-bottom:1px solid var(--page-line); background:color-mix(in srgb,var(--page-bg) 82%,transparent); backdrop-filter:blur(12px) saturate(180%); -webkit-backdrop-filter:blur(12px) saturate(180%); }
.topbar a { color:inherit; text-decoration:none; }
.brand { font:600 15px/1.2 var(--face); letter-spacing:-.02em; }
.section-name { font:500 14px/1.2 var(--face); }
.topbar-end { justify-self:end; color:var(--page-ink-dim); font:400 13px/1.2 var(--face); }
.topbar-end a:hover { color:var(--page-ink); }
.sb-wrap { max-width:1220px; margin:0 auto; padding:48px 24px 120px; }
.eyebrow { font:600 11px/1.3 var(--mono); letter-spacing:.09em; text-transform:uppercase; color:var(--page-ink-mute); }
/* Только заголовок страницы: .sb-wrap h1 доставал заголовки внутри превью устройств */
.sb-wrap > h1 { font:600 clamp(32px,4vw,44px)/1.06 var(--face); letter-spacing:-.045em; margin:12px 0 14px; }
.deck { margin:0 0 32px; color:var(--page-ink-dim); max-width:68ch; font-size:16px; line-height:1.5; }
.deck code { font:500 14px/1 var(--mono); }
/* Разделы — строка под шапкой с подчёркиванием текущего, как вкладки стратегии в лаунчере */
.sb-nav { position:sticky; top:56px; z-index:90; display:flex; gap:22px; margin:0 -24px 8px; padding:0 24px; overflow-x:auto; scrollbar-width:none; border-bottom:1px solid var(--page-line); background:color-mix(in srgb,var(--page-bg) 82%,transparent); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); }
.sb-nav::-webkit-scrollbar { display:none; }
.sb-nav a { position:relative; flex:none; padding:12px 0; color:var(--page-ink-dim); text-decoration:none; font:500 14px/1.2 var(--face); }
.sb-nav a:hover, .sb-nav a.is-on { color:var(--page-ink); }
.sb-nav a.is-on::after { content:''; position:absolute; left:0; right:0; bottom:-1px; height:2px; background:var(--page-ink); }
section { scroll-margin-top:112px; }
section > h2 { margin:40px 0 14px; font:600 22px/1.2 var(--face); letter-spacing:-.02em; }
.sb-item { margin-bottom:20px; padding:16px; border:1px solid var(--page-line); border-radius:14px; background:var(--page-card); scroll-margin-top:112px; }
.sb-item > header { display:flex; gap:12px; align-items:baseline; margin-bottom:12px; } .sb-item h3 { margin:0; font:600 14px/1.3 var(--mono); } .sb-item > header p { margin:0; color:var(--page-ink-dim); font-size:14px; }
.sb-themes { display:grid; grid-template-columns:repeat(3, 375px); gap:16px; overflow-x:auto; }
figure { margin:0; } figcaption { margin-bottom:6px; color:var(--page-ink-mute); font-size:12px; }
.sb-panel { --safe-top:0px; --safe-bottom:0px; position:relative; display:flex; flex-direction:column; border-radius:12px; overflow:hidden; }
.sb-panel .ui-scroll { overflow:visible; }
/* Превью честное: компонент без своей секции лежит на той поверхности, где живёт на экране
   (белая карточка в светлых темах), а не на сером фоне, и не упирается в край панели */
.sb-panel:not(:has(.ui-sec, .ui-group, .ui-call, .ui-player)) { padding:12px 0; }
.sb-panel:is(.vk-light, .ok-light):not(:has(.ui-sec, .ui-group, .ui-call, .ui-player)) { background:var(--ui-card)!important; }
.sb-panel > .ui-sec:first-child { margin-top:0; }
.sb-panel:is(.vk-light, .ok-light) { box-shadow:0 0 0 1px var(--page-line); }
.sb-row { display:flex; align-items:center; gap:8px; padding:0 16px; flex-wrap:wrap; }
.sb-gap { height:12px; } .sb-pad { padding:0 16px; } .sb-w-40 { width:40%; }
details { margin-top:10px; } summary { cursor:pointer; color:var(--page-ink-dim); font-size:12px; }
pre { overflow-x:auto; padding:12px; border-radius:10px; background:var(--page-chip); border:1px solid var(--page-line); font:12px/1.5 var(--mono); white-space:pre-wrap; }
.sb-missing { padding:12px 16px; border-radius:12px; background:#fff4e5; color:#7a4b00; }
@media (max-width:560px) { .topbar { grid-template-columns:1fr auto; padding:0 16px; } .section-name { display:none; } .sb-wrap { padding:32px 16px 80px; } .sb-nav { margin:0 -16px 8px; padding:0 16px; } }
</style>
<svg width="0" height="0" style="position:absolute">${readFileSync(join(KERNEL, 'icons.svg'), 'utf8').replace(/^<svg[^>]*>|<\/svg>\s*$/g, '')}</svg>
<header class="topbar">
  <a class="brand" href="./index.html">Camo</a>
  <div class="section-name">Компоненты</div>
  <div class="topbar-end"><a href="./index.html">Концепты</a> · ${exported.length} компонентов</div>
</header>
<main class="sb-wrap">
  <div class="eyebrow">Ядро · kernel/components.mjs</div>
  <h1>Компоненты</h1>
  <p class="deck">Из этих функций собирается каждый экран концептов. Одна разметка — три темы оболочки <code>.ui</code>. Свои доменные блоки концепт добавляет в <code>styles.css</code>, а компоненты ядра не перекрашивает.</p>
  <nav class="sb-nav" aria-label="Разделы">${groups.map((g, i) => `<a href="#${g.title}"${i === 0 ? ' class="is-on"' : ''}>${g.title}</a>`).join('')}</nav>
${sections}
${missing.length ? `<p class="sb-missing">Без примера в сторибуке: ${missing.map((m) => `<code>${m}</code>`).join(', ')} — добавьте в kernel/storybook-samples.mjs</p>` : ''}
</main>
<script>
/* Текущий раздел подсвечивается в строке разделов по мере прокрутки */
(() => {
  const links = [...document.querySelectorAll('.sb-nav a')];
  const byId = new Map(links.map((a) => [decodeURIComponent(a.hash.slice(1)), a]));
  const sections = [...document.querySelectorAll('main > section')];
  let current = null;
  const sync = () => {
    /* Текущий — последний раздел, чей заголовок уже ушёл под шапку и строку разделов */
    const on = sections.filter((s) => s.getBoundingClientRect().top <= 130).pop() || sections[0];
    if (on === current) return;
    current = on;
    links.forEach((a) => a.classList.toggle('is-on', a === byId.get(on.id)));
    const link = byId.get(on.id);
    if (link) link.parentElement.scrollLeft = link.offsetLeft - 24;
  };
  addEventListener('scroll', sync, { passive: true });
  sync();
})();
</script>
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
