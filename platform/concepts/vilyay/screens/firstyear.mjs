import { THEME, clipRow } from './_shared.mjs';
import { seasonHead } from './_season.mjs';
import { seasons, sMeta, clips, cMeta, reactLine, series } from '../model.mjs';

/* Сезон «Первый год»: целиком одним роликом в «Фото» — бабушке и на память */
const s = seasons.first;
export default (ui) => ui.screen({
  id: 'firstyear', theme: THEME, className: 'vl-wrap',
  body: [
    ui.nav({ title: 'Первый год' }),
    ui.scroll([
      ...seasonHead(ui, s, `${sMeta(s)} · ${s.total}`),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('download', { round: true, accent: true }), title: 'Сохранить сезон «Первый год» в «Фото»', sub: `Лучшие 24 ролика одним фильмом · 12:40`, ask: 'photosadd|firstyear|firstyear' }),
        ui.row({ shownAfter: 'photosadd', lead: ui.leadIcon('images', { round: true, accent: true }), title: 'Первый год Рыжика · 12:40 в «Фото»', sub: 'Альбом «Рыжик» · 1080p · 684 МБ' }),
      ]) }),
      ui.section({ title: 'Первый раз', meta: '9 роликов', children: ui.list([
        clipRow(ui, clips.snow, `${cMeta(clips.snow)} · ${reactLine(clips.snow)}`),
        ui.row({ thumb: 'd7', wide: true, duration: '0:44', title: 'Первое море: Рыжик лает на волну', sub: 'снял папа · 3 июля · 😂 7 · ❤️ 4' }),
        ui.row({ thumb: 'd8', wide: true, duration: '0:36', title: 'Рыжик впервые прыгает в листья', sub: 'сняла мама · 8 октября · 😂 3 · ❤️ 5', go: 'memory' }),
      ]) }),
      ui.section({ title: 'Сериалы', children: ui.list([
        ui.row({ thumb: series.art, wide: true, duration: series.total, title: series.title, sub: 'серии 2 и 3 сняты в этом сезоне', go: 'series' }),
      ]) }),
    ]),
  ],
});
