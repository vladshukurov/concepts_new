import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама', back: 'close' }),
    ui.scroll([
      `<div class="lk-me"><h1>«Образы» бесплатны</h1><p class="ui-sub">Между образами — марки и магазины города</p></div>`,
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'store', title: 'Марки и магазины', sub: 'Что носят в вашем районе' }),
        ui.cell({ icon: 'shuffle', title: 'Без подбора', check: true }),
      ] }) }),
      ui.denied('tracking'),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Продолжить', block: true, ask: 'tracking|profile|ads', primary: true }),
        ui.button({ label: 'Не сейчас', variant: 'tertiary', block: true, back: true }),
      ]) }),
    ]),
  ],
});
