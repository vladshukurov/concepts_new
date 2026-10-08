import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: [
    ui.photoPicker({
      addLabel: 'Добавить 2 фото', section: 'Блюда за неделю · 9 снимков',
      tiles: Array.from({ length: 12 }, (_, i) => (i < 2 ? { picked: i + 1 } : {})),
      add: { back: true, toast: '2 фото добавлены', primary: true },
    }),
  ],
});
