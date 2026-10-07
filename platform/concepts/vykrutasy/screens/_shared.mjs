/** Общее для экранов «Выкрутасов». Файл с «_» — не экран, сборка его пропускает. */
import * as ui from '../../../kernel/components.mjs';
import { highlights } from '../model.mjs';

export const THEME = 'vk-dark';
export const TABS = [
  { id: 'home', label: 'Главная', icon: 'house' },
  { id: 'clips', label: 'Клипы', icon: 'square-play' },
  { id: 'create', label: 'Создать', icon: 'plus' },
  { id: 'evenings', label: 'Вечера', icon: 'tv' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];

/* Свёрнутый плеер: хайлайт досматривается над таб-баром */
const h = highlights.cat;
export const MINI = ui.miniPlayer({
  face: h.art, title: h.title, sub: `${h.who.short} · 0:04 из ${h.dur}`,
  open: { go: 'watch' }, playAction: { toast: 'Продолжаем с 0:04', label: 'Продолжить' }, progressClass: 'vy-p33',
});

/** Пустой кадр — только там, где снимка ещё нет (ответ снимается, ищут в галерее) */
export const frame = 'ph on-dark';

/** Карточка задания раунда: номер, задание крупно, как отвечать */
export const taskCard = (ui, { n, task, sub, icon = 'timer' }) => `<div class="vy-task"><small>Раунд ${n} из 5</small><strong>${task}</strong><span>${ui.icon(icon)}${sub}</span></div>`;
