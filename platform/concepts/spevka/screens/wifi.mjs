import { THEME } from './_shared.mjs';
import { choir, people, today } from '../model.mjs';

/* Сеть репетиционного зала, которую староста прислал карточкой, — пароль на вахте больше не спрашивают */
export default (ui) => ui.screen({
  id: 'wifi', theme: THEME,
  body: [
    ui.nav({ title: 'Wi‑Fi зала' }),
    ui.scroll([
      ui.section({ children: [
        `<div class="sp-netcard"><span class="sp-net-ico">${ui.icon('wifi')}</span><div><strong>${choir.ssid}</strong><span>WPA2 · ${choir.dk}, ${choir.hall}</span></div></div>`,
        ui.actions([ui.button({ label: 'Подключиться', icon: 'wifi', block: true, ask: 'hotspot|wifi|wifi', primary: true })]),
      ] }),
      ui.section({ shownAfter: 'hotspot', children: ui.list([
        ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: `Подключено к ${choir.ssid}`, sub: 'Сигнал отличный · в зале №2 и в фойе' }),
        ui.row({ lead: ui.leadIcon('list-checks', { round: true, accent: true }), title: 'Баланс партий', sub: `«Иду» станет «На месте» · спевка в ${today.time}`, go: 'balance' }),
      ]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'key', title: 'Пароль', value: choir.password, toast: 'Пароль скопирован' }),
        ui.cell({ icon: 'send', title: 'Откуда', sub: `${people.denis.name} прислал с карточки на вахте, вчера в 20:14` }),
        ui.cell({ icon: 'users', title: 'Подключились', value: '14 из 28' }),
      ] }) }),
      ui.section({ title: 'Сети хора', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: 'Сб' }), title: 'DK_Bolshoy_Zal', sub: 'Большой зал · сводная и концерт · пароль у звукорежиссёра' }),
        ui.row({ lead: ui.leadIcon('', { text: '7 н' }), title: 'Yar_Filarmonia_Guest', sub: 'Ярославль, филармония · гастроли · Денис пришлёт на месте' }),
      ]) }),
    ]),
  ],
});
