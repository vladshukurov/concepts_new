import { THEME } from './_shared.mjs';
import { trip, meet, people, now } from '../model.mjs';

/* Системная поверхность: экран блокировки. Рассказы Рустама играют с погашенным экраном,
   уведомления показывают отправителя, его инициалы и превью кадра */
export default (ui) => ui.screen({
  id: 'lockscreen', theme: THEME, className: 'ui-lock',
  body: ui.lockScreen({
    time: '9:41', date: now.date[0].toUpperCase() + now.date.slice(1), appIcon: 'route',
    notifications: [
      { initials: trip.initial, title: `Сбор в ${meet.time}`, app: trip.name, text: `${meet.place[0].toUpperCase() + meet.place.slice(1)} · на месте ${meet.here} из ${trip.people}`, time: '9:30', go: 'rollcall', label: 'Напоминание о сборе' },
      { initials: people.marat.initial, title: people.marat.name, text: 'Буду к 10:10, догоню у Кремля', time: '9:22', activate: 'commnotif|chat', label: `Уведомление: ${people.marat.name}` },
      { initials: people.igor.initial, title: people.igor.name, app: trip.name, text: 'Фото · Завтрак до 9:45, кто ещё наверху — спускайтесь', time: '9:12', thumb: 'ph on-dark', activate: 'notifext|trip', label: `Уведомление: ${people.igor.name}` },
    ],
    nowPlaying: { title: 'Кремль: от Спасской башни', sub: `${people.rustam.name} · ${trip.name}`, at: '2:14', left: '−2:23', fillClass: 'sb-fill-48', go: 'lockscreen' },
  }),
});
