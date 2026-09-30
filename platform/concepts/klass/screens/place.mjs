import { THEME } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'place', theme: THEME,
  body: [
    ui.nav({ title: 'Место съёмки', back: 'close', trailing: ui.textButton({ label: 'Отметить', strong: true, go: 'compose', primary: true }) }),
    ui.scroll([
      ui.section({ children: [
        ui.search({ placeholder: 'Поиск по названию' }),
        ui.list([
          ui.row({ lead: ui.leadIcon('house'), title: 'Дом правления', sub: '120 м · рядом с главным въездом', go: 'compose' }),
          ui.row({ lead: ui.leadIcon('users'), title: 'Общая площадка', sub: '340 м · собрания и праздники СНТ', go: 'compose' }),
          ui.row({ lead: ui.leadIcon('store'), title: 'Садовая ярмарка', sub: '2,7 км · сюда едем в субботу', go: 'compose' }),
          ui.row({ lead: ui.leadIcon('plus'), title: 'Вписать своё', sub: 'Для мест, которых нет на карте', toast: 'Ввести адрес вручную' }),
        ]),
      ] }),
      ui.denied('location', 'Мест рядом не показать — впишите место руками'),
    ]),
  ],
});
