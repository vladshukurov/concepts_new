import { THEME } from './_shared.mjs';

/* Медиатека: снимки монстеры за прошлые месяцы — встают в рост по датам */
export default (ui) => ui.screen({
  id: 'picker', theme: THEME,
  body: [
    ui.photoPicker({
      addLabel: 'Добавить 3 фото', section: 'Монстера · апрель — август · 11 снимков',
      tiles: Array.from({ length: 12 }, (_, i) => ([0, 4, 9].includes(i) ? { picked: [0, 4, 9].indexOf(i) + 1 } : {})),
      add: { back: true, toast: '3 снимка добавлены', primary: true },
    }),
  ],
});
