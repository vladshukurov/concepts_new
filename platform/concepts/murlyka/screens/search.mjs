import { THEME, recRow } from './_shared.mjs';
import { recs } from '../model.mjs';

/* Поиск по своим записям */
export default (ui) => ui.screen({
  id: 'search', theme: THEME,
  body: [
    ui.nav({ title: 'Поиск' }),
    ui.scroll([
      `<div class="mr-search">${ui.search({ value: 'сказ', placeholder: 'Колыбельные и сказки', clear: { toast: 'Запрос очищен' } })}</div>`,
      ui.section({ title: 'Сказки', children: ui.list([recRow(recs.kolobok), recRow(recs.ezhik)]) }),
    ]),
  ],
});
