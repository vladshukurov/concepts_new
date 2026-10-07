import { THEME } from './_shared.mjs';
import { project } from '../model.mjs';

/* Камера чата: снять в «Северную верфь»; в режиме «Скан» бумага в кадре распознаётся и уходит в чат PDF */
export default (ui) => ui.screen({
  id: 'camera', theme: THEME, className: 'lt-cam',
  body: [
    ui.nav({ title: project.name, back: 'close', trailing: ui.iconButton({ icon: 'zap', label: 'Вспышка', toast: 'Вспышка выключена' }) }),
    '<div class="lt-viewfinder ph on-dark"></div>',
    `<button class="lt-qr-found" data-toast="Акт № 14 отправлен в чат PDF|project" aria-label="Отправить скан в чат">${ui.icon('scan-line')}<span><strong>Найден документ: акт № 14, 2 страницы</strong><span>Отправить в чат PDF</span></span></button>`,
    `<div class="lt-modes" role="group" aria-label="Режим съёмки"><button data-toast="Видео со звуком" aria-label="Видео">Видео</button><button data-toast="Режим фото" aria-label="Фото">Фото</button><button class="is-on" aria-pressed="true" data-toast="Скан бумаги в PDF" aria-label="Скан">Скан</button></div>`,
    `<div class="lt-cam-row"><button class="lt-cam-thumb ph on-dark" data-go="attach" aria-label="Недавние кадры"></button><button class="lt-shutter" data-toast="Скан отправлен в «${project.name}»|project" aria-label="Снять"><span></span></button><button class="lt-cam-flip" data-toast="Фронтальная камера" aria-label="Сменить камеру">${ui.icon('repeat-2')}</button></div>`,
  ],
});
