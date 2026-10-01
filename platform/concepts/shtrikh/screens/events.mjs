import { THEME, TABS } from './_shared.mjs';
import { pleinair, walk } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'events', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Пленэры', ui.iconButton({ icon: 'plus', label: 'Собрать пленэр', toast: 'Новый пленэр' })),
    ui.section({ title: 'Завтра', children: [
      ui.list([ui.row({ lead: ui.leadIcon('', { text: pleinair.start }), title: pleinair.title, sub: `${pleinair.where} · ${pleinair.people} участников`, go: 'chat', primary: true })]),
      ui.actions([ui.button({ label: 'Я пойду', icon: 'calendar-plus', variant: 'secondary', block: true, ask: 'calendar|events|events' })], { className: 'sh-gap' }),
      ui.granted('calendar', `Пленэр в Календаре · ${pleinair.day}, ${pleinair.start}`),
      ui.denied('calendar', 'Дата остаётся в карточке пленэра'),
      ui.list([ui.row({ lead: ui.leadIcon('download'), title: 'Места пленэра к утру', sub: 'Серии и схема рынка — без сети', activate: 'bgtask|events' })]),
      ui.granted('bgtask', 'Места пленэра скачаны к 07:00'),
    ] }),
    ui.section({ title: 'Потом', children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: 'сб' }), title: walk.title, sub: `${walk.day}, ${walk.start} · ${walk.where} · ${walk.people} участника`, go: 'chat' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'events' }),
});
