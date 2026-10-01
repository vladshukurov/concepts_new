import { THEME, TABS } from './_shared.mjs';
import { people, places } from '../model.mjs';

/* Профиль автора: кто вы, что рисуете, ваши серии и работы — без лишнего */
const works = ['sh-s5', 'sh-s1', 'sh-s3', 'sh-s2', 'sh-s6', 'sh-s4'];
export default (ui) => ui.screen({
  id: 'me', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', [
      ui.iconButton({ icon: 'share', label: 'Поделиться профилем', toast: 'Ссылка на профиль скопирована' }),
      ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' }),
    ]),
    `<div class="sh-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">Рисую дворы и рынки · Алматы</p>${ui.stats([['36', 'работ'], ['412', 'подписчиков'], ['148', 'подписок']])}${ui.actions([ui.button({ label: 'Новая работа', icon: 'pen-line', go: 'compose', primary: true }), ui.button({ label: 'Редактировать', variant: 'secondary', toast: 'Редактирование профиля' })], { row: true })}</div>`,
    ui.section({ children: ui.list([ui.row({ lead: ui.leadIcon('lock'), title: 'Черновики', sub: '7 работ · открываются по Face ID', go: 'lock' })]) }),
    ui.section({ title: 'Серии', meta: '7', children: ui.hscroll([
      { art: places.panfilova.art, title: places.panfilova.series, sub: `${places.panfilova.works} работ`, go: 'series' },
      { art: places.bazar.art, title: places.bazar.name, sub: `${places.bazar.works} работы`, go: 'series' },
      { art: places.terrenkur.art, title: places.terrenkur.name, sub: `${places.terrenkur.works} работ`, go: 'series' },
    ], { size: 'l' }) }),
    ui.section({ title: 'Работы', meta: '36', children: `<div class="sh-series">${works.map((a, i) => `<button class="${a}" data-go="post" aria-label="Работа ${i + 1}"></button>`).join('')}</div>` }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'me' }),
});
