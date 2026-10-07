import { THEME } from './_shared.mjs';
import { swap } from '../model.mjs';

/* Общий чат свопа: участники договариваются о входе и вещах */
export default (ui) => ui.screen({
  id: 'chat-group', theme: THEME,
  body: [
    ui.chatNav({ initial: 'СВ', name: 'Своп · Новая Голландия', status: `${swap.going} участников` }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ from: 'Лера Савина', text: 'Доброе утро! Начинаем в 9:30, вещи принимаю до 10:00', time: '8:52' }),
      ui.bubble({ from: 'Ника Гаврилова', text: 'Вешалки на колёсах привезли?', time: '9:05' }),
      ui.bubble({ from: 'Лера Савина', text: 'Да, три штуки, у окна', time: '9:07' }),
      ui.bubble({ out: true, text: 'Буду к десяти, свитер Лере уже показала', time: '9:15', read: true }),
      ui.bubble({ from: 'Аня Белова', text: 'Вход со стороны Бутылки, ворота с Мойки закрыты', time: '9:24' }),
    ])),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>camera', 'Фото>media'] }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
