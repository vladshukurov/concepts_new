/** Плеер ролика: общий для роликов Рыжика. Файл с «_» — не экран. */
import { THEME, reactions, clipRow } from './_shared.mjs';
import { clips, cMeta, reactLine, dog, sMeta } from '../model.mjs';

export const watchScreen = (ui, key, { pip = false, at = '0:21', fill = 'vl-p30' } = {}) => {
  const c = clips[key];
  const others = Object.entries(clips).filter(([k]) => k !== key);
  return ui.screen({
    id: c.id, theme: THEME, className: 'vl-wrap',
    body: ui.scroll([
      ui.player({
        art: c.art, at, total: c.dur, fillClass: fill, playing: true, className: 'is-root',
        chapter: c.series || `Сезон «${c.season.title}»${c.first ? ' · первый раз' : ''}`,
        collapse: { go: 'home', label: 'Свернуть в мини-плеер' },
        settings: { menu: 'Качество · 1080p=Качество 1080p|Скорость · 0,5×=Скорость 0,5×|Звук при погашенном экране>lock', label: 'Настройки просмотра' },
        fullscreen: { toast: 'Во весь экран — поверните телефон' },
      }),
      ui.section({ children: [
        `<h1 class="ui-title vl-watch-title">${c.title}</h1>`,
        ui.foot(`${cMeta(c)} · ${reactLine(c)}`, 'vl-watch-meta'),
        reactions(c),
        ui.foot(c.react.who, 'vl-watch-meta'),
        pip ? ui.actions(ui.button({ label: 'Картинка в картинке', icon: 'picture-in-picture-2', variant: 'secondary', block: true, activate: 'audio|background' }), { className: 'vl-actions' }) : '',
      ] }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.avatar(dog.initial), title: `Сезон «${c.season.title}»`, sub: sMeta(c.season), go: c.season.id }),
        ui.row({ lead: ui.leadIcon('map-pin', { round: true }), title: c.place, sub: `Где снято · ${c.day}` }),
      ]) }),
      ui.section({ title: 'Ещё про Рыжика', children: ui.list(others.map(([, o]) => clipRow(ui, o, `${cMeta(o)} · ${reactLine(o)}`))) }),
    ]),
  });
};
