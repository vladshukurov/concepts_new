import { THEME } from './_shared.mjs';
import { family, people, now, voices, home } from '../model.mjs';

/* Системная поверхность: экран блокировки. Голосовые мамы играют подряд с погашенным экраном,
   уведомления показывают отправителя с инициалами и превью — текст и фото расшифровывает расширение */
export default (ui) => ui.screen({
  id: 'lockscreen', theme: THEME, className: 'ui-lock',
  body: ui.lockScreen({
    time: now.time, date: now.date[0].toUpperCase() + now.date.slice(1), appIcon: 'house',
    notifications: [
      { initials: people.roza.initial, title: people.roza.short, text: 'Даню с бассейна забираю я, отметилась. Позвони, как Милу заберёшь', time: '15:21', activate: 'commnotif|mama', label: 'Уведомление: мама' },
      { initials: people.oksana.initial, title: people.oksana.name, app: family.name, text: 'Фото · Довела Милу, забирать в 17:30', time: '15:34', thumb: 'ph on-dark', activate: 'notifext|family', label: `Уведомление: ${people.oksana.name}` },
      { initials: people.timur.initial, title: people.timur.name, app: family.name, text: `Задержусь до ${home.timurBack}, ужинайте без меня`, time: '15:58', activate: 'keychain|family', label: `Уведомление: ${people.timur.name}` },
    ],
    nowPlaying: {
      title: `Голосовое мамы, 3 из ${voices.count}`, sub: `${people.roza.name} · ${voices.list[2][0]}`,
      at: '1:12', left: '−1:19', fillClass: 'sv-fill-48', status: `Дальше ещё одно, ${voices.list[3][0]}`,
      go: 'mama', label: 'Открыть чат с мамой',
    },
  }),
});
