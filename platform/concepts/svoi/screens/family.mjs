import { THEME, netCard } from './_shared.mjs';
import { family, home, people, pickup } from '../model.mjs';

/* Чат семьи: закреп про Милу, Wi‑Fi дома карточкой для няни и гостей, фото, статус «дома» */
export default (ui) => ui.screen({
  id: 'family', theme: THEME,
  body: [
    ui.chatNav({ initial: family.initial, name: family.name, status: `${family.members} участников, ${family.online} в сети`, open: { go: 'familyinfo' } }),
    `<button class="sv-pin" data-go="mila" aria-label="${pickup.title}: забрать в ${pickup.to}">${ui.icon('pin')}<span><strong>Забрать Милу в ${pickup.to}</strong><span>${pickup.place}, ${pickup.addr} · забирает Алина</span></span>${ui.icon('chevron-right')}</button>`,
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ from: people.timur.name, attach: netCard(ui, { ssid: family.ssid, sub: 'Wi‑Fi дома · для Оксаны и гостей', go: 'wifi' }), text: 'Подключаться отсюда, пароль не диктуем', time: '21:05' }),
      ui.voice({ from: people.roza.name, dur: '1:46', time: '21:30' }),
      ui.day('Сегодня'),
      ui.bubble({ from: people.oksana.name, attach: '<span class="sv-photo ph"></span>', text: `Довела Милу, забирать в ${pickup.to}`, time: '15:34' }),
      ui.bubble({ out: true, text: 'Спасибо! Заберу сама', time: '15:36', read: true }),
      `<p class="sv-sys">${people.danya.short} дома с ${home.danyaSince} · ${family.ssid}</p>`,
      ui.bubble({ from: people.danya.name, text: 'Я дома, суп поел', time: '15:42' }),
      ui.bubble({ from: people.timur.name, text: `Задержусь до ${home.timurBack}, ужинайте без меня`, time: '15:58' }),
      `<div class="sv-shared perm-hidden" data-show-granted="shareext">${ui.bubble({ out: true, attach: '<span class="sv-photo ph"></span>', text: 'Даня с грамотой по математике', time: '16:05' })}</div>`,
    ])),
    ui.denied('photos'),
    ui.denied('mic'),
    ui.composer({ attach: { label: 'Вложение', ask: 'photos|attach|family' }, mic: { ask: 'mic|record|family', label: 'Записать голосовое' } }),
  ],
});
