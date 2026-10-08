/** Общее для экранов «Вглядись». Файл с «_» — не экран. */
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
export const directScreen = (ui, { id, person, status, msgs, send = { toast: 'Сообщение отправлено' }, reply }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.chatNav({ initial: person.initial, name: person.name, status }),
    ui.scroll(ui.chat([...msgs.map(([who, text, time]) => who === 'day' ? ui.day(text) : ui.bubble({ out: who === 'me', text, time, read: who === 'me' })),
      /* Ответ, пришедший уведомлением: виден после commnotif */
      reply ? `<div class="perm-hidden" data-show-granted="commnotif">${ui.bubble({ text: reply[0], time: reply[1] })}</div>` : ''])),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>shoot', 'Фото>picker'] }, send }),
  ],
});
