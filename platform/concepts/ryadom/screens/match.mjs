import { THEME } from './_shared.mjs';

const add = (name) => ({ value: 'Добавить', toast: 'Добавлен в знакомые', label: `Добавить: ${name}` });
export default (ui) => ui.screen({
  id: 'match', theme: THEME,
  body: [
    ui.nav({ title: 'Нашлись в книге' }),
    ui.scroll([
      ui.granted('contacts', 'Девять человек из книги уже в клубе'),
      ui.section({ title: 'Похоже, из клуба', meta: '9', children: ui.list([
        ui.row({ lead: ui.avatar('ЛК'), title: 'Людмила Ковалёва', sub: 'Плавание по четвергам', end: add('Людмила Ковалёва') }),
        ui.row({ lead: ui.avatar('МГ'), title: 'Максим Громов', sub: 'В книге «Максим вело» · 6 общих', end: add('Максим Громов') }),
        ui.row({ lead: ui.avatar('ЕС'), title: 'Елена Сон', sub: 'Утренняя группа · 3 общих', end: add('Елена Сон') }),
      ]) }),
      ui.section({ children: ui.actions([ui.button({ label: 'Добавить всех', block: true, toast: 'Добавлено 9 знакомых|friends', primary: true })]) }),
    ]),
  ],
});
