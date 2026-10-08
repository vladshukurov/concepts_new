/** Плеер момента: общий для моментов прошлого матча. Файл с «_» — не экран. */
import { THEME } from './_shared.mjs';
import { moments, mMeta, lastMatch } from '../model.mjs';

const KIND = { goal: 'Гол', save: 'Сейв' };

export const watchScreen = (ui, key, { pip = false, at = '0:04', fill = 'vr-p30' } = {}) => {
  const m = moments[key];
  const others = Object.entries(moments).filter(([k]) => k !== key);
  return ui.screen({
    id: m.id, theme: THEME, className: 'vr-wrap',
    body: ui.scroll([
      ui.player({
        art: m.art, at, total: m.dur, fillClass: fill, playing: true, className: 'is-root',
        chapter: `${KIND[m.kind]} · ${m.min}-я минута`,
        collapse: { go: 'home', label: 'Свернуть в мини-плеер' },
        settings: { menu: 'Качество · 1080p=Качество 1080p|Скорость · 0,5×=Скорость 0,5×|Звук при погашенном экране>lock', label: 'Настройки просмотра' },
        fullscreen: { toast: 'Во весь экран — поверните телефон' },
      }),
      ui.section({ children: [
        `<h1 class="ui-title vr-watch-title">${m.title}</h1>`,
        ui.foot(`${mMeta(m)} · снял ${m.by.short} · ${m.votes} голосов за лучший`, 'vr-watch-meta'),
        pip ? ui.actions(ui.button({ label: 'Картинка в картинке', icon: 'picture-in-picture-2', variant: 'secondary', block: true, activate: 'audio|background' }), { className: 'vr-actions' }) : '',
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.avatar(m.who.initial), title: m.who.name, sub: `${m.who.role} · ${KIND[m.kind].toLowerCase()} на ${m.min}-й минуте` }),
        ui.row({ lead: ui.leadIcon('trophy', { round: true, accent: true }), title: lastMatch.title, sub: lastMatch.meta, go: 'match' }),
      ]) }),
      ui.section({ title: 'Ещё моменты матча', children: ui.list(others.map(([, o]) =>
        ui.row({ thumb: o.art, wide: true, duration: o.dur, title: o.title, sub: mMeta(o), go: o.id }))) }),
    ]),
  });
};
