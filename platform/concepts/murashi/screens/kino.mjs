import { soundScreen } from './_shared.mjs';
import { kino } from '../model.mjs';

/* Новый звук из формы: фото того же дня из «Фото», если его выбрали */
export default (ui) => soundScreen(ui, kino, {
  sub: `${kino.where} · добавлено сейчас`,
  photo: `<div class="ms-spot-art ms-ico is-lg" data-hide-granted="photos">${ui.icon(kino.icon)}</div><div class="ms-spot-art ${kino.picked} perm-hidden" data-show-granted="photos"></div>`,
});
