import { THEME, ico, pieceLead } from './_shared.mjs';
import { me, totals, week, weekMins, pieces, sessions, metro, beats, lessons } from '../model.mjs';

/* Профиль в грамматике ВК Музыки: кто занимается, неделя по дням, рекорд темпа и свои разделы */
const R = pieces.romance;
const E = pieces.etude;
const bars = week.map(([d, m]) => `<span class="${m === null ? 'is-next' : d === 'чт' ? 'is-now' : ''}"><small>${m ?? ''}</small><i class="mt-d${m || 0}"></i><b>${d}</b></span>`).join('');
const hm = `${Math.floor(weekMins / 60)} ч ${weekMins % 60} мин`;
export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: [
    ui.nav({ title: '', trailing: `<span class="mt-head-acts">${ui.textButton({ label: 'Изменить', go: 'account' })}${ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })}</span>` }),
    ui.scroll([
      `<div class="mt-me">${ui.avatar(me.initial, { large: true })}<h1 class="ui-title">${me.name}</h1><p class="ui-sub">Гитара и фортепиано · занимаюсь с августа</p></div>`,
      ui.stats([[totals.sessions, 'занятия'], [totals.hours, 'часов'], [totals.pieces, 'пьесы']]),
      ui.section({ title: 'Эта неделя', meta: `${hm} · 4 дня подряд`, children: [
        `<div class="mt-days" aria-label="Минуты занятий по дням недели">${bars}</div>`,
        ui.list([
          ui.row({ lead: pieceLead(R), title: `Рекорд темпа · ${beats(R.bpm)}`, sub: `${R.title} · было ${R.from} две недели назад`, go: R.id }),
          ui.row({ lead: pieceLead(E), title: `Выучено · ${E.title}`, sub: `${beats(E.bpm)} · ${lessons(E.count)}`, go: E.id }),
        ]),
      ] }),
      ui.section({ title: 'Моё', children: ui.list([
        ui.row({ lead: ico('list-music', true), title: 'Пьесы', sub: `${totals.pieces} пьесы · одна выучена`, go: 'pieces' }),
        ui.row({ lead: ico('history'), title: 'Занятия', sub: `${totals.sessions} занятия · последнее сегодня в ${sessions.today.time}`, go: 'sessions' }),
        ui.row({ lead: ico('timer'), title: 'Метроном', sub: `${beats(metro.bpm)} · ${metro.beat}`, go: 'metronome' }),
      ]) }),
    ]),
  ],
});
