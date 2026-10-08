/** Общее для экранов «Виляй». Файл с «_» — не экран, сборка его пропускает. */
import * as ui from '../../../kernel/components.mjs';
import { best } from '../model.mjs';

export const THEME = 'vk-dark';
export const TABS = [
  { id: 'home', label: 'Главная', icon: 'house' },
  { id: 'clips', label: 'Клипы', icon: 'square-play' },
  { id: 'create', label: 'Создать', icon: 'plus' },
  { id: 'seasons', label: 'Сезоны', icon: 'clapperboard' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];

/* Свёрнутый плеер: серия про робот-пылесос досматривается над таб-баром */
export const MINI = ui.miniPlayer({
  face: best.art, title: 'Робот-пылесос', sub: `Серия 4 · 0:21 из ${best.dur}`,
  open: { go: 'watch' }, playAction: { label: 'Продолжить' }, progressClass: 'vl-p30',
});

/** Реакции семьи под роликом: каждая — переключатель на месте, своя отметка подсвечивается */
export const reactions = (c) => `<div class="vl-react" role="group" aria-label="Реакции семьи">${[
  ['😂', c.react.laugh, 'Смешно'], ['❤️', c.react.heart, 'Мило'], ['🥰', c.react.paw, 'Умилительно'],
].map(([e, n, l]) => `<button class="vl-react-btn" data-toggle="on" aria-pressed="false" aria-label="${l}"><span>${e}</span><b>${n}</b></button>`).join('')}</div>`;

/** Строка ролика: кадр 16:9, длительность, кто снял */
export const clipRow = (ui, c, sub, go = c.id) => ui.row({ thumb: c.art, wide: true, duration: c.dur, title: c.title, sub, go });
