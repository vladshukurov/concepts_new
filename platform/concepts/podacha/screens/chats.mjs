import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер', ui.iconButton({ icon: 'square-pen', label: 'Новое сообщение', go: 'following' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ initial: 'АР', name: 'Ужин из одной сковороды', text: 'Амина: голосовое · 0:12', time: '19:18', unread: 4, go: 'conversation', primary: true }),
      ui.dialog({ initial: 'ЖК', name: 'Жанна Ким', text: 'Рецепт · Чечевичный суп', time: 'вчера', online: true, go: 'direct-zhanna' }),
      ui.dialog({ initial: 'ТС', name: 'Тимур Садыков', text: 'Голосовое · 0:21', time: 'пн', go: 'direct-timur' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
