import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'notif', theme: THEME,
  body: [
    ui.nav({ title: 'Уведомления' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'message-circle', title: 'Ответы и реакции', sub: 'Комментарии к вашим работам', toggle: false, ask: 'push|notif|notif' }),
        ui.cell({ icon: 'calendar', title: 'Встречи', sub: 'Перенос и точка сбора', toggle: true, toast: 'Уведомления о встречих включены' }),
        ui.cell({ icon: 'moon', title: 'Тихие часы', value: '23:00–08:00', toast: 'Тихие часы · 23:00–08:00' }),
      ] }) }),
      ui.denied('push', 'Ответы видны при открытии приложения'),
    ]),
  ],
});
