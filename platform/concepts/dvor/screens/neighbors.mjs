import { THEME } from './_shared.mjs';

/* Переход только там, где есть куда: своя квартира — в настройки дома, знакомый — в его профиль */
const GO = { 66: 'profile', 74: 'settings' };
const floor = (n, flats) => `<div class="dv-floor"><b>${n}</b>${flats.map(([f, st]) => (GO[f] ? `<button class="is-${st}" data-go="${GO[f]}" aria-label="Квартира ${f}">${f}</button>` : `<span${st ? ` class="is-${st}"` : ''}>${f}</span>`)).join('')}</div>`;
export default (ui) => ui.screen({
  id: 'neighbors', theme: THEME,
  body: [
    ui.nav({ title: 'Соседи' }),
    ui.scroll([
      ui.section({ children: [
        ui.actions([ui.button({ label: 'Найти среди контактов', icon: 'users', variant: 'secondary', block: true, ask: 'contacts|neighbors|neighbors' })]),
        ui.denied('contacts'),
      ] }),
      ui.section({ title: 'Из ваших контактов', meta: '3', shownAfter: 'contacts', children: ui.list([
        ui.row({ lead: ui.avatar('ПИ'), title: 'Пётр Ильин', sub: 'Кв. 66 · в контактах «Петя двор»', go: 'profile' }),
        ui.row({ lead: ui.avatar('МК'), title: 'Марина Кольцова', sub: 'Кв. 48 · в контактах «Марина сад»', go: 'chat' }),
        ui.row({ lead: ui.avatar('ИТ'), title: 'Ирина Тепляк', sub: 'Кв. 78 · в контактах «Ира стеллаж»', go: 'chats' }),
      ]) }),
      ui.section({ title: '3 подъезд', meta: 'синие — знакомые из контактов', children: `<div class="dv-flats">${floor(1, [['61'], ['62'], ['63'], ['64']])}${floor(2, [['65'], ['66', 'known'], ['67'], ['68']])}${floor(3, [['69'], ['70'], ['71'], ['72']])}${floor(4, [['73'], ['74', 'me'], ['75'], ['76']])}${floor(5, [['77'], ['78', 'known'], ['79'], ['80']])}</div>` }),
    ]),
  ],
});
