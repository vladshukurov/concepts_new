/** Плеер хайлайта: общий для трёх хайлайтов вечера у Лены. Файл с «_» — не экран. */
import { THEME, frame } from './_shared.mjs';
import { highlights, hlMeta, lenaEvening, tasks } from '../model.mjs';

const TASK = { 1: 'monday', 2: 'prom', 3: 'cat' };

export const watchScreen = (ui, key, { pip = false, at = '0:04', fill = 'vy-p33' } = {}) => {
  const h = highlights[key];
  const others = Object.entries(highlights).filter(([k]) => k !== key);
  return ui.screen({
    id: h.id, theme: THEME, className: 'vy-wrap',
    body: ui.scroll([
      ui.player({
        art: frame, at, total: h.dur, fillClass: fill, playing: true, className: 'is-root',
        chapter: `Раунд ${h.round} · ${h.votes} голосов`,
        collapse: { go: 'home', label: 'Свернуть в мини-плеер' },
        settings: { menu: 'Качество · 1080p=Качество 1080p|Скорость · 1×=Скорость 1×|Звук при погашенном экране>lock', label: 'Настройки просмотра' },
        fullscreen: { toast: 'Во весь экран — поверните телефон' },
      }),
      ui.section({ children: [
        `<h1 class="ui-title vy-watch-title">${h.title}</h1>`,
        ui.foot(`${hlMeta(h)} · ${lenaEvening.title.toLowerCase()}`, 'vy-watch-meta'),
        pip ? ui.actions(ui.button({ label: 'Картинка в картинке', icon: 'picture-in-picture-2', variant: 'secondary', block: true, activate: 'audio|background' }), { className: 'vy-task-actions' }) : '',
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.avatar(h.who.initial), title: h.who.name, sub: `Задание: ${tasks[TASK[h.round]].toLowerCase()}` }),
        ui.row({ lead: ui.leadIcon('tv', { round: true, accent: true }), title: lenaEvening.title, sub: `${lenaEvening.meta} · вчера`, go: 'evening' }),
      ]) }),
      ui.section({ title: 'Ещё хайлайты вечера', children: ui.list(others.map(([, o]) =>
        ui.row({ thumb: frame, wide: true, duration: o.dur, title: o.title, sub: hlMeta(o), go: o.id }))) }),
    ]),
  });
};
