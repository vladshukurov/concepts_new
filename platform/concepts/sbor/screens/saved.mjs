import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

/* Избранное — чат с самим собой: билеты, пересланное от группы, заметки голосом */
const file = (ui, title, sub) => `<span class="sb-file"><span class="sb-file-ico">${ui.icon('file-text')}</span><span><strong>${title}</strong><span>${sub}</span></span></span>`;
export default (ui) => ui.screen({
  id: 'saved', theme: THEME,
  body: [
    ui.chatNav({ initial: 'ИЗ', name: 'Избранное', status: '38 сообщений · 6 файлов' }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ out: true, from: `Переслано от ${people.rustam.name}`, text: 'Свияжск: Успенский собор, потом вниз к пристани, последний катер обратно в 18:20', time: '22:31', read: true }),
      ui.bubble({ out: true, attach: file(ui, 'Расписание катера.jpg', 'снято на стенде у причала · 1,2 МБ'), time: '22:40', read: true }),
      ui.day('Сегодня'),
      ui.voice({ out: true, dur: '0:09', time: '7:58' }),
      ui.bubble({ out: true, attach: file(ui, 'Билет Казань — Москва.pdf', '11 октября, 16:40 · вагон 7, место 21 · 214 КБ'), time: '8:05', read: true }),
    ])),
    ui.composer({ placeholder: 'Заметка себе', attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл=Откроются Файлы'] } }),
  ],
});
