import { THEME } from './_shared.mjs';
import { family, people, now, voices, home } from '../model.mjs';

/* Системная поверхность: экран блокировки. Голосовые мамы играют подряд с погашенным экраном,
   уведомления показывают отправителя с инициалами и превью — текст и фото расшифровывает расширение */
const note = (ui, { ini, who, where, text, time, thumb, a, label }) => `<button class="sv-notif"${a} aria-label="${label}"><span class="sv-notif-face is-initial ${ui.hue(ini)}">${ini}<i>${ui.icon('house')}</i></span><span class="sv-notif-body"><span class="sv-notif-top"><strong>${who}</strong><span>${time}</span></span>${where ? `<span class="sv-notif-where">${where}</span>` : ''}<span class="sv-notif-text">${text}</span></span>${thumb ? '<span class="sv-notif-thumb ph on-dark"></span>' : ''}</button>`;
export default (ui) => ui.screen({
  id: 'lockscreen', theme: THEME, className: 'ui-lock',
  body: [
    ui.lockNowPlaying({
      time: now.time, date: now.date[0].toUpperCase() + now.date.slice(1),
      title: `Голосовое мамы, 3 из ${voices.count}`, sub: `${people.roza.name} · ${voices.list[2][0]}`,
      at: '1:12', left: '−1:19', fillClass: 'sv-fill-48', status: `Дальше ещё одно, ${voices.list[3][0]}`,
      open: { label: 'Открыть чат с мамой', go: 'mama' },
    }),
    `<div class="sv-notifs">${[
      note(ui, { ini: people.roza.initial, who: people.roza.short, text: 'Позвони, как Милу заберёшь. Пирожки на субботу ставлю', time: '15:21', a: ' data-activate="commnotif|mama"', label: 'Уведомление: мама' }),
      note(ui, { ini: people.oksana.initial, who: people.oksana.name, where: family.name, text: 'Фото · Довела Милу, забирать в 17:30', time: '15:34', thumb: true, a: ' data-activate="notifext|family"', label: `Уведомление: ${people.oksana.name}` }),
      note(ui, { ini: people.timur.initial, who: people.timur.name, where: family.name, text: `Задержусь до ${home.timurBack}, ужинайте без меня`, time: '15:58', a: ' data-activate="keychain|family"', label: `Уведомление: ${people.timur.name}` }),
    ].join('')}</div>`,
  ],
});
