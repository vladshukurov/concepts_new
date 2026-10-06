import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'shoot', theme: THEME, className: 'sh-cam',
  body: [
    ui.nav({ title: '', back: 'close' }),
    '<div class="sh-viewfinder ph on-dark"></div><span class="sh-frame"></span>',
    '<p class="sh-caption">Рисунок целиком в рамке</p>',
    '<button class="sh-shutter" data-toast="Зарисовка в черновике|compose" data-primary aria-label="Снять"><span></span></button>',
  ],
});
