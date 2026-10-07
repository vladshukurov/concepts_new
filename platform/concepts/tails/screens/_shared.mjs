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

/* Прогулка из списка «Рядом»: когда, где, кто идёт */
export const walkCard = (ui, { id, title, when, pets, place, time, route }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.nav({ title: 'Прогулка' }),
    ui.scroll([
      `<div class="tl-walk-page"><h1 class="ui-title">${title}</h1><p class="ui-sub">${when}</p>${faces(...pets)}</div>`,
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'map-pin', title: place[0], sub: place[1] }),
        ui.cell({ icon: 'clock', title: time[0], sub: time[1] }),
        ui.cell({ icon: 'route', title: route[0], sub: route[1] }),
      ] }) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Я иду', icon: 'check', block: true, toggle: 'on' })]) }),
    ]),
  ],
});

/* Карточка площадки: где, что там и ближайшая прогулка */
export const placeCard = (ui, { id, title, sub, rows, walkGo = 'walk' }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.nav({ title: 'Площадка' }),
    ui.scroll([
      `<div class="tl-walk-page"><h1 class="ui-title">${title}</h1><p class="ui-sub">${sub}</p></div>`,
      ui.section({ children: ui.list(rows.map(([ic, t, s, go]) => ui.row({ lead: ui.leadIcon(ic), title: t, sub: s, ...(go ? { go } : {}) }))) }),
    ]),
  ],
});
