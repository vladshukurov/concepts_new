import { THEME, TABS, MINI } from './_shared.mjs';
import { moments, mMeta, lastMatch, liveMatch, nextMatch, team } from '../model.mjs';

const card = (ui, m, sub) => ui.videoCard({
  art: m.art, duration: m.dur, go: m.id,
  avatar: ui.avatar(m.who.initial), title: m.title, sub: sub || mMeta(m),
});

export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Вратарь' }), [
      ui.iconButton({ icon: 'bell', label: 'Следующий матч', go: 'nextmatch' }),
      ui.iconButton({ icon: 'search', label: 'Поиск', go: 'search' }),
    ]),
    ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Голы', filter: 'goal' },
      { label: 'Сейвы', filter: 'save' },
      { label: 'Мои', filter: 'mine' },
      { label: 'Матчи', filter: 'match' },
    ]),
    ui.section({ tags: ['save'], title: 'Лучший момент недели', children: card(ui, moments.save, `${mMeta(moments.save)} · ${moments.save.votes} голосов`) }),
    ui.section({ tags: ['goal'], children: card(ui, moments.free) }),
    ui.section({ children: ui.adCard({ icon: 'store', title: 'Бутсы для искусственного газона', sub: 'Реклама · доставка за 2 дня', subGranted: 'Реклама · по интересам · ваш размер 43 в наличии', go: 'ads' }) }),
    ui.section({ tags: ['goal', 'mine'], children: card(ui, moments.mine) }),
    ui.section({ tags: ['goal'], children: card(ui, moments.win) }),
    ui.section({ tags: ['match'], title: 'Матчи', children: ui.list([
      ui.row({ lead: ui.leadIcon('activity', { round: true, accent: true }), title: liveMatch.title, sub: `${liveMatch.line} · снимают Сева и Тимур`, go: 'live' }),
      ui.row({ thumb: lastMatch.art, wide: true, duration: lastMatch.total, title: lastMatch.line, sub: `${lastMatch.rival} · ${lastMatch.day}`, go: 'match' }),
      ui.row({ lead: ui.leadIcon('calendar', { round: true }), title: nextMatch.title, sub: `${nextMatch.when} · ${team.name} зовёт 8 игроков`, go: 'nextmatch' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home', mini: MINI }),
});
