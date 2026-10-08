import { THEME, issueRow } from './_shared.mjs';
import { rubricHead } from './_rubric.mjs';
import { rubrics, rMeta, nIssues, issues, iMeta, reactLine, oldCat } from '../model.mjs';

/* Рубрика «Мусины новости»: в выпуск можно добавить видео, снятое раньше, из «Фото» */
const r = rubrics.cat;
export default (ui) => ui.screen({
  id: 'cat', theme: THEME, className: 'vf-wrap',
  body: [
    ui.nav({ title: r.title }),
    ui.scroll([
      ...rubricHead(ui, r, rMeta(r)),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('images', { round: true, accent: true }), title: 'Добавить в выпуск снятое раньше', sub: 'Видео Муси-котёнка из «Фото»', ask: 'photos|picker|cat' }),
      ]) }),
      ui.denied('photos'),
      ui.section({ shownAfter: 'photos', title: 'Добавлено в выпуск', children: ui.videoCard({ art: oldCat.art, duration: oldCat.dur, className: 'vf-week', title: oldCat.title, sub: oldCat.sub }) }),
      ui.section({ title: 'Выпуски', meta: nIssues(r.issues), children: ui.list([
        issueRow(ui, issues.cat, `${iMeta(issues.cat)} · ${reactLine(issues.cat)}`),
        ui.row({ thumb: 'f-cat3 vf-tall', duration: '0:44', title: 'Муся против нового пылесоса', sub: 'Мусины новости · Соня · 21 сентября' }),
      ]) }),
    ]),
  ],
});
