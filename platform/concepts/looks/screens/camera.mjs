import { THEME } from './_shared.mjs';

/* Видоискатель: фото у зеркала — затвор, примерка — видео со звуком, поэтому
   микрофон спрашивается здесь, в цепочке с камерой */
export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'lk-cam',
  body: [
    ui.nav({ title: 'Образ в полный рост', back: 'close' }),
    '<div class="lk-viewfinder ph on-dark"></div>',
    ui.denied('mic'),
    `<div class="lk-cam-bar">${ui.button({ label: 'Снять примерку', icon: 'video', variant: 'secondary', ask: 'mic|clip|camera' })}<button class="lk-shutter" data-go="create" data-primary aria-label="Снять"><span></span></button><span></span></div>`,
  ],
});
