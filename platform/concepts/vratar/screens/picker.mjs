import { THEME } from './_shared.mjs';

/* Выбор из «Фото»: ролик, который снял и прислал Сева, уходит в моменты матча */
const ITEMS = [['0:12', true], ['0:31'], [''], ['1:05'], [''], ['0:09'], [''], ['0:44'], [''], ['0:18'], [''], ['']];
/* Первый — выбранный «Гол Кости головой» (как на странице матча), соседние кадры не повторяются */
const ART = ['f5', 'f2', 'f3', 'f1', 'f6', 'f4', 'f2', 'f5', 'f3', 'f6', 'f1', 'f4'];
export default (ui) => ui.screen({
  id: 'picker', theme: THEME, className: 'vr-picker',
  body: ui.photoPicker({
    section: '4 октября', addLabel: 'Добавить',
    tiles: ITEMS.map(([d, on], i) => ({ art: ART[i], ...(d ? { duration: d } : {}), ...(on ? { picked: 1 } : {}) })),
    add: { back: true, primary: true },
  }),
});
