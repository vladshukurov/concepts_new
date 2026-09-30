import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'kl-lock',
  body: [
    '<div class="kl-lock-time">9:41<small>пятница, 12 сентября</small></div>',
    `<div class="kl-glass"><div class="kl-glass-top"><span class="ui-thumb ph"></span><span class="ui-row-text"><strong>Собрание 4 сентября</strong><span>Сотки · 21:30 из 48:20</span></span></div>${ui.progress({ fillClass: 'kl-w-44', white: true })}${ui.times('21:30', '−26:50')}<div class="kl-glass-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: 'Назад на 15 секунд' })}${ui.iconButton({ icon: 'pause', fill: true, label: 'Пауза', sr: 'Пауза', go: 'player', primary: true })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: 'Вперёд на 15 секунд' })}</div></div>`,
  ],
});
