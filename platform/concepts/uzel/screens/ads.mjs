import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'ads', theme: THEME,
  body: [
    ui.nav({ title: 'Реклама', back: 'close' }),
    ui.scroll([
      ui.section({ children: '<div class="uz-item"><strong>Клуб бесплатный</strong><span>Между этапами — реклама деталей и инструмента</span></div>' }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'wrench', title: 'По вашим деталям', sub: 'Категории из ваших проектов' }),
        ui.cell({ icon: 'hammer', title: 'По мастерской', sub: 'Тема мастерской', check: true }),
      ] }) }),
      ui.denied('tracking', 'Реклама остаётся по теме мастерской'),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Настроить персонализацию', block: true, ask: 'tracking|privacy|ads', primary: true }),
        ui.button({ label: 'Не сейчас', variant: 'tertiary', block: true, back: true }),
      ]) }),
    ]),
  ],
});
