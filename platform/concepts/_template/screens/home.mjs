import { THEME, TABS } from './_shared.mjs';

/*
 * Экран — композиция компонентов ядра (kernel/components.mjs).
 * Сборка превращает этот модуль в home.html; руками HTML не правят.
 *
 * Доступ вызывается явным жестом: ask: 'ключ|куда при разрешении|куда при отказе'.
 * На экране, куда приводит отказ, лежит ui.denied('ключ', 'что работает вместо').
 * Своё у продукта — композиция и доменные компоненты в styles.css с префиксом концепта.
 */
export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Главная', ui.iconButton({ icon: 'settings', label: 'Настройки', go: 'settings' })),
    ui.section({ title: 'Раздел', children: ui.list([
      ui.row({ lead: ui.leadIcon('camera', { accent: true }), title: 'Действие, которому нужен доступ', sub: 'Что пользователь получит', ask: 'camera|home|home', primary: true }),
    ]) }),
    ui.denied('camera', 'Нет доступа к камере — что остаётся работать вместо неё'),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home' }),
});
