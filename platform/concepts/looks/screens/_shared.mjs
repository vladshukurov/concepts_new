/** Общее для экранов «Образов». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'home', label: 'Главная', icon: 'house' },
  { id: 'nearby', label: 'Рядом', icon: 'map-pin' },
  { id: 'chats', label: 'Мессенджер', icon: 'message-circle' },
  { id: 'swap', label: 'Свопы', icon: 'repeat-2' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];
/* Лера — чёрный костюм, Марк — деним, Марина (вы) — бежевый, Юля — фиолетовое пальто */
export const P = { lera: 'lk-p1', mark: 'lk-p2', marina: 'lk-p3', yulia: 'lk-p4' };
export const tags = (...items) => `<div class="lk-tags">${items.map((t) => `<span><svg><use href="#i-tag"/></svg>${t}</span>`).join('')}</div>`;
