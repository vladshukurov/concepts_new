import { THEME } from './_shared.mjs';
import { route, parts, people, dashaLate, now } from '../model.mjs';

/* Экран блокировки на пробежке: свои подсказки по таймеру отрезка и сообщение Даши с её инициалами */
const elapsed = '22:10';
const next = parts[2];
export default (ui) => ui.screen({
  id: 'background', theme: THEME, className: 'ui-lock',
  body: ui.lockScreen({
    time: '7:52', date: now.date[0].toUpperCase() + now.date.slice(1), appIcon: 'dumbbell',
    notifications: [
      { initials: people.dasha.initial, title: people.dasha.name, text: dashaLate.text, time: dashaLate.time, activate: 'commnotif|direct', label: `Уведомление: ${people.dasha.name}` },
    ],
    nowPlaying: { title: `${route.name} · ${route.km} км`, sub: `${elapsed} · через 9:50 «${next[1]}»`, at: elapsed, left: '−27:50', fillClass: 'ry-w-44', go: 'player', label: 'Открыть плеер' },
  }),
});
