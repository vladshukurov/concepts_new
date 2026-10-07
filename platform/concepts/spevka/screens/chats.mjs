import { THEME, TABS } from './_shared.mjs';
import { choir, regent, people, ad, today } from '../model.mjs';

/* Список чатов по времени: хор сверху, чат партии и регент рядом, папки — чипсами на месте */
export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Чаты', ui.iconButton({ icon: 'square-pen', label: 'Новый чат', go: 'newchat' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по чатам и сообщениям' }) }),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Хор', filter: 'choir' },
      { label: 'Личные', filter: 'personal' },
      { label: 'Непрочитанные', filter: 'unread' },
    ]) }),
    ui.section({ children: [
      ui.dialog({ initial: choir.initial, name: choir.name, text: `<b>Олег:</b> опаздываю на 10 минут · пришли ${today.came} из ${choir.people}`, time: '19:02', unread: 12, go: 'choir', primary: true, tags: ['choir', 'unread'] }),
      ui.dialog({ initial: regent.initial, name: regent.name, text: 'Оля, задержитесь после спевки на 10 минут', time: '18:58', unread: 1, online: true, go: 'regent', tags: ['personal', 'unread'] }),
      ui.dialog({ initial: 'АП', name: 'Альты · партии', text: '<b>Ирина:</b> Голосовое · 3:40 · «Ой, то не вечер»', time: '18:44', unread: 3, go: 'altos', tags: ['choir', 'unread'] }),
      ui.dialog({ initial: 'ИЗ', name: 'Избранное', text: 'Ноты «Вечерний звон», альт.pdf · 1,2 МБ', time: '17:20', go: 'saved', tags: ['personal'] }),
    ] }),
    ui.section({ children: ui.adCard({ icon: 'megaphone', title: ad.title, sub: `Реклама · ${ad.text}`, subGranted: `Реклама по интересам · ${ad.personal}`, go: 'ads' }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
