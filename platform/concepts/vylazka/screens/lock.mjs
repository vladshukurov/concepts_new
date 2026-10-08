import { THEME } from './_shared.mjs';
import { films, now } from '../model.mjs';

/* Фильм похода играет со звуком при погашенном экране */
export default (ui) => ui.screen({
  id: 'lock', theme: THEME, className: 'ui-lock',
  body: ui.lockNowPlaying({
    time: '21:14', date: now.date, art: films.film.art, title: films.film.title, sub: `Глава «${films.film.point}» · ${films.film.meta}`,
    at: films.film.at, left: '−9:16', fillClass: 'vy-p20', open: { label: 'Открыть «Вылазка»', go: 'watch' },
  }),
});
