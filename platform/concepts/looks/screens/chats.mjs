import { THEME, TABS, P } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер', ui.iconButton({ icon: 'square-pen', label: 'Новое сообщение', go: 'mates' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ face: P.lera, name: 'Лера Савина', text: 'Покажете жакет? Посмотрю подкладку и ярлык', time: '13:12', unread: 2, online: true, go: 'chat', primary: true }),
      ui.dialog({ initial: 'СВ', name: 'Своп · Новая Голландия', text: 'Ксения: вход со стороны Бутылки', time: '12:40', unread: 14, muted: true, go: 'chat' }),
      ui.dialog({ face: P.yulia, name: 'Юля Карпова', text: 'Фиолетовое пальто беру, если не заберут', time: 'вчера', you: true, go: 'chat' }),
      ui.dialog({ face: P.mark, name: 'Марк Зотов', text: 'Голосовое · 0:24', time: 'пн', go: 'chat' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
