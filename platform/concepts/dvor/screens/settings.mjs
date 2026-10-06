import { THEME } from './_shared.mjs';
import { house, people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'user', title: 'Профиль и аккаунт', sub: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'house', title: 'Мой дом', sub: `${house.address}, кв. ${people.me.flat} · подтверждён`, go: 'verify' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Квартира', cells: [
        ui.cell({ icon: 'layout-grid', title: 'Виджет на экран «Домой»', value: 'Не добавлен', activate: 'appgroups|widget' }),
        ui.cell({ icon: 'gauge', title: 'Счётчики', value: 'Вода, свет' }),
        ui.cell({ icon: 'users', title: 'Живут со мной', value: '2 человека' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Приватность', cells: [
        ui.cell({ icon: 'scan-face', title: 'Замок Face ID', toggle: false, ask: 'faceid|lock|settings' }),
      ] }) }),
      ui.denied('faceid'),
      ui.section({ children: ui.group({ label: 'О приложении', cells: [
        ui.cell({ icon: 'message-circle', title: 'Помощь и поддержка', toast: 'Чат поддержки открыт' }),
        ui.cell({ icon: 'file-text', title: 'Политика конфиденциальности', toast: 'dvor.app/privacy' }),
      ] }) }),
    ]),
  ],
});
