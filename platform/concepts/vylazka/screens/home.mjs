import { THEME, TABS, MINI, routeCard, strip } from './_shared.mjs';
import { weather, routes, hike, lastTrip, nextWalk, films, fMeta, people } from '../model.mjs';

/* Главная: «Вылазка» и погода на выходные, маршруты-серии вбок, следующая вылазка, ролики с привалов */
const next = (ui) => {
  const r = nextWalk.route;
  return `<button class="vy-next"${ui.act({ go: 'nextwalk', label: `Следующая вылазка: ${r.name}` })}><span class="vy-next-date"><small>сб</small><strong>17</strong><small>окт</small></span><span class="vy-next-body"><strong>${r.name}</strong>${strip(r)}<span>Выход в ${nextWalk.time} · ${r.labels}</span><span>Идут Лена, Костя и Артём</span></span></button>`;
};

export default (ui) => ui.screen({
  id: 'home', theme: THEME, className: 'vy-wrap',
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Вылазка' }), [
      `<span class="vy-weather" aria-label="Погода на выходные: ${weather.sat}">${ui.icon('cloud-sun')}${weather.sat}</span>`,
      ui.iconButton({ icon: 'search', label: 'Поиск', go: 'search' }),
    ]),
    ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Маршруты', filter: 'routes' },
      { label: 'Привалы', filter: 'halts' },
      { label: 'Сняли друзья', filter: 'friends' },
    ]),
    ui.section({ tags: ['routes'], title: 'Маршруты', meta: '4 серии', children: `<div class="vy-routes">${[
      routeCard(routes.lake, { live: true, done: 2, sub: `Сегодня · ${hike.line}`, go: 'hike' }),
      routeCard(routes.quarry, { badge: films.film.dur, done: 4, sub: `${routes.quarry.trips} вылазки · ${routes.quarry.clips} роликов · ${lastTrip.day}`, go: 'route' }),
      routeCard(routes.pier, { badge: '7:05', done: 4, sub: `1 вылазка · ${routes.pier.clips} роликов · 20 сентября`, go: 'pier' }),
    ].join('')}</div>` }),
    ui.section({ tags: ['routes'], title: 'Следующая вылазка', children: next(ui) }),
    ui.section({ tags: ['halts', 'friends'], title: 'С привалов прошлой субботы', children: ui.videoCard({
      art: films.view.art, duration: films.view.dur, go: films.view.id,
      avatar: ui.avatar(films.view.by.initial), title: films.view.title, sub: fMeta(films.view),
    }) }),
    ui.section({ children: ui.adCard({ icon: 'store', title: 'Треккинговые палки и термос', sub: 'Реклама · доставка к пятнице', subGranted: 'Реклама · по интересам · под осенние походы на 10–15 км', go: 'ads' }) }),
    ui.section({ tags: ['halts', 'friends'], children: ui.list([
      ui.row({ thumb: films.spring.art, wide: true, duration: films.spring.dur, title: films.spring.title, sub: fMeta(films.spring), go: films.spring.id }),
      ui.row({ thumb: films.pines.art, wide: true, duration: films.pines.dur, title: films.pines.title, sub: fMeta(films.pines), go: films.pines.id }),
      ui.row({ thumb: films.film.art, wide: true, duration: films.film.dur, title: films.film.title, sub: `${people.me.short} склеил · ${films.film.meta}`, go: 'watch' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home', mini: MINI }),
});
