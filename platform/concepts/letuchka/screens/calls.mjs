import { THEME, TABS } from './_shared.mjs';
import { people, project } from '../model.mjs';

/* История звонков: личные и групповые, пропущенные отмечены словом, а не цветом */
export default (ui) => ui.screen({
  id: 'calls', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Звонки'),
    ui.section({ children: ui.segments([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Пропущенные', filter: 'missed' },
    ]) }),
    ui.section({ title: 'Сегодня', children: ui.list([
      ui.row({ lead: ui.avatar(people.artem.initial), title: people.artem.name, sub: 'Пропущенный · 9:08', go: 'chat', tags: ['missed'] }),
      ui.row({ lead: ui.avatar(people.vika.initial), title: people.vika.name, sub: 'Входящий · 8:51 · 1:12, про пропуск для Тёмы', tags: ['in'] }),
    ]) }),
    ui.section({ title: 'Вчера', children: ui.list([
      ui.row({ lead: ui.avatar('ЛТ'), title: 'Летучка', sub: 'Групповой · 10:30 · 18 минут, 4 по звонку', go: 'standup', tags: ['group'] }),
      ui.row({ lead: ui.avatar(project.initial), title: project.name, sub: 'Групповой · 16:00 · 42 минуты, 5 участников', go: 'project', tags: ['group'] }),
      ui.row({ lead: ui.avatar(people.pasha.initial), title: people.pasha.name, sub: 'Исходящий · 19:44 · 3:05', go: 'pasha', tags: ['out'] }),
      ui.row({ lead: ui.avatar(people.zhenya.initial), title: people.zhenya.name, sub: 'Входящий · 12:31 · 2:31, про акт № 14', tags: ['in'] }),
    ]) }),
    ui.section({ title: 'Раньше', children: ui.list([
      ui.row({ lead: ui.avatar(people.roma.initial), title: people.roma.name, sub: 'Видеозвонок · 5 октября · 24:10', tags: ['in'] }),
      ui.row({ lead: ui.avatar(people.kirill.initial), title: people.kirill.name, sub: 'Пропущенный · 2 октября, 18:44', tags: ['missed'] }),
      ui.row({ lead: ui.avatar(people.yura.initial), title: people.yura.name, sub: 'Исходящий · 1 октября · 6:40, про договор', tags: ['out'] }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'calls' }),
});
