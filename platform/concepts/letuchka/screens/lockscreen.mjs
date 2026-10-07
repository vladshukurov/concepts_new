import { THEME } from './_shared.mjs';
import { project, standup, people, now } from '../model.mjs';

/* Системная поверхность: экран блокировки. Запись летучки и голосовые играют подряд с погашенным экраном,
   уведомления показывают отправителя, его инициалы, расшифрованный текст и превью вложения */
export default (ui) => ui.screen({
  id: 'lockscreen', theme: THEME, className: 'ui-lock',
  body: ui.lockScreen({
    time: '9:41', date: now.date[0].toUpperCase() + now.date.slice(1),
    notifications: [
      { initials: people.artem.initial, title: people.artem.name, text: 'Я у клиента до 13:00, апдейт напишу из такси', time: '9:47', activate: 'commnotif|chat', label: `Уведомление: ${people.artem.name}` },
      { initials: people.lera.initial, title: people.lera.name, app: project.name, text: 'Фото · Логотип v3 — гляньте до летучки', time: '9:58', thumb: 'ph on-dark', activate: 'notifext|project', label: `Уведомление: ${people.lera.name}` },
      { initials: 'ГД', title: people.vika.name, app: 'Гости дня', text: 'Пропуск для Тёмы готов, заберёшь на ресепшене до 16:00', time: '10:03', activate: 'keychain|guests', label: 'Уведомление «Гости дня» от Вики' },
    ],
    nowPlaying: {
      title: `Запись летучки ${standup.yesterday.dur}`, sub: `${standup.yesterday.label} · Гоша, «Тёплый дом»`,
      at: '6:12', left: '−11:48', fillClass: 'lt-fill-34', go: 'recap', label: 'Запись летучки',
    },
  }),
});
