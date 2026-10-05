/** Общее для экранов «Подачи». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'feed', label: 'Лента', icon: 'house' },
  { id: 'cookings', label: 'Готовим', icon: 'chef-hat' },
  { id: 'chats', label: 'Мессенджер', icon: 'message-circle' },
  { id: 'recipes', label: 'Рецепты', icon: 'bookmark' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];
/** Карточка блюда под постом: ведёт в проверенный рецепт. */
export const dish = (ui, title, sub) =>
  `<button class="pd-dish" data-go="recipe" aria-label="Рецепт: ${title}"><span>${ui.icon('utensils')}</span><span><strong>${title}</strong><small>${sub}</small></span></button>`;
/** Личный диалог с автором. */
export const direct = (ui, { id, initial, name, status, items }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.chatNav({ initial, name, status, call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat(items)),
    ui.denied('voip'),
    ui.denied('photos'),
    ui.denied('mic'),
    ui.composer({ attach: { ask: `photos|${id}|${id}` }, mic: { ask: `mic|${id}|${id}` } }),
  ],
});
