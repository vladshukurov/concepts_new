import { THEME } from './_shared.mjs';
import { nextMatch, team } from '../model.mjs';

/* Следующий матч: когда, поле и путь к нему, кто придёт, напоминание */
export default (ui) => ui.screen({
  id: 'nextmatch', theme: THEME, className: 'vr-wrap',
  body: [
    ui.nav({ title: 'Следующий матч' }),
    ui.scroll([
      `<div class="vr-banner ${nextMatch.art}"></div>`,
      ui.section({ children: [
        `<div class="vr-channel">${ui.avatar(team.initial, { large: true })}<span class="ui-row-text"><strong>${nextMatch.title}</strong><span>Товарищеский · 2 тайма по 35 минут</span></span></div>`,
        ui.miniInfo([
          { icon: 'calendar', text: nextMatch.when },
          { icon: 'map-pin', text: nextMatch.field },
        ]),
        ui.usersStack({ faces: nextMatch.going, text: 'Гоша, Дима, Илья и ещё 3 придут', go: 'squad' }),
      ] }),
      ui.section({ children: ui.list([
        ui.reminder({ title: 'Напомнить о матче в воскресенье 11:00', titleGranted: 'Напомним в воскресенье в 10:00', sub: 'За час до игры · взять форму и воду', here: 'nextmatch' }),
        ui.row({ lead: ui.leadIcon('route', { round: true, accent: true }), title: 'Как добраться до поля', sub: nextMatch.field, ask: 'location|nextmatch|nextmatch' }),
        ui.row({ shownAfter: 'location', lead: ui.leadIcon('footprints', { round: true, accent: true }), title: nextMatch.walk, sub: 'От вас до Озёрной, 12 · вход с арки', toast: 'Маршрут откроется в «Картах»' }),
      ]) }),
      ui.denied('location'),
      ui.actions(ui.button({ label: 'Приду на матч', block: true, toggle: 'on', primary: true }), { className: 'vr-bottom' }),
    ]),
  ],
});
