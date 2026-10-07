import { THEME } from './_shared.mjs';

/* Новый стол: игра, время и число мест; «Создать» открывает стол */
export default (ui) => ui.screen({
  id: 'newtable', theme: THEME,
  body: [
    ui.nav({ title: 'Новый стол', back: 'close' }),
    ui.scroll([
      ui.section({ title: 'Игра', children: ui.list([ui.row({ lead: ui.leadIcon('dices', { accent: true }), title: 'Остров сокровищ', sub: 'Из «Хочу сыграть»', toast: 'Игра выбирается из коллекции' })]) }),
      ui.section({ title: 'Когда и где', children: ui.list([
        ui.row({ lead: ui.leadIcon('calendar'), title: 'Суббота, 19:30', sub: 'Время можно сменить', toast: 'Время выбирается в календаре' }),
        ui.row({ lead: ui.leadIcon('map-pin'), title: 'У Маши дома', sub: 'Адрес увидят только игроки', toast: 'Место выбирается из списка' }),
      ]) }),
      ui.section({ title: 'Места', children: ui.list([ui.row({ lead: ui.leadIcon('users'), title: '4 места', sub: 'Одно занято вами', toast: 'Число мест меняется здесь' })]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Создать стол', block: true, go: 'table', primary: true })]) }),
    ]),
  ],
});
