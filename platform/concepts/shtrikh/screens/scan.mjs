import { THEME } from './_shared.mjs';
import { exhibit } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'scan', theme: THEME, className: 'sh-cam',
  body: [
    ui.nav({ title: '', back: 'close' }),
    '<div class="sh-viewfinder ph on-dark"></div><span class="sh-frame is-qr"></span>',
    '<p class="sh-caption">Наведите на код со стойки</p>',
    `<button class="sh-shutter" data-toast="Распознано: ${exhibit.network}|exhibit" data-primary aria-label="Считать код"><span></span></button>`,
  ],
});
