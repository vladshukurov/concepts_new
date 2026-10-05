import { THEME } from './_shared.mjs';
import { trip, people } from '../model.mjs';

/* Сеть отеля, которую один участник снял с QR у стойки, — остальным не нужно идти на ресепшен */
export default (ui) => ui.screen({
  id: 'wifi', theme: THEME,
  body: [
    ui.nav({ title: 'Wi‑Fi отеля' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="sb-netcard"><span class="sb-net-ico">${ui.icon('wifi')}</span><div><strong>${trip.ssid}</strong><span>WPA2 · ${trip.hotel}, ${trip.hotelAddr}</span></div></div>`,
        ui.actions([ui.button({ label: 'Подключиться', icon: 'wifi', block: true, ask: 'hotspot|wifi|wifi', primary: true })]),
      ] }),
      ui.section({ shownAfter: 'hotspot', children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: `В сети ${trip.ssid}`, sub: 'Сигнал отличный · до выезда 11 октября, 12:00' }),
        ui.row({ lead: ui.leadIcon('list-checks', { round: true, accent: true }), title: 'Отметиться на перекличке', sub: 'Сбор в 10:00 у отеля', go: 'rollcall' }),
      ]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'key', title: 'Пароль', value: 'kama2026guest', toast: 'Пароль скопирован' }),
        ui.cell({ icon: 'qr-code', title: 'Откуда', sub: `${people.igor.name} снял QR у стойки, вчера в 22:14` }),
        ui.cell({ icon: 'users', title: 'Подключились', value: '12 из 16' }),
      ] }) }),
      ui.section({ title: 'Сети поездки', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: 'Пт' }), title: 'RZD_Lastochka_5', sub: 'Поезд, вагон 5 · без пароля · Света, 7:20' }),
        ui.row({ lead: ui.leadIcon('', { text: 'Пт' }), title: 'Chak-Chak_Guest', sub: 'Ужин у Гузель · пароль на чеке · Олег, 19:41' }),
        ui.row({ lead: ui.leadIcon('', { text: 'Сб' }), title: 'Svijazhsk_Free', sub: 'Пристань Свияжска, после 16:00 · ещё не были' }),
      ]) }),
    ]),
  ],
});
