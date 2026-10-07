import { THEME, map } from './_shared.mjs';
import { people, home, family } from '../model.mjs';

/* Личный чат с Даней: вчера «забери меня» с точкой у бассейна, сегодня — дома по сети */
export default (ui) => ui.screen({
  id: 'danya', theme: THEME,
  body: [
    ui.chatNav({ initial: people.danya.initial, name: people.danya.short, status: `дома с ${home.danyaSince}` }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ text: 'Мам, тренировку отменили, забери меня', time: '18:12' }),
      ui.bubble({ attach: map({ points: [['is-me', ''], ['is-kid', people.danya.initial]], className: 'is-mini' }), text: 'Геопозиция · Бассейн «Волна», Ленина, 30', time: '18:12' }),
      ui.bubble({ out: true, text: 'Еду, буду через 10 минут. Жди внутри', time: '18:14', read: true }),
      ui.day('Сегодня'),
      `<p class="sv-sys">${people.danya.short} дома с ${home.danyaSince} · ${family.ssid}</p>`,
      ui.bubble({ text: 'Я дома, суп поел', time: '15:42' }),
      ui.bubble({ text: 'Можно к Артёму после плавания? До восьми', time: '15:43' }),
    ])),
    ui.composer({ attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл=Откроются Файлы'] } }),
  ],
});
