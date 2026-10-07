import { THEME } from './_shared.mjs';
import { studio, me, project } from '../model.mjs';

/* Системная поверхность: «Сообщения» iOS у новичка Тёмы. Ссылка vkurse.app открывает чат проекта прямо в приложении */
export default (ui) => ui.screen({
  id: 'sms', theme: THEME, className: 'lt-ios',
  body: [
    ui.nav({ title: `<span class="lt-ios-who">${ui.avatar(me.initial)}<span>${me.name}</span></span>` }),
    ui.scroll(ui.section({ className: 'lt-ios-thread', children: [
      '<p class="lt-ios-day">iMessage<br>Сегодня, 10:02</p>',
      '<p class="lt-ios-bubble is-in">Тёма, привет! Это Ира из «Полдня». Завтра первый день — вот чат проекта, там бриф и макеты</p>',
      `<button class="lt-ios-link" data-activate="associateddomains|join" aria-label="Открыть ссылку ${studio.link}"><span class="lt-ios-link-ico">${ui.icon('message-circle')}</span><span><strong>${project.name} — В курсе</strong><span>${studio.link}</span></span></button>`,
      '<p class="lt-ios-bubble is-out">Спасибо! Открываю</p>',
      '<p class="lt-ios-meta">Доставлено</p>',
    ] })),
    `<div class="lt-ios-bar"><span>${ui.icon('plus')}</span><span class="lt-ios-field">iMessage</span><span>${ui.icon('mic')}</span></div>`,
  ],
});
