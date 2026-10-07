import { THEME, swapText } from './_shared.mjs';

/* Выбор подбора: ATT спрашивается только при «По интересам»; «Без подбора» — без запроса */
export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'Подбор', children: ui.group({ cells: [
        ui.cell({ icon: 'sparkles', title: 'По интересам', sub: 'Винтаж и ателье под ваш гардероб', value: swapText('tracking', '', ui.icon('check')), ask: 'tracking|home|ads' }),
        ui.cell({ icon: 'shuffle', title: 'Без подбора', value: swapText('tracking', ui.icon('check'), ''), back: true }),
      ] }) }),
      ui.section({ title: 'Сейчас в лукбуке', meta: 'одна карточка в день', children: ui.list([
        ui.row({ lead: ui.leadIcon('scissors', { round: true }), title: swapText('tracking', 'Ателье «Подшив»', 'Винтаж на Большой Пушкарской'), sub: swapText('tracking', 'Реклама · подшив джинсов за день', 'Реклама · по интересам · пальто и жакеты 90‑х') }),
      ]) }),
    ]),
  ],
});
