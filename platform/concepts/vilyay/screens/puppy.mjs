import { THEME, clipRow } from './_shared.mjs';
import { seasonHead } from './_season.mjs';
import { seasons, sMeta, nClips, clips, cMeta, reactLine, oldPuppy, people } from '../model.mjs';

/* Сезон «Щенок»: старые видео из «Фото», снятые до приложения, встают в сезон */
const s = seasons.puppy;
export default (ui) => ui.screen({
  id: 'puppy', theme: THEME, className: 'vl-wrap',
  body: [
    ui.nav({ title: 'Щенок' }),
    ui.scroll([
      ...seasonHead(ui, s, `${sMeta(s)} · ${s.total}`),
      ui.section({ children: ui.list([
        ui.row({ lead: ui.leadIcon('images', { round: true, accent: true }), title: 'Добавить видео щенка из «Фото»', sub: 'Весна 2025, снято до «Виляй»', ask: 'photos|picker|puppy' }),
      ]) }),
      ui.denied('photos'),
      ui.section({ shownAfter: 'photos', children: ui.videoCard({ art: oldPuppy.art, duration: oldPuppy.dur, avatar: ui.avatar(people.papa.initial), title: oldPuppy.title, sub: oldPuppy.sub }) }),
      ui.section({ title: 'Ролики сезона', meta: nClips(s.clips), children: ui.list([
        clipRow(ui, clips.puddle, `${cMeta(clips.puddle)} · ${reactLine(clips.puddle)}`),
        ui.row({ thumb: 'd5', wide: true, duration: '0:52', title: 'Рыжик против пылесоса · серия 1', sub: 'сняла мама · 28 марта · первая встреча', go: 'series' }),
        ui.row({ thumb: 'd3', wide: true, duration: '1:04', title: 'Первая ночь дома', sub: 'снял папа · 9 марта · 😂 2 · ❤️ 9' }),
      ]) }),
    ]),
  ],
});
