import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'user', title: 'Профиль и аккаунт', sub: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'bell', title: 'Уведомления', value: 'Тренировки', go: 'notif' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Приватность', cells: [
        ui.cell({ icon: 'eye', title: 'Кто видит тренировки', value: 'Клуб', toast: 'Тренировки видны клубу' }),
        ui.cell({ icon: 'route', title: 'Кто видит меня в пути', value: 'Группа', toast: 'Отметки видит только группа тренировки' }),
      ] }) }),
    ]),
  ],
});
