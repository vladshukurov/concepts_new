import { THEME } from './_shared.mjs';
import { studio, people, guests } from '../model.mjs';

/* «Гости дня»: кто сегодня придёт в офис и гостевой Wi‑Fi карточкой — новичку и гостю не нужно идти к Вике */
export default (ui) => ui.screen({
  id: 'guests', theme: THEME,
  body: [
    ui.chatNav({ initial: 'ГД', name: 'Гости дня', status: '21 участник, 6 в сети' }),
    `<button class="lt-pin" data-go="wifi" aria-label="Гостевой Wi‑Fi ${studio.guestSsid}">${ui.icon('wifi')}<span><strong>Гостевой Wi‑Fi · ${studio.guestSsid}</strong><span>Подключиться из чата, без пароля вручную</span></span>${ui.icon('chevron-right')}</button>`,
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ from: people.vika.name, text: 'Таблица отпусков на ноябрь — до пятницы, пожалуйста', time: '17:30' }),
      ui.day('Сегодня'),
      ui.bubble({ from: people.vika.name, text: `Сегодня в офисе: ${guests[0][0]} — ${guests[0][1]}, собеседование, Малая. ${guests[1][0]} — ${guests[1][1]}, знакомство с командой`, time: '9:02' }),
      ui.bubble({ from: people.vika.name, attach: `<button class="lt-net" data-go="wifi"><span class="lt-net-ico">${ui.icon('wifi')}</span><span><strong>${studio.guestSsid}</strong><span>Гостевой Wi‑Fi · ${studio.office}</span></span></button>`, time: '9:03' }),
      ui.bubble({ from: people.sonya.name, text: 'Я тоже пока на гостевой, сертификат обещали в пятницу', time: '9:20' }),
      ui.bubble({ from: people.vika.name, text: 'Полина будет в 11:00, встречу на ресепшене', time: '9:40' }),
      ui.bubble({ out: true, text: 'Тёму в 16:00 встречу сама, переговорку Малую заняла', time: '9:44', read: true }),
    ])),
    ui.composer({ attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл из Файлов>share'] } }),
  ],
});
