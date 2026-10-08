import { THEME } from './_shared.mjs';

/* Реклама материалов: ATT спрашивают до выбора «Без подбора», карточка меняется сразу */
export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'В скетчбуке сейчас', children: [
        `<div data-hide-granted="tracking">${ui.row({ lead: ui.leadIcon('store', { accent: true }), title: 'Бумага для скетчей −15 %', sub: 'Реклама · для всех' })}</div>`,
        ui.row({ shownAfter: 'tracking', lead: ui.leadIcon('store', { accent: true }), title: 'Бумага для скетчей −15 %', sub: 'Реклама · по интересам · акварельная бумага' }),
      ] }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'badge-check', title: 'По интересам', sub: 'Материалы, которыми вы рисуете' }),
        ui.cell({ icon: 'shield', title: 'Без подбора', sub: 'Одна и та же реклама для всех' }),
      ] }) }),
      ui.section({ children: `<div class="ui-actions"><div data-hide-granted="tracking"><div data-hide-denied="tracking">${ui.button({ label: 'Подбирать по интересам', block: true, ask: 'tracking|ads|ads', primary: true })}</div>${ui.button({ label: 'Оставить без подбора', variant: 'tertiary', block: true, back: true })}</div><div class="perm-hidden" data-show-granted="tracking">${ui.button({ label: 'Готово', block: true, back: true })}</div></div>` }),
    ]),
  ],
});
