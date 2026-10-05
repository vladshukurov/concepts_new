import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'privacy', theme: THEME,
  body: [
    ui.nav({ title: 'Приватность' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'scan-face', title: 'Face ID', sub: 'Личные проекты и входы в каталоги', toggle: false, ask: 'faceid|privacy|privacy' }),
        ui.cell({ icon: 'eye', title: 'Кто видит этапы', value: 'Все', toast: 'Этапы видны всем' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: 'Контекстная', go: 'ads' }),
      ] }) }),
      ui.denied('faceid'),
    ]),
  ],
});
