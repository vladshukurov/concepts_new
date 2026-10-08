import { THEME, TABS, MINI } from './_shared.mjs';
import { liveMatch, lastMatch, nextMatch, oldMatch, season, team } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'matches', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Матчи', ui.iconButton({ icon: 'plus', label: 'Новый матч', go: 'newmatch' })),
    ui.section({ children: ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Сыграны', filter: 'played' },
      { label: 'Впереди', filter: 'ahead' },
    ]) }),
    ui.section({ tags: ['ahead'], title: 'Сейчас', children: ui.videoCard({
      art: liveMatch.art, duration: `${liveMatch.minute}'`, go: 'live', avatar: ui.avatar(team.initial),
      title: liveMatch.title, sub: `${liveMatch.line} · 4 момента`,
    }) }),
    ui.section({ tags: ['ahead'], title: 'Скоро', children: ui.list([
      ui.row({ lead: ui.leadIcon('calendar', { round: true, accent: true }), title: nextMatch.title, sub: `${nextMatch.when} · ${nextMatch.field}`, go: 'nextmatch' }),
    ]) }),
    ui.section({ tags: ['played'], title: 'Прошедшие', meta: `${season.matches} матчей`, children: ui.list([
      ui.row({ thumb: lastMatch.art, wide: true, duration: lastMatch.total, title: lastMatch.line, sub: `${lastMatch.rival} · ${lastMatch.day}`, go: 'match' }),
      ui.row({ lead: ui.leadIcon('history', { round: true }), title: oldMatch.title, sub: `${oldMatch.meta} · у Тимура на телефоне` }),
    ]) }),
    ui.section({ tags: ['played'], children: ui.list([
      ui.row({ lead: ui.leadIcon('sparkles', { round: true, accent: true }), title: 'Лучшее за сезон', sub: `${season.best} моментов · ${season.total}`, go: 'season' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'matches', mini: MINI }),
});
