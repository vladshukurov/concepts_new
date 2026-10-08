import { THEME, timerSeg, timerText } from './_shared.mjs';
import { playing, evening, recs } from '../model.mjs';

/* Полный плеер вечера: обложка, musicControls, таймер сна прямо под шкалой */
const r = playing.rec;
export default (ui) => ui.screen({
  id: 'player', theme: THEME, className: 'mr-player',
  body: [
    ui.nav({ title: 'Сейчас играет', back: 'down' }),
    `<main class="mr-player-main"><div class="mr-player-art ${r.art}"></div>`
    + ui.musicControls({
      title: r.title, sub: `${r.voice.who} · 1 из ${evening.list.length}`,
      at: playing.at, left: playing.left, pct: playing.pct,
      prev: { label: 'Предыдущая', toast: 'Это первая колыбельная вечера' },
      next: { label: `Следующая · ${recs.medved.title}`, go: 'medved', toast: undefined },
      like: { label: 'Нравится запись' },
      shuffle: { label: 'Перемешать вечер' },
      repeat: { label: 'Повторять вечер' },
      bottomLeft: { icon: 'lock', label: 'Слушать с погашенным экраном', activate: 'audio|lock' },
      bottomRight: { icon: 'list-music', label: evening.title, go: 'evening' },
    })
    + `<div class="mr-player-timer"><p class="mr-timer-head">${ui.icon('timer')}Таймер сна</p>${timerSeg()}${timerText('mr-timer is-center')}</div>`
    + `</main>`,
  ],
});
