import { THEME, TABS } from './_shared.mjs';
import { places } from '../model.mjs';

/* Места: что рисуют рядом — крупными работами вбок, ниже — все точки с сериями */
export default (ui) => ui.screen({
  id: 'places', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Места', ui.iconButton({ icon: 'navigation', label: 'Рядом со мной', ask: 'location|places|places' })),
    ui.section({ children: ui.search({ placeholder: 'Улица или точка' }) }),
    ui.denied('location'),
    ui.subnav([{ icon: 'flame', label: 'Популярное', on: true, filter: 'popular' }, { icon: 'navigation', label: 'Рядом', filter: 'near' }, { icon: 'bookmark', label: 'Сохранённые', count: 2, filter: 'saved' }]),
    ui.section({ title: 'Рисуют сейчас', tags: ['popular'], children: ui.hscroll(Object.values(places).map((p) => ({ art: p.art, title: p.name, sub: `${p.works} работ · ${p.authors} авторов`, go: 'series' })), { size: 'l' }) }),
    ui.section({ title: 'Места', meta: '14', tags: ['popular', 'near', 'saved'], children: ui.list(Object.values(places).map((p, i) => {
        /* Популярные — первые по числу работ, рядом — через одно, сохранены второе и третье */
        const tags = [...(i < 3 ? ['popular'] : []), ...(i % 2 === 0 ? ['near'] : []), ...(i === 1 || i === 2 ? ['saved'] : [])];
        return ui.row({ thumb: p.art, title: p.name, sub: `${p.works} работ · ${p.authors} авторов`, go: 'series', tags, className: tags.includes('popular') ? undefined : 'is-filtered-out' });
      })) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'places' }),
});
