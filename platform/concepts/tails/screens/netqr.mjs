import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'netqr', theme: THEME,
  body: [
    ui.nav({ title: 'Сеть площадки', back: 'close' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="tl-qr"><span class="tl-qr-code">${ui.icon('qr-code')}</span><div><strong>Lopuhinka-Dogpark-Guest</strong><span>Код с калитки Лопухинского · считан вчера в 19:05</span><span>WPA2 · пароль живёт до 02:22</span></div></div>`,
        ui.actions([ui.button({ label: 'Подключиться', icon: 'wifi', block: true, primary: true, ask: 'hotspot|netqr|netqr' })], { className: 'tl-qr-actions' }),
        ui.denied('hotspot'),
      ] }),
      ui.section({ title: 'Сейчас', children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: 'Подключено к сети парка', sub: 'Можно отметиться на площадке', shownAfter: 'hotspot' }),
        ui.row({ lead: ui.leadIcon('map-pin'), title: 'Вернуться к отметке', sub: 'Отметка откроется в 18:30, старт в 18:40', go: 'walk' }),
        ui.row({ lead: ui.leadIcon('wifi-off'), title: 'Вчера пароль не подошёл', sub: 'Наклейка от 6 мая, сеть пересоздали' }),
      ]) }),
      ui.section({ title: 'Сети площадок', children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi'), title: 'Лопухинский сад', sub: 'У дальних ворот сигнал пропадает' }),
        ui.row({ lead: ui.leadIcon('wifi-off'), title: 'Площадка на Ждановской', sub: 'Не видно отсюда' }),
        ui.row({ lead: ui.leadIcon('wifi-off'), title: 'Вольер у стадиона', sub: 'Код сменили 11 мая' }),
      ]) }),
    ]),
  ],
});
