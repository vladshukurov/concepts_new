/** Общее для экранов «Вызова». Файл с «_» — не экран, сборка его пропускает. */
import * as ui from '../../../kernel/components.mjs';
import { videos, vQuest } from '../model.mjs';

export const THEME = 'vk-dark';
export const TABS = [
  { id: 'home', label: 'Главная', icon: 'house' },
  { id: 'clips', label: 'Клипы', icon: 'square-play' },
  { id: 'create', label: 'Создать', icon: 'plus' },
  { id: 'quests', label: 'Квесты', icon: 'flag' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];

/** Пустой кадр — только там, где снимка ещё нет */
export const frame = 'ph on-dark';

/* Свёрнутый плеер: ролик с точки 3 досматривается над таб-баром */
const v = videos.fountain;
export const MINI = ui.videoMini({ art: v.art, title: v.title, open: { go: 'watch' }, pct: 33 });

/** Видеокарточка ролика с точки: инициалы игрока, заголовок, «Квест «…» · точка · длительность · когда» */
export const videoCard = (v) => ui.videoCard({
  art: v.art, duration: v.dur, go: v.id, avatar: ui.avatar(v.who.initial), title: v.title, sub: vQuest(v),
});

/** Карточка задания точки: номер, задание крупно, место */
export const taskCard = ({ n, total = 9, task, place }) =>
  `<div class="vz-task"><small>Точка ${n} из ${total}</small><strong>${task}</strong><span>${ui.icon('map-pin')}${place}</span></div>`;

/** Шапка страницы квеста как канала */
export const channel = ({ initial, title, sub }) =>
  `<div class="vz-channel">${ui.avatar(initial, { large: true })}<span class="ui-row-text"><strong>${title}</strong><span>${sub}</span></span></div>`;
