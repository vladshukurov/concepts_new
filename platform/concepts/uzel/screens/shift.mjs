import { THEME } from './_shared.mjs';
import { shift, workshops } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'shift', theme: THEME,
  body: [
    ui.nav({ title: 'Смена', trailing: ui.iconButton({ icon: 'message-circle', label: 'Чат смены', go: 'chat' }) }),
    ui.scroll([
      ui.section({ children: `<div class="uz-item"><small>Сегодня · ${workshops.revers.name}</small><strong>${shift.title}</strong><span>${shift.start}–${shift.end} · ${shift.free} свободных места из ${shift.seats}</span></div>` }),
      ui.section({ title: 'Вещи смены', children: ui.list([
        ui.row({ lead: ui.leadIcon('lamp'), title: 'Лампа Л‑74', sub: 'Абажур', go: 'project' }),
        ui.row({ lead: ui.leadIcon('plug'), title: 'Тостер Т‑18', sub: 'Диагностика', go: 'project' }),
      ]) }),
      ui.section({ children: [
        ui.actions([
          ui.button({ label: 'Записаться на роль', block: true, go: 'schedule', primary: true }),
          ui.button({ label: 'Добавить в Календарь', icon: 'calendar-plus', variant: 'secondary', block: true, ask: 'calendar|shift|shift' }),
          ui.button({ label: 'Ход смены', variant: 'tertiary', block: true, go: 'shiftlive' }),
        ]),
        ui.granted('calendar', `Смена в Календаре · сегодня, ${shift.start}`),
        ui.denied('calendar', `Сохраните вручную: сегодня, ${shift.start} · ${workshops.revers.address}`),
      ] }),
    ]),
  ],
});
