import { THEME, map } from './_shared.mjs';
import { pickup, people } from '../model.mjs';

/* Геопозиция в чат: где я и точка кружка, куда ехать забирать */
export default (ui) => ui.screen({
  id: 'geo', theme: THEME,
  body: [
    ui.nav({ title: 'Геопозиция', back: 'close' }),
    ui.scroll([
      ui.section({ children: map({ points: [['is-me', ''], ['is-club', ui.icon('flag')], ['is-kid', people.danya.initial]] }) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('navigation', { round: true, accent: true }), title: 'Где я', sub: 'Чистопольская, 61 · точность 10 м', toast: 'Геопозиция отправлена в «Гариповы»|family', primary: true }),
        ui.row({ lead: ui.leadIcon('timer', { round: true, accent: true }), title: 'Транслировать 1 час', sub: 'Семья видит, где вы, до 17:05', toast: 'Трансляция геопозиции на 1 час|family' }),
      ]) }),
      ui.section({ title: 'Забери меня', children: ui.list([
        ui.row({ lead: ui.leadIcon('flag', { round: true }), title: `${pickup.place}, ${pickup.addr}`, sub: `${pickup.dist} · Милу забирать в ${pickup.to}`, toast: 'Точка кружка отправлена в чат|family' }),
        ui.row({ lead: ui.leadIcon('map-pin', { round: true }), title: 'Бассейн «Волна», Ленина, 30', sub: '600 м · плавание Дани в 18:00', toast: 'Место отправлено в чат|family' }),
        ui.row({ lead: ui.leadIcon('map-pin', { round: true }), title: 'Школа № 5, Пушкина, 9', sub: '900 м · уроки до 13:40', toast: 'Место отправлено в чат|family' }),
      ]) }),
      ui.section({ title: 'Делятся сейчас', meta: '1', children: ui.list([
        ui.row({ lead: ui.avatar(people.danya.initial), title: people.danya.name, sub: 'дома · обновлено 15:40', go: 'danya' }),
      ]) }),
    ]),
  ],
});
