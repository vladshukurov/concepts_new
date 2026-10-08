import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'scan', theme: THEME, className: 'dv-cam',
  body: [
    ui.nav({ title: 'Наклейка роутера', back: 'close' }),
    '<div class="dv-viewfinder ph on-dark"></div><span class="dv-frame"></span>',
    '<p class="dv-cam-caption">Распознано: Polevaya-12-5G</p>',
    ui.actions([ui.button({ label: 'Готово', block: true, toast: 'Сеть Polevaya-12-5G распознана|guest' })], { className: 'dv-scan-actions' }),
  ],
});
