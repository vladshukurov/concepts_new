/** Плеер ролика с точки: общий для трёх роликов. Файл с «_» — не экран. */
import { THEME, frame } from './_shared.mjs';
import { videos, vMeta, oldTown, sokolniki } from '../model.mjs';

const TASKS = {
  fountain: 'Спойте припев у фонтана',
  door: 'Найдите дверь с номером 1907 и снимите стук',
  boat: 'Проплывите по пруду, гребя руками',
};

export const watchScreen = (ui, key, { at = '0:07', fill = 'vz-p33' } = {}) => {
  const v = videos[key];
  const isOld = v.quest === oldTown.title;
  const others = ['fountain', 'door', 'boat'].filter((k) => k !== key).map((k) => videos[k]);
  return ui.screen({
    id: v.id, theme: THEME, className: 'vz-wrap',
    body: ui.scroll([
      ui.player({
        art: frame, at, total: v.dur, fillClass: fill, playing: true,
        chapter: `Точка ${v.point} · ${v.team.name}`,
        collapse: { go: 'home', label: 'Свернуть в мини-плеер' },
        settings: { menu: 'Качество · 1080p=Качество 1080p|Скорость · 1×=Скорость 1×', label: 'Качество и скорость' },
        fullscreen: { toast: 'Во весь экран — поверните телефон' },
      }),
      ui.section({ children: [
        `<h1 class="ui-title vz-watch-title">${v.title}</h1>`,
        ui.foot(`${vMeta(v)}`, 'vz-watch-meta'),
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.avatar(v.who.initial), title: v.who.name, sub: `Команда «${v.team.name}» · задание: ${TASKS[key].toLowerCase()}` }),
        isOld
          ? ui.row({ lead: ui.leadIcon('flag', { round: true, accent: true }), title: oldTown.title, sub: `${oldTown.meta} · идёт сейчас`, go: 'quest' })
          : ui.row({ lead: ui.leadIcon('trophy', { round: true, accent: true }), title: sokolniki.finalTitle, sub: sokolniki.meta, go: 'final' }),
      ]) }),
      ui.section({ title: 'Ещё ролики с точек', children: ui.list(others.map((o) =>
        ui.row({ thumb: frame, wide: true, duration: o.dur, title: o.title, sub: vMeta(o), go: o.id }))) }),
    ]),
  });
};
