import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'pd-cam',
  body: [
    ui.nav({ title: 'Снять блюдо', back: 'close' }),
    '<div class="pd-viewfinder ph on-dark"></div>',
    '<p class="pd-cam-caption">Естественный свет, без фильтра</p>',
    `<button class="pd-shutter" data-go="post" data-primary aria-label="Снять блюдо"><span></span><span class="ui-sr">Снять блюдо</span></button>`,
    ui.denied('camera'),
  ],
});
