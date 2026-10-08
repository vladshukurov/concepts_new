import { THEME, TABS, MINI } from './_shared.mjs';
import { rubrics, rMeta, weekly, fri } from '../model.mjs';

/* Рубрики шоу: у каждой свой ведущий; выпуск недели собирается из всех */
export default (ui) => ui.screen({
  id: 'rubrics', theme: THEME, className: 'vf-wrap',
  body: ui.scroll([
    ui.largeTitle('Рубрики', ui.iconButton({ icon: 'plus', label: 'Новый выпуск', go: 'newissue' })),
    ui.section({ children: ui.grid(Object.values(rubrics).map((r) => ui.card({ art: r.art, title: r.title, sub: rMeta(r), go: r.id, className: 'vf-v' }))
      .concat(ui.card({ art: weekly.art, title: 'Выпуск недели', sub: `№${weekly.n} · ${fri.short} в ${fri.time}`, go: 'weekly', className: 'vf-v' }))) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'rubrics', mini: MINI }),
});
