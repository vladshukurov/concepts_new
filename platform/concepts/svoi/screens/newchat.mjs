import { THEME } from './_shared.mjs';
import { field } from './_form.mjs';
import { people } from '../model.mjs';

/* Новый чат: название и кого позвать — так заводят семью или чат бабушек и дедушек */
const picked = [people.timur, people.roza, people.galya];
const rest = [[people.danya, 'сын · дома'], [people.mila, 'дочь · пишет голосовыми'], [people.oksana, 'няня · была в 15:34']];
export default (ui) => ui.screen({
  id: 'newchat', theme: THEME,
  body: [
    ui.nav({ title: 'Новый чат', back: 'close', trailing: ui.textButton({ label: 'Создать', strong: true, toast: 'Чат «Бабушки и внуки» создан|chats' }) }),
    ui.scroll([
      ui.section({ children: field('Название', 'Бабушки и внуки') }),
      ui.section({ title: 'Участники', meta: `выбрано ${picked.length}`, children: ui.list(picked.map((p) => ui.row({
        lead: ui.avatar(p.initial), title: p.name, sub: 'в чате',
        end: { icon: 'circle-check', toast: `${p.short} убран из чата`, label: `Убрать: ${p.name}` },
      }))) }),
      ui.section({ title: 'Семья и близкие', children: ui.list(rest.map(([p, sub]) => ui.row({
        lead: ui.avatar(p.initial), title: p.name, sub,
        end: { icon: 'circle', toast: `${p.short} добавлен в чат`, label: `Добавить: ${p.name}` },
      }))) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Создать чат', block: true, toast: 'Чат «Бабушки и внуки» создан|chats', primary: true })]) }),
    ]),
  ],
});
