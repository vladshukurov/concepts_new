import { THEME } from './_shared.mjs';

/* Реклама бесплатной версии: снаряжение, ATT спрашивают до выбора «Без подбора» */
export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама' }),
    ui.scroll([
      ui.section({ title: 'На главной сейчас', children: [
        `<div data-hide-granted="tracking">${ui.row({ lead: ui.leadIcon('store', { accent: true }), title: 'Треккинговые палки и термос', sub: 'Реклама · для всех' })}</div>`,
        ui.row({ shownAfter: 'tracking', lead: ui.leadIcon('store', { accent: true }), title: 'Треккинговые палки и термос', sub: 'Реклама · по интересам · под осенние походы на 10–15 км' }),
        ui.row({ shownAfter: 'tracking', lead: ui.leadIcon('shirt', { accent: true }), title: 'Мембранная куртка до +5°', sub: 'Реклама · по интересам · к прогнозу на субботу' }),
      ] }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'badge-check', title: 'По интересам', sub: 'Снаряжение под ваши маршруты и погоду' }),
        ui.cell({ icon: 'shield', title: 'Без подбора', sub: 'Одна и та же реклама для всех' }),
      ] }) }),
      `<div class="ui-actions vy-bottom"><div data-hide-granted="tracking"><div data-hide-denied="tracking">${ui.button({ label: 'Подбирать по интересам', block: true, ask: 'tracking|ads|ads', primary: true })}</div>${ui.button({ label: 'Оставить без подбора', variant: 'tertiary', block: true, back: true })}</div><div class="perm-hidden" data-show-granted="tracking">${ui.button({ label: 'Готово', block: true, back: true })}</div></div>`,
    ]),
  ],
});
