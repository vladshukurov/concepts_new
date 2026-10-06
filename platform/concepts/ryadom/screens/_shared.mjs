/** Общее для экранов «Выбега». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'feed', label: 'Дневник', icon: 'house' },
  { id: 'events', label: 'Тренировки', icon: 'calendar' },
  { id: 'chats', label: 'Мессенджер', icon: 'message-circle' },
  { id: 'music', label: 'Маршруты', icon: 'route' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];
/** Карта маршрута: река, петля набережной, старт и метки людей в пути. */
export const map = (people = []) =>
  `<div class="ry-map"><span class="ry-river"></span><span class="ry-path"></span><span class="ry-pin ry-x10 ry-y36">С</span><span class="ry-pin ry-x88 ry-y56">5</span>${people.map(([text, x, y]) => `<span class="ry-pin is-person ${x} ${y}">${text}</span>`).join('')}</div>`;
