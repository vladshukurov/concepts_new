import { THEME, wave } from './_shared.mjs';
import { playing, timer, sounds, collections } from '../model.mjs';

/* Плеер «Мурашей»: большая волна записи поверх размытого фото места, play по центру;
   вместо «перемешать» и «повтор» — «Где записано» и таймер сна */
const x = playing.sound;
const list = collections.son.list;
const next = list[list.indexOf(x) + 1];
export default (ui) => ui.screen({
  id: 'player', theme: THEME, className: 'ms-player',
  body: [
    `<div class="ms-player-bg ${x.art}"></div><div class="ms-player-shade"></div>`,
    ui.nav({ title: `Засыпать · 1 из ${list.length}`, back: 'down', over: true }),
    `<main class="ms-player-main"><div class="ms-player-wave">${wave(x.title + x.dur, { n: 44, played: 11, className: 'is-player' })}<p class="ms-player-at">${x.where} · ${x.date}</p></div>`
    + ui.musicControls({
      title: x.title, sub: `${x.place.title} · ${x.time}`,
      at: playing.at, left: playing.left, pct: playing.pct,
      mark: `Таймер сна · затихнет в ${timer.until}`,
      like: { label: 'Нравится звук' },
      prev: { label: 'Предыдущий звук', toast: 'Это первый звук коллекции «Засыпать»' },
      next: { label: `Следующий · ${next.title}`, go: next.id, toast: undefined },
      shuffle: { icon: 'map-pin', label: 'Где записано', go: x.place.id, toggle: undefined },
      repeat: { icon: 'timer', label: `Таймер сна · ${timer.min} мин`, menu: timer.options, toggle: undefined },
      bottomLeft: { icon: 'lock', label: 'Слушать с погашенным экраном', activate: 'audio|lock' },
      bottomRight: { icon: 'list-music', label: `Коллекция «${collections.son.title}»`, go: 'son' },
    })
    + `</main>`,
  ],
});
