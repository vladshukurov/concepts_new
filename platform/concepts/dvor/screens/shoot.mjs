import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'shoot', theme: THEME, className: 'dv-cam',
  body: [
    ui.nav({ title: 'Фото к заявке', back: 'close' }),
    '<div class="dv-viewfinder ph on-dark"></div>',
    '<p class="dv-cam-caption">Дверь и доводчик в кадре</p>',
    '<button class="dv-shutter" data-toast="Кадр добавлен к заявке|problem" aria-label="Снять"><span></span></button>',
  ],
});
