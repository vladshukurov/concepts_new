import { THEME } from './_shared.mjs';
import { current } from '../model.mjs';

/* Съёмка задания точки: задание поверх видоискателя, звук пишется, ролик сразу уходит в ленту квеста */
export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'vz-camera',
  body: [
    '<div class="vz-camera-view ph on-dark"></div><div class="vz-camera-shade"></div>',
    `<header class="vz-camera-head">${ui.iconButton({ icon: 'x', label: 'Закрыть', look: 'glass', back: true })}<span class="vz-rec">0:12</span>${ui.iconButton({ icon: 'switch-camera', label: 'Сменить камеру', look: 'glass', toast: 'Фронтальная камера' })}</header>`,
    `<div class="vz-camera-task"><small>Точка ${current.n} · задание</small><strong>${current.task}</strong></div>`,
    `<div class="vz-camera-meta"><span>${ui.icon('mic')}Звук</span><span>Основная камера · 1080p</span></div>`,
    `<div class="vz-camera-bar"><span class="vz-spacer"></span><button class="vz-shutter" data-primary data-go="quest" aria-label="Готово — ролик в квест «Старый город»"><span></span></button><span class="vz-spacer"></span></div>`,
  ],
});
