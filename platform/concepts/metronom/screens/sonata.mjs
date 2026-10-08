import { THEME, album, tempoStats } from './_shared.mjs';
import { sonata, notes } from '../model.mjs';

/* Пьеса, только что добавленная формой: темп и цель есть, занятий ещё нет */
const p = sonata;
export default (ui) => ui.screen({
  id: 'sonata', theme: THEME,
  body: [
    ui.nav({ title: '', trailing: ui.iconButton({ icon: 'heart-plus', label: 'Нравится', toggle: 'on' }) }),
    ui.scroll([
      album(p, `${p.inst} · добавлена только что`),
      tempoStats(p),
      ui.section({ title: 'Ноты', shownAfter: 'photos', children: `<div class="mt-notes">${notes.tabs.map((a) => `<span class="${a}"></span>`).join('')}</div>` }),
      ui.placeholder({ icon: 'mic', title: 'Занятий ещё нет', sub: 'Запишите занятие в «Диктофоне» — оно появится здесь с темпом и заметкой' }),
    ]),
  ],
});
