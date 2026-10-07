import { THEME } from './_shared.mjs';
import { highlights, hlMeta, lenaEvening } from '../model.mjs';

/* Поиск по своим вечерам и ответам: в выдаче только то, что сыграно с друзьями */
export default (ui) => ui.screen({
  id: 'search', theme: THEME, className: 'vy-wrap',
  body: [
    ui.nav({ title: 'Поиск' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Вечера, задания и игроки', value: 'выпускной', clear: { toast: 'Запрос очищен' } }) }),
      ui.section({ title: 'Ответы', meta: '1 найден', children: ui.list([
        ui.row({ thumb: highlights.prom.art, wide: true, duration: highlights.prom.dur, title: highlights.prom.title, sub: hlMeta(highlights.prom), go: 'watchdance' }),
      ]) }),
      ui.section({ title: 'Вечера', children: ui.list([
        ui.row({ thumb: lenaEvening.art, wide: true, duration: '1:24', title: lenaEvening.title, sub: `Раунд 2 «выпускной» · ${lenaEvening.meta}`, go: 'evening' }),
      ]) }),
    ]),
  ],
});
