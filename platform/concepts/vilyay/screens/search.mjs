import { THEME, clipRow } from './_shared.mjs';
import { clips, cMeta, series, seasons } from '../model.mjs';

/* Поиск по своим роликам, сериалам и сезонам */
export default (ui) => ui.screen({
  id: 'search', theme: THEME, className: 'vl-wrap',
  body: [
    ui.nav({ title: 'Поиск' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Ролики, серии и места', value: 'пылесос', clear: { toast: 'Запрос очищен' } }) }),
      ui.section({ title: 'Ролики', meta: '2 найдено', children: ui.list([
        clipRow(ui, clips.robot, cMeta(clips.robot)),
        ui.row({ thumb: 'd5', wide: true, duration: '0:52', title: 'Рыжик против пылесоса · серия 1', sub: 'сняла мама · 28 марта 2025', go: 'series' }),
      ]) }),
      ui.section({ title: 'Сериалы', children: ui.list([
        ui.row({ thumb: series.art, wide: true, duration: series.total, title: series.title, sub: `${series.count} серии · сезоны «${seasons.puppy.title}», «${seasons.first.title}» и «${seasons.now.title}»`, go: 'series' }),
      ]) }),
    ]),
  ],
});
