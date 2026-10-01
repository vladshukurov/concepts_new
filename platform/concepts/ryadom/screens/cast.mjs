import { THEME, map } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'cast', theme: THEME, className: 'ry-dark',
  body: [
    `<div class="ry-tv">${map()}</div>`,
    '<div class="ry-tv-copy"><h1>Субботний лонгран по набережной</h1><p>03:04 из 8:12 · телевизор в гостиной</p></div>',
    ui.progress({ fillClass: 'ry-w-30', white: true }),
    `<div class="ry-glass-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: 'Назад на 15 секунд' })}${ui.iconButton({ icon: 'pause', fill: true, label: 'Пауза', toast: 'Показ на паузе' })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: 'Вперёд на 15 секунд' })}</div>`,
    ui.actions([ui.button({ label: 'Остановить показ', variant: 'secondary', block: true, go: 'videos', primary: true })]),
  ],
});
