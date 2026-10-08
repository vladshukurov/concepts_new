import { THEME, strip, haltRow } from './_shared.mjs';
import { hike, hikeClips, myHalt } from '../model.mjs';

/* Идущий поход: маршрут с точками, «где мы» по геопозиции, «Снять привал» и ролики дня */
const r = hike.route;
const map = (ui) => `<div class="vy-map">${strip(r, { done: 2, you: 1 })}<div class="vy-map-labels">${r.points.map(([p, km]) => `<span>${p}<small>${String(km).replace('.', ',')} км</small></span>`).join('')}</div></div>`;

export default (ui) => ui.screen({
  id: 'hike', theme: THEME, className: 'vy-wrap',
  body: [
    ui.nav({ title: 'Поход' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="vy-channel">${ui.leadIcon('footprints', { round: true, accent: true })}<span class="ui-row-text"><strong>${r.name}</strong><span>Сегодня · ${hike.line}</span></span></div>`,
        map(ui),
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('navigation', { round: true, accent: true }), title: 'Отметить нас на маршруте', sub: 'Отметка на полоске и сколько до следующей точки', ask: 'location|hike|hike' }),
        ui.row({ shownAfter: 'location', lead: ui.leadIcon('map-pin', { round: true, accent: true }), title: hike.here, sub: `До точки «${hike.next}» ${hike.toNext} · привал запишется к мосткам` }),
      ]) }),
      ui.denied('location'),
      ui.section({ children: ui.actions(ui.button({ label: 'Снять привал', icon: 'video', block: true, ask: 'camera+mic|camera|hike', primary: true })) }),
      ui.denied('camera,mic'),
      ui.section({ children: ui.usersStack({ faces: hike.with, text: 'Лена, Артём и Саша тоже снимают' }) }),
      ui.section({ title: 'Ролики похода', meta: `${hikeClips.length} ролика`, children: ui.list([
        ui.row({ shownAfter: 'camera', thumb: myHalt.art, wide: true, duration: myHalt.dur, title: myHalt.title, sub: `${myHalt.time} · ${myHalt.point} · снял Дима`, go: 'halt' }),
        ...[...hikeClips].reverse().map(haltRow),
      ]) }),
    ]),
  ],
});
