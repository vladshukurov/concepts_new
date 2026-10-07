import { THEME, frame, taskCard } from './_shared.mjs';
import { tonight, tasks, roundAnswers } from '../model.mjs';

/* Раунд на телевизоре: задание крупно, ответ снимают на телефон — он сразу уходит в раунд */
export default (ui) => ui.screen({
  id: 'round', theme: THEME,
  body: [
    ui.nav({ title: 'Раунд 1', trailing: ui.iconButton({ icon: 'tv', label: 'Вечер у Саши', go: 'room' }) }),
    ui.scroll([
      ui.section({ children: [
        taskCard(ui, { n: 1, task: tasks.desk, sub: '10 секунд на ответ · идёт на телевизоре «Гостиная»' }),
        ui.actions(ui.button({ label: 'Снять ответ', icon: 'video', block: true, ask: 'camera+mic|camera|round', primary: true }), { className: 'vy-task-actions' }),
      ] }),
      ui.denied('camera,mic'),
      ui.section({ title: 'Ответы раунда', meta: `${roundAnswers.length} из ${tonight.players.length}`, children: ui.list(roundAnswers.map((a) =>
        ui.row({ thumb: a.art, wide: true, duration: a.dur, title: a.who.name, sub: a.sub })).concat([
        ui.row({ thumb: frame, wide: true, title: 'Илья Ветров', sub: 'Снимает ответ' }),
      ])) }),
    ]),
  ],
});
