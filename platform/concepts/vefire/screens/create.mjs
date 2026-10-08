import { THEME, TABS } from './_shared.mjs';
import { rubrics, weekly } from '../model.mjs';

/* «Снять» — лист поверх главной: новый выпуск, видео из «Фото» в рубрику, выпуск недели */
export default (ui) => ui.screen({
  id: 'create', theme: THEME, className: 'vf-create',
  body: [
    '<div class="vf-fill">',
    `<div class="vf-behind" aria-hidden="true"><span class="vf-behind-big ${weekly.art}"></span><span class="vf-behind-row"><i class="f-rain"></i><i class="f-dogs"></i></span></div>`,
    '<div class="vf-dim"></div>',
    ui.sheet([
      '<div class="vf-sheet-head"><h1 class="ui-title">Снять</h1><p class="ui-sub">Выпуск попадёт в рубрику и в выпуск недели</p></div>',
      ui.group({ cells: [
        ui.cell({ icon: 'video', title: 'Новый выпуск', sub: 'Название, рубрика, ведущий — и камера', go: 'newissue' }),
        ui.cell({ icon: 'images', title: 'Видео Муси из «Фото»', sub: `В рубрику «${rubrics.cat.title}»`, go: 'cat' }),
        ui.cell({ icon: 'tv', title: 'Выпуск недели', sub: `№${weekly.n} · ${weekly.chapters.length} рубрики`, go: 'weekly' }),
      ] }),
      ui.actions(ui.button({ label: 'Отмена', variant: 'secondary', block: true, go: 'home' }), { className: 'vf-actions' }),
    ], 'vf-create-sheet'),
    '</div>',
  ],
  tabs: ui.tabBar({ items: TABS, active: 'create' }),
});
