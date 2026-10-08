import { THEME, strip } from './_shared.mjs';
import { hike } from '../model.mjs';

/* Съёмка привала: точка маршрута поверх видоискателя, звук пишется */
export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'vy-cam',
  body: [
    '<div class="vy-cam-view v9"></div><div class="vy-cam-shade"></div>',
    `<header class="vy-cam-head">${ui.iconButton({ icon: 'x', label: 'Закрыть', look: 'glass', back: true })}<span class="vy-rec">0:14</span>${ui.iconButton({ icon: 'switch-camera', label: 'Сменить камеру', look: 'glass', toast: 'Основная камера' })}</header>`,
    `<div class="vy-cam-point"><small>${hike.route.name} · привал</small><strong>Мостки · ${String(hike.km).replace('.', ',')} км · ролик ляжет в главу «${hike.at}»</strong>${strip(hike.route, { done: 2 })}</div>`,
    `<div class="vy-cam-meta"><span>${ui.icon('mic')}Звук</span><span>Основная камера · 4K</span></div>`,
    '<div class="vy-cam-bar"><span class="vy-spacer"></span><button class="vy-shutter" data-primary data-go="halt" aria-label="Остановить и сохранить привал"><span></span></button><span class="vy-spacer"></span></div>',
  ],
});
