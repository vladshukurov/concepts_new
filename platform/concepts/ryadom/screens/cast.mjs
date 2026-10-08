import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'cast', theme: THEME, className: 'ry-dark',
  body: [
    '<div class="ry-tv ph on-dark"></div>',
    '<div class="ry-tv-copy"><h1>Постановка стопы на темпе</h1><p>0:13 из 0:42 · телевизор в гостиной</p></div>',
    ui.progress({ fillClass: 'ry-w-30', white: true }),
    `<div class="ry-glass-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: 'Назад на 15 секунд' })}${ui.iconButton({ icon: 'pause', fill: true, label: 'Пауза', toggle: 'play' })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: 'Вперёд на 15 секунд' })}</div>`,
    ui.actions([ui.button({ label: 'Остановить показ', variant: 'secondary', block: true, go: 'videos', primary: true })]),
  ],
});
