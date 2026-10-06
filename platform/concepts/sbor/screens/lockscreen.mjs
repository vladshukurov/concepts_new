import { THEME } from './_shared.mjs';
import { trip, meet, people, now } from '../model.mjs';

/* Системная поверхность: экран блокировки. Рассказы Рустама играют с погашенным экраном,
   уведомления показывают отправителя, его инициалы и превью кадра */
const note = (ui, { ini, who, where, text, time, thumb, a, label }) => `<button class="sb-notif"${a} aria-label="${label}"><span class="sb-notif-face is-initial ${ui.hue(ini)}">${ini}<i>${ui.icon('route')}</i></span><span class="sb-notif-body"><span class="sb-notif-top"><strong>${who}</strong><span>${time}</span></span>${where ? `<span class="sb-notif-where">${where}</span>` : ''}<span class="sb-notif-text">${text}</span></span>${thumb ? '<span class="sb-notif-thumb ph on-dark"></span>' : ''}</button>`;
export default (ui) => ui.screen({
  id: 'lockscreen', theme: THEME, className: 'sb-lock',
  body: [
    `<div class="sb-lock-clock"><span>${now.date[0].toUpperCase() + now.date.slice(1)}</span><strong>9:41</strong></div>`,
    `<div class="sb-np" role="group" aria-label="Сейчас играет"><span class="sb-np-face is-initial ${ui.hue(people.rustam.initial)}">${people.rustam.initial}</span><span class="sb-np-text"><strong>Кремль: от Спасской башни</strong><span>${people.rustam.name} · ${trip.name}</span></span><div class="sb-np-bar" aria-hidden="true"><i></i></div><div class="sb-np-times"><span>2:14</span><span>−2:23</span></div><div class="sb-np-ctl"><button data-toast="Назад на 15 секунд" aria-label="Назад на 15 секунд">${ui.icon('rotate-ccw')}</button><button data-toast="Пауза" aria-label="Пауза">${ui.icon('pause', { fill: true })}</button><button data-toast="Следующее голосовое" aria-label="Следующее голосовое">${ui.icon('skip-forward')}</button></div></div>`,
    `<div class="sb-notifs">${[
      note(ui, { ini: trip.initial, who: `Сбор в ${meet.time}`, where: trip.name, text: `${meet.place[0].toUpperCase() + meet.place.slice(1)} · на месте ${meet.here} из ${trip.people}`, time: '9:30', a: ' data-go="rollcall"', label: 'Напоминание о сборе' }),
      note(ui, { ini: people.marat.initial, who: people.marat.name, text: 'Буду к 10:10, догоню у Кремля', time: '9:22', a: ' data-activate="commnotif|chat"', label: `Уведомление: ${people.marat.name}` }),
      note(ui, { ini: people.igor.initial, who: people.igor.name, where: trip.name, text: 'Фото · Завтрак до 9:45, кто ещё наверху — спускайтесь', time: '9:12', thumb: true, a: ' data-activate="notifext|trip"', label: `Уведомление: ${people.igor.name}` }),
    ].join('')}</div>`,
  ],
});
