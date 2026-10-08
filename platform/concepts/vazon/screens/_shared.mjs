/** Общее для экранов «Вазона». Файл с «_» — не экран. */
import { plants } from '../model.mjs';

export const THEME = 'vk-light';
export const TABS = [
  { id: 'feed', label: 'Дневник', icon: 'house' },
  { id: 'plants', label: 'Подоконники', icon: 'trees' },
  { id: 'chats', label: 'Мессенджер', icon: 'message-circle' },
  { id: 'profile', label: 'Профиль', icon: 'user' },
];

/** Строка растения в списке: открывает карточку именно этого растения. */
export const plantRow = (ui, p, { primary = false, tags } = {}) =>
  ui.row({ lead: ui.leadIcon(p.icon, { round: true, accent: p.water === 'сегодня' }), title: p.name, sub: `${p.room} · полить ${p.water}`, go: p.id, primary, tags });

/**
 * Карточка растения: шапка, уход, рост по месяцам и свой блок фичи (extra).
 * Общий каркас — у всех шести растений; доступы стоят только у своих.
 */
export const plantScreen = (ui, key, { extra = [], growth = [], care = [] } = {}) => {
  const p = plants[key];
  return ui.screen({
    id: p.id, theme: THEME,
    body: [
      ui.nav({ title: p.name, trailing: ui.iconButton({ icon: 'ellipsis', label: `Действия: ${p.name}`, menu: ['Изменить', 'Записать в дневник>compose', 'Удалить растение'] }) }),
      ui.scroll([
        `<div class="vz-head">${ui.leadIcon(p.icon, { round: true, accent: true })}<div><small>${p.room} · ${p.age}</small><h1>${p.name}</h1><p class="ui-sub">${p.nick} · полив ${p.every}</p></div></div>`,
        ui.section({ title: 'Уход', children: ui.list([
          ui.row({ lead: ui.leadIcon('droplets', { round: true, accent: p.water === 'сегодня' }), title: `Полить ${p.water}`, sub: `Последний раз ${p.last}` }),
          ...care,
        ]) }),
        ...extra,
        ...(growth.length ? [ui.section({ title: 'Рост по месяцам', children: ui.list(growth) })] : []),
      ]),
    ],
  });
};

/** Личный диалог: переписка без звонков. */
export const direct = (ui, { id, initial, name, status, items, send, placeholder }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.chatNav({ initial, name, status }),
    ui.scroll(ui.chat(items)),
    ui.composer({ placeholder, attach: { go: 'picker', label: 'Снимок растения' }, send: send || { toast: 'Сообщение отправлено' } }),
  ],
});

/** Небольшая форма: поля и «Сохранить» с возвратом назад. */
export const form = (ui, { id, title, fields, cta }) => ui.screen({
  id, theme: THEME,
  body: [
    ui.nav({ title, back: 'close' }),
    ui.scroll([
      ...fields.map(([label, placeholder, value]) => ui.section({ title: label, children: `<label class="ui-search"><input placeholder="${placeholder}" aria-label="${label}"${value ? ` value="${value}"` : ''}/></label>` })),
      ui.section({ children: ui.actions([ui.button({ label: cta, block: true, back: true, primary: true, toast: 'Растение добавлено' })]) }),
    ]),
  ],
});
