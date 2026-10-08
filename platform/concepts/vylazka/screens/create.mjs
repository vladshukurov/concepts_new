import { THEME, TABS } from './_shared.mjs';
import { films, fMeta, hike, nextWalk, lastTrip } from '../model.mjs';

/* «Создать» — лист поверх главной: снять привал идущего похода, новая вылазка, ролик друга */
export default (ui) => ui.screen({
  id: 'create', theme: THEME, className: 'vy-create',
  body: [
    '<div class="vy-fill">',
    `<div class="vy-behind" aria-hidden="true">${['view', 'spring'].map((k) => { const f = films[k]; return ui.videoCard({ art: f.art, duration: f.dur, avatar: ui.avatar(f.by.initial), title: f.title, sub: fMeta(f) }); }).join('')}</div>`,
    '<div class="vy-dim"></div>',
    ui.sheet([
      `<div class="vy-sheet-head"><h1 class="ui-title">Создать</h1><p class="ui-sub">${hike.route.name} · ${hike.line}</p></div>`,
      ui.group({ cells: [
        ui.cell({ icon: 'footprints', title: 'Идущий поход', sub: `${hike.route.title} · снять привал у точки «${hike.at}»`, go: 'hike' }),
        ui.cell({ icon: 'calendar-plus', title: 'Новая вылазка', sub: 'Маршрут, день, выход и кто идёт', go: 'newwalk' }),
        ui.cell({ icon: 'images', title: 'Ролик друга в фильм похода', sub: `${lastTrip.route.name} · ${lastTrip.day}`, go: 'trip' }),
        ui.cell({ icon: 'users', title: 'Кто идёт', sub: `${nextWalk.day.split(', ')[1]} · 4 из 6 идут`, go: 'crew' }),
      ] }),
      ui.actions(ui.button({ label: 'Отмена', variant: 'secondary', block: true, go: 'home' }), { className: 'vy-actions' }),
    ], 'vy-create-sheet'),
    '</div>',
  ],
  tabs: ui.tabBar({ items: TABS, active: 'create' }),
});
