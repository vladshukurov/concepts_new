import { THEME, TABS } from './_shared.mjs';
import { regent, people, choir } from '../model.mjs';

/* История звонков: личные и групповые, пропущенные отмечены словом, а не цветом */
export default (ui) => ui.screen({
  id: 'calls', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Звонки', ui.iconButton({ icon: 'circle-user', label: 'Контакты', go: 'contacts' })),
    ui.section({ children: ui.segments([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Пропущенные', filter: 'missed' },
    ]) }),
    ui.section({ title: 'Сегодня', children: ui.list([
      ui.row({ lead: ui.avatar(people.oleg.initial), title: people.oleg.name, sub: 'Входящий · 18:55 · 0:31, опаздывает', tags: ['in'] }),
      ui.row({ lead: ui.avatar(regent.initial), title: regent.name, sub: 'Исходящий · 18:12 · 1:12', go: 'regent', tags: ['out'] }),
    ]) }),
    ui.section({ title: 'Вчера', children: ui.list([
      ui.row({ lead: ui.avatar(choir.initial), title: choir.name, sub: 'Групповой · 21:00 · 24 минуты, 9 участников', go: 'choir', tags: ['group'] }),
      ui.row({ lead: ui.avatar('М'), title: 'Мама', sub: 'Пропущенный · 20:40', tags: ['missed'] }),
      ui.row({ lead: ui.avatar(people.vera.initial), title: people.vera.name, sub: 'Входящий · 19:02 · 4:12, про «Колокольчик»', tags: ['in'] }),
    ]) }),
    ui.section({ title: 'Раньше', children: ui.list([
      ui.row({ lead: ui.avatar(people.denis.initial), title: people.denis.name, sub: 'Входящий · 5 октября · 11:20, про автобус', tags: ['in'] }),
      ui.row({ lead: ui.avatar('АП'), title: 'Альты · партии', sub: 'Групповой · 3 октября · 41 минута, 6 участников', go: 'altos', tags: ['group'] }),
      ui.row({ lead: ui.avatar(people.timur.initial), title: people.timur.name, sub: 'Пропущенный · 1 октября, 18:44', tags: ['missed'] }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'calls' }),
});
