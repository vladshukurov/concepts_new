import { THEME, TABS } from './_shared.mjs';
import { places } from '../model.mjs';

/* Места: что рисуют рядом — крупными работами вбок, ниже — все точки с сериями */
export default (ui) => ui.screen({
  id: 'places', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Места', ui.iconButton({ icon: 'navigation', label: 'Рядом со мной', ask: 'location|places|places' })),
    ui.section({ children: ui.search({ placeholder: 'Улица или точка' }) }),
    ui.denied('location', 'Без геопозиции места ищутся по названию'),
    ui.subnav([{ icon: 'flame', label: 'Популярное', on: true, go: 'places' }, { icon: 'navigation', label: 'Рядом', go: 'places' }, { icon: 'bookmark', label: 'Сохранённые', count: 7, go: 'places' }]),
    ui.section({ title: 'Рисуют сейчас', children: ui.hscroll(Object.values(places).map((p) => ({ art: p.art, title: p.name, sub: `${p.works} работ · ${p.authors} авторов`, go: 'series' })), { size: 'l' }) }),
    ui.section({ title: 'Все места', meta: '14', children: ui.list(Object.values(places).map((p) =>
      ui.row({ thumb: p.art, title: p.name, sub: `${p.works} работ · ${p.authors} авторов`, go: 'series' }))) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'places' }),
});
