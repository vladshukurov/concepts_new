import { THEME, TABS } from './_shared.mjs';
import { people, family } from '../model.mjs';

/* История звонков: личные и групповые, пропущенные отмечены словом, а не цветом */
export default (ui) => ui.screen({
  id: 'calls', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Звонки', ui.iconButton({ icon: 'user-plus', label: 'Контакты', go: 'contacts' })),
    ui.section({ children: ui.segments([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Пропущенные', filter: 'missed' },
    ]) }),
    ui.section({ title: 'Сегодня', children: ui.list([
      ui.row({ lead: ui.avatar(people.danya.initial), title: people.danya.name, sub: 'Входящий · 15:41 · 0:38', go: 'danya', tags: ['in'] }),
      ui.row({ lead: ui.avatar(people.roza.initial), title: 'Мама', sub: 'Пропущенный · 12:10', go: 'mama', tags: ['missed'] }),
      ui.row({ lead: ui.avatar(people.timur.initial), title: people.timur.name, sub: 'Исходящий · 8:52 · 2:04', go: 'timur', tags: ['out'] }),
    ]) }),
    ui.section({ title: 'Вчера', children: ui.list([
      ui.row({ lead: ui.avatar(family.initial), title: family.name, sub: 'Групповой видеозвонок · 20:30 · 24 минуты, 4 участника', go: 'family', tags: ['group'] }),
      ui.row({ lead: ui.avatar(people.danya.initial), title: people.danya.name, sub: 'Исходящий · 18:13 · 0:52', go: 'danya', tags: ['out'] }),
      ui.row({ lead: ui.avatar(people.timur.initial), title: people.timur.name, sub: 'Входящий · 14:05 · 1:17', go: 'timur', tags: ['in'] }),
    ]) }),
    ui.section({ title: 'Раньше', children: ui.list([
      ui.row({ lead: ui.avatar(people.roza.initial), title: 'Мама', sub: 'Видеозвонок · 4 октября · 38 минут с внуками', go: 'mama', tags: ['in'] }),
      ui.row({ lead: ui.avatar(people.danya.initial), title: people.danya.name, sub: 'Пропущенный · 2 октября, 16:44', go: 'danya', tags: ['missed'] }),
      ui.row({ lead: ui.avatar(people.timur.initial), title: people.timur.name, sub: 'Исходящий · 30 сентября · 6:12', go: 'timur', tags: ['out'] }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'calls' }),
});
