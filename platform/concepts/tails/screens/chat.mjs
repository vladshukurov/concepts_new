import { THEME, PET } from './_shared.mjs';

/* Личный чат с Владой — хозяйкой Барни: договариваются о прогулке */
export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ face: PET.barni, name: 'Влада · Барни', status: 'в сети', call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Вчера'),
      ui.bubble({ out: true, attach: `<span class="tl-chat-photo ${PET.truffle}"></span>`, text: 'Смотри, дошли до дальнего пруда', time: '21:41', read: true }),
      ui.bubble({ text: 'Красавец! Барни завтра тоже будет', time: '21:52' }),
      ui.day('Сегодня'),
      ui.bubble({ attach: `<button class="tl-walk tl-walk-in" data-go="walk"><span class="tl-walk-head"><strong>Спокойный круг у пруда</strong><span class="tl-walk-time">18:40</span></span><span class="tl-walk-sub">Лопухинский сад · 6 участников</span></button>`, text: 'Идёте?', time: '9:30' }),
      ui.bubble({ out: true, text: 'Идём, будем к 18:40', time: '9:34', read: true }),
      ui.voice({ dur: '0:18', time: '9:36' }),
      ui.bubble({ text: 'Заберу Барни в 19:15, если задержусь', time: '9:38' }),
      `<div class="perm-hidden" data-show-granted="commnotif">${ui.bubble({ text: 'Ура, Барни будет ждать Трюфеля у входа', time: '9:43' })}</div>`,
    ])),
    ui.denied('voip'),
    ui.composer({ attach: { label: 'Прикрепить', menu: ['Фото>media'] }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
