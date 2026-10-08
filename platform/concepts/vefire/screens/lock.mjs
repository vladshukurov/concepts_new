import { THEME } from './_shared.mjs';
import { weekly, now } from '../model.mjs';

/* Выпуск недели играет со звуком при погашенном экране */
export default (ui) => ui.screen({
  id: 'lock', theme: THEME, className: 'ui-lock',
  body: ui.lockNowPlaying({
    time: now.time, date: now.date, art: weekly.art, title: weekly.title, sub: `В эфире · ведут ${weekly.hosts}`,
    at: '1:27', left: '−3:23', fillClass: 'vf-p30', open: { label: 'Открыть «В эфире»', go: 'watch' },
  }),
});
