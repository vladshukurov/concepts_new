import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'uz-cam',
  body: [
    ui.nav({ title: '', back: 'close' }),
    '<div class="uz-viewfinder ph on-dark"></div>',
    '<p class="uz-caption">Патрон и крепление в кадре</p>',
    '<button class="uz-shutter" data-toast="Снимок добавлен к этапу|update" data-primary aria-label="Снять"><span></span></button>',
  ],
});
