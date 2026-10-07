import { THEME } from './_shared.mjs';
import { embankment } from '../model.mjs';

/* Новый квест: название, старт и точки с заданиями — квест создаётся сразу */
const input = (value, label) => `<input class="vz-input" value="${value}" aria-label="${label}"/>`;
const e = embankment;
export default (ui) => ui.screen({
  id: 'newquest', theme: THEME, className: 'vz-wrap',
  body: [
    ui.nav({ title: 'Новый квест', back: 'cancel' }),
    ui.scroll([
      ui.section({ children: ui.group({ className: 'vz-form', cells: [
        ui.cell({ title: input(e.title, 'Название квеста'), sub: 'Название' }),
        ui.cell({ icon: 'calendar', title: `Суббота, ${e.time}`, sub: 'Старт', toast: 'Старт: суббота, 12:00' }),
        ui.cell({ icon: 'users', title: '2 команды по 3 игрока', sub: 'Команды', toast: 'Команды: Сова и Ёж' }),
      ] }) }),
      ui.group({ label: `Точки · ${e.points.length}`, cells: e.points.map((p) =>
        ui.cell({ lead: ui.leadIcon('', { round: true, text: String(p.n) }), title: p.task, sub: p.place })) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'map-pin', title: 'Поставить точку здесь', sub: 'Место — где вы стоите, задание — своё', go: 'newpoint' }),
      ] }) }),
      ui.actions(ui.button({ label: 'Создать квест', block: true, go: 'embankment', primary: true }), { className: 'vz-bottom' }),
    ]),
  ],
});
