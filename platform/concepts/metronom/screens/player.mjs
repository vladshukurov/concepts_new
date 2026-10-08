import { THEME } from './_shared.mjs';
import { sessions, playing, metro, beats } from '../model.mjs';

/* Полный плеер записи занятия: обложка пьесы, musicControls, метка темпа */
const t = sessions.today;
export default (ui) => ui.screen({
  id: 'player', theme: THEME, className: 'mt-player',
  body: [
    ui.nav({ title: 'Сейчас играет', back: 'down' }),
    `<main class="mt-player-main"><div class="mt-player-art ${t.piece.art}"></div>`
    + ui.musicControls({
      title: t.piece.title, sub: `${beats(t.bpm)} · занятие сегодня, ${t.time}`,
      at: playing.at, left: playing.left, pct: playing.pct, mark: `Метроном ${metro.bpm} · вчера было ${sessions.yesterday.bpm}`,
      prev: { label: 'Предыдущее занятие · вчера', go: 'yesterday', toast: undefined },
      next: { label: 'Следующее занятие · К Элизе', go: 'eliseday', toast: undefined },
      like: { label: 'Нравится запись' },
      shuffle: { label: 'Перемешать занятия' },
      repeat: { label: 'Повторять запись' },
      bottomLeft: { icon: 'timer', label: 'Метроном', go: 'metronome' },
      bottomRight: { icon: 'list-music', label: 'Занятие · сегодня', go: 'today' },
    })
    + `</main>`,
  ],
});
