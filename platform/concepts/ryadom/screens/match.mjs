import { THEME } from './_shared.mjs';

const add = (name) => ({ value: 'Добавить', toast: 'Добавлен в знакомые', label: `Добавить: ${name}` });
export default (ui) => ui.screen({
  id: 'match', theme: THEME,
  body: [
    ui.nav({ title: 'Нашлись в книге' }),
    ui.scroll([ui.section({ title: 'Похоже, из клуба', meta: '9', children: ui.list([
        ui.row({ lead: ui.avatar('ЛК'), title: 'Людмила Ковалёва', sub: 'Бегает по четвергам', end: add('Людмила Ковалёва') }),
        ui.row({ lead: ui.avatar('МГ'), title: 'Максим Громов', sub: 'В книге «Максим вело» · бегает по средам', end: add('Максим Громов') }),
        ui.row({ lead: ui.avatar('ЕС'), title: 'Елена Сон', sub: 'Утренняя группа · в клубе с весны', end: add('Елена Сон') }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Добавить всех', block: true, toast: 'Добавлено 9 знакомых|friends', primary: true })]) }),
    ]),
  ],
});
