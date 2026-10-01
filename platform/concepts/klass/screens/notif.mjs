import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'notif', theme: THEME,
  body: [
    ui.nav({ title: 'Оповещения', back: 'close' }),
    ui.scroll([
      ui.section({ children: [
        ui.group({ cells: [
          ui.cell({ icon: 'message-circle', title: 'Ответы в обсуждениях', sub: 'Где вы отвечали или вас упомянули' }),
          ui.cell({ icon: 'calendar', title: 'Собрания и поездки', sub: 'Накануне и утром в день события' }),
          ui.cell({ icon: 'user', title: 'Лицо в баннере', sub: 'Кто пишет — видно в уведомлении', toggle: true, toast: 'Лицо в баннере включено' }),
          ui.cell({ icon: 'repeat-2', title: 'Счётчики в фоне', sub: 'Разделы обновляются до открытия', toggle: false, activate: 'remotenotif|notif' }),
        ] }),
        ui.granted('push', 'Оповещения включены · завтра в 08:00 напомним о поездке'),
        ui.granted('remotenotif', 'Счётчики обновлены в 06:12 · три новых ответа'),
        ui.denied('push', 'Оповещения выключены — новое видно при открытии, счётчики те же'),
      ] }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Включить оповещения', icon: 'bell', block: true, primary: true, ask: 'push|notif|notif' }),
        ui.button({ label: 'Открыть ленту', variant: 'tertiary', block: true, go: 'feed' }),
      ]) }),
    ]),
  ],
});
