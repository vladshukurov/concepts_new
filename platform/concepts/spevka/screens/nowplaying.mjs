import { THEME } from './_shared.mjs';
import { now, parts } from '../model.mjs';

/* Экран блокировки: своя партия играет подряд с погашенным экраном, по дороге домой после спевки */
export default (ui) => ui.screen({
  id: 'nowplaying', theme: THEME, className: 'ui-lock',
  body: ui.lockNowPlaying({
    time: '21:12', date: now.date[0].toUpperCase() + now.date.slice(1),
    title: 'Вечерний звон · альты', sub: `Моя партия подряд · 2 из ${parts.count} · Ирина Павлова`,
    at: '1:12', left: '−1:36', fillClass: 'sp-np-fill', status: `Дальше — моя запись «Вечернего звона», 2:51`,
    open: { label: 'Открыть «В унисон»', go: 'parts' },
  }),
});
