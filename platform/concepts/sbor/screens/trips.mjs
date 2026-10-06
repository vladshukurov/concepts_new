import { THEME, TABS } from './_shared.mjs';
import { trip, meet, program, trips, money, pack } from '../model.mjs';

/* Поездки — пульт идущей поездки: что дальше и кто на месте, день лентой, общий кошелёк и вещи.
   Следующая поездка собирается опросом, прошедшие хранят итог: фильм, траты, расчёт */
const packed = pack.filter((p) => p[2]).length;
export default (ui) => ui.screen({
  id: 'trips', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Поездки', ui.iconButton({ icon: 'plus', label: 'Новая поездка', go: 'contacts' })),
    ui.section({ children: [
      `<button class="sb-now" data-go="rollcall" data-primary aria-label="Сбор в ${meet.time}: перекличка"><small>${trip.name} · ${trip.day}</small><strong>Сбор через 19 минут</strong><span>${meet.time} ${meet.place} · на месте ${meet.here} из ${trip.people}</span><span class="sb-roll-bar" aria-hidden="true">${Array.from({ length: trip.people }, (_, i) => `<i${i < meet.here ? ' class="is-on"' : ''}></i>`).join('')}</span></button>`,
      `<div class="sb-acts">${[
        ['list-checks', 'Перекличка', 'rollcall'],
        ['calendar-days', 'Программа', 'program'],
        ['wallet', 'Расходы', 'expenses'],
        ['images', 'Альбом', 'album'],
      ].map(([ic, label, go]) => `<button class="sb-act" data-go="${go}" aria-label="${label}"><span>${ui.icon(ic)}</span>${label}</button>`).join('')}</div>`,
    ] }),
    ui.section({ title: 'Сегодня', meta: program.sat.label, children: ui.list(program.sat.items.map(([time, title, sub], i) => ui.row({
      lead: ui.leadIcon('', { text: time }), title, sub: i === 0 ? `сейчас · ${sub}` : sub, now: i === 0, ...(i === 0 ? { go: 'rollcall' } : {}),
    }))) }),
    ui.section({ title: 'В поездке', children: ui.list([
      ui.row({ lead: ui.leadIcon('wallet', { round: true, accent: true }), title: `Вы должны Лене ${money.owe[0][1]} ₽`, sub: `Всего ${money.total} ₽ · по ${money.each} ₽ с человека · вам должны двое`, go: 'expenses' }),
      ui.row({ lead: ui.leadIcon('luggage', { round: true, accent: true }), title: `Кто что везёт · ${packed} из ${pack.length}`, sub: 'Дождевики на вас · термосы никто не взял', go: 'pack' }),
      ui.row({ lead: ui.leadIcon('wifi', { round: true }), title: `Wi‑Fi ${trip.ssid}`, sub: 'подключились 12 из 16', go: 'wifi' }),
      ui.row({ lead: ui.leadIcon('lock', { round: true }), title: 'Документы', sub: 'Брони, билеты, список группы · 7 файлов', go: 'docs' }),
    ]) }),
    ui.section({ title: 'Скоро', children: ui.list([
      ui.row({ lead: ui.avatar('ПН'), title: trips.pskov.name, sub: `${trips.pskov.by} · даты выбирают опросом, ответили 7 из ${trips.pskov.people}`, end: { badge: 'через 27 дней' }, go: 'lena' }),
    ]) }),
    ui.section({ title: 'Прошедшие', meta: '3', children: ui.list(trips.past.map((t) => ui.row({ lead: ui.leadIcon('route', { round: true }), title: `${t.name} · ${t.dates}`, sub: t.sub }))) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'trips' }),
});
