/** Общее для экранов «Образов». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'home', label: 'Главная', icon: 'house' },
  { id: 'nearby', label: 'Рядом', icon: 'map-pin' },
  { id: 'chats', label: 'Мессенджер', icon: 'message-circle' },
  { id: 'swap', label: 'Свопы', icon: 'repeat-2' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];
import { people } from '../model.mjs';

/* Фото людей — из модели: Лера в чёрном, Марк в дениме, Марина (вы) в бежевом, Юля в фиолетовом пальто */
export const P = Object.fromEntries(Object.entries(people).map(([id, p]) => [id, p.photo]));
export const tags = (...items) => `<div class="lk-tags">${items.map((t) => `<span><svg><use href="#i-tag"/></svg>${t}</span>`).join('')}</div>`;
