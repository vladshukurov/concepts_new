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
        ui.cell({ icon: 'bell', title: 'Напоминания', sub: 'Готовки вместе и покупки', toggle: true }),
        ui.cell({ icon: 'message-circle', title: 'Сообщения ужина', sub: 'Звук и превью на экране блокировки', toggle: true }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'На кухне', cells: [
        ui.cell({ icon: 'headphones', title: 'Рецепт вслух', sub: 'С погашенным экраном', go: 'audio' }),
        ui.cell({ icon: 'tv', title: 'Экран на кухне', sub: 'Крупные шаги и таймер', go: 'kitchen' }),
      ] }) }),
    ]),
  ],
});
