import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'user', title: 'Профиль и аккаунт', sub: 'marina@inbox.ru', go: 'account' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'bell', title: 'Подписки', sub: '12 авторов', toggle: false, ask: 'push|settings|settings' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Лента', cells: [
        ui.cell({ icon: 'layout-grid', title: 'Виджет на экран «Домой»', value: 'Не добавлен', activate: 'appgroups|widget' }),
        ui.cell({ icon: 'key', title: 'Вход на сайте', value: 'looks.social', activate: 'autofill|fill' }),
        ui.cell({ icon: 'share', title: 'Поделиться в «Образы»', value: 'Из Safari', activate: 'shareext|shareext' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Приватность', cells: [
        ui.cell({ icon: 'scan-face', title: 'Замок Face ID', sub: 'На сохранённом и черновиках', toggle: false, ask: 'faceid|lock|settings' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: 'Без подбора', go: 'ads' }),
      ] }) }),
      ui.denied('push', 'Уведомления выключены — новые образы отмечаются точкой'),
      ui.denied('faceid', 'Face ID выключен — сохранённое открывается без замка'),
    ]),
  ],
});
