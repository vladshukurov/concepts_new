/** Общее для экранов «В кругу». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'feed', label: 'Дневник', icon: 'house' },
  { id: 'games', label: 'Игры', icon: 'dices' },
  { id: 'tables', label: 'Столы', icon: 'calendar' },
  { id: 'chats', label: 'Мессенджер', icon: 'message-circle' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];
/** Места за столом: заполненный кружок — занятый стул */
export const seats = (taken, total) => `<span class="st-seats" aria-label="Занято ${taken} из ${total}">${Array.from({ length: total }, (_, i) => `<i${i < taken ? ' class="is-on"' : ''}></i>`).join('')}</span>`;
