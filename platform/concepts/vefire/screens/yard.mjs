import { THEME, issueRow } from './_shared.mjs';
import { rubricHead } from './_rubric.mjs';
import { rubrics, rMeta, nIssues, issues, iMeta, reactLine, shot } from '../model.mjs';

/* Рубрика «Новости двора»: новый выпуск после съёмки встаёт первым */
const r = rubrics.yard;
export default (ui) => ui.screen({
  id: 'yard', theme: THEME, className: 'vf-wrap',
  body: [
    ui.nav({ title: r.title }),
    ui.scroll([
      ...rubricHead(ui, r, rMeta(r)),
      ui.section({ children: ui.actions(ui.button({ label: 'Новый выпуск', icon: 'video', block: true, go: 'newissue' }), { className: 'vf-actions' }) }),
      ui.section({ title: 'Выпуски', meta: nIssues(r.issues), children: ui.list([
        ui.row({ shownAfter: 'camera', thumb: `${shot.art} vf-tall`, duration: shot.dur, title: shot.title, sub: shot.meta, go: 'fresh' }),
        issueRow(ui, issues.yard, `${iMeta(issues.yard)} · ${reactLine(issues.yard)}`),
        ui.row({ thumb: 'f-dinner vf-tall', duration: '1:05', title: 'Соседи с пятого этажа устроили ужин во дворе', sub: 'Новости двора · Миша · 29 сентября' }),
      ]) }),
    ]),
  ],
});
