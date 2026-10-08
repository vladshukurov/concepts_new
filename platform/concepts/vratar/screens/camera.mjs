import { THEME } from './_shared.mjs';
import { liveMatch } from '../model.mjs';

/* Съёмка момента со скамейки: табло поверх видоискателя, звук пишется */
export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'vr-camera',
  body: [
    '<div class="vr-camera-view f1"></div><div class="vr-camera-shade"></div>',
    `<header class="vr-camera-head">${ui.iconButton({ icon: 'x', label: 'Закрыть', look: 'glass', back: true })}<span class="vr-rec">0:12</span>${ui.iconButton({ icon: 'switch-camera', label: 'Сменить камеру', look: 'glass', toast: 'Основная камера' })}</header>`,
    `<div class="vr-camera-match"><small>${liveMatch.title} · ${liveMatch.score}</small><strong>${liveMatch.minute}-я минута · момент уйдёт в ленту матча</strong></div>`,
    `<div class="vr-camera-meta"><span>${ui.icon('mic')}Звук</span><span>Основная камера · 4K</span></div>`,
    '<div class="vr-camera-bar"><span class="vr-spacer"></span><button class="vr-shutter" data-primary data-go="moment" aria-label="Остановить и сохранить момент"><span></span></button><span class="vr-spacer"></span></div>',
  ],
});
