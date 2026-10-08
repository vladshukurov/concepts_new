import { THEME } from './_shared.mjs';
import { pieces, notes } from '../model.mjs';

/* Снятая страница нот: уже в пьесе, раздел «Ноты» */
const R = pieces.romance;
export default (ui) => ui.screen({
  id: 'notes', theme: THEME,
  body: [
    ui.nav({ title: notes.shotTitle }),
    ui.scroll([
      `<div class="mt-page ${notes.shot}"></div>`,
      ui.section({ children: ui.list([
        ui.row({ lead: `<span class="ui-thumb ${R.art}"></span>`, title: R.title, sub: 'страница добавлена в раздел «Ноты»', go: 'piece' }),
      ]) }),
      ui.actions(ui.button({ label: 'Сфотографировать ещё страницу', icon: 'camera', variant: 'secondary', block: true, go: 'capture' })),
    ]),
  ],
});
