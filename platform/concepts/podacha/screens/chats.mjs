import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер', ui.iconButton({ icon: 'square-pen', label: 'Новое сообщение', go: 'following' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ initial: 'АР', name: 'Ужин из одной сковороды', text: 'Амина: шаг 2 открою через 5 минут', time: '19:18', unread: 4, go: 'conversation', primary: true }),
      ui.dialog({ initial: 'ЖК', name: 'Жанна Ким', text: 'Да, тахини можно заменить йогуртом', time: 'вчера', online: true, go: 'direct-zhanna' }),
      ui.dialog({ initial: 'ТС', name: 'Тимур Садыков', text: 'Рецепт · Хачапури на сковороде', time: 'пн', you: true, go: 'direct-timur' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
