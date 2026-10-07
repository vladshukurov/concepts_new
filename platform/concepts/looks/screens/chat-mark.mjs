import { THEME, who } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chat-mark', theme: THEME,
  body: [
    ui.chatNav({ ...who('mark'), name: people.mark.name, status: 'был в 9:31' }),
    ui.scroll(ui.chat([
      ui.day('Понедельник'),
      ui.bubble({ out: true, text: 'Марк, джинсы прямые подшить у тебя можно? Длина 102', time: '18:20', read: true }),
      ui.voice({ dur: '0:24', time: '18:41' }),
      ui.bubble({ text: 'Принеси на своп в субботу, заберу и верну через неделю', time: '18:42' }),
    ])),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>camera', 'Фото>media'] }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
