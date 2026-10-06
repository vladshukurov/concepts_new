import { THEME, TABS } from './_shared.mjs';
import { people, places, own } from '../model.mjs';

/* Профиль автора: кто вы, что рисуете, ваши серии и работы — без лишнего */
const works = 6;
export default (ui) => ui.screen({
  id: 'me', theme: THEME,
  body: ui.scroll([
    ui.top('<span></span>', [
      ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' }),
    ]),
    `<div class="sh-me">${ui.avatar(people.me.initial, { large: true })}<h1>${people.me.name}</h1><p class="ui-sub">Рисую дворы и рынки · Алматы</p>${ui.stats([['36', 'зарисовок'], ['7', 'серий'], ['12', 'встреч']])}</div>`,
    ui.section({ children: ui.list([ui.row({ lead: ui.leadIcon('lock'), title: 'Черновики', sub: '7 работ · открываются по Face ID', go: 'lock' })]) }),
    ui.section({ title: 'Серии', meta: '7', children: ui.list([
      ui.row({ lead: ui.leadIcon('layers', { accent: true }), title: places.panfilova.series, sub: `${places.panfilova.name} · 3 из 4`, go: 'series' }),
      ui.row({ lead: ui.leadIcon('layers'), title: 'Прилавки базара', sub: `${places.bazar.name} · 14 зарисовок` }),
      ui.row({ lead: ui.leadIcon('layers'), title: 'Мосты Терренкура', sub: `${places.terrenkur.name} · 5 зарисовок` }),
    ]) }),
    ui.section({ title: 'Зарисовки', meta: '36', children: `<div class="sh-series">${Array.from({ length: works }, (_, i) => `<button class="ph" data-go="post" aria-label="Зарисовка ${i + 1}"></button>`).join('')}</div>` }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'me' }),
});
