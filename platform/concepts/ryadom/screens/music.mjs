import { THEME, TABS, map } from './_shared.mjs';
import { route, longrun } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'music', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Маршруты', ui.iconButton({ icon: 'map-pin', label: 'Точка старта', go: 'place' })),
    ui.section({ title: `${route.name} · ${route.km} км`, meta: 'проверен утром', children: [
      map(),
      ui.list([
        ui.row({ lead: ui.leadIcon('play', { accent: true }), title: 'Бежать с голосом', sub: `Набор ${route.climb} · покрытие сухое`, go: 'player', primary: true }),
      ]),
    ] }),
    ui.section({ title: 'Мои подсказки', meta: '2', children: ui.list([
      ui.row({ lead: ui.leadIcon('mic', { accent: true }), title: `На ${route.hint.at} · мост`, sub: `${route.hint.len} · «держись правее, у перил лёд»`, toast: 'Подсказка играет' }),
      ui.row({ lead: ui.leadIcon('mic'), title: 'На 6,0 км · разворот', sub: '0:09 · «пей сейчас, дальше колонок нет»', toast: 'Подсказка играет' }),
    ]) }),
    ui.section({ title: 'Ещё маршруты', children: ui.list([
      ui.row({ lead: ui.leadIcon('route'), title: 'Медеу, нижняя площадка', sub: '5,4 км · набор 120 м', go: 'player' }),
      ui.row({ lead: ui.leadIcon('film'), title: 'Мои видео техники', sub: '3 ролика · смотреть на телевизоре', go: 'videos' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'music' }),
});
