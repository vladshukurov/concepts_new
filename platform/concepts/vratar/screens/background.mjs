import { THEME } from './_shared.mjs';
import { best } from '../model.mjs';

/* Лучший момент недели в окне «Картинка в картинке» поверх экрана «Домой» */
export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'ui-hs',
  body: [
    `<section class="vr-pip" aria-label="Картинка в картинке"><div class="vr-pip-frame ${best.art}">${ui.iconButton({ icon: 'maximize', label: 'Вернуть во «Вратарь»', look: 'glass', back: true })}<div class="vr-pip-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 10 секунд', toast: 'Назад на 10 секунд' })}${ui.iconButton({ icon: 'pause', fill: true, label: 'Пауза', toggle: 'play' })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 10 секунд', toast: 'Вперёд на 10 секунд' })}</div>${ui.progress({ fillClass: 'vr-p30', white: true })}</div></section>`,
    `<div class="ui-hs-apps">${['Сообщения', 'Фото', 'Камера', 'Карты', 'Почта', 'Заметки', 'Погода'].map((x) => `<span class="ui-hs-app"><i></i>${x}</span>`).join('')}<button class="ui-hs-app is-ours" data-back aria-label="Вратарь"><i>${ui.icon('trophy')}</i>Вратарь</button></div>`,
  ],
});
