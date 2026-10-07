import { THEME } from './_shared.mjs';
import { now, drill } from '../model.mjs';

/* Экран блокировки: кусок «тут сбиваемся» играет по кругу с погашенным экраном */
export default (ui) => ui.screen({
  id: 'nowplaying', theme: THEME, className: 'ui-lock',
  body: ui.lockScreen({
    time: now.time, date: now.date[0].toUpperCase() + now.date.slice(1), appIcon: 'audio-lines',
    nowPlaying: {
      title: drill.loop, sub: `${drill.piece} · по кругу · 3-й повтор`,
      at: '0:16', left: '−0:22', fillClass: 'sp-np-fill', status: `Кусок ${drill.loopDur} повторяется, пока не остановите`,
      go: 'drill', label: 'Открыть «В унисон»',
    },
  }),
});
