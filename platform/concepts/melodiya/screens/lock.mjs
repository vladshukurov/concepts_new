import { THEME } from './_shared.mjs';
import { alarm, tones } from '../model.mjs';

/* 7:00, экран погашен: будильник играет голосом Тёмы, на локскрине «Сейчас играет» */
const t = tones[alarm.tone];
export default (ui) => ui.screen({
  id: 'lock', theme: THEME, className: 'ui-lock',
  body: ui.lockNowPlaying({
    time: alarm.time, date: alarm.lockDate,
    title: `${alarm.time} · Подъём голосом Тёмы`, sub: `Будильник · ${t.title}`,
    at: alarm.at, left: alarm.left, fillClass: 'md-p25', open: { go: 'alarm' },
  }),
});
