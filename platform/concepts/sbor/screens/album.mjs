import { THEME } from './_shared.mjs';
import { trip, film } from '../model.mjs';

/* Альбом поездки: кадры и кружки всей группы; фильм дня собирается ночью, пока телефон на зарядке */
const tile = (i, kind, dur) => `<button class="sb-tile ph${kind === 'circle' ? ' is-circle' : ''}" data-tags="${kind}" data-toast="${kind === 'circle' ? `Кружок ${dur}` : `Снимок ${i}`}" aria-label="${kind === 'circle' ? `Кружок ${dur}` : `Снимок ${i}`}">${dur ? `<span class="sb-tile-dur">${dur}</span>` : ''}</button>`;
const sat = [[1, 'photo'], [2, 'circle', '0:21'], [3, 'photo'], [4, 'photo'], [5, 'photo'], [6, 'circle', '0:09'], [7, 'photo'], [8, 'photo'], [9, 'photo']];
const fri = [[10, 'photo'], [11, 'photo'], [12, 'circle', '0:34'], [13, 'photo'], [14, 'photo'], [15, 'photo']];
export default (ui) => ui.screen({
  id: 'album', theme: THEME,
  body: [
    ui.nav({ title: 'Альбом поездки', trailing: ui.iconButton({ icon: 'ellipsis', label: 'Действия с альбомом', menu: ['Скачать всё=Скачивание 214 фото началось', 'Выбрать'] }) }),
    ui.scroll([
      ui.section({ children: ui.segments([
        { label: 'Все', on: true, filter: 'all' },
        { label: 'Фото', filter: 'photo' },
        { label: 'Кружки', filter: 'circle' },
      ]) }),
      ui.section({ title: 'Фильмы дней', children: [
        ui.list([
          ui.row({ lead: ui.leadIcon('film', { round: true, accent: true }), title: 'Пятница · фильм готов', sub: `${film.fri.dur} · ${film.fri.frames} кадров и ${film.fri.circles} кружка · собран в 3:12`, end: { icon: 'play', toast: `Фильм пятницы ${film.fri.dur}`, label: 'Смотреть фильм пятницы' } }),
          ui.row({ lead: ui.leadIcon('film', { round: true }), title: 'Суббота · ещё снимаем', sub: `${film.sat.frames} кадров и ${film.sat.circles} кружков · до 22:00 ещё добавят` }),
        ]),
        ui.actions([ui.button({ label: 'Собрать фильм субботы ночью', icon: 'clapperboard', variant: 'secondary', block: true, activate: 'processing|album', primary: true })]),
      ] }),
      ui.section({ shownAfter: 'processing', children: ui.list([
        ui.row({ lead: ui.leadIcon('moon', { round: true, accent: true }), title: 'Фильм субботы — к утру', sub: 'Соберётся ночью, когда телефон на зарядке и в Wi‑Fi' }),
      ]) }),
      ui.section({ title: 'Суббота', meta: `${trip.photos - 168} снимков`, children: `<div class="sb-grid">${sat.map(([i, k, d]) => tile(i, k, d)).join('')}</div>` }),
      ui.section({ title: 'Пятница', meta: '168 снимков', children: `<div class="sb-grid">${fri.map(([i, k, d]) => tile(i, k, d)).join('')}</div>` }),
    ]),
  ],
});
