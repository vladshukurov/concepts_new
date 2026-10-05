import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер', ui.iconButton({ icon: 'plus', label: 'Новый диалог', go: 'neighbors' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ initial: 'МК', name: 'Марина, кв. 48', text: 'Мастер будет с 16:00, я открою подъезд', time: '9:21', unread: 2, online: true, go: 'chat', primary: true }),
      ui.dialog({ initial: '3П', name: '3 подъезд · 18 жильцов', text: 'Пётр: код калитки теперь 4417', time: '9:07', unread: 7, muted: true, go: 'chat' }),
      ui.dialog({ initial: 'ПИ', name: 'Пётр Ильин, кв. 66', text: 'На 14-е беру отгул, встречу бригаду', time: 'вчера', you: true, go: 'chat' }),
      ui.dialog({ initial: 'УК', name: 'Управляющая компания', text: 'Елена: мастер будет с 16:00', time: '9:21', unread: 1, go: 'ukchat' }),
      ui.dialog({ initial: 'ИТ', name: 'Ирина, кв. 78', text: 'Голосовое · 0:31', time: '3 апреля', go: 'chat' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
