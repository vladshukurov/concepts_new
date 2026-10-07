import { THEME } from './_shared.mjs';
import { choir, me } from '../model.mjs';

/* Системная поверхность: «Сообщения» iOS у новенькой Даши. Ссылка spevka.app открывает хор прямо в приложении */
export default (ui) => ui.screen({
  id: 'sms', theme: THEME, className: 'sp-ios',
  body: [
    ui.nav({ title: `<span class="sp-ios-who">${ui.avatar(me.initial)}<span>${me.name}</span></span>` }),
    ui.scroll(ui.section({ className: 'sp-ios-thread', children: [
      '<p class="sp-ios-day">iMessage<br>Вт, 6 октября, 21:08</p>',
      '<p class="sp-ios-bubble is-out">Оля, я по поводу хора. Когда можно прийти?</p>',
      '<p class="sp-ios-bubble is-in">Приходи! Спевки по вторникам и четвергам в 19:00, вступай по ссылке — там расписание и ноты</p>',
      `<button class="sp-ios-link" data-activate="associateddomains|join" aria-label="Открыть ссылку ${choir.link}"><span class="sp-ios-link-ico">${ui.icon('audio-lines')}</span><span><strong>${choir.name} — В унисон</strong><span>${choir.link}</span></span></button>`,
      '<p class="sp-ios-bubble is-out">Открываю, спасибо</p>',
      '<p class="sp-ios-meta">Доставлено</p>',
    ] })),
    `<div class="sp-ios-bar"><span>${ui.icon('plus')}</span><span class="sp-ios-field">iMessage</span><span>${ui.icon('mic')}</span></div>`,
  ],
});
