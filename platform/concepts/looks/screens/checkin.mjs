import { THEME, face } from './_shared.mjs';
import { swap, people, queue } from '../model.mjs';

/* Отметка по сети площадки ставит в очередь на приём вещей — место видно здесь и на свопе */
export default (ui) => ui.screen({
  id: 'checkin', theme: THEME,
  body: [
    ui.nav({ title: 'Отметка' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="lk-swap"><small>Своп идёт с ${swap.hours.split('–')[0]}</small><strong>${swap.place}</strong><span>${swap.where} · очередь на приём вещей</span></div>`,
        ui.actions([ui.button({ label: 'Отметиться на свопе', icon: 'map-pin', block: true, activate: 'wifiinfo|checkin', primary: true })]),
        ui.list([ui.row({ lead: ui.leadIcon('list-ordered', { round: true, accent: true }), title: `Вы ${queue.place}-я в очереди на приём`, sub: `${people.lera.first} позовёт · сейчас ${queue.called}-я · сеть ${swap.network}`, subWrap: true, shownAfter: 'wifiinfo' })]),
      ] }),
      ui.section({ title: 'Уже отметились', meta: `${swap.checkedIn} из ${swap.going}`, children: ui.list([
        ui.row({ ...face(ui, 'lera'), title: people.lera.name, sub: '9:30 · ведёт своп' }),
        ui.row({ ...face(ui, 'mark'), title: people.mark.name, sub: '9:31 · первый после ведущей' }),
        ui.row({ ...face(ui, 'yura'), title: people.yura.name, sub: '9:35 · по коду со стойки' }),
        ui.row({ lead: ui.avatar('НГ'), title: 'Ника Гаврилова', sub: '9:36 · принесла 2 вещи' }),
        ui.row({ lead: ui.avatar('АБ'), title: 'Аня Белова', sub: '9:38 · вещь на проверке у Леры' }),
        ui.row({ lead: ui.avatar('ДС'), title: 'Даша Соколова', sub: '9:40 · пришла с подругой' }),
      ]) }),
      ui.section({ children: ui.foot(`Ещё ${swap.checkedIn - 6} — помощники Леры, отмечены с 9:00`, 'lk-idle-foot') }),
    ]),
  ],
});
