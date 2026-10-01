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
    ui.section({ title: 'Подсказка тренера', children: [
      ui.list([ui.row({ lead: ui.leadIcon('mic', { accent: true }), title: 'Записать подсказку', sub: `До 30 секунд · прозвучит на ${route.hint.at}`, ask: 'mic|music|music' })]),
      ui.granted('mic', `Подсказка записана · ${route.hint.len}`),
      ui.denied('mic', 'Подсказку можно оставить текстом на том же отрезке'),
    ] }),
    ui.section({ title: 'Ещё маршруты', children: ui.list([
      ui.row({ lead: ui.leadIcon('route'), title: 'Медеу, нижняя площадка', sub: '5,4 км · набор 120 м', go: 'player' }),
      ui.row({ lead: ui.leadIcon('film'), title: 'Видео техники', sub: '18 роликов · смотреть на телевизоре', go: 'videos' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'music' }),
});
