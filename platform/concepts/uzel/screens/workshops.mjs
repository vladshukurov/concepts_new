import { THEME } from './_shared.mjs';
import { workshops, shift } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'workshops', theme: THEME,
  body: [
    ui.nav({ title: 'Мастерские', trailing: ui.iconButton({ icon: 'map-pin', label: 'Рядом со мной', go: 'nearby' }) }),
    ui.scroll([
      ui.section({ title: 'Ваши мастерские', children: ui.list([
        ui.row({ lead: ui.leadIcon('hammer', { accent: true }), title: workshops.revers.name, sub: `${workshops.revers.what} · ${workshops.revers.places} мест · до ${workshops.revers.until}`, go: 'workshop', primary: true }),
        ui.row({ lead: ui.leadIcon('plug'), title: workshops.electro.name, sub: `${workshops.electro.what} · ${workshops.electro.places} места · суббота`, go: 'workshop' }),
      ]) }),
      ui.section({ title: 'Ближайшая смена', children: ui.list([ui.row({ lead: ui.leadIcon('', { text: shift.start }), title: shift.title, sub: `${shift.workshop} · ${shift.free} свободных места`, go: 'shift' })]) }),
    ]),
  ],
});
