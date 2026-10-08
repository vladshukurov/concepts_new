import { soundScreen } from './_shared.mjs';
import { sounds } from '../model.mjs';

/* «Утро в пекарне» записано сегодня без фото: «Снять место» — снимок сразу встаёт фото места */
const x = sounds.pekarnya;
export default (ui) => soundScreen(ui, x, {
  photo: `<div class="ms-spot-art ms-ico is-lg" data-hide-granted="camera">${ui.icon(x.icon)}</div><div class="ms-spot-art ${x.shot} perm-hidden" data-show-granted="camera"></div>`,
  extra: [
    ui.actions(ui.button({ label: 'Снять место', icon: 'camera', variant: 'secondary', block: true, ask: 'camera|capture|pekarnya' })),
    ui.denied('camera'),
  ],
});
