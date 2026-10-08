import { recScreen } from './_shared.mjs';
import { snow } from '../model.mjs';

/* Новая запись из формы: файл от бабушки Нины, обложка из «Фото», если её выбрали */
export default (ui) => recScreen(ui, snow, {
  sub: `${snow.voice.who} ${snow.voice.verb} · добавлено сейчас`,
  art: `<div class="mr-album-art mr-ico is-lg" data-hide-granted="photos">${ui.icon('book-open')}</div><div class="mr-album-art ${snow.picked} perm-hidden" data-show-granted="photos"></div>`,
});
