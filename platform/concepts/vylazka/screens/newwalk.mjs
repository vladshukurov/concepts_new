import { THEME } from './_shared.mjs';
import { nextWalk } from '../model.mjs';

/* Новая вылазка: маршрут, день, выход и точки — вылазка создаётся сразу */
const input = (value, label) => `<input class="vy-input" value="${value}" aria-label="${label}"/>`;
const r = nextWalk.route;
export default (ui) => ui.screen({
  id: 'newwalk', theme: THEME,
  body: [
    ui.nav({ title: 'Новая вылазка', back: 'cancel' }),
    ui.scroll([
      ui.section({ children: ui.group({ className: 'vy-form', cells: [
        ui.cell({ title: input(r.title, 'Маршрут'), sub: 'Маршрут' }),
        ui.cell({ icon: 'calendar', title: nextWalk.when, sub: 'Когда выходим', toast: `Выбрано: ${nextWalk.when}` }),
        ui.cell({ title: input(nextWalk.meet, 'Где встречаемся'), sub: 'Где встречаемся' }),
      ] }) }),
      ui.group({ label: 'Точки маршрута', cells: r.points.map(([p, km, note]) =>
        ui.cell({ icon: 'map-pin', title: `${p[0].toUpperCase()}${p.slice(1)} · ${String(km).replace('.', ',')} км`, sub: note })) }),
      `<div class="vy-add">${ui.icon('plus')}<input class="vy-input" placeholder="Точка привала" aria-label="Точка привала"/>${ui.textButton({ label: 'Добавить', toast: 'Точка добавлена в маршрут' })}</div>`,
      ui.group({ label: 'Компания', cells: [
        ui.cell({ icon: 'users', title: 'Кто идёт · 4 из 6', sub: 'Позвать друзей', go: 'crew' }),
      ] }),
      ui.actions(ui.button({ label: 'Создать вылазку', block: true, go: 'nextwalk', primary: true }), { className: 'vy-bottom' }),
    ]),
  ],
});
