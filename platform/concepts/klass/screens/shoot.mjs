import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'shoot', theme: THEME, className: 'kl-shoot',
  body: [
    ui.nav({ title: 'Фото', back: 'close', trailing: ui.iconButton({ icon: 'zap', label: 'Вспышка', toast: 'Вспышка · авто' }) }),
    '<div class="kl-viewfinder ph on-dark"></div>',
    ui.denied('camera', 'Камера недоступна — публикация собирается из медиатеки', ui.actions([ui.button({ label: 'Выбрать из медиатеки', variant: 'secondary', go: 'picker' })])),
    '<div class="kl-shoot-modes"><span class="is-on">Фото</span><span>Видео</span></div>',
    `<div class="kl-shoot-bar">${ui.iconButton({ icon: 'images', label: 'Медиатека', go: 'picker' })}<button class="kl-shutter" data-primary data-go="compose" aria-label="Снять"><span></span><span class="ui-sr">Снять</span></button>${ui.iconButton({ icon: 'repeat-2', label: 'Фронтальная камера', toast: 'Камера · фронтальная' })}</div>`,
  ],
});
