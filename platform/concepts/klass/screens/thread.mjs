import { THEME, who } from './_shared.mjs';

const replies = [
  ['ЕС', 'Елена Соколова · участок 24', 'Я поеду на машине, могу взять троих от главного въезда', '14:02'],
  ['ИМ', 'Илья Макаров · участок 18', 'Я в автобусе, но обратно могу вернуться с Еленой', '14:31'],
  ['АВ', 'Анна Викторовна', 'Автобус поедет от главного въезда ровно в 09:30', '15:08'],
  ['МП', 'Марина Петрова · участок 7', 'Поеду из города напрямую, встретимся на ярмарке', '16:40'],
];
export default (ui) => ui.screen({
  id: 'thread', theme: THEME,
  body: [
    ui.nav({ title: 'Обсуждение' }),
    ui.scroll([
      ui.post({ author: { initial: 'НЧ', name: 'Наталья Чернова', meta: 'участок 31 · 9 сентября' }, text: 'Кто едет на ярмарку на машине и может взять соседей? В автобусе осталось только пять мест', attach: ui.list([ui.row({ lead: ui.leadIcon('calendar', { accent: true }), title: 'Поездка на садовую ярмарку', sub: '12 сентября · записались 18 из 28', go: 'event' })]), likes: 6 }),
      ui.section({ title: 'Ответы', meta: '9', children: [
        ui.chat([
          ...replies.map(([, n, t, time]) => ui.bubble({ text: `<b class="kl-who">${n}</b>${t}`, time })),
          ui.bubble({ out: true, text: 'Я в автобусе, займу место у окна для Натальи', time: '16:52', read: true }),
        ]),
        ui.list([ui.row({ lead: ui.leadIcon('bell'), title: 'Следить за обсуждением', sub: 'Ответы придут с именем соседа', activate: 'commnotif|thread' })]),
        ui.granted('commnotif', 'Ответы придут с именем и фото соседа'),
      ] }),
    ]),
    ui.composer({ placeholder: 'Ответить', attach: { go: 'album' }, send: { toast: 'Ответ отправлен', primary: true } }),
  ],
});
