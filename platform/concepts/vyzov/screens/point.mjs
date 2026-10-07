import { THEME, taskCard } from './_shared.mjs';
import { oldTown, current, next, toNext, myShot, fromPhotos, videos, vMeta } from '../model.mjs';

/* Экран точки: задание крупно, снять его или добавить снятое раньше, подсказка к следующей */
export default (ui) => ui.screen({
  id: 'point', theme: THEME, className: 'vz-wrap',
  body: [
    ui.nav({ title: `Точка ${current.n}`, trailing: ui.iconButton({ icon: 'flag', label: oldTown.title, go: 'quest' }) }),
    ui.scroll([
      ui.section({ children: [
        taskCard({ n: current.n, task: current.task, place: current.place }),
        ui.actions([
          ui.button({ label: 'Снять задание', icon: 'video', block: true, ask: 'camera+mic|camera|point', primary: true }),
          ui.button({ label: 'Добавить снятое раньше', icon: 'images', variant: 'secondary', block: true, ask: 'photos|picker|point' }),
        ], { className: 'vz-task-actions' }),
      ] }),
      ui.denied('camera,mic'),
      ui.denied('photos'),
      ui.section({ title: 'Ролики на этой точке', children: ui.list([
        ui.row({ shownAfter: 'camera', thumb: myShot.art, wide: true, duration: myShot.dur, title: 'Ваш стук в дверь 1907', sub: `${myShot.sub} · в ленте квеста` }),
        ui.row({ shownAfter: 'photos', thumb: fromPhotos.art, wide: true, duration: fromPhotos.dur, title: 'Дверь 1907 крупно', sub: fromPhotos.sub }),
        ui.row({ thumb: videos.door.art, wide: true, duration: videos.door.dur, title: videos.door.title, sub: vMeta(videos.door), go: videos.door.id }),
      ]) }),
      ui.section({ title: `Дальше — точка ${next.n}`, children: ui.list([
        ui.row({ lead: ui.leadIcon('headphones', { round: true, accent: true }), title: `Подсказка к точке ${next.n}`, sub: `Аудио 0:40 · слушать с погашенным экраном · ${toNext.dist}`, activate: 'audio|lock' }),
      ]) }),
    ]),
  ],
});
