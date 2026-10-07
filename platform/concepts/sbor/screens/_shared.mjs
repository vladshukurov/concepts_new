/** Общее для экранов «В сборе». Файл с «_» — не экран, сборка его пропускает. */
export const THEME = 'vk-light';
export const TABS = [
  { id: 'contacts', label: 'Контакты', icon: 'circle-user' },
  { id: 'calls', label: 'Звонки', icon: 'phone' },
  { id: 'chats', label: 'Чаты', icon: 'message-circle' },
  { id: 'trips', label: 'Поездки', icon: 'route' },
  { id: 'settings', label: 'Настройки', icon: 'settings' },
];

/* Кружок — видеосообщение: кадр в круге и длительность. Кадр — суть сообщения, поэтому .ph */
export const circle = (dur, label) => `<button class="sb-circle ph" data-toast="Кружок ${dur}" aria-label="${label}"><span class="sb-circle-dur">${dur}</span></button>`;

/* Карта, нарисованная кодом: улицы, Казанка и точки людей. Данные, а не картинка */
export const map = ({ points = [], className = '' } = {}) => `<div class="sb-map ${className}" aria-hidden="true"><i class="sb-river"></i><i class="sb-street s1"></i><i class="sb-street s2"></i><i class="sb-street s3"></i><i class="sb-street s4"></i><i class="sb-block b1"></i><i class="sb-block b2"></i><i class="sb-block b3"></i>${points.map(([cls, text = '']) => `<span class="sb-pt ${cls}">${text}</span>`).join('')}</div>`;

/* Личный чат: короткая переписка из данных, шапка со статусом. Свои сообщения — out */
export const dmScreen = (ui, { id, person, status, msgs, call = false }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.chatNav({ initial: person.initial, name: person.name, status, ...(call ? { call: { activate: 'voip|call' } } : {}) }),
    ui.scroll(ui.chat(msgs.map(([who, text, time]) => who === 'day' ? ui.day(text) : ui.bubble({ out: who === 'me', text, time, read: who === 'me' })))),
    ui.composer({ attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл=Откроются Файлы'] } }),
  ],
});

/* Чат поездки без вложений и доступов: шапка поездки и переписка */
export const tripScreen = (ui, { id, initial, name, status, msgs, open }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.chatNav({ initial, name, status, ...(open ? { open: { go: open } } : {}) }),
    ui.scroll(ui.chat(msgs.map(([who, text, time]) => who === 'day' ? ui.day(text) : who === 'sys' ? `<p class="sb-sys">${text}</p>` : ui.bubble({ out: who === 'me', from: who === 'me' ? undefined : who, text, time, read: who === 'me' })))),
    ui.composer({ attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл=Откроются Файлы'] } }),
  ],
});
