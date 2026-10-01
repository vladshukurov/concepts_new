import { THEME, TABS } from './_shared.mjs';
import { people, tonight, saturday } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер', ui.iconButton({ icon: 'square-pen', label: 'Новое сообщение', go: 'direct' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ initial: 'ЛС', name: `${tonight.game} · ${tonight.start}`, text: `${tonight.host.first}: беру базовую коробку`, time: '12:14', unread: 2, go: 'chat', primary: true }),
      ui.dialog({ initial: 'МС', name: saturday.game, text: `${people.ilya.first} сдвинул на ${saturday.start}`, time: 'вчера', go: 'chat' }),
      ui.dialog({ initial: people.zhenya.initial, name: people.zhenya.name, text: 'Сыграем ещё раз на неделе?', time: 'пн', online: true, go: 'direct' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
