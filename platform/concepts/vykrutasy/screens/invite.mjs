import { THEME, frame } from './_shared.mjs';
import { invite, people } from '../model.mjs';

/* Приглашение на вечер у Лены: когда, куда идти, кто будет, напоминание */
export default (ui) => ui.screen({
  id: 'invite', theme: THEME, className: 'vy-wrap',
  body: [
    ui.nav({ title: 'Приглашение' }),
    ui.scroll([
      `<div class="vy-banner ${frame}"></div>`,
      ui.section({ children: [
        `<div class="vy-channel">${ui.avatar(people.lena.initial, { large: true })}<span class="ui-row-text"><strong>${invite.title}</strong><span>Зовёт Лена Орлова · 5 раундов</span></span></div>`,
        ui.miniInfo([
          { icon: 'calendar', text: invite.when },
          { icon: 'map-pin', text: invite.address },
        ]),
        ui.usersStack({ faces: invite.going, text: 'Лена, Дима, Оля и ещё 2 придут' }),
      ] }),
      ui.section({ children: ui.list([
        ui.reminder({ title: 'Напомнить об игре у Лены в пятницу в 20:00', titleGranted: 'Напомним в пятницу в 19:00', sub: 'За час до начала', here: 'invite' }),
        ui.row({ lead: ui.leadIcon('route', { round: true, accent: true }), title: 'Как добраться до Лены', sub: invite.address, ask: 'location|invite|invite' }),
        ui.row({ shownAfter: 'location', lead: ui.leadIcon('footprints', { round: true, accent: true }), title: invite.walk, sub: 'От вас до Тихой, 8 · маршрут в «Картах»', toast: 'Маршрут откроется в «Картах»' }),
      ]) }),
      ui.denied('location'),
      ui.section({ title: 'Что будет', children: ui.list([
        ui.row({ lead: ui.leadIcon('tv', { round: true }), title: 'Раунды на телевизоре Лены', sub: '3 задания от игры и 2 своих' }),
        ui.row({ lead: ui.leadIcon('images', { round: true }), title: 'Раунд из галереи', sub: 'Захватите старые ролики с отпуска' }),
      ]) }),
      ui.actions(ui.button({ label: 'Приду', block: true, toast: 'Лена увидит, что вы придёте', primary: true }), { className: 'vy-bottom' }),
    ]),
  ],
});
