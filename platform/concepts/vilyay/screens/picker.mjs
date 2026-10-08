import { THEME } from './_shared.mjs';

/* Выбор из «Фото»: видео щенка весны 2025 уходят в сезон «Щенок» */
const ITEMS = [['0:27', true], ['0:41'], [''], ['1:05', true], [''], ['0:09'], [''], ['0:33'], [''], ['0:18'], [''], ['']];
/* Первый — выбранный «Рыжик-щенок на первой прогулке», соседние кадры не повторяются */
const ART = ['d3', 'd5', 'd2', 'd1', 'd8', 'd4', 'd5', 'd3', 'd7', 'd6', 'd1', 'd5'];
export default (ui) => ui.screen({
  id: 'picker', theme: THEME, className: 'vl-picker',
  body: ui.photoPicker({
    section: 'Апрель 2025', addLabel: 'Добавить',
    tiles: ITEMS.map(([d, on], i) => ({ art: ART[i], ...(d ? { duration: d } : {}), ...(on ? { picked: i ? 2 : 1 } : {}) })),
    add: { back: true, primary: true },
  }),
});
