import { THEME } from './_shared.mjs';
import { now, visit, vet } from '../model.mjs';

/* Системная поверхность: экран блокировки после «Я иду». Влада пишет с именем и инициалами (commnotif);
   превью от клиники расшифровывает расширение уведомлений ключом из общей связки (keychain) */
export default (ui) => ui.screen({
  id: 'lockscreen', theme: THEME, className: 'ui-lock',
  body: ui.lockScreen({
    time: '9:43', date: now.date[0].toUpperCase() + now.date.slice(1),
    notifications: [
      { initials: 'ВЛ', title: 'Влада · Барни', text: 'Ура, Барни будет ждать Трюфеля у входа', time: '9:43', go: 'chat', label: 'Уведомление: Влада · Барни' },
      { initials: 'МТ', title: `${vet.name}`, app: 'Клиника «Свои люди»', text: `Приём сдвинули на ${visit.day}, ${visit.time}`, time: 'вчера', activate: 'keychain|chat-clinic', label: `Уведомление: ${vet.name}` },
    ],
  }),
});
