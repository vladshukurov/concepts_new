import { THEME, TABS, P } from './_shared.mjs';
import { swap } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'nearby', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Рядом'),
    ui.section({ children: [
      ui.actions([ui.button({ label: 'Показать рядом со мной', icon: 'navigation', variant: 'secondary', block: true, ask: 'location|nearby|nearby' })]),
      ui.list([ui.row({ lead: ui.leadIcon('navigation', { round: true, accent: true }), title: 'Ближе всего: своп в Новой Голландии', sub: '2,4 км · 31 минута пешком', go: 'swap', shownAfter: 'location' })]),
    ] }),
    ui.denied('location'),
    ui.section({ title: 'Свопы и встречи', children: ui.list([
      ui.row({ lead: ui.leadIcon('', { text: '23' }), title: swap.title, sub: `Идёт до ${swap.hours.split('–')[1]} · 2,4 км`, go: 'swap' }),
      ui.row({ lead: ui.leadIcon('', { text: '24' }), title: 'Барахолка на Ваське', sub: 'Воскресенье, 12:00 · 5,1 км' }),
      ui.row({ lead: ui.leadIcon('', { text: '28' }), title: 'Разбор гардероба на Рубинштейна', sub: '19:30 · 1,2 км' }),
    ]) }),
    ui.section({ title: 'Винтаж и ателье рядом', meta: '9', children: ui.list([
      ui.row({ lead: ui.leadIcon('store'), title: 'Винтаж на Большой Пушкарской', sub: '600 м · пальто и жакеты 90‑х · до 21:00' }),
      ui.row({ lead: ui.leadIcon('scissors'), title: 'Ателье «Подшив»', sub: '1,1 км · джинсы за день, 700 ₽' }),
      ui.row({ lead: ui.leadIcon('store'), title: 'Комиссионка на Кронверкском', sub: '1,8 км · принимают по четвергам' }),
    ]) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'nearby' }),
});
