import { THEME, TABS } from './_shared.mjs';
import { people, longrun, dashaLate } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер'),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ initial: people.dasha.initial, name: people.dasha.name, text: dashaLate.text, time: dashaLate.time, online: true, unread: 1, go: 'direct' }),
      ui.dialog({ initial: 'СЛ', name: longrun.title, text: `${people.dasha.first}: голосовое сообщение`, time: '7:16', unread: 1, go: 'chat', primary: true }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
