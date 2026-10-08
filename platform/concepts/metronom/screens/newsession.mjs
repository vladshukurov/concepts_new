import { THEME, pieceLead } from './_shared.mjs';
import { sessions, beats } from '../model.mjs';

/* Новое занятие: пьеса, запись из «Диктофона» или «Файлов», темп, сколько играла, заметка */
const s = sessions.today;
const input = (value, label, mode = 'text') => `<input class="mt-input" value="${value}" aria-label="${label}" inputmode="${mode}"/>`;
export default (ui) => ui.screen({
  id: 'newsession', theme: THEME,
  body: [
    ui.nav({ title: 'Новое занятие', back: 'cancel' }),
    ui.scroll([
      ui.group({ label: 'Пьеса', cells: [ui.cell({ lead: pieceLead(s.piece), title: s.piece.title, sub: `${s.piece.inst} · в прошлый раз ${beats(sessions.yesterday.bpm)}` })] }),
      ui.segments([{ label: 'Из «Диктофона»', on: true, filter: 'memos' }, { label: 'Из «Файлов»', filter: 'files' }]),
      ui.group({ label: 'Запись', cells: [
        ui.cell({ icon: 'mic', title: s.rec, sub: `сегодня, ${s.time} · ${s.dur}`, check: true }),
        ui.cell({ icon: 'mic', title: 'Новая запись 46', sub: 'вчера, 20:10 · 3:30' }),
      ] }),
      ui.group({ label: 'Занятие', cells: [
        ui.cell({ title: input(s.bpm, 'Темп', 'numeric'), sub: 'Темп, ударов в минуту' }),
        ui.cell({ title: input(`${s.mins} мин`, 'Сколько занималась'), sub: 'Сколько занималась' }),
        ui.cell({ title: input(s.note, 'Заметка себе'), sub: 'Заметка себе' }),
      ] }),
      ui.actions(ui.button({ label: 'Сохранить занятие', block: true, go: 'today', primary: true })),
    ]),
  ],
});
