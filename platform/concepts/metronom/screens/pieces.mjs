import { THEME, TABS, MINI, pieceRow } from './_shared.mjs';
import { pieces } from '../model.mjs';

/* Пьесы — как «Плейлисты»: чипсы фильтруют на месте, «+» открывает форму новой пьесы */
const { romance, elise, green, etude } = pieces;
export default (ui) => ui.screen({
  id: 'pieces', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Пьесы', ui.iconButton({ icon: 'plus', label: 'Новая пьеса', go: 'newpiece' })),
    ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Гитара', filter: 'guitar' },
      { label: 'Фортепиано', filter: 'piano' },
      { label: 'Выучено', filter: 'done' },
    ]),
    ui.section({ title: 'Разучиваю', children: ui.list([
      pieceRow(romance, ['guitar']), pieceRow(elise, ['piano']), pieceRow(green, ['guitar']),
    ]) }),
    ui.section({ title: 'Выучено', children: ui.list([pieceRow(etude, ['guitar', 'done'])]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'pieces', mini: MINI }),
});
