/** Общее для экранов «Штриха». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'home', label: 'Главная', icon: 'house' },
  { id: 'places', label: 'Места', icon: 'map-pin' },
  { id: 'events', label: 'Пленэры', icon: 'calendar' },
  { id: 'chats', label: 'Мессенджер', icon: 'message-circle' },
  { id: 'menu', label: 'Сервисы', icon: 'layout-grid' },
];
/** Материалы под работой */
export const tools = (...list) => `<div class="sh-tools">${list.map((t) => `<span>${t}</span>`).join('')}</div>`;
