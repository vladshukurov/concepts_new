import { THEME } from './_shared.mjs';
import { tasks, gameSet, ownSet, tonight } from '../model.mjs';

/* Задания вечера: набор игры и свои, придуманные ведущим. Своё добавляется полем внизу */
const inEvening = (k) => tonight.rounds.includes(k);
export default (ui) => ui.screen({
  id: 'tasks', theme: THEME,
  body: [
    ui.nav({ title: 'Задания' }),
    ui.scroll([
      ui.section({ children: ui.segments([
        { label: 'Все', on: true, filter: 'all' },
        { label: 'От игры', filter: 'game' },
        { label: 'Свои', filter: 'own' },
      ]) }),
      ui.section({ tags: ['own'], title: 'Свои', meta: `${ownSet.length} задания`, children: [
        ui.group({ cells: ownSet.map((k) => ui.cell({ icon: 'pen-line', title: tasks[k], sub: inEvening(k) ? `В вечере · раунд ${tonight.rounds.indexOf(k) + 1}` : 'Не в вечере', check: inEvening(k), toast: inEvening(k) ? 'Убрано из вечера' : 'Добавлено в вечер у Саши' })) }),
        `<div class="vy-add">${ui.icon('plus')}<input class="vy-input" placeholder="Своё задание" aria-label="Своё задание"/>${ui.textButton({ label: 'Добавить', toast: 'Задание добавлено в вечер у Саши' })}</div>`,
      ] }),
      ui.section({ tags: ['game'], title: 'От игры', meta: `${gameSet.length} заданий`, children: ui.group({ cells: gameSet.map((k) =>
        ui.cell({ icon: k === 'prom' ? 'images' : 'video', title: tasks[k], sub: inEvening(k) ? `В вечере · раунд ${tonight.rounds.indexOf(k) + 1}` : k === 'prom' ? 'Ответ из галереи' : 'Ответ на камеру', check: inEvening(k), toast: inEvening(k) ? 'Убрано из вечера' : 'Добавлено в вечер у Саши' })) }) }),
    ]),
  ],
});
