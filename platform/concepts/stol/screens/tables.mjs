import { THEME, TABS, seats } from './_shared.mjs';
import { tonight, saturday, now } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'tables', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Столы'),
    ui.section({ children: ui.segments([{ label: 'Сегодня', on: true, filter: 'today' }, { label: 'Выходные', filter: 'weekend' }, { label: 'Рядом', filter: 'near' }]) }),
    ui.section({ title: `Сегодня, ${now.short}`, tags: ['today', 'near'], children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: tonight.start }), title: tonight.game, sub: `${tonight.where} · ${tonight.pace}`, end: seats(tonight.taken, tonight.seats), go: 'table', primary: true, tags: ['today', 'near'] }),
      ui.row({ lead: ui.leadIcon('', { text: '20:15' }), title: 'Городские линии', sub: 'У Ани дома · знают правила', end: seats(2, 4), tags: ['today'] }),
    ]) }),
    ui.section({ title: saturday.date[0].toUpperCase() + saturday.date.slice(1), tags: ['weekend', 'near'], className: 'is-filtered-out', children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: saturday.start }), title: saturday.game, sub: `${saturday.where} · ${saturday.taken} из ${saturday.seats} мест · объясним правила`, end: { value: 'Занять место', toast: `Место за вами · стол ${saturday.taken + 1} из ${saturday.seats}`, label: 'Занять место за субботним столом' }, tags: ['weekend', 'near'] }),
    ]) }),
    ui.section({ title: 'Сыграли', meta: 'сентябрь', children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: 'вт' }), title: 'Городские линии', sub: 'У Жени дома · 48 минут · Илья 92' }),
      ui.row({ lead: ui.leadIcon('', { text: '9' }), title: 'Лесные союзы', sub: 'Клуб «Полка» · победа Саши, 83' }),
      ui.row({ lead: ui.leadIcon('', { text: '6' }), title: 'Архив острова', sub: 'Кафе «Клетка» · не успели к рассвету' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'tables' }),
});
