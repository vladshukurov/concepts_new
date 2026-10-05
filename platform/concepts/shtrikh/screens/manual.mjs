import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'manual', theme: THEME,
  body: [
    ui.nav({ title: 'Город' }),
    ui.scroll([
      ui.denied('location'),
      ui.section({ children: ui.search({ placeholder: 'Название города' }) }),
      ui.section({ title: 'Популярные', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: 'Ал' }), title: 'Алматы', sub: '32 автора · 14 мест', go: 'home', primary: true }),
        ui.row({ lead: ui.leadIcon('', { text: 'Ас' }), title: 'Астана', sub: '24 автора · 11 мест', go: 'home' }),
        ui.row({ lead: ui.leadIcon('', { text: 'Ш' }), title: 'Шымкент', sub: '18 авторов · 8 мест', go: 'home' }),
      ]) }),
    ]),
  ],
});
