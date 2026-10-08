import { THEME } from './_shared.mjs';
import { song } from '../model.mjs';

/* Новая мелодия: запись-источник, название, вид — дальше обрезка в редакторе */
const input = (value, label) => `<input class="md-input" value="${value}" aria-label="${label}"/>`;
export default (ui) => ui.screen({
  id: 'newtone', theme: THEME,
  body: [
    ui.nav({ title: 'Новая мелодия', back: 'cancel' }),
    ui.scroll([
      ui.segments([{ label: 'Из «Диктофона»', on: true, filter: 'memos' }, { label: 'Из «Файлов»', filter: 'files' }]),
      ui.section({ tags: ['memos'], children: ui.group({ label: 'Запись', cells: [
        ui.cell({ icon: 'mic', title: song.rec, sub: `сегодня, 20:52 · ${song.total}`, check: true }),
        ui.cell({ icon: 'mic', title: 'Новая запись 51', sub: 'вчера, 18:30 · 1:12' }),
        ui.cell({ icon: 'mic', title: 'Новая запись 50', sub: '5 октября · 0:09' }),
      ] }) }),
      ui.section({ tags: ['files'], className: 'is-filtered-out', children: ui.group({ label: 'Файл', cells: [
        ui.cell({ icon: 'folder', title: 'Репетиция 6 октября.m4a', sub: '14:22 · уже есть «Репетиция · припев»' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Мелодия', cells: [
        ui.cell({ title: input(song.title, 'Название мелодии'), sub: 'Название' }),
        ui.cell({ icon: 'scissors', title: 'Фрагмент', value: `${song.from}–${song.to}` }),
      ] }) }),
      ui.actions(ui.button({ label: 'Вырезать мелодию', icon: 'scissors', block: true, go: 'song', primary: true })),
    ]),
  ],
});
