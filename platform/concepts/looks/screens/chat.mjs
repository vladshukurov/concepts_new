import { THEME, who } from './_shared.mjs';
import { item, people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ ...who('lera'), name: people.lera.name, status: `${people.lera.about} · в сети`, call: { go: 'call' } }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ out: true, attach: '<span class="lk-chat-photo ph"></span>', text: 'Серый свитер, 44 — бирка на месте', time: '9:10', read: true }),
      ui.bubble({ text: `${people.marina.first}, привет! Вещи принимаю до ${item.acceptBy}`, time: '9:20' }),
      ui.bubble({ out: true, text: 'А ещё жакет, шерсть, размер 46 — возьмёшь?', time: '9:28', read: true }),
      ui.bubble({ text: 'Свитер приняла. Жакет покажешь? Посмотрю подкладку и ярлык', time: '9:36' }),
      ui.voice({ dur: '0:09', time: '9:37' }),
      `<div class="perm-hidden" data-show-granted="commnotif">${ui.bubble({ text: 'Жакет принимаю, подкладка целая. Неси к стойке', time: '9:41' })}</div>`,
    ])),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>camera', 'Фото>media'] }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
