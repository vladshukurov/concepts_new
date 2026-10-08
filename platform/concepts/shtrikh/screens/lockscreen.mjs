import { THEME } from './_shared.mjs';
import { now, people, leraReply } from '../model.mjs';

/* Системная поверхность: экран блокировки. Ответ Леры приходит с её именем и инициалами (commnotif); превью сообщения Алины расшифровано ключом из общей связки (keychain) */
export default (ui) => ui.screen({
  id: 'lockscreen', theme: THEME, className: 'ui-lock',
  body: ui.lockScreen({
    time: leraReply.time, date: now.date[0].toUpperCase() + now.date.slice(1),
    notifications: [
      { initials: people.lera.initial, title: people.lera.name, text: leraReply.text, time: 'сейчас', go: 'direct-lera', label: `Уведомление: ${people.lera.name}` },
      { initials: people.alina.initial, title: people.alina.name, text: 'Нарисовала твою липу с другой стороны, покажу на встрече', time: '5 мин назад', activate: 'keychain|direct-alina', label: `Уведомление: ${people.alina.name}` },
    ],
  }),
});
