import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'security', theme: THEME,
  body: [
    ui.nav({ title: 'Защита и вход' }),
    ui.scroll([
      ui.section({ children: ui.actions([ui.button({ label: 'Включить Face ID', icon: 'scan-face', block: true, primary: true, ask: 'faceid|security|security' })]) }),
      ui.denied('faceid', 'Face ID недоступен — используется код устройства'),
      ui.section({ children: [
        ui.group({ cells: [
          ui.cell({ icon: 'key', title: 'Вход на сайте', sub: 'Аккаунт kontur.photo', toggle: false, activate: 'autofill|security' }),
          ui.cell({ icon: 'lock', title: 'Код устройства', sub: 'Резервный способ', value: 'Включён', toast: 'Код устройства включён' }),
          ui.cell({ icon: 'smartphone', title: 'Активные устройства', sub: 'iPhone и лабораторный Mac', toast: 'Устройства открыты' }),
        ] }),
        ui.denied('autofill', 'Вход на сайте доступен вручную'),
      ] }),
    ]),
  ],
});
