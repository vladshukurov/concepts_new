import { THEME } from './_shared.mjs';
import { own } from '../model.mjs';

/* PHPicker: сверху кадры вчерашней пробежки, два уже отмечены */
export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: ui.photoPicker({
    section: `Вчера · ${own.run.span}`, addLabel: 'Добавить 2',
    tiles: Array.from({ length: 15 }, (_, i) => (i < 2 ? { picked: i + 1 } : {})),
    add: { back: true, primary: true },
  }),
});
