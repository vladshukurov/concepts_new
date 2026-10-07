import { THEME, TABS } from './_shared.mjs';
import { people, trip } from '../model.mjs';

/* История звонков: личные и групповые, пропущенные отмечены словом, а не цветом */
export default (ui) => ui.screen({
  id: 'calls', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Звонки', ui.iconButton({ icon: 'user-plus', label: 'Новый звонок', go: 'contacts' })),
    ui.section({ children: ui.segments([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Пропущенные', filter: 'missed' },
    ]) }),
    ui.section({ title: 'Сегодня', children: ui.list([
      ui.row({ lead: ui.avatar(people.marat.initial), title: people.marat.name, sub: 'Исходящий · 9:25 · 0:47', go: 'chat', tags: ['out'] }),
      ui.row({ lead: ui.avatar(people.sveta.initial), title: people.sveta.name, sub: 'Исходящий · 9:18 · не ответила', go: 'sveta', tags: ['out'] }),
    ]) }),
    ui.section({ title: 'Вчера', children: ui.list([
      ui.row({ lead: ui.avatar(trip.initial), title: trip.name, sub: 'Групповой · 22:10 · 18 минут, 6 участников', go: 'trip', tags: ['group'] }),
      ui.row({ lead: ui.avatar('М'), title: 'Мама', sub: 'Пропущенный · 21:40', go: 'mama', tags: ['missed'] }),
      ui.row({ lead: ui.avatar(people.lena.initial), title: people.lena.name, sub: 'Входящий · 19:02 · 4:12', go: 'lena', tags: ['in'] }),
      ui.row({ lead: ui.avatar(people.rustam.initial), title: people.rustam.name, sub: 'Исходящий · 12:31 · 2:31', go: 'rustam', tags: ['out'] }),
    ]) }),
    ui.section({ title: 'Раньше', children: ui.list([
      ui.row({ lead: ui.avatar(people.oleg.initial), title: people.oleg.name, sub: 'Входящий · 7 октября · 11:20, про билеты', go: 'oleg', tags: ['in'] }),
      ui.row({ lead: ui.avatar('ПН'), title: 'Псков · ноябрь', sub: 'Групповой · 5 октября · 41 минута, 7 участников', go: 'pskov', tags: ['group'] }),
      ui.row({ lead: ui.avatar(people.igor.initial), title: people.igor.name, sub: 'Видеозвонок · 3 октября · 9:05', go: 'igor', tags: ['out'] }),
      ui.row({ lead: ui.avatar(people.timur.initial), title: people.timur.name, sub: 'Пропущенный · 1 октября, 18:44', go: 'timur', tags: ['missed'] }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'calls' }),
});
