import { THEME, TABS, balanceBars } from './_shared.mjs';
import { choir, today, concert, drill } from '../model.mjs';

/* Репертуар: баланс партий к сегодняшней спевке, разбор своей партии и программа концерта. Кусок играет мини-плеером */
const [a, b] = drill.spot;
export default (ui) => ui.screen({
  id: 'repertoire', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Репертуар', ui.iconButton({ icon: 'calendar-days', label: 'Расписание спевок', go: 'schedule' })),
    ui.section({ children: [
      `<button class="sp-bal-card" data-go="balance" data-primary aria-label="Баланс партий"><span class="sp-sum"><small>Баланс партий · спевка сегодня в ${today.time}</small><strong>Подтвердили ${today.confirmed} из ${choir.people}</strong></span>${balanceBars()}</button>`,
    ] }),
    ui.section({ title: 'Разбор партии · альт', children: ui.list([
      ui.row({ lead: ui.leadIcon('flag', { round: true, accent: true }), title: `${drill.piece} · такты ${a}–${b}`, sub: `Тут сбиваемся · Ирина: «${drill.note}»`, go: 'drill' }),
    ]) }),
    ui.section({ title: `${concert.title} · ${concert.short}`, meta: `${concert.pieces.length} произведений, ${concert.minutes} минут`, children: ui.list([
      ui.row({ lead: ui.leadIcon('history', { round: true }), title: 'Новый порядок: «Щедрик» пятым', sub: `Программа концерта обновлена в ${concert.updated}`, subWrap: true }),
      ...concert.pieces.map(([title, sub, dur], i) => ui.row({ lead: ui.leadIcon('', { text: String(i + 1) }), title, sub: `${sub} · ${dur}` })),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'repertoire', mini: ui.miniPlayer({ face: 'sp-mini-face', title: drill.loop, sub: `${drill.piece} · по кругу · ${drill.loopDur}`, open: { go: 'drill', label: 'Открыть разбор партии' }, playAction: { label: 'Слушать кусок' }, progressClass: 'sp-mini-fill' }) }),
});
