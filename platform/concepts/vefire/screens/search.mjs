import { THEME, issueRow } from './_shared.mjs';
import { issues, iMeta, rubrics, rMeta } from '../model.mjs';

/* Поиск по своим выпускам и рубрикам */
export default (ui) => ui.screen({
  id: 'search', theme: THEME, className: 'vf-wrap',
  body: [
    ui.nav({ title: 'Поиск' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Выпуски, рубрики и места', value: 'двор', clear: { toast: 'Запрос очищен' } }) }),
      ui.section({ title: 'Выпуски', meta: '1 найден', children: ui.list([issueRow(ui, issues.yard, iMeta(issues.yard))]) }),
      ui.section({ title: 'Рубрики', children: ui.list([
        ui.row({ lead: ui.avatar(rubrics.yard.host.initial), title: rubrics.yard.title, sub: rMeta(rubrics.yard), go: rubrics.yard.id }),
      ]) }),
    ]),
  ],
});
