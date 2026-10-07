import { THEME } from './_shared.mjs';
import { field } from './_form.mjs';
import { people } from '../model.mjs';

/* Новое занятие в расписание детей: кто, что, когда, где и кто забирает */
export default (ui) => ui.screen({
  id: 'newclass', theme: THEME,
  body: [
    ui.nav({ title: 'Новое занятие', back: 'close', trailing: ui.textButton({ label: 'Готово', strong: true, toast: 'Робототехника Дани добавлена в расписание|home' }) }),
    ui.scroll([
      ui.section({ children: ui.segments([
        { label: people.danya.short, on: true },
        { label: people.mila.short },
      ].map((s) => ({ ...s, toast: `Занятие для: ${s.label}` }))) }),
      ui.section({ children: [
        field('Кружок', 'Робототехника'),
        field('Дни и время', 'чт · 17:00–18:30'),
        field('Адрес', 'Центр «Квант», Баумана, 44'),
        field('Забирает', 'Тимур'),
      ] }),
      ui.section({ children: ui.actions([ui.button({ label: 'Добавить в расписание', block: true, toast: 'Робототехника Дани добавлена в расписание|home', primary: true })]) }),
    ]),
  ],
});
