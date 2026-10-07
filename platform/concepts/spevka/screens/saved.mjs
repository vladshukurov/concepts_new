import { THEME } from './_shared.mjs';
import { regent } from '../model.mjs';

/* Избранное — чат с самим собой: ноты, пересланное от регента, заметки голосом */
const file = (ui, title, sub) => `<span class="sp-file"><span class="sp-file-ico">${ui.icon('file-text')}</span><span><strong>${title}</strong><span>${sub}</span></span></span>`;
export default (ui) => ui.screen({
  id: 'saved', theme: THEME,
  body: [
    ui.chatNav({ initial: 'ИЗ', name: 'Избранное', status: '24 сообщения · 4 файла' }),
    ui.scroll(ui.chat([
      ui.day('1 октября'),
      ui.bubble({ out: true, attach: file(ui, 'Программа осеннего концерта.pdf', '8 произведений · 96 КБ'), time: '19:02', read: true }),
      ui.bubble({ out: true, text: 'Дыхание: вдох на 4, выдох на 8, каждый день по 5 минут', time: '21:40', read: true }),
      ui.day('Вчера'),
      ui.bubble({ out: true, from: `Переслано от: ${regent.name}`, text: 'Альтам: в «Ave verum» не торопиться в 12 такте, держим темп по басам', time: '22:31', read: true }),
      ui.voice({ out: true, dur: '0:09', time: '22:45' }),
      ui.day('Сегодня'),
      ui.bubble({ out: true, attach: file(ui, 'Ноты «Вечерний звон», альт.pdf', '3 страницы · 1,2 МБ'), time: '17:20', read: true }),
    ])),
    ui.composer({ placeholder: 'Заметка себе', attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл=Откроются Файлы'] } }),
  ],
});
