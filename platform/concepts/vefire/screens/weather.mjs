import { THEME, issueRow } from './_shared.mjs';
import { rubricHead } from './_rubric.mjs';
import { rubrics, rMeta, nIssues, issues, iMeta, reactLine } from '../model.mjs';

/* Рубрика «Погода от Сони»: свежий выпуск можно сохранить в «Фото» — отправить бабушке */
const r = rubrics.weather;
const w = issues.weather;
export default (ui) => ui.screen({
  id: 'weather', theme: THEME, className: 'vf-wrap',
  body: [
    ui.nav({ title: r.title }),
    ui.scroll([
      ...rubricHead(ui, r, rMeta(r)),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('download', { round: true, accent: true }), title: 'Сохранить выпуск в «Фото»', sub: `«${w.title}» · ${w.dur}`, ask: 'photosadd|weather|weather' }),
        ui.row({ shownAfter: 'photosadd', lead: ui.leadIcon('images', { round: true, accent: true }), title: `${w.title} · ${w.dur} в «Фото»`, sub: 'Альбом «В эфире» · 1080p · 64 МБ' }),
      ]) }),
      ui.section({ title: 'Выпуски', meta: nIssues(r.issues), children: ui.list([
        issueRow(ui, w, `${iMeta(w)} · ${reactLine(w)}`),
        issueRow(ui, issues.fog, `${iMeta(issues.fog)} · ${reactLine(issues.fog)}`),
      ]) }),
    ]),
  ],
});
