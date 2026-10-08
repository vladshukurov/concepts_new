import { THEME, TABS } from './_shared.mjs';
import { plants, sills, week } from '../model.mjs';

/* Подоконники: растения там, где они стоят, свет и полоса недели — что полить,
   подкормить или пропустить. Строка растения открывает его карточку */
const MARK = { w: ['полив', 'is-w'], f: ['корм', 'is-f'], s: ['пропуск', 'is-s'], '': ['', ''] };
const strip = (days) => `<div class="vz-week" role="list">${days.map((d, i) => `<span role="listitem" class="${MARK[d][1]}${i === 0 ? ' is-today' : ''}" aria-label="${week[i]}${MARK[d][0] ? ` · ${MARK[d][0]}` : ''}"><b>${week[i]}</b><i>${MARK[d][0] || '·'}</i></span>`).join('')}</div>`;

export default (ui) => ui.screen({
  id: 'plants', theme: THEME,
  body: ui.scroll([
    ui.largeTitle('Подоконники', ui.iconButton({ icon: 'plus', label: 'Добавить растение', go: 'plantnew' })),
    ui.section({ children: ui.list([ui.row({ lead: ui.leadIcon('circle-check', { round: true, accent: true }), title: 'Сроки полива пересчитаны к утру', sub: 'Отопление включили — на севере сохнет медленнее, на юге быстрее' })]) }),
    ...sills.map((s) => ui.section({ title: s.name, meta: String(s.plants.length), children: [
      `<p class="vz-light">${ui.icon('cloud-sun')}${s.light}</p>`,
      strip(s.days),
      ui.list(s.plants.map((k) => { const p = plants[k]; return ui.row({ lead: ui.leadIcon(p.icon, { round: true, accent: p.water === 'сегодня' }), title: p.name, sub: `полить ${p.water} · ${p.every}`, go: p.id }); })),
    ] })),
  ], { root: true }),
  tabs: ui.tabBar({ items: TABS, active: 'plants' }),
});
