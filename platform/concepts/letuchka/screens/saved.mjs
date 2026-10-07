import { THEME, file } from './_shared.mjs';

/* Избранное — чат с самим собой: чек-лист демо, пересланное от коллег, заметки голосом */
export default (ui) => ui.screen({
  id: 'saved', theme: THEME,
  body: [
    ui.chatNav({ initial: 'ИЗ', name: 'Избранное', status: '27 сообщений · 5 файлов' }),
    ui.scroll(ui.chat([
      ui.day('5 октября'),
      ui.bubble({ out: true, attach: file(ui, 'Памятка новичка «Полдня».pdf', 'Вика · пропуск, Wi‑Fi, кухня · 96 КБ'), time: '19:02', read: true }),
      ui.bubble({ out: true, text: 'Летучка каждый день в 10:00 в Большой, по пятницам — демо проектов', time: '19:10', read: true }),
      ui.day('Вчера'),
      ui.bubble({ out: true, from: 'Переслано от Паши Ильина', text: 'Клиенту показываем сначала гайд, потом логотип, ролик в конце', time: '19:31', read: true }),
      ui.bubble({ out: true, text: 'Взять на демо: переходник HDMI, распечатку акта № 14, флешку с роликом', time: '22:40', read: true }),
      ui.day('Сегодня'),
      ui.voice({ out: true, dur: '0:09', time: '7:58' }),
      ui.bubble({ out: true, attach: file(ui, 'Чек-лист демо.pdf', 'четверг, 15:00 · 12 пунктов · 96 КБ'), time: '8:05', read: true }),
    ])),
    ui.composer({ placeholder: 'Заметка себе', attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл из Файлов>share'] } }),
  ],
});
