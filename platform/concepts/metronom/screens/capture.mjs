import { THEME } from './_shared.mjs';
import { pieces } from '../model.mjs';

/* Камера: страница нот на пюпитре в рамке, спуск — страница встаёт в пьесу */
export default (ui) => ui.screen({
  id: 'capture', theme: THEME, className: 'mt-capture',
  body: [
    `<div class="mt-camera mt-art mt-n1"></div><div class="mt-camera-shade"></div>`,
    ui.nav({ title: `Ноты · ${pieces.romance.title}`, back: 'close', over: true }),
    `<div class="mt-frame"></div><p class="mt-cam-label">страница 2 · держите телефон ровно</p>`,
    `<div class="mt-capture-foot"><button class="cam-shutter" data-go="notes" data-primary aria-label="Сфотографировать страницу"></button></div>`,
  ],
});
