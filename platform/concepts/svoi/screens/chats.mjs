import { THEME, TABS } from './_shared.mjs';
import { family, home, people, ad, voices } from '../model.mjs';

/* Список чатов по времени: семья сверху, папки — чипсами на месте, реклама — одна карточка внизу */
export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Чаты', ui.iconButton({ icon: 'square-pen', label: 'Новый чат', go: 'newchat' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по чатам и сообщениям' }) }),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Семья', filter: 'family' },
      { label: 'Школа и кружки', filter: 'school' },
      { label: 'Непрочитанные', filter: 'unread' },
    ]) }),
    ui.section({ children: [
      ui.dialog({ initial: people.timur.initial, name: people.timur.short, text: `Буду к ${home.timurBack}`, time: '16:01', unread: 1, go: 'timur', tags: ['family', 'unread'] }),
      ui.dialog({ initial: family.initial, name: family.name, text: `<b>Тимур:</b> задержусь до ${home.timurBack}, ужинайте без меня`, time: '15:58', unread: 4, go: 'family', primary: true, tags: ['family', 'unread'] }),
      ui.dialog({ initial: people.danya.initial, name: people.danya.short, text: 'Можно к Артёму после плавания? До восьми', time: '15:43', unread: 2, go: 'danya', tags: ['family', 'unread'] }),
      ui.dialog({ initial: people.roza.initial, name: people.roza.short, text: `Голосовое · ${voices.list[3][0]}`, time: '15:20', unread: 2, online: true, go: 'mama', tags: ['family', 'unread'] }),
      ui.dialog({ initial: '5Б', name: '5 «Б» · родители', text: `<b>${people.teacher.name}:</b> собрание 14 октября в 19:00`, time: '13:12', unread: 11, muted: true, go: 'school', tags: ['school', 'unread'] }),
      ui.dialog({ initial: 'ИЗ', name: 'Избранное', text: 'Полис ОМС Милы.pdf · 180 КБ', time: 'вчера', go: 'saved', tags: [] }),
    ] }),
    ui.section({ children: ui.adCard({ icon: 'shopping-basket', title: ad.title, sub: `Реклама · ${ad.text}`, subGranted: 'Реклама · подобрано по интересам: кружки и товары рядом', go: 'ads' }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
