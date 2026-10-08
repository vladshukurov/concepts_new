import { THEME, P } from './_shared.mjs';
import { episode, now, people, item } from '../model.mjs';

/* Экран блокировки: свой разбор играет с погашенным экраном (audio), а ответ Леры
   приходит уведомлением о сообщении — с её именем и фото (commnotif); превью сообщения Юры расшифровано ключом из общей связки (keychain) */
/* Уведомление Леры видно только после разрешения commnotif */
const gate = (html) => html.replace('<button class="ui-ln"', '<button class="ui-ln perm-hidden" data-show-granted="commnotif"');
export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'ui-lock',
  body: gate(ui.lockScreen({
    time: now.time, date: now.date[0].toUpperCase() + now.date.slice(1),
    notifications: [
      { initials: 'ЛС', title: people.lera.name, text: `${item.short[0].toUpperCase() + item.short.slice(1)} принимаю, подкладка целая. Неси к стойке`, time: 'сейчас', go: 'chat', label: `Уведомление: ${people.lera.name}` },
      { initials: 'ЮК', title: people.yura.name, text: 'Нашёл к твоему пальто шарф, отложил у кассы', time: '5 мин назад', activate: 'keychain|chat-yura', label: `Уведомление: ${people.yura.name}` },
    ],
    nowPlaying: { title: episode.title, sub: `${episode.author} · Вешалка`, at: episode.at, left: episode.left, fillClass: 'lk-w-44', go: 'talk', label: 'Открыть разбор' },
  })),
});
