import { THEME } from './_shared.mjs';
import { people, tonight } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chat', theme: THEME,
  body: [
    ui.chatNav({ initial: 'ЛС', name: tonight.game, status: `Сегодня в ${tonight.start} · ${tonight.taken} игрока`, call: { activate: 'voip|call' } }),
    ui.scroll(ui.chat([
      ui.day('Сегодня'),
      ui.bubble({ text: `<b class="st-who">${people.masha.name}</b>Стол собран, четыре из четырёх. Зал у окна`, time: '12:02' }),
      ui.bubble({ text: `<b class="st-who">${people.masha.name}</b>Я принесу базовую коробку. Кто возьмёт дополнение?`, time: '12:08' }),
      ui.bubble({ out: true, text: 'Беру дополнение и жетоны', time: '12:11', read: true }),
      ui.voice({ dur: '0:12', time: '12:14' }),
      ui.list([ui.row({ lead: ui.leadIcon('bell'), title: 'Сообщения стола с именами', sub: 'Видно, кто пишет, даже когда «Стол» закрыт', activate: 'commnotif|chat' })]),
      ui.granted('commnotif', `Сообщения придут с именем: ${people.masha.name}`),
    ])),
    ui.denied('voip', 'Звонок стола выключен — договоритесь в сообщениях'),
    ui.denied('mic', 'Голосовые выключены — напишите сообщение'),
    ui.composer({ attach: { go: 'compose' }, mic: { ask: 'mic|chat|chat' } }),
  ],
});
