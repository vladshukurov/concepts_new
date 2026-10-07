import { THEME, TABS, MINI, frame, videoCard } from './_shared.mjs';
import { videos, oldTown, hereLine, sokolniki, embankment } from '../model.mjs';

/* Главная в грамматике ВК Видео: чипсы и крупные кадры роликов со своих квестов */
export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Вызов' }), [
      ui.iconButton({ icon: 'bell', label: 'Уведомления', go: 'activity' }),
      ui.iconButton({ icon: 'search', label: 'Поиск', go: 'search' }),
    ]),
    ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Идёт сейчас', filter: 'live' },
      { label: 'Мои квесты', filter: 'mine' },
      { label: 'Лучшее', filter: 'best' },
    ]),
    ui.section({ tags: ['live'], children: ui.list([
      ui.row({ lead: ui.leadIcon('navigation', { round: true, accent: true }), title: oldTown.title, sub: `Идёт сейчас · ${hereLine.toLowerCase()} из ${oldTown.pointsCount}`, go: 'quest' }),
    ]) }),
    ui.section({ tags: ['live'], children: videoCard(videos.fountain) }),
    ui.section({ tags: ['live'], children: videoCard(videos.door) }),
    ui.section({ children: ui.adCard({ icon: 'zap', title: 'Самокаты у точки 5', sub: 'Реклама · прокат на маршруте', subGranted: 'Реклама · по интересам · 2 мин от точки 5', go: 'ads' }) }),
    ui.section({ tags: ['best'], children: videoCard(videos.boat) }),
    ui.section({ tags: ['mine'], title: 'Мои квесты', children: ui.list([
      ui.row({ lead: ui.leadIcon('calendar', { round: true, accent: true }), title: embankment.title, sub: `Старт в ${embankment.when} · ${embankment.meta}`, go: 'embankment' }),
      ui.row({ thumb: frame, wide: true, duration: sokolniki.film, title: sokolniki.finalTitle, sub: `Сова ${sokolniki.score.owl} : ${sokolniki.score.hedgehog} Ёж · ${sokolniki.day}`, go: 'final' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home', mini: MINI }),
});
