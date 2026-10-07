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

/* Карточка игры из «Хочу сыграть»: кто принесёт, сколько игроков и где ближайший стол */
export const gameCard = (ui, { id, title, sub, rows }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.nav({ title }),
    ui.scroll([
      ui.section({ children: `<div class="st-table"><small>Хочу сыграть</small><strong>${title}</strong><span>${sub}</span></div>` }),
      ui.section({ children: ui.actions([ui.button({ label: 'Найти стол', icon: 'calendar', block: true, go: 'tables', primary: true })]) }),
      ui.section({ title: 'О партии', children: ui.list(rows.map(([icon, t, s]) => ui.row({ lead: ui.leadIcon(icon), title: t, sub: s }))) }),
    ]),
  ],
});
