import { THEME } from './_shared.mjs';
import { weekly, fri, tv } from '../model.mjs';

/* Выпуск недели: показ на телевизоре в пятницу и напоминание о премьере */
export default (ui) => ui.screen({
  id: 'weekly', theme: THEME, className: 'vf-wrap',
  body: [
    ui.nav({ title: 'Выпуск недели' }),
    ui.scroll([
      `<div class="vf-poster ${weekly.art}"><span class="vf-onair">В эфире · №${weekly.n}</span><strong>${weekly.title}</strong><small>${fri.day} · ${fri.time}</small></div>`,
      ui.section({ children: ui.actions(ui.button({ label: 'Смотреть выпуск', icon: 'play', block: true, go: weekly.id, primary: true }), { className: 'vf-actions' }) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('tv', { round: true, accent: true }), title: 'Пятничный выпуск на ТВ', sub: 'Найти телевизор в зале в той же Wi‑Fi', ask: 'localnetwork|weekly|weekly' }),
        ui.row({ shownAfter: 'localnetwork', lead: ui.leadIcon('cast', { round: true, accent: true }), title: tv.name, sub: `${tv.model} · выпуск №${weekly.n} включится ${fri.short} в ${fri.time}`, end: { badge: 'ТВ' } }),
      ]) }),
      ui.denied('localnetwork'),
      ui.section({ children: ui.list([
        ui.reminder({ title: `Напомнить: выпуск в пятницу ${fri.time}`, titleGranted: `Напомним ${fri.short} в ${fri.time}`, sub: 'Позовём всех к телевизору', here: 'weekly' }),
      ]) }),
      ui.section({ title: 'В выпуске', meta: `${weekly.chapters.length} рубрики · ${weekly.dur}`, children: ui.list(weekly.chapters.map((c) => ui.row({
        thumb: `${c.art} vf-tall`, duration: c.dur, title: c.title, sub: c.rubric ? c.rubric.title : `Ведут ${weekly.hosts}`, go: c.go,
      }))) }),
    ]),
  ],
});
