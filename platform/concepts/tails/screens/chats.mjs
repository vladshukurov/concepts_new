import { THEME, TABS, PET } from './_shared.mjs';
import { visit } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мессенджер', ui.iconButton({ icon: 'plus', label: 'Новый диалог', toast: 'Выберите друга' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по сообщениям' }) }),
    ui.section({ children: [
      ui.dialog({ face: PET.truffle, name: 'Ксения · Трюфель', text: 'Заберу Трюфеля в 19:15, если задержитесь', time: '9:38', unread: 2, online: true, go: 'chat', primary: true }),
      ui.dialog({ initial: 'ПУ', name: 'Прогулка у пруда · 6', text: 'Марат: вход с Каменноостровского закрыт, идём через Съезжинскую', time: '9:12', unread: 5, muted: true, go: 'chat' }),
      ui.dialog({ initial: 'МТ', name: 'Мария Тенищева · клиника', text: `Приём сдвинули на ${visit.day}, ${visit.time}`, time: 'вчера', go: 'chat' }),
      ui.dialog({ face: PET.loki, name: 'Марат · Локи', text: 'Спасибо за совет про свисток', time: 'пн', you: true, go: 'chat' }),
      ui.dialog({ face: PET.mint, name: 'Алёна · Мята', text: 'Голосовое · 0:24', time: '12 мая', go: 'chat' }),
    ] }),
    ui.section({ children: [
      ui.group({ cells: [ui.cell({ icon: 'bell', title: 'Фото собеседника в уведомлениях', sub: 'Имя и фото в баннере', toggle: false, activate: 'commnotif|chats' })] }),
      ui.granted('commnotif', 'Уведомления приходят с фото и именем собеседника'),
      ui.denied('commnotif', 'Уведомления приходят без фото, только с текстом'),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
