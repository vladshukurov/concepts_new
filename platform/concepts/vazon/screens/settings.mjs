import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'user', title: 'Номер и вход', sub: '+7 900 123-45-67', go: 'account' }),
        ui.cell({ icon: 'shield', title: 'Конфиденциальность', sub: 'Данные и реклама', go: 'privacy' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Уведомления', cells: [
        ui.cell({ icon: 'droplets', title: 'Напоминания о поливе', sub: 'В 10:00 в день полива', toggle: true }),
        ui.cell({ icon: 'message-circle', title: 'Сообщения', sub: 'Звук и превью на экране блокировки', toggle: true }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Дом', cells: [
        ui.cell({ icon: 'layout-grid', title: 'Полив на экране «Домой»', sub: 'Кого полить сегодня', go: 'widget' }),
        ui.cell({ icon: 'droplets', title: 'Полив сегодня', sub: 'Список и погода', go: 'water' }),
      ] }) }),
    ]),
  ],
});
