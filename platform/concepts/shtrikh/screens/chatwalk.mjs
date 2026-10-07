import { THEME } from './_shared.mjs';
import { people, walk } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chatwalk', theme: THEME,
  body: [
    ui.chatNav({ initial: 'ЛГ', name: walk.title, status: `${walk.day} в ${walk.start} · ${walk.people} участника` }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ from: people.misha.name, text: 'Маршрут поменяли, начнём у фонтана', time: '14:15' }),
      ui.bubble({ from: people.marina.name, text: 'Тогда беру складной стул', time: '14:20' }),
      ui.bubble({ out: true, text: 'Я с линером, буду у сквера в 16:20', time: '14:31', read: true }),
    ])),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>shoot', 'Фото>picker'] }, send: { toast: 'Сообщение отправлено' } }),
  ],
});
