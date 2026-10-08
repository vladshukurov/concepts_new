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

/* Свёрнутый плеер: окошко 16:9 справа над таб-баром, как в ВК Видео */
const h = highlights.cat;
export const MINI = ui.videoMini({ art: h.art, title: h.title, open: { go: 'watch' }, pct: 33 });

/** Пустой кадр — только там, где снимка ещё нет (ответ снимается, ищут в галерее) */
export const frame = 'ph on-dark';

/** Карточка задания раунда: номер, задание крупно, как отвечать */
export const taskCard = (ui, { n, task, sub, icon = 'timer' }) => `<div class="vy-task"><small>Раунд ${n} из 5</small><strong>${task}</strong><span>${ui.icon(icon)}${sub}</span></div>`;
