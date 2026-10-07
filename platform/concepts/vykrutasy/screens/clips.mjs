import { THEME, TABS } from './_shared.mjs';
import { highlights, hlMeta, lenaEvening, tasks } from '../model.mjs';

/* Клипы — вертикальные ответы игроков вчерашнего вечера, один на экран */
const h = highlights.monday;
const side = (ui, icon, label, a) => `<span class="vy-clip-act">${ui.iconButton({ icon, label, look: 'glass', ...a })}<small>${label}</small></span>`;

export default (ui) => ui.screen({
  id: 'clips', theme: THEME, className: 'vy-clips',
  body: [
    '<div class="vy-fill">',
    '<div class="vy-clip-frame ph on-dark"></div><div class="vy-clip-shade"></div>',
    `<header class="vy-clip-head"><strong>Клипы</strong><span>${lenaEvening.title} · ответ 1 из 14</span></header>`,
    `<div class="vy-clip-side">${side(ui, 'trophy', '3 голоса', { toast: 'Ответ Оли вошёл в хайлайты' })}${side(ui, 'tv', 'Вечер', { go: 'evening', label: lenaEvening.title })}${side(ui, 'skip-forward', 'Дальше', { toast: 'Следующий ответ: Дима, раунд 1' })}</div>`,
    `<div class="vy-clip-info">${ui.avatar(h.who.initial)}<span class="ui-row-text"><strong>${h.title}</strong><span>${hlMeta(h)}</span><span>Задание: ${tasks.monday.toLowerCase()}</span></span></div>`,
    '<div class="vy-clip-bar"><i class="vy-p40"></i></div>',
    '</div>',
  ],
  tabs: ui.tabBar({ items: TABS, active: 'clips' }),
});
