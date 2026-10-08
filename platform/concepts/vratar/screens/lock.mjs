import { THEME } from './_shared.mjs';
import { best, now, lastMatch } from '../model.mjs';

/* Момент играет со звуком при погашенном экране */
export default (ui) => ui.screen({
  id: 'lock', theme: THEME, className: 'ui-lock',
  body: ui.lockNowPlaying({
    time: '11:52', date: now.date, art: best.art, title: best.title, sub: `${best.who.short} · ${lastMatch.line}`,
    at: '0:04', left: '−0:10', fillClass: 'vr-p30', open: { label: 'Открыть «Вратарь»', go: 'watch' },
  }),
});
