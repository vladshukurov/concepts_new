import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'shoot', theme: THEME, className: 'ry-cam',
  body: [
    ui.nav({ title: '', back: 'close', trailing: ui.iconButton({ icon: 'zap', label: 'Вспышка', toast: 'Вспышка · авто' }) }),
    '<div class="ry-viewfinder ph on-dark"></div>',
    `<div class="ry-modes"><span class="is-on">Фото</span><span>Видео</span></div>`,
    '<button class="ry-shutter" data-go="compose" data-primary aria-label="Снять"><span></span></button>',
  ],
});
