/** Общее для экранов «Мурлыки». Файл с «_» — не экран, сборка его пропускает. */
import * as ui from '../../../kernel/components.mjs';
import { recs, evening, timer, playing, recSub, records, byVoice } from '../model.mjs';

export const THEME = 'vk-dark';
export const TABS = [
  { id: 'home', label: 'Сегодня', icon: 'moon' },
  { id: 'lullabies', label: 'Колыбельные', icon: 'list-music' },
  { id: 'voices', label: 'Голоса', icon: 'users' },
];

/* Плитка без обложки: месяц на мягкой заливке */
export const ico = (name = 'moon', accent = false) => `<span class="ui-thumb mr-ico${accent ? ' is-accent' : ''}">${ui.icon(name)}</span>`;
export const lead = (r) => (r.art ? `<span class="ui-thumb ${r.art}"></span>` : ico(r.kind === 'tale' ? 'book-open' : 'moon'));
/** Строка записи: открывает свою колыбельную */
export const recRow = (r, { n, tags } = {}) => ui.row({
  lead: n ? `<span class="mr-num">${n}</span>${lead(r)}` : lead(r),
  title: r.title, sub: recSub(r), end: { value: r.dur }, go: r.id, tags,
});

/* Таймер сна: 10 / 20 / 30 минут, переключается на месте */
export const timerSeg = () => ui.segments(timer.options.map((o) => ({ label: `${o.min} мин`, on: o.min === timer.on, filter: `t${o.min}` })));
export const timerText = (cls = 'mr-timer') => `<p class="${cls}">${timer.options.map((o) =>
  `<span data-tags="t${o.min}"${o.min === timer.on ? '' : ' class="is-filtered-out"'}>Тихо затухнет в ${o.until} · ${o.where}</span>`).join('')}</p>`;

/* Обложка «Вечера»: три записи веером */
export const eveningArt = (size = '') => `<span class="mr-stack${size}">${evening.list.map((r) => (r.art ? `<i class="${r.art}"></i>` : `<i class="mr-ico">${ui.icon('moon')}</i>`)).join('')}</span>`;

/* Свёрнутый плеер: первая колыбельная вечера */
const p = playing.rec;
export const MINI = ui.miniPlayer({
  face: p.art, title: p.title, sub: `${p.voice.who} · таймер ${timer.on} мин`,
  open: { go: 'player' }, playAction: { label: 'Слушать вечер' }, progressClass: 'mr-p26',
});

/** Экран записи: обложка, кто записал, «В вечере», откуда файл */
export const recScreen = (ui, r, { extra = [], art, sub } = {}) => ui.screen({
  id: r.id, theme: THEME,
  body: [
    ui.nav({ title: '', trailing: ui.iconButton({ icon: 'heart-plus', label: 'Нравится', toggle: 'on' }) }),
    ui.scroll([
      `<div class="mr-album">${art || (r.art ? `<div class="mr-album-art ${r.art}"></div>` : `<div class="mr-album-art mr-ico is-lg">${ui.icon(r.kind === 'tale' ? 'book-open' : 'moon')}</div>`)}`
        + `<h1 class="ui-title">${r.title}</h1><p class="ui-sub">${sub || `${r.voice.who} ${r.voice.verb} · ${r.when}`}</p>`
        + `<div class="mr-album-play">${ui.play({ size: 'm', label: `Слушать «${r.title}»` })}</div></div>`,
      ...extra,
      ui.group({ cells: [ui.cell({ icon: 'moon', title: 'В сегодняшнем вечере', sub: r.evening ? 'играет в «Вечере · на сон»' : 'добавить к трём колыбельным', toggle: !!r.evening })] }),
      ui.infoRows([['Голос', r.voice.title], ['Длина', r.dur], ['Файл', `${r.file} · из «${r.source}»`]]),
      ui.section({ title: `Ещё от: ${r.voice.title}`, children: ui.list(byVoice(r.voice).filter((x) => x !== r).map((x) => recRow(x))) }),
    ]),
  ],
});

/** Голос семьи: инициалы, записи этого человека */
export const voiceScreen = (ui, v, extra = []) => {
  const list = byVoice(v);
  return ui.screen({
    id: v.id, theme: THEME,
    body: [
      ui.nav({ title: '' }),
      ui.scroll([
        `<div class="mr-album">${ui.avatar(v.initial, { large: true })}<h1 class="ui-title">${v.title}</h1><p class="ui-sub">${v.name} · ${records(list.length + extra.length)}</p></div>`,
        ui.section({ title: 'Записи', children: ui.list([...list.map((r) => recRow(r)), ...extra]) }),
      ]),
    ],
  });
};
export { recs };
