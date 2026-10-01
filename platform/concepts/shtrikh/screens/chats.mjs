import { THEME, TABS } from './_shared.mjs';
import { people, pleinair } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер', ui.iconButton({ icon: 'square-pen', label: 'Новое сообщение', go: 'authors' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ initial: 'ЗБ', name: pleinair.title, text: `${people.marina.first}: у главного входа, возле часов`, time: '18:02', unread: 3, go: 'chat', primary: true }),
      ui.dialog({ initial: people.petr.initial, name: people.petr.name, text: 'Добавите мою работу в серию?', time: 'вчера', go: 'direct' }),
      ui.dialog({ initial: people.alina.initial, name: people.alina.name, text: 'Линер Sakura 0.3, бумага Fabriano', time: 'пн', you: true, go: 'direct' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
