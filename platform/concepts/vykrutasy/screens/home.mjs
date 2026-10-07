import { THEME, TABS, MINI, frame } from './_shared.mjs';
import { highlights, hlMeta, lenaEvening, tonight, dimaEvening } from '../model.mjs';

const card = (ui, h, when) => ui.videoCard({
  art: frame, duration: h.dur, go: h.id,
  avatar: ui.avatar(h.who.initial), title: h.title, sub: hlMeta(h, when),
});

export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.top(ui.wordmark({ name: 'Выкрутасы' }), [
      ui.iconButton({ icon: 'bell', label: 'Приглашение Лены', go: 'invite' }),
      ui.iconButton({ icon: 'search', label: 'Поиск', go: 'search' }),
    ]),
    ui.chips([
      { label: 'Все', on: true, filter: 'all' },
      { label: 'Хайлайты', filter: 'hl' },
      { label: 'Мои ответы', filter: 'mine' },
      { label: 'Вечера', filter: 'ev' },
    ]),
    ui.section({ tags: ['hl'], children: card(ui, highlights.cat) }),
    ui.section({ tags: ['hl'], children: card(ui, highlights.prom) }),
    ui.section({ children: ui.adCard({ icon: 'store', title: 'Пицца к вечеру игры', sub: 'Реклама · доставка за 40 минут', subGranted: 'Реклама · по интересам · пиццерия в 800 м', go: 'ads' }) }),
    ui.section({ tags: ['mine'], children: card(ui, highlights.mine) }),
    ui.section({ tags: ['ev'], title: 'Вечера', children: ui.list([
      ui.row({ lead: ui.leadIcon('tv', { round: true, accent: true }), title: tonight.title, sub: `Сегодня, ${tonight.time} · ${tonight.players.length} игроков · 5 раундов`, go: 'room' }),
      ui.row({ thumb: frame, wide: true, duration: '1:24', title: lenaEvening.title, sub: `${lenaEvening.meta} · вчера`, go: 'evening' }),
      ui.row({ lead: ui.leadIcon('history', { round: true }), title: dimaEvening.title, sub: `${dimaEvening.meta} · ${dimaEvening.day}` }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home', mini: MINI }),
});
