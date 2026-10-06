import { THEME } from './_shared.mjs';
import { route, now } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'ry-dark ry-lock',
  body: [
    `<div class="ry-lock-time">7:52<small>${now.date}</small></div>`,
    `<div class="ry-glass"><span class="ui-row-text"><strong>${route.name} · ${route.km} км</strong><span>3,5 км · следующий отрезок через 300 м</span></span>${ui.progress({ fillClass: 'ry-w-30', white: true })}<div class="ry-glass-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Повторить подсказку', toast: 'Подсказка повторена' })}${ui.iconButton({ icon: 'pause', fill: true, label: 'Пауза', go: 'player', primary: true })}${ui.iconButton({ icon: 'skip-forward', label: 'Следующий отрезок', toast: 'Следующий отрезок' })}</div></div>`,
  ],
});
