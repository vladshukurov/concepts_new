import { THEME } from './_shared.mjs';
import { draft } from '../model.mjs';

/* Съёмка выпуска: видоискатель, «в эфире», звук пишется */
export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'vf-camera',
  body: [
    '<div class="vf-camera-view f-yard"></div><div class="vf-camera-shade"></div>',
    `<header class="vf-camera-head">${ui.iconButton({ icon: 'x', label: 'Закрыть', look: 'glass', back: true })}<span class="vf-rec">● В эфире 0:42</span>${ui.iconButton({ icon: 'switch-camera', label: 'Сменить камеру', look: 'glass', toast: 'Фронтальная камера' })}</header>`,
    `<div class="vf-camera-lower"><small>${draft.rubric.title} · ведёт ${draft.host.short}</small><strong>${draft.title}</strong></div>`,
    `<div class="vf-camera-meta"><span>${ui.icon('mic')}Звук пишется</span><span>Вертикально · 1080p</span></div>`,
    '<div class="vf-camera-bar"><span class="vf-spacer"></span><button class="vf-shutter" data-primary data-go="fresh" aria-label="Остановить и сохранить выпуск"><span></span></button><span class="vf-spacer"></span></div>',
  ],
});
