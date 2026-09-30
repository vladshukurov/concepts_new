import { THEME, P } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'lk-cam',
  body: [
    ui.nav({ title: 'Образ в полный рост', back: 'close' }),
    `<div class="lk-viewfinder ${P.marina}"></div>`,
    '<button class="lk-shutter" data-go="media" aria-label="Снять"><span></span></button>',
  ],
});
