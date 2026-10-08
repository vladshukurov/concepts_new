import { THEME } from './_shared.mjs';

/* Выбор из «Фото»: видео Муси-котёнка весны 2024 уходят в выпуск «Мусиных новостей» */
const ITEMS = [['0:23', true], [''], ['0:41'], [''], ['0:09'], [''], ['1:05'], [''], ['0:33'], [''], ['0:18'], ['']];
const ART = ['f-cat2', 'f-eve', 'f-cat3', 'f-fog', 'f-cat', 'f-rain', 'f-kitchen', 'f-yard', 'f-cat2', 'f-dogs', 'f-cat3', 'f-pizza'];
export default (ui) => ui.screen({
  id: 'picker', theme: THEME, className: 'vf-picker',
  body: ui.photoPicker({
    section: 'Март 2024', addLabel: 'Добавить',
    tiles: ITEMS.map(([d, on], i) => ({ art: ART[i], ...(d ? { duration: d } : {}), ...(on ? { picked: 1 } : {}) })),
    add: { back: true, primary: true },
  }),
});
