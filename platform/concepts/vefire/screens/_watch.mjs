/** Вертикальный плеер выпуска: кадр 9:16, главы — части выпуска. Файл с «_» — не экран. */
import { THEME, reactions, issueRow } from './_shared.mjs';
import { issues, iMeta, reactLine, rMeta } from '../model.mjs';

export const watchScreen = (ui, key, { at = '0:21', fill = 'vf-p30' } = {}) => {
  const i = issues[key];
  const others = Object.entries(issues).filter(([k]) => k !== key).slice(0, 2);
  return ui.screen({
    id: i.id, theme: THEME, className: 'vf-wrap vf-watch',
    body: ui.scroll([
      ui.player({
        art: i.art, at, total: i.dur, fillClass: fill, playing: true, className: 'is-root vf-player',
        chapters: i.chapters.map(([label, w], n) => ({ label, w, state: n < i.now ? 'done' : n === i.now ? 'now' : undefined })),
        chapter: i.chapters[i.now][0],
        collapse: { go: 'home', label: 'Свернуть в окошко' },
        settings: { menu: 'Скорость · 1×=Скорость 1×|Скорость 0,75×=Скорость 0,75×|Звук при погашенном экране>lock', label: 'Настройки просмотра' },
      }),
      ui.section({ children: [
        `<p class="vf-rubric">${i.rubric.title}</p>`,
        `<h1 class="ui-title vf-watch-title">${i.title}</h1>`,
        ui.foot(`${i.by.short} · ${i.dur} · ${i.day} · ${reactLine(i)}`, 'vf-watch-meta'),
        reactions(i),
        ui.foot(i.react.who, 'vf-watch-meta'),
      ] }),
      ui.section({ title: 'Части выпуска', children: ui.list(i.chapters.map(([label], n) => ui.row({
        lead: `<span class="vf-chn${n === i.now ? ' is-now' : ''}">${n + 1}</span>`, title: label, sub: n === i.now ? 'Идёт сейчас' : n < i.now ? 'Просмотрено' : 'Дальше',
      }))) }),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.avatar(i.rubric.host.initial), title: `Рубрика «${i.rubric.title}»`, sub: rMeta(i.rubric), go: i.rubric.id }),
        ui.row({ lead: ui.leadIcon('map-pin', { round: true }), title: i.place, sub: `Где снято · ${i.day}` }),
      ]) }),
      ui.section({ title: 'Ещё выпуски', children: ui.list(others.map(([, o]) => issueRow(ui, o, `${iMeta(o)} · ${reactLine(o)}`))) }),
    ]),
  });
};
