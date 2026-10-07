import { THEME } from './_shared.mjs';
import { people, meeting } from '../model.mjs';

/* Чат родителей 5 «Б»: дата собрания в сообщении кладётся в Календарь одним касанием */
export default (ui) => ui.screen({
  id: 'school', theme: THEME,
  body: [
    ui.chatNav({ initial: '5Б', name: '5 «Б» · родители', status: '27 участников' }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ from: people.lena.name, text: 'Кто-нибудь записал, что задали по окружающему миру?', time: '19:40' }),
      ui.bubble({ from: people.igor.name, attach: '<span class="sv-photo ph"></span>', text: 'Вот, с доски', time: '19:52' }),
      ui.bubble({ out: true, text: 'Спасибо, Игорь!', time: '20:03', read: true }),
      ui.day('Сегодня'),
      ui.bubble({ from: people.teacher.name, text: 'Уважаемые родители, сдаём на экскурсию в планетарий по 650 ₽ до пятницы', time: '13:05' }),
      `<div class="ui-bubble is-in"><span class="ui-bubble-from">${people.teacher.name}</span><span class="ui-bubble-text">Родительское собрание <button class="sv-date tap" data-ask="calendarwrite|school|school" aria-label="В Календарь: ${meeting.label}">${meeting.label}</button>, ${meeting.where}. Явка обязательна</span><span class="ui-bubble-meta">13:12</span></div>`,
      `<p class="sv-sys perm-hidden" data-show-granted="calendarwrite">В Календаре · ${meeting.day}, ${meeting.time} · собрание 5 «Б»</p>`,
      ui.bubble({ from: people.lena.name, text: 'Будем', time: '13:20' }),
    ])),
    ui.composer({ attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл=Откроются Файлы'] } }),
  ],
});
