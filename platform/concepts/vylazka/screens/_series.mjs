/** Страница маршрута-серии: обложка, точки, вылазки по маршруту. Файл с «_» — не экран. */
import { THEME, strip } from './_shared.mjs';

export const seriesScreen = (ui, { id, route, trips, note }) => ui.screen({
  id, theme: THEME, className: 'vy-wrap',
  body: [
    ui.nav({ title: 'Маршрут' }),
    ui.scroll([
      `<div class="vy-banner ${route.art}"></div>`,
      ui.section({ children: [
        `<div class="vy-channel">${ui.leadIcon('route', { round: true, accent: true })}<span class="ui-row-text"><strong>${route.name}</strong><span>${note}</span></span></div>`,
        `<div class="vy-map">${strip(route, { done: 4 })}<div class="vy-map-labels">${route.points.map(([p, km]) => `<span>${p}<small>${String(km).replace('.', ',')} км</small></span>`).join('')}</div></div>`,
      ] }),
      ui.section({ title: 'Вылазки серии', meta: `${trips.length}`, children: ui.list(trips) }),
      ui.section({ children: ui.group({ cells: route.points.map(([p, km, where]) =>
        ui.cell({ icon: 'map-pin', title: `${p[0].toUpperCase()}${p.slice(1)}`, sub: where, value: `${String(km).replace('.', ',')} км` })) }) }),
    ]),
  ],
});
