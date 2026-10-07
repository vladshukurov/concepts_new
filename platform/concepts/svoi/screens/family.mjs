import { THEME, netCard } from './_shared.mjs';
import { family, home, people, pickup } from '../model.mjs';

/* Чат семьи: закреп про Милу, Wi‑Fi дома карточкой для няни и гостей, фото, статус «дома» */
export default (ui) => ui.screen({
  id: 'family', theme: THEME,
  body: [
    ui.chatNav({ initial: family.initial, name: family.name, status: `${family.members} участников, ${family.online} в сети`, open: { go: 'familyinfo' } }),
    `<button class="sv-pin" data-go="home" aria-label="Кто заберёт">${ui.icon('pin')}<span><strong>Кто заберёт · Мила до ${pickup.to}</strong><span>Милу пока никто не забирает · Даню — Роза</span></span>${ui.icon('chevron-right')}</button>`,
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ from: people.timur.name, attach: netCard(ui, { ssid: family.ssid, sub: 'Wi‑Fi дома · для Оксаны и гостей', go: 'wifi' }), text: 'Подключаться отсюда, пароль не диктуем', time: '21:05' }),
      ui.voice({ from: people.roza.name, dur: '1:46', time: '21:30' }),
      ui.day('Сегодня'),
      ui.bubble({ from: people.oksana.name, attach: '<span class="sv-photo ph"></span>', text: `Довела Милу, забирать в ${pickup.to}`, time: '15:34' }),
      ui.bubble({ out: true, text: 'Спасибо! Кто забирает — отмечаемся на доске', time: '15:36', read: true }),
      `<p class="sv-sys">${people.danya.short} дома с ${home.danyaSince} · ${family.ssid}</p>`,
      ui.bubble({ from: people.danya.name, text: 'Я дома, суп поел. В 16:15 ухожу на бассейн', time: '15:42' }),
      ui.bubble({ from: people.roza.name, text: 'Даню с бассейна заберу я, мне по пути', time: '15:50' }),
      `<p class="sv-sys">Кто заберёт: Роза забирает Даню из бассейна в 18:00</p>`,
      ui.bubble({ from: people.timur.name, text: `Задержусь до ${home.timurBack}, ужинайте без меня. Милу не успею`, time: '15:58' }),
      `<p class="sv-sys">Кто заберёт: Тимур забирает Даню с шахмат в субботу</p>`,
      `<div class="sv-shared perm-hidden" data-show-granted="shareext">${ui.bubble({ out: true, attach: '<span class="sv-photo ph"></span>', text: 'Даня с грамотой по математике', time: '16:05' })}</div>`,
    ])),
    ui.denied('photos'),
    ui.denied('mic'),
    ui.composer({ attach: { label: 'Вложение', ask: 'photos|attach|family' }, mic: { ask: 'mic|record|family', label: 'Записать голосовое' } }),
  ],
});
