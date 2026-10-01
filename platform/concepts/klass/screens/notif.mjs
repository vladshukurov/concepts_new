import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'notif', theme: THEME,
  body: [
    ui.nav({ title: 'Оповещения', back: 'close' }),
    ui.scroll([
      ui.section({ children: [
        ui.group({ cells: [
          ui.cell({ icon: 'users', title: 'Ответы в обсуждениях', sub: 'Где вы отвечали или вас упомянули' }),
          ui.cell({ icon: 'calendar', title: 'Собрания и поездки', sub: 'Накануне и утром в день события' }),
          ui.cell({ icon: 'message-circle', title: 'Сообщения', sub: 'С именем и фото отправителя', toggle: false, activate: 'commnotif|notif' }),
        ] }),
        ui.granted('commnotif', 'Сообщения приходят с именем и фото'),
        ui.granted('push', 'Оповещения включены · завтра в 08:00 напомним о поездке'),
        ui.denied('push', 'Оповещения выключены — новое видно при открытии, счётчики те же'),
      ] }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Включить оповещения', icon: 'bell', block: true, primary: true, ask: 'push|notif|notif' }),
        ui.button({ label: 'Открыть ленту', variant: 'tertiary', block: true, go: 'feed' }),
      ]) }),
    ]),
  ],
});
