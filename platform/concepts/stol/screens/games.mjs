import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'games', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Игры', ui.iconButton({ icon: 'search', label: 'Поиск игры', toast: 'Поиск по названию' })),
    ui.section({ children: ui.chips([{ label: 'Все', on: true, go: 'games' }, { label: 'Евро', go: 'games' }, { label: 'Кооперативы', go: 'games' }, { label: 'До 60 минут', go: 'games' }]) }),
    ui.section({ title: 'Играют знакомые', children: ui.list([
      ui.row({ lead: ui.leadIcon('dices', { accent: true }), title: 'Маршруты Севера', sub: 'У трёх знакомых · 3–5 игроков · 50 минут', go: 'tables', primary: true }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Тихая гавань', sub: 'У восьми знакомых · 2 игрока · 35 минут', go: 'tables' }),
    ]) }),
    ui.section({ title: 'Ваша коллекция', meta: '17', children: ui.list([
      ui.row({ lead: ui.leadIcon('dices'), title: 'Лесные союзы', sub: 'Сыграно 9 партий · памятка вслух', go: 'audio' }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Городские линии', sub: 'Сыграно 12 партий · знаете правила', go: 'audio' }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Архив острова', sub: 'Сыграно 4 партии', go: 'audio' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'games' }),
});
