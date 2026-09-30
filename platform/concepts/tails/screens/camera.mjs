import { THEME, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'tl-camera',
  body: [
    `<div class="tl-camera-view ${PET.barni}"></div><div class="tl-camera-shade"></div>`,
    ui.nav({ title: '', back: 'close' }),
    `<button class="tl-shutter" data-go="home" aria-label="Снять"><span></span></button>`,
  ],
});
