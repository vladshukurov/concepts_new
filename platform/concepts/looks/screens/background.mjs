import { THEME, P } from './_shared.mjs';
import { episode, now, people, item } from '../model.mjs';

/* Экран блокировки: свой разбор играет с погашенным экраном (audio), а ответ Леры
   приходит уведомлением о сообщении — с её именем и фото (commnotif) */
export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'lk-lock',
  body: [
    `<div class="lk-lock-time">${now.time}<small>${now.date}</small></div>`,
    `<div class="lk-stack"><div class="lk-glass"><button class="lk-glass-top" data-go="talk" aria-label="Открыть разбор"><span class="lk-np-ico">${ui.icon('audio-lines')}</span><span class="ui-row-text"><strong>${episode.title}</strong><span>${episode.author} · Вешалка</span></span></button>${ui.progress({ fillClass: 'lk-w-44', white: true })}${ui.times(episode.at, episode.left)}<div class="lk-glass-controls">${ui.iconButton({ icon: 'rotate-ccw', label: 'Назад на 15 секунд', toast: 'Назад на 15 секунд' })}${ui.iconButton({ icon: 'pause', fill: true, label: 'Пауза', toast: 'Пауза · 12:04' })}${ui.iconButton({ icon: 'rotate-cw', label: 'Вперёд на 15 секунд', toast: 'Вперёд на 15 секунд' })}</div></div>`
    + `<button class="lk-glass lk-notif perm-hidden" data-show-granted="commnotif" data-go="chat" aria-label="Уведомление: ${people.lera.name}"><span class="lk-notif-face ${P.lera}"><i>${ui.icon('message-circle')}</i></span><span class="lk-notif-body"><strong>${people.lera.name}<span>сейчас</span></strong>${item.short[0].toUpperCase() + item.short.slice(1)} принимаю, подкладка целая. Неси к стойке</span></button></div>`,
  ],
});
