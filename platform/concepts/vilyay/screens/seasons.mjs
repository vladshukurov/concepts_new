import { THEME, TABS, MINI } from './_shared.mjs';
import { seasons, sMeta, series, yearAgo, dog, newSeries } from '../model.mjs';

/* Сезоны Рыжика — плейлисты по возрасту; сериалы идут через сезоны */
export default (ui) => ui.screen({
  id: 'seasons', theme: THEME, className: 'vl-wrap',
  body: ui.scroll([
    ui.largeTitle('Сезоны', ui.iconButton({ icon: 'plus', label: 'Новая серия', go: 'newseries' })),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Сезоны', filter: 'season' },
      { label: 'Сериалы', filter: 'series' },
    ]) }),
    ...Object.values(seasons).reverse().map((s) => ui.section({ tags: ['season'], children: ui.videoCard({
      art: s.art, duration: s.total, go: s.id, avatar: ui.avatar(dog.initial),
      title: `Сезон «${s.title}»`, sub: sMeta(s),
    }) })),
    ui.section({ tags: ['series'], title: 'Сериалы', meta: '2 сериала', children: ui.list([
      ui.row({ thumb: series.art, wide: true, duration: series.total, title: series.title, sub: `${series.count} серии · от щенка до сейчас`, go: 'series' }),
      ui.row({ lead: ui.leadIcon('clapperboard', { round: true }), title: newSeries.title, sub: 'Пока без серий · сезон «Сейчас»' }),
    ]) }),
    ui.section({ tags: ['season'], children: ui.list([
      ui.row({ lead: ui.leadIcon('history', { round: true, accent: true }), title: 'Год назад сегодня', sub: yearAgo.title, go: 'memory' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'seasons', mini: MINI }),
});
