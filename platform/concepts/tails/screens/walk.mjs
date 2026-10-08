import { THEME, PET, faces } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'walk', theme: THEME,
  body: [
    ui.nav({ title: 'Прогулка', trailing: ui.iconButton({ icon: 'message-circle', label: 'Чат прогулки', go: 'chat-pond' }) }),
    ui.scroll([
      `<div class="tl-walk-page"><h1 class="ui-title">Спокойный круг у пруда</h1><p class="ui-sub">Сегодня, 18:40 · спокойный темп</p>${faces(PET.truffle, PET.mint, PET.barni, PET.loki)}<p class="ui-sub">Трюфель, Мята, Барни и ещё 3</p></div>`,
      ui.section({ children: [
        ui.group({ cells: [
          ui.cell({ icon: 'map-pin', title: 'Лопухинский сад', sub: 'Вход с Каменноостровского · сбор у пруда' }),
          ui.cell({ icon: 'clock', title: '18:40 — около 19:15', sub: 'Две остановки, вода на входе' }),
          ui.cell({ icon: 'route', title: 'От вас 12 минут пешком', sub: 'Через Съезжинскую' }),
          ui.cell({ icon: 'users', title: 'Локи присоединился в 9:20', sub: 'Марат записался утром · 6 участников' }),
        ] }),
        ui.list([ui.reminder({ title: 'Сообщить о переносе', titleGranted: 'Сообщим о переносе', sub: 'Перенос, отмена или новое место сбора', here: 'walk' })]),
      ] }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Я иду', icon: 'check', block: true, primary: true, activate: 'commnotif|lockscreen' }),
      ]) }),
    ]),
  ],
});
