import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'games', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Игры', ui.iconButton({ icon: 'plus', label: 'Добавить коробку', go: 'compose' })),
    ui.section({ children: ui.chips([{ label: 'Все', on: true, filter: 'all' }, { label: 'Евро', filter: 'euro' }, { label: 'Кооперативы', filter: 'coop' }, { label: 'До 60 минут', filter: 'short' }]) }),
    ui.section({ title: 'Хочу сыграть', meta: '2', tags: ['euro', 'coop', 'short'], children: ui.list([
      ui.row({ lead: ui.leadIcon('dices', { accent: true }), title: 'Маршруты Севера', sub: 'Есть у Маши · 3–5 игроков · 50 минут', go: 'tables', primary: true, tags: ['euro', 'short'] }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Тихая гавань', sub: 'Уже в коллекции, в плёнке · 2 игрока · кооператив', go: 'tables', tags: ['coop', 'short'] }),
    ]) }),
    ui.section({ title: 'Моя коллекция', meta: '17', tags: ['euro', 'coop', 'short'], children: ui.list([
      ui.row({ lead: ui.leadIcon('dices'), title: 'Лесные союзы', sub: 'Сыграно 9 партий · 75 минут · памятка вслух', go: 'audio', tags: ['euro'] }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Городские линии', sub: 'Сыграно 12 партий · 40 минут · знаете правила', go: 'audio', tags: ['euro', 'short'] }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Архив острова', sub: 'Сыграно 4 партии · 90 минут · кооператив', go: 'audio', tags: ['coop'] }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'games' }),
});
