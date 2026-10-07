import { THEME, who } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chat-yura', theme: THEME,
  body: [
    ui.chatNav({ ...who('yura'), name: people.yura.name, status: 'на свопе с 9:35' }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ text: 'Ты завтра на своп? Говорят, будет пальто из Коломны', time: '21:40' }),
      ui.bubble({ out: true, text: 'Да, к десяти. Несу свитер, жакет и юбку', time: '21:52', read: true }),
      ui.bubble({ text: 'Если увидишь фиолетовое пальто, 48 — отложи', time: '22:05' }),
      ui.bubble({ out: true, text: 'Фиолетовое пальто беру, если не заберут', time: '22:06', read: true }),
    ])),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>camera', 'Фото>media'] }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
