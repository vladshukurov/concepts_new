import { THEME, TABS, MINI, sessionRow, ico } from './_shared.mjs';
import { me, pieces, sessions, metro, reminder, tempo, beats, weeks } from '../model.mjs';

/* Главная в грамматике ВК Музыки: обложка «к чему вернуться», последние занятия, полка пьес, мини-плеер */
const t = sessions.today;
const R = pieces.romance;
const card = (ui, p) => ui.card({ art: p.art || 'mt-art mt-noart', title: p.title, sub: tempo(p), go: p.id, label: p.title });
export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    `<section class="ui-hero mt-hero ${R.art}">`
      + ui.top(ui.me({ name: me.short, initial: me.initial }), [
        ui.iconButton({ icon: 'plus', label: 'Новое занятие', go: 'newsession' }),
        ui.iconButton({ icon: 'search', label: 'Поиск', go: 'search' }),
      ])
      + ui.play({ size: 'xl', label: `Слушать занятие · ${R.title}`, go: 'player' })
      + `<button class="mt-hero-copy" data-go="${R.id}" aria-label="${R.title}"><strong class="ui-display">${R.title}</strong><span>сегодня ${beats(t.bpm)} · было ${R.from}, цель ${R.goal}</span></button>`
      + `</section>`,
    ui.section({ shownAfter: 'push', children: ui.list([
      ui.row({ lead: ico('bell', true), title: `Завтра в ${reminder.time} · ${R.title}`, sub: 'напоминание позаниматься' }),
    ]) }),
    ui.section({ title: 'Темп по неделям', meta: `${R.title} · цель ${R.goal}`, children: [
      `<div class="mt-weeks" role="img" aria-label="Темп по неделям: ${weeks.join(', ')}, цель ${R.goal}"><i class="mt-goal"></i>${weeks.map((b, i) => `<span class="${i === weeks.length - 1 ? 'is-now' : ''}"><b class="mt-h${b}"></b><small>${b}</small></span>`).join('')}</div>`,
      ui.list([ui.row({ lead: ico('timer', true), title: `Метроном · ${beats(metro.bpm)}`, sub: `следующий шаг — 104, до цели ${R.goal - metro.bpm}`, go: 'metronome' })]),
    ] }),
    ui.section({ title: 'Последние занятия', more: { label: 'Занятия', go: 'sessions' }, children: ui.list([
      sessionRow(sessions.today), sessionRow(sessions.yesterday), sessionRow(sessions.eliseday),
    ]) }),
    ui.section({ title: 'Разучиваю', more: { label: 'Пьесы', go: 'pieces' }, children: ui.shelf(
      [pieces.romance, pieces.elise, pieces.green, pieces.etude].map((p) => card(ui, p)),
    ) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home', mini: MINI }),
});
