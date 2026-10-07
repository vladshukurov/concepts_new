import { THEME } from './_shared.mjs';
import { tasks } from '../model.mjs';

/* Съёмка ответа: задание поверх видоискателя, 10 секунд, звук пишется */
export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'vy-camera',
  body: [
    '<div class="vy-camera-view ph on-dark"></div><div class="vy-camera-shade"></div>',
    `<header class="vy-camera-head">${ui.iconButton({ icon: 'x', label: 'Закрыть', look: 'glass', back: true })}<span class="vy-rec">0:10</span>${ui.iconButton({ icon: 'switch-camera', label: 'Сменить камеру', look: 'glass', toast: 'Основная камера' })}</header>`,
    `<div class="vy-camera-task"><small>Раунд 1 · ваш ответ</small><strong>${tasks.desk}</strong></div>`,
    `<div class="vy-camera-meta"><span>${ui.icon('mic')}Звук</span><span>Фронтальная · 10 секунд</span></div>`,
    `<div class="vy-camera-bar"><span class="vy-spacer"></span><button class="vy-shutter" data-primary data-go="vote" aria-label="Снять ответ в раунд"><span></span></button><span class="vy-spacer"></span></div>`,
  ],
});
