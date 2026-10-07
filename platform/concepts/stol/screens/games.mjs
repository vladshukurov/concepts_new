import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'games', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Игры'),
    ui.section({ children: ui.chips([{ label: 'Все', on: true, filter: 'all' }, { label: 'Евро', filter: 'euro' }, { label: 'Кооперативы', filter: 'coop' }, { label: 'До 60 минут', filter: 'short' }]) }),
    ui.section({ title: 'Хочу сыграть', meta: '2', tags: ['euro', 'coop', 'short'], children: ui.list([
      ui.row({ lead: ui.leadIcon('dices', { accent: true }), title: 'Остров сокровищ', sub: 'Есть у Маши · 3–5 игроков · 50 минут', go: 'game-island', primary: true, tags: ['euro', 'short'] }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Тихая гавань', sub: 'Уже в коллекции, в плёнке · 2 игрока · кооператив', go: 'game-harbor', tags: ['coop', 'short'] }),
    ]) }),
    ui.section({ title: 'Моя коллекция', meta: '17', tags: ['euro', 'coop', 'short'], children: ui.list([
      ui.row({ lead: ui.leadIcon('dices'), title: 'Лесные союзы', sub: 'Сыграно 9 партий · 75 минут · памятка вслух', go: 'game-forest', tags: ['euro'] }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Городские линии', sub: 'Сыграно 12 партий · 40 минут · знаете правила', go: 'game-lines', tags: ['euro', 'short'] }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Архив острова', sub: 'Сыграно 4 партии · 90 минут · кооператив', go: 'game-archive', tags: ['coop'] }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Маршруты Севера', sub: 'Сыграно 3 партии · 50 минут · в субботу снова', tags: ['euro', 'short'] }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Тихая гавань', sub: 'Ещё в плёнке · 35 минут · кооператив', tags: ['coop', 'short'] }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Сад камней', sub: 'Сыграна 1 партия · 30 минут · правила забыл', tags: ['short'] }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Большая ярмарка', sub: 'Сыграно 7 партий · 120 минут · не хватает фишки', tags: ['euro'] }),
      ui.row({ lead: ui.leadIcon('dices'), title: 'Ночной экспресс', sub: 'Одолжил Илья до пятницы · 45 минут', tags: ['coop', 'short'] }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'games' }),
});
