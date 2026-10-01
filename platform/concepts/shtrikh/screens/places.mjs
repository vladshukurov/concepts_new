import { THEME, TABS } from './_shared.mjs';
import { places } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'places', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Места', ui.iconButton({ icon: 'navigation', label: 'Рядом со мной', ask: 'location|places|places' })),
    ui.section({ children: ui.search({ placeholder: 'Улица или точка' }) }),
    ui.denied('location', 'Без геопозиции места ищутся по названию'),
    ui.section({ title: 'Популярно рядом', children: ui.list(Object.values(places).map((p) =>
      ui.row({ thumb: p.art, title: p.name, sub: `${p.works} работ · ${p.authors} авторов`, go: 'series' }))) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'places' }),
});
