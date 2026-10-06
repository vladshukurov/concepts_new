import { THEME } from './_shared.mjs';
import { places, own } from '../model.mjs';

/* Своя серия одного места: двор в разную погоду; последний кадр ждёт снега */
const kadr = [['Лето', 'июль'], ['Дождь', 'август'], ['Осень', 'сегодня']];
export default (ui) => ui.screen({
  id: 'series', theme: THEME,
  body: [
    ui.nav({ title: places.panfilova.name }),
    ui.scroll([
      ui.section({ children: `<div class="sh-head"><small>${own.series.done} из ${own.series.of} · ${own.series.next}</small><strong>${places.panfilova.series}</strong><span>Один ракурс у старой липы, каждый раз в другую погоду</span></div>` }),
      ui.section({ children: `<div class="sh-series is-captioned">${kadr.map(([t, d]) => `<button data-go="post" aria-label="${t}, ${d}"><span class="ph"></span><b>${t}</b><small>${d}</small></button>`).join('')}<span class="sh-empty"><span>${ui.icon('cloud-snow')}</span><b>Снег</b><small>ждёт</small></span></div>` }),
      ui.section({ children: ui.actions([ui.button({ label: 'Добавить зарисовку', icon: 'plus', block: true, go: 'compose', primary: true })]) }),
      ui.section({ title: 'Все зарисовки точки', meta: String(places.panfilova.works), children: ui.list([
        ui.row({ lead: ui.leadIcon('pen-line'), title: 'Липа на Панфилова', sub: 'Сегодня · линер 0.3 · в серии', go: 'post' }),
        ui.row({ lead: ui.leadIcon('pen-line'), title: 'Мокрый асфальт', sub: 'Август · акварель · в серии' }),
        ui.row({ lead: ui.leadIcon('pen-line'), title: 'Тень на арке', sub: 'Июль · линер · в серии' }),
        ui.row({ lead: ui.leadIcon('pen-line'), title: 'Окна второго этажа', sub: 'Май · карандаш · набросок за 5 минут' }),
        ui.row({ lead: ui.leadIcon('pen-line'), title: 'Дворник с метлой', sub: 'Апрель · линер · не закончен' }),
      ]) }),
    ]),
  ],
});
