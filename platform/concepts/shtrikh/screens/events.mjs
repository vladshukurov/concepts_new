import { THEME, TABS } from './_shared.mjs';
import { people, pleinair, walk, places, exhibit } from '../model.mjs';

/* Встречи: ближайшая — как событие ВК (когда, где, что взять, кто идёт);
   дальше — выставка и будущие встречи */
export default (ui) => ui.screen({
  id: 'events', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Встречи', ui.iconButton({ icon: 'plus', label: 'Собрать встречу', toast: 'Новая встреча' })),
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
      ui.granted('calendar', `Встреча в Календаре · ${pleinair.day}, ${pleinair.start}`),
      ui.denied('calendar', 'Дата остаётся в карточке встречи'),
    ] }),
    ui.section({ title: 'Выставка', children: ui.list([ui.row({ thumb: 'sh-s6', title: exhibit.title, sub: `Работы участников на общем экране · до ${exhibit.until}`, go: 'exhibit' })]) }),
    ui.section({ title: 'Потом', children: ui.hscroll([
      { art: 'sh-s1', title: walk.title, sub: `${walk.day}, ${walk.start}`, go: 'chat' },
      { art: places.terrenkur.art, title: 'Мост на Терренкуре', sub: '3 октября, 10:00', go: 'chat' },
    ], { size: 'l' }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'events' }),
});
