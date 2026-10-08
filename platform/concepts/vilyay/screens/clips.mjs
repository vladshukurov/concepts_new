import { THEME, TABS } from './_shared.mjs';
import { clip, dog } from '../model.mjs';

/* Клипы — короткие вертикальные ролики Рыжика, один на экран */
const side = (ui, icon, label, a) => `<span class="vl-clip-act">${ui.iconButton({ icon, label, look: 'glass', ...a })}<small>${label}</small></span>`;

export default (ui) => ui.screen({
  id: 'clips', theme: THEME, className: 'vl-clips',
  body: [
    '<div class="vl-fill">',
    `<div class="vl-clip-frame ${clip.art}"></div><div class="vl-clip-shade"></div>`,
    `<header class="vl-clip-head"><strong>Клипы</strong><span>Сезон «Сейчас» · клип ${clip.n} из ${clip.of}</span></header>`,
    `<div class="vl-clip-side">${side(ui, 'heart', 'Мило', { toggle: 'on' })}${side(ui, 'clapperboard', 'Сезон', { go: 'now', label: 'Сезон «Сейчас»' })}${side(ui, 'skip-forward', 'Дальше', { toast: 'Следующий клип: Рыжик ждёт папу у двери' })}</div>`,
    `<div class="vl-clip-info">${ui.avatar(clip.by.initial)}<span class="ui-row-text"><strong>${clip.title}</strong><span>Снял ${clip.by.short} на вечерней прогулке · ${clip.dur}</span><span>😂 4 · ❤️ 6 · ${dog.name}, ${dog.age}</span></span></div>`,
    '<div class="vl-clip-bar"><i class="vl-p45"></i></div>',
    '</div>',
  ],
  tabs: ui.tabBar({ items: TABS, active: 'clips' }),
});
