import { THEME } from './_shared.mjs';

/* Реклама бесплатной версии: ATT спрашивают до выбора «Без подбора» */
export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама' }),
    ui.scroll([
      ui.section({ title: 'В ленте сейчас', children: [
        `<div data-hide-granted="tracking">${ui.row({ lead: ui.leadIcon('zap', { accent: true }), title: 'Самокаты у точки 5', sub: 'Реклама · прокат на маршруте' })}</div>`,
        ui.row({ shownAfter: 'tracking', lead: ui.leadIcon('coffee', { accent: true }), title: 'Кофейня на Чистых прудах', sub: 'Реклама · по интересам · 2 мин от точки 5' }),
      ] }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'badge-check', title: 'По интересам', sub: 'Кофейни и прокат рядом с маршрутом' }),
        ui.cell({ icon: 'shield', title: 'Без подбора', sub: 'Одна и та же реклама для всех' }),
      ] }) }),
      `<div class="ui-actions vz-bottom"><div data-hide-granted="tracking"><div data-hide-denied="tracking">${ui.button({ label: 'Подбирать по интересам', block: true, ask: 'tracking|ads|ads', primary: true })}</div>${ui.button({ label: 'Оставить без подбора', variant: 'tertiary', block: true, back: true })}</div><div class="perm-hidden" data-show-granted="tracking">${ui.button({ label: 'Готово', block: true, back: true })}</div></div>`,
    ]),
  ],
});
