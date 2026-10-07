import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: [ui.group({ cells: [
        ui.cell({ icon: 'user', title: 'Профиль и аккаунт', sub: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'bell', title: 'Уведомления', value: 'Тренировки', go: 'notif' }),
      ] })] }),
      ui.section({ children: ui.group({ label: 'Вне приложения', cells: [
        ui.cell({ icon: 'layout-grid', title: 'Виджет на экран «Домой»', sub: 'Неделя и ближайшая тренировка', activate: 'appgroups|widget' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Приватность', cells: [
        ui.cell({ icon: 'eye', title: 'Мой дневник', value: 'Только я' }),
        ui.cell({ icon: 'route', title: 'Кто видит меня в пути', value: 'Группа' }),
      ] }) }),
    ]),
  ],
});
