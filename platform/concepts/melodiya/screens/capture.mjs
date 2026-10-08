import { THEME } from './_shared.mjs';
import { contacts } from '../model.mjs';

/* Камера: постер звонка Андрея — кадр во весь экран, рамка под имя сверху */
export default (ui) => ui.screen({
  id: 'capture', theme: THEME, className: 'md-capture',
  body: [
    `<div class="md-camera md-ph md-andrey"></div><div class="md-camera-shade"></div>`,
    ui.nav({ title: `Постер · ${contacts.andrey.name}`, back: 'close', over: true }),
    `<p class="md-cam-label">снимок встанет во весь экран, когда звонит Андрей</p>`,
    `<div class="md-capture-foot"><button class="cam-shutter" data-go="poster" data-primary aria-label="Снять постер Андрея"></button></div>`,
  ],
});
