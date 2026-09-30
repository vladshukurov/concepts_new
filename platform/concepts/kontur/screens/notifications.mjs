import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'notifications', theme: THEME,
  body: [
    ui.nav({ title: 'Уведомления' }),
    ui.scroll([
      ui.section({ children: ui.actions([ui.button({ label: 'Разрешить уведомления', icon: 'bell', block: true, primary: true, ask: 'push|notifications|notifications' })]) }),
      ui.denied('push', 'Уведомления выключены — статусы в журнале событий'),
      ui.section({ children: [
        ui.group({ label: 'Что приходит', cells: [
          ui.cell({ icon: 'file-text', title: 'Готовность контакт-листа', toggle: true, toast: 'Статус готовности включён' }),
          ui.cell({ icon: 'route', title: 'Изменение прогулки', toggle: true, toast: 'Статус прогулки включён' }),
          ui.cell({ icon: 'send', title: 'Передача материалов', toggle: true, toast: 'Статус передачи включён' }),
        ] }),
        ui.group({ label: 'Статусы', cells: [
          ui.cell({ icon: 'repeat-2', title: 'Обновлять статусы заранее', sub: 'Состав и передачи до открытия', toggle: false, activate: 'remotenotif|notifications' }),
          ui.cell({ icon: 'user', title: 'Показывать участника передачи', sub: 'Имя в уведомлении о передаче', toggle: false, activate: 'commnotif|notifications' }),
        ] }),
        ui.granted('commnotif', 'В уведомлении о передаче видно, кто её закрыл'),
        ui.denied('remotenotif', 'Статусы обновятся после открытия'),
        ui.denied('commnotif', 'Участник не показывается в уведомлении'),
      ] }),
    ]),
  ],
});
