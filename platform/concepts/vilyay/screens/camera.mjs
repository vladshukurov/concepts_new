import { THEME } from './_shared.mjs';
import { seasons } from '../model.mjs';

/* Съёмка Рыжика: видоискатель, звук пишется, ролик уйдёт в сезон «Сейчас» */
export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'vl-camera',
  body: [
    '<div class="vl-camera-view d6"></div><div class="vl-camera-shade"></div>',
    `<header class="vl-camera-head">${ui.iconButton({ icon: 'x', label: 'Закрыть', look: 'glass', back: true })}<span class="vl-rec">0:24</span>${ui.iconButton({ icon: 'switch-camera', label: 'Сменить камеру', look: 'glass', toast: 'Основная камера' })}</header>`,
    `<div class="vl-camera-match"><small>Снимаем Рыжика</small><strong>Ролик уйдёт в сезон «${seasons.now.title}»</strong></div>`,
    `<div class="vl-camera-meta"><span>${ui.icon('mic')}Звук</span><span>Основная камера · 4K</span></div>`,
    '<div class="vl-camera-bar"><span class="vl-spacer"></span><button class="vl-shutter" data-primary data-go="moment" aria-label="Остановить и сохранить ролик"><span></span></button><span class="vl-spacer"></span></div>',
  ],
});
