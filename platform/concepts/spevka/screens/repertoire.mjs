import { THEME, TABS, roll, came } from './_shared.mjs';
import { choir, today, concert, parts, schedule } from '../model.mjs';

/* Репертуар: идущая спевка и кто пришёл, программа концерта, мои партии и расписание. Партия играет мини-плеером */
export default (ui) => ui.screen({
  id: 'repertoire', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Репертуар', ui.iconButton({ icon: 'calendar-days', label: 'Расписание спевок', go: 'schedule' })),
    ui.section({ children: [
      `<button class="sp-now" data-go="rollcall" data-primary aria-label="Спевка идёт: кто пришёл"><small>${choir.name} · спевка идёт с ${today.time}</small><strong>Пришли ${came(today.came, today.cameMe)} из ${choir.people}</strong><span>${choir.dk}, ${choir.hall} · отметиться по сети зала</span>${roll(today.came, choir.people)}</button>`,
    ] }),
    ui.section({ title: `${concert.title} · ${concert.short}`, meta: `${concert.pieces.length} произведений, ${concert.minutes} минут`, children: ui.list([
      ui.row({ lead: ui.leadIcon('history', { round: true }), title: 'Новый порядок: «Щедрик» пятым', sub: `Программа концерта обновлена в ${concert.updated}`, subWrap: true }),
      ...concert.pieces.map(([title, sub, dur], i) => ui.row({ lead: ui.leadIcon('', { text: String(i + 1) }), title, sub: `${sub} · ${dur}` })),
    ]) }),
    ui.section({ title: 'Мои партии · альт', children: ui.list([
      ui.row({ lead: ui.leadIcon('headphones', { round: true, accent: true }), title: 'Мои партии', sub: `${parts.count} записей, ${parts.minutes} минут · от регента, свои и альтов`, go: 'parts' }),
      ui.row({ lead: ui.leadIcon('mic', { round: true, accent: true }), title: 'Альты · партии', sub: 'Чат партии: 3 новых записи', go: 'altos' }),
    ]) }),
    ui.section({ title: 'Спевки', children: ui.list([
      ui.row({ lead: ui.leadIcon('calendar-days', { round: true, accent: true }), title: 'Расписание спевок', sub: `${choir.days} · сводная в субботу в 12:00`, go: 'schedule' }),
      ui.row({ lead: ui.leadIcon('', { text: schedule[1].time }), title: 'Кто придёт на сводную', sub: 'Придут 27 из 32 · 2 не ответили', go: 'rollcall' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'repertoire', mini: ui.miniPlayer({ face: 'sp-mini-face', title: 'Вечерний звон · альты', sub: 'Ирина Павлова · 2:48', open: { go: 'parts' }, playAction: { label: 'Слушать партию', toast: 'Играет «Вечерний звон», альты' }, progressClass: 'sp-mini-fill' }) }),
});
