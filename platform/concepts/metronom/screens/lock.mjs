import { THEME } from './_shared.mjs';
import { now, metro, pieces, beats } from '../model.mjs';

/* Экран погас: метроном занятия играет, на локскрине — «Метроном · 96 ударов» */
const R = pieces.romance;
export default (ui) => ui.screen({
  id: 'lock', theme: THEME, className: 'ui-lock',
  body: ui.lockNowPlaying({
    time: metro.lock, date: now.date.replace(/^./, (c) => c.toUpperCase()), art: R.art,
    title: `Метроном · ${beats(metro.bpm)}`, sub: `${R.title} · занятие идёт ${metro.elapsed}`,
    at: metro.elapsed, left: metro.left, fillClass: 'mt-p50', open: { label: 'Открыть «Метроном»', go: 'metronome' },
  }),
});
