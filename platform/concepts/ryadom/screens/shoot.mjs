import { THEME } from './_shared.mjs';

/* Камера: спуск возвращает в запись, откуда пришли, — кадр уже в «В записи» */
export default (ui) => ui.screen({
  id: 'shoot', theme: THEME, className: 'ry-cam',
  body: [
    ui.nav({ title: '', back: 'close', trailing: ui.iconButton({ icon: 'zap', label: 'Вспышка', toast: 'Вспышка · авто' }) }),
    '<div class="ry-viewfinder ph on-dark"></div>',
    `<div class="ry-modes"><span>Фото</span><span class="is-on">Видео</span></div>`,
    '<button class="ry-shutter" data-back="true" data-primary aria-label="Снять"><span></span></button>',
  ],
});
