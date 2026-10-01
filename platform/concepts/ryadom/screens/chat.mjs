import { THEME } from './_shared.mjs';
import { people, longrun } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ initial: 'СЛ', name: longrun.title, status: `${longrun.host.first} ведёт · ${longrun.confirmed} участников`, call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ text: `<b class="ry-who">${people.ilya.name}</b>На мосту лёд, побежим через велодорожку`, time: '6:58' }),
      ui.bubble({ attach: '<span class="ry-chat-map"></span>', text: `<b class="ry-who">${people.ilya.name}</b>Точка старта — у главного входа`, time: '7:12' }),
      ui.bubble({ out: true, text: 'Буду в 7:25, держу 6:10', time: '7:14', read: true }),
      ui.voice({ dur: '0:12', time: '7:16' }),
      ui.list([ui.row({ lead: ui.leadIcon('bell'), title: 'Изменения от тренера', sub: 'С именем тренера, даже когда «Рядом» закрыто', activate: 'commnotif|chat' })]),
      ui.granted('commnotif', `Изменения придут с именем: ${longrun.host.name}`),
    ])),
    ui.denied('voip', 'Эфир тренера выключен — изменения остаются в чате'),
    ui.composer({ attach: { go: 'picker' }, mic: { toast: 'Запись голосового · отпустите, чтобы отправить' } }),
  ],
});
