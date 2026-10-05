import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'privacy', theme: THEME,
  body: [
    ui.nav({ title: 'Приватность' }),
    ui.scroll([
      ui.section({ children: ui.group({ label: 'Работы', cells: [
        ui.cell({ icon: 'scan-face', title: 'Замок черновиков', sub: 'Face ID или код устройства', toggle: false, ask: 'faceid|lock|privacy' }),
        ui.cell({ icon: 'eye', title: 'Кто видит сохранённое', value: 'Только я', toast: 'Сохранённое видно только вам' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Вход и реклама', cells: [
        ui.cell({ icon: 'key', title: 'Вход в веб-портфолио', value: 'portfolio.shtrikh.app', activate: 'autofill|fill' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: 'Случайная', go: 'ads' }),
      ] }) }),
      ui.denied('faceid'),
    ]),
  ],
});
