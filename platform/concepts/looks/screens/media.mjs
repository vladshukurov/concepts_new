import { THEME, P } from './_shared.mjs';
import { own } from '../model.mjs';

/* Не пикер, а находка: приложение само собрало снимки в полный рост у зеркала
   из всей медиатеки — поэтому нужен полный доступ, а не выбор пары файлов */
const picked = [0, 2, 5];
export default (ui) => ui.screen({
  id: 'media', theme: THEME,
  body: ui.photoPicker({
    section: `Нашлось ${own.mirror.found} · ${own.mirror.since}`, addLabel: `Добавить ${own.mirror.picked}`,
    tiles: Array.from({ length: 12 }, (_, i) => ({ ...(i === 0 ? { art: P.marina } : {}), ...(picked.includes(i) ? { picked: picked.indexOf(i) + 1 } : {}) })),
    add: { go: 'create', primary: true },
  }),
});
