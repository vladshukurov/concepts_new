import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'guest', theme: THEME,
  body: [
    ui.nav({ title: 'Гостевая сеть' }),
    ui.scroll([
      ui.section({ children: `<div class="dv-net"><span class="dv-net-ico">${ui.icon('wifi')}</span><div><strong>Dvor-Guest</strong><span>WPA2 · действует до 30 апреля</span></div></div>` }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Подключиться к Dvor-Guest', icon: 'wifi', block: true, ask: 'hotspot|guest|guest' }),
          ui.button({ label: 'Сканировать QR с лавочки', icon: 'qr-code', variant: 'secondary', block: true, go: 'scan' }),
        ]),
        ui.denied('hotspot'),
        ui.list([ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: 'Подключено к Dvor-Guest', sub: 'Сигнал отличный · до 30 апреля, 23:59', shownAfter: 'hotspot' })]),
        ui.denied('camera'),
      ] }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'key', title: 'Пароль', value: 'dvor-2026', toast: 'Пароль скопирован' }),
      ] }) }),
      ui.section({ title: 'Где ловит', children: ui.list([
        ui.row({ lead: ui.leadIcon('map-pin'), title: 'Лавочки у 3 подъезда', sub: 'Роутер на козырьке · сигнал отличный' }),
        ui.row({ lead: ui.leadIcon('map-pin'), title: 'Детская площадка', sub: 'Слабо, у горки пропадает' }),
        ui.row({ lead: ui.leadIcon('map-pin'), title: 'Колясочная', sub: 'Не ловит' }),
      ]) }),
    ]),
  ],
});
