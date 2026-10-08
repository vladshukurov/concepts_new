import { THEME } from './_shared.mjs';
import { people, zhenyaNote } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'direct', theme: THEME,
  body: [
    ui.chatNav({ initial: people.zhenya.initial, name: people.zhenya.name, status: 'в сети' }),
    ui.scroll(ui.chat([
      ui.day('Понедельник'),
      ui.bubble({ text: 'Сыграем ещё раз на неделе?', time: '18:42' }),
      ui.bubble({ out: true, text: 'Да, давай в четверг после работы', time: '18:45', read: true }),
      ui.bubble({ text: 'Отлично, я принесу «Архив острова»', time: '18:47' }),
      ui.day('Сегодня'),
      ui.bubble({ text: zhenyaNote.text, time: zhenyaNote.time }),
    ])),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Запись из дневника>post', 'Новая запись с кадром поля>compose'] }, send: { toast: 'Сообщение отправлено', primary: true } }),
  ],
});
