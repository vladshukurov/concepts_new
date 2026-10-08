/** Общее для экранов «Мурашей». Файл с «_» — не экран, сборка его пропускает. */
import * as ui from '../../../kernel/components.mjs';
import { playing, timer, soundSub, when, inColls, fromPlace } from '../model.mjs';

export const THEME = 'vk-dark';
export const TABS = [
  { id: 'home', label: 'Звуки', icon: 'audio-lines' },
  { id: 'collections', label: 'Коллекции', icon: 'layers' },
  { id: 'profile', label: 'Профиль', icon: 'circle-user' },
];

/* Плитка без фото места: значок звука на мягкой заливке */
export const ico = (name, accent = false) => `<span class="ui-thumb ms-ico${accent ? ' is-accent' : ''}">${ui.icon(name)}</span>`;
export const lead = (x) => (x.art ? `<span class="ui-thumb ${x.art}"></span>` : ico(x.icon));
/** Строка звука: открывает свою запись */
export const soundRow = (x, { sub, n } = {}) => ui.row({
  lead: n ? `<span class="ms-num">${n}</span>${lead(x)}` : lead(x),
  title: x.title, sub: sub || soundSub(x), end: { value: x.dur }, go: x.id,
});

/* Волна записи — данные, нарисованные кодом: высоты столбиков из длины и даты звука */
export const wave = (seed, { n = 48, played = 0, className = '' } = {}) => {
  let v = [...seed].reduce((a, c) => a * 31 + c.codePointAt(0), 7) >>> 0;
  const bars = Array.from({ length: n }, (_, i) => {
    v = (v * 1103515245 + 12345) >>> 0;
    const h = 2 + Math.round(((v >>> 16) % 10) * (0.55 + 0.45 * Math.sin((i / n) * Math.PI)));
    return `<i class="ms-h${Math.min(h, 11)}${i < played ? ' is-played' : ''}"></i>`;
  }).join('');
  return `<span class="ms-wave ${className}" aria-hidden="true">${bars}</span>`;
};

/* Свёрнутый плеер: свой дождь с таймером сна */
const p = playing.sound;
export const MINI = ui.miniPlayer({
  face: p.art, title: p.title, sub: `${p.place.short} · таймер ${timer.min} мин`,
  open: { go: 'player' }, playAction: { label: 'Слушать' }, progressClass: 'ms-p25',
});

/** Экран звука: фото места с волной, где и когда, play, файл и коллекции */
export const soundScreen = (ui, x, { photo, extra = [], sub } = {}) => {
  const near = x.place ? fromPlace(x.place).filter((y) => y !== x) : [];
  return ui.screen({
    id: x.id, theme: THEME,
    body: [
      ui.nav({ title: '', trailing: ui.iconButton({ icon: 'heart-plus', label: 'Нравится', toggle: 'on' }) }),
      ui.scroll([
        `<div class="ms-spot">${photo || (x.art ? `<div class="ms-spot-art ${x.art}"></div>` : `<div class="ms-spot-art ms-ico is-lg">${ui.icon(x.icon)}</div>`)}${wave(x.title + x.dur, { n: 40, className: 'is-spot' })}</div>`,
        `<div class="ms-head"><h1 class="ui-title">${x.title}</h1><p class="ui-sub">${sub || `${x.where} · ${when(x)}`}</p>${ui.play({ size: 'm', label: `Слушать «${x.title}»` })}</div>`,
        ...extra,
        ui.infoRows([['Где', x.where], ['Когда', when(x)], ['Длина', x.dur], ['Файл', `${x.file} · из «${x.source}»`], ...(inColls(x) ? [['В коллекциях', inColls(x)]] : [])]),
        x.place ? ui.section({ title: 'Где записано', children: ui.list([ui.row({ lead: `<span class="ui-thumb ${x.place.art}"></span>`, title: x.place.title, sub: `${x.place.where} · ещё ${near.length} звук`, go: x.place.id })]) }) : '',
      ]),
    ],
  });
};
