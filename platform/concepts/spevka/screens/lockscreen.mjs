import { THEME } from './_shared.mjs';
import { now, choir, regent, people, today } from '../model.mjs';

/* Системная поверхность: экран блокировки. Уведомления показывают отправителя и его инициалы;
   расширение уведомлений берёт ключ из общей связки и расшифровывает текст, у голосового — превью с прослушиванием */
const note = (ui, { ini, who, where, text, time, audio, a, label }) => `<button class="sp-notif"${a} aria-label="${label}"><span class="sp-notif-face is-initial ${ui.hue(ini)}">${ini}<i>${ui.icon('audio-lines')}</i></span><span class="sp-notif-body"><span class="sp-notif-top"><strong>${who}</strong><span>${time}</span></span>${where ? `<span class="sp-notif-where">${where}</span>` : ''}<span class="sp-notif-text">${text}</span>${audio ? `<span class="sp-notif-audio">${ui.icon('play', { fill: true })}<i></i><span>${audio}</span></span>` : ''}</span></button>`;
export default (ui) => ui.screen({
  id: 'lockscreen', theme: THEME, className: 'sp-lock',
  body: [
    `<div class="sp-lock-clock"><span>${now.date[0].toUpperCase() + now.date.slice(1)}</span><strong>${now.time}</strong></div>`,
    `<div class="sp-notifs">${[
      note(ui, { ini: regent.initial, who: regent.name, text: 'Оля, задержитесь после спевки на 10 минут, пройдём второй куплет', time: '18:58', a: ' data-activate="commnotif|regent"', label: `Уведомление: ${regent.name}` }),
      note(ui, { ini: regent.initial, who: regent.name, where: 'Альты · партии', text: '«Ой, то не вечер», альты', audio: '3:40', time: '18:44', a: ' data-activate="notifext|altos"', label: `Голосовое: ${regent.name}` }),
      note(ui, { ini: people.denis.initial, who: people.denis.name, where: choir.name, text: 'Ключ от зала №2 у вахтёра, заходите со двора', time: '18:31', a: ' data-activate="keychain|choir"', label: `Уведомление: ${people.denis.name}` }),
      note(ui, { ini: choir.initial, who: `Спевка в ${today.time}`, where: choir.name, text: `Через час · ${choir.dk}, ${choir.hall}`, time: '18:00', a: ' data-go="schedule"', label: 'Напоминание о спевке' }),
    ].join('')}</div>`,
  ],
});
