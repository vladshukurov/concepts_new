import { THEME, pieceRow, sessionRow } from './_shared.mjs';
import { pieces, sessions } from '../model.mjs';

/* Поиск по своим пьесам, занятиям и заметкам */
export default (ui) => ui.screen({
  id: 'search', theme: THEME,
  body: [
    ui.nav({ title: 'Поиск' }),
    ui.scroll([
      `<div class="mt-search">${ui.search({ value: 'романс', clear: { label: 'Очистить запрос' } })}</div>`,
      ui.section({ title: 'Пьесы', children: ui.list([pieceRow(pieces.romance)]) }),
      ui.section({ title: 'Занятия', children: ui.list([sessionRow(sessions.today), sessionRow(sessions.yesterday), sessionRow(sessions.first)]) }),
    ]),
  ],
});
