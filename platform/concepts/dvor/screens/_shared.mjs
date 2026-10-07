/** Общее для экранов «В квартире». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'home', label: 'Дом', icon: 'house' },
  { id: 'events', label: 'События', icon: 'calendar' },
  { id: 'chats', label: 'Мессенджер', icon: 'message-circle' },
  { id: 'yard', label: 'Двор', icon: 'trees' },
  { id: 'menu', label: 'Меню', icon: 'menu' },
];

/* Короткий диалог: шапка и несколько сообщений из данных */
export const dmScreen = (ui, { id, initial, name, status, msgs }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.chatNav({ initial, name, status }),
    ui.scroll(ui.chat(msgs.map(([who, text, time]) => who === 'day' ? ui.day(text) : ui.bubble({ out: who === 'me', ...(who !== 'me' && who !== 'in' ? { from: who } : {}), text, time, read: who === 'me' })))),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>shoot', 'Фото>chronicle'] }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});

/* Профиль соседа: кто, где живёт, написать */
export const personScreen = (ui, { id, initial, name, sub, chat, rows }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.nav({ title: '' }),
    ui.scroll([
      `<div class="dv-person">${ui.avatar(initial, { large: true })}<h1 class="ui-title">${name}</h1><p class="ui-sub">${sub}</p></div>`,
      ui.section({ children: ui.actions([ui.button({ label: 'Написать', icon: 'message-circle', go: chat }), ui.button({ label: 'События', variant: 'secondary', go: 'events' })], { row: true, className: 'dv-gap' }) }),
      ui.section({ title: 'Вместе в доме', children: ui.list(rows.map(([icon, title, s]) => ui.row({ lead: ui.leadIcon(icon), title, sub: s }))) }),
    ]),
  ],
});
