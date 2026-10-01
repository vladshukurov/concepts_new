import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'profile', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Профиль', ui.iconButton({ icon: 'shield', label: 'Защита и вход', go: 'security' })),
    `<div class="kt-me">${ui.avatar('АР')}<div><h2>Айжан Рахмет</h2><p>Алматы · средний формат · Lab-Red</p></div></div>`,
    `<div class="kt-me-block">${ui.stats([['24', 'листа'], ['11', 'прогулок'], ['8', 'передач']])}${ui.actions([ui.button({ label: 'Новый контакт-лист', icon: 'plus', block: true, primary: true, go: 'compose' })])}</div>`,
    ui.section({ children: ui.group({ label: 'Сообщество', cells: [
      ui.cell({ icon: 'users', title: 'Знакомые фотографы', sub: '18 в Контуре · 4 новых', go: 'contacts' }),
      ui.cell({ icon: 'bell', title: 'Уведомления', sub: 'Готовность листов, прогулки, передачи', go: 'notifications' }),
      ui.cell({ icon: 'store', title: 'Предложения мастерских', value: 'Обычные', go: 'ads' }),
    ] }) }),
    ui.section({ children: ui.group({ label: 'Устройство', cells: [
      ui.cell({ icon: 'user', title: 'Профиль и аккаунт', sub: '+7 900 123-45-67', go: 'account' }),
      ui.cell({ icon: 'layout-grid', title: 'Виджет', sub: 'Следующая прогулка и передача', go: 'widget' }),
      ui.cell({ icon: 'shield', title: 'Защита и вход', sub: 'Face ID, сайт и расширения', go: 'security' }),
    ] }) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'profile' }),
});
