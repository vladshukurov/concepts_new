import { THEME } from './_shared.mjs';

/* Хайлайт в окне «Картинка в картинке» поверх экрана «Домой» */
export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'ui-hs',
  body: [
    `<section class="vy-pip" aria-label="Картинка в картинке"><div class="vy-pip-frame ph on-dark">${ui.iconButton({ icon: 'maximize', label: 'Вернуть в «Выкрутасы»', look: 'glass', back: true })}<div class="vy-pip-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 10 секунд', toast: 'Назад на 10 секунд' })}${ui.iconButton({ icon: 'pause', fill: true, label: 'Пауза', toast: 'Пауза на 0:04' })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 10 секунд', toast: 'Вперёд на 10 секунд' })}</div>${ui.progress({ fillClass: 'vy-p33', white: true })}</div></section>`,
    `<div class="ui-hs-apps">${['Сообщения', 'Фото', 'Камера', 'Карты', 'Почта', 'Заметки', 'Погода'].map((x) => `<span class="ui-hs-app"><i></i>${x}</span>`).join('')}<button class="ui-hs-app is-ours" data-back aria-label="Выкрутасы"><i>${ui.icon('tv')}</i>Выкрутасы</button></div>`,
  ],
});
