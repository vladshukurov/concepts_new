import { THEME } from './_shared.mjs';
import { workshops, lamp, shift } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'workshop', theme: THEME,
  body: [
    ui.nav({ title: workshops.revers.name }),
    ui.scroll([
      ui.granted('wifiinfo', 'Вы в мастерской · отмечено на смене'),
      ui.section({ children: `<div class="uz-item"><small>${workshops.revers.address}</small><strong>${workshops.revers.name}</strong><span>${workshops.revers.what} · ${workshops.revers.places} рабочих мест · сегодня до ${workshops.revers.until}</span></div>` }),
      ui.section({ title: 'Сейчас в работе', children: ui.list([
        ui.row({ lead: ui.leadIcon('lamp', { accent: true }), title: lamp.title, sub: `Этап ${lamp.stage} из ${lamp.stages} · абажур`, go: 'project' }),
        ui.row({ lead: ui.leadIcon('armchair'), title: 'Стул С‑09', sub: 'Сушка клея до пятницы', go: 'project' }),
      ]) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'calendar', title: 'Смена сегодня', value: `${shift.start}–${shift.end}`, go: 'shift' }),
        ui.cell({ icon: 'wifi', title: 'Гостевой Wi‑Fi', value: workshops.revers.network, go: 'guestwifi' }),
      ] }) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Открыть ход смены', block: true, go: 'shiftlive', primary: true })]) }),
    ]),
  ],
});
