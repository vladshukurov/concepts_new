import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ initial: 'МК', name: 'Марина, кв. 48', status: 'в сети', call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ attach: '<span class="dv-chat-photo ph"></span>', text: 'Вот так висит доводчик', time: '8:12' }),
      ui.bubble({ out: true, text: 'Приложила ваше фото к заявке 4417-Б', time: '8:16', read: true }),
      ui.voice({ dur: '0:14', time: '9:18' }),
      ui.bubble({ attach: `<button class="dv-chat-card" data-go="events"><strong>Доводчик, 3 подъезд</strong><span>Мастер сегодня с 16:00 до 18:00</span></button>`, text: 'УК ответила', time: '9:21' }),
      ui.bubble({ text: 'Мастер будет с 16:00, я открою подъезд', time: '9:21' }),
    ])),
    ui.denied('voip'),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Камера>shoot', 'Фото>chronicle'] }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
