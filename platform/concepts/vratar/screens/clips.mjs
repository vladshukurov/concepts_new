import { THEME, TABS } from './_shared.mjs';
import { moments, mMeta, lastMatch } from '../model.mjs';

/* Клипы — вертикальные моменты прошлого матча, один на экран */
const m = moments.win;
const side = (ui, icon, label, a) => `<span class="vr-clip-act">${ui.iconButton({ icon, label, look: 'glass', ...a })}<small>${label}</small></span>`;

export default (ui) => ui.screen({
  id: 'clips', theme: THEME, className: 'vr-clips',
  body: [
    '<div class="vr-fill">',
    `<div class="vr-clip-frame ${m.art}"></div><div class="vr-clip-shade"></div>`,
    `<header class="vr-clip-head"><strong>Клипы</strong><span>${lastMatch.line} · момент 7 из ${lastMatch.moments}</span></header>`,
    `<div class="vr-clip-side">${side(ui, 'sparkles', 'Лучший', { toggle: 'on' })}${side(ui, 'trophy', 'Матч', { go: 'match', label: lastMatch.title })}${side(ui, 'skip-forward', 'Дальше', { toast: 'Следующий момент: сейв Гоши на 87-й' })}</div>`,
    `<div class="vr-clip-info">${ui.avatar(m.who.initial)}<span class="ui-row-text"><strong>${m.title}</strong><span>${mMeta(m)}</span><span>Снял ${m.by.short} со скамейки</span></span></div>`,
    '<div class="vr-clip-bar"><i class="vr-p45"></i></div>',
    '</div>',
  ],
  tabs: ui.tabBar({ items: TABS, active: 'clips' }),
});
