import { THEME, album, tempoStats, sessionRow } from './_shared.mjs';
import { pieces, sessions, notes, beats, lessons } from '../model.mjs';
import { dateLabel } from '../../../kernel/world.mjs';

/* Пьеса как карточка альбома: «Слушать», темп было → сейчас, занятия, ноты. Здесь же — съёмка нот */
const p = pieces.romance;
export default (ui) => ui.screen({
  id: 'piece', theme: THEME,
  body: [
    ui.nav({ title: '', trailing: ui.iconButton({ icon: 'heart-plus', label: 'Нравится', toggle: 'on' }) }),
    ui.scroll([
      album(p, `${p.inst} · ${lessons(p.count)} · с ${dateLabel(p.since)}`),
      ui.actions([
        ui.button({ label: 'Слушать', icon: 'play', fillIcon: true, block: true, go: 'player', primary: true }),
        ui.button({ label: 'Сфотографировать ноты', icon: 'camera', variant: 'secondary', block: true, ask: 'camera|capture|piece' }),
      ]),
      ui.denied('camera'),
      tempoStats(p),
      ui.section({ children: ui.list([
        ui.row({ lead: `<span class="ui-thumb mt-ico is-accent">${ui.icon('arrow-left-right')}</span>`, title: 'Вчера и сегодня', sub: `${sessions.yesterday.bpm} и ${beats(sessions.today.bpm)} · послушать подряд`, go: 'compare' }),
      ]) }),
      ui.section({ title: 'Занятия', meta: 'новые сверху', children: ui.list([
        sessionRow(sessions.today, { piece: false }), sessionRow(sessions.yesterday, { piece: false }), sessionRow(sessions.first, { piece: false }),
      ]) }),
      ui.section({ title: 'Ноты', meta: 'страница 1 из «Файлов»', children: [
        ui.list([ui.row({ thumb: notes.shot, title: notes.shotTitle, sub: 'сфотографировано сегодня', go: 'notes', shownAfter: 'camera' })]),
        `<div class="mt-notes"><span class="mt-art mt-n3"></span></div>`,
      ] }),
    ]),
  ],
});
