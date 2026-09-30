import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'recipes', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Рецепты', ui.iconButton({ icon: 'search', label: 'Поиск', go: 'discover' })),
    ui.section({ children: ui.chips([{ label: 'Все', on: true, go: 'recipes' }, { label: 'Быстро', go: 'discover' }, { label: 'Выпечка', go: 'discover' }, { label: 'Ужин', go: 'discover' }]) }),
    ui.section({ title: 'Моя книга', meta: '27', children: ui.list([
      ui.row({ thumb: 'ph', title: 'Чечевичный суп', sub: '35 минут · готовили 34 раза', go: 'recipe', primary: true }),
      ui.row({ thumb: 'ph', title: 'Хачапури на сковороде', sub: '20 минут · 2 удачные замены', go: 'recipe' }),
      ui.row({ thumb: 'ph', title: 'Грушевый пирог', sub: '55 минут · ваша проверка', go: 'recipe' }),
      ui.row({ thumb: 'ph', title: 'Тёплый салат', sub: '15 минут · сезонное', go: 'recipe' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'recipes' }),
});
