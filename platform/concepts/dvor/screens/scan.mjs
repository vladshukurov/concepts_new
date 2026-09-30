import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'scan', theme: THEME, className: 'dv-cam',
  body: [
    ui.nav({ title: 'QR-код сети', back: 'close' }),
    '<div class="dv-viewfinder ph on-dark"></div><span class="dv-frame"></span>',
    '<p class="dv-cam-caption">Распознано: Dvor-Guest</p>',
    ui.actions([ui.button({ label: 'Подключиться', block: true, toast: 'Сеть Dvor-Guest распознана|guest' })], { className: 'dv-scan-actions' }),
  ],
});
