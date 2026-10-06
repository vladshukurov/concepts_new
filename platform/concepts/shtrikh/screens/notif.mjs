import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'notif', theme: THEME,
  body: [
    ui.nav({ title: 'Уведомления' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'calendar', title: 'Встречи', sub: 'Перенос и точка сбора', toggle: false, ask: 'push|notif|notif' }),
        ui.cell({ icon: 'message-circle', title: 'Сообщения', sub: 'С именем и фото отправителя', toggle: false, activate: 'commnotif|notif' }),
        ui.cell({ icon: 'moon', title: 'Тихие часы', value: '23:00–08:00', toast: 'Тихие часы · 23:00–08:00' }),
      ] }) }),
      ui.denied('push'),
    ]),
  ],
});
