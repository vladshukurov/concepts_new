/** Общее для экранов «Узла». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'feed', label: 'Лента', icon: 'house' },
  { id: 'projects', label: 'Проекты', icon: 'wrench' },
  { id: 'chats', label: 'Мессенджер', icon: 'message-circle' },
  { id: 'shifts', label: 'Смены', icon: 'calendar' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];
/** Этапы ремонта полосой: готовые, текущий, впереди */
export const stages = (done, total) => `<span class="uz-stages" aria-label="Этап ${done} из ${total}">${Array.from({ length: total }, (_, i) => `<i${i < done ? ' class="is-done"' : i === done ? ' class="is-now"' : ''}></i>`).join('')}</span>`;
