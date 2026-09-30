import { THEME, P } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'lk-lock',
  body: [
    '<div class="lk-lock-time">9:41<small>вторник, 18 августа</small></div>',
    `<div class="lk-stack"><div class="lk-glass"><div class="lk-glass-top"><span class="ui-thumb ${P.yulia}"></span><span class="ui-row-text"><strong>Разобрать шкаф за один вечер</strong><span>Аня Дёмина · Образы</span></span></div>${ui.progress({ fillClass: 'lk-w-44', white: true })}${ui.times('12:04', '−15:15')}<div class="lk-glass-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: 'Назад на 15 секунд' })}${ui.iconButton({ icon: 'pause', fill: true, label: 'Пауза', toast: 'Пауза · 12:04' })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: 'Вперёд на 15 секунд' })}</div></div><div class="lk-glass lk-notif"><span>${ui.icon('shirt')}</span><span class="lk-notif-body"><strong>Образы<span>9:38</span></strong>Лера Савина ответила на ваш комментарий к клипу</span></div>${ui.button({ label: 'Вернуться к разбору', variant: 'secondary', back: true, primary: true })}</div>`,
  ],
});
