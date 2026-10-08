import { THEME, TABS } from './_shared.mjs';
import { people, pleinair, walk, places, indoor } from '../model.mjs';

/* Встречи: ближайшая — как событие ВК (когда, где, что взять, кто идёт);
   сверху — встреча в помещении, которая идёт сейчас; дальше — будущие встречи */
export default (ui) => ui.screen({
  id: 'events', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Встречи', ui.iconButton({ icon: 'message-circle', label: 'Чат встречи', go: 'chat' })),
    ui.section({ title: 'Сейчас', children: ui.list([ui.row({ lead: ui.leadIcon('', { text: indoor.start }), title: indoor.title, sub: `идёт до ${indoor.end} · ${indoor.place}`, go: 'indoor' })]) }),
    ui.section({ title: pleinair.title, children: [
      ui.miniInfo([
        { icon: 'calendar', text: `Завтра, ${pleinair.day}, ${pleinair.start}`, accent: true },
        { icon: 'map-pin', text: `${places.bazar.name}, ${pleinair.where}` },
        { icon: 'pen-line', text: 'Рисуем с натуры · возьмите линер и стул' },
      ]),
      ui.usersStack({ faces: [people.marina.initial, people.lera.initial, people.petr.initial], text: `${people.marina.first}, ${people.lera.first} и ещё ${pleinair.people - 2} идут`, go: 'chat' }),
      ui.actions([
        ui.button({ label: 'Я пойду', icon: 'calendar-plus', ask: 'calendar|events|events', primary: true }),
        ui.button({ label: 'Чат встречи', icon: 'message-circle', variant: 'secondary', go: 'chat' }),
      ], { row: true, className: 'sh-gap' }),
      ui.denied('calendar'),
      ui.list([
        ui.row({ lead: ui.leadIcon('calendar-check', { round: true, accent: true }), title: 'Встреча в календаре', sub: 'Завтра, 09:00 · напоминание за час', shownAfter: 'calendar' }),
        ui.row({ lead: ui.leadIcon('map-pin', { round: true, accent: true }), title: 'Точка сбора — у часов', sub: 'Марина перенесла в 17:52 · пришло тихо' }),
        ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Схема базара на телефоне', sub: 'Скачана заранее · 2,1 МБ · без сети' }),
        ui.reminder({ title: 'Сообщить, если встречу перенесут', titleGranted: 'Сообщим, если встречу перенесут', sub: 'Перенос и новая точка сбора', here: 'events' }),
      ]),
    ] }),
    ui.section({ title: 'Потом', children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: walk.start }), title: walk.title, sub: `${walk.day} · ${walk.where} · ${walk.people} идут`, go: 'chatwalk' }),
      ui.row({ lead: ui.leadIcon('', { text: '10:00' }), title: 'Мост на Терренкуре', sub: '3 октября · вход в парк' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'events' }),
});
