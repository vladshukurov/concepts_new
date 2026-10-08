import { THEME } from './_shared.mjs';
import { people, indoor } from '../model.mjs';

/* Встреча в помещении: рисуют вместе в читальном зале. Сеть библиотеки ведущая положила во встречу —
   телефон подключается без пароля со стойки, а «Я на месте» сверяет сеть и отмечает приход */
export default (ui) => ui.screen({
  id: 'indoor', theme: THEME,
  body: [
    ui.nav({ title: 'Встреча в библиотеке' }),
    ui.scroll([
      ui.section({ children: `<div class="sh-head"><small>Сегодня, ${indoor.start}–${indoor.end} · идёт</small><strong>${indoor.title}</strong><span>${indoor.place}, ${indoor.room}</span></div>` }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Я на месте', icon: 'map-pin', block: true, activate: 'wifiinfo|indoor', primary: true }),
          ui.button({ label: 'Подключиться к Wi‑Fi библиотеки', icon: 'wifi', variant: 'secondary', block: true, ask: 'hotspot|indoor|indoor' }),
        ]),
        ui.list([
          ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: `Подключено к ${indoor.network}`, sub: `Пароль из встречи · до ${indoor.end}`, shownAfter: 'hotspot' }),
          ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Вы отмечены на месте', sub: `${people.marina.first} видит, что вы пришли · ${indoor.here + 1} из ${indoor.people}`, shownAfter: 'wifiinfo' }),
        ]),
      ] }),
      ui.section({ title: 'Уже на месте', meta: `${indoor.here} из ${indoor.people}`, children: ui.list([
        ui.row({ lead: ui.avatar(people.marina.initial), title: people.marina.name, sub: 'ведёт встречу · у окна' }),
        ui.row({ lead: ui.avatar(people.lera.initial), title: people.lera.name, sub: 'акварель · второй стол' }),
        ui.row({ lead: ui.avatar(people.petr.initial), title: people.petr.name, sub: 'линер · рисует зал сверху' }),
      ]) }),
    ]),
  ],
});
