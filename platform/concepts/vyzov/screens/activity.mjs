import { THEME } from './_shared.mjs';
import { videos, vMeta, oldTown, embankment } from '../model.mjs';

/* Уведомления — события своих квестов: новые ролики команд и старты */
export default (ui) => ui.screen({
  id: 'activity', theme: THEME, className: 'vz-wrap',
  body: [
    ui.nav({ title: 'Уведомления' }),
    ui.scroll([
      ui.section({ title: 'Сегодня', children: ui.list([
        ui.row({ thumb: videos.door.art, wide: true, duration: videos.door.dur, title: `Ёж снял точку 4: ${videos.door.title.toLowerCase()}`, sub: vMeta(videos.door), go: videos.door.id }),
        ui.row({ thumb: videos.fountain.art, wide: true, duration: videos.fountain.dur, title: `Дима снял точку 3: ${videos.fountain.title.toLowerCase()}`, sub: vMeta(videos.fountain), go: videos.fountain.id }),
      ]) }),
      ui.section({ title: 'Квесты', children: ui.list([
        ui.row({ lead: ui.leadIcon('flag', { round: true, accent: true }), title: oldTown.title, sub: `Лена: финал ${oldTown.finale}`, go: 'quest' }),
        ui.row({ lead: ui.leadIcon('calendar', { round: true }), title: embankment.title, sub: `Старт в ${embankment.when} · 6 игроков идут`, go: 'embankment' }),
      ]) }),
    ]),
  ],
});
