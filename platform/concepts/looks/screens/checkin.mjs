import { THEME, P } from './_shared.mjs';
import { swap, people, now } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'checkin', theme: THEME,
  body: [
    ui.nav({ title: 'Отметка' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="lk-swap"><small>Своп идёт с ${swap.hours.split('–')[0]}</small><strong>${swap.place}</strong><span>Отметка по сети площадки у входа</span></div>`,
        ui.actions([ui.button({ label: 'Отметиться на свопе', icon: 'map-pin', block: true, activate: 'wifiinfo|checkin', primary: true })]),
        ui.granted('wifiinfo', `Вы на свопе · отметка в ${now.time}`),
        ui.denied('wifiinfo', 'Отметка уйдёт организатору на подтверждение', ui.actions([ui.button({ label: 'Подключиться по QR', variant: 'secondary', block: true, go: 'netqr' })])),
      ] }),
      ui.section({ title: 'Уже отметились', meta: `${swap.checkedIn} из ${swap.going}`, children: ui.list([
        ui.row({ thumb: `${P.lera} is-round`, title: people.lera.name, sub: '9:30 · ведёт своп' }),
        ui.row({ thumb: `${P.yulia} is-round`, title: people.yulia.name, sub: '9:35 · вручную' }),
        ui.row({ thumb: `${P.mark} is-round`, title: people.mark.name, sub: '9:31 · первый после ведущей' }),
      ]) }),
    ]),
  ],
});
