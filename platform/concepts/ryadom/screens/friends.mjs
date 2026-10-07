import { THEME } from './_shared.mjs';
import { people, club } from '../model.mjs';

/* Участники клуба: личный диалог есть с Дашей, остальные — в чате тренировки */
export default (ui) => ui.screen({
  id: 'friends', theme: THEME,
  body: [
    ui.nav({ title: 'Знакомые в клубе' }),
    ui.scroll([
      ui.section({ children: [ui.search({ placeholder: 'Имя участника' }), ui.actions([
        ui.button({ label: 'Пригласить ссылкой', icon: 'link', variant: 'secondary', block: true, go: 'invite', primary: true }),
      ], { className: 'ry-gap' })] }),
      ui.section({ title: `В ${club.name}`, meta: String(club.members), children: ui.list([
        ui.row({ lead: ui.avatar(people.dasha.initial), title: people.dasha.name, sub: 'Утренняя группа · опаздывает на лонгран', go: 'direct' }),
        ...['alina', 'ilya', 'lera', 'roman'].map((k) => ui.row({ lead: ui.avatar(people[k].initial), title: people[k].name, sub: people[k].about })),
      ]) }),
    ]),
  ],
});
