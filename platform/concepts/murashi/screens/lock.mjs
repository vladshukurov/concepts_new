import { THEME } from './_shared.mjs';
import { now, lock } from '../model.mjs';

/* Экран погас: свой дождь играет дальше, таймер сна на локскрине */
const x = lock.sound;
export default (ui) => ui.screen({
  id: 'lock', theme: THEME, className: 'ui-lock',
  body: ui.lockNowPlaying({
    time: lock.time, date: now.date.replace(/^./, (c) => c.toUpperCase()), art: x.art,
    title: x.title, sub: `${x.place.short} · коллекция «Засыпать»`, status: lock.status,
    at: lock.at, left: lock.left, fillClass: 'ms-p75', open: { go: 'player' },
  }),
});
