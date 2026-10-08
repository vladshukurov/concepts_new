import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'privacy', theme: THEME,
  body: [
    ui.nav({ title: 'Приватность' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Работы', cells: [
        ui.cell({ icon: 'scan-face', title: 'Замок черновиков', sub: 'Face ID или код устройства', toggle: false, ask: 'faceid|lock|privacy' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Вход', cells: [
        ui.cell({ icon: 'key', title: 'Вход в магазин материалов', value: 'art-lavka.kz', activate: 'autofill|fill' }),
      ] }) }),
      ui.denied('faceid'),
    ]),
  ],
});
