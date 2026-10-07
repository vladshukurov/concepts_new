/** Общее для экранов «В карандаше». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'home', label: 'Скетчбук', icon: 'house' },
  { id: 'places', label: 'Места', icon: 'map-pin' },
  { id: 'events', label: 'Встречи', icon: 'calendar' },
  { id: 'chats', label: 'Мессенджер', icon: 'message-circle' },
  { id: 'me', label: 'Профиль', icon: 'user' },
];
/** Материалы под работой */
export const tools = (...list) => `<div class="sh-tools">${list.map((t) => `<span>${t}</span>`).join('')}</div>`;

/* Личный диалог с участником встреч: шапка и несколько сообщений */
export const directScreen = (ui, { id, person, status, msgs }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.chatNav({ initial: person.initial, name: person.name, status }),
    ui.scroll(ui.chat(msgs.map(([who, text, time]) => who === 'day' ? ui.day(text) : ui.bubble({ out: who === 'me', text, time, read: who === 'me' })))),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>shoot', 'Фото>picker'] }, send: { toast: 'Сообщение отправлено' } }),
  ],
});
