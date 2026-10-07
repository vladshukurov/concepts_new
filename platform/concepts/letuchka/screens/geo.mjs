import { THEME, map } from './_shared.mjs';
import { people, studio, demo } from '../model.mjs';

/* Геопозиция в чат: где я, «Я у клиента» на время встречи и кто из студии делится своей */
export default (ui) => ui.screen({
  id: 'geo', theme: THEME,
  body: [
    ui.nav({ title: 'Геопозиция', back: 'close' }),
    ui.scroll([
      ui.section({ children: map({ points: [['is-me', ''], ['is-office', ui.icon('building-2')], ['is-artem', people.artem.initial]] }) }),
      ui.section({ children: [
        ui.list([
          ui.row({ lead: ui.leadIcon('navigation', { round: true, accent: true }), title: 'Отправить мою геопозицию', sub: 'Лиговский, 74 · точность 12 м', toast: 'Геопозиция отправлена Артёму|chat', primary: true }),
          ui.row({ lead: ui.leadIcon('presentation', { round: true, accent: true }), title: 'Я у клиента', sub: 'Статус в «Офисе» и точка встречи до 13:00', toast: 'Статус «у клиента» до 13:00|chat' }),
        ]),
      ] }),
      ui.section({ title: 'Делятся сейчас', meta: '1', children: ui.list([
        ui.row({ lead: ui.avatar(people.artem.initial), title: people.artem.name, sub: 'у клиента · Чкаловский, 15 · до 13:00', go: 'chat' }),
      ]) }),
      ui.section({ title: 'Места', children: ui.list([
        ui.row({ lead: ui.leadIcon('building-2', { round: true }), title: 'Офис студии', sub: `${studio.office}, ${studio.floor} · 30 м`, toast: 'Адрес офиса отправлен|chat' }),
        ui.row({ lead: ui.leadIcon('map-pin', { round: true }), title: 'Северная верфь, офис клиента', sub: `${demo.where.replace('у клиента, ', '')} · 6,4 км · демо в четверг`, toast: 'Место отправлено|chat' }),
        ui.row({ lead: ui.leadIcon('coffee', { round: true }), title: 'Кофейня у Лиговского, 70', sub: '120 м · тут встречаем гостей до 10:00', toast: 'Место отправлено|chat' }),
      ]) }),
    ]),
  ],
});
