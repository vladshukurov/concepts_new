#!/usr/bin/env node
/**
 * Зарисовки «Штриха», нарисованные кодом: линер по бумаге — фасады,
 * липа, навес базара, мост терренкура. Стоковых скетчей нет, а серые
 * заглушки на месте работ читались бы как пустое место.
 *
 *   node concepts/shtrikh/media.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const out = join(new URL('.', import.meta.url).pathname, 'assets', 'media');
mkdirSync(out, { recursive: true });

/* Псевдослучайность от номера рисунка: линии дрожат одинаково при каждой сборке */
const rnd = (seed) => () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
const jitter = (r, n = 2) => (r() - 0.5) * n;
const line = (r, x1, y1, x2, y2, w = 2) => `<path d="M${x1 + jitter(r)} ${y1 + jitter(r)} L${x2 + jitter(r)} ${y2 + jitter(r)}" stroke="#23252b" stroke-width="${w}" stroke-linecap="round"/>`;
const hatch = (r, x, y, w, h, step = 7) => Array.from({ length: Math.floor(w / step) }, (_, i) => line(r, x + i * step, y + h, x + i * step + h * 0.4, y, 1)).join('');
const paper = (tone) => `<rect width="600" height="450" fill="${tone}"/>`;

const facade = (r) => {
  let s = '';
  for (const [x, w, h] of [[40, 150, 260], [200, 190, 300], [400, 160, 230]]) {
    s += line(r, x, 400, x, 400 - h, 2.5) + line(r, x + w, 400, x + w, 400 - h, 2.5) + line(r, x - 6, 400 - h, x + w + 6, 400 - h, 2.5);
    for (let fy = 400 - h + 30; fy < 360; fy += 52) for (let fx = x + 18; fx < x + w - 30; fx += 44) s += `<rect x="${fx + jitter(r)}" y="${fy}" width="24" height="32" fill="none" stroke="#23252b" stroke-width="1.6"/>`;
  }
  return s + hatch(r, 200, 370, 190, 30) + line(r, 10, 402, 590, 400, 3);
};
const tree = (r) => {
  let s = line(r, 300, 410, 296, 250, 6) + line(r, 298, 300, 240, 240, 3) + line(r, 300, 290, 360, 230, 3);
  for (let i = 0; i < 70; i++) { const a = r() * Math.PI * 2, d = 40 + r() * 110; s += `<circle cx="${300 + Math.cos(a) * d * 1.3}" cy="${180 + Math.sin(a) * d * 0.8}" r="${6 + r() * 10}" fill="none" stroke="#23252b" stroke-width="1.3"/>`; }
  return s + hatch(r, 240, 400, 130, 14) + line(r, 20, 412, 580, 410, 2.5);
};
const market = (r) => {
  let s = '';
  for (let i = 0; i < 4; i++) { const x = 40 + i * 135; s += `<path d="M${x} 170 L${x + 62} 120 L${x + 124} 170 Z" fill="none" stroke="#23252b" stroke-width="2.2"/>` + line(r, x + 6, 170, x + 6, 320) + line(r, x + 118, 170, x + 118, 320) + hatch(r, x + 10, 175, 104, 22, 9); }
  for (let i = 0; i < 16; i++) s += `<ellipse cx="${60 + i * 33}" cy="${335 + (i % 2) * 6}" rx="13" ry="10" fill="none" stroke="#23252b" stroke-width="1.5"/>`;
  return s + line(r, 20, 360, 580, 358, 3);
};
const bridge = (r) => {
  let s = `<path d="M30 260 Q300 120 570 260" fill="none" stroke="#23252b" stroke-width="3"/>` + line(r, 30, 260, 570, 260, 3);
  for (let x = 60; x < 560; x += 34) { const t = (x - 30) / 540; s += line(r, x, 260, x, (1 - t) ** 2 * 260 + 2 * (1 - t) * t * 120 + t * t * 260, 1.4); }
  for (let y = 300; y < 420; y += 14) s += `<path d="M${20 + jitter(r, 20)} ${y} q30 -6 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0" fill="none" stroke="#23252b" stroke-width="1" opacity=".6"/>`;
  return s;
};

const works = [[facade, '#f4efe4'], [tree, '#f1ede6'], [market, '#f3eee2'], [bridge, '#eef0ec'], [tree, '#f6f1e6'], [facade, '#efece6']];
works.forEach(([draw, tone], i) => {
  const r = rnd(i + 7);
  writeFileSync(join(out, `sketch-${i + 1}.svg`), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">${paper(tone)}<g>${draw(r)}</g></svg>`);
});
console.log('медиа готово:', out);
