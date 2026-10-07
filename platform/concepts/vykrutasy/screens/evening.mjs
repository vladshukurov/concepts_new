import { THEME } from './_shared.mjs';
import { lenaEvening, highlights, hlMeta, tasks, highlightsTotal, people } from '../model.mjs';

/* Страница вечера как канал: обложка, хозяйка, игроки, хайлайты и раунды */
const ev = lenaEvening;
const HL = ['cat', 'prom', 'mine', 'monday'].map((k) => highlights[k]);
export default (ui) => ui.screen({
  id: 'evening', theme: THEME, className: 'vy-wrap',
  body: [
    ui.nav({ title: 'Вечер' }),
    ui.scroll([
      `<div class="vy-banner ${ev.art}"></div>`,
      ui.section({ children: [
        `<div class="vy-channel">${ui.avatar(people.lena.initial, { large: true })}<span class="ui-row-text"><strong>${ev.title}</strong><span>${ev.meta} · ${ev.day}</span></span></div>`,
        ui.usersStack({ faces: ['ЛО', 'ДЧ', 'ОМ'], text: 'Лена, Дима, Оля, Илья, Гоша и вы' }),
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('download', { round: true, accent: true }), title: 'Сохранить хайлайты вечера в «Фото»', sub: `4 ответа · ${highlightsTotal} одним роликом`, ask: 'photosadd|evening|evening' }),
        ui.row({ shownAfter: 'photosadd', lead: ui.leadIcon('images', { round: true, accent: true }), title: `Хайлайты · ${highlightsTotal} в «Фото»`, sub: 'Альбом «Выкрутасы» · 1080p · 96 МБ' }),
      ]) }),
      ui.section({ children: ui.chips([
        { label: 'Хайлайты', on: true, filter: 'hl' },
        { label: 'Раунды', filter: 'rounds' },
      ]) }),
      ...HL.map((h) => ui.section({ tags: ['hl'], children: ui.videoCard({ art: h.art, duration: h.dur, go: h.id, avatar: ui.avatar(h.who.initial), title: h.title, sub: hlMeta(h) }) })),
      ui.section({ tags: ['rounds'], className: 'is-filtered-out', title: 'Раунды', meta: `${ev.answers} ответов`, children: ui.list(ev.rounds.map((r) =>
        ui.row({ lead: ui.leadIcon('', { text: String(r.n) }), title: tasks[r.task], sub: `${r.answers} ответов${r.task === 'prom' ? ' · из галереи' : ''}` }))) }),
    ]),
  ],
});
