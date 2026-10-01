import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'netqr', theme: THEME,
  body: [
    ui.nav({ title: 'Сеть площадки', back: 'close' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="tl-qr"><span class="tl-qr-code">${ui.icon('qr-code')}</span><div><strong>Lopuhinka-Dogpark-Guest</strong><span>Код с калитки Лопухинского · считан в 18:22</span><span>WPA2 · пароль живёт до 02:22</span></div></div>`,
        ui.actions([ui.button({ label: 'Подключиться', icon: 'wifi', block: true, primary: true, ask: 'hotspot|netqr|netqr' })], { className: 'tl-qr-actions' }),
        ui.granted('hotspot', 'Вы в сети площадки'),
        ui.denied('hotspot', 'Сеть выбирается вручную в Настройках: Lopuhinka-Dogpark-Guest'),
      ] }),
      ui.section({ title: 'Сейчас', children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi'), title: 'Вы в этой сети', sub: 'С 18:24, держится 9 минут' }),
        ui.row({ lead: ui.leadIcon('map-pin'), title: 'Вернуться к отметке', sub: 'Отметились 6 из 9, старт в 18:40', go: 'walk' }),
        ui.row({ lead: ui.leadIcon('wifi-off'), title: 'В 18:19 пароль не подошёл', sub: 'Наклейка от 6 мая, сеть просит код от 15-го' }),
      ]) }),
      ui.section({ title: 'Сети площадок', children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi'), title: 'Лопухинский сад', sub: 'У дальних ворот сигнал пропадает' }),
        ui.row({ lead: ui.leadIcon('wifi-off'), title: 'Площадка на Ждановской', sub: 'Не видно отсюда' }),
        ui.row({ lead: ui.leadIcon('wifi-off'), title: 'Вольер у стадиона', sub: 'Код сменили 11 мая' }),
      ]) }),
    ]),
  ],
});
