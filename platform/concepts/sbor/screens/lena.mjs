import { THEME, circle } from './_shared.mjs';
import { people, lenaMeet, trips } from '../model.mjs';

/* Личный чат с Леной: встреча после поездки — дата в сообщении кладётся в Календарь одним касанием */
export default (ui) => ui.screen({
  id: 'lena', theme: THEME,
  body: [
    ui.chatNav({ initial: people.lena.initial, name: people.lena.name, status: 'была в 9:02' }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ text: `${trips.pskov.name}: бронь на 9 человек, ждём ещё двоих. Тебя записать?`, time: '21:16' }),
      ui.bubble({ out: true, text: 'Записывай, и Игоря спроси', time: '21:30', read: true }),
      `<div class="sb-in-media">${circle('0:17', 'Кружок Лены 0:17')}</div>`,
      ui.day('Сегодня'),
      ui.bubble({ text: 'Во вторник у меня? Разберём фото с Казани и решим про Псков', time: '8:55' }),
      `<div class="ui-bubble is-in"><span class="ui-bubble-text">Давай <button class="sb-date tap" data-ask="calendarwrite|lena|lena" aria-label="В Календарь: ${lenaMeet.label}">${lenaMeet.label}</button>, ${lenaMeet.where}</span><span class="ui-bubble-meta">8:57</span></div>`,
      `<p class="sb-sys perm-hidden" data-show-granted="calendarwrite">${'В Календаре'} · ${lenaMeet.label.replace(', в ', ', ')} · ${lenaMeet.where}</p>`,
      ui.bubble({ out: true, text: 'Давай! Привезу чак-чак', time: '9:01', read: true }),
    ])),
    ui.composer({ attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл=Откроются Файлы'] } }),
  ],
});
