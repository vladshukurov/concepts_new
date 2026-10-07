import { THEME } from './_shared.mjs';
import { people, home, shopping } from '../model.mjs';

/* Личный чат с Тимуром: кто что покупает и кто когда дома */
export default (ui) => ui.screen({
  id: 'timur', theme: THEME,
  body: [
    ui.chatNav({ initial: people.timur.initial, name: people.timur.short, status: 'был в 16:01' }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ text: 'Шахматы в субботу перенесли на 12:00, я отвезу', time: '19:10' }),
      ui.bubble({ out: true, text: 'Отлично, тогда я с Милой на английский', time: '19:12', read: true }),
      ui.day('Сегодня'),
      ui.bubble({ text: `Добавил молоко в список, осталось ${shopping.todo.length} позиций`, time: '12:40' }),
      ui.bubble({ out: true, text: 'Заберу Милу сама, ты не спеши', time: '15:59', read: true }),
      ui.bubble({ text: `Буду к ${home.timurBack}`, time: '16:01' }),
    ])),
    ui.composer({ attach: { label: 'Вложение', menu: ['Фото и видео>attach', 'Файл=Откроются Файлы'] } }),
  ],
});
