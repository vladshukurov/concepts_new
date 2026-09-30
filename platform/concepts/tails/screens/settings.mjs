import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'user', title: 'Профиль и аккаунт', sub: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'smartphone', title: 'Устройства', value: 'iPhone 13 и ещё 1', toast: 'Устройства аккаунта' }),
      ] }) }),
      ui.section({ children: [
        ui.group({ label: 'Уведомления', cells: [
          ui.cell({ icon: 'bell', title: 'Прогулки и ответы', toggle: false, ask: 'push|settings|settings' }),
          ui.cell({ icon: 'stethoscope', title: 'Здоровье', sub: 'Прививки и приёмы', toggle: true }),
        ] }),
        ui.denied('push', 'Уведомления выключены — новое отмечаем точками на вкладках'),
      ] }),
      ui.section({ children: ui.group({ label: 'Лента', cells: [
        ui.cell({ icon: 'repeat-2', title: 'Обновлять ленту в фоне', toggle: false, activate: 'fetch|settings', primary: true }),
        ui.cell({ icon: 'clock', title: 'Фоновая задача', value: '04:12', go: 'refresh' }),
        ui.cell({ icon: 'download', title: 'Качество загрузки', value: 'Высокое', toast: 'Высокое · 1,4 ГБ за месяц' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'На устройстве', cells: [
        ui.cell({ icon: 'layout-grid', title: 'Виджет', value: 'Не добавлен', activate: 'appgroups|widget' }),
        ui.cell({ icon: 'key', title: 'Вход на сайте', value: 'tails.social', activate: 'autofill|fill' }),
        ui.cell({ icon: 'share', title: 'Поделиться в «Хвосты»', value: '3 черновика', activate: 'shareext|shareext' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Приватность', cells: [
        ui.cell({ icon: 'scan-face', title: 'Замок Face ID', value: 'Ветпаспорт', ask: 'faceid|lock|lock' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: 'Без подбора', go: 'ads' }),
        ui.cell({ icon: 'shield', title: 'Жалобы и блокировки', toast: 'Жалобы, скрытые публикации и заблокированные' }),
        ui.cell({ icon: 'eye', title: 'Кто видит профиль Барни', value: 'Друзья', toast: 'Видят друзья' }),
      ] }) }),
      ui.foot('Хвосты 1.4.2', 'is-block'),
    ]),
  ],
});
