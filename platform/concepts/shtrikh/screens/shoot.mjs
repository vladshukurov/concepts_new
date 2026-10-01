import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'shoot', theme: THEME, className: 'sh-cam',
  body: [
    ui.nav({ title: '', back: 'close' }),
    '<div class="sh-viewfinder sh-s5"></div><span class="sh-frame"></span>',
    '<p class="sh-caption">Рисунок целиком в рамке</p>',
    '<button class="sh-shutter" data-toast="Работа добавлена в черновик|compose" data-primary aria-label="Снять"><span></span></button>',
  ],
});
