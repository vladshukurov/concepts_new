import { THEME, strip } from './_shared.mjs';
import { lastTrip, films, fMeta, friendClip, people } from '../model.mjs';

/* Прошлая вылазка как канал: фильм, ролики по точкам, показ на ТВ вечером и ролики друзей из «Фото» */
const r = lastTrip.route;
const HALTS = ['spring', 'pines', 'view'].map((k) => films[k]);
export default (ui) => ui.screen({
  id: 'trip', theme: THEME, className: 'vy-wrap',
  body: [
    ui.nav({ title: 'Вылазка' }),
    ui.scroll([
      `<div class="vy-banner ${r.art}"></div>`,
      ui.section({ children: [
        `<div class="vy-channel">${ui.leadIcon('footprints', { round: true, accent: true })}<span class="ui-row-text"><strong>${r.name}</strong><span>${lastTrip.meta}</span></span></div>`,
        `<div class="vy-map">${strip(r, { done: 4 })}<div class="vy-map-labels">${r.points.map(([p, km]) => `<span>${p}<small>${String(km).replace('.', ',')} км</small></span>`).join('')}</div></div>`,
        ui.usersStack({ faces: lastTrip.with, text: 'Лена, Костя, Саша и вы' }),
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('tv', { round: true, accent: true }), title: 'Показать на телевизоре', sub: 'Фильм похода вечером дома, в той же Wi‑Fi', ask: 'localnetwork|trip|trip' }),
        ui.row({ shownAfter: 'localnetwork', lead: ui.leadIcon('cast', { round: true, accent: true }), title: 'Телевизор в гостиной', sub: `Samsung · 50 дюймов · идёт фильм ${lastTrip.film} с главы «старт»`, end: { badge: 'ТВ' } }),
        ui.row({ lead: ui.leadIcon('images', { round: true, accent: true }), title: 'Ролики друзей из «Фото»', sub: 'Костя прислал спуск к ручью, он уже в «Фото»', ask: 'photos|picker|trip' }),
      ]) }),
      ui.denied('localnetwork'),
      ui.denied('photos'),
      ui.section({ title: 'Фильм похода', children: ui.videoCard({ art: films.film.art, duration: films.film.dur, go: 'watch', avatar: ui.avatar(people.me.initial), title: films.film.title, sub: `Главы: ${r.labels}` }) }),
      ui.section({ title: 'По точкам маршрута', meta: `${lastTrip.clips} роликов`, children: ui.list([
        ui.row({ shownAfter: 'photos', thumb: friendClip.art, wide: true, duration: friendClip.dur, title: friendClip.title, sub: friendClip.sub }),
        ...HALTS.map((f) => ui.row({ thumb: f.art, wide: true, duration: f.dur, title: f.title, sub: fMeta(f), go: f.id })),
      ]) }),
      ui.section({ children: ui.foot('Ещё 3 ролика у Саши загружаются с её телефона · 2 из 3', 'vy-watch-meta') }),
    ]),
  ],
});
