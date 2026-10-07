/** Общее для экранов «Выгула». Файл с «_» — не экран. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'home', label: 'Дневник', icon: 'house' },
  { id: 'nearby', label: 'Рядом', icon: 'map-pin' },
  { id: 'chats', label: 'Мессенджер', icon: 'message-circle' },
  { id: 'vaccine', label: 'Здоровье', icon: 'stethoscope' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];
/* Фото питомцев: Трюфель — ретривер, Мята — кошка, щенки Локи, Барни — лабрадор владельца */
export const PET = { truffle: 'tl-p1', mint: 'tl-p2', loki: 'tl-p3', barni: 'tl-p4' };
export const faces = (...list) => `<span class="tl-faces">${list.map((p) => `<i class="${p}"></i>`).join('')}</span>`;

/* Короткий диалог: шапка и несколько сообщений из данных */
export const dmScreen = (ui, { id, head, status, msgs }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.chatNav({ ...head, status }),
    ui.scroll(ui.chat(msgs.map(([who, text, time]) => who === 'day' ? ui.day(text) : ui.bubble({ out: who === 'me', text, time, read: who === 'me' })))),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Фото>media'] }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
