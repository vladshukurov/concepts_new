import { THEME, map } from './_shared.mjs';
import { choir, people, tour } from '../model.mjs';

/* Геопозиция в чат: где я относительно ДК, кто идёт на спевку и точка сбора автобуса на гастроли */
export default (ui) => ui.screen({
  id: 'geo', theme: THEME,
  body: [
    ui.nav({ title: 'Геопозиция', back: 'close' }),
    ui.scroll([
      ui.section({ children: map({ points: [['is-me', ''], ['is-meet', ui.icon('flag')], ['is-a', people.oleg.initial], ['is-b', ui.icon('route')]] }) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('navigation', { round: true, accent: true }), title: 'Отправить мою геопозицию', sub: `${choir.dk}, ${choir.addr} · точность 10 м`, toast: `Геопозиция отправлена в «${choir.name}»|choir`, primary: true }),
        ui.row({ lead: ui.leadIcon('timer', { round: true, accent: true }), title: 'Транслировать 1 час', sub: 'Хор видит, где вы, до 20:07', toast: 'Трансляция геопозиции на 1 час|choir' }),
      ]) }),
      ui.section({ title: 'Делятся сейчас', meta: '1', children: ui.list([
        ui.row({ lead: ui.avatar(people.oleg.initial), title: people.oleg.name, sub: '600 м · идёт к ДК, будет в 19:15' }),
      ]) }),
      ui.section({ title: `Гастроли · ${tour.city}, 7 ноября`, children: ui.list([
        ui.row({ lead: ui.leadIcon('flag', { round: true }), title: `Точка сбора у ДК, ${tour.meet}`, sub: `служебный вход, ${choir.addr} · 120 м от вас`, toast: `Точка сбора отправлена в «${choir.name}»|choir` }),
        ui.row({ lead: ui.leadIcon('route', { round: true }), title: 'Где автобус на гастролях', sub: `${people.denis.name} включит трансляцию 7 ноября в ${tour.live} · автобус появится на карте` }),
      ]) }),
    ]),
  ],
});
