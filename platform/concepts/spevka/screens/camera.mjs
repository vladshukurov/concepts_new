import { THEME } from './_shared.mjs';
import { choir } from '../model.mjs';

/* Камера чата: снять ноты или зал в «Хор «Камертон»»; QR сети с карточки на вахте уходит в чат карточкой Wi‑Fi */
export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'sp-cam',
  body: [
    ui.nav({ title: choir.name, back: 'close', trailing: ui.iconButton({ icon: 'zap', label: 'Вспышка', toast: 'Вспышка выключена' }) }),
    '<div class="sp-viewfinder ph on-dark"></div>',
    `<button class="sp-qr-found" data-toast="Сеть ${choir.ssid} отправлена в чат|choir" aria-label="Отправить сеть ${choir.ssid} в чат">${ui.icon('wifi')}<span><strong>QR сети: ${choir.ssid}</strong><span>Отправить в чат карточкой</span></span></button>`,
    `<div class="sp-modes" role="group" aria-label="Режим съёмки"><button data-toast="Видео со звуком" aria-label="Видео">Видео</button><button class="is-on" aria-pressed="true" data-toast="Режим фото" aria-label="Фото">Фото</button><button data-toast="Скан нот: страница выровняется" aria-label="Ноты">Ноты</button></div>`,
    `<div class="sp-cam-row"><button class="sp-cam-thumb ph on-dark" data-go="attach" aria-label="Недавние кадры"></button><button class="sp-shutter" data-toast="Фото отправлено в «${choir.name}»|choir" aria-label="Снять"><span></span></button><button class="sp-cam-flip" data-toast="Фронтальная камера" aria-label="Сменить камеру">${ui.icon('repeat-2')}</button></div>`,
  ],
});
