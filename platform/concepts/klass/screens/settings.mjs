import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'settings', theme: THEME,
  body: [
    ui.nav({ title: 'Настройки' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'user', title: 'Профиль и аккаунт', sub: '+7 900 123-45-67', go: 'account' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Оповещения', cells: [
        ui.cell({ icon: 'bell', title: 'Что приходит', value: 'Ответы и собрания', go: 'notif' }),
      ] }) }),
      ui.section({ children: ui.group({ label: 'Приватность', cells: [
        ui.cell({ icon: 'eye', title: 'Кто видит номер участка', value: 'Соседи', go: 'classroom' }),
        ui.cell({ icon: 'download', title: 'Записи без сети', value: '512 МБ', go: 'records' }),
      ] }) }),
    ]),
  ],
});
