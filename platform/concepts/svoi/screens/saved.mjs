import { THEME } from './_shared.mjs';

/* Избранное — чат с собой: справки, полисы, заметки голосом */
const file = (ui, title, sub) => `<span class="sv-file"><span class="sv-file-ico">${ui.icon('file-text')}</span><span><strong>${title}</strong><span>${sub}</span></span></span>`;
export default (ui) => ui.screen({
  id: 'saved', theme: THEME,
  body: [
    ui.chatNav({ initial: 'ИЗ', name: 'Избранное', status: '64 сообщения · 11 файлов' }),
    ui.scroll(ui.chat([
      ui.day('4 октября'),
      ui.bubble({ out: true, attach: file(ui, 'Справка в бассейн — Даня.pdf', 'до 4 апреля 2027 · 210 КБ'), time: '11:02', read: true }),
      ui.bubble({ out: true, text: 'Размеры: Даня — 146, обувь 36; Мила — 122, обувь 30', time: '11:10', read: true }),
      ui.day('Вчера'),
      ui.bubble({ out: true, from: 'Переслано от Оксаны Беловой', text: 'Миле в студию: фартук, гуашь 12 цветов, кисти 2, 5 и 8', time: '17:44', read: true }),
      ui.voice({ out: true, dur: '0:21', time: '22:30' }),
      ui.bubble({ out: true, attach: file(ui, 'Полис ОМС Милы.pdf', 'единый номер · 180 КБ'), time: '22:41', read: true }),
    ])),
    ui.composer({ placeholder: 'Заметка себе', attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл=Откроются Файлы'] } }),
  ],
});
