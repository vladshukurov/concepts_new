import { THEME } from './_shared.mjs';

/* Выбор из «Фото»: старые ролики и фото, выбранный уходит в раунд 2 */
const ITEMS = [['0:18', true], ['0:42'], [''], ['1:05'], [''], ['0:09'], [''], ['2:14'], [''], ['0:33'], [''], ['']];
/* Кадры галереи: первый — выбранный «Выпускной 2014» (как в раунде), соседние не повторяются */
const ART = ['m4', 'm6', 'm5', 'm1', 'm3', 'm2', 'm5', 'm2', 'm4', 'm3', 'm1', 'm6'];
export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: ui.photoPicker({
    section: 'Июнь 2014', addLabel: 'Отправить',
    tiles: ITEMS.map(([d, on], i) => ({ art: ART[i], ...(d ? { duration: d } : {}), ...(on ? { picked: 1 } : {}) })),
    add: { back: true, primary: true },
  }),
});
