import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'notif', theme: THEME,
  body: [
    ui.nav({ title: 'Уведомления' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'heart', title: 'Ответы и реакции', sub: 'Комментарии к вашим работам', toggle: false, ask: 'push|notif|notif' }),
        ui.cell({ icon: 'message-circle', title: 'Сообщения', sub: 'С именем и фото отправителя', toggle: false, activate: 'commnotif|notif' }),
        ui.cell({ icon: 'calendar', title: 'Встречи', sub: 'Перенос и точка сбора', toggle: true, toast: 'Уведомления о встречах включены' }),
        ui.cell({ icon: 'moon', title: 'Тихие часы', value: '23:00–08:00', toast: 'Тихие часы · 23:00–08:00' }),
      ] }) }),
      ui.granted('commnotif', 'Сообщения приходят с именем и фото'),
      ui.denied('push', 'Ответы видны при открытии приложения'),
    ]),
  ],
});
