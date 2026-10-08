import { THEME } from './_shared.mjs';
import { sounds } from '../model.mjs';

/* Камера: снять место, где записан звук, — кадр сразу встаёт фото «Утра в пекарне» */
const x = sounds.pekarnya;
export default (ui) => ui.screen({
  id: 'capture', theme: THEME, className: 'ms-capture',
  body: [
    `<div class="ms-camera ${x.shot}"></div><div class="ms-camera-shade"></div>`,
    ui.nav({ title: `Место · ${x.title}`, back: 'close', over: true }),
    `<div class="ms-frame"></div><p class="ms-cam-label">${x.where}</p>`,
    `<div class="ms-capture-foot"><button class="cam-shutter" data-go="pekarnya" data-primary aria-label="Снять место"></button></div>`,
  ],
});
