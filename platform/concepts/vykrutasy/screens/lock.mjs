import { THEME } from './_shared.mjs';
import { highlights, now, lenaEvening } from '../model.mjs';

/* Хайлайт играет со звуком при погашенном экране */
const h = highlights.cat;
export default (ui) => ui.screen({
  id: 'lock', theme: THEME, className: 'ui-lock',
  body: ui.lockNowPlaying({
    time: '19:44', date: now.date, art: h.art, title: h.title, sub: `${h.who.short} · ${lenaEvening.title.toLowerCase()}`,
    at: '0:04', left: '−0:08', fillClass: 'vy-p33', open: { label: 'Открыть «Выкрутасы»', go: 'watch' },
  }),
});
