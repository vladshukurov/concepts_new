import { THEME, TABS, who } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер'),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ ...who('lera'), name: 'Лера Савина', text: 'Голосовое · 0:09', time: '9:37', unread: 2, online: true, go: 'chat', primary: true }),
      ui.dialog({ initial: 'СВ', name: 'Своп · Новая Голландия', text: 'Аня: вход со стороны Бутылки', time: '9:24', unread: 14, muted: true, go: 'chat-group' }),
      ui.dialog({ ...who('yura'), name: 'Юра Карпов', text: 'Фиолетовое пальто беру, если не заберут', time: 'вчера', you: true, go: 'chat-yura' }),
      ui.dialog({ ...who('mark'), name: 'Марк Зотов', text: 'Принеси на своп в субботу, заберу', time: 'пн', go: 'chat-mark' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
