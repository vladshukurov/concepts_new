import { THEME } from './_shared.mjs';
import { films, fMeta, routes, lastTrip } from '../model.mjs';

/* Поиск по своим вылазкам, точкам маршрутов и роликам */
export default (ui) => ui.screen({
  id: 'search', theme: THEME, className: 'vy-wrap',
  body: [
    ui.nav({ title: 'Поиск' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Маршруты, точки и ролики', value: 'родник', clear: { toast: 'Запрос очищен' } }) }),
      ui.section({ title: 'Ролики', meta: '2 найдено', children: ui.list([
        ui.row({ thumb: films.spring.art, wide: true, duration: films.spring.dur, title: films.spring.title, sub: fMeta(films.spring), go: films.spring.id }),
        ui.row({ thumb: films.film.art, wide: true, duration: films.film.dur, title: films.film.title, sub: `Глава «родник» с 2:50 · ${lastTrip.day}`, go: 'watch' }),
      ]) }),
      ui.section({ title: 'Маршруты', children: ui.list([
        ui.row({ thumb: routes.quarry.art, wide: true, title: routes.quarry.name, sub: `Родник на 4,8 км · ${routes.quarry.trips} вылазки`, go: 'route' }),
      ]) }),
    ]),
  ],
});
