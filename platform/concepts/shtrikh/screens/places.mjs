import { THEME, TABS } from './_shared.mjs';
import { places } from '../model.mjs';

/* Свои места: где уже рисовала и сколько раз; рядом — по геопозиции */
const list = [
  [places.bazar, ['often', 'near']],
  [places.panfilova, ['often', 'near']],
  [places.terrenkur, ['often']],
  [{ name: 'Сквер у театра', works: 3, last: 'август' }, ['near']],
  [{ name: 'Вокзал Алматы-2', works: 2, last: 'июль' }, []],
];
export default (ui) => ui.screen({
  id: 'places', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Мои места'),
    ui.section({ children: ui.search({ placeholder: 'Улица или точка' }) }),
    ui.denied('location'),
    ui.section({ children: ui.chips([{ label: 'Все', on: true, filter: 'all' }, { label: 'Часто', filter: 'often' }, { label: 'Рядом', filter: 'near' }]) }),
    ui.section({ title: 'Где рисовала', meta: String(list.length), children: ui.list(list.map(([p, tags]) => ui.row({
      lead: ui.leadIcon('map-pin', { accent: tags.includes('near') }), title: p.name, sub: `${p.works} зарисовок · последняя ${p.last}`, tags,
      ...(p === places.panfilova ? { go: 'series', primary: true } : {}),
    }))) }),
    ui.section({ shownAfter: 'location', children: ui.list([ui.row({ lead: ui.leadIcon('navigation', { round: true, accent: true }), title: 'Вы у Панфилова, 84', sub: 'Серия ждёт снега · 120 м' })]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'places' }),
});
