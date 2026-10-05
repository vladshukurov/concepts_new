import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'direct', theme: THEME,
  body: [
    ui.chatNav({ initial: people.zhenya.initial, name: people.zhenya.name, status: 'в сети' }),
    ui.scroll(ui.chat([
      ui.day('Понедельник'),
      ui.bubble({ text: 'Сыграем ещё раз на неделе?', time: '18:42' }),
      ui.bubble({ out: true, text: 'Да, давай в четверг после работы', time: '18:45', read: true }),
      ui.bubble({ text: 'Отлично, я принесу «Архив острова»', time: '18:47' }),
    ])),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Снять поле?camera', 'Фото из галереи?photos'] }, send: { toast: 'Сообщение отправлено', primary: true } }),
  ],
});
