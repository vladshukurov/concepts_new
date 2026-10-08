import { seriesScreen } from './_series.mjs';
import { routes, lastTrip, films } from '../model.mjs';

/* Серия «Карьер и сосны»: три вылазки, у последней — фильм с главами по точкам */
const r = routes.quarry;
export default (ui) => seriesScreen(ui, {
  id: 'route', route: r, note: `${r.trips} вылазки · ${r.clips} роликов · с мая`,
  trips: [
    ui.row({ lead: ui.leadIcon('film', { round: true, accent: true }), title: `Вылазка 3 · ${lastTrip.day}`, sub: `Фильм ${films.film.dur} · ${lastTrip.clips} роликов · Лена, Костя, Саша`, go: 'trip' }),
    ui.row({ lead: ui.leadIcon('history', { round: true }), title: 'Вылазка 2 · 13 сентября', sub: 'Фильм 9:12 · 6 роликов · шли под дождём' }),
    ui.row({ lead: ui.leadIcon('history', { round: true }), title: 'Вылазка 1 · 16 мая', sub: 'Без фильма · 4 ролика у Кости на телефоне' }),
  ],
});
