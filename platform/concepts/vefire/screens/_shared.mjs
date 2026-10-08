/** Общее для экранов «В эфире». Файл с «_» — не экран, сборка его пропускает. */
import * as ui from '../../../kernel/components.mjs';
import { weekly } from '../model.mjs';

export const THEME = 'vk-dark';
export const TABS = [
  { id: 'home', label: 'Главная', icon: 'house' },
  { id: 'clips', label: 'Клипы', icon: 'square-play' },
  { id: 'create', label: 'Снять', icon: 'plus' },
  { id: 'rubrics', label: 'Рубрики', icon: 'clapperboard' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];

/* Свёрнутый выпуск недели досматривается окошком над таб-баром */
export const MINI = ui.videoMini({ art: weekly.art, title: weekly.title, open: { go: 'watch' }, pct: 30 });

/** Реакции семьи под выпуском: каждая — переключатель на месте */
export const reactions = (i) => `<div class="vf-react" role="group" aria-label="Реакции семьи">${[
  ['😂', i.react.laugh, 'Смешно'], ['❤️', i.react.heart, 'Мило'], ['👏', i.react.clap, 'Браво ведущему'],
].map(([e, n, l]) => `<button class="vf-react-btn" data-toggle="on" aria-pressed="false" aria-label="${l}"><span>${e}</span><b>${n}</b></button>`).join('')}</div>`;

/** Вертикальная карточка выпуска 9:16 для сетки в две колонки */
export const vcard = (ui, i, sub) => ui.card({ art: i.art, duration: i.dur, title: i.title, sub, go: i.id, className: 'vf-v' });

/** Строка выпуска: вертикальный кадр слева */
export const issueRow = (ui, i, sub, go = i.id) => ui.row({ thumb: `${i.art} vf-tall`, duration: i.dur, title: i.title, sub, go });
