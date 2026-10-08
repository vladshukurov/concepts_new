import { THEME } from './_shared.mjs';
import { now, lock, evening } from '../model.mjs';

/* Экран погас: вечер играет, таймер сна на локскрине — «Засыпаем · ещё 12 минут» */
const r = lock.rec;
export default (ui) => ui.screen({
  id: 'lock', theme: THEME, className: 'ui-lock',
  body: ui.lockNowPlaying({
    time: lock.time, date: now.date.replace(/^./, (c) => c.toUpperCase()), art: r.art,
    title: r.title, sub: `${r.voice.who} · ${evening.title}`, status: lock.status,
    at: lock.at, left: lock.left, fillClass: 'mr-p64', open: { go: 'player' },
  }),
});
