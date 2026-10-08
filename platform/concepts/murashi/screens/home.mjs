import { THEME, TABS, MINI, soundRow } from './_shared.mjs';
import { sounds, zima } from '../model.mjs';

/* «Звуки»: крупный заголовок и поиск, сегодняшняя запись и сетка мест в две колонки */
const S = sounds;
const grid = [S.okno, S.groza, S.priboy, S.dozhd, S.veter, S.les];
export default (ui) => ui.screen({
  id: 'home', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Звуки', ui.iconButton({ icon: 'plus', label: 'Новый звук', go: 'new' })),
    ui.search({ placeholder: 'Звуки и места', go: 'search', label: 'Поиск' }),
    ui.section({ shownAfter: 'push', children: ui.list([
      ui.row({ lead: ui.leadIcon('cloud-snow', { round: true, accent: true }), title: `${zima.remind.date} · записать первый снег`, sub: `напомним в ${zima.remind.time}`, go: 'zima' }),
    ]) }),
    ui.section({ title: 'Сегодня', children: ui.list([soundRow(S.pekarnya, { sub: `Покровка · ${S.pekarnya.time} · без фото места` })]) }),
    ui.section({ title: 'Места', meta: 'недавние', children: ui.grid(grid.map((x) => ui.card({
      art: x.art, duration: x.dur, title: x.title, sub: `${x.where.split(',')[0]} · ${x.date}`, go: x.id, label: x.title, className: 'ms-place',
    }))) }),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'home', mini: MINI }),
});
