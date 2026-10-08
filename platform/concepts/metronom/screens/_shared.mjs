/** Общее для экранов «Метронома». Файл с «_» — не экран, сборка его пропускает. */
import * as ui from '../../../kernel/components.mjs';
import { sessions, playing, tempo, beats, lessons, pieceSub } from '../model.mjs';
import { dateLabel } from '../../../kernel/world.mjs';

export const THEME = 'vk-dark';
export const TABS = [
  { id: 'home', label: 'Главная', icon: 'house' },
  { id: 'pieces', label: 'Пьесы', icon: 'list-music' },
  { id: 'sessions', label: 'Занятия', icon: 'history' },
];

/* Плитка без обложки: значок на мягкой заливке, как у своих записей в ВК Музыке */
export const ico = (name, accent = false) => `<span class="ui-thumb mt-ico${accent ? ' is-accent' : ''}">${ui.icon(name)}</span>`;
/* Обложка пьесы или значок, если обложки нет */
export const pieceLead = (p) => (p.art ? `<span class="ui-thumb ${p.art}"></span>` : ico(p.learned ? 'circle-check' : 'music'));

/* Свёрнутый плеер: сегодняшняя запись занятия */
const t = sessions.today;
export const MINI = ui.miniPlayer({
  face: t.piece.art, title: t.piece.title, sub: `${beats(t.bpm)} · ${playing.at} из ${t.dur}`,
  open: { go: 'player' }, playAction: { label: 'Слушать занятие' }, progressClass: 'mt-p21',
});

/** Строка занятия: открывает своё занятие */
export const sessionRow = (s, { piece = true } = {}) => ui.row({
  lead: ico(s.source === 'Файлы' ? 'folder' : 'mic'),
  title: piece ? s.title : `${s.short[0].toUpperCase() + s.short.slice(1)} · ${beats(s.bpm)}`,
  sub: piece ? s.sub : `${s.time} · ${s.mins} мин · ${s.rec}`,
  end: { value: s.dur }, go: s.id, label: s.screen,
});

/** Строка пьесы: обложка или значок, темп «было → сейчас» */
export const pieceRow = (p, tags) => ui.row({ lead: pieceLead(p), title: p.title, sub: pieceSub(p), go: p.id, tags });

/** Темп пьесы крупно: было · сейчас · цель */
export const tempoStats = (p) => ui.stats([[p.from, 'было'], [p.bpm, 'сейчас'], [p.goal, 'цель']]);

/** Шапка пьесы как карточка альбома: обложка по центру, название, подпись */
export const album = (p, sub) => `<div class="mt-album">${p.art ? `<div class="mt-album-art ${p.art}"></div>` : `<div class="mt-album-art mt-ico is-lg">${ui.icon(p.learned ? 'circle-check' : 'music')}</div>`}<h1 class="ui-title">${p.title}</h1><p class="ui-sub">${sub}</p></div>`;

/** Экран пьесы без камеры: темп, занятия, ноты */
export const pieceScreen = (ui, p, { list = [], extra = [], notesArt = [] } = {}) => ui.screen({
  id: p.id, theme: THEME,
  body: [
    ui.nav({ title: '', trailing: ui.iconButton({ icon: 'heart-plus', label: 'Нравится', toggle: 'on' }) }),
    ui.scroll([
      album(p, `${p.inst} · ${lessons(p.count)} · с ${dateLabel(p.since)}`),
      tempoStats(p),
      ...extra,
      list.length ? ui.section({ title: 'Занятия', meta: 'новые сверху', children: ui.list(list) }) : '',
      notesArt.length ? ui.section({ title: 'Ноты', children: `<div class="mt-notes">${notesArt.map((a) => `<span class="${a}"></span>`).join('')}</div>` }) : '',
    ]),
  ],
});

/** Экран занятия: запись, темп, заметка себе */
export const sessionScreen = (ui, s, { prev, extra = [], player = false } = {}) => ui.screen({
  id: s.id, theme: THEME,
  body: [
    ui.nav({ title: '' }),
    ui.scroll([
      `<div class="mt-head"><h1 class="ui-title">${s.piece.title}</h1><p class="ui-sub">${s.day[0].toUpperCase() + s.day.slice(1)}, ${s.time} · ${s.mins} мин</p></div>`,
      ui.section({ children: ui.list([
        ui.row({ lead: pieceLead(s.piece), title: s.piece.title, sub: `${s.piece.inst} · ${tempo(s.piece)}`, go: s.piece.id }),
      ]) }),
      ui.section({ title: 'Запись', children: ui.list([
        player
          ? ui.row({ lead: ico('audio-lines', true), title: s.rec, sub: `из «${s.source}» · ${s.dur} · остановились на ${playing.at}`, go: 'player', primary: true })
          : ui.row({ lead: ico(s.source === 'Файлы' ? 'folder' : 'mic'), title: s.rec, sub: `из «${s.source}» · ${s.dur}`, end: ui.play({ size: 's', label: `Слушать: ${s.rec}` }) }),
      ]) }),
      ui.infoRows([['Темп', `${beats(s.bpm)}${prev ? ` · было ${prev}` : ''}`], ['Занималась', `${s.mins} мин`]]),
      ui.section({ title: 'Заметка себе', children: `<p class="mt-note">${s.note}</p>` }),
      ...extra,
    ]),
  ],
});
