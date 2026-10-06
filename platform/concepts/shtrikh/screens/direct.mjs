import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'direct', theme: THEME,
  body: [
    ui.chatNav({ initial: people.petr.initial, name: people.petr.name, status: 'был недавно' }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ text: 'Скинь адрес двора, тоже хочу порисовать', time: '17:24' }),
      ui.bubble({ out: true, text: 'Панфилова, 84, вход с арки. Лучше утром — до десяти там тень', time: '17:29', read: true }),
    ])),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>shoot', 'Фото>picker'] }, send: { toast: 'Сообщение отправлено', primary: true } }),
  ],
});
