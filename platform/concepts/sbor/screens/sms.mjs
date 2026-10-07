import { THEME } from './_shared.mjs';
import { trip, me } from '../model.mjs';

/* Системная поверхность: «Сообщения» iOS у приглашённой Даши. Ссылка sbor.app открывает поездку прямо в приложении */
export default (ui) => ui.screen({
  id: 'sms', theme: THEME, className: 'sb-ios',
  body: [
    ui.nav({ title: `<span class="sb-ios-who">${ui.avatar(me.initial)}<span>${me.name}</span></span>` }),
    ui.scroll(ui.section({ className: 'sb-ios-thread', children: [
      '<p class="sb-ios-day">iMessage<br>Сегодня, 9:36</p>',
      '<p class="sb-ios-bubble is-out">Ника, вы уже в Казани? Хочу к вам завтра на слободу</p>',
      '<p class="sb-ios-bubble is-in">Да! Вступай в поездку, там программа и кто где</p>',
      `<button class="sb-ios-link" data-activate="associateddomains|join" aria-label="Открыть ссылку ${trip.link}"><span class="sb-ios-link-ico">${ui.icon('route')}</span><span><strong>${trip.name} — В сборе</strong><span>${trip.link}</span></span></button>`,
      '<p class="sb-ios-bubble is-out">Открываю, спасибо</p>',
      '<p class="sb-ios-meta">Доставлено</p>',
    ] })),
    `<div class="sb-ios-bar"><span>${ui.icon('plus')}</span><span class="sb-ios-field">iMessage</span><span>${ui.icon('mic')}</span></div>`,
  ],
});
