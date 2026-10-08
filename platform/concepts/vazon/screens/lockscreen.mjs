import { THEME } from './_shared.mjs';
import { now, people, swap } from '../model.mjs';

/* Системная поверхность: ответ Иры приходит на экран блокировки с её именем и инициалами */
export default (ui) => ui.screen({
  id: 'lockscreen', theme: THEME, className: 'ui-lock',
  body: ui.lockScreen({
    time: '9:43', date: now.date[0].toUpperCase() + now.date.slice(1), appIcon: 'trees',
    notifications: [
      { initials: people.ira.initial, title: people.ira.name, text: swap.reply, time: 'сейчас', go: 'direct-ira', label: `Уведомление: ${people.ira.name}` },
    ],
  }),
});
