import { THEME } from './_shared.mjs';
import { family, me } from '../model.mjs';

/* Системная поверхность: «Сообщения» iOS у бабушки Галины. Ссылка svoi.app открывает чат семьи прямо в приложении */
export default (ui) => ui.screen({
  id: 'sms', theme: THEME, className: 'sv-ios',
  body: [
    ui.nav({ title: `<span class="sv-ios-who">${ui.avatar(me.initial)}<span>${me.name}</span></span>` }),
    ui.scroll(ui.section({ className: 'sv-ios-thread', children: [
      '<p class="sv-ios-day">iMessage<br>Вчера, 20:12</p>',
      '<p class="sv-ios-bubble is-out">Алина, Тимур говорит, у вас там фото внуков каждый день</p>',
      '<p class="sv-ios-bubble is-in">Да! Вот ссылка в наш чат, нажмите — откроется сразу</p>',
      `<button class="sv-ios-link" data-activate="associateddomains|join" aria-label="Открыть ссылку ${family.link}"><span class="sv-ios-link-ico">${ui.icon('house')}</span><span><strong>${family.name} — Все дома</strong><span>${family.link}</span></span></button>`,
      '<p class="sv-ios-bubble is-out">Открываю, спасибо, доченька</p>',
      '<p class="sv-ios-meta">Доставлено</p>',
    ] })),
    `<div class="sv-ios-bar"><span>${ui.icon('plus')}</span><span class="sv-ios-field">iMessage</span><span>${ui.icon('mic')}</span></div>`,
  ],
});
