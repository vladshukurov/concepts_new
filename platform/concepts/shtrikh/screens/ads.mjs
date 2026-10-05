import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама', back: 'close' }),
    ui.scroll([
      ui.section({ children: '<div class="sh-head"><strong>«Штрих» бесплатный</strong><span>Между работами бывает реклама материалов: бумага, линеры, краски</span></div>' }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'store', title: 'Магазины материалов', sub: 'Рядом с вашими местами' }),
        ui.cell({ icon: 'shuffle', title: 'Случайная', check: true }),
      ] }) }),
      ui.denied('tracking'),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Продолжить', block: true, ask: 'tracking|me|ads', primary: true }),
        ui.button({ label: 'Не сейчас', variant: 'tertiary', block: true, back: true }),
      ]) }),
    ]),
  ],
});
