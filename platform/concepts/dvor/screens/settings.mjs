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
      ui.section({ children: ui.group({ label: 'Уведомления и фон', cells: [
        ui.cell({ icon: 'layout-grid', title: 'Виджет на экран «Домой»', value: 'Не добавлен', activate: 'appgroups|widget' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Приватность', cells: [
        ui.cell({ icon: 'scan-face', title: 'Замок Face ID', toggle: false, ask: 'faceid|lock|settings' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: 'Случайная', go: 'ads' }),
      ] }) }),
      ui.denied('faceid'),
    ]),
  ],
});
