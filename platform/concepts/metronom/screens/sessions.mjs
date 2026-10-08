import { THEME, TABS, MINI, sessionRow } from './_shared.mjs';
import { sessions, olderCount } from '../model.mjs';

/* Занятия по дням: каждая строка — своё занятие с записью; «+» — форма нового занятия */
const { today, yesterday, eliseday, first } = sessions;
export default (ui) => ui.screen({
  id: 'sessions', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Занятия', ui.iconButton({ icon: 'plus', label: 'Новое занятие', go: 'newsession' })),
    ui.stats([['3', 'занятия'], ['75 мин', 'за неделю'], ['+24', 'к темпу']]),
    ui.section({ title: 'Сегодня', children: ui.list([sessionRow(today)]) }),
    ui.section({ title: 'Вчера', children: ui.list([sessionRow(yesterday)]) }),
    ui.section({ title: 'Раньше', children: ui.list([sessionRow(eliseday), sessionRow(first)]) }),
    ui.section({ children: ui.foot(`и ещё ${olderCount} занятий раньше`) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'sessions', mini: MINI }),
});
