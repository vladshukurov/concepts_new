import { THEME } from './_shared.mjs';
import { people } from '../model.mjs';

/* Новое сообщение: выбрать человека из клуба и написать первую строку */
export default (ui) => ui.screen({
  id: 'newmsg', theme: THEME,
  body: [
    ui.nav({ title: 'Новое сообщение', back: 'cancel' }),
    ui.scroll([
      ui.section({ children: ui.search({ placeholder: 'Кому' }) }),
      ui.section({ title: 'Из клуба', children: ui.list([people.dasha, people.ilya, people.alina, people.roman, people.lera].map((p, i) =>
        ui.row({ lead: ui.avatar(p.initial), title: p.name, sub: p.about, go: i === 0 ? 'direct' : i === 1 ? 'chat' : undefined, toast: i > 1 ? `Новый диалог: ${p.first}` : undefined }))) }),
    ]),
  ],
});
