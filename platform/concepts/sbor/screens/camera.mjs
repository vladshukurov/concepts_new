import { THEME } from './_shared.mjs';
import { trip } from '../model.mjs';

/* Камера чата: снять в «Казань · осень»; QR сети в кадре распознаётся и уходит в чат карточкой Wi‑Fi */
export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'sb-cam',
  body: [
    ui.nav({ title: trip.name, back: 'close', trailing: ui.iconButton({ icon: 'zap', label: 'Вспышка', toast: 'Вспышка выключена' }) }),
    '<div class="sb-viewfinder ph on-dark"></div>',
    `<button class="sb-qr-found" data-back aria-label="Отправить сеть ${trip.ssid} в чат">${ui.icon('wifi')}<span><strong>QR сети: ${trip.ssid}</strong><span>Отправить в чат карточкой</span></span></button>`,
    `<div class="sb-modes" role="group" aria-label="Режим съёмки"><button data-toast="Видео со звуком" aria-label="Видео">Видео</button><button class="is-on" aria-pressed="true" data-toast="Режим фото" aria-label="Фото">Фото</button><button data-toast="Кружок до 60 секунд" aria-label="Кружок">Кружок</button></div>`,
    `<div class="sb-cam-row"><button class="sb-cam-thumb ph on-dark" data-go="attach" aria-label="Недавние кадры"></button><button class="sb-shutter" data-back aria-label="Снять"><span></span></button><button class="sb-cam-flip" data-toast="Фронтальная камера" aria-label="Сменить камеру">${ui.icon('repeat-2')}</button></div>`,
  ],
});
