import { THEME, TABS } from './_shared.mjs';

export default (ui) => ui.screen({
  id: 'walks', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Прогулки', ui.iconButton({ icon: 'navigation', label: 'Найти рядом', sr: 'Найти рядом', primary: true, ask: 'location|route|walks' })),
    ui.denied('location', 'Геопозиция недоступна — выбран район Медеу'),
    ui.section({ title: 'Сегодня', children: [
      `<button class="ui-video" data-go="walk"><span class="ui-video-art ph">${ui.duration('18:40')}</span><span class="ui-video-meta"><span class="ui-video-text"><strong>Тени вдоль Малой Алматинки</strong><span>4,2 км · закат 19:21 · 7 участников</span></span></span></button>`,
    ] }),
    ui.section({ title: 'Неделя', children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: '06:20' }), title: 'Ранний рынок', sub: 'Завтра · 5 мест · цветная плёнка', go: 'walk' }),
      ui.row({ lead: ui.leadIcon('', { text: '22:10' }), title: 'Ночной проспект', sub: 'Пятница · штатив · 2,8 км', go: 'walk' }),
      ui.row({ lead: ui.leadIcon('', { text: '11:00' }), title: 'Тихая группа для новичков', sub: 'Воскресенье · 9 участников · без темпа', go: 'walk' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'walks' }),
});
