import { THEME } from './_shared.mjs';

/* Выбор фото для сообщения: недавние кадры, отправка возвращает в тот же чат */
export default (ui) => ui.screen({
  id: 'photopick', theme: THEME,
  body: ui.photoPicker({
    section: 'Недавние', addLabel: 'Отправить 2',
    tiles: Array.from({ length: 15 }, (_, i) => (i === 0 ? { picked: 1 } : i === 2 ? { picked: 2 } : {})),
    add: { back: true },
  }),
});
