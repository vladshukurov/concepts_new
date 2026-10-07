import { THEME, TABS } from './_shared.mjs';
import { tonight, tasks } from '../model.mjs';

/* «Создать» — лист поверх главной: новый вечер, задания и ответ на текущий раунд */
export default (ui) => ui.screen({
  id: 'create', theme: THEME, className: 'vy-create',
  body: [
    '<div class="vy-fill"><div class="vy-dim"></div>',
    ui.sheet([
      `<div class="vy-sheet-head"><h1 class="ui-title">Создать</h1><p class="ui-sub">${tonight.title} · сегодня, ${tonight.time}</p></div>`,
      ui.group({ cells: [
        ui.cell({ icon: 'calendar-plus', title: 'Новый вечер', sub: 'Название, время и раунды', go: 'newevening' }),
        ui.cell({ icon: 'square-pen', title: 'Задания', sub: '6 от игры и 2 своих', go: 'tasks' }),
        ui.cell({ icon: 'video', title: 'Снять ответ', sub: `Раунд 1 · ${tasks.desk.toLowerCase()}`, go: 'round' }),
      ] }),
      ui.actions(ui.button({ label: 'Отмена', variant: 'secondary', block: true, go: 'home' }), { className: 'vy-sheet-actions' }),
    ], 'vy-create-sheet'),
    '</div>',
  ],
  tabs: ui.tabBar({ items: TABS, active: 'create' }),
});
