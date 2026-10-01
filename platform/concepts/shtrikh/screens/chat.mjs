import { THEME } from './_shared.mjs';
import { people, pleinair, places } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ initial: 'ЗБ', name: pleinair.title, status: `Завтра в ${pleinair.start} · ${pleinair.people} участников`, call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ from: `${people.marina.name}`, text: `Встречаемся у главного входа, возле часов`, time: '17:38' }),
      ui.bubble({ attach: `<span class="sh-chat-art ${places.bazar.art}"></span>`, from: `${people.misha.name}`, text: `Вот ракурс с прошлого раза`, time: '17:52' }),
      ui.bubble({ out: true, text: 'Возьму линер и складной стул', time: '17:55', read: true }),
      ui.voice({ dur: '0:09', time: '18:02' }),
    ])),
    ui.denied('voip', 'Аудиоразбор выключен — продолжайте в сообщениях'),
    ui.composer({ attach: { go: 'picker' }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
