import { THEME, TABS } from './_shared.mjs';
import { trip, meet, program, trips } from '../model.mjs';

/* Поездки: идущая сверху со сбором и тем, что дальше по программе; следующая и прошедшие ниже */
export default (ui) => ui.screen({
  id: 'trips', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Поездки', ui.iconButton({ icon: 'plus', label: 'Новая поездка', go: 'contacts' })),
    ui.section({ title: 'Сейчас', children: [
      ui.list([ui.row({ lead: ui.avatar(trip.initial), title: trip.name, sub: `${trip.dates} · ${trip.day} · ${trip.people} человек`, go: 'tripinfo', primary: true })]),
      ui.miniInfo([
        { icon: 'clock', text: `Сбор в ${meet.time} ${meet.place} · на месте ${meet.here} из ${trip.people}`, accent: true, go: 'rollcall' },
        { icon: 'wifi', text: `Wi‑Fi отеля ${trip.ssid}`, go: 'wifi' },
        { icon: 'images', text: `${trip.photos} фото и ${trip.circles} кружков · фильм пятницы 3:42`, go: 'album' },
      ]),
    ] }),
    ui.section({ title: 'Дальше сегодня', more: { go: 'program', label: 'Вся программа' }, children: ui.list(
      program.sat.items.slice(1).map(([time, title, sub]) => ui.row({ lead: ui.leadIcon('', { text: time }), title, sub })),
    ) }),
    ui.section({ title: 'Скоро', children: ui.list([
      ui.row({ lead: ui.avatar('ПН'), title: trips.pskov.name, sub: `${trips.pskov.dates} · ${trips.pskov.by} · ${trips.pskov.people} человек`, end: { badge: 'через 27 дней' }, go: 'lena' }),
    ]) }),
    ui.section({ title: 'Прошедшие', meta: '3', children: ui.list(trips.past.map((t) => ui.row({ lead: ui.leadIcon('route', { round: true }), title: `${t.name} · ${t.dates}`, sub: t.sub }))) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'trips' }),
});
