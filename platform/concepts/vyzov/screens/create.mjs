import { THEME, TABS } from './_shared.mjs';
import { current, oldTown } from '../model.mjs';

/* «Создать» — лист поверх главной: новый квест или снять задание текущей точки */
export default (ui) => ui.screen({
  id: 'create', theme: THEME, className: 'vz-create',
  body: [
    '<div class="vz-fill"><div class="vz-dim"></div>',
    ui.sheet([
      `<div class="vz-sheet-head"><h1 class="ui-title">Создать</h1><p class="ui-sub">Квест «${oldTown.title}» идёт · вы на точке ${current.n}</p></div>`,
      ui.group({ cells: [
        ui.cell({ icon: 'flag', title: 'Новый квест', sub: 'Точки на карте и задания для команд', go: 'newquest' }),
        ui.cell({ icon: 'video', title: 'Снять задание', sub: `Точка ${current.n} · ${current.task.toLowerCase()}`, go: 'point' }),
      ] }),
      ui.actions(ui.button({ label: 'Отмена', variant: 'secondary', block: true, go: 'home' }), { className: 'vz-sheet-actions' }),
    ], 'vz-create-sheet'),
    '</div>',
  ],
  tabs: ui.tabBar({ items: TABS, active: 'create' }),
});
