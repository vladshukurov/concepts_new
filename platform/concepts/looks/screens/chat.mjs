import { THEME, P } from './_shared.mjs';
import { item, people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ face: P.lera, name: people.lera.name, status: `${people.lera.about} · в сети`, call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ text: `${people.marina.first}, привет! Вещи принимаю до ${item.acceptBy}`, time: '9:20' }),
      ui.bubble({ out: true, attach: `<span class="lk-chat-photo ${P.marina}"></span>`, text: 'Вот жакет, шерсть, размер 46', time: '9:28', read: true }),
      ui.bubble({ text: 'Покажешь жакет? Посмотрю подкладку и ярлык', time: '9:36' }),
      ui.voice({ dur: '0:09', time: '9:37' }),
    ])),
    ui.denied('voip'),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>camera', 'Фото>media'] }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
