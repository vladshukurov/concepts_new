import { THEME, map } from './_shared.mjs';
import { trip, meet, people } from '../model.mjs';

/* Геопозиция в чат: где я относительно точки сбора и кто из группы делится своей */
export default (ui) => ui.screen({
  id: 'geo', theme: THEME,
  body: [
    ui.nav({ title: 'Геопозиция', back: 'close' }),
    ui.scroll([
      ui.section({ children: map({ points: [['is-me', ''], ['is-meet', ui.icon('flag')], ['is-marat', people.marat.initial], ['is-denis', people.denis.initial]] }) }),
      ui.section({ children: [
        ui.list([
          ui.row({ lead: ui.leadIcon('navigation', { round: true, accent: true }), title: 'Отправить мою геопозицию', sub: 'Право-Булачная, 33 · точность 12 м', toast: 'Геопозиция отправлена в «Казань · осень»|trip', primary: true }),
          ui.row({ lead: ui.leadIcon('timer', { round: true, accent: true }), title: 'Транслировать 1 час', sub: 'Группа видит, где вы, до 10:41', toast: 'Трансляция геопозиции на 1 час|trip' }),
        ]),
      ] }),
      ui.section({ title: 'Делятся сейчас', meta: '2', children: ui.list([
        ui.row({ lead: ui.avatar(people.marat.initial), title: people.marat.name, sub: '1,2 км · Кремлёвская, идёт к Спасской башне · до 10:30', go: 'chat' }),
        ui.row({ lead: ui.avatar(people.denis.initial), title: people.denis.name, sub: '400 м · у Лядского сада · обновлено 9:40' }),
      ]) }),
      ui.section({ title: 'Места поездки', children: ui.list([
        ui.row({ lead: ui.leadIcon('flag', { round: true }), title: `Точка сбора, ${meet.time}`, sub: `${trip.hotel}, ${trip.hotelAddr} · 40 м`, toast: 'Точка сбора отправлена в чат|trip' }),
        ui.row({ lead: ui.leadIcon('map-pin', { round: true }), title: 'Спасская башня Кремля', sub: '1,1 км · экскурсия в 10:30', toast: 'Место отправлено в чат|trip' }),
        ui.row({ lead: ui.leadIcon('map-pin', { round: true }), title: 'Речной порт, причал 3', sub: '2,8 км · катер в 15:00', toast: 'Место отправлено в чат|trip' }),
      ]) }),
    ]),
  ],
});
