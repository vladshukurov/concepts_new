import { THEME } from './_shared.mjs';
import { trip, meet, people, programCount, me } from '../model.mjs';

/* Сведения о поездке: всё, что группе нужно кроме переписки */
const crew = [
  [me.initial, `${me.name}`, 'создала поездку · номер 412'],
  [people.lena.initial, people.lena.name, 'номер 412 · в сети'],
  [people.rustam.initial, people.rustam.name, 'ведёт экскурсии · местный'],
  [people.igor.initial, people.igor.name, 'номер 408 · снимает фильм дня'],
  [people.marat.initial, people.marat.name, 'номер 410 · был в 9:24'],
  [people.oleg.initial, people.oleg.name, 'номер 410 · в сети'],
];
export default (ui) => ui.screen({
  id: 'tripinfo', theme: THEME,
  body: [
    ui.nav({ title: '', trailing: ui.textButton({ label: 'Изменить', toast: 'Открыт режим правки' }) }),
    ui.scroll([
      `<div class="sb-head">${ui.avatar(trip.initial, { large: true })}<h1 class="ui-title">${trip.name}</h1><p class="ui-sub">${trip.dates} · ${trip.day} · ${trip.people} участников</p></div>`,
      ui.section({ children: `<div class="sb-acts">${[
        ['message-circle', 'Чат', { back: true }],
        ['list-checks', 'Перекличка', { go: 'rollcall' }],
        ['calendar-days', 'Программа', { go: 'program' }],
        ['images', 'Альбом', { go: 'album' }],
      ].map(([ic, label, a]) => `<button class="sb-act"${a.back ? ' data-back' : ` data-go="${a.go}"`} aria-label="${label}"><span>${ui.icon(ic)}</span>${label}</button>`).join('')}</div>` }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'clock', title: `Сбор в ${meet.time}`, sub: `${meet.place} · перенесён с ${meet.was}`, value: `${meet.here} из ${trip.people}`, go: 'rollcall' }),
        ui.cell({ icon: 'calendar-days', title: 'Программа', sub: 'Кремль в 10:30, катер в Свияжск в 15:00', value: `${programCount} пунктов`, go: 'program' }),
        ui.cell({ icon: 'wifi', title: 'Wi‑Fi отеля', sub: `${trip.hotel} · добавил Игорь из QR`, value: trip.ssid, go: 'wifi' }),
        ui.cell({ icon: 'images', title: 'Альбом поездки', sub: 'Фильм пятницы готов, 3:42', value: `${trip.photos} фото`, go: 'album' }),
        ui.cell({ icon: 'wallet', title: 'Расходы', sub: 'Вы должны Лене 1 240 ₽', value: '61 870 ₽', go: 'expenses' }),
        ui.cell({ icon: 'lock', title: 'Документы', sub: 'Брони, билеты, список группы', value: '7 файлов', ask: 'faceid|docs|tripinfo' }),
      ] }) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'bell', title: 'Напоминать о сборах', sub: 'За 30 минут, с местом и временем', ask: 'push|lockscreen|tripinfo' }),
        ui.cell({ icon: 'headphones', title: 'Рассказы Рустама подряд', sub: '6 голосовых · 23 минуты · Кремль, Свияжск, слобода', activate: 'audio|lockscreen' }),
        ui.cell({ icon: 'link', title: 'Ссылка-приглашение', sub: trip.link, value: '3 вступили', go: 'invite' }),
      ] }) }),
      ui.section({ title: 'Участники', meta: String(trip.people), children: ui.list([
        ...crew.map(([ini, name, sub]) => ui.row({ lead: ui.avatar(ini), title: name, sub, ...(name === people.marat.name ? { go: 'chat' } : name === people.lena.name ? { go: 'lena' } : {}) })),
        ui.row({ lead: ui.leadIcon('list-checks', { round: true, accent: true }), title: `Все ${trip.people} в перекличке`, sub: 'Кто на месте к сбору и кто ещё в пути', go: 'rollcall' }),
        ui.row({ lead: ui.leadIcon('user-plus', { round: true, accent: true }), title: 'Добавить участника', sub: 'Из контактов или по ссылке', go: 'contacts' }),
      ]) }),
    ]),
  ],
});
