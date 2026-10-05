import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'place', theme: THEME,
  body: [
    ui.nav({ title: 'Место' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Кухня, рынок или кафе' }) }),
      ui.section({ title: 'Рядом', children: ui.list([
        ui.row({ lead: ui.leadIcon('store', { accent: true }), title: 'Зелёный базар', sub: 'Жибек Жолы, 53 · 240 м', toast: 'Место добавлено|compose', primary: true }),
        ui.row({ lead: ui.leadIcon('coffee'), title: 'Кофейня «Дом»', sub: 'Панфилова, 98 · 600 м', toast: 'Место добавлено|compose' }),
        ui.row({ lead: ui.leadIcon('house'), title: 'Дома', sub: 'Без адреса в публикации', toast: 'Место добавлено|compose' }),
      ]) }),
      ui.denied('location'),
    ]),
  ],
});
