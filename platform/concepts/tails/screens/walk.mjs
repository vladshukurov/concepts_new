import { THEME, PET, faces } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'walk', theme: THEME,
  body: [
    ui.nav({ title: 'Прогулка', trailing: ui.iconButton({ icon: 'share', label: 'Поделиться прогулкой', toast: 'Ссылка на прогулку скопирована' }) }),
    ui.scroll([
      `<div class="tl-walk-page"><h1 class="ui-title">Спокойный круг у пруда</h1><p class="ui-sub">Сегодня, 18:40 · спокойный темп</p>${faces(PET.truffle, PET.mint, PET.barni, PET.loki)}<p class="ui-sub">Трюфель, Мята, Барни и ещё 3</p></div>`,
      ui.section({ children: [
        ui.group({ cells: [
          ui.cell({ icon: 'map-pin', title: 'Лопухинский сад', sub: 'Вход с Каменноостровского · сбор у пруда' }),
          ui.cell({ icon: 'clock', title: '18:40 — около 19:15', sub: 'Две остановки, вода на входе' }),
          ui.cell({ icon: 'route', title: 'От вас 12 минут пешком', sub: 'Через Съезжинскую' }),
        ] }),
      ] }),
      ui.denied('push'),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Я иду', icon: 'check', block: true, toast: 'Следим за прогулкой' }),
        ui.button({ label: 'Я на площадке', icon: 'map-pin', variant: 'secondary', block: true, activate: 'wifiinfo|walk' }),
        ui.button({ label: 'Сеть площадки', icon: 'qr-code', variant: 'secondary', block: true, go: 'netqr' }),
      ]) }),
    ]),
  ],
});
