import { THEME, TABS } from './_shared.mjs';
import { clips, cMeta, seasons, nClips } from '../model.mjs';

/* «Создать» — лист поверх главной: снять Рыжика, завести серию, добавить видео щенка */
export default (ui) => ui.screen({
  id: 'create', theme: THEME, className: 'vl-create',
  body: [
    '<div class="vl-fill">',
    `<div class="vl-behind" aria-hidden="true">${['robot', 'snow'].map((k) => { const c = clips[k]; return ui.videoCard({ art: c.art, duration: c.dur, avatar: ui.avatar(c.by.initial), title: c.title, sub: cMeta(c) }); }).join('')}</div>`,
    '<div class="vl-dim"></div>',
    ui.sheet([
      '<div class="vl-sheet-head"><h1 class="ui-title">Создать</h1><p class="ui-sub">Ролик сразу встанет в сезон «Сейчас»</p></div>',
      ui.group({ cells: [
        ui.cell({ icon: 'video', title: 'Снять Рыжика', sub: `Сезон «Сейчас» · ${nClips(seasons.now.clips)}`, go: 'now' }),
        ui.cell({ icon: 'clapperboard', title: 'Новая серия', sub: 'Название и сезон, ролики добавятся потом', go: 'newseries' }),
        ui.cell({ icon: 'images', title: 'Видео щенка из «Фото»', sub: `В сезон «Щенок» · ${seasons.puppy.range}`, go: 'puppy' }),
      ] }),
      ui.actions(ui.button({ label: 'Отмена', variant: 'secondary', block: true, go: 'home' }), { className: 'vl-actions' }),
    ], 'vl-create-sheet'),
    '</div>',
  ],
  tabs: ui.tabBar({ items: TABS, active: 'create' }),
});
