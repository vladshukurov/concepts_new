import { THEME } from './_shared.mjs';
import { club } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'place', theme: THEME,
  body: [
    ui.nav({ title: 'Точка старта', back: 'close' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Название места' }) }),
      ui.section({ title: 'Мои точки старта', children: ui.list([
        ui.row({ lead: ui.leadIcon('map-pin', { accent: true }), title: `${club.name}, главный вход`, sub: 'Здесь собирается утренняя группа', toast: 'Точка старта добавлена|compose', primary: true }),
        ui.row({ lead: ui.leadIcon('map-pin'), title: 'Парк у восточного фонтана', sub: 'Запасная точка после дождя', toast: 'Точка старта добавлена|compose' }),
        ui.row({ lead: ui.leadIcon('map-pin'), title: 'Вход на набережную', sub: 'Если начинать позже группы', toast: 'Точка старта добавлена|compose' }),
      ]) }),
    ]),
  ],
});
