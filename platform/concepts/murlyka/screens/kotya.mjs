import { recScreen } from './_shared.mjs';
import { recs } from '../model.mjs';

/* «Котя-коток» без обложки: «Снять обложку» — игрушка или Соня в кадре, снимок сразу встаёт обложкой */
const r = recs.kotya;
export default (ui) => recScreen(ui, r, {
  art: `<div class="mr-album-art mr-ico is-lg" data-hide-granted="camera">${ui.icon('moon')}</div><div class="mr-album-art ${r.shot} perm-hidden" data-show-granted="camera"></div>`,
  extra: [
    ui.actions(ui.button({ label: 'Снять обложку', icon: 'camera', variant: 'secondary', block: true, ask: 'camera|capture|kotya' })),
    ui.denied('camera'),
  ],
});
