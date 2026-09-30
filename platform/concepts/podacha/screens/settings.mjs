import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'user', title: 'Профиль и аккаунт', sub: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'shield', title: 'Конфиденциальность', sub: 'Данные и реклама', go: 'privacy' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'bell', title: 'Напоминания', sub: 'Готовки и ответы авторов', toggle: false, ask: 'push|settings|settings' }),
        ui.cell({ icon: 'message-circle', title: 'Сообщения кухни', sub: 'С именами авторов', toggle: false, activate: 'commnotif|settings' }),
        ui.cell({ icon: 'badge-check', title: 'Важные ответы', sub: 'Когда автор проверил замену', activate: 'remotenotif|notif' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Лента и рецепты', cells: [
        ui.cell({ icon: 'repeat-2', title: 'Свежая лента к открытию', toggle: false, activate: 'fetch|settings' }),
        ui.cell({ icon: 'download', title: 'Подготовка рецептов', sub: 'Шаги сохраняются до начала', toggle: false, activate: 'processing|settings' }),
        ui.cell({ icon: 'clock', title: 'Проверить фоновые задачи', sub: 'Кэш и черновики', activate: 'bgtask|settings' }),
        ui.cell({ icon: 'key', title: 'Защищённый вход', sub: 'Не выходить после обновления', toggle: false, activate: 'keychain|settings' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'На кухне', cells: [
        ui.cell({ icon: 'headphones', title: 'Рецепт вслух', sub: 'Шаги звучат в фоне', go: 'audio' }),
        ui.cell({ icon: 'tv', title: 'Общий экран', sub: 'Крупные шаги и таймер', go: 'kitchen' }),
      ] }) }),
      ui.granted('bgtask', 'Фоновые задачи на месте · кэш 38 МБ'),
      ui.denied('push', 'Напоминания видны внутри приложения'),
      ui.denied('commnotif', 'Сообщения остаются во вкладке «Мессенджер»'),
    ]),
  ],
});
