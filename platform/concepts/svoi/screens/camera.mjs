import { THEME } from './_shared.mjs';
import { family } from '../model.mjs';

/* Камера чата: снять в «Гариповы»; QR с наклейки роутера распознаётся и уходит в чат карточкой Wi‑Fi */
export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'sv-cam',
  body: [
    ui.nav({ title: family.name, back: 'close', trailing: ui.iconButton({ icon: 'zap', label: 'Вспышка', toast: 'Вспышка выключена' }) }),
    '<div class="sv-viewfinder ph on-dark"></div>',
    `<button class="sv-qr-found" data-toast="Сеть ${family.ssid} отправлена в чат|family" aria-label="Отправить сеть ${family.ssid} в чат">${ui.icon('wifi')}<span><strong>QR сети: ${family.ssid}</strong><span>Отправить в чат карточкой</span></span></button>`,
    `<div class="sv-modes" role="group" aria-label="Режим съёмки"><button data-toast="Видео со звуком" aria-label="Видео">Видео</button><button class="is-on" aria-pressed="true" data-toast="Режим фото" aria-label="Фото">Фото</button><button data-toast="Документ: края найдутся сами" aria-label="Документ">Документ</button></div>`,
    `<div class="sv-cam-row"><button class="sv-cam-thumb ph on-dark" data-go="attach" aria-label="Недавние кадры"></button><button class="sv-shutter" data-toast="Фото отправлено в «${family.name}»|family" aria-label="Снять"><span></span></button><button class="sv-cam-flip" data-toast="Фронтальная камера" aria-label="Сменить камеру">${ui.icon('repeat-2')}</button></div>`,
  ],
});
