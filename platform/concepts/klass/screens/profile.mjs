import { THEME, TABS } from './_shared.mjs';
import { trip } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Профиль', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    `<div class="kl-me">${ui.avatar('ОЗ')}<h2>Ольга Захарова</h2><p class="ui-sub">Участок 12 · СНТ «Берёзка»</p>${ui.stats([['17', 'публикаций'], ['24', 'соседа'], ['2', 'поездки']])}${ui.actions([ui.button({ label: 'Опубликовать', icon: 'plus', go: 'compose' }), ui.button({ label: 'Изменить', variant: 'secondary', toast: 'Редактирование профиля' })], { row: true })}</div>`,
    ui.section({ children: ui.list([
      ui.row({ lead: ui.avatar('СБ'), title: 'СНТ «Берёзка»', sub: '28 участков, четырёх ещё не позвали', end: { badge: '4' }, go: 'classroom', primary: true }),
      ui.row({ lead: ui.leadIcon('users'), title: 'Соседи', sub: '24 в приложении', go: 'parents' }),
      ui.row({ lead: ui.leadIcon('calendar'), title: `Поездка на ярмарку ${trip.short}`, sub: 'Вы едете · отправление от главного въезда', go: 'event' }),
    ]) }),
    ui.section({ title: 'Мои публикации', meta: '17', children: '' }),
    ui.post({ author: { initial: 'ОЗ', name: 'Ольга Захарова', meta: 'сегодня, 08:20' }, text: 'Заявки на поездку принимают до четверга включительно. Я отметилась — осталось пять мест', likes: 12, comments: 5, views: 29, open: { go: 'post' }, discuss: { go: 'thread' }, menu: ['Закрепить', 'Изменить', 'Удалить'] }),
    ui.post({ author: { initial: 'ОЗ', name: 'Ольга Захарова', meta: '19 августа' }, text: 'Дом правления после субботника вымыли, новые шторы повесила Наталья. Осталась одна стена под покраску', likes: 34, comments: 18, views: 96, open: { go: 'post' }, menu: ['Закрепить', 'Изменить', 'Удалить'] }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
