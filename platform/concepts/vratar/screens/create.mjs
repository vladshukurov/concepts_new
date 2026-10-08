import { THEME, TABS } from './_shared.mjs';
import { moments, mMeta, liveMatch, nextMatch } from '../model.mjs';

/* «Создать» — лист поверх главной: новый матч, момент идущего матча и состав */
export default (ui) => ui.screen({
  id: 'create', theme: THEME, className: 'vr-create',
  body: [
    '<div class="vr-fill">',
    `<div class="vr-behind" aria-hidden="true">${['save', 'free'].map((k) => { const m = moments[k]; return ui.videoCard({ art: m.art, duration: m.dur, avatar: ui.avatar(m.who.initial), title: m.title, sub: mMeta(m) }); }).join('')}</div>`,
    '<div class="vr-dim"></div>',
    ui.sheet([
      `<div class="vr-sheet-head"><h1 class="ui-title">Создать</h1><p class="ui-sub">${liveMatch.title} · ${liveMatch.line}</p></div>`,
      ui.group({ cells: [
        ui.cell({ icon: 'video', title: 'Снять момент', sub: `Идёт матч с «${liveMatch.rivalWith}» · ${liveMatch.score}`, go: 'live' }),
        ui.cell({ icon: 'calendar-plus', title: 'Новый матч', sub: 'Соперник, поле и время', go: 'newmatch' }),
        ui.cell({ icon: 'users', title: 'Состав', sub: `На ${nextMatch.day.split(', ')[1]} · 6 из 9 придут`, go: 'squad' }),
      ] }),
      ui.actions(ui.button({ label: 'Отмена', variant: 'secondary', block: true, go: 'home' }), { className: 'vr-actions' }),
    ], 'vr-create-sheet'),
    '</div>',
  ],
  tabs: ui.tabBar({ items: TABS, active: 'create' }),
});
