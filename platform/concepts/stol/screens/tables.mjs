import { THEME, TABS, seats } from './_shared.mjs';
import { tonight, saturday, now } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'tables', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Столы', ui.iconButton({ icon: 'plus', label: 'Собрать стол', go: 'compose' })),
    ui.section({ children: ui.segments([{ label: 'Сегодня', on: true, go: 'tables' }, { label: 'Выходные', go: 'tables' }, { label: 'Рядом', go: 'tables' }]) }),
    ui.section({ title: `Сегодня, ${now.short}`, children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: tonight.start }), title: tonight.game, sub: `${tonight.where} · ${tonight.pace}`, end: seats(tonight.taken, tonight.seats), go: 'table', primary: true }),
      ui.row({ lead: ui.leadIcon('', { text: '20:15' }), title: 'Городские линии', sub: 'У Жени дома · знают правила', end: seats(2, 4), go: 'table' }),
    ]) }),
    ui.section({ title: saturday.date[0].toUpperCase() + saturday.date.slice(1), children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: saturday.start }), title: saturday.game, sub: `${saturday.where} · объясним правила`, end: seats(saturday.taken, saturday.seats), go: 'table' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'tables' }),
});
