import { THEME } from './_shared.mjs';
import { now, choir, regent, people, today } from '../model.mjs';

/* Системная поверхность: экран блокировки. Уведомления показывают отправителя и его инициалы;
   расширение уведомлений берёт ключ из общей связки и расшифровывает текст */
export default (ui) => ui.screen({
  id: 'lockscreen', theme: THEME, className: 'ui-lock',
  body: ui.lockScreen({
    time: now.time, date: now.date[0].toUpperCase() + now.date.slice(1), appIcon: 'audio-lines',
    notifications: [
      { initials: regent.initial, title: regent.name, text: 'Оля, задержитесь после спевки на 10 минут, пройдём второй куплет', time: '18:58', activate: 'commnotif|regent', label: `Уведомление: ${regent.name}` },
      { initials: regent.initial, title: regent.name, app: 'Альты · партии', text: '«Ой, то не вечер», альты · голосовое 3:40', time: '18:44', activate: 'notifext|altos', label: `Голосовое: ${regent.name}` },
      { initials: people.denis.initial, title: people.denis.name, app: choir.name, text: 'Ключ от зала №2 у вахтёра, заходите со двора', time: '18:31', activate: 'keychain|choir', label: `Уведомление: ${people.denis.name}` },
      { initials: choir.initial, title: `Спевка в ${today.time}`, app: choir.name, text: `Через час · ${choir.dk}, ${choir.hall} · подтвердили ${today.confirmed} из ${choir.people}`, time: '18:30', go: 'balance', label: 'Напоминание о спевке' },
    ],
  }),
});
