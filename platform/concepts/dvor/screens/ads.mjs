import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама', back: 'close' }),
    ui.scroll([
      `<div class="dv-person"><h1 class="ui-title">Двор остаётся бесплатным</h1><p class="ui-sub">Между объявлениями соседей — реклама</p></div>`,
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'map-pin', title: 'Местная', sub: 'Услуги с Полевой и соседних улиц' }),
        ui.cell({ icon: 'shuffle', title: 'Случайная', check: true }),
      ] }) }),
      ui.denied('tracking'),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Продолжить', block: true, ask: 'tracking|menu|ads' }),
        ui.button({ label: 'Не сейчас', variant: 'tertiary', block: true, back: true }),
      ]) }),
    ]),
  ],
});
