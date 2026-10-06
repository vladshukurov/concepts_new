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
          ui.cell({ icon: 'message-circle', title: 'Сообщения', sub: 'С именем и фото отправителя', toggle: false, activate: 'commnotif|settings' }),
          ui.cell({ icon: 'stethoscope', title: 'Здоровье', sub: 'Прививки и приёмы', toggle: true }),
        ] }),
        ui.denied('push'),
      ] }),
      ui.section({ children: ui.group({ label: 'Без сети', cells: [
        ui.cell({ icon: 'download', title: 'Без сети', value: 'Ветпаспорт', go: 'refresh', primary: true }),
        ui.cell({ icon: 'download', title: 'Фото в дневнике', value: 'Высокое качество' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'На устройстве', cells: [
        ui.cell({ icon: 'layout-grid', title: 'Виджет', value: 'Не добавлен', activate: 'appgroups|widget' }),
        ui.cell({ icon: 'key', title: 'Вход в кабинет клиники', value: 'svoi-vet.ru', activate: 'autofill|fill' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Приватность', cells: [
        ui.cell({ icon: 'scan-face', title: 'Замок Face ID', value: 'Ветпаспорт', ask: 'faceid|lock|lock' }),
        ui.cell({ icon: 'megaphone', title: 'Реклама', value: 'Без подбора', go: 'ads' }),
        ui.cell({ icon: 'shield', title: 'Жалобы и блокировки', toast: 'Жалобы и заблокированные' }),
        ui.cell({ icon: 'eye', title: 'Дневник Трюфеля', value: 'Только я' }),
      ] }) }),
      ui.foot('Выгул 1.4.2', 'is-block'),
    ]),
  ],
});
