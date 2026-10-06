import { THEME } from './_shared.mjs';
import { trip, me, meet, program } from '../model.mjs';

/* Ссылка-приглашение открылась в приложении: поездка до вступления — кто, когда, что дальше */
export default (ui) => ui.screen({
  id: 'join', theme: THEME,
  body: [
    ui.nav({ title: 'Приглашение', back: 'close' }),
    ui.scroll([
      `<div class="sb-head">${ui.avatar(trip.initial, { large: true })}<h1 class="ui-title">${trip.name}</h1><p class="ui-sub">${trip.dates} · ${trip.people} участников · пригласила ${me.name}</p></div>`,
      ui.section({ children: [
        ui.usersStack({ faces: ['НР', 'ЛК', 'ИЛ'], text: 'Ника, Лена, Игорь и ещё 13 в поездке' }),
        ui.actions([
          ui.button({ label: 'Вступить в поездку', block: true, go: 'trip', primary: true }),
          ui.button({ label: 'Не сейчас', variant: 'tertiary', block: true, back: true }),
        ]),
      ] }),
      ui.section({ title: 'Дальше по программе', children: ui.list([
        ...program.sat.items.slice(1, 4).map(([time, title, sub]) => ui.row({ lead: ui.leadIcon('', { text: time }), title, sub })),
        ...program.sun.items.slice(1, 2).map(([time, title, sub]) => ui.row({ lead: ui.leadIcon('', { text: time }), title, sub: `воскресенье · ${sub}` })),
      ]) }),
      ui.section({ children: ui.miniInfo([
        { icon: 'map-pin', text: `Живут в ${trip.hotel.replace('отель', 'отеле')}, ${trip.hotelAddr}` },
        { icon: 'clock', text: `Сегодня сбор в ${meet.time} ${meet.place}` },
        { icon: 'images', text: `${trip.photos} фото и ${trip.circles} кружков в альбоме` },
      ]) }),
    ]),
  ],
});
