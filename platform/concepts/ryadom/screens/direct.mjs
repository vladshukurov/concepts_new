import { THEME } from './_shared.mjs';
import { people, dashaLate } from '../model.mjs';

/* Личный диалог с Дашей: она опаздывает на лонгран, ей звонят прямо отсюда */
export default (ui) => ui.screen({
  id: 'direct', theme: THEME,
  body: [
    ui.chatNav({ initial: people.dasha.initial, name: people.dasha.name, status: 'в сети', call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ text: 'Сошла на 4-м км, колено. Догоню вас у клуба', time: '21:31' }),
      ui.bubble({ out: true, text: 'Ок, ждём во дворе, не торопись', time: '21:32', read: true }),
      ui.day('Сегодня'),
      ui.bubble({ text: 'Иду от метро, начинайте разминку без меня', time: '7:16' }),
      ui.bubble({ out: true, text: 'Стартуем в 7:30 от главного входа', time: '7:17', read: true }),
      ui.bubble({ text: dashaLate.text, time: dashaLate.time }),
    ])),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>shoot', 'Фото>picker'] }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
