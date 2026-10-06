import { THEME, TABS, PET } from './_shared.mjs';
import { visit } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер', ui.iconButton({ icon: 'square-pen', label: 'Новое сообщение', go: 'mates' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ face: PET.barni, name: 'Влада · Барни', text: 'Заберу Барни в 19:15, если задержусь', time: '9:38', unread: 2, online: true, go: 'chat', primary: true }),
      ui.dialog({ initial: 'ПУ', name: 'Прогулка у пруда · 6', text: 'Марат: вход с Каменноостровского закрыт, идём через Съезжинскую', time: '9:12', unread: 5, muted: true, go: 'chat' }),
      ui.dialog({ initial: 'МТ', name: 'Мария Тенищева · клиника', text: `Приём сдвинули на ${visit.day}, ${visit.time}`, time: 'вчера', go: 'chat' }),
      ui.dialog({ face: PET.loki, name: 'Марат · Локи', text: 'Спасибо за совет про свисток', time: 'пн', you: true, go: 'chat' }),
      ui.dialog({ face: PET.mint, name: 'Алёна · Мята', text: 'Голосовое · 0:24', time: '12 мая', go: 'chat' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
