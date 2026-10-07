import { THEME, TABS } from './_shared.mjs';
import { trip, meet, people, trips, ad } from '../model.mjs';

/* Список чатов по времени: поездка сверху, папки — чипсами на месте */
export default (ui) => ui.screen({
  id: 'chats', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Чаты', ui.iconButton({ icon: 'square-pen', label: 'Новый чат', go: 'contacts' })),
    ui.section({ children: ui.search({ placeholder: 'Поиск по чатам и сообщениям' }) }),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Поездки', filter: 'trips' },
      { label: 'Личные', filter: 'personal' },
      { label: 'Непрочитанные', filter: 'unread' },
    ]) }),
    ui.section({ children: [
      ui.dialog({ initial: trip.initial, name: trip.name, text: `<b>Аня:</b> спускаюсь, 3 минуты · сбор в ${meet.time}`, time: '9:39', unread: 23, go: 'trip', primary: true, tags: ['trips', 'unread'] }),
      ui.dialog({ initial: people.marat.initial, name: people.marat.name, text: 'Ок, Рустам начнёт у Спасской башни в 10:30', time: '9:24', you: true, online: true, go: 'chat', tags: ['personal'] }),
      ui.dialog({ initial: people.lena.initial, name: people.lena.name, text: 'Давай! Привезу чак-чак', time: '9:01', you: true, go: 'lena', tags: ['personal'] }),
      ui.dialog({ initial: 'ИЗ', name: 'Избранное', text: 'Билет Казань — Москва.pdf · 214 КБ', time: '8:05', go: 'saved', tags: ['personal'] }),
      ui.dialog({ initial: 'ПН', name: trips.pskov.name, text: `<b>Лена:</b> бронь на 9 человек, ждём ещё двоих`, time: 'вчера', unread: 4, muted: true, go: 'pskov', tags: ['trips', 'unread'] }),
      ui.dialog({ initial: people.rustam.initial, name: people.rustam.name, text: 'Голосовое · 1:12 · про Свияжск', time: 'вчера', unread: 1, go: 'rustam', tags: ['personal', 'unread'] }),
      ui.dialog({ initial: 'М', name: 'Мама', text: 'Пропущенный звонок · 21:40', time: 'вчера', go: 'mama', tags: ['personal'] }),
      ui.dialog({ initial: 'АЛ', name: 'Алтай · август', text: '<b>Игорь:</b> фильм поездки готов, 12:40', time: '28 августа', go: 'altai', tags: ['trips'] }),
      ui.dialog({ initial: 'КС', name: ad.title, text: `Реклама · ${ad.text}`, time: 'реклама', toast: 'Реклама · откроется сайт катера' }),
    ] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'chats' }),
});
