import { THEME } from './_shared.mjs';
import { people, demo } from '../model.mjs';

/* Личный чат с Пашей: демо клиенту из сообщения кладётся в Календарь одним касанием по дате */
export default (ui) => ui.screen({
  id: 'pasha', theme: THEME,
  body: [
    ui.chatNav({ initial: people.pasha.initial, name: people.pasha.name, status: 'был в 9:50' }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ text: 'Летучку завтра двигаю на 10:30, в 10:00 у меня созвон с типографией', time: '19:40' }),
      ui.bubble({ out: true, text: 'Ок. Логотип v3 Лера доделает к утру', time: '19:52', read: true }),
      ui.voice({ dur: '0:23', time: '20:05' }),
      ui.day('Сегодня'),
      `<div class="ui-bubble is-in"><span class="ui-bubble-text">Демо клиенту <button class="lt-date tap" data-ask="calendarwrite|pasha|pasha" aria-label="В Календарь: демо ${demo.label}">${demo.label}</button>, едем вдвоём, берём ролик и гайд</span><span class="ui-bubble-meta">9:31</span></div>`,
      `<p class="lt-sys perm-hidden" data-show-granted="calendarwrite">В Календаре · демо клиенту, ${demo.date}, ${demo.time} · ${demo.where}</p>`,
      ui.bubble({ out: true, text: 'Ок, беру. Презентацию соберу к среде вечером', time: '9:33', read: true }),
    ])),
    ui.composer({ attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл из Файлов>share'] } }),
  ],
});
