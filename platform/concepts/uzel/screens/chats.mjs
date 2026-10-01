import { THEME, TABS } from './_shared.mjs';
import { people, shift } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер', ui.iconButton({ icon: 'square-pen', label: 'Новое сообщение', go: 'contacts' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ initial: 'РВ', name: `Смена · ${shift.workshop}`, text: `${people.pavel.first}: Т‑18 на стенде, кто свободен?`, time: '19:44', unread: 4, go: 'chat', primary: true }),
      ui.dialog({ initial: people.irina.initial, name: people.irina.name, text: 'Кольцо 238 мм, ткань возьму плотнее', time: '19:20', online: true, go: 'chat' }),
      ui.dialog({ initial: people.anton.initial, name: people.anton.name, text: 'Термореле приедет в субботу', time: 'вчера', you: true, go: 'chat' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
