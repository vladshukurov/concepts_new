import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'user', title: 'Профиль и аккаунт', sub: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'shield', title: 'Приватность', sub: 'Черновики, вход, реклама', go: 'privacy' }),
        ui.cell({ icon: 'bell', title: 'Уведомления', value: 'Встречи', go: 'notif' }),
        ui.cell({ icon: 'layout-grid', title: 'Виджет серии', value: 'Не добавлен', activate: 'appgroups|widget' }),
      ] }) }),
    ]),
  ],
});
