import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'manual', theme: THEME,
  body: [
    ui.nav({ title: 'Добавить дом' }),
    ui.scroll([
      ui.denied('location'),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'map-pin', title: 'Улица', value: 'Полевая' }),
        ui.cell({ icon: 'house', title: 'Дом', value: '12' }),
      ] }) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Добавить дом', block: true, go: 'home' })]) }),
    ]),
  ],
});
