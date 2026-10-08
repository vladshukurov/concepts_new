import { THEME, TABS, MINI, ico } from './_shared.mjs';
import { collections, zima } from '../model.mjs';

/* Коллекции: свои подборки плитками с фото первого места и список того, что хочется записать */
export default (ui) => ui.screen({
  id: 'collections', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Коллекции'),
    ui.section({ children: ui.grid(Object.values(collections).map((c) => ui.card({
      art: c.art, title: c.title, sub: c.sub, go: c.id, label: c.title, className: 'ms-collcard',
    }))) }),
    ui.section({ title: 'Хочу записать', children: ui.list([
      ui.row({ lead: ico('cloud-snow', true), title: zima.title, sub: `${zima.todo[0].title.toLowerCase()} и ещё ${zima.todo.length - 1} · 0 из ${zima.todo.length}`, go: 'zima' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'collections', mini: MINI }),
});
