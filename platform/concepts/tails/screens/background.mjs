import { THEME, PET } from './_shared.mjs';
import { now } from '../model.mjs';

const notif = (time, text) => `<div class="tl-glass tl-notif"><span class="tl-notif-app"><svg><use href="#i-paw-print"/></svg></span><span class="tl-notif-body"><strong><span>Хвосты</span><span>${time}</span></strong>${text}</span></div>`;
export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'tl-lock',
  body: [
    `<div class="tl-lock-time">${now.time}<small>${now.date}</small></div>`,
    `<div class="tl-lock-stack">${notif('9:38', 'Ксения: заберу Трюфеля в 19:15, если задержитесь на площадке')}${notif('9:33', 'Связь пропала во дворе — «Выдержка» догрузится на 62 %')}<div class="tl-glass"><div class="tl-glass-top"><span class="ui-thumb ${PET.loki}"></span><span class="ui-row-text"><strong>Подзыв в парке с отвлечениями</strong><span>Марина Гурьева · Хвосты</span></span></div>${ui.progress({ fillClass: 'tl-w-46', white: true })}${ui.times('6:41', '−7:39')}<div class="tl-glass-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: '6:26' })}${ui.iconButton({ icon: 'pause', fill: true, label: 'Пауза', toast: 'Пауза · 6:41' })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: '6:56' })}</div></div>${ui.button({ label: 'Вернуться к занятию', variant: 'secondary', back: true })}</div>`,
  ],
});
