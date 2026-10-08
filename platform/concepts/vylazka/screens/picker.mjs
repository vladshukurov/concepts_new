import { THEME } from './_shared.mjs';
import { lastTrip } from '../model.mjs';

/* Выбор из «Фото»: ролик, который снял и прислал Костя, уходит в фильм похода */
const ITEMS = [['0:26', true], ['0:41'], [''], ['1:05'], [''], ['0:09'], [''], ['0:33'], [''], ['0:18'], [''], ['']];
/* Первый — выбранный «Ручей у спуска к карьеру» (как на странице вылазки) */
const ART = ['v6', 'v3', 'v1', 'v2', 'v4', 'v8', 'v9', 'v6', 'v7', 'v3', 'v5', 'v2'];
export default (ui) => ui.screen({
  id: 'picker', theme: THEME, className: 'vy-picker',
  body: ui.photoPicker({
    section: lastTrip.day, addLabel: 'Добавить',
    tiles: ITEMS.map(([d, on], i) => ({ art: ART[i], ...(d ? { duration: d } : {}), ...(on ? { picked: 1 } : {}) })),
    add: { back: true, primary: true },
  }),
});
