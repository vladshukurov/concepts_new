import { THEME, soundRow } from './_shared.mjs';
import { places, fromPlace, soundsN, mins } from '../model.mjs';

/* Где записано: место, его фото и все звуки отсюда */
const p = places.dacha;
const list = fromPlace(p);
export default (ui) => ui.screen({
  id: 'dacha', theme: THEME,
  body: [
    ui.nav({ title: 'Где записано' }),
    ui.scroll([
      `<div class="ms-spot"><div class="ms-spot-art ${p.art}"></div></div>`,
      `<div class="ms-head is-left"><h1 class="ui-title">${p.title}</h1><p class="ui-sub">${p.where}</p></div>`,
      ui.infoRows([['Звуков', soundsN(list.length)], ['Всего', `${mins(list)} мин`], ['Первая запись', `${list[0].date}, ${list[0].time}`]]),
      ui.section({ title: 'Звуки отсюда', children: ui.list(list.map((x) => soundRow(x, { sub: `${x.where.split(', ')[1]} · ${x.date}, ${x.time}` }))) }),
    ]),
  ],
});
