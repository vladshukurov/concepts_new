import { THEME } from './_shared.mjs';
import { best, now } from '../model.mjs';

/* Серия играет со звуком при погашенном экране */
export default (ui) => ui.screen({
  id: 'lock', theme: THEME, className: 'ui-lock',
  body: ui.lockNowPlaying({
    time: now.time, date: now.date, art: best.art, title: best.title, sub: best.series,
    at: '0:21', left: '−0:51', fillClass: 'vl-p30', open: { label: 'Открыть «Виляй»', go: 'watch' },
  }),
});
