import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'recipes', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Рецепты', ui.iconButton({ icon: 'search', label: 'Поиск', go: 'discover' })),
    ui.section({ children: ui.chips([{ label: 'Все', on: true, filter: 'all' }, { label: 'Быстро', filter: 'quick' }, { label: 'Выпечка', filter: 'bake' }, { label: 'Ужин', filter: 'dinner' }]) }),
    ui.section({ title: 'Моя книга', meta: '27', tags: ['quick', 'bake', 'dinner'], children: ui.list([
      ui.row({ lead: ui.leadIcon('book-open'), title: 'Грушевый пирог', sub: '55 минут · пекла 6 раз · сахар вдвое меньше', go: 'recipe', primary: true, tags: ['bake'] }),
      ui.row({ lead: ui.leadIcon('book-open'), title: 'Чечевичный суп', sub: '35 минут · от Жанны, ещё не готовила', tags: ['dinner'] }),
      ui.row({ lead: ui.leadIcon('book-open'), title: 'Хачапури на сковороде', sub: '20 минут · сулугуни → адыгейский', tags: ['quick', 'bake', 'dinner'] }),
      ui.row({ lead: ui.leadIcon('book-open'), title: 'Тёплый салат с тыквой', sub: '15 минут · готовила 3 раза', tags: ['quick', 'dinner'] }),
      ui.row({ lead: ui.leadIcon('book-open'), title: 'Сырники', sub: '25 минут · разваливались в мае', tags: ['quick'] }),
      ui.row({ lead: ui.leadIcon('book-open'), title: 'Плов в казане', sub: '1 час 40 минут · мамин, без замен', tags: ['dinner'] }),
      ui.row({ lead: ui.leadIcon('book-open'), title: 'Банановый хлеб', sub: '1 час · черновик', tags: ['bake'] }),
    ]) }),
    ui.section({ children: ui.actions([ui.button({ label: 'Показать все 27', variant: 'tertiary', block: true, toast: 'Ещё 20 рецептов ниже' })]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'recipes' }),
});
