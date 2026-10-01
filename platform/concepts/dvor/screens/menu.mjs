import { THEME, TABS } from './_shared.mjs';
import { meters } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'menu', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Меню', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    ui.section({ children: [
      ui.list([ui.row({ lead: ui.avatar('АР'), title: 'Анна Разумова', sub: 'Кв. 74 · 3 подъезд · дом подтверждён', go: 'profile' })]),
      ui.stats([['18', 'соседей рядом'], ['4', 'открытых заявки'], ['6', 'дней до показаний']]),
    ] }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'users', title: 'Соседи', value: '18', go: 'neighbors' }),
      ui.cell({ icon: 'gauge', title: 'Счётчики', value: `до ${meters.deadlineLabel}`, go: 'meters' }),
      ui.cell({ icon: 'key', title: 'Пароли дома', value: '3', go: 'passwords' }),
      ui.cell({ icon: 'wifi', title: 'Гостевая сеть', go: 'guest' }),
      ui.cell({ icon: 'images', title: 'Хроника', go: 'chronicle' }),
    ] }) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'megaphone', title: 'Реклама', value: 'Случайная', go: 'ads' }),
      ui.cell({ icon: 'house', title: 'Схема двора', value: '3 корпуса', go: 'yard' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'menu' }),
});
