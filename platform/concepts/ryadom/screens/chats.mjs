import { THEME, TABS } from './_shared.mjs';
import { people, longrun } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер', ui.iconButton({ icon: 'square-pen', label: 'Новое сообщение', go: 'friends' })),
    ui.section({ children: [ui.list([ui.row({ lead: ui.leadIcon('bell'), title: 'Уведомления', sub: 'Сообщения с именем и фото', end: { value: 'Включить', activate: 'commnotif|chats', label: 'Включить уведомления о сообщениях' } })]), ui.granted('commnotif', 'Сообщения приходят с именем и фото')] }),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ initial: 'СЛ', name: longrun.title, text: `${longrun.host.first}: точка старта у главного входа`, time: '7:12', unread: 3, go: 'chat', primary: true }),
      ui.dialog({ initial: people.dasha.initial, name: people.dasha.name, text: 'Иду от метро, начинайте разминку без меня', time: '7:16', online: true, go: 'chat' }),
      ui.dialog({ initial: people.alina.initial, name: people.alina.name, text: 'Спасибо за объезд на мосту', time: 'вчера', you: true, go: 'chat' }),
      ui.dialog({ initial: 'CC', name: 'Central Club · объявления', text: 'Новая форма для бассейна', time: 'чт', muted: true, unread: 2, go: 'chat' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
