import { THEME } from './_shared.mjs';

/* Выбор из «Фото»: ролики за сегодня, выбранный встаёт на точку 4 */
/* Снято сегодня: первый — выбранная дверь 1907 (как на точке), соседние кадры разные */
const ART = ['vz-window', 'vz-yard', 'm1', 'vz-street', 'm6', 'vz-bakery', 'vz-sea', 'm2', 'vz-yard', 'm5', 'vz-street', 'm3'];
const ITEMS = [['0:18', true], ['0:07'], [''], ['1:05'], [''], ['0:09'], [''], ['0:42'], [''], ['0:33'], [''], ['']];
export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: ui.photoPicker({
    section: 'Сегодня',
    tiles: ITEMS.map(([d, on], i) => ({ art: ART[i], ...(d ? { duration: d } : {}), ...(on ? { picked: 1 } : {}) })),
    add: { back: true, primary: true },
  }),
});
