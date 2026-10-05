import { THEME, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ face: PET.truffle, name: 'Ксения · Трюфель', status: 'была в сети 2 минуты назад', call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ text: 'Трюфель сегодня прямо звезда площадки', time: '21:40' }),
      ui.bubble({ attach: `<span class="tl-chat-photo ${PET.truffle}"></span>`, text: 'Смотри, дошли до дальнего пруда', time: '21:41' }),
      ui.bubble({ out: true, text: 'Красавец! Барни завтра тоже будет', time: '21:52', read: true }),
      ui.day('Сегодня'),
      ui.bubble({ attach: `<button class="tl-walk tl-walk-in" data-go="walk"><span class="tl-walk-head"><strong>Спокойный круг у пруда</strong><span class="tl-walk-time">18:40</span></span><span class="tl-walk-sub">Лопухинский сад · 6 участников</span></button>`, text: 'Идёте?', time: '9:30' }),
      ui.voice({ dur: '0:18', time: '9:36' }),
      ui.bubble({ text: 'Заберу Трюфеля в 19:15, если задержитесь', time: '9:38' }),
      ui.bubble({ out: true, text: 'Идём, будем к 18:40', time: '9:40' }),
    ])),
    ui.denied('voip'),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Фото>media'] }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
