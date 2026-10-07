import { THEME } from './_shared.mjs';
import { field } from './_form.mjs';
import { people } from '../model.mjs';

/* Новый чат: название и кого позвать — так заводят семью или чат бабушек и дедушек */
const pick = [
  [people.timur, true], [people.roza, true], [people.galya, true], [people.oksana, false], [people.danya, false],
];
export default (ui) => ui.screen({
  id: 'newchat', theme: THEME,
  body: [
    ui.nav({ title: 'Новый чат', back: 'close', trailing: ui.textButton({ label: 'Создать', strong: true, toast: 'Чат «Бабушки и внуки» создан|chats' }) }),
    ui.scroll([
      ui.section({ children: field('Название', 'Бабушки и внуки') }),
      ui.section({ title: 'Участники', meta: 'выбрано 3', children: ui.list(pick.map(([p, on]) => ui.row({
        lead: ui.avatar(p.initial), title: p.name, sub: on ? 'в чате' : 'не выбран',
        end: { icon: on ? 'circle-check' : 'circle', toast: on ? `${p.short} убран из чата` : `${p.short} добавлен в чат`, label: `${on ? 'Убрать' : 'Добавить'}: ${p.name}` },
      }))) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Создать чат', block: true, toast: 'Чат «Бабушки и внуки» создан|chats', primary: true })]) }),
    ]),
  ],
});
