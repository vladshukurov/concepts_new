#!/usr/bin/env node
/**
 * Соответствие мимикрии: npm run conform -- <slug> [--all]
 *
 * Рендерит экраны концепта и сверяет то, что реально получилось после
 * раскладки, с пакетом приложения (kernel/packs/vk.json, из vkui-tokens):
 *
 * - цвет — текст и заливки: есть ли такое значение в палитре темы;
 * - кегль — пара размер/интерлиньяж: есть ли такая ступень в шкале;
 * - компоненты — высоты шапки, ячейки, кнопок, поиска, переключателя.
 *
 * Поверх фото и видео цвета не сверяются: там текст белый с тенью по
 * необходимости, а не по системе. Без --all печатаются только
 * расхождения, которые встречаются чаще всего.
 */
import { chromium } from 'playwright';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { DIST, KERNEL } from './paths.mjs';
import { readSpec } from './lib.mjs';

const args = process.argv.slice(2);
const all = args.includes('--all');
const slugs = args.filter((a) => !a.startsWith('--'));
if (!slugs.length) { console.error('нужен slug: npm run conform -- breath'); process.exit(1); }

const pack = JSON.parse(readFileSync(join(KERNEL, 'packs', 'vk.json'), 'utf8'));

const rgba = (s) => {
  const m = String(s).trim().match(/^#([0-9a-f]{3,8})$/i);
  if (m) {
    let h = m[1];
    if (h.length <= 4) h = [...h].map((c) => c + c).join('');
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)).concat(h.length === 8 ? parseInt(h.slice(6), 16) / 255 : 1);
  }
  const n = String(s).match(/rgba?\(([^)]+)\)/i);
  if (!n) return null;
  const p = n[1].split(/[\s,/]+/).filter(Boolean).map(Number);
  return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1];
};
const hex = ([r, g, b, a]) => '#' + [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, '0')).join('') + (a < 1 ? ` α${+a.toFixed(2)}` : '');
const dist = (a, b) => Math.max(Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1]), Math.abs(a[2] - b[2]), Math.abs(a[3] - b[3]) * 255);

const palettes = Object.fromEntries(Object.entries(pack.themes).map(([t, c]) =>
  [t, Object.entries(c).map(([k, v]) => [k, rgba(v)]).filter(([, v]) => v)]));
/* Белый и чёрный на заливке и прозрачный — не выбор дизайнера, а физика экрана */
const nearest = (theme, c) => {
  let best = null;
  for (const [k, v] of palettes[theme]) { const d = dist(c, v); if (!best || d < best.d) best = { k, d }; }
  return best;
};
const typeSteps = Object.entries(pack.type).map(([k, v]) => ({ k, ...v }));
const nearestType = (size, line) => typeSteps.reduce((b, t) => {
  const d = Math.abs(t.size - size) * 2 + Math.abs(t.line - line);
  return !b || d < b.d ? { ...t, d } : b;
}, null);

/** Замер одного экрана. Выполняется в браузере. */
function probe(scr, comps) {
  const dev = document.querySelector('.device');
  const s = dev.querySelector('[data-screen="' + scr + '"]');
  if (!s) return null;
  dev.querySelectorAll('[data-screen]').forEach((e) => e.classList.remove('is-on'));
  s.classList.add('is-on');
  const theme = /\bvk-dark\b|\bvkd\b/.test(s.className) ? 'dark' : /\b(vk|ok)-light\b/.test(s.className) ? 'light' : null;
  const visible = (el) => {
    if (el.closest('.perm-hidden, [hidden], .status')) return false;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && +cs.opacity > 0;
  };
  /* Поверх медиа: у предка картинка, видео или заглушка кадра */
  const onMedia = (el) => {
    for (let p = el; p && p !== s.parentElement; p = p.parentElement) {
      const cs = getComputedStyle(p);
      if (cs.backgroundImage !== 'none' && !/gradient/.test(cs.backgroundImage) && p !== el) return true;
      if (/\b(ph|ui-player|ui-hero|ui-cam|ui-lock)\b/.test(p.className?.toString() || '')) return true;
      if (p.matches?.('img, video')) return true;
    }
    return false;
  };
  const label = (el) => {
    const c = el.className?.toString().split(' ').filter(Boolean).slice(0, 2).join('.') || el.tagName.toLowerCase();
    const t = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 28);
    return '.' + c + (t ? ' «' + t + '»' : '');
  };
  const texts = [], fills = [], parts = [];
  for (const el of s.querySelectorAll('*')) {
    if (!visible(el)) continue;
    const cs = getComputedStyle(el);
    const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    const media = onMedia(el);
    if (own) texts.push({ color: cs.color, size: parseFloat(cs.fontSize), line: parseFloat(cs.lineHeight) || null, weight: +cs.fontWeight, media, el: label(el) });
    const bg = cs.backgroundColor;
    const r = el.getBoundingClientRect();
    if (bg && !/rgba\(0, 0, 0, 0\)|transparent/.test(bg) && r.width >= 16 && r.height >= 16 && !media) fills.push({ color: bg, el: label(el) });
  }
  for (const [sel, spec] of Object.entries(comps)) {
    for (const el of s.querySelectorAll(sel)) {
      if (!visible(el)) continue;
      const r = el.getBoundingClientRect();
      const top = spec.minusSafeTop ? parseFloat(getComputedStyle(el).paddingTop) || 0 : 0;
      parts.push({ sel, h: Math.round(r.height - top), w: Math.round(r.width), el: label(el) });
    }
  }
  return { theme, texts, fills, parts };
}

let exit = 0;
const browser = await chromium.launch();
for (const slug of slugs) {
  const spec = readSpec(slug);
  const file = join(DIST, slug, 'index.html');
  console.log(`\n=== ${slug} · ${spec.name} · пакет ${pack.id} (${pack.source}) ===`);
  if (!existsSync(file)) { console.log(`  не собран — npm run build -- ${slug}`); continue; }
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  await page.goto('file://' + file);
  await page.waitForTimeout(300);
  const screens = await page.evaluate(() => [...document.querySelector('.device').querySelectorAll('[data-screen]')].map((e) => e.dataset.screen));

  const bad = { color: new Map(), type: new Map(), part: [] };
  const n = { color: 0, colorOk: 0, type: 0, typeOk: 0, part: 0, partOk: 0 };
  const note = (map, key, info) => { const e = map.get(key) || { count: 0, screens: new Set(), ...info }; e.count++; e.screens.add(info.scr); map.set(key, e); };

  for (const scr of screens) {
    const r = await page.evaluate(([s, c, src]) => new Function('return ' + src)()(s, c), [scr, pack.components, probe.toString()]);
    if (!r || !r.theme) continue;
    for (const t of r.texts) {
      n.type++;
      if (t.line && typeSteps.some((x) => x.size === t.size && x.line === t.line)) n.typeOk++;
      else { const near = t.line ? nearestType(t.size, t.line) : null; note(bad.type, `${t.size}/${t.line ?? '—'}`, { scr, el: t.el, near: near ? `${near.k} ${near.size}/${near.line}` : '' }); }
      if (t.media) continue;
      const c = rgba(t.color); if (!c) continue;
      n.color++;
      const near = nearest(r.theme, c);
      if (near.d <= 2) n.colorOk++;
      else note(bad.color, `текст ${hex(c)}`, { scr, el: t.el, near: `${near.k} ${pack.themes[r.theme][near.k]}`, theme: r.theme });
    }
    for (const f of r.fills) {
      const c = rgba(f.color); if (!c) continue;
      n.color++;
      const near = nearest(r.theme, c);
      if (near.d <= 2) n.colorOk++;
      else note(bad.color, `заливка ${hex(c)}`, { scr, el: f.el, near: `${near.k} ${pack.themes[r.theme][near.k]}`, theme: r.theme });
    }
    for (const p of r.parts) {
      const spec = pack.components[p.sel];
      n.part++;
      const want = (k) => pack.sizes[spec[k]];
      const issues = [];
      if (spec.height && Math.abs(p.h - want('height')) > 1) issues.push(`высота ${p.h}, в VKUI ${want('height')}`);
      if (spec.minHeight && p.h < want('minHeight') - 1) issues.push(`высота ${p.h}, в VKUI не меньше ${want('minHeight')}`);
      if (spec.width && Math.abs(p.w - want('width')) > 1) issues.push(`ширина ${p.w}, в VKUI ${want('width')}`);
      if (issues.length) bad.part.push({ scr, vkui: spec.vkui, el: p.el, issues }); else n.partOk++;
    }
  }
  await page.close();

  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 100);
  console.log(`  цвет ${pct(n.colorOk, n.color)} % из палитры · кегль ${pct(n.typeOk, n.type)} % на шкале · компоненты ${pct(n.partOk, n.part)} % по размерам VKUI`);
  const top = (map) => [...map.entries()].sort((a, b) => b[1].count - a[1].count).slice(0, all ? 999 : 8);
  if (bad.color.size) {
    console.log(`\n  цвета вне палитры (${bad.color.size}):`);
    for (const [k, e] of top(bad.color)) console.log(`    ${k} ×${e.count} · ${e.screens.size} экр. · ближе всего ${e.near} · напр. ${e.scr}: ${e.el}`);
  }
  if (bad.type.size) {
    console.log(`\n  кегли вне шкалы (${bad.type.size}):`);
    for (const [k, e] of top(bad.type)) console.log(`    ${k} ×${e.count} · ${e.screens.size} экр. · ближе ${e.near} · напр. ${e.scr}: ${e.el}`);
  }
  if (bad.part.length) {
    const by = new Map();
    for (const b of bad.part) { const k = `${b.vkui}: ${b.issues.join(', ')}`; const e = by.get(k) || { count: 0, ex: b }; e.count++; by.set(k, e); }
    console.log(`\n  компоненты не по размерам VKUI (${bad.part.length}):`);
    for (const [k, e] of [...by.entries()].sort((a, b) => b[1].count - a[1].count).slice(0, all ? 999 : 8)) console.log(`    ${k} ×${e.count} · напр. ${e.ex.scr}: ${e.ex.el}`);
  }
  if (bad.color.size || bad.type.size || bad.part.length) exit = 1;
}
await browser.close();
process.exit(exit);
