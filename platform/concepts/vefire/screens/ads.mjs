import { THEME } from './_shared.mjs';

/* Реклама бесплатной версии: ATT спрашивают до выбора «Без подбора» */
export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама' }),
    ui.scroll([
      ui.section({ title: 'Между выпусками сейчас', children: [
        `<div data-hide-granted="tracking">${ui.row({ lead: ui.leadIcon('store', { accent: true }), title: 'Детская экшн-камера', sub: 'Реклама · для всех' })}</div>`,
        ui.row({ shownAfter: 'tracking', lead: ui.leadIcon('store', { accent: true }), title: 'Детская экшн-камера', sub: 'Реклама · по интересам · для юных блогеров' }),
        ui.row({ shownAfter: 'tracking', lead: ui.leadIcon('mic', { accent: true }), title: 'Петличный микрофон для телефона', sub: 'Реклама · по интересам · для съёмки дома' }),
      ] }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'badge-check', title: 'По интересам', sub: 'Камеры, микрофоны и детские наборы для съёмки' }),
        ui.cell({ icon: 'shield', title: 'Без подбора', sub: 'Одна и та же реклама для всех' }),
      ] }) }),
      `<div class="ui-actions vf-bottom"><div data-hide-granted="tracking"><div data-hide-denied="tracking">${ui.button({ label: 'Подбирать по интересам', block: true, ask: 'tracking|ads|ads', primary: true })}</div>${ui.button({ label: 'Оставить без подбора', variant: 'tertiary', block: true, back: true })}</div><div class="perm-hidden" data-show-granted="tracking">${ui.button({ label: 'Готово', block: true, back: true })}</div></div>`,
    ]),
  ],
});
