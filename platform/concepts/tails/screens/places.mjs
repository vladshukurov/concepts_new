import { THEME, PET } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'places', theme: THEME,
  body: [
    ui.nav({ title: 'Площадки' }),
    ui.scroll([
      ui.section({ children: [
        ui.search({ placeholder: 'Название или адрес' }),
        ui.list([
          ui.row({ thumb: PET.truffle, title: 'Лопухинский сад', sub: '1,8 км · с забором · 6 собак сейчас', end: { value: '18:40' }, go: 'walk', primary: true }),
          ui.row({ thumb: PET.barni, title: 'Набережная у ЦПКиО', sub: '3,4 км · без забора · песок', end: { value: '19:30' }, go: 'walk' }),
          ui.row({ thumb: PET.loki, title: 'Двор на Съезжинской', sub: '0,6 км · для щенков · 2 собаки', end: { value: 'завтра' }, go: 'walk' }),
          ui.row({ thumb: 'ph', title: 'Парк Ленина', sub: '2,1 км · закрыт на покос до 22 мая', end: { value: 'закрыт' } }),
        ]),
      ] }),
      ui.section({ title: 'Кто ходит на Лопухинский', children: ui.list([
        ui.row({ thumb: `${PET.truffle} is-round`, title: 'Трюфель · Ксения', sub: 'Ретривер, 2 года · гуляли вместе 4 июня', end: { value: 'часто' }, go: 'pet' }),
        ui.row({ thumb: `${PET.loki} is-round`, title: 'Локи · Марат', sub: 'Щенок 7 месяцев', end: { value: 'впервые' }, go: 'pet' }),
        ui.row({ thumb: `${PET.barni} is-round`, title: 'Бруно · Аня', sub: 'Метис, 5 лет · не любит игры на бегу', end: { value: 'часто' }, go: 'pet' }),
      ]) }),
      ui.foot('Карта площадок обновлена 12 мая · данные от 34 владельцев', 'is-block'),
    ]),
  ],
});
