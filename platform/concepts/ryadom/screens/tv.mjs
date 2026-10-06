import { THEME } from './_shared.mjs';

/* Показ на телевизоре — системный AirPlay; имя своей сети помогает, если телевизор не виден */
export default (ui) => ui.screen({
  id: 'tv', theme: THEME,
  body: [
    ui.nav({ title: 'Смотреть на телевизоре', back: 'close' }),
    ui.scroll([
      ui.section({ children: [
        ui.group({ cells: [
          ui.cell({ icon: 'tv', title: 'Выбрать телевизор', sub: 'AirPlay', go: 'cast', primary: true }),
          ui.cell({ icon: 'wifi', title: 'Проверить сеть', sub: 'Если телевизора нет в списке AirPlay', activate: 'wifiinfo|tv' }),
        ] }),
        ui.list([ui.row({ lead: ui.leadIcon('wifi', { round: true, accent: true }), title: 'Вы в сети «Krylov_5G»', sub: 'Телевизор должен быть в той же сети', shownAfter: 'wifiinfo' })]),
      ] }),
      ui.section({ title: 'Показывали раньше', children: ui.list([
        ui.row({ lead: ui.leadIcon('tv'), title: 'Телевизор в гостиной', sub: 'Позавчера · постановка стопы' }),
        ui.row({ lead: ui.leadIcon('monitor'), title: 'Кухня, приставка', sub: '2 сентября · подъём на Медеу' }),
      ]) }),
    ]),
  ],
});
