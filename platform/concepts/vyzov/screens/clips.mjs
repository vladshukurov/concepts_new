import { THEME, TABS } from './_shared.mjs';
import { videos, vMeta, oldTown } from '../model.mjs';

/* Клипы — вертикальные ролики команд с точек своих квестов, один на экран */
const v = videos.statue;
const side = (ui, icon, label, a) => `<span class="vz-clip-act">${ui.iconButton({ icon, label, look: 'glass', ...a })}<small>${label}</small></span>`;

export default (ui) => ui.screen({
  id: 'clips', theme: THEME, className: 'vz-clips',
  body: [
    '<div class="vz-fill">',
    `<div class="vz-clip-frame ${v.art}"></div><div class="vz-clip-shade"></div>`,
    `<header class="vz-clip-head"><strong>Клипы</strong><span>Квест «${oldTown.title}» · ролик 1 из ${oldTown.clips}</span></header>`,
    `<div class="vz-clip-side">${side(ui, 'trophy', '+3 очка', { toast: 'Лена засчитала точку 2' })}${side(ui, 'flag', 'Квест', { go: 'quest', label: oldTown.title })}${side(ui, 'skip-forward', 'Дальше', { toast: 'Следующий: Ёж, точка 2' })}</div>`,
    `<div class="vz-clip-info">${ui.avatar(v.who.initial)}<span class="ui-row-text"><strong>${v.title}</strong><span>${vMeta(v)}</span><span>Задание: повторите позу памятника</span></span></div>`,
    '<div class="vz-clip-bar"><i class="vz-p40"></i></div>',
    '</div>',
  ],
  tabs: ui.tabBar({ items: TABS, active: 'clips' }),
});
