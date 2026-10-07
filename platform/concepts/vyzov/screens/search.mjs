import { THEME, frame } from './_shared.mjs';
import { videos, vMeta, oldTown } from '../model.mjs';

/* Поиск по своим квестам: ролики и квесты по слову */
export default (ui) => ui.screen({
  id: 'search', theme: THEME, className: 'vz-wrap',
  body: [
    ui.nav({ title: 'Поиск' }),
    ui.scroll([
      ui.search({ placeholder: 'Ролики и квесты', value: 'дверь', clear: { toast: 'Поиск очищен' } }),
      ui.section({ title: 'Ролики', children: ui.list([
        ui.row({ thumb: frame, wide: true, duration: videos.door.dur, title: videos.door.title, sub: vMeta(videos.door), go: videos.door.id }),
      ]) }),
      ui.section({ title: 'Квесты', children: ui.list([
        ui.row({ lead: ui.leadIcon('flag', { round: true, accent: true }), title: oldTown.title, sub: 'Точка 4: найдите дверь с номером 1907', go: 'quest' }),
      ]) }),
    ]),
  ],
});
