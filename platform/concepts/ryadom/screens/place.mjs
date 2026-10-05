import { THEME } from './_shared.mjs';
import { club } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'place', theme: THEME,
  body: [
    ui.nav({ title: 'Точка старта', back: 'close' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Название места' }) }),
      ui.denied('location'),
      ui.section({ title: 'Рядом', children: ui.list([
        ui.row({ lead: ui.leadIcon('map-pin', { accent: true }), title: `${club.name}, главный вход`, sub: '120 м · здесь собирается утренняя группа', go: 'compose', primary: true }),
        ui.row({ lead: ui.leadIcon('map-pin'), title: 'Парк у восточного фонтана', sub: '340 м · запасная точка после дождя', go: 'compose' }),
        ui.row({ lead: ui.leadIcon('map-pin'), title: 'Вход на набережную', sub: '2,7 км · для тех, кто присоединится позже', go: 'compose' }),
      ]) }),
    ]),
  ],
});
