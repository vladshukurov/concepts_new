import { THEME } from './_shared.mjs';

/* «Фото»: наверху снимки страниц и скриншоты табов за месяц, выбраны два */
const ART = ['mt-art mt-n2', 'mt-art mt-n3', 'mt-art mt-n1', 'mt-art mt-c4', 'ph', 'mt-art mt-c1', 'ph', 'mt-art mt-c5', 'ph', 'ph', 'ph', 'ph'];
export default (ui) => ui.screen({
  id: 'photopick', theme: THEME,
  body: ui.photoPicker({
    section: 'Ноты и табы · сентябрь и октябрь',
    tiles: ART.map((art, i) => ({ art, ...(i < 2 ? { picked: i + 1 } : {}) })),
    add: { go: 'newpiece', primary: true },
    cancel: { back: true },
  }),
});
