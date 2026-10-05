import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'recipes', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Рецепты', ui.iconButton({ icon: 'search', label: 'Поиск', go: 'discover' })),
    ui.section({ children: ui.chips([{ label: 'Все', on: true, filter: 'all' }, { label: 'Быстро', filter: 'quick' }, { label: 'Выпечка', filter: 'bake' }, { label: 'Ужин', filter: 'dinner' }]) }),
    ui.section({ title: 'Моя книга', meta: '27', tags: ['quick', 'bake', 'dinner'], children: ui.list([
      ui.row({ lead: ui.leadIcon('utensils'), title: 'Чечевичный суп', sub: '35 минут · готовили 34 раза', go: 'recipe', primary: true, tags: ['dinner'] }),
      ui.row({ lead: ui.leadIcon('utensils'), title: 'Хачапури на сковороде', sub: '20 минут · 2 удачные замены', go: 'recipe', tags: ['quick', 'bake', 'dinner'] }),
      ui.row({ lead: ui.leadIcon('utensils'), title: 'Грушевый пирог', sub: '55 минут · ваша проверка', go: 'recipe', tags: ['bake'] }),
      ui.row({ lead: ui.leadIcon('utensils'), title: 'Тёплый салат', sub: '15 минут · сезонное', go: 'recipe', tags: ['quick', 'dinner'] }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'recipes' }),
});
