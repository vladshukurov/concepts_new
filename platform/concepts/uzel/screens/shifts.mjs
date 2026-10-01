import { THEME, TABS } from './_shared.mjs';
import { shift, saturday, days } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'shifts', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Смены', ui.iconButton({ icon: 'map-pin', label: 'Мастерские', go: 'workshops' })),
    ui.section({ children: `<div class="uz-days">${days.map((d, i) => `<button class="${i === 0 ? 'is-on' : ''}" data-go="shifts" aria-label="${d.wd}, ${d.d}"><small>${d.wd}</small><b>${d.d}</b></button>`).join('')}</div>` }),
    ui.section({ title: 'Сегодня', children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: shift.start }), title: shift.title, sub: `${shift.workshop} · ${shift.free} свободных места`, end: { badge: 'идёт' }, go: 'shift', primary: true }),
    ]) }),
    ui.section({ title: 'Суббота', children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: saturday.start }), title: saturday.title, sub: `${saturday.workshop} · ${saturday.free} места`, go: 'shift' }),
    ]) }),
    ui.section({ children: [
      ui.list([ui.row({ lead: ui.leadIcon('download'), title: 'Расписание смен к утру', sub: 'Роли и вещи смен — без сети', activate: 'bgtask|shifts' })]),
      ui.granted('bgtask', 'Расписание на неделю скачано к 07:00'),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'shifts' }),
});
