/** Общее для экранов «Вкусно». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'feed', label: 'Дневник', icon: 'house' },
  { id: 'cookings', label: 'Готовим', icon: 'chef-hat' },
  { id: 'chats', label: 'Мессенджер', icon: 'message-circle' },
  { id: 'recipes', label: 'Рецепты', icon: 'bookmark' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];
/** Карточка блюда под постом: ведёт в проверенный рецепт. */
export const dish = (ui, title, sub) =>
  `<button class="pd-dish" data-go="recipe" aria-label="Рецепт: ${title}"><span>${ui.icon('book-open')}</span><span><strong>${title}</strong><small>${sub}</small></span></button>`;
/** Личный диалог со знакомым. */
export const direct = (ui, { id, initial, name, status, items }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.chatNav({ initial, name, status, call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat(items)),
    ui.denied('voip'),
    ui.composer({ attach: { go: 'picker', label: 'Фото из медиатеки' }, mic: { go: 'voice' } }),
  ],
});

/** Небольшая форма: поля и «Сохранить» с возвратом назад. */
export const form = (ui, { id, title, fields, cta }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.nav({ title, back: 'close' }),
    ui.scroll([
      ...fields.map(([label, placeholder, value]) => ui.section({ title: label, children: `<label class="ui-search"><input placeholder="${placeholder}" aria-label="${label}"${value ? ` value="${value}"` : ''}/></label>` })),
      ui.section({ children: ui.actions([ui.button({ label: cta, block: true, back: true, primary: true })]) }),
    ]),
  ],
});

/** Короткий диалог без вложений и голосовых: доступы спрашивает общий диалог. */
export const plainDirect = (ui, { id, initial, name, status, items }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.chatNav({ initial, name, status }),
    ui.scroll(ui.chat(items)),
    ui.composer({ send: { toast: 'Сообщение отправлено' } }),
  ],
});
