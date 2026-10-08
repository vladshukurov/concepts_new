import { THEME } from './_shared.mjs';
import { moments, mMeta, lastMatch, liveMoments } from '../model.mjs';

/* Поиск по своим матчам и моментам */
export default (ui) => ui.screen({
  id: 'search', theme: THEME, className: 'vr-wrap',
  body: [
    ui.nav({ title: 'Поиск' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Моменты, матчи и игроки', value: 'сейв', clear: { toast: 'Запрос очищен' } }) }),
      ui.section({ title: 'Моменты', meta: '2 найдено', children: ui.list([
        ui.row({ thumb: moments.save.art, wide: true, duration: moments.save.dur, title: moments.save.title, sub: mMeta(moments.save), go: 'watch' }),
        ui.row({ thumb: liveMoments[1].art, wide: true, duration: liveMoments[1].dur, title: liveMoments[1].title, sub: `Гоша · ${liveMoments[1].min}' · сегодня`, go: 'live' }),
      ]) }),
      ui.section({ title: 'Матчи', children: ui.list([
        ui.row({ thumb: lastMatch.art, wide: true, duration: lastMatch.total, title: lastMatch.line, sub: `3 сейва · ${lastMatch.rival} · ${lastMatch.day}`, go: 'match' }),
      ]) }),
    ]),
  ],
});
