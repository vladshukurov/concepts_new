import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'place', theme: THEME,
  body: [
    ui.nav({ title: 'Место' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Кухня, рынок или кафе' }) }),
      ui.section({ title: 'Рядом', children: ui.list([
        ui.row({ lead: ui.leadIcon('store', { accent: true }), title: 'Лавка «Грядка»', sub: 'Сейфуллина, 120 · 240 м', toast: 'Место добавлено|compose', primary: true }),
        ui.row({ lead: ui.leadIcon('coffee'), title: 'Кофейня «Дом»', sub: 'Панфилова, 98 · 600 м', toast: 'Место добавлено|compose' }),
        ui.row({ lead: ui.leadIcon('house'), title: 'Дома', sub: 'Без адреса в записи', toast: 'Место добавлено|compose' }),
      ]) }),
      ui.section({ title: 'Недавние', children: ui.list([
        ui.row({ lead: ui.leadIcon('map-pin'), title: 'Дача Жанны', sub: 'Каскелен · 3 записи', toast: 'Место добавлено|compose' }),
        ui.row({ lead: ui.leadIcon('map-pin'), title: 'Зелёный рынок', sub: 'Груши и тыква · 5 записей', toast: 'Место добавлено|compose' }),
      ]) }),
      ui.denied('location'),
    ]),
  ],
});
