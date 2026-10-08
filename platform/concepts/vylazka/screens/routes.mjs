import { THEME, TABS, MINI } from './_shared.mjs';
import { routes, hike, nextWalk, lastTrip, season } from '../model.mjs';

/* Маршруты — серии: на каждый маршрут свои вылазки и фильмы */
export default (ui) => ui.screen({
  id: 'routes', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Маршруты', ui.iconButton({ icon: 'plus', label: 'Новая вылазка', go: 'newwalk' })),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Пройдены', filter: 'done' },
      { label: 'Впереди', filter: 'ahead' },
    ]) }),
    ui.section({ tags: ['ahead'], title: 'Сейчас в пути', children: ui.list([
      ui.row({ thumb: routes.lake.art, wide: true, duration: `${String(hike.km).replace('.', ',')} км`, title: routes.lake.name, sub: `${hike.line} · дальше ${hike.next}`, go: 'hike' }),
    ]) }),
    ui.section({ tags: ['ahead'], title: 'Скоро', children: ui.list([
      ui.row({ thumb: routes.base.art, wide: true, title: routes.base.name, sub: `${nextWalk.when} · новая серия`, go: 'nextwalk' }),
    ]) }),
    ui.section({ tags: ['done'], title: 'Серии', meta: '2 пройдены', children: ui.list([
      ui.row({ thumb: routes.quarry.art, wide: true, duration: `${routes.quarry.trips} вылазки`, title: routes.quarry.name, sub: `${routes.quarry.clips} роликов · последняя ${lastTrip.day}`, go: 'route' }),
      ui.row({ thumb: routes.pier.art, wide: true, duration: '1 вылазка', title: routes.pier.name, sub: `${routes.pier.clips} роликов · фильм собирается`, go: 'pier' }),
    ]) }),
    ui.section({ tags: ['done'], children: ui.miniInfo([
      { icon: 'footprints', text: `За сезон ${season.trips} вылазок · ${season.km} км · ${season.clips} ролика`, accent: true },
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'routes', mini: MINI }),
});
