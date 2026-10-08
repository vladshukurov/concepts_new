import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'notif', theme: THEME,
  body: [
    ui.nav({ title: 'Уведомления' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'moon', title: 'Тихие часы', value: '23:00–08:00', toast: 'Тихие часы · 23:00–08:00' }),
      ] }) }),
    ]),
  ],
});
