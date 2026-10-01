import { THEME } from './_shared.mjs';
import { people, lamp } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'handoff', theme: THEME,
  body: [
    ui.nav({ title: 'Передать задачу', back: 'close' }),
    ui.scroll([
      ui.section({ children: ui.list([ui.row({ lead: ui.leadIcon('lamp', { accent: true }), title: `${lamp.title} · абажур`, sub: 'Следующий получит статус, чек-лист и срок' })]) }),
      ui.section({ title: 'Кому', children: ui.list([
        ui.row({ lead: ui.avatar(people.marina.initial), title: people.marina.name, sub: people.marina.about, end: { icon: 'check' } }),
        ui.row({ lead: ui.avatar(people.anton.initial), title: people.anton.name, sub: people.anton.about }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Передать задачу', block: true, toast: 'Задача передана Марине|project', primary: true })]) }),
    ]),
  ],
});
