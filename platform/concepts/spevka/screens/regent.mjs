import { THEME } from './_shared.mjs';
import { regent } from '../model.mjs';

/* Личный чат с регентом: соло и задания, звонок из шапки */
export default (ui) => ui.screen({
  id: 'regent', theme: THEME,
  body: [
    ui.chatNav({ initial: regent.initial, name: regent.name, status: 'регент · в сети', call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ text: 'Оля, соло в «Вечернем звоне» отдаём Лене, а вы ведёте альтов во втором куплете', time: '21:10' }),
      ui.bubble({ out: true, text: 'Хорошо, выучу к четвергу', time: '21:16', read: true }),
      ui.voice({ dur: '1:05', time: '22:02' }),
      ui.day('Сегодня'),
      ui.bubble({ text: 'Оля, задержитесь после спевки на 10 минут, пройдём второй куплет', time: '18:58' }),
      ui.bubble({ out: true, text: 'Да, останусь', time: '19:01', read: true }),
    ])),
    ui.composer({ attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл=Откроются Файлы'] } }),
  ],
});
