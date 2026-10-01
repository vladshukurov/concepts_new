import { THEME } from './_shared.mjs';
import { people, club } from '../model.mjs';

export default (ui) => ui.screen({
  id: 'friends', theme: THEME,
  body: [
    ui.nav({ title: 'Знакомые в клубе' }),
    ui.scroll([
      ui.section({ children: [ui.search({ placeholder: 'Имя участника' }), ui.actions([
        ui.button({ label: 'Найти знакомых', icon: 'users', block: true, ask: 'contacts|match|friends', primary: true }),
        ui.button({ label: 'Пригласить ссылкой', icon: 'link', variant: 'secondary', block: true, go: 'invite' }),
      ], { className: 'ry-gap' })] }),
      ui.denied('contacts', 'Найдите участника по имени или пригласите ссылкой'),
      ui.section({ title: `В ${club.name}`, meta: String(club.members), children: ui.list(['alina', 'ilya', 'dasha', 'lera'].map((k) =>
        ui.row({ lead: ui.avatar(people[k].initial), title: people[k].name, sub: people[k].about, go: 'chat' }))) }),
    ]),
  ],
});
