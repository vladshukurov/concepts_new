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
      ] }) }),
      ui.section({ children: ui.group({ label: 'На кухне', cells: [
        ui.cell({ icon: 'headphones', title: 'Рецепт вслух', sub: 'Шаги звучат в фоне', go: 'audio' }),
        ui.cell({ icon: 'tv', title: 'Общий экран', sub: 'Крупные шаги и таймер', go: 'kitchen' }),
      ] }) }),
      ui.denied('push'),
      ui.denied('commnotif'),
    ]),
  ],
});
