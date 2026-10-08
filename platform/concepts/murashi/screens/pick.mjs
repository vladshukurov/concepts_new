import { THEME } from './_shared.mjs';
import { kino } from '../model.mjs';

/* «Фото»: наверху снимки того же дня, что и запись, выбран двор с кино */
const ART = [kino.picked, 'ms-art ms-c3', 'ms-sea', 'ms-art ms-c5', 'ph', 'ph', 'ph', 'ph', 'ph', 'ph', 'ph', 'ph'];
export default (ui) => ui.screen({
  id: 'pick', theme: THEME,
  body: ui.photoPicker({
    section: `${kino.date} · в этот день записан звук`,
    tiles: ART.map((art, i) => ({ art, ...(i === 0 ? { picked: 1 } : {}) })),
    add: { go: 'new', primary: true },
    cancel: { back: true },
  }),
});
