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
        ui.denied('wifiinfo'),
        ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Вы отмечены в 9:41', sub: `Сеть ${swap.network} · двенадцатая из ${swap.going}`, shownAfter: 'wifiinfo' })]),
      ] }),
      ui.section({ title: 'Уже отметились', meta: `${swap.checkedIn} из ${swap.going}`, children: ui.list([
        ui.row({ thumb: `${P.lera} is-round`, title: people.lera.name, sub: '9:30 · ведёт своп' }),
        ui.row({ thumb: `${P.mark} is-round`, title: people.mark.name, sub: '9:31 · первый после ведущей' }),
        ui.row({ thumb: `${P.yulia} is-round`, title: people.yulia.name, sub: '9:35 · по коду со стойки' }),
        ui.row({ lead: ui.leadIcon('', { text: 'НГ', round: true }), title: 'Ника Гаврилова', sub: '9:36 · принесла 2 вещи' }),
        ui.row({ lead: ui.leadIcon('', { text: 'АБ', round: true }), title: 'Аня Белова', sub: '9:38 · вещь на проверке у Леры' }),
        ui.row({ lead: ui.leadIcon('', { text: 'ДС', round: true }), title: 'Даша Соколова', sub: '9:40 · пришла с подругой' }),
      ]) }),
    ]),
  ],
});
