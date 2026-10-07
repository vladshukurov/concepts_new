import { THEME } from './_shared.mjs';
import { family, people } from '../model.mjs';

/* Wi‑Fi дома: Тимур поделился сетью в чате — няня и гости подключаются касанием, пароль вслух не нужен */
export default (ui) => ui.screen({
  id: 'wifi', theme: THEME,
  body: [
    ui.nav({ title: 'Wi‑Fi дома' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="sv-netcard"><span class="sv-net-ico">${ui.icon('wifi')}</span><div><strong>${family.ssid}</strong><span>WPA2 · Гариповы, Чистопольская, 61</span></div></div>`,
        ui.actions([ui.button({ label: 'Подключиться', icon: 'wifi', block: true, ask: 'hotspot|wifi|wifi', primary: true })]),
      ] }),
      ui.section({ shownAfter: 'hotspot', children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: `Подключено к ${family.ssid}`, sub: 'Сигнал отличный · 5 ГГц' }),
        ui.row({ lead: ui.leadIcon('house', { round: true, accent: true }), title: 'Кто дома', sub: 'Статус ставится по этой сети', go: 'home' }),
      ]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'key', title: 'Пароль', value: 'скрыт', toast: 'Пароль виден только Тимуру' }),
        ui.cell({ icon: 'user', title: 'Поделился', sub: `${people.timur.name}, вчера в 21:05` }),
        ui.cell({ icon: 'users', title: 'Подключились', value: '5 из 6' }),
      ] }) }),
      ui.section({ title: 'Подключались из чата', children: ui.list([
        ui.row({ lead: ui.avatar(people.oksana.initial), title: people.oksana.name, sub: 'сегодня в 12:31 · телефон и планшет Милы' }),
        ui.row({ lead: ui.avatar(people.roza.initial), title: people.roza.name, sub: 'в субботу · когда сидела с детьми' }),
        ui.row({ lead: ui.avatar('АС'), title: 'Артём Сафин', sub: 'друг Дани · 2 октября, до 20:00' }),
      ]) }),
    ]),
  ],
});
