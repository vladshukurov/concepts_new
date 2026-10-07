import { THEME } from './_shared.mjs';
import { tonight, tasks } from '../model.mjs';

/* Новый вечер: ведущий задаёт название, время и раунды — вечер создаётся сразу */
const input = (value, label) => `<input class="vy-input" value="${value}" aria-label="${label}"/>`;
export default (ui) => ui.screen({
  id: 'newevening', theme: THEME,
  body: [
    ui.nav({ title: 'Новый вечер', back: 'cancel' }),
    ui.scroll([
      ui.section({ children: ui.group({ className: 'vy-form', cells: [
        ui.cell({ title: input(tonight.title, 'Название вечера'), sub: 'Название' }),
        ui.cell({ icon: 'calendar', title: `Сегодня, ${tonight.time}`, sub: 'Когда', toast: 'Выбрано: сегодня, 20:00' }),
      ] }) }),
      ui.group({ label: 'Раунды · 5', cells: tonight.rounds.map((k, i) =>
        ui.cell({ lead: ui.leadIcon('', { text: String(i + 1) }), title: tasks[k], sub: k === 'fishing' ? 'Своё задание' : k === 'prom' ? 'Из галереи · набор игры' : 'Набор игры' })) }),
      ui.section({ children: ui.group({ cells: [
        ui.cell({ icon: 'square-pen', title: 'Задания', sub: 'Поменять раунды или придумать своё', go: 'tasks' }),
      ] }) }),
      ui.actions(ui.button({ label: 'Создать вечер', block: true, go: 'room', primary: true }), { className: 'vy-bottom' }),
    ]),
  ],
});
