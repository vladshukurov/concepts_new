import { THEME } from './_shared.mjs';
import { places, own } from '../model.mjs';

/* Своя серия одного места: двор в разную погоду; последний кадр ждёт снега */
const kadr = [['Лето', 'июль'], ['Дождь', 'август'], ['Осень', 'сегодня']];
export default (ui) => ui.screen({
  id: 'series', theme: THEME,
  body: [
    ui.nav({ title: places.panfilova.name }),
    ui.scroll([
      ui.section({ children: `<div class="sh-head"><small>${own.series.done} из ${own.series.of} · ${places.panfilova.works} зарисовок этой точки</small><strong>${places.panfilova.series}</strong><span>Один ракурс у старой липы, каждый раз в другую погоду</span></div>` }),
      ui.section({ children: `<div class="sh-series">${kadr.map(([t, d]) => `<button class="ph" data-go="post" aria-label="${t}, ${d}"></button>`).join('')}<span class="sh-empty">${ui.icon('cloud-rain')}Снег</span></div>` }),
      ui.section({ children: ui.actions([ui.button({ label: 'Добавить зарисовку', icon: 'plus', block: true, go: 'compose', primary: true })]) }),
    ]),
  ],
});
