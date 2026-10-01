import { THEME } from './_shared.mjs';
import { people, pleinair, places } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ initial: 'ЗБ', name: pleinair.title, status: `Завтра в ${pleinair.start} · ${pleinair.people} участников`, call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ text: `<b class="sh-who">${people.marina.name}</b>Встречаемся у главного входа, возле часов`, time: '17:38' }),
      ui.bubble({ attach: `<span class="sh-chat-art ${places.bazar.art}"></span>`, text: `<b class="sh-who">${people.misha.name}</b>Вот ракурс с прошлого раза`, time: '17:52' }),
      ui.bubble({ out: true, text: 'Возьму линер и складной стул', time: '17:55', read: true }),
      ui.voice({ dur: '0:09', time: '18:02' }),
      ui.list([ui.row({ lead: ui.leadIcon('bell'), title: 'Сообщения пленэра с именами', sub: 'Видно, кто пишет, даже когда «Штрих» закрыт', activate: 'commnotif|chat' })]),
      ui.granted('commnotif', `Сообщения придут с именем: ${people.marina.name}`),
    ])),
    ui.denied('voip', 'Аудиоразбор выключен — продолжайте в сообщениях'),
    ui.composer({ attach: { go: 'picker' }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
