import { THEME } from './_shared.mjs';

/* Выбор снимков в хронику: недавние кадры, шесть уже отмечены */
export default (ui) => ui.screen({
  id: 'chronicle', theme: THEME,
  body: ui.photoPicker({
    section: 'Хроника квартиры', addLabel: 'Добавить 6',
    tiles: Array.from({ length: 15 }, (_, i) => (i < 4 ? { picked: i + 1 } : i >= 9 && i < 11 ? { picked: i - 5 } : {})),
    add: { toast: '6 кадров добавлено в хронику' },
  }),
});
