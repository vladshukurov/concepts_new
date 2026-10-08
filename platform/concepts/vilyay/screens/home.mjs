import { THEME, TABS, MINI } from './_shared.mjs';
import { clips, cMeta, reactLine, seasons, sMeta, yearAgo, series } from '../model.mjs';

const card = (ui, c, sub) => ui.videoCard({
  art: c.art, duration: c.dur, go: c.id,
  avatar: ui.avatar(c.by.initial), title: c.title, sub: sub || `${cMeta(c)} · ${reactLine(c)}`,
});

export default (ui) => ui.screen({
  id: 'home', theme: THEME, className: 'vl-wrap',
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Виляй' }), [
      ui.iconButton({ icon: 'history', label: 'Год назад сегодня', go: 'memory' }),
      ui.iconButton({ icon: 'search', label: 'Поиск', go: 'search' }),
    ]),
    ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Сейчас', filter: 'now' },
      { label: 'Первый год', filter: 'first' },
      { label: 'Щенок', filter: 'puppy' },
      { label: 'Первый раз', filter: 'firsts' },
    ]),
    ui.section({ tags: ['now'], title: 'Семья смеялась больше всего', children: card(ui, clips.robot, `${series.title} · серия 4 · ${reactLine(clips.robot)}`) }),
    ui.section({ tags: ['first', 'firsts'], title: 'Год назад сегодня', children: ui.list([
      ui.row({ thumb: yearAgo.art, wide: true, duration: yearAgo.dur, title: yearAgo.title, sub: `${yearAgo.day} 2025 · сняла мама`, go: 'memory' }),
    ]) }),
    ui.section({ tags: ['first', 'firsts'], children: card(ui, clips.snow) }),
    ui.section({ children: ui.adCard({ icon: 'store', title: 'Корм для активных собак', sub: 'Реклама · доставка завтра', subGranted: 'Реклама · по интересам · для ретриверов от года', go: 'ads' }) }),
    ui.section({ tags: ['now'], children: card(ui, clips.dacha) }),
    ui.section({ tags: ['puppy', 'firsts'], children: card(ui, clips.puddle) }),
    ui.section({ title: 'Сезоны Рыжика', children: ui.list(Object.values(seasons).reverse().map((s) =>
      ui.row({ thumb: s.art, wide: true, duration: s.total, title: `Сезон «${s.title}»`, sub: sMeta(s), go: s.id, tags: [s.tag] }))) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home', mini: MINI }),
});
