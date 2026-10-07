import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: [
    ui.photoPicker({
      addLabel: 'Добавить 2 фото',
      tiles: Array.from({ length: 12 }, (_, i) => (i < 2 ? { picked: i + 1 } : {})),
      add: { ask: 'photos|compose|compose', primary: true },
    }),
    ui.denied('photos'),
  ],
});
