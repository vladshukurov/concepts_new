import { THEME } from './_shared.mjs';

/* Съёмка растения: кадр месяца с того же места у окна */
export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'vz-cam',
  body: [
    ui.nav({ title: 'Снять растение', back: 'close' }),
    '<div class="vz-viewfinder ph on-dark"></div>',
    '<p class="vz-cam-caption">Монстера · октябрь — с того же места, что в сентябре</p>',
    `<button class="vz-shutter" data-back data-primary aria-label="Снять растение"><span></span><span class="ui-sr">Снять растение</span></button>`,
    ui.denied('camera'),
  ],
});
