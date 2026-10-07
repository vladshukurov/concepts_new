import { THEME, TABS } from './_shared.mjs';
import { me, studio, standup, office, inOffice, away, rooms, guests, now } from '../model.mjs';

/* Офис: ближайшая летучка, кто сегодня на Лиговском, переговорки и гости дня */
export default (ui) => ui.screen({
  id: 'office', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Офис', ui.iconButton({ icon: 'presentation', label: 'Переговорки', go: 'rooms' })),
    ui.section({ children: [
      `<button class="lt-now" data-go="standup" data-primary aria-label="Летучка в ${standup.time}: повестка"><small>${now.date[0].toUpperCase() + now.date.slice(1)} · ${standup.room} переговорка</small><strong>Летучка через ${standup.in} минут</strong><span>${standup.time} · повестка ${standup.agenda.length} пунктов · ведёт ${standup.movedBy}</span></button>`,
    ] }),
    ui.section({ children: [
      ui.actions([ui.button({ label: 'Я в офисе', icon: 'wifi', block: true, activate: 'wifiinfo|office' })]),
    ] }),
    ui.section({ shownAfter: 'wifiinfo', children: ui.list([
      ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: `Вы в офисе с ${office.meIn}`, sub: `${studio.guestSsid} · ${studio.office}, ${studio.floor}` }),
    ]) }),
    ui.section({ title: 'Сегодня в офисе', meta: `${office.here} из ${office.total}`, children: ui.list([
      ui.row({ lead: ui.leadIcon('history', { round: true }), title: `Кто в офисе обновилось в ${office.synced}`, sub: 'последним пришёл Дима Корнеев' }),
      ...inOffice.map(([p, sub]) => ui.row({ lead: ui.avatar(p.initial), title: p.name, sub: `${p.role} · ${sub}` })),
    ]) }),
    ui.section({ title: 'Не в офисе', meta: String(away.length), children: ui.list(away.map(([p, sub]) => ui.row({
      lead: ui.avatar(p.initial), title: p.name, sub, ...(p.name === 'Артём Шилов' ? { go: 'chat' } : {}),
    }))) }),
    ui.section({ title: 'Переговорки сегодня', meta: `${rooms.big.items.length + rooms.small.items.length} броней`, children: ui.list([
      ui.row({ lead: ui.leadIcon('presentation', { round: true, accent: true }), title: `${rooms.big.name} · ${rooms.big.seats} мест`, sub: `${rooms.big.items[0][0]} летучка · ${rooms.big.items[1][0]} созвон · ${rooms.big.items[2][0]} ревью`, go: 'rooms' }),
      ui.row({ lead: ui.leadIcon('armchair', { round: true, accent: true }), title: `${rooms.small.name} · ${rooms.small.seats} места`, sub: `${rooms.small.items[0][0]} собеседование · ${rooms.small.items[1][0]} озвучка`, go: 'rooms' }),
    ]) }),
    ui.section({ title: 'Гости дня', meta: String(guests.length), children: ui.list([
      ...guests.map(([time, name, sub]) => ui.row({ lead: ui.leadIcon('', { text: time }), title: name, sub })),
      ui.row({ lead: ui.leadIcon('message-circle', { round: true, accent: true }), title: 'Гости дня', sub: 'Чат с Викой: пропуска и гостевой Wi‑Fi', go: 'guests' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'office' }),
});
