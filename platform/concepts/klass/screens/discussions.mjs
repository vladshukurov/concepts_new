import { THEME, TABS } from './_shared.mjs';
import { trip } from '../model.mjs';

const topics = [
  ['Кто едет на ярмарку и где свободные места', 'Наталья Чернова · 9 ответов · час назад', '4'],
  ['Что посадим у детской площадки', 'Елена Соколова · 41 ответ · выбрали кусты', 'вчера'],
  ['Нужен ли второй контейнер', 'Илья Макаров · ответов пока нет', '2 сентября'],
  ['Какой щебень взять для въезда', 'Марина Петрова · 7 ответов · три варианта', '28 августа'],
  ['Когда ремонтируем северную дорогу', 'Елена Соколова · 12 ответов · подрядчик в четверг', '19 августа'],
  ['Кто дежурит у ворот в выходные', 'Илья Макаров · 4 ответа · график закреплён', '11 августа'],
  ['Когда снова включат воду', 'Анна Викторовна · 6 ответов · к 18:00', '2 августа'],
];
export default (ui) => ui.screen({
  id: 'discussions', theme: THEME,
  body: ui.scroll([
      ui.section({ children: [ui.list([ui.row({ lead: ui.leadIcon('bell'), title: 'Уведомления', sub: 'Сообщения с именем и фото', end: { value: 'Включить', activate: 'commnotif|discussions', label: 'Включить уведомления о сообщениях' } })]), ui.granted('commnotif', 'Сообщения приходят с именем и фото')] }),
    ui.largeTitle('Обсуждения', ui.iconButton({ icon: 'plus', label: 'Спросить', sr: 'Спросить', go: 'compose', primary: true })),
    ui.section({ children: ui.list(topics.map(([t, s, v], i) => ui.row({ lead: ui.avatar(s.split(' ').slice(0, 2).map((w) => w[0]).join('')), title: t, sub: i === 0 ? s : `${s} · ${v}`, wrap: true, end: i === 0 ? { badge: v } : undefined, go: 'thread' }))) }),
    ui.section({ children: ui.list([ui.row({ lead: `<span class="ui-thumb ph"></span>`, title: `Поездка на ярмарку ${trip.short}`, sub: 'Обсуждение привязано к поездке', go: 'event' })]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'discussions' }),
});
