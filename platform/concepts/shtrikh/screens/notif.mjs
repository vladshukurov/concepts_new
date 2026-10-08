import { THEME } from './_shared.mjs';

/* Тихие часы: ночью уведомления встреч и чатов не звучат */
export default (ui) => ui.screen({
  id: 'notif', theme: THEME,
  body: [
    ui.nav({ title: 'Тихие часы' }),
    ui.scroll([
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'moon', title: 'Тихие часы', sub: 'Уведомления приходят без звука', toggle: true }),
        ui.cell({ title: 'С', value: '23:00' }),
        ui.cell({ title: 'До', value: '08:00' }),
      ] }) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'calendar', title: 'Кроме встреч сегодня', sub: 'Перенос утренней встречи придёт со звуком', toggle: true }),
      ] }) }),
    ]),
  ],
});
