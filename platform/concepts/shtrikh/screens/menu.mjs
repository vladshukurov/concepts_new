import { THEME, TABS } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'menu', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Сервисы', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    ui.section({ children: ui.list([ui.row({ lead: ui.avatar(people.me.initial), title: people.me.name, sub: 'Мой профиль · 36 работ', go: 'profile', primary: true })]) }),
    ui.section({ children: ui.group({ cells: [
      ui.cell({ icon: 'images', title: 'Мои серии', value: '7', go: 'series' }),
      ui.cell({ icon: 'users', title: 'Авторы', sub: 'Знакомые и подписки', go: 'authors' }),
      ui.cell({ icon: 'tv', title: 'Экран выставки', sub: 'Ваши работы на общем экране', go: 'exhibit' }),
      ui.cell({ icon: 'shield', title: 'Приватность', go: 'privacy' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'menu' }),
});
