import { THEME } from './_shared.mjs';
import { snow } from '../model.mjs';

/* «Фото»: наверху альбом «Соня», выбран снимок для обложки */
const ART = [snow.picked, 'mr-art mr-c1', 'mr-art mr-c2', 'mr-art mr-c5', 'mr-art mr-c6', 'mr-art mr-c4', 'ph', 'ph', 'ph', 'ph', 'ph', 'ph', 'ph'];
export default (ui) => ui.screen({
  id: 'pick', theme: THEME,
  body: ui.photoPicker({
    section: 'Альбом «Соня» · октябрь',
    tiles: ART.map((art, i) => ({ art, ...(i === 0 ? { picked: 1 } : {}) })),
    add: { go: 'new', primary: true },
    cancel: { back: true },
  }),
});
