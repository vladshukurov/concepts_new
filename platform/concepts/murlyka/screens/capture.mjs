import { THEME } from './_shared.mjs';
import { recs } from '../model.mjs';

/* Камера: квадратная рамка под обложку, спуск — снимок встаёт обложкой «Коти-коток» */
const r = recs.kotya;
export default (ui) => ui.screen({
  id: 'capture', theme: THEME, className: 'mr-capture',
  body: [
    `<div class="mr-camera ${r.shot}"></div><div class="mr-camera-shade"></div>`,
    ui.nav({ title: `Обложка · ${r.title}`, back: 'close', over: true }),
    `<div class="mr-frame"></div><p class="mr-cam-label">игрушка или Соня в кадре</p>`,
    `<div class="mr-capture-foot"><button class="cam-shutter" data-go="kotya" data-primary aria-label="Снять обложку"></button></div>`,
  ],
});
