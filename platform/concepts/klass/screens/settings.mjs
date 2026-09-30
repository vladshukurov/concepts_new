import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'user', title: 'Профиль и аккаунт', sub: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'key', title: 'Одна сессия на расширения', sub: 'Уведомления и «Поделиться» без повторного входа', toggle: true, activate: 'keychain|settings' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Фоновые задачи', cells: [
        ui.cell({ icon: 'house', title: 'Лента к первому открытию', sub: 'Последний раз в 06:12', toggle: true, activate: 'fetch|settings' }),
        ui.cell({ icon: 'images', title: 'Разобрать альбом', sub: 'На зарядке · разобрано 62 % из 312', activate: 'processing|settings' }),
        ui.cell({ icon: 'clock', title: 'Фоновые задачи', value: '2', activate: 'bgtask|settings' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Оповещения', cells: [
        ui.cell({ icon: 'bell', title: 'Что приходит', value: 'Ответы и собрания', go: 'notif' }),
      ] }) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Разобрать архив', variant: 'secondary', block: true, primary: true, toast: 'Разбор архива продолжится на зарядке' })]) }),
    ]),
  ],
});
