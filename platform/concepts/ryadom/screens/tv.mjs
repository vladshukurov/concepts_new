import { THEME } from './_shared.mjs';

/* Показ на телевизоре — системный AirPlay */
export default (ui) => ui.screen({
  id: 'tv', theme: THEME,
  body: [
    ui.nav({ title: 'Смотреть на телевизоре', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'Рядом', children: ui.list([
        ui.row({ lead: ui.leadIcon('tv', { accent: true }), title: 'Телевизор в гостиной', sub: 'AirPlay · позавчера показывали постановку стопы', go: 'cast', primary: true }),
        ui.row({ lead: ui.leadIcon('monitor'), title: 'Кухня, приставка', sub: 'Не в сети · последний показ 2 сентября' }),
      ]) }),
    ]),
  ],
});
