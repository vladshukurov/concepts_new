import { THEME } from './_shared.mjs';
import { regent, people } from '../model.mjs';

/* Чат партии альтов: регент присылает партии голосом, альты — свои записи. Запись из «Диктофона» приходит сюда же */
const memo = (ui, title, sub) => `<span class="sp-file"><span class="sp-file-ico">${ui.icon('audio-lines')}</span><span><strong>${title}</strong><span>${sub}</span></span></span>`;
export default (ui) => ui.screen({
  id: 'altos', theme: THEME,
  body: [
    ui.chatNav({ initial: 'АП', name: 'Альты · партии', status: '8 альтов и регент' }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.voice({ out: true, dur: '2:51', time: '22:14' }),
      ui.bubble({ out: true, text: 'Записала «Вечерний звон», послушайте, где я выше', time: '22:15', read: true }),
      ui.bubble({ from: regent.name, text: 'Оля, в 17 такте ля, не си. Остальное хорошо', time: '22:30' }),
      ui.day('Сегодня'),
      ui.voice({ from: regent.name, dur: '3:40', time: '7:02' }),
      ui.bubble({ from: regent.name, text: '«Ой, то не вечер», альты. Порядок в программе новый, он теперь шестой', time: '7:03' }),
      ui.bubble({ from: people.yulia.name, text: 'Я сегодня болею, послушаю запись', time: '17:31' }),
      ui.bubble({ from: regent.name, text: 'Выздоравливайте. Альты, распеваемся в 18:50', time: '18:44' }),
      `<div class="sp-shared perm-hidden" data-show-granted="shareext">${ui.bubble({ out: true, attach: memo(ui, 'Распевка, альты', 'из Диктофона · 1:24 · сегодня в 19:03'), text: 'Записала распевку, если кто опоздал', time: '19:07' })}</div>`,
    ])),
    ui.denied('mic'),
    ui.composer({ attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл=Откроются Файлы'] }, mic: { ask: 'mic|record|altos', label: 'Записать голосовое' } }),
  ],
});
