import { THEME, issueRow } from './_shared.mjs';
import { weekly, fri, issues, iMeta, reactLine } from '../model.mjs';

/* Выпуск недели в вертикальном плеере: рубрики — главы, значок картинки в картинке уводит его в фон */
export default (ui) => ui.screen({
  id: 'watch', theme: THEME, className: 'vf-wrap vf-watch',
  body: ui.scroll([
    ui.player({
      art: weekly.art, at: '1:27', total: weekly.dur, fillClass: 'vf-p30', playing: true, className: 'is-root vf-player',
      chapters: weekly.chapters.map((c, n) => ({ label: c.title, w: c.w, state: n === 0 ? 'done' : n === 1 ? 'now' : undefined })),
      chapter: weekly.chapters[1].rubric.title,
      collapse: { go: 'home', label: 'Свернуть в окошко' },
      cast: { go: 'weekly', label: 'Пятничный выпуск на ТВ' },
      settings: { menu: 'Скорость · 1×=Скорость 1×|Скорость 0,75×=Скорость 0,75×|Звук при погашенном экране>lock', label: 'Настройки просмотра' },
      pip: { activate: 'audio|background' },
    }),
    ui.section({ children: [
      `<p class="vf-rubric">Выпуск недели · премьера ${fri.short} в ${fri.time}</p>`,
      `<h1 class="ui-title vf-watch-title">${weekly.title}</h1>`,
      ui.foot(`Ведут ${weekly.hosts} · ${weekly.dur} · собран из ${weekly.chapters.length} рубрик`, 'vf-watch-meta'),
    ] }),
    ui.section({ title: 'Рубрики выпуска', children: ui.list(weekly.chapters.map((c, n) => ui.row({
      lead: `<span class="vf-chn${n === 1 ? ' is-now' : ''}">${c.at}</span>`, title: c.title,
      sub: c.rubric ? `${c.rubric.title} · ${c.dur}${n === 1 ? ' · идёт сейчас' : ''}` : `Ведут ${weekly.hosts} · ${c.dur} · просмотрено`,
      ...(c.rubric ? { go: c.go } : {}),
    }))) }),
    ui.section({ children: ui.list([
      ui.row({ lead: ui.leadIcon('tv', { round: true, accent: true }), title: 'Выпуск недели', sub: `Премьера ${fri.day} в ${fri.time} на ТВ`, go: 'weekly' }),
    ]) }),
    ui.section({ title: 'Прошлые выпуски рубрик', children: ui.list([issueRow(ui, issues.fog, `${iMeta(issues.fog)} · ${reactLine(issues.fog)}`)]) }),
  ]),
});
