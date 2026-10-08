import { THEME, TABS } from './_shared.mjs';
import { swap } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер', ui.iconButton({ icon: 'square-pen', label: 'Новое сообщение', go: 'direct-ira' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ initial: 'ИБ', name: 'Ира Белова', text: `Фото · меняемся ${swap.when}?`, time: '8:12', unread: 2, online: true, go: 'direct-ira', primary: true }),
      ui.dialog({ initial: 'М', name: 'Мама', text: 'Фиалку не заливай, она этого не любит', time: 'вт', go: 'direct-mama' }),
      ui.dialog({ initial: 'ОС', name: 'Оля Сафина', text: 'Вы: Полью в выходные, не переживай', time: '28 сен', go: 'direct-olya' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
