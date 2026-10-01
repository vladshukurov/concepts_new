import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'direct', theme: THEME,
  body: [
    ui.chatNav({ initial: people.petr.initial, name: people.petr.name, status: 'был недавно' }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ attach: '<span class="sh-chat-art sh-s6"></span>', text: 'Добавите мою работу в серию про старый город?', time: '17:24' }),
      ui.bubble({ out: true, text: 'Да, пришлите исходник без рамки', time: '17:29', read: true }),
    ])),
    ui.composer({ attach: { go: 'picker' }, send: { toast: 'Сообщение отправлено', primary: true } }),
  ],
});
