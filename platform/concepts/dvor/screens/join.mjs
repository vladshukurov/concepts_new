import { THEME } from './_shared.mjs';
import { house } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'join', theme: THEME,
  body: [
    ui.nav({ title: 'Ваш дом', back: false }),
    ui.scroll([
      ui.section({ children: [ui.search({ placeholder: 'Улица и дом' }), ui.list([
        ui.row({ lead: ui.leadIcon('house', { accent: true }), title: house.address, sub: `${house.buildings} корпуса · ${house.flats} квартиры`, end: { icon: 'check' } }),
      ])] }),
      ui.section({ title: 'Подтвердить адрес', children: ui.list([
        ui.row({ lead: ui.leadIcon('map-pin'), title: 'Вы в границах дома', sub: 'Геопозиция в радиусе 150 м' }),
        ui.row({ lead: ui.leadIcon('wifi'), title: 'Вы в домашней сети', sub: 'Сеть Polevaya-12' }),
      ]) }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Я дома — проверить', icon: 'navigation', block: true, ask: 'location|verify|manual' }),
        ui.button({ label: 'Моего дома нет в списке', variant: 'tertiary', block: true, go: 'manual' }),
      ]) }),
    ]),
  ],
});
