import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'cast', theme: THEME, className: 'kl-cast',
  body: [
    '<div class="kl-cast-screen ph"></div>',
    '<div class="kl-cast-copy"><h1>Собрание 4 сентября</h1><p>03:04 из 8:12 · телевизор в гостиной</p></div>',
    ui.progress({ fillClass: 'kl-w-38', white: true }),
    `<div class="kl-glass-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: 'Назад на 15 секунд' })}${ui.iconButton({ icon: 'pause', fill: true, label: 'Пауза', sr: 'Пауза', toast: 'Показ приостановлен', primary: true })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: 'Вперёд на 15 секунд' })}</div>`,
    ui.actions([ui.button({ label: 'Остановить показ', variant: 'secondary', block: true, go: 'album' })]),
  ],
});
