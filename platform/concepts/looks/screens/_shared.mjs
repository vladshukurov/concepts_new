/** Общее для экранов «Вешалки». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'home', label: 'Лукбук', icon: 'shirt' },
  { id: 'chats', label: 'Мессенджер', icon: 'message-circle' },
  { id: 'swap', label: 'Свопы', icon: 'repeat-2' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];
import { people } from '../model.mjs';

/* Фото — у тех, у кого оно есть в модели; у остальных — инициалы на цветном круге */
export const P = Object.fromEntries(Object.entries(people).filter(([, p]) => p.photo).map(([id, p]) => [id, p.photo]));
/* Лицо человека в строке списка: фото или инициалы */
export const face = (ui, id) => (people[id].photo ? { thumb: `${people[id].photo} is-round` } : { lead: ui.avatar(people[id].initial) });
/* Лицо для диалога, шапки чата и звонка */
export const who = (id) => (people[id].photo ? { face: people[id].photo } : { initial: people[id].initial });
export const tags = (...items) => `<div class="lk-tags">${items.map((t) => `<span><svg><use href="#i-tag"/></svg>${t}</span>`).join('')}</div>`;
/* Текст, который меняется после разрешения: до — first, после — then */
export const swapText = (key, first, then) => `<span data-hide-granted="${key}">${first}</span><span class="perm-hidden" data-show-granted="${key}">${then}</span>`;
