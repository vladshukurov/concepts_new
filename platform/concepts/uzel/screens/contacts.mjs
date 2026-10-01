import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'contacts', theme: THEME,
  body: [
    ui.nav({ title: 'Участники клуба' }),
    ui.scroll([
      ui.section({ children: [ui.search({ placeholder: 'Имя, навык или мастерская' }), ui.actions([ui.button({ label: 'Найти участников', icon: 'users', variant: 'secondary', block: true, ask: 'contacts|contacts|contacts', primary: true })], { className: 'uz-gap' })] }),
      ui.granted('contacts', 'Двое из ваших контактов уже в клубе'),
      ui.denied('contacts', 'Ищите по имени, навыку или мастерской'),
      ui.section({ title: 'Знакомые', children: ui.list(['marina', 'anton', 'irina'].map((k) => ui.row({ lead: ui.avatar(people[k].initial), title: people[k].name, sub: people[k].about, go: 'chat' }))) }),
    ]),
  ],
});
