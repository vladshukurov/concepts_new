import { THEME, TABS } from './_shared.mjs';
import { trip, meet, program, trips } from '../model.mjs';

/* Поездки: что дальше в идущей поездке и кто на месте, день лентой; следующая и прошедшие ниже */
export default (ui) => ui.screen({
  id: 'trips', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Поездки', ui.iconButton({ icon: 'plus', label: 'Новая поездка', go: 'newtrip' })),
    ui.section({ children: [
      `<button class="sb-now" data-go="rollcall" data-primary aria-label="Сбор в ${meet.time}: перекличка"><small>${trip.name} · ${trip.day}</small><strong>Сбор через 19 минут</strong><span>${meet.time} ${meet.place} · на месте ${meet.here} из ${trip.people}</span><span class="sb-roll-bar" aria-hidden="true">${Array.from({ length: trip.people }, (_, i) => `<i${i < meet.here ? ' class="is-on"' : ''}></i>`).join('')}</span></button>`,
    ] }),
    ui.section({ title: 'Сегодня', meta: program.sat.label, children: ui.list(program.sat.items.map(([time, title, sub], i) => ui.row({
      lead: ui.leadIcon('', { text: time }), title, sub: i === 0 ? `сейчас · ${sub}` : sub, now: i === 0, ...(i === 0 ? { go: 'rollcall' } : {}),
    }))) }),
    ui.section({ title: 'Скоро', children: ui.list([
      ui.row({ lead: ui.avatar('ПН'), title: trips.pskov.name, sub: `${trips.pskov.by} · даты выбирают опросом, ответили 7 из ${trips.pskov.people}`, end: { badge: 'через 27 дней' }, go: 'pskov' }),
    ]) }),
    ui.section({ title: 'Прошедшие', meta: '3', children: ui.list(trips.past.map((t) => ui.row({ lead: ui.leadIcon('route', { round: true }), title: `${t.name} · ${t.dates}`, sub: t.sub }))) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'trips' }),
});
