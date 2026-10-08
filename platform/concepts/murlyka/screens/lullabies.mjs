import { THEME, TABS, MINI, recRow } from './_shared.mjs';
import { recs } from '../model.mjs';

/* Все свои записи: фильтр «колыбельные / сказки» на месте */
export default (ui) => ui.screen({
  id: 'lullabies', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Колыбельные', ui.iconButton({ icon: 'plus', label: 'Новая колыбельная', go: 'new' })),
    ui.chips([{ label: 'Все', on: true, filter: 'all' }, { label: 'Колыбельные', filter: 'lullaby' }, { label: 'Сказки', filter: 'tale' }]),
    ui.section({ children: ui.list(Object.values(recs).map((r) => recRow(r, { tags: [r.kind] }))) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'lullabies', mini: MINI }),
});
