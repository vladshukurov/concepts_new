import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'manual', theme: THEME,
  body: [
    ui.nav({ title: 'Город' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Название города' }) }),
      ui.section({ title: 'Популярные', children: ui.list([
        ui.row({ lead: ui.leadIcon('', { text: 'Ал' }), title: 'Алматы', sub: '3 встречи в сентябре', go: 'home', primary: true }),
        ui.row({ lead: ui.leadIcon('', { text: 'Ас' }), title: 'Астана', sub: '2 встречи в сентябре', go: 'home' }),
        ui.row({ lead: ui.leadIcon('', { text: 'Ш' }), title: 'Шымкент', sub: 'встреч пока нет', go: 'home' }),
      ]) }),
    ]),
  ],
});
