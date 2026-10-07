import { THEME } from './_shared.mjs';
import { field } from './_form.mjs';
import { people, clubs } from '../model.mjs';

const CLUB_ICON = { 'Бассейн': 'droplets', 'Шахматы': 'trophy', 'Рисование': 'palette', 'Английский': 'book-open' };
const danyas = clubs.list.filter(([who]) => who === people.danya.short);

/* Новое занятие в расписание детей: кто, что, когда, где и кто забирает */
export default (ui) => ui.screen({
  id: 'newclass', theme: THEME,
  body: [
    ui.nav({ title: 'Новое занятие', back: 'close', trailing: ui.textButton({ label: 'Готово', strong: true, toast: 'Робототехника Дани добавлена в расписание|schedule' }) }),
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
      ui.section({ title: 'Кружки Дани', meta: `${danyas.length} кружка`, children: ui.list(danyas.map(([, what, when]) => ui.row({
        lead: ui.leadIcon(CLUB_ICON[what] || 'calendar', { round: true, accent: true }), title: what, sub: when,
      }))) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Добавить в расписание', block: true, toast: 'Робототехника Дани добавлена в расписание|schedule', primary: true })]) }),
    ]),
  ],
});
