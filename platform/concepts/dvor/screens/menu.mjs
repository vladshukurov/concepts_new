import { THEME, TABS } from './_shared.mjs';
import { meters } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'menu', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Меню', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    ui.section({ children: [
      ui.list([ui.row({ lead: ui.avatar('АР'), title: 'Анна Разумова', sub: 'Кв. 74 · 3 подъезд · дом подтверждён', go: 'me' })]),
      ui.stats([['18', 'соседей в чате'], ['1', 'открытая заявка'], [meters.left.split(' ')[0], `${meters.left.split(' ')[1]} до показаний`]]),
    ] }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'users', title: 'Соседи', value: '18', go: 'neighbors' }),
      ui.cell({ icon: 'gauge', title: 'Счётчики', value: `до ${meters.deadlineLabel}`, go: 'meters' }),
      ui.cell({ icon: 'key', title: 'Пароли дома', value: '2', go: 'passwords' }),
      ui.cell({ icon: 'wifi', title: 'Домашний Wi‑Fi', value: 'новый роутер', go: 'guest' }),
      ui.cell({ icon: 'images', title: 'Хроника', go: 'chronicle' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'megaphone', title: 'Реклама', value: '<span data-hide-granted="tracking">Случайная</span><span class="perm-hidden" data-show-granted="tracking">Местная</span>', go: 'ads' }),
      ui.cell({ icon: 'house', title: 'Схема двора', value: '3 корпуса', go: 'yard' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'menu' }),
});
