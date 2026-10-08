import { THEME, strip } from './_shared.mjs';
import { nextWalk, weather } from '../model.mjs';

/* Следующая вылазка: маршрут по точкам, когда выходим, кто идёт, напоминание о выходе */
const r = nextWalk.route;
export default (ui) => ui.screen({
  id: 'nextwalk', theme: THEME, className: 'vy-wrap',
  body: [
    ui.nav({ title: 'Следующая вылазка' }),
    ui.scroll([
      `<div class="vy-banner ${r.art}"></div>`,
      ui.section({ children: [
        `<div class="vy-channel">${ui.leadIcon('calendar', { round: true, accent: true })}<span class="ui-row-text"><strong>${r.name}</strong><span>Новая серия · первая вылазка по маршруту</span></span></div>`,
        `<div class="vy-map">${strip(r)}<div class="vy-map-labels">${r.points.map(([p, km]) => `<span>${p}<small>${String(km).replace('.', ',')} км</small></span>`).join('')}</div></div>`,
      ] }),
      ui.section({ children: ui.miniInfo([
        { icon: 'calendar', text: nextWalk.when, accent: true },
        { icon: 'map-pin', text: `${nextWalk.meet} · ${nextWalk.train}` },
        { icon: 'cloud-sun', text: `Прогноз на субботу: +10° · без дождя · сейчас ${weather.sat}` },
      ]) }),
      ui.section({ children: ui.list([
        ui.reminder({ title: 'Напомнить о выходе в субботу 8:00', titleGranted: 'Напомним в субботу в 6:40', sub: 'Перед электричкой · термос, дождевик, пауэрбанк', here: 'nextwalk' }),
        ui.row({ lead: ui.leadIcon('users', { round: true }), title: 'Кто идёт', sub: 'Лена, Костя, Артём и вы · Саша думает', go: 'crew' }),
      ]) }),
      ui.actions(ui.button({ label: 'Иду в субботу', block: true, toggle: 'on', primary: true }), { className: 'vy-bottom' }),
    ]),
  ],
});
