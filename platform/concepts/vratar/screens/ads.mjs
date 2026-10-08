import { THEME } from './_shared.mjs';

/* Реклама бесплатной версии: ATT спрашивают до выбора «Без подбора» */
export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама' }),
    ui.scroll([
      ui.section({ title: 'В ленте моментов сейчас', children: [
        `<div data-hide-granted="tracking">${ui.row({ lead: ui.leadIcon('store', { accent: true }), title: 'Бутсы для искусственного газона', sub: 'Реклама · для всех' })}</div>`,
        ui.row({ shownAfter: 'tracking', lead: ui.leadIcon('store', { accent: true }), title: 'Бутсы для искусственного газона', sub: 'Реклама · по интересам · ваш размер 43 в наличии' }),
        ui.row({ shownAfter: 'tracking', lead: ui.leadIcon('shirt', { accent: true }), title: 'Форма с номерами на команду', sub: 'Реклама · по интересам · от 9 комплектов' }),
      ] }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'badge-check', title: 'По интересам', sub: 'Бутсы, форма и мячи под вашу игру' }),
        ui.cell({ icon: 'shield', title: 'Без подбора', sub: 'Одна и та же реклама для всех' }),
      ] }) }),
      `<div class="ui-actions vr-bottom"><div data-hide-granted="tracking"><div data-hide-denied="tracking">${ui.button({ label: 'Подбирать по интересам', block: true, ask: 'tracking|ads|ads', primary: true })}</div>${ui.button({ label: 'Оставить без подбора', variant: 'tertiary', block: true, back: true })}</div><div class="perm-hidden" data-show-granted="tracking">${ui.button({ label: 'Готово', block: true, back: true })}</div></div>`,
    ]),
  ],
});
