import { THEME } from './_shared.mjs';
import { project, standup, people, now } from '../model.mjs';

/* Системная поверхность: экран блокировки. Запись летучки и голосовые играют подряд с погашенным экраном,
   уведомления показывают отправителя, его инициалы, расшифрованный текст и превью вложения */
const note = (ui, { ini, who, where, text, time, thumb, a, label }) => `<button class="lt-notif"${a} aria-label="${label}"><span class="lt-notif-face is-initial ${ui.hue(ini)}">${ini}<i>${ui.icon('message-circle')}</i></span><span class="lt-notif-body"><span class="lt-notif-top"><strong>${who}</strong><span>${time}</span></span>${where ? `<span class="lt-notif-where">${where}</span>` : ''}<span class="lt-notif-text">${text}</span></span>${thumb ? '<span class="lt-notif-thumb ph on-dark"></span>' : ''}</button>`;
export default (ui) => ui.screen({
  id: 'lockscreen', theme: THEME, className: 'ui-lock lt-lock',
  body: [
    ui.lockNowPlaying({
      time: '9:41', date: now.date[0].toUpperCase() + now.date.slice(1),
      title: `Запись летучки ${standup.yesterday.dur}`, sub: `${standup.yesterday.label} · дальше 3 голосовых`,
      at: '6:12', left: '−11:48', fillClass: 'lt-fill-34',
      open: { label: 'Открыть летучку', go: 'standup' },
    }),
    `<div class="lt-notifs">${[
      note(ui, { ini: people.artem.initial, who: people.artem.name, text: 'Я у клиента до 13:00, мой пункт расскажи ты', time: '9:47', a: ' data-activate="commnotif|chat"', label: `Уведомление: ${people.artem.name}` }),
      note(ui, { ini: people.lera.initial, who: people.lera.name, where: project.name, text: 'Фото · Логотип v3 — гляньте до летучки', time: '9:58', thumb: true, a: ' data-activate="notifext|project"', label: `Уведомление: ${people.lera.name}` }),
      note(ui, { ini: 'ГД', who: people.vika.name, where: 'Гости дня', text: 'Пропуск для Тёмы готов, заберёшь на ресепшене до 16:00', time: '10:03', a: ' data-activate="keychain|guests"', label: 'Уведомление «Гости дня» от Вики' }),
    ].join('')}</div>`,
  ],
});
