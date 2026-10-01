import { THEME } from './_shared.mjs';
import { lamp } from '../model.mjs';

const items = [['Замерить кольцо', true], ['Подобрать ткань', false], ['Проверить крепление', false]];
export default (ui) => ui.screen({
  id: 'task', theme: THEME,
  body: [
    ui.nav({ title: 'Задача' }),
    ui.scroll([
      ui.section({ children: `<div class="uz-item"><small>${lamp.title} · следующий этап</small><strong>Подобрать ${lamp.next.toLowerCase()}</strong><span>Ведёт ${lamp.owner.name} · срок ${lamp.due}</span></div>` }),
      ui.section({ title: 'Чек-лист', children: items.map(([t, done]) => `<div class="uz-check${done ? ' is-done' : ''}"><span>${done ? ui.icon('check') : ''}</span>${t}</div>`).join('') }),
      ui.section({ children: ui.actions([
        ui.button({ label: 'Записать заметку осмотра', icon: 'mic', block: true, ask: 'mic+speech|note|note', primary: true }),
        ui.button({ label: 'Отметить готовность', variant: 'secondary', block: true, toast: 'Статус задачи обновлён|project' }),
        ui.button({ label: 'Передать задачу', variant: 'tertiary', block: true, go: 'handoff' }),
      ]) }),
    ]),
  ],
});
