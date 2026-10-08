import { THEME } from './_shared.mjs';
import { now, next, oldTown } from '../model.mjs';

/* Аудиоподсказка к следующей точке играет при погашенном экране */
export default (ui) => ui.screen({
  id: 'lock', theme: THEME, className: 'ui-lock',
  body: ui.lockNowPlaying({
    time: '16:44', date: now.date, title: `Подсказка к точке ${next.n}`, sub: `Квест «${oldTown.title}» · голос Лены`,
    at: '0:13', left: '−0:27', fillClass: 'vz-p33', open: { label: 'Открыть «Вызов»', go: 'quest' },
  }),
});
