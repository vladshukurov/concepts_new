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
        ui.cell({ icon: 'bell', title: 'Напоминания', sub: 'Готовки вместе и покупки', toggle: false, ask: 'push|settings|settings' }),
        ui.cell({ icon: 'message-circle', title: 'Сообщения ужина', sub: 'С именами и аватарами', toggle: false, activate: 'commnotif|settings' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Вне приложения', cells: [
        ui.cell({ icon: 'layout-grid', title: 'Виджет на экран «Домой»', sub: 'Следующий шаг и таймер', activate: 'appgroups|widget' }),
        ui.cell({ icon: 'key', title: 'Вход на сайте доставки', value: 'lavka-gryadka.kz', activate: 'autofill|fill' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'На кухне', cells: [
        ui.cell({ icon: 'headphones', title: 'Рецепт вслух', sub: 'Шаги звучат в фоне', go: 'audio' }),
        ui.cell({ icon: 'tv', title: 'Экран на кухне', sub: 'Крупные шаги и таймер', go: 'kitchen' }),
      ] }) }),
      ui.denied('push'),
      ui.denied('commnotif'),
    ]),
  ],
});
