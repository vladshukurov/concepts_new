import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'notifications', theme: THEME,
  body: [
    ui.nav({ title: 'Уведомления' }),
    ui.scroll([
      ui.section({ children: ui.actions([ui.button({ label: 'Разрешить уведомления', icon: 'bell', block: true, primary: true, ask: 'push|notifications|notifications' })]) }),
      ui.denied('push'),
      ui.section({ children: [
        ui.group({ label: 'Что приходит', cells: [
          ui.cell({ icon: 'message-circle', title: 'Сообщения', sub: 'С именем и фото отправителя', toggle: false, activate: 'commnotif|notifications' }),
          ui.cell({ icon: 'file-text', title: 'Готовность контакт-листа', toggle: true, toast: 'Статус готовности включён' }),
          ui.cell({ icon: 'route', title: 'Изменение прогулки', toggle: true, toast: 'Статус прогулки включён' }),
          ui.cell({ icon: 'send', title: 'Передача материалов', toggle: true, toast: 'Статус передачи включён' }),
        ] }),
      ] }),
    ]),
  ],
});
