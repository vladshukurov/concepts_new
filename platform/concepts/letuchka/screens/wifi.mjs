import { THEME } from './_shared.mjs';
import { studio, people } from '../model.mjs';

/* Гостевая сеть офиса из чата «Гости дня»: новичок или гость подключается касанием */
export default (ui) => ui.screen({
  id: 'wifi', theme: THEME,
  body: [
    ui.nav({ title: 'Гостевой Wi‑Fi' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="lt-netcard"><span class="lt-net-ico">${ui.icon('wifi')}</span><div><strong>${studio.guestSsid}</strong><span>WPA2 · ${studio.office}, ${studio.floor}</span></div></div>`,
        ui.actions([ui.button({ label: 'Подключиться к гостевой сети', icon: 'wifi', block: true, ask: 'hotspot|wifi|wifi', primary: true })]),
      ] }),
      ui.section({ shownAfter: 'hotspot', children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: `Подключено к ${studio.guestSsid}`, sub: 'Сигнал отличный · сеть действует до 23:59' }),
        ui.row({ lead: ui.leadIcon('building-2', { round: true, accent: true }), title: 'Летучка', sub: 'Отметить в апдейте, что вы в офисе', go: 'office' }),
      ]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'key', title: 'Пароль', value: studio.guestPass, toast: 'Пароль скопирован' }),
        ui.cell({ icon: 'user', title: 'Откуда', sub: `${people.vika.name} прислала в «Гости дня» сегодня в 9:03` }),
        ui.cell({ icon: 'users', title: 'Подключились сегодня', value: '6' }),
      ] }) }),
      ui.section({ title: 'Сети офиса', children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi', { round: true }), title: studio.guestSsid, sub: 'гостям и телефонам новичков · пароль меняется по понедельникам' }),
        ui.row({ lead: ui.leadIcon('lock', { round: true }), title: studio.officeSsid, sub: 'ноутбуки сотрудников, по сертификату от Вики' }),
        ui.row({ lead: ui.leadIcon('wifi-off', { round: true }), title: 'Polden_Print', sub: 'только принтер на 5 этаже' }),
      ]) }),
    ]),
  ],
});
